// ShoppingList Component - Lista della spesa con checkbox
// Conservato per uso futuro

import { useState } from 'react';
import { ZineText } from './ZineUI';

interface ShoppingItem {
  text: string;
  checked: boolean;
}

interface ShoppingListProps {
  initialItems?: ShoppingItem[];
  title?: string;
}

export function ShoppingList({
  initialItems = [
    { text: 'comprare uova', checked: true },
    { text: 'prendere il basilico', checked: true },
    { text: 'cercare ricetta torta', checked: false },
    { text: 'mozzarella fresca', checked: false },
  ],
  title = 'lista della spesa'
}: ShoppingListProps) {
  const [items, setItems] = useState<ShoppingItem[]>(initialItems);

  const toggleItem = (index: number) => {
    setItems(prev => prev.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <section>
      <div style={{ marginBottom: 20 }}>
        <ZineText size="lg" style={{ display: 'block' }}>{title}</ZineText>
        <svg width="100" height="6" viewBox="0 0 100 6" style={{ display: 'block', marginTop: 6 }}>
          <path d="M0 3 Q12.5 0 25 3 Q37.5 6 50 3 Q62.5 0 75 3 Q87.5 6 100 3" stroke="#C4C0B9" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <div style={{ border: '1.5px dashed #C4C0B9', padding: 20 }}>
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => toggleItem(i)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: i < items.length - 1 ? 10 : 0,
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: 18,
              height: 18,
              border: '1.5px solid #2D2A26',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {item.checked && (
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M2 9 L6 13 L14 3" stroke="#2D2A26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 17,
              color: item.checked ? '#8B857C' : '#2D2A26',
              textDecoration: item.checked ? 'line-through' : 'none',
            }}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShoppingList;
