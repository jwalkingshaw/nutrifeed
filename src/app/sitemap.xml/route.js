import { client } from '@/lib/sanity';

const baseUrl = 'https://nutrifeed.vercel.app'; // ← update to your real URL

export async function GET() {
 const posts = await client.fetch(`*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]{
  "slug": slug.current,
  _updatedAt
}`);


  const staticPages = ['', '/about', '/contact', '/industry-news', '/marketing', '/pricing', '/privacy', '/roadmap', '/terms'];

  const urls = [
    ...staticPages.map((path) => ({
      loc: `${baseUrl}${path}`,
      lastmod: new Date().toISOString(),
    })),
    ...posts.map((post) => ({
      loc: `${baseUrl}/post/${post.slug}`,
      lastmod: post._updatedAt,
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, lastmod }) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${new Date(lastmod).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
