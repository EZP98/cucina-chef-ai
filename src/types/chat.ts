// Chat Types for Chef AI

export interface ParsedRecipe {
  name: string;
  description?: string;
  servings?: string;
  time?: string;
  ingredients: string[];
  steps: string[];
  tips?: string[];
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  parsedRecipe?: ParsedRecipe;
  quickReplies?: string[];
}

export interface Conversation {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  messages: Message[];
}

export const STORAGE_KEYS = {
  conversations: 'chef-ai-conversations',
  activeConversationId: 'chef-ai-active-conversation',
} as const;
