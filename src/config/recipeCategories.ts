// ============================================
// RECIPE CATEGORIES CONFIG (with icons)
// ============================================
// Imports category keys from shared/ (single source of truth)
// Adds React icon components for frontend use

import {
  RECIPE_CATEGORY_KEYS,
  RECIPE_CATEGORY_META,
  type RecipeCategory,
} from '../../shared/recipeCategories';

import {
  SketchEgg,
  SketchPasta,
  SketchFish,
  SketchSoup,
  SketchSalad,
  SketchBread,
  SketchPizza,
  SketchIceCream,
  SketchCheese,
  SketchCarrot,
  SketchLemon,
  SketchWine,
  SketchOil,
  SketchBowl,
  SketchChicken,
} from '../components/ui/SketchIllustrations';

// Re-export from shared
export { RECIPE_CATEGORY_KEYS, type RecipeCategory };

// Icon mapping (frontend only)
const CATEGORY_ICONS: Record<RecipeCategory, React.FC<{ size?: number }>> = {
  pasta: SketchPasta,
  meat: SketchChicken,
  fish: SketchFish,
  soup: SketchSoup,
  salad: SketchSalad,
  bread: SketchBread,
  pizza: SketchPizza,
  dessert: SketchIceCream,
  egg: SketchEgg,
  cheese: SketchCheese,
  vegetable: SketchCarrot,
  fruit: SketchLemon,
  drink: SketchWine,
  sauce: SketchOil,
  bowl: SketchBowl,
};

// Full config with icons (for frontend components)
export const RECIPE_CATEGORIES = Object.fromEntries(
  RECIPE_CATEGORY_KEYS.map(key => [
    key,
    {
      icon: CATEGORY_ICONS[key],
      label: RECIPE_CATEGORY_META[key].label,
      description: RECIPE_CATEGORY_META[key].description,
    }
  ])
) as Record<RecipeCategory, {
  icon: React.FC<{ size?: number }>;
  label: string;
  description: string;
}>;

// ============================================
// HELPERS
// ============================================

// Get icon component for a category
export const getCategoryIcon = (category: RecipeCategory) =>
  RECIPE_CATEGORIES[category].icon;

// Get label for a category
export const getCategoryLabel = (category: RecipeCategory) =>
  RECIPE_CATEGORIES[category].label;

// Generate enum description for Claude tool schema
export const getCategoryEnumDescription = () =>
  RECIPE_CATEGORY_KEYS.map(k => `${k} (${RECIPE_CATEGORIES[k].description})`).join(', ');
