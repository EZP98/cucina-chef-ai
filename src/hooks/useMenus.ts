// Hook for managing saved menus with D1 database

import { useState, useEffect, useCallback } from 'react';

export interface MenuCourse {
  type: string;       // antipasto, primo, secondo, contorno, dolce
  name: string;
  description?: string;
}

export interface SavedMenu {
  id: string;
  name: string;
  occasion?: string;
  courses: MenuCourse[];
  winePairing?: string;
  note?: string;
  isFavorite: boolean;
  createdAt: number;
}

interface UseMenusReturn {
  menus: SavedMenu[];
  favorites: SavedMenu[];
  isLoading: boolean;
  error: string | null;
  saveMenu: (menu: Omit<SavedMenu, 'id' | 'isFavorite' | 'createdAt'>) => Promise<SavedMenu | null>;
  deleteMenu: (id: string) => Promise<boolean>;
  toggleFavorite: (id: string) => Promise<boolean>;
  refreshMenus: () => Promise<void>;
  isMenuSaved: (name: string) => boolean;
}

export function useMenus(token: string | null): UseMenusReturn {
  const [menus, setMenus] = useState<SavedMenu[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all menus from API
  const refreshMenus = useCallback(async () => {
    if (!token || token.trim() === '') {
      setMenus([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/menus', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        setMenus([]);
        return;
      }

      if (!response.ok) {
        throw new Error('Errore nel caricamento dei menu');
      }

      const data = await response.json();
      setMenus(data.menus || []);
    } catch (err) {
      console.error('Fetch menus error:', err);
      setError(err instanceof Error ? err.message : 'Errore sconosciuto');
      setMenus([]);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  // Load menus on mount and when token changes
  useEffect(() => {
    refreshMenus();
  }, [refreshMenus]);

  // Save a new menu
  const saveMenu = useCallback(async (
    menu: Omit<SavedMenu, 'id' | 'isFavorite' | 'createdAt'>
  ): Promise<SavedMenu | null> => {
    if (!token) return null;

    try {
      const response = await fetch('/api/menus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(menu),
      });

      if (!response.ok) {
        throw new Error('Errore nel salvataggio');
      }

      const data = await response.json();
      const newMenu = data.menu as SavedMenu;

      // Add to local state
      setMenus(prev => [newMenu, ...prev]);

      return newMenu;
    } catch (err) {
      console.error('Save menu error:', err);
      setError(err instanceof Error ? err.message : 'Errore nel salvataggio');
      return null;
    }
  }, [token]);

  // Delete a menu
  const deleteMenu = useCallback(async (id: string): Promise<boolean> => {
    if (!token) return false;

    try {
      const response = await fetch(`/api/menus/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Errore nella cancellazione');
      }

      setMenus(prev => prev.filter(m => m.id !== id));

      return true;
    } catch (err) {
      console.error('Delete menu error:', err);
      setError(err instanceof Error ? err.message : 'Errore nella cancellazione');
      return false;
    }
  }, [token]);

  // Toggle favorite status
  const toggleFavorite = useCallback(async (id: string): Promise<boolean> => {
    if (!token) return false;

    const menu = menus.find(m => m.id === id);
    if (!menu) return false;

    const newFavoriteStatus = !menu.isFavorite;

    try {
      const response = await fetch(`/api/menus/${id}`, {
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

      setMenus(prev => prev.map(m =>
        m.id === id ? { ...m, isFavorite: newFavoriteStatus } : m
      ));

      return true;
    } catch (err) {
      console.error('Toggle favorite error:', err);
      setError(err instanceof Error ? err.message : 'Errore nell\'aggiornamento');
      return false;
    }
  }, [token, menus]);

  // Check if a menu with this name is already saved
  const isMenuSaved = useCallback((name: string): boolean => {
    return menus.some(m => m.name.toLowerCase() === name.toLowerCase());
  }, [menus]);

  // Computed: favorites only
  const favorites = menus.filter(m => m.isFavorite);

  return {
    menus,
    favorites,
    isLoading,
    error,
    saveMenu,
    deleteMenu,
    toggleFavorite,
    refreshMenus,
    isMenuSaved,
  };
}
