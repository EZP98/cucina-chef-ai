// POST /api/conversations/sync - Bulk sync conversations from local storage

import { getUserFromRequest, generateId } from '../../lib/auth';

interface Env {
  DB: D1Database;
  JWT_SECRET: string;
}

interface LocalMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  parsedRecipe?: object;
  quickReplies?: string[];
}

interface LocalConversation {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  messages: LocalMessage[];
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const payload = await getUserFromRequest(request, env.JWT_SECRET);
    if (!payload) {
      return new Response(JSON.stringify({ error: 'Non autorizzato' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const { conversations } = await request.json() as {
      conversations: LocalConversation[];
    };

    if (!conversations || !Array.isArray(conversations)) {
      return new Response(JSON.stringify({ error: 'Formato non valido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    let syncedConversations = 0;
    let syncedMessages = 0;

    for (const conv of conversations) {
      // Check if conversation already exists
      const existing = await env.DB.prepare(
        'SELECT id FROM conversations WHERE id = ? AND user_id = ?'
      ).bind(conv.id, payload.sub).first();

      if (!existing) {
        // Create conversation
        await env.DB.prepare(
          'INSERT INTO conversations (id, user_id, title, created_at, updated_at) VALUES (?, ?, ?, ?, ?)'
        ).bind(conv.id, payload.sub, conv.title, conv.createdAt, conv.updatedAt).run();
        syncedConversations++;

        // Insert all messages
        for (const msg of conv.messages) {
          await env.DB.prepare(
            'INSERT INTO messages (id, conversation_id, role, content, timestamp, parsed_recipe, quick_replies) VALUES (?, ?, ?, ?, ?, ?, ?)'
          ).bind(
            msg.id,
            conv.id,
            msg.role,
            msg.content,
            msg.timestamp,
            msg.parsedRecipe ? JSON.stringify(msg.parsedRecipe) : null,
            msg.quickReplies ? JSON.stringify(msg.quickReplies) : null
          ).run();
          syncedMessages++;
        }
      }
    }

    return new Response(JSON.stringify({
      success: true,
      syncedConversations,
      syncedMessages,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Sync error:', error);
    return new Response(JSON.stringify({ error: 'Errore durante la sincronizzazione' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};
