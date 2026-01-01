// GET /api/share/:id - Get a shared recipe

interface Env {
  DB: D1Database;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

interface SharedRecipeRow {
  id: string;
  name: string;
  time: string | null;
  servings: string | null;
  ingredients: string;
  steps: string;
  tips: string | null;
  created_at: number;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { env, params } = context;
  const shareId = params.id as string;

  try {
    const recipe = await env.DB.prepare(
      'SELECT * FROM shared_recipes WHERE id = ?'
    ).bind(shareId).first<SharedRecipeRow>();

    if (!recipe) {
      return new Response(JSON.stringify({ error: 'Ricetta non trovata' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({
      id: recipe.id,
      name: recipe.name,
      time: recipe.time,
      servings: recipe.servings,
      ingredients: JSON.parse(recipe.ingredients),
      steps: JSON.parse(recipe.steps),
      tips: recipe.tips ? JSON.parse(recipe.tips) : null,
      createdAt: recipe.created_at,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Share fetch error:', error);
    return new Response(JSON.stringify({ error: 'Errore nel recupero della ricetta' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};
