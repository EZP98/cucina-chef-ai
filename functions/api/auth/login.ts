// POST /api/auth/login - User login

import { verifyPassword, createJWT } from '../../lib/auth';

interface Env {
  DB: D1Database;
  JWT_SECRET: string;
}

interface UserRow {
  id: string;
  email: string;
  password_hash: string;
  name: string | null;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const { email, password } = await request.json() as {
      email?: string;
      password?: string;
    };

    // Validate input
    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Email e password sono obbligatori' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Find user
    const user = await env.DB.prepare(
      'SELECT id, email, password_hash, name FROM users WHERE email = ?'
    ).bind(email.toLowerCase()).first<UserRow>();

    if (!user) {
      return new Response(JSON.stringify({ error: 'Email o password non validi' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Verify password
    const validPassword = await verifyPassword(password, user.password_hash);
    if (!validPassword) {
      return new Response(JSON.stringify({ error: 'Email o password non validi' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Generate JWT
    const token = await createJWT(user.id, user.email, env.JWT_SECRET);

    return new Response(JSON.stringify({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      token,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ error: 'Errore durante il login' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};
