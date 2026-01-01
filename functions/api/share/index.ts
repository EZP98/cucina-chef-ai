// POST /api/share - Create a shared recipe

interface Env {
  DB: D1Database;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Generate short unique ID (6 chars)
function generateShareId(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < 6; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const body = await request.json() as {
      name: string;
      time?: string;
      servings?: string;
      ingredients: string[];
      steps: string[];
      tips?: string[];
    };

    if (!body.name || !body.ingredients || !body.steps) {
      return new Response(JSON.stringify({ error: 'Dati ricetta mancanti' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Generate unique short ID
    let shareId = generateShareId();
    let attempts = 0;

    // Check for collisions (unlikely but possible)
    while (attempts < 5) {
      const existing = await env.DB.prepare(
        'SELECT id FROM shared_recipes WHERE id = ?'
      ).bind(shareId).first();

      if (!existing) break;
      shareId = generateShareId();
      attempts++;
    }

    // Insert shared recipe
    await env.DB.prepare(
      'INSERT INTO shared_recipes (id, name, time, servings, ingredients, steps, tips) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).bind(
      shareId,
      body.name,
      body.time || null,
      body.servings || null,
      JSON.stringify(body.ingredients),
      JSON.stringify(body.steps),
      body.tips ? JSON.stringify(body.tips) : null
    ).run();

    return new Response(JSON.stringify({
      shareId,
      shareUrl: `https://gusto-8cx.pages.dev/share/${shareId}`,
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Share creation error:', error);
    return new Response(JSON.stringify({ error: 'Errore nella creazione del link' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};
