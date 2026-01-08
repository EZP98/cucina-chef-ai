// Cloudflare Pages Function for World Exploration - Culinary Areas by Country

interface Env {
  ANTHROPIC_API_KEY: string;
}

interface CulinaryArea {
  name: string;
  tagline: string;
  primi: string[];
  secondi: string[];
  dolci: string[];
  prodotti_dop: string[];
  tecniche: string[];
}

interface ExploreResponse {
  country: string;
  areas: CulinaryArea[];
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { headers: corsHeaders });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const body = await request.json() as { country: string; language?: string };
    const { country, language = 'it' } = body;

    if (!country) {
      return new Response(JSON.stringify({ error: 'Country required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const systemPrompt = `Sei un esperto di cucina mondiale. L'utente sta esplorando la cucina di un paese.
Restituisci SOLO JSON valido (no markdown, no backticks) con le principali aree/regioni culinarie del paese.

Formato richiesto:
{
  "country": "nome paese",
  "areas": [
    {
      "name": "Nome regione/area",
      "tagline": "Breve frase evocativa (max 6 parole)",
      "primi": ["piatto1", "piatto2", "piatto3"],
      "secondi": ["piatto1", "piatto2"],
      "dolci": ["dolce1", "dolce2"],
      "prodotti_dop": ["prodotto1", "prodotto2", "prodotto3"],
      "tecniche": ["tecnica1", "tecnica2"]
    }
  ]
}

Regole:
- Massimo 6 aree per paese
- Ogni categoria deve avere 2-4 elementi
- I piatti devono essere autentici e tradizionali
- Usa i nomi originali dei piatti (es. "Pad Thai" non "Noodles fritti tailandesi")
- Per paesi piccoli, usa 2-3 aree
- Se il paese non ha regioni culinarie distinte, usa "Cucina nazionale" come unica area`;

    const userPrompt = `Dammi le aree culinarie di: ${country}`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Anthropic error:', errorText);
      return new Response(JSON.stringify({ error: 'AI service error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const aiResponse = await response.json() as {
      content: Array<{ type: string; text: string }>;
    };

    const text = aiResponse.content[0]?.text || '';

    // Parse JSON from response
    let data: ExploreResponse;
    try {
      // Try to extract JSON if wrapped in anything
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        data = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('No JSON found');
      }
    } catch (parseError) {
      console.error('JSON parse error:', parseError, 'Text:', text);
      return new Response(JSON.stringify({ error: 'Invalid AI response format' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Explore world error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};
