// Menus API - List and Create

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

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

// GET /api/menus - List all menus for user
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

  try {
    const results = await context.env.DB.prepare(
      'SELECT * FROM menus WHERE user_id = ? ORDER BY created_at DESC'
    ).bind(payload.sub).all<Menu>();

    const menus = results.results.map(m => ({
      id: m.id,
      name: m.name,
      occasion: m.occasion,
      courses: JSON.parse(m.courses),
      winePairing: m.wine_pairing,
      note: m.note,
      isFavorite: m.is_favorite === 1,
      createdAt: m.created_at,
    }));

    return Response.json({ menus });
  } catch (e) {
    console.error('Error fetching menus:', e);
    return Response.json({ error: 'Database error' }, { status: 500 });
  }
};

// POST /api/menus - Create a new menu
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const authHeader = context.request.headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.slice(7);
  const payload = await verifyJWT(token, context.env.JWT_SECRET);
  if (!payload) {
    return Response.json({ error: 'Invalid token' }, { status: 401 });
  }

  try {
    const body = await context.request.json() as {
      name: string;
      occasion?: string;
      courses: Array<{ type: string; name: string; description?: string }>;
      winePairing?: string;
      note?: string;
    };

    if (!body.name || !body.courses) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const id = generateId();
    const now = Date.now();

    await context.env.DB.prepare(`
      INSERT INTO menus (id, user_id, name, occasion, courses, wine_pairing, note, is_favorite, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?)
    `).bind(
      id,
      payload.sub,
      body.name,
      body.occasion || null,
      JSON.stringify(body.courses),
      body.winePairing || null,
      body.note || null,
      now
    ).run();

    const menu = {
      id,
      name: body.name,
      occasion: body.occasion || null,
      courses: body.courses,
      winePairing: body.winePairing || null,
      note: body.note || null,
      isFavorite: false,
      createdAt: now,
    };

    return Response.json({ menu }, { status: 201 });
  } catch (e) {
    console.error('Error creating menu:', e);
    return Response.json({ error: 'Database error' }, { status: 500 });
  }
};
