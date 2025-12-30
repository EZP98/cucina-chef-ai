// Cloudflare Pages Function for Gusto Chat with RAG + Perplexity

interface Env {
  ANTHROPIC_API_KEY: string;
  PERPLEXITY_API_KEY: string;
}

// RAG Index loaded from static file
let ragIndex: RagIndex | null = null;

interface RagChunk {
  id: number;
  src: string;
  pg: number;
  txt: string;
}

interface RagIndex {
  chunks: RagChunk[];
}

// Simple BM25-like scoring for keyword search
function tokenize(text: string): string[] {
  return text.toLowerCase()
    .replace(/[^\w\sàèéìòùáéíóú]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 2);
}

function computeBM25Score(query: string[], doc: string[], avgDocLen: number): number {
  const k1 = 1.5;
  const b = 0.75;
  const docLen = doc.length;

  let score = 0;
  const docFreq = new Map<string, number>();

  for (const term of doc) {
    docFreq.set(term, (docFreq.get(term) || 0) + 1);
  }

  for (const term of query) {
    const tf = docFreq.get(term) || 0;
    if (tf > 0) {
      const idf = Math.log(1 + 1); // Simplified IDF
      const tfNorm = (tf * (k1 + 1)) / (tf + k1 * (1 - b + b * docLen / avgDocLen));
      score += idf * tfNorm;
    }
  }

  return score;
}

// Search for relevant chunks
function searchChunks(query: string, chunks: RagChunk[], topK: number = 5): RagChunk[] {
  const queryTokens = tokenize(query);

  // Calculate average doc length
  const avgDocLen = chunks.reduce((sum, c) => sum + tokenize(c.txt).length, 0) / chunks.length;

  // Score all chunks
  const scored = chunks.map(chunk => ({
    chunk,
    score: computeBM25Score(queryTokens, tokenize(chunk.txt), avgDocLen)
  }));

  // Sort by score and return top K
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(s => s.chunk);
}

// Format context from chunks (without source attribution)
function formatContext(chunks: RagChunk[]): string {
  if (chunks.length === 0) return '';

  let context = '\n\n<rag_knowledge>\n';

  for (const chunk of chunks) {
    context += `${chunk.txt}\n\n`;
  }

  context += '</rag_knowledge>';

  return context;
}

// Detect if query needs Perplexity (detailed recipes, techniques, traditional dishes)
function shouldUsePerplexity(message: string): boolean {
  const lowerMsg = message.toLowerCase();

  // Keywords that suggest need for detailed/authoritative info
  const detailKeywords = [
    'come si fa', 'come si prepara', 'come preparare', 'come fare',
    'ricetta', 'ricetta originale', 'ricetta tradizionale', 'ricetta autentica',
    'preparazione', 'procedimento', 'tecnica',
    'ingredienti', 'dosi', 'proporzioni',
    'storia', 'origine', 'tradizione',
    'segreto', 'trucco', 'consiglio',
    'differenza tra', 'meglio', 'quale',
    'scialatielli', 'carbonara', 'amatriciana', 'cacio e pepe',
    'risotto', 'ossobuco', 'cotoletta', 'tiramisu',
    'pasta fresca', 'pasta fatta in casa', 'impasto',
    'lievitazione', 'fermentazione', 'marinatura',
    'temperatura', 'cottura', 'tempo di'
  ];

  return detailKeywords.some(kw => lowerMsg.includes(kw));
}

