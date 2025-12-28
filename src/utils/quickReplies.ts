// Quick Replies Generator - Contextual suggestions based on AI response

import type { ParsedRecipe } from '../types/chat';

/**
 * Generate contextual quick reply suggestions
 */
export function generateQuickReplies(
  response: string,
  recipe: ParsedRecipe | null
): string[] {
  const replies: string[] = [];
  const lowerResponse = response.toLowerCase();

  // If response contains a recipe
  if (recipe) {
    replies.push('Varianti di questa ricetta?');
    replies.push('Posso sostituire un ingrediente?');

    // If recipe has many ingredients
    if (recipe.ingredients.length > 5) {
      replies.push('Versione semplificata?');
    }
  }

  // If talking about ingredients
  if (lowerResponse.includes('ingredienti') || lowerResponse.includes('ingredients')) {
    if (!replies.includes('Posso sostituire un ingrediente?')) {
      replies.push('Ho solo alcuni di questi ingredienti');
    }
  }

  // If suggesting multiple options
  if (lowerResponse.includes('potresti') ||
      lowerResponse.includes('consiglio') ||
      lowerResponse.includes('suggerisco')) {
    replies.push('Dimmi di più sulla prima opzione');
  }

  // If mentioning cooking technique
  if (lowerResponse.includes('tecnica') ||
      lowerResponse.includes('metodo') ||
      lowerResponse.includes('cottura')) {
    replies.push('Spiegami meglio la tecnica');
  }

  // If mentioning time
  if (lowerResponse.includes('minuti') || lowerResponse.includes('ore')) {
    if (!replies.some(r => r.includes('veloce'))) {
      replies.push('Versione più veloce?');
    }
  }

  // Default suggestions if we don't have enough
  const defaults = [
    'Altra ricetta simile?',
    'Cosa posso fare con questi ingredienti?',
    'Suggeriscimi un abbinamento',
  ];

  for (const def of defaults) {
    if (replies.length >= 4) break;
    if (!replies.includes(def)) {
      replies.push(def);
    }
  }

  // Return max 4 quick replies
  return replies.slice(0, 4);
}

/**
 * Get initial quick replies for empty chat
 */
export function getInitialQuickReplies(): string[] {
  return [
    'Cosa cucino stasera?',
    'Ho uova, pasta e formaggio',
    'Ricetta veloce per 2 persone',
    'Suggeriscimi un dolce facile',
  ];
}
