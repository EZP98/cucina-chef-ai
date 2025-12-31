// GET /api/auth/me - Get current user from JWT

import { getUserFromRequest } from '../../lib/auth';

interface Env {
  DB: D1Database;
  JWT_SECRET: string;
}

interface UserRow {
  id: string;
  email: string;
  name: string | null;
  created_at: number;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    // Verify JWT
    const payload = await getUserFromRequest(request, env.JWT_SECRET);

    if (!payload) {
      return new Response(JSON.stringify({ error: 'Non autorizzato' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Get user from DB
    const user = await env.DB.prepare(
      'SELECT id, email, name, created_at FROM users WHERE id = ?'
    ).bind(payload.sub).first<UserRow>();

    if (!user) {
      return new Response(JSON.stringify({ error: 'Utente non trovato' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.created_at,
      },
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Auth check error:', error);
    return new Response(JSON.stringify({ error: 'Errore di autenticazione' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};
