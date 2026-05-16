import { tools, categories } from '@/data/tools';

export async function GET() {
  const baseUrl = 'https://aitoolshub.com';

  const pages = [
    { loc: baseUrl, lastmod: new Date().toISOString().split('T')[0], priority: '1.0' },
    { loc: `${baseUrl}/tools`, lastmod: new Date().toISOString().split('T')[0], priority: '0.9' },
    { loc: `${baseUrl}/submit`, lastmod: new Date().toISOString().split('T')[0], priority: '0.8' },
    { loc: `${baseUrl}/about`, lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
    { loc: `${baseUrl}/privacy`, lastmod: new Date().toISOString().split('T')[0], priority: '0.6' },
    { loc: `${baseUrl}/terms`, lastmod: new Date().toISOString().split('T')[0], priority: '0.6' },
  ];

  const categoryUrls = categories.map((cat) => ({
    loc: `${baseUrl}/categories/${cat.slug}`,
    lastmod: new Date().toISOString().split('T')[0],
    priority: '0.8',
  }));

  const toolUrls = tools.map((tool) => ({
    loc: tool.url,
    lastmod: new Date().toISOString().split('T')[0],
    priority: '0.5',
  }));

  const allUrls = [...pages, ...categoryUrls, ...toolUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map((url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <priority>${url.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
