import { getAllPosts } from '@/lib/blog'
import { escapeXml, sendXml } from '@/lib/xml'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

function buildFeed() {
  const posts = getAllPosts()

  const items = posts
    .map((post) => {
      const url = `${DOMAIN}/blog/${post.slug}`

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
      <dc:creator>${escapeXml(post.author)}</dc:creator>
      <description>${escapeXml(post.description)}</description>
${post.tags.map((tag) => `      <category>${escapeXml(tag.name)}</category>`).join('\n')}
    </item>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Blog | Caribe Dev</title>
    <link>${escapeXml(`${DOMAIN}/blog`)}</link>
    <atom:link href="${escapeXml(`${DOMAIN}/blog/rss.xml`)}" rel="self" type="application/rss+xml" />
    <description>Historias, aprendizajes y tutoriales de la comunidad tecnológica del Caribe colombiano.</description>
    <language>es</language>
${posts[0] ? `    <lastBuildDate>${new Date(`${posts[0].date}T00:00:00Z`).toUTCString()}</lastBuildDate>\n` : ''}${items}
  </channel>
</rss>
`
}

export const getServerSideProps = async ({ res }) => {
  sendXml(res, buildFeed(), 'application/rss+xml')
  return { props: {} }
}

export default function RssFeed() {
  return null
}
