// /robots.txt — generated so the Sitemap line always uses the live address.
// Every line is explained in docs/seo-and-ai-search.md.
import type { APIRoute } from 'astro';
import { SITE } from '../config/site';

export const GET: APIRoute = () =>
  new Response(
    `# robots.txt — Cee Bee Enterprises (CB Decor)

# Search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# AI search and assistants
User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

# Everyone else
User-agent: *
Allow: /
Disallow: /thanks/

Sitemap: ${SITE.url}/sitemap-index.xml
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
