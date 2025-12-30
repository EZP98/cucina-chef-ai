var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// api/analyze-pantry.ts
var onRequestPost = /* @__PURE__ */ __name(async (context) => {
  const { request, env } = context;
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  try {
    const { image } = await request.json();
    if (!image) {
      return new Response(JSON.stringify({ error: "Image is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
    const matches = image.match(/^data:([^;]+);base64,(.+)$/);
    if (!matches) {
      return new Response(JSON.stringify({ error: "Invalid image format" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
    const mediaType = matches[1];
    const imageData = matches[2];
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1e3,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image",
                source: {
                  type: "base64",
                  media_type: mediaType,
                  data: imageData
                }
              },
              {
                type: "text",
                text: `Analizza questa foto di una dispensa/frigorifero/scaffale cucina.
Identifica TUTTI gli ingredienti alimentari visibili nella foto.

Rispondi SOLO con un JSON valido nel formato:
{
  "ingredients": [
    {"name": "Nome Ingrediente", "qty": "quantit\xE0 stimata"},
    ...
  ]
}

Regole:
- Usa nomi in italiano
- Stima la quantit\xE0 (es: "3", "200g", "1 bottiglia", "1 confezione")
- Includi SOLO cibi/ingredienti, non utensili o contenitori vuoti
- Sii specifico (es: "Parmigiano Reggiano" invece di "formaggio")
- Se non riesci a identificare un ingrediente, omettilo`
              }
            ]
          }
        ]
      })
    });
    if (!response.ok) {
      const error = await response.text();
      console.error("Claude Vision API error:", error);
      return new Response(JSON.stringify({ error: "Vision API error" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
    const result = await response.json();
    const textContent = result.content.find((c) => c.type === "text");
    if (!textContent?.text) {
      return new Response(JSON.stringify({ error: "No response from AI" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
    try {
      let jsonText = textContent.text;
      const jsonMatch = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (jsonMatch) {
        jsonText = jsonMatch[1].trim();
      }
      const ingredients = JSON.parse(jsonText);
      return new Response(JSON.stringify(ingredients), {
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    } catch (parseError) {
      console.error("JSON parse error:", parseError, textContent.text);
      return new Response(JSON.stringify({
        error: "Could not parse ingredients",
        raw: textContent.text
      }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
  } catch (error) {
    console.error("Analyze pantry error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders }
    });
  }
}, "onRequestPost");
var onRequestOptions = /* @__PURE__ */ __name(async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}, "onRequestOptions");

// api/chat.ts
var ragIndex = null;
function tokenize(text) {
  return text.toLowerCase().replace(/[^\w\sàèéìòùáéíóú]/g, " ").split(/\s+/).filter((t) => t.length > 2);
}
__name(tokenize, "tokenize");
function computeBM25Score(query, doc, avgDocLen) {
  const k1 = 1.5;
  const b = 0.75;
  const docLen = doc.length;
  let score = 0;
  const docFreq = /* @__PURE__ */ new Map();
  for (const term of doc) {
    docFreq.set(term, (docFreq.get(term) || 0) + 1);
  }
  for (const term of query) {
    const tf = docFreq.get(term) || 0;
    if (tf > 0) {
      const idf = Math.log(1 + 1);
      const tfNorm = tf * (k1 + 1) / (tf + k1 * (1 - b + b * docLen / avgDocLen));
      score += idf * tfNorm;
    }
  }
  return score;
}
__name(computeBM25Score, "computeBM25Score");
function searchChunks(query, chunks, topK = 5) {
  const queryTokens = tokenize(query);
  const avgDocLen = chunks.reduce((sum, c) => sum + tokenize(c.txt).length, 0) / chunks.length;
  const scored = chunks.map((chunk) => ({
    chunk,
    score: computeBM25Score(queryTokens, tokenize(chunk.txt), avgDocLen)
  }));
  return scored.filter((s) => s.score > 0).sort((a, b) => b.score - a.score).slice(0, topK).map((s) => s.chunk);
}
__name(searchChunks, "searchChunks");
function formatContext(chunks) {
  if (chunks.length === 0) return "";
  let context = "\n\n<rag_knowledge>\n";
  for (const chunk of chunks) {
    context += `${chunk.txt}

`;
  }
  context += "</rag_knowledge>";
  return context;
}
__name(formatContext, "formatContext");
function shouldUsePerplexity(message) {
  const lowerMsg = message.toLowerCase();
  const detailKeywords = [
    "come si fa",
    "come si prepara",
    "come preparare",
    "come fare",
    "ricetta",
    "ricetta originale",
    "ricetta tradizionale",
    "ricetta autentica",
    "preparazione",
    "procedimento",
    "tecnica",
    "ingredienti",
    "dosi",
    "proporzioni",
    "storia",
    "origine",
    "tradizione",
    "segreto",
    "trucco",
    "consiglio",
    "differenza tra",
    "meglio",
    "quale",
    "scialatielli",
    "carbonara",
    "amatriciana",
    "cacio e pepe",
    "risotto",
    "ossobuco",
    "cotoletta",
    "tiramisu",
    "pasta fresca",
    "pasta fatta in casa",
    "impasto",
    "lievitazione",
    "fermentazione",
    "marinatura",
    "temperatura",
    "cottura",
    "tempo di"
  ];
  return detailKeywords.some((kw) => lowerMsg.includes(kw));
}
__name(shouldUsePerplexity, "shouldUsePerplexity");
async function queryPerplexity(message, apiKey) {
  try {
    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "sonar",
        messages: [
          {
            role: "system",
            content: `Sei un esperto di cucina italiana e internazionale. Rispondi in modo dettagliato e tecnico alle domande culinarie.
Includi:
- Storia e origine dei piatti quando rilevante
- Ingredienti precisi con quantit\xE0
- Tecniche di preparazione dettagliate
- Consigli pratici e errori da evitare
- Varianti regionali se esistono

NON usare tabelle markdown. Usa liste puntate e paragrafi.
Rispondi nella stessa lingua della domanda.`
          },
          {
            role: "user",
            content: message
          }
        ],
        temperature: 0.2,
        max_tokens: 2e3
      })
    });
    if (!response.ok) {
      console.error("Perplexity API error:", response.status);
      return null;
    }
    const data = await response.json();
    return data.choices?.[0]?.message?.content || null;
  } catch (error) {
    console.error("Perplexity error:", error);
    return null;
  }
}
__name(queryPerplexity, "queryPerplexity");
var onRequestPost2 = /* @__PURE__ */ __name(async (context) => {
  const { request, env } = context;
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  try {
    const { message, history = [], menuMode = false, dietMode = "none" } = await request.json();
    if (!message) {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
    if (!ragIndex) {
      try {
        const ragResponse = await fetch(new URL("/rag_index.json", request.url));
        if (ragResponse.ok) {
          ragIndex = await ragResponse.json();
          console.log(`RAG index loaded: ${ragIndex.chunks.length} chunks`);
        }
      } catch (e) {
        console.log("RAG index not available, continuing without RAG");
      }
    }
    let ragContext = "";
    if (ragIndex && ragIndex.chunks) {
      const relevantChunks = searchChunks(message, ragIndex.chunks, 5);
      if (relevantChunks.length > 0) {
        ragContext = formatContext(relevantChunks);
        console.log(`Found ${relevantChunks.length} relevant RAG chunks`);
      }
    }
    let perplexityContext = "";
    if (shouldUsePerplexity(message) && env.PERPLEXITY_API_KEY) {
      console.log("Querying Perplexity for detailed info...");
      const perplexityResult = await queryPerplexity(message, env.PERPLEXITY_API_KEY);
      if (perplexityResult) {
        perplexityContext = `

<web_knowledge>
${perplexityResult}
</web_knowledge>`;
        console.log("Perplexity context added");
      }
    }
    const messages = [
      ...history,
      { role: "user", content: message }
    ];
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
- For recipe requests: ingredients list \u2192 clear numbered steps \u2192 practical tips
- For technique questions: explain the method \u2192 why it works \u2192 common mistakes
- For ingredient questions: suggest 2-3 dishes \u2192 brief descriptions
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
` : ""}
${dietMode && dietMode !== "none" ? `
<diet_mode>
IMPORTANT: The user follows a ${dietMode === "lowcarb" ? "LOW CARB diet - minimize carbohydrates, avoid pasta, bread, rice, potatoes. Focus on proteins, vegetables, healthy fats" : dietMode === "keto" ? "KETOGENIC diet - very low carb (under 20-50g/day), high fat, moderate protein. Avoid all sugars, grains, most fruits. Focus on meat, fish, eggs, cheese, nuts, low-carb vegetables" : dietMode === "vegetarian" ? "VEGETARIAN diet - no meat or fish. Eggs and dairy are OK. Suggest plant proteins like legumes, tofu, tempeh, seitan" : dietMode === "vegan" ? "VEGAN diet - no animal products at all. No meat, fish, eggs, dairy, honey. Focus on plant-based proteins, legumes, tofu, nutritional yeast for umami" : dietMode === "glutenfree" ? "GLUTEN-FREE diet - avoid wheat, barley, rye, spelt. Use rice, corn, quinoa, buckwheat, certified gluten-free oats. Check all sauces and processed ingredients" : dietMode === "lactosefree" ? "LACTOSE-FREE diet - avoid milk, cream, soft cheeses. Hard aged cheeses and butter are usually OK. Suggest plant milks, lactose-free alternatives" : dietMode === "highprotein" ? "HIGH PROTEIN diet - maximize protein intake. Focus on lean meats, fish, eggs, legumes, Greek yogurt, cottage cheese. Include protein in every meal" : "specific dietary restriction"}.

ALL recipe suggestions and menus MUST comply with this diet. If the user asks for something incompatible, suggest a compliant alternative.
</diet_mode>
` : ""}
${ragContext}
${perplexityContext}`;
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 2e3,
        stream: true,
        system: systemPrompt,
        messages
      })
    });
    if (!response.ok) {
      const error = await response.text();
      console.error("Anthropic API error:", error);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        ...corsHeaders
      }
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders }
    });
  }
}, "onRequestPost");
var onRequestOptions2 = /* @__PURE__ */ __name(async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}, "onRequestOptions");

// ../.wrangler/tmp/pages-XzSetR/functionsRoutes-0.2155934051567211.mjs
var routes = [
  {
    routePath: "/api/analyze-pantry",
    mountPath: "/api",
    method: "OPTIONS",
    middlewares: [],
    modules: [onRequestOptions]
  },
  {
    routePath: "/api/analyze-pantry",
    mountPath: "/api",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost]
  },
  {
    routePath: "/api/chat",
    mountPath: "/api",
    method: "OPTIONS",
    middlewares: [],
    modules: [onRequestOptions2]
  },
  {
    routePath: "/api/chat",
    mountPath: "/api",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost2]
  }
];

// ../../../../../opt/homebrew/lib/node_modules/wrangler/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// ../../../../../opt/homebrew/lib/node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");

// ../../../../../opt/homebrew/lib/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../../../opt/homebrew/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// ../.wrangler/tmp/bundle-cw2OP1/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;

// ../../../../../opt/homebrew/lib/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// ../.wrangler/tmp/bundle-cw2OP1/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=functionsWorker-0.46906118167794986.mjs.map
