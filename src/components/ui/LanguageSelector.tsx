// LanguageSelector - Dropdown to switch languages
import { useState, useRef, useEffect } from 'react';
import { ZineText } from './ZineUI';
import type { Language } from '../../hooks/useI18n';

interface LanguageSelectorProps {
  currentLanguage: Language;
  languages: Language[];
  languageNames: Record<Language, string>;
  onSelect: (lang: Language) => void;
}

// Language flag/icon representations
const languageFlags: Record<Language, string> = {
  'it': '🇮🇹',
  'en': '🇬🇧',
  'zh-TW': '🇹🇼',
  'fr': '🇫🇷',
  'ja': '🇯🇵',
  'es': '🇪🇸',
};

export function LanguageSelector({
  currentLanguage,
  languages,
  languageNames,
  onSelect,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '6px 10px',
          background: 'none',
          border: '1px solid #C4C0B9',
          borderRadius: '16px',
          cursor: 'pointer',
          fontFamily: "'Caveat', cursive",
          fontSize: '14px',
          color: '#2D2A26',
        }}
      >
        <span style={{ fontSize: '16px' }}>{languageFlags[currentLanguage]}</span>
        <span>{currentLanguage.toUpperCase()}</span>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <path
            d={isOpen ? "M3 4 L6 8 L9 4" : "M3 8 L6 4 L9 8"}
            stroke="#2D2A26"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown - opens upward */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: '8px',
            background: '#FAF7F2',
            border: '1.5px solid #2D2A26',
            borderRadius: '8px',
            padding: '8px 0',
            minWidth: '140px',
            zIndex: 200,
            boxShadow: '0 -4px 12px rgba(0,0,0,0.1)',
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                onSelect(lang);
                setIsOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                padding: '8px 14px',
                background: currentLanguage === lang ? '#F0EBE3' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Caveat', cursive",
                fontSize: '15px',
                color: currentLanguage === lang ? '#2D2A26' : '#8B857C',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '18px' }}>{languageFlags[lang]}</span>
              <ZineText size="sm">{languageNames[lang]}</ZineText>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
