// =====================================================
// SINGLE SOURCE OF TRUTH - Recipe Categories
// Importato da: src/config/recipeCategories.ts
//               functions/api/chat.ts
// =====================================================

export const RECIPE_CATEGORY_KEYS = [
  'pasta',
  'meat',
  'fish',
  'soup',
  'salad',
  'bread',
  'pizza',
  'dessert',
  'egg',
  'cheese',
  'vegetable',
  'fruit',
  'drink',
  'sauce',
  'bowl',
] as const;

export type RecipeCategory = typeof RECIPE_CATEGORY_KEYS[number];

// Metadata per ogni categoria
export const RECIPE_CATEGORY_META: Record<RecipeCategory, { label: string; description: string }> = {
  pasta: { label: 'Pasta e Primi', description: 'pasta, risotto, primi piatti' },
  meat: { label: 'Carne', description: 'carne, arrosti, pollame' },
  fish: { label: 'Pesce', description: 'pesce, frutti di mare' },
  soup: { label: 'Zuppe', description: 'zuppe, minestre, brodi' },
  salad: { label: 'Insalate', description: 'insalate, piatti freddi' },
  bread: { label: 'Pane', description: 'pane, focacce, lievitati' },
  pizza: { label: 'Pizza', description: 'pizza, focaccia' },
  dessert: { label: 'Dolci', description: 'dolci, torte, gelati' },
  egg: { label: 'Uova', description: 'uova, frittate, omelette' },
  cheese: { label: 'Formaggi', description: 'formaggi, latticini' },
  vegetable: { label: 'Verdure', description: 'verdure, contorni' },
  fruit: { label: 'Frutta', description: 'frutta, macedonie' },
  drink: { label: 'Bevande', description: 'bevande, cocktail' },
  sauce: { label: 'Salse', description: 'salse, condimenti' },
  bowl: { label: 'Altro', description: 'altri piatti' },
};
