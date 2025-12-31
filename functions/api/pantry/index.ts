// Pantry API - GET all items, POST new item
import { verifyJWT } from '../../lib/auth';

interface Env {
  DB: D1Database;
  JWT_SECRET: string;
}

// GET /api/pantry - Get all pantry items for user
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const authHeader = context.request.headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const token = authHeader.slice(7);
  const payload = await verifyJWT(token, context.env.JWT_SECRET);
  if (!payload) {
    return new Response(JSON.stringify({ error: 'Invalid token' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const result = await context.env.DB.prepare(
      'SELECT * FROM pantry_items WHERE user_id = ? ORDER BY created_at DESC'
    ).bind(payload.sub).all();

    const items = result.results.map((row: Record<string, unknown>) => ({
      id: row.id,
      name: row.name,
      quantity: row.quantity,
      unit: row.unit,
      category: row.category,
      expiring: row.expiring === 1,
      expiresAt: row.expires_at,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));

    return new Response(JSON.stringify({ items }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Get pantry error:', error);
    return new Response(JSON.stringify({ error: 'Database error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// POST /api/pantry - Add new pantry item
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const authHeader = context.request.headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const token = authHeader.slice(7);
  const payload = await verifyJWT(token, context.env.JWT_SECRET);
  if (!payload) {
    return new Response(JSON.stringify({ error: 'Invalid token' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await context.request.json() as {
      name: string;
      quantity?: string;
      unit?: string;
      category?: string;
      expiring?: boolean;
      expiresAt?: number;
    };

    if (!body.name) {
      return new Response(JSON.stringify({ error: 'Name is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const id = crypto.randomUUID();
    const now = Date.now();

    await context.env.DB.prepare(
      `INSERT INTO pantry_items (id, user_id, name, quantity, unit, category, expiring, expires_at, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      id,
      payload.sub,
      body.name,
      body.quantity || null,
      body.unit || null,
      body.category || null,
      body.expiring ? 1 : 0,
      body.expiresAt || null,
      now,
      now
    ).run();

    const item = {
      id,
      name: body.name,
      quantity: body.quantity || null,
      unit: body.unit || null,
      category: body.category || null,
      expiring: body.expiring || false,
      expiresAt: body.expiresAt || null,
      createdAt: now,
      updatedAt: now,
    };

    return new Response(JSON.stringify({ item }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Add pantry item error:', error);
    return new Response(JSON.stringify({ error: 'Database error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
