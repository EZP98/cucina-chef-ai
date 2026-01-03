// Menus API - Single menu operations

interface Env {
  DB: D1Database;
  JWT_SECRET: string;
}

interface JWTPayload {
  sub: string;
  email: string;
  iat: number;
  exp: number;
}

interface Menu {
  id: string;
  user_id: string;
  name: string;
  occasion: string | null;
  courses: string;
  wine_pairing: string | null;
  note: string | null;
  is_favorite: number;
  created_at: number;
}

async function verifyJWT(token: string, secret: string): Promise<JWTPayload | null> {
  try {
    const [headerB64, payloadB64, signatureB64] = token.split('.');
    if (!headerB64 || !payloadB64 || !signatureB64) return null;

    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const signatureValid = await crypto.subtle.verify(
      'HMAC',
      key,
      Uint8Array.from(atob(signatureB64.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0)),
      encoder.encode(`${headerB64}.${payloadB64}`)
    );

    if (!signatureValid) return null;

    const payload = JSON.parse(atob(payloadB64.replace(/-/g, '+').replace(/_/g, '/'))) as JWTPayload;

    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;

    return payload;
  } catch {
    return null;
  }
}

// GET /api/menus/:id - Get single menu
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const authHeader = context.request.headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.slice(7);
  const payload = await verifyJWT(token, context.env.JWT_SECRET);
  if (!payload) {
    return Response.json({ error: 'Invalid token' }, { status: 401 });
  }

  const menuId = context.params.id as string;

  try {
    const menu = await context.env.DB.prepare(
      'SELECT * FROM menus WHERE id = ? AND user_id = ?'
    ).bind(menuId, payload.sub).first<Menu>();

    if (!menu) {
      return Response.json({ error: 'Menu not found' }, { status: 404 });
    }

    return Response.json({
      menu: {
        id: menu.id,
        name: menu.name,
        occasion: menu.occasion,
        courses: JSON.parse(menu.courses),
        winePairing: menu.wine_pairing,
        note: menu.note,
        isFavorite: menu.is_favorite === 1,
        createdAt: menu.created_at,
      }
    });
  } catch (e) {
    console.error('Error fetching menu:', e);
    return Response.json({ error: 'Database error' }, { status: 500 });
  }
};

// DELETE /api/menus/:id - Delete menu
export const onRequestDelete: PagesFunction<Env> = async (context) => {
  const authHeader = context.request.headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.slice(7);
  const payload = await verifyJWT(token, context.env.JWT_SECRET);
  if (!payload) {
    return Response.json({ error: 'Invalid token' }, { status: 401 });
  }

  const menuId = context.params.id as string;

  try {
    const result = await context.env.DB.prepare(
      'DELETE FROM menus WHERE id = ? AND user_id = ?'
    ).bind(menuId, payload.sub).run();

    if (result.meta.changes === 0) {
      return Response.json({ error: 'Menu not found' }, { status: 404 });
    }

    return Response.json({ success: true });
  } catch (e) {
    console.error('Error deleting menu:', e);
    return Response.json({ error: 'Database error' }, { status: 500 });
  }
};

// PATCH /api/menus/:id - Update menu (toggle favorite, update note)
export const onRequestPatch: PagesFunction<Env> = async (context) => {
  const authHeader = context.request.headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.slice(7);
  const payload = await verifyJWT(token, context.env.JWT_SECRET);
  if (!payload) {
    return Response.json({ error: 'Invalid token' }, { status: 401 });
  }

  const menuId = context.params.id as string;

  try {
    const body = await context.request.json() as {
      isFavorite?: boolean;
      note?: string;
    };

    const updates: string[] = [];
    const values: (string | number)[] = [];

    if (body.isFavorite !== undefined) {
      updates.push('is_favorite = ?');
      values.push(body.isFavorite ? 1 : 0);
    }

    if (body.note !== undefined) {
      updates.push('note = ?');
      values.push(body.note);
    }

    if (updates.length === 0) {
      return Response.json({ error: 'No fields to update' }, { status: 400 });
    }

    values.push(menuId, payload.sub);

    const result = await context.env.DB.prepare(
      `UPDATE menus SET ${updates.join(', ')} WHERE id = ? AND user_id = ?`
    ).bind(...values).run();

    if (result.meta.changes === 0) {
      return Response.json({ error: 'Menu not found' }, { status: 404 });
    }

    return Response.json({ success: true });
  } catch (e) {
    console.error('Error updating menu:', e);
    return Response.json({ error: 'Database error' }, { status: 500 });
  }
};
