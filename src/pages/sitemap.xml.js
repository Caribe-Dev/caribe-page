import { getAllCategories, getAllPosts, getAllTags, getPostsByCategory, getTotalPages } from '@/lib/blog'
import { escapeXml, sendXml } from '@/lib/xml'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

// Paths for pages 2..N of a paginated listing
function extraPages(basePath, posts) {
  return Array.from({ length: getTotalPages(posts) - 1 }, (_, index) => ({ path: `${basePath}/page/${index + 2}` }))
}

function buildSitemap() {
  const posts = getAllPosts()
  const entries = [
    { path: '/' },
    { path: '/blog', lastmod: posts[0]?.date },
    ...extraPages('/blog', posts),
    ...getAllCategories().flatMap((category) => {
      const basePath = `/blog/categoria/${category.slug}`
      return [{ path: basePath }, ...extraPages(basePath, getPostsByCategory(category.slug))]
    }),
    ...posts.map((post) => ({ path: `/blog/${post.slug}`, lastmod: post.updatedAt || post.date })),
    ...getAllTags().map((tag) => ({ path: `/blog/tag/${tag.slug}` })),
  ]

  const urls = entries
    .map(({ path, lastmod }) => [
      '  <url>',
      `    <loc>${escapeXml(`${DOMAIN}${path}`)}</loc>`,
      lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
      '  </url>',
    ].filter(Boolean).join('\n'))
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

export const getServerSideProps = async ({ res }) => {
  sendXml(res, buildSitemap())
  return { props: {} }
}

export default function Sitemap() {
  return null
}