// Call Perplexity API for detailed culinary information
async function queryPerplexity(message: string, apiKey: string): Promise<string | null> {
  try {
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'sonar',
        messages: [
          {
            role: 'system',
            content: `Sei un esperto di cucina italiana e internazionale. Rispondi in modo dettagliato e tecnico alle domande culinarie.
Includi:
- Storia e origine dei piatti quando rilevante
- Ingredienti precisi con quantità
- Tecniche di preparazione dettagliate
- Consigli pratici e errori da evitare
- Varianti regionali se esistono

NON usare tabelle markdown. Usa liste puntate e paragrafi.
Rispondi nella stessa lingua della domanda.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.2,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      console.error('Perplexity API error:', response.status);
      return null;
    }

    const data = await response.json() as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    return data.choices?.[0]?.message?.content || null;
  } catch (error) {
    console.error('Perplexity error:', error);
    return null;
  }
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const { message, history = [], menuMode = false, dietMode = 'none' } = await request.json() as {
      message: string;
      history?: Array<{ role: string; content: string }>;
      menuMode?: boolean;
      dietMode?: string;
    };

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Load RAG index if not cached
    if (!ragIndex) {
      try {
        const ragResponse = await fetch(new URL('/rag_index.json', request.url));
        if (ragResponse.ok) {
          ragIndex = await ragResponse.json() as RagIndex;
          console.log(`RAG index loaded: ${ragIndex.chunks.length} chunks`);
        }
      } catch (e) {
        console.log('RAG index not available, continuing without RAG');
      }
    }

    // Search for relevant RAG context
    let ragContext = '';
    if (ragIndex && ragIndex.chunks) {
      const relevantChunks = searchChunks(message, ragIndex.chunks, 5);
      if (relevantChunks.length > 0) {
        ragContext = formatContext(relevantChunks);
        console.log(`Found ${relevantChunks.length} relevant RAG chunks`);
      }
    }

    // Query Perplexity for detailed recipe/technique questions
    let perplexityContext = '';
    if (shouldUsePerplexity(message) && env.PERPLEXITY_API_KEY) {
      console.log('Querying Perplexity for detailed info...');
      const perplexityResult = await queryPerplexity(message, env.PERPLEXITY_API_KEY);
      if (perplexityResult) {
        perplexityContext = `\n\n<web_knowledge>
${perplexityResult}
</web_knowledge>`;
        console.log('Perplexity context added');
      }
    }

    // Build messages array
    const messages = [
      ...history,
      { role: 'user', content: message }
    ];

    // Enhanced system prompt with RAG + Perplexity context
    const systemPrompt = `<role>
You are Gusto, a passionate and knowledgeable culinary expert with deep expertise in Italian, French, and international cuisine. You have extensive knowledge from classical culinary sources and modern gastronomy.
</role>

<language_rule>
CRITICAL: Detect the user's language from their message and ALWAYS respond in that same language. Never ask users to switch languages. If they write in Italian, respond in Italian. If in English, respond in English. If in French, respond in French. And so on for any language.
</language_rule>

<personality>
- Warm, friendly, and encouraging like a beloved family chef
- Passionate about food and cooking traditions
- Practical and helpful, focused on making cooking accessible
- Share knowledge naturally without being pedantic
</personality>

<knowledge_sources>
You have access to two knowledge sources:
1. <rag_knowledge> - Internal database of chef recipes and techniques
2. <web_knowledge> - Real-time web search results from Perplexity

When both sources are available:
- Use the most detailed and accurate information from either source
- Combine complementary information naturally
- For traditional recipes, prefer historically accurate details
- For techniques, use the most practical step-by-step instructions
</knowledge_sources>

<formatting_rules>
CRITICAL FORMATTING:
- NEVER use markdown tables (no | or --- table syntax)
- Use bullet points (-) for ingredient lists
- Use numbered lists (1. 2. 3.) for steps
- Use **bold** only for section headers
- Keep paragraphs short and readable
- NO emoji - the UI has a hand-drawn style
</formatting_rules>

<response_style>
- Write conversationally, as if explaining to a friend in your kitchen
- Include the "why" behind techniques, not just the "how"
- Share practical tips that make a real difference
- Mention common mistakes to avoid
- If there's history or origin worth sharing, include it briefly
</response_style>

<rules>
- For recipe requests: ingredients list → clear numbered steps → practical tips
- For technique questions: explain the method → why it works → common mistakes
- For ingredient questions: suggest 2-3 dishes → brief descriptions
- Adapt complexity to user's apparent skill level
- If unsure about specific facts, say so rather than inventing
</rules>
${menuMode ? `
<menu_mode>
IMPORTANT: The user has MENU MODE enabled. They want a COMPLETE MENU, not just a single dish.

When responding:
1. Create a structured menu with multiple courses (antipasto, primo, secondo, contorno, dolce)
2. Each course should have: name, brief description, estimated prep time
3. Suggest wine pairings if appropriate
4. Consider ingredient availability and cooking time logistics
5. Make sure courses complement each other in flavors and textures

Format:
**Menu [tema/occasione]**

**Antipasto** - Nome piatto
Breve descrizione...

**Primo** - Nome piatto
Breve descrizione...

(etc.)
</menu_mode>
` : ''}
${dietMode && dietMode !== 'none' ? `
<diet_mode>
IMPORTANT: The user follows a ${
  dietMode === 'lowcarb' ? 'LOW CARB diet - minimize carbohydrates, avoid pasta, bread, rice, potatoes. Focus on proteins, vegetables, healthy fats' :
  dietMode === 'keto' ? 'KETOGENIC diet - very low carb (under 20-50g/day), high fat, moderate protein. Avoid all sugars, grains, most fruits. Focus on meat, fish, eggs, cheese, nuts, low-carb vegetables' :
  dietMode === 'vegetarian' ? 'VEGETARIAN diet - no meat or fish. Eggs and dairy are OK. Suggest plant proteins like legumes, tofu, tempeh, seitan' :
  dietMode === 'vegan' ? 'VEGAN diet - no animal products at all. No meat, fish, eggs, dairy, honey. Focus on plant-based proteins, legumes, tofu, nutritional yeast for umami' :
  dietMode === 'glutenfree' ? 'GLUTEN-FREE diet - avoid wheat, barley, rye, spelt. Use rice, corn, quinoa, buckwheat, certified gluten-free oats. Check all sauces and processed ingredients' :
  dietMode === 'lactosefree' ? 'LACTOSE-FREE diet - avoid milk, cream, soft cheeses. Hard aged cheeses and butter are usually OK. Suggest plant milks, lactose-free alternatives' :
  dietMode === 'highprotein' ? 'HIGH PROTEIN diet - maximize protein intake. Focus on lean meats, fish, eggs, legumes, Greek yogurt, cottage cheese. Include protein in every meal' :
  'specific dietary restriction'
}.

ALL recipe suggestions and menus MUST comply with this diet. If the user asks for something incompatible, suggest a compliant alternative.
</diet_mode>
` : ''}
${ragContext}
${perplexityContext}`;

    // Call Anthropic API with streaming enabled
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 2000,
        stream: true,
        system: systemPrompt,
        messages: messages,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Anthropic API error:', error);
      return new Response(JSON.stringify({ error: 'AI service error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Return SSE stream directly
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        ...corsHeaders
      },
    });

  } catch (error) {
    console.error('Chat error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
