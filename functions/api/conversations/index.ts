// GET/POST /api/conversations - List and create conversations

import { getUserFromRequest, generateId } from '../../lib/auth';

interface Env {
  DB: D1Database;
  JWT_SECRET: string;
}

interface ConversationRow {
  id: string;
  title: string;
  created_at: number;
  updated_at: number;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// GET - List all conversations for user
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const payload = await getUserFromRequest(request, env.JWT_SECRET);
    if (!payload) {
      return new Response(JSON.stringify({ error: 'Non autorizzato' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const conversations = await env.DB.prepare(
      'SELECT id, title, created_at, updated_at FROM conversations WHERE user_id = ? ORDER BY updated_at DESC'
    ).bind(payload.sub).all<ConversationRow>();

    return new Response(JSON.stringify({
      conversations: conversations.results.map(c => ({
        id: c.id,
        title: c.title,
        createdAt: c.created_at,
        updatedAt: c.updated_at,
      })),
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('List conversations error:', error);
    return new Response(JSON.stringify({ error: 'Errore nel recupero delle conversazioni' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

// POST - Create a new conversation
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

    const { id, title, createdAt, updatedAt } = await request.json() as {
      id?: string;
      title?: string;
      createdAt?: number;
      updatedAt?: number;
    };

    const conversationId = id || generateId();
    const now = Date.now();

    await env.DB.prepare(
      'INSERT INTO conversations (id, user_id, title, created_at, updated_at) VALUES (?, ?, ?, ?, ?)'
    ).bind(
      conversationId,
      payload.sub,
      title || 'Nuova conversazione',
      createdAt || now,
      updatedAt || now
    ).run();

    return new Response(JSON.stringify({
      conversation: {
        id: conversationId,
        title: title || 'Nuova conversazione',
        createdAt: createdAt || now,
        updatedAt: updatedAt || now,
      },
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Create conversation error:', error);
    return new Response(JSON.stringify({ error: 'Errore nella creazione della conversazione' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};
