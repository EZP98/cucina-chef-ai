// useI18n - Internationalization hook for Gusto
import { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { translations, languageNames, type Language } from '../i18n/translations';

const STORAGE_KEY = 'gusto-language';

// Detect browser language
function detectBrowserLanguage(): Language {
  const browserLang = navigator.language || (navigator as any).userLanguage || 'en';

  // Check exact match first
  if (browserLang in translations) {
    return browserLang as Language;
  }

  // Check language prefix (e.g., 'zh' from 'zh-TW')
  const langPrefix = browserLang.split('-')[0];

  // Special handling for Chinese
  if (langPrefix === 'zh') {
    return 'zh-TW'; // Default to Traditional Chinese
  }

  // Check if prefix matches any supported language
  const supported = Object.keys(translations) as Language[];
  const match = supported.find(lang => lang.startsWith(langPrefix));

  return match || 'en'; // Default to English
}

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languageNames: typeof languageNames;
  availableLanguages: Language[];
}

const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// Hook for standalone usage (without provider)
export function useI18nStandalone() {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to load from localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved in translations) {
      return saved as Language;
    }
    return detectBrowserLanguage();
  });

  // Save to localStorage when language changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    // Update document lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    if (lang in translations) {
      setLanguageState(lang);
    }
  }, []);

  // Translation function
  const t = useCallback((key: string): string => {
    const translation = translations[language]?.[key];
    if (!translation) {
      // Fallback to English, then to key
      return translations['en']?.[key] || key;
    }
    return translation;
  }, [language]);

  return {
    language,
    setLanguage,
    t,
    languageNames,
    availableLanguages: Object.keys(translations) as Language[],
  };
}

// Provider component
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const i18n = useI18nStandalone();

  return (
    <I18nContext.Provider value={i18n}>
      {children}
    </I18nContext.Provider>
  );
}

export { type Language };
