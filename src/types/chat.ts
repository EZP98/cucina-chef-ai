// Chat Types for Chef AI

// Import from single source of truth
import type { RecipeCategory as RecipeCategoryType } from '../config/recipeCategories';
import type { RecipeIcon as RecipeIconType } from '../config/recipeIcons';
export { RECIPE_CATEGORY_KEYS, getCategoryIcon, getCategoryLabel } from '../config/recipeCategories';
export { RECIPE_ICONS, getRecipeIcon, hasRecipeIcon } from '../config/recipeIcons';
export type RecipeCategory = RecipeCategoryType;
export type RecipeIcon = RecipeIconType;

export interface ParsedRecipe {
  name: string;
  description?: string;
  servings?: string;
  time?: string;
  ingredients: string[];
  steps: string[];
  tips?: string[];
  icon?: string; // New: AI-selected specific icon (e.g., "Spaghetti", "Risotto", "Pandoro")
  category?: RecipeCategory; // Legacy: fallback category
  iconSvg?: string; // Deprecated: kept for backwards compatibility with saved recipes
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  parsedRecipe?: ParsedRecipe;
  quickReplies?: string[];
}

export interface Conversation {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  messages: Message[];
}

export const STORAGE_KEYS = {
  conversations: 'chef-ai-conversations',
  activeConversationId: 'chef-ai-active-conversation',
} as const;
