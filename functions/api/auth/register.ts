// POST /api/auth/register - User registration

import { hashPassword, createJWT, generateId, validateEmail, validatePassword } from '../../lib/auth';

interface Env {
  DB: D1Database;
  JWT_SECRET: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const { email, password, name } = await request.json() as {
      email?: string;
      password?: string;
      name?: string;
    };

    // Validate input
    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Email e password sono obbligatori' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    if (!validateEmail(email)) {
      return new Response(JSON.stringify({ error: 'Email non valida' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return new Response(JSON.stringify({ error: passwordValidation.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Check if email already exists
    const existing = await env.DB.prepare(
      'SELECT id FROM users WHERE email = ?'
    ).bind(email.toLowerCase()).first();

    if (existing) {
      return new Response(JSON.stringify({ error: 'Email già registrata' }), {
        status: 409,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Hash password and create user
    const userId = generateId();
    const passwordHash = await hashPassword(password);
    const now = Date.now();

    await env.DB.prepare(
      'INSERT INTO users (id, email, password_hash, name, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)'
    ).bind(userId, email.toLowerCase(), passwordHash, name || null, now, now).run();

    // Generate JWT
    const token = await createJWT(userId, email.toLowerCase(), env.JWT_SECRET);

    return new Response(JSON.stringify({
      user: {
        id: userId,
        email: email.toLowerCase(),
        name: name || null,
      },
      token,
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Registration error:', error);
    return new Response(JSON.stringify({ error: 'Errore durante la registrazione' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};
