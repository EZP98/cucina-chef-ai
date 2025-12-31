// DELETE/PATCH /api/recipes/[id] - Delete or update a recipe

import { getUserFromRequest } from '../../lib/auth';

interface Env {
  DB: D1Database;
  JWT_SECRET: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'DELETE, PATCH, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// DELETE - Remove a recipe
export const onRequestDelete: PagesFunction<Env> = async (context) => {
  const { request, env, params } = context;
  const recipeId = params.id as string;

  try {
    const payload = await getUserFromRequest(request, env.JWT_SECRET);
    if (!payload) {
      return new Response(JSON.stringify({ error: 'Non autorizzato' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Check ownership before deleting
    const existing = await env.DB.prepare(
      'SELECT id FROM saved_recipes WHERE id = ? AND user_id = ?'
    ).bind(recipeId, payload.sub).first();

    if (!existing) {
      return new Response(JSON.stringify({ error: 'Ricetta non trovata' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    await env.DB.prepare(
      'DELETE FROM saved_recipes WHERE id = ? AND user_id = ?'
    ).bind(recipeId, payload.sub).run();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Delete recipe error:', error);
    return new Response(JSON.stringify({ error: 'Errore nella cancellazione' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

// PATCH - Toggle favorite status
export const onRequestPatch: PagesFunction<Env> = async (context) => {
  const { request, env, params } = context;
  const recipeId = params.id as string;

  try {
    const payload = await getUserFromRequest(request, env.JWT_SECRET);
    if (!payload) {
      return new Response(JSON.stringify({ error: 'Non autorizzato' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const { isFavorite } = await request.json() as { isFavorite: boolean };

    // Check ownership before updating
    const existing = await env.DB.prepare(
      'SELECT id FROM saved_recipes WHERE id = ? AND user_id = ?'
    ).bind(recipeId, payload.sub).first();

    if (!existing) {
      return new Response(JSON.stringify({ error: 'Ricetta non trovata' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    await env.DB.prepare(
      'UPDATE saved_recipes SET is_favorite = ? WHERE id = ? AND user_id = ?'
    ).bind(isFavorite ? 1 : 0, recipeId, payload.sub).run();

    return new Response(JSON.stringify({ success: true, isFavorite }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Update recipe error:', error);
    return new Response(JSON.stringify({ error: 'Errore nell\'aggiornamento' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};
