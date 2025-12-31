// GET/POST /api/recipes - List and save recipes

import { getUserFromRequest, generateId } from '../../lib/auth';

interface Env {
  DB: D1Database;
  JWT_SECRET: string;
}

interface RecipeRow {
  id: string;
  name: string;
  time: string | null;
  servings: string | null;
  ingredients: string | null;
  steps: string | null;
  note: string | null;
  is_favorite: number;
  created_at: number;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// GET - List all saved recipes for user
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const payload = await getUserFromRequest(request, env.JWT_SECRET);
    if (!payload) {
      return new Response(JSON.stringify({ error: 'Non autorizzato' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const recipes = await env.DB.prepare(
      'SELECT id, name, time, servings, ingredients, steps, note, is_favorite, created_at FROM saved_recipes WHERE user_id = ? ORDER BY created_at DESC'
    ).bind(payload.sub).all<RecipeRow>();

    return new Response(JSON.stringify({
      recipes: recipes.results.map(r => ({
        id: r.id,
        name: r.name,
        time: r.time,
        servings: r.servings,
        ingredients: r.ingredients ? JSON.parse(r.ingredients) : [],
        steps: r.steps ? JSON.parse(r.steps) : [],
        note: r.note,
        isFavorite: r.is_favorite === 1,
        createdAt: r.created_at,
      })),
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('List recipes error:', error);
    return new Response(JSON.stringify({ error: 'Errore nel recupero delle ricette' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

// POST - Save a new recipe
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const payload = await getUserFromRequest(request, env.JWT_SECRET);
    if (!payload) {
      return new Response(JSON.stringify({ error: 'Non autorizzato' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const { name, time, servings, ingredients, steps, note } = await request.json() as {
      name: string;
      time?: string;
      servings?: string;
      ingredients?: string[];
      steps?: string[];
      note?: string;
    };

    if (!name) {
      return new Response(JSON.stringify({ error: 'Nome ricetta richiesto' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const recipeId = generateId();
    const now = Date.now();

    await env.DB.prepare(
      'INSERT INTO saved_recipes (id, user_id, name, time, servings, ingredients, steps, note, is_favorite, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    ).bind(
      recipeId,
      payload.sub,
      name,
      time || null,
      servings || null,
      ingredients ? JSON.stringify(ingredients) : null,
      steps ? JSON.stringify(steps) : null,
      note || null,
      0,
      now
    ).run();

    return new Response(JSON.stringify({
      recipe: {
        id: recipeId,
        name,
        time,
        servings,
        ingredients: ingredients || [],
        steps: steps || [],
        note,
        isFavorite: false,
        createdAt: now,
      },
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Save recipe error:', error);
    return new Response(JSON.stringify({ error: 'Errore nel salvataggio della ricetta' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};
