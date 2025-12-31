// Pantry Item API - DELETE, PATCH single item
import { verifyJWT } from '../../lib/auth';

interface Env {
  DB: D1Database;
  JWT_SECRET: string;
}

// DELETE /api/pantry/:id - Delete a pantry item
export const onRequestDelete: PagesFunction<Env> = async (context) => {
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

  const itemId = context.params.id as string;

  try {
    // Verify item belongs to user
    const existing = await context.env.DB.prepare(
      'SELECT id FROM pantry_items WHERE id = ? AND user_id = ?'
    ).bind(itemId, payload.sub).first();

    if (!existing) {
      return new Response(JSON.stringify({ error: 'Item not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await context.env.DB.prepare(
      'DELETE FROM pantry_items WHERE id = ? AND user_id = ?'
    ).bind(itemId, payload.sub).run();

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Delete pantry item error:', error);
    return new Response(JSON.stringify({ error: 'Database error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// PATCH /api/pantry/:id - Update a pantry item
export const onRequestPatch: PagesFunction<Env> = async (context) => {
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

  const itemId = context.params.id as string;

  try {
    // Verify item belongs to user
    const existing = await context.env.DB.prepare(
      'SELECT * FROM pantry_items WHERE id = ? AND user_id = ?'
    ).bind(itemId, payload.sub).first();

    if (!existing) {
      return new Response(JSON.stringify({ error: 'Item not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await context.request.json() as {
      name?: string;
      quantity?: string;
      unit?: string;
      category?: string;
      expiring?: boolean;
      expiresAt?: number;
    };

    const now = Date.now();

    // Build update query dynamically
    const updates: string[] = ['updated_at = ?'];
    const values: (string | number | null)[] = [now];

    if (body.name !== undefined) {
      updates.push('name = ?');
      values.push(body.name);
    }
    if (body.quantity !== undefined) {
      updates.push('quantity = ?');
      values.push(body.quantity);
    }
    if (body.unit !== undefined) {
      updates.push('unit = ?');
      values.push(body.unit);
    }
    if (body.category !== undefined) {
      updates.push('category = ?');
      values.push(body.category);
    }
    if (body.expiring !== undefined) {
      updates.push('expiring = ?');
      values.push(body.expiring ? 1 : 0);
    }
    if (body.expiresAt !== undefined) {
      updates.push('expires_at = ?');
      values.push(body.expiresAt);
    }

    values.push(itemId, payload.sub);

    await context.env.DB.prepare(
      `UPDATE pantry_items SET ${updates.join(', ')} WHERE id = ? AND user_id = ?`
    ).bind(...values).run();

    // Fetch updated item
    const updated = await context.env.DB.prepare(
      'SELECT * FROM pantry_items WHERE id = ?'
    ).bind(itemId).first() as Record<string, unknown>;

    const item = {
      id: updated.id,
      name: updated.name,
      quantity: updated.quantity,
      unit: updated.unit,
      category: updated.category,
      expiring: updated.expiring === 1,
      expiresAt: updated.expires_at,
      createdAt: updated.created_at,
      updatedAt: updated.updated_at,
    };

    return new Response(JSON.stringify({ item }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Update pantry item error:', error);
    return new Response(JSON.stringify({ error: 'Database error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
