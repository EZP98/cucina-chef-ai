// Hook for managing saved recipes with D1 database

import { useState, useEffect, useCallback } from 'react';

export interface SavedRecipe {
  id: string;
  name: string;
  time?: string;
  servings?: string;
  ingredients: string[];
  steps: string[];
  note?: string;
  isFavorite: boolean;
  createdAt: number;
}

interface UseRecipesReturn {
  recipes: SavedRecipe[];
  favorites: SavedRecipe[];
  isLoading: boolean;
  error: string | null;
  saveRecipe: (recipe: Omit<SavedRecipe, 'id' | 'isFavorite' | 'createdAt'>) => Promise<SavedRecipe | null>;
  deleteRecipe: (id: string) => Promise<boolean>;
  toggleFavorite: (id: string) => Promise<boolean>;
  refreshRecipes: () => Promise<void>;
  isRecipeSaved: (name: string) => boolean;
}

export function useRecipes(token: string | null): UseRecipesReturn {
  const [recipes, setRecipes] = useState<SavedRecipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all recipes from API
  const refreshRecipes = useCallback(async () => {
    if (!token) {
      setRecipes([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/recipes', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Errore nel caricamento delle ricette');
      }

      const data = await response.json();
      setRecipes(data.recipes || []);
    } catch (err) {
      console.error('Fetch recipes error:', err);
      setError(err instanceof Error ? err.message : 'Errore sconosciuto');
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  // Load recipes on mount and when token changes
  useEffect(() => {
    refreshRecipes();
  }, [refreshRecipes]);

  // Save a new recipe
  const saveRecipe = useCallback(async (
    recipe: Omit<SavedRecipe, 'id' | 'isFavorite' | 'createdAt'>
  ): Promise<SavedRecipe | null> => {
    if (!token) return null;

    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(recipe),
      });

      if (!response.ok) {
        throw new Error('Errore nel salvataggio');
      }

      const data = await response.json();
      const newRecipe = data.recipe as SavedRecipe;

      // Add to local state
      setRecipes(prev => [newRecipe, ...prev]);

      return newRecipe;
    } catch (err) {
      console.error('Save recipe error:', err);
      setError(err instanceof Error ? err.message : 'Errore nel salvataggio');
      return null;
    }
  }, [token]);

  // Delete a recipe
  const deleteRecipe = useCallback(async (id: string): Promise<boolean> => {
    if (!token) return false;

    try {
      const response = await fetch(`/api/recipes/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Errore nella cancellazione');
      }

      // Remove from local state
      setRecipes(prev => prev.filter(r => r.id !== id));

      return true;
    } catch (err) {
      console.error('Delete recipe error:', err);
      setError(err instanceof Error ? err.message : 'Errore nella cancellazione');
      return false;
    }
  }, [token]);

  // Toggle favorite status
  const toggleFavorite = useCallback(async (id: string): Promise<boolean> => {
    if (!token) return false;

    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return false;

    const newFavoriteStatus = !recipe.isFavorite;

    try {
      const response = await fetch(`/api/recipes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ isFavorite: newFavoriteStatus }),
      });

      if (!response.ok) {
        throw new Error('Errore nell\'aggiornamento');
      }

      // Update local state
      setRecipes(prev => prev.map(r =>
        r.id === id ? { ...r, isFavorite: newFavoriteStatus } : r
      ));

      return true;
    } catch (err) {
      console.error('Toggle favorite error:', err);
      setError(err instanceof Error ? err.message : 'Errore nell\'aggiornamento');
      return false;
    }
  }, [token, recipes]);

  // Check if a recipe with this name is already saved
  const isRecipeSaved = useCallback((name: string): boolean => {
    return recipes.some(r => r.name.toLowerCase() === name.toLowerCase());
  }, [recipes]);

  // Computed: favorites only
  const favorites = recipes.filter(r => r.isFavorite);

  return {
    recipes,
    favorites,
    isLoading,
    error,
    saveRecipe,
    deleteRecipe,
    toggleFavorite,
    refreshRecipes,
    isRecipeSaved,
  };
}
