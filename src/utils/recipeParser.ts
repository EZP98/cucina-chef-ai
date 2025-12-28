// Recipe Parser - Extracts structured recipes from AI Markdown responses

import type { ParsedRecipe } from '../types/chat';

/**
 * Extract a section from markdown text based on headers
 */
function extractSection(text: string, headers: string[]): string[] {
  const lines = text.split('\n');
  const items: string[] = [];
  let inSection = false;

  for (const line of lines) {
    const lowerLine = line.toLowerCase().trim();

    // Check if this is a header we're looking for
    const isTargetHeader = headers.some(h =>
      lowerLine.includes(h) && (lowerLine.startsWith('#') || lowerLine.startsWith('**'))
    );

    // Check if this is any other header (end of our section)
    const isOtherHeader = !isTargetHeader && (
      /^#{1,3}\s/.test(line.trim()) ||
      /^\*\*[^*]+\*\*\s*$/.test(line.trim())
    );

    if (isTargetHeader) {
      inSection = true;
      continue;
    }

    if (inSection && isOtherHeader) {
      break;
    }

    if (inSection) {
      // Match list items: - item, * item, 1. item, 1) item
      const listMatch = line.match(/^\s*[-*•]\s+(.+)$/) ||
                        line.match(/^\s*\d+[.)]\s+(.+)$/);
      if (listMatch) {
        items.push(listMatch[1].trim());
      }
    }
  }

  return items;
}

/**
 * Extract recipe name from text
 */
function extractName(text: string): string {
  // Try markdown heading
  const headingMatch = text.match(/^#+\s*(.+)/m);
  if (headingMatch) {
    return headingMatch[1].trim();
  }

  // Try bold text at start
  const boldMatch = text.match(/^\*\*([^*]+)\*\*/m);
  if (boldMatch) {
    return boldMatch[1].trim();
  }

  // Try first non-empty line
  const firstLine = text.split('\n').find(l => l.trim().length > 0);
  if (firstLine) {
    return firstLine.slice(0, 50).trim();
  }

  return 'Ricetta';
}

/**
 * Extract time from text
 */
function extractTime(text: string): string | undefined {
  const timeMatch = text.match(/(\d+[-–]\d+|\d+)\s*(minuti|min|ore|hours?|minutes?)/i);
  return timeMatch ? timeMatch[0] : undefined;
}

/**
 * Extract servings from text
 */
function extractServings(text: string): string | undefined {
  const servingsMatch = text.match(/(\d+)\s*(porzioni|persone|servings?|portions?)/i);
  return servingsMatch ? servingsMatch[0] : undefined;
}

/**
 * Extract tips from text (look for "Consigli", "Tips", "Suggerimenti")
 */
function extractTips(text: string): string[] {
  return extractSection(text, ['consigli', 'tips', 'suggerimenti', 'note']);
}

/**
 * Main function: Parse a recipe from AI response text
 */
export function parseRecipeFromText(text: string): ParsedRecipe | null {
  // Look for ingredients section
  const ingredients = extractSection(text, [
    'ingredienti',
    'ingredients',
    'cosa serve',
    'occorrente'
  ]);

  // Look for steps section
  const steps = extractSection(text, [
    'procedimento',
    'preparazione',
    'steps',
    'instructions',
    'istruzioni',
    'come fare',
    'come preparare'
  ]);

  // Must have both ingredients and steps to be a recipe
  if (ingredients.length === 0 || steps.length === 0) {
    return null;
  }

  return {
    name: extractName(text),
    ingredients,
    steps,
    time: extractTime(text),
    servings: extractServings(text),
    tips: extractTips(text).length > 0 ? extractTips(text) : undefined,
  };
}

/**
 * Check if text likely contains a recipe (quick check)
 */
export function containsRecipe(text: string): boolean {
  const lowerText = text.toLowerCase();
  return (
    (lowerText.includes('ingredienti') || lowerText.includes('ingredients')) &&
    (lowerText.includes('procedimento') || lowerText.includes('preparazione') ||
     lowerText.includes('steps') || lowerText.includes('istruzioni'))
  );
}
