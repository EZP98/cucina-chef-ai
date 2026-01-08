// GET/POST /api/conversations/:id/messages - Get or add messages

import { getUserFromRequest, generateId } from '../../../lib/auth';

interface Env {
  DB: D1Database;
  JWT_SECRET: string;
}

interface MessageRow {
  id: string;
  role: string;
  content: string;
  timestamp: number;
  parsed_recipe: string | null;
  quick_replies: string | null;
}

// Sanitize parsed recipe to handle corrupted data
function sanitizeRecipe(recipe: unknown): unknown {
  if (!recipe || typeof recipe !== 'object') return recipe;

  const r = recipe as Record<string, unknown>;

  // Ensure tips is always an array (fix corrupted data where tips is a string)
  if (r.tips && typeof r.tips === 'string') {
    try {
      r.tips = JSON.parse(r.tips as string);
    } catch {
      // If it can't be parsed, wrap in array or set to empty
      r.tips = [];
    }
  }

  // Ensure ingredients and steps are arrays
  if (r.ingredients && !Array.isArray(r.ingredients)) r.ingredients = [];
  if (r.steps && !Array.isArray(r.steps)) r.steps = [];

  return r;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Verify conversation ownership
async function verifyOwnership(db: D1Database, conversationId: string, userId: string): Promise<boolean> {
  const conversation = await db.prepare(
    'SELECT user_id FROM conversations WHERE id = ?'
  ).bind(conversationId).first<{ user_id: string }>();

  return conversation?.user_id === userId;
}

// GET - Get all messages for a conversation
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env, params } = context;
  const conversationId = params.id as string;

  try {
    const payload = await getUserFromRequest(request, env.JWT_SECRET);
    if (!payload) {
      return new Response(JSON.stringify({ error: 'Non autorizzato' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    if (!await verifyOwnership(env.DB, conversationId, payload.sub)) {
      return new Response(JSON.stringify({ error: 'Non autorizzato' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const messages = await env.DB.prepare(
      'SELECT id, role, content, timestamp, parsed_recipe, quick_replies FROM messages WHERE conversation_id = ? ORDER BY timestamp ASC'
    ).bind(conversationId).all<MessageRow>();

    return new Response(JSON.stringify({
      messages: messages.results.map(m => ({
        id: m.id,
        role: m.role,
        content: m.content,
        timestamp: m.timestamp,
        parsedRecipe: m.parsed_recipe ? sanitizeRecipe(JSON.parse(m.parsed_recipe)) : undefined,
        quickReplies: m.quick_replies ? JSON.parse(m.quick_replies) : undefined,
      })),
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Get messages error:', error);
    return new Response(JSON.stringify({ error: 'Errore nel recupero dei messaggi' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

// POST - Add message(s) to a conversation
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env, params } = context;
  const conversationId = params.id as string;

  try {
    const payload = await getUserFromRequest(request, env.JWT_SECRET);
    if (!payload) {
      return new Response(JSON.stringify({ error: 'Non autorizzato' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    if (!await verifyOwnership(env.DB, conversationId, payload.sub)) {
      return new Response(JSON.stringify({ error: 'Non autorizzato' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const body = await request.json() as {
      messages?: Array<{
        id?: string;
        role: 'user' | 'assistant';
        content: string;
        timestamp?: number;
        parsedRecipe?: object;
        quickReplies?: string[];
      }>;
      message?: {
        id?: string;
        role: 'user' | 'assistant';
        content: string;
        timestamp?: number;
        parsedRecipe?: object;
        quickReplies?: string[];
      };
    };

    // Support both single message and array
    const messagesToAdd = body.messages || (body.message ? [body.message] : []);

    if (messagesToAdd.length === 0) {
      return new Response(JSON.stringify({ error: 'Nessun messaggio da aggiungere' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const now = Date.now();
    const insertedMessages = [];

    for (const msg of messagesToAdd) {
      const messageId = msg.id || generateId();
      const timestamp = msg.timestamp || now;

      await env.DB.prepare(
        'INSERT OR REPLACE INTO messages (id, conversation_id, role, content, timestamp, parsed_recipe, quick_replies) VALUES (?, ?, ?, ?, ?, ?, ?)'
      ).bind(
        messageId,
        conversationId,
        msg.role,
        msg.content,
        timestamp,
        msg.parsedRecipe ? JSON.stringify(msg.parsedRecipe) : null,
        msg.quickReplies ? JSON.stringify(msg.quickReplies) : null
      ).run();

      insertedMessages.push({
        id: messageId,
        role: msg.role,
        content: msg.content,
        timestamp,
        parsedRecipe: msg.parsedRecipe,
        quickReplies: msg.quickReplies,
      });
    }

    // Update conversation updated_at
    await env.DB.prepare(
      'UPDATE conversations SET updated_at = ? WHERE id = ?'
    ).bind(now, conversationId).run();

    return new Response(JSON.stringify({
      messages: insertedMessages,
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Add messages error:', error);
    return new Response(JSON.stringify({ error: 'Errore nell\'aggiunta dei messaggi' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};
