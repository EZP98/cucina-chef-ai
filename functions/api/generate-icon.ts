// POST /api/generate-icon - Generate SVG icon for a recipe using Claude

interface Env {
  ANTHROPIC_API_KEY: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const SVG_STYLE_EXAMPLE = `
<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
  <!-- Example: a simple lemon -->
  <ellipse cx="24" cy="24" rx="12" ry="10" fill="#FAF7F2" stroke="#2D2A26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 24 Q24 20 36 24" stroke="#2D2A26" stroke-width="1" stroke-linecap="round"/>
  <circle cx="18" cy="22" r="1.5" fill="#2D2A26"/>
  <circle cx="28" cy="26" r="1" fill="#2D2A26"/>
</svg>
`;

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const { recipeName, ingredients } = await request.json() as {
      recipeName: string;
      ingredients?: string[];
    };

    if (!recipeName) {
      return new Response(JSON.stringify({ error: 'Recipe name required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Build ingredient context
    const ingredientList = ingredients?.slice(0, 5).join(', ') || '';

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: `Generate a simple hand-drawn style SVG icon (48x48 viewBox) for this recipe: "${recipeName}"
${ingredientList ? `Ingredients list: ${ingredientList}` : ''}

IMPORTANT: Draw ONLY ONE single ingredient, the most iconic/recognizable one from this dish.
Examples:
- "Frittura di Calamari" → draw a simple squid/calamaro shape
- "Pasta al Pomodoro" → draw a tomato
- "Tiramisù" → draw a coffee bean
- "Gelato al Limone" → draw a lemon
- "Risotto ai Funghi" → draw a mushroom
- "Carbonara" → draw an egg

STRICT RULES:
1. Draw ONLY ONE ingredient, not the whole dish
2. Use ONLY: stroke="#2D2A26", fill="#FAF7F2" (cream fill for shapes)
3. stroke-width="1.5" for outline, stroke-width="1" for inner details
4. Always: stroke-linecap="round" stroke-linejoin="round"
5. Keep it SIMPLE - max 4-5 shapes total
6. ViewBox must be "0 0 48 48", center the ingredient
7. Use: ellipse, circle, path with Q curves for hand-drawn feel
8. Small dots (r="1" or r="1.5") for texture/seeds

Example (a lemon):
${SVG_STYLE_EXAMPLE}

Return ONLY the raw SVG code. No markdown, no explanation, no backticks.`
          }
        ],
      }),
    });

    if (!response.ok) {
      console.error('Claude API error:', await response.text());
      return new Response(JSON.stringify({ error: 'Generation failed' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const data = await response.json() as {
      content: Array<{ type: string; text?: string }>;
    };

    const svgText = data.content.find(c => c.type === 'text')?.text || '';

    // Extract just the SVG tag if there's any extra text
    const svgMatch = svgText.match(/<svg[\s\S]*<\/svg>/i);
    const svg = svgMatch ? svgMatch[0] : svgText;

    // Basic validation
    if (!svg.includes('<svg') || !svg.includes('</svg>')) {
      return new Response(JSON.stringify({ error: 'Invalid SVG generated' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ svg }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Generate icon error:', error);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};
