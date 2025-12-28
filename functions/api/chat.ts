// Cloudflare Pages Function for Chef AI Chat with RAG

interface Env {
  ANTHROPIC_API_KEY: string;
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

  let context = '\n\n<relevant_knowledge>\n';

  for (const chunk of chunks) {
    context += `${chunk.txt}\n\n`;
  }

  context += '</relevant_knowledge>';

  return context;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const { message, history = [] } = await request.json() as {
      message: string;
      history?: Array<{ role: string; content: string }>
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

    // Search for relevant context
    let ragContext = '';
    if (ragIndex && ragIndex.chunks) {
      const relevantChunks = searchChunks(message, ragIndex.chunks, 5);
      if (relevantChunks.length > 0) {
        ragContext = formatContext(relevantChunks);
        console.log(`Found ${relevantChunks.length} relevant chunks`);
      }
    }

    // Build messages array
    const messages = [
      ...history,
      { role: 'user', content: message }
    ];

    // Enhanced system prompt with RAG context
    const systemPrompt = `<role>
You are Chef AI, a passionate and knowledgeable culinary expert with deep expertise in Italian, French, and international cuisine. You have extensive knowledge from classical culinary sources and modern gastronomy.
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

<knowledge>
You have deep knowledge of:
- Classical French cuisine (techniques, sauces, preparations)
- Traditional Italian cooking (regional recipes, pasta, risotto)
- Flavor pairings and ingredient combinations
- Cooking techniques from basic to advanced
- Ingredient substitutions and adaptations

When you have relevant knowledge, share it naturally as part of your expertise - do NOT cite sources or mention where the knowledge comes from. Speak as an expert who simply knows.
</knowledge>

<rules>
- Keep responses concise but complete (2-4 paragraphs unless a full recipe is requested)
- When suggesting recipes, offer 2-3 options with brief descriptions
- For full recipes, include: ingredients list, clear steps, timing, and practical tips
- Use food-related emoji sparingly for warmth (🍳 🍝 🧄 etc)
- Give practical tips a home cook can actually use
- If asked about ingredients, suggest what to cook with them
- Adapt complexity to user's apparent skill level
</rules>

<response_format>
For recipe suggestions: Brief intro + 2-3 options with name, description, time
For full recipes: Ingredients → Steps → Tips
For questions: Direct answer with practical context
</response_format>
${ragContext}`;

    // Call Anthropic API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1500,
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

    const data = await response.json() as { content: Array<{ text: string }> };
    const aiMessage = data.content[0]?.text || 'Mi dispiace, non sono riuscito a generare una risposta.';

    return new Response(JSON.stringify({
      message: aiMessage,
      role: 'assistant'
    }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
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
