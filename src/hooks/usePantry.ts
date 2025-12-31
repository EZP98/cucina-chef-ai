// Hook for managing pantry items with D1 database

import { useState, useEffect, useCallback } from 'react';

export interface PantryItem {
  id: string;
  name: string;
  quantity?: string;
  unit?: string;
  category?: string;
  expiring: boolean;
  expiresAt?: number;
  createdAt: number;
  updatedAt: number;
}

interface UsePantryReturn {
  items: PantryItem[];
  expiringItems: PantryItem[];
  isLoading: boolean;
  error: string | null;
  addItem: (item: Omit<PantryItem, 'id' | 'createdAt' | 'updatedAt'>) => Promise<PantryItem | null>;
  addItems: (items: Omit<PantryItem, 'id' | 'createdAt' | 'updatedAt'>[]) => Promise<PantryItem[]>;
  deleteItem: (id: string) => Promise<boolean>;
  updateItem: (id: string, updates: Partial<PantryItem>) => Promise<boolean>;
  clearAll: () => Promise<boolean>;
  refreshPantry: () => Promise<void>;
}

export function usePantry(token: string | null): UsePantryReturn {
  const [items, setItems] = useState<PantryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all pantry items from API
  const refreshPantry = useCallback(async () => {
    if (!token) {
      setItems([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/pantry', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Errore nel caricamento della dispensa');
      }

      const data = await response.json();
      setItems(data.items || []);
    } catch (err) {
      console.error('Fetch pantry error:', err);
      setError(err instanceof Error ? err.message : 'Errore sconosciuto');
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  // Load pantry on mount and when token changes
  useEffect(() => {
    refreshPantry();
  }, [refreshPantry]);

  // Add a new item
  const addItem = useCallback(async (
    item: Omit<PantryItem, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<PantryItem | null> => {
    if (!token) return null;

    try {
      const response = await fetch('/api/pantry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error('Errore nel salvataggio');
      }

      const data = await response.json();
      const newItem = data.item as PantryItem;

      // Add to local state
      setItems(prev => [newItem, ...prev]);

      return newItem;
    } catch (err) {
      console.error('Add pantry item error:', err);
      setError(err instanceof Error ? err.message : 'Errore nel salvataggio');
      return null;
    }
  }, [token]);

  // Add multiple items (from AI photo analysis)
  const addItems = useCallback(async (
    newItems: Omit<PantryItem, 'id' | 'createdAt' | 'updatedAt'>[]
  ): Promise<PantryItem[]> => {
    if (!token) return [];

    const added: PantryItem[] = [];
    for (const item of newItems) {
      const result = await addItem(item);
      if (result) {
        added.push(result);
      }
    }
    return added;
  }, [token, addItem]);

  // Delete an item
  const deleteItem = useCallback(async (id: string): Promise<boolean> => {
    if (!token) return false;

    try {
      const response = await fetch(`/api/pantry/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Errore nella cancellazione');
      }

      // Remove from local state
      setItems(prev => prev.filter(i => i.id !== id));

      return true;
    } catch (err) {
      console.error('Delete pantry item error:', err);
      setError(err instanceof Error ? err.message : 'Errore nella cancellazione');
      return false;
    }
  }, [token]);

  // Update an item
  const updateItem = useCallback(async (
    id: string,
    updates: Partial<PantryItem>
  ): Promise<boolean> => {
    if (!token) return false;

    try {
      const response = await fetch(`/api/pantry/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        throw new Error('Errore nell\'aggiornamento');
      }

      const data = await response.json();

      // Update local state
      setItems(prev => prev.map(i =>
        i.id === id ? data.item : i
      ));

      return true;
    } catch (err) {
      console.error('Update pantry item error:', err);
      setError(err instanceof Error ? err.message : 'Errore nell\'aggiornamento');
      return false;
    }
  }, [token]);

  // Clear all items
  const clearAll = useCallback(async (): Promise<boolean> => {
    if (!token) return false;

    try {
      // Delete all items one by one
      for (const item of items) {
        await fetch(`/api/pantry/${item.id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
      }

      setItems([]);
      return true;
    } catch (err) {
      console.error('Clear pantry error:', err);
      setError(err instanceof Error ? err.message : 'Errore nella cancellazione');
      return false;
    }
  }, [token, items]);

  // Computed: expiring items only
  const expiringItems = items.filter(i => i.expiring);

  return {
    items,
    expiringItems,
    isLoading,
    error,
    addItem,
    addItems,
    deleteItem,
    updateItem,
    clearAll,
    refreshPantry,
  };
}
