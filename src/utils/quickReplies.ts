// Quick Replies Generator - Context-aware suggestions
// Supports multiple languages and special modes (Stellato, Recupero, Menu)

import type { ParsedRecipe } from '../types/chat';
import { translations, type Language } from '../i18n/translations';

/**
 * Context for generating quick replies
 */
export interface QuickReplyContext {
  response: string;
  recipe: ParsedRecipe | null;
  language: Language;
  menuMode?: boolean;
  stellatoMode?: boolean;
  recuperoMode?: boolean;
}

/**
 * Helper: Check if response is informative (history, culture, ingredient info)
 */
function isInformativeResponse(text: string): boolean {
  const infoKeywords = [
    // Italian
    'storia', 'origine', 'tradizione', 'cultura', 'secolo', 'nasce',
    'curiosità', 'fatto interessante', 'sapevi che', 'si narra',
    // English
    'history', 'origin', 'tradition', 'culture', 'century', 'born',
    'fun fact', 'did you know', 'legend has it',
    // French
    'histoire', 'origine', 'tradition', 'culture', 'siècle',
    // Spanish
    'historia', 'origen', 'tradición', 'cultura', 'siglo',
    // Japanese
    '歴史', '起源', '伝統', '文化',
    // Chinese
    '歷史', '起源', '傳統', '文化'
  ];
  return infoKeywords.some(k => text.includes(k));
}

/**
 * Helper: Check if response is about cooking techniques
 */
function isTechniqueResponse(text: string): boolean {
  const techKeywords = [
    // Italian
    'tecnica', 'metodo', 'cottura', 'temperatura', 'gradi', 'minuti',
    'mescolare', 'impastare', 'rosolare', 'sfumare', 'mantecare',
    // English
    'technique', 'method', 'cooking', 'temperature', 'degrees', 'minutes',
    'stir', 'knead', 'brown', 'deglaze', 'fold',
    // French
    'technique', 'méthode', 'cuisson', 'température', 'degrés',
    // Spanish
    'técnica', 'método', 'cocción', 'temperatura', 'grados',
    // Japanese
    'テクニック', '方法', '調理', '温度',
    // Chinese
    '技巧', '方法', '烹調', '溫度'
  ];
  // Technique responses are usually shorter (not full recipes)
  return techKeywords.some(k => text.includes(k)) && text.length < 1500;
}

/**
 * Helper: Check if response mentions time constraints
 */
function mentionsLongTime(text: string): boolean {
  const timePatterns = [
    /\d+\s*or[ae]/i,    // "2 ore", "1 ora"
    /\d+\s*hour/i,      // "2 hours"
    /\d+\s*heure/i,     // French
    /\d+\s*hora/i,      // Spanish
    /時間/,             // Japanese
    /小時/              // Chinese
  ];
  return timePatterns.some(p => p.test(text));
}

/**
 * Generate contextual quick reply suggestions
 */
export function generateQuickReplies(ctx: QuickReplyContext): string[] {
  const { response, recipe, language, menuMode, stellatoMode, recuperoMode } = ctx;

  // Translation helper with fallback to Italian
  const t = (key: string): string => {
    return translations[language]?.[key] || translations['it'][key] || key;
  };

  const replies: string[] = [];
  const lowerResponse = response.toLowerCase();

  // ==========================================
  // TYPE 1: Response with recipe
  // ==========================================
  if (recipe) {
    replies.push(t('qr.recipe.variants'));
    replies.push(t('qr.recipe.substitute'));

    // Complex recipe (many ingredients) -> offer simpler version
    if (recipe.ingredients.length > 6) {
      replies.push(t('qr.recipe.simpler'));
    }

    // Long cooking time -> offer faster version
    if (recipe.time && mentionsLongTime(recipe.time)) {
      replies.push(t('qr.recipe.faster'));
    }
  }

  // ==========================================
  // TYPE 2: Informative response (history, culture)
  // ==========================================
  else if (isInformativeResponse(lowerResponse)) {
    replies.push(t('qr.info.more'));
    replies.push(t('qr.info.dishes'));
    replies.push(t('qr.info.pairings'));
  }

  // ==========================================
  // TYPE 3: Technique response
  // ==========================================
  else if (isTechniqueResponse(lowerResponse)) {
    replies.push(t('qr.technique.explain'));
    replies.push(t('qr.technique.alternative'));
    replies.push(t('qr.technique.tips'));
  }

  // ==========================================
  // SPECIAL MODES: Add 1 extra quick reply
  // ==========================================
  if (stellatoMode && replies.length < 4) {
    replies.push(t('qr.stellato.plating'));
  }
  if (recuperoMode && replies.length < 4) {
    replies.push(t('qr.recupero.other'));
  }
  if (menuMode && replies.length < 4) {
    replies.push(t('qr.menu.wine'));
  }

  // ==========================================
  // FILL WITH CONTEXTUAL DEFAULTS
  // ==========================================
  const defaults = recipe
    ? ['qr.recipe.similar', 'qr.info.pairings']
    : ['qr.info.more', 'qr.info.dishes'];

  for (const key of defaults) {
    if (replies.length >= 4) break;
    const text = t(key);
    if (!replies.includes(text)) {
      replies.push(text);
    }
  }

  // Return max 4 quick replies
  return replies.slice(0, 4);
}

/**
 * Get initial quick replies for empty chat (language-aware)
 */
export function getInitialQuickReplies(language: Language = 'it'): string[] {
  const initial: Record<Language, string[]> = {
    'it': [
      'Cosa cucino stasera?',
      'Ho uova, pasta e formaggio',
      'Ricetta veloce per 2 persone',
      'Suggeriscimi un dolce facile',
    ],
    'en': [
      'What should I cook tonight?',
      'I have eggs, pasta and cheese',
      'Quick recipe for 2 people',
      'Suggest an easy dessert',
    ],
    'zh-TW': [
      '今晚該煮什麼？',
      '我有雞蛋、麵和起司',
      '兩人份快速食譜',
      '推薦一個簡單的甜點',
    ],
    'fr': [
      'Que cuisiner ce soir ?',
      'J\'ai des œufs, des pâtes et du fromage',
      'Recette rapide pour 2 personnes',
      'Suggère-moi un dessert facile',
    ],
    'ja': [
      '今夜何を作ろう？',
      '卵、パスタ、チーズがあります',
      '2人分の簡単レシピ',
      '簡単なデザートを教えて',
    ],
    'es': [
      '¿Qué cocino esta noche?',
      'Tengo huevos, pasta y queso',
      'Receta rápida para 2 personas',
      'Sugiéreme un postre fácil',
    ],
  };

  return initial[language] || initial['it'];
}
