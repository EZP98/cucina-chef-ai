// useConversations Hook - Manages chat conversations with cloud DB only (no localStorage)

import { useState, useEffect, useCallback, useRef } from 'react';
import type { Conversation, Message } from '../types/chat';
import { parseRecipeFromText } from '../utils/recipeParser';
import { generateQuickReplies, type QuickReplyContext } from '../utils/quickReplies';
import { authFetch } from './useAuth';

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function generateTitle(firstMessage: string): string {
  // Take first 30 chars, clean up
  const clean = firstMessage.slice(0, 30).trim();
  return `${clean}${firstMessage.length > 30 ? '...' : ''}`;
}

export function useConversations(token: string | null) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Ref to always have current conversations (avoids stale closure)
  const conversationsRef = useRef<Conversation[]>(conversations);
  useEffect(() => {
    conversationsRef.current = conversations;
  }, [conversations]);

  // Load from cloud on mount when authenticated
  useEffect(() => {
    if (!token) {
      // Not authenticated - clear conversations
      setConversations([]);
      setActiveId(null);
      setIsLoaded(true);
      return;
    }

    // Load from cloud
    const loadConversations = async () => {
      try {
        const response = await authFetch('/api/conversations');
        if (response.ok) {
          const data = await response.json();
          if (data.conversations && Array.isArray(data.conversations)) {
            // Ensure each conversation has a messages array
            const validConvs = data.conversations.map((c: Conversation) => ({
              ...c,
              messages: c.messages || []
            }));
            setConversations(validConvs);
          }
        }
      } catch (e) {
        console.error('Error loading conversations:', e);
      }
      setIsLoaded(true);
    };

    loadConversations();
  }, [token]);

  // Get active conversation
  const activeConversation = conversations.find(c => c.id === activeId) || null;

  // Track which conversations have been loaded
  const [loadedConvIds, setLoadedConvIds] = useState<Set<string>>(new Set());

  // Load messages when activeId changes (if not already loaded)
  useEffect(() => {
    if (!token || !activeId) return;
    if (loadedConvIds.has(activeId)) return; // Already loaded

    const loadMessages = async () => {
      try {
        const response = await authFetch(`/api/conversations/${activeId}/messages`);
        if (response.ok) {
          const data = await response.json();
          if (data.messages && Array.isArray(data.messages)) {
            setConversations(prev => prev.map(c =>
              c.id === activeId
                ? { ...c, messages: data.messages }
                : c
            ));
            setLoadedConvIds(prev => new Set(prev).add(activeId));
          }
        }
      } catch (e) {
        console.error('Error loading messages:', e);
      }
    };
    loadMessages();
  }, [token, activeId, loadedConvIds]);

  // Create a new conversation (also saves to cloud)
  const createConversation = useCallback(async (): Promise<string> => {
    const newConversation: Conversation = {
      id: generateId(),
      title: 'Nuova chat',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      messages: [],
    };

    setConversations(prev => [newConversation, ...prev]);
    setActiveId(newConversation.id);

    // Save to cloud if authenticated
    if (token) {
      try {
        await authFetch('/api/conversations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: newConversation.id,
            title: newConversation.title,
          }),
        });
      } catch (e) {
        console.error('Error creating conversation on cloud:', e);
      }
    }

    return newConversation.id;
  }, [token]);

  // Delete a conversation (also deletes from cloud)
  const deleteConversation = useCallback(async (id: string) => {
    setConversations(prev => prev.filter(c => c.id !== id));

    if (activeId === id) {
      setActiveId(null);
    }

    // Delete from cloud if authenticated
    if (token) {
      try {
        await authFetch(`/api/conversations/${id}`, {
          method: 'DELETE',
        });
      } catch (e) {
        console.error('Error deleting conversation from cloud:', e);
      }
    }
  }, [activeId, token]);

  // Set active conversation
  const setActiveConversation = useCallback((id: string | null) => {
    setActiveId(id);
  }, []);

  // Add a message to the active conversation (returns message ID for streaming)
  const addMessage = useCallback((
    role: 'user' | 'assistant',
    content: string,
    conversationId?: string
  ): string => {
    const targetId = conversationId || activeId;
    const msgId = generateId();

    // For assistant messages, recipe/quickReplies will be added by finalizeMessage
    // after streaming is complete (with proper context)
    const newMessage: Message = {
      id: msgId,
      role,
      content,
      timestamp: Date.now(),
    };

    setConversations(prev => {
      return prev.map(conv => {
        if (conv.id === targetId) {
          const updatedMessages = [...conv.messages, newMessage];

          // Update title from first user message
          let newTitle = conv.title;
          if (role === 'user' && conv.messages.length === 0) {
            newTitle = generateTitle(content);
          }

          return {
            ...conv,
            messages: updatedMessages,
            title: newTitle,
            updatedAt: Date.now(),
          };
        }
        return conv;
      });
    });

    return msgId;
  }, [activeId]);

  // Update message content during streaming
  const updateMessageContent = useCallback((
    messageId: string,
    content: string,
    conversationId?: string
  ) => {
    const targetId = conversationId || activeId;

    setConversations(prev => prev.map(conv => {
      if (conv.id === targetId) {
        return {
          ...conv,
          messages: conv.messages.map(msg =>
            msg.id === messageId ? { ...msg, content } : msg
          ),
        };
      }
      return conv;
    }));
  }, [activeId]);

  // Finalize message after streaming (parse recipe/menu + quick replies)
  // If toolRecipe is provided (from tool use), use that instead of parsing from text
  // If toolMenu is provided (from tool use), store as parsedMenu
  // aiQuickReplies: if AI generated quick replies via tool, use those; otherwise fallback to local generation
  const finalizeMessage = useCallback((
    messageId: string,
    content: string,
    conversationId?: string,
    toolRecipe?: {
      name: string;
      icon?: string;
      category?: string;
      time?: string;
      servings?: string;
      difficulty?: 'facile' | 'media' | 'difficile';
      ingredients: string[];
      steps: string[];
      tips?: string[];
    },
    quickReplyContext?: Omit<QuickReplyContext, 'response' | 'recipe'>,
    aiQuickReplies?: string[],
    toolMenu?: {
      name: string;
      occasion?: string;
      courses: Array<{ type: string; name: string; description?: string }>;
      winePairing?: string;
      totalTime?: string;
      servings?: string;
    }
  ) => {
    const targetId = conversationId || activeId;

    // Use tool recipe if provided, otherwise parse from text
    const parsedRecipe = toolRecipe
      ? {
          name: toolRecipe.name,
          icon: toolRecipe.icon,
          category: toolRecipe.category as import('../types/chat').RecipeCategory | undefined,
          time: toolRecipe.time,
          servings: toolRecipe.servings,
          difficulty: toolRecipe.difficulty,
          ingredients: toolRecipe.ingredients,
          steps: toolRecipe.steps,
          tips: toolRecipe.tips,
        }
      : (parseRecipeFromText(content) ?? undefined);

    // Use tool menu if provided
    const parsedMenu = toolMenu
      ? {
          name: toolMenu.name,
          occasion: toolMenu.occasion,
          courses: toolMenu.courses.map(c => ({
            type: c.type as 'antipasto' | 'primo' | 'secondo' | 'contorno' | 'dolce' | 'aperitivo' | 'digestivo',
            name: c.name,
            description: c.description,
          })),
          winePairing: toolMenu.winePairing,
          totalTime: toolMenu.totalTime,
          servings: toolMenu.servings,
        }
      : undefined;

    // Use AI-generated quick replies if available, otherwise fallback to local generation
    const quickReplies = aiQuickReplies && aiQuickReplies.length > 0
      ? aiQuickReplies
      : generateQuickReplies({
          response: content,
          recipe: parsedRecipe || null,
          language: quickReplyContext?.language || 'it',
          menuMode: quickReplyContext?.menuMode,
          stellatoMode: quickReplyContext?.stellatoMode,
          recuperoMode: quickReplyContext?.recuperoMode,
        });

    setConversations(prev => prev.map(conv => {
      if (conv.id === targetId) {
        return {
          ...conv,
          messages: conv.messages.map(msg =>
            msg.id === messageId
              ? { ...msg, content, parsedRecipe, parsedMenu, quickReplies }
              : msg
          ),
          updatedAt: Date.now(),
        };
      }
      return conv;
    }));
  }, [activeId]);

  // Update message icon SVG (for recipe icons generated in background)
  const updateMessageIconSvg = useCallback((
    messageId: string,
    iconSvg: string,
    conversationId?: string
  ) => {
    const targetId = conversationId || activeId;
    setConversations(prev => prev.map(conv => {
      if (conv.id === targetId) {
        return {
          ...conv,
          messages: conv.messages.map(msg =>
            msg.id === messageId && msg.parsedRecipe
              ? { ...msg, parsedRecipe: { ...msg.parsedRecipe, iconSvg } }
              : msg
          ),
        };
      }
      return conv;
    }));
  }, [activeId]);

  // Get messages for the active conversation
  const messages = activeConversation?.messages || [];

  // Get history for API calls (role + content only)
  const getHistoryForApi = useCallback((): Array<{ role: string; content: string }> => {
    return messages.slice(-10).map(m => ({
      role: m.role,
      content: m.content,
    }));
  }, [messages]);

  // Clear all conversations
  const clearAll = useCallback(() => {
    setConversations([]);
    setActiveId(null);
  }, []);

  // Save conversation to cloud (call after adding messages when authenticated)
  const saveConversationToCloud = useCallback(async (conversationId: string) => {
    if (!token) return;

    // Use ref to get current conversations (avoids stale closure)
    const conv = conversationsRef.current.find(c => c.id === conversationId);
    if (!conv || conv.messages.length === 0) return;

    try {
      // Save all messages (the API should handle duplicates)
      for (const msg of conv.messages) {
        await authFetch(`/api/conversations/${conversationId}/messages`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: {
              id: msg.id,
              role: msg.role,
              content: msg.content,
              timestamp: msg.timestamp,
              parsedRecipe: msg.parsedRecipe,
              quickReplies: msg.quickReplies,
            }
          }),
        });
      }

      // Update title if changed
      if (conv.title !== 'Nuova chat') {
        await authFetch(`/api/conversations/${conversationId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: conv.title }),
        });
      }
    } catch (e) {
      console.error('Error saving to cloud:', e);
    }
  }, [token]);

  return {
    conversations,
    activeConversation,
    activeId,
    messages,
    isLoaded,
    createConversation,
    deleteConversation,
    setActiveConversation,
    addMessage,
    updateMessageContent,
    finalizeMessage,
    updateMessageIconSvg,
    getHistoryForApi,
    clearAll,
    saveConversationToCloud,
  };
}
