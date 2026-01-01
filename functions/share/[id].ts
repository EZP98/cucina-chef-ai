// Server-side render for /share/:id with OG meta tags for WhatsApp preview

interface Env {
  DB: D1Database;
}

interface SharedRecipeRow {
  id: string;
  name: string;
  time: string | null;
  servings: string | null;
  ingredients: string;
  steps: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { env, params, request } = context;
  const shareId = params.id as string;

  // Check if this is a bot/crawler requesting (for OG preview)
  const userAgent = request.headers.get('user-agent') || '';
  const isCrawler = /facebookexternalhit|WhatsApp|Twitterbot|TelegramBot|LinkedInBot|Slackbot|Discordbot/i.test(userAgent);

  // If not a crawler, serve the SPA (let client-side handle it)
  if (!isCrawler) {
    return context.next();
  }

  // For crawlers, fetch recipe and return HTML with OG tags
  try {
    const recipe = await env.DB.prepare(
      'SELECT * FROM shared_recipes WHERE id = ?'
    ).bind(shareId).first<SharedRecipeRow>();

    if (!recipe) {
      return new Response(generateHTML({
        title: 'Ricetta non trovata',
        description: 'Questa ricetta non esiste o è stata rimossa.',
        url: 'https://gusto-8cx.pages.dev/share/' + shareId,
      }), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    const ingredients = JSON.parse(recipe.ingredients) as string[];
    const ingredientList = ingredients.slice(0, 5).join(', ');
    const hasMore = ingredients.length > 5 ? '...' : '';
    const description = recipe.time
      ? recipe.time + ' - Ingredienti: ' + ingredientList + hasMore
      : 'Ingredienti: ' + ingredientList + hasMore;

    return new Response(generateHTML({
      title: recipe.name + ' - Ricetta su Gusto',
      description,
      url: 'https://gusto-8cx.pages.dev/share/' + shareId,
    }), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });

  } catch (error) {
    console.error('Share OG error:', error);
    return context.next();
  }
};

function generateHTML(og: { title: string; description: string; url: string }): string {
  const t = escapeHtml(og.title);
  const d = escapeHtml(og.description);
  const u = og.url;
  
  return '<!DOCTYPE html>' +
    '<html lang="it">' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<title>' + t + '</title>' +
    '<meta name="description" content="' + d + '">' +
    '<meta property="og:type" content="article">' +
    '<meta property="og:url" content="' + u + '">' +
    '<meta property="og:title" content="' + t + '">' +
    '<meta property="og:description" content="' + d + '">' +
    '<meta property="og:image" content="https://gusto-8cx.pages.dev/og-image.png">' +
    '<meta property="og:image:width" content="1200">' +
    '<meta property="og:image:height" content="630">' +
    '<meta property="og:site_name" content="Gusto">' +
    '<meta property="og:locale" content="it_IT">' +
    '<meta name="twitter:card" content="summary_large_image">' +
    '<meta name="twitter:title" content="' + t + '">' +
    '<meta name="twitter:description" content="' + d + '">' +
    '<meta name="twitter:image" content="https://gusto-8cx.pages.dev/og-image.png">' +
    '<meta http-equiv="refresh" content="0; url=' + u + '">' +
    '</head>' +
    '<body>' +
    '<h1>' + t + '</h1>' +
    '<p>' + d + '</p>' +
    '<p><a href="' + u + '">Apri la ricetta su Gusto</a></p>' +
    '</body>' +
    '</html>';
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
