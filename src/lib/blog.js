import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'src/content/blog')
const POST_EXTENSIONS = ['.mdx', '.md']
const REQUIRED_FIELDS = ['title', 'description', 'date', 'author', 'tags']
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
const WORDS_PER_MINUTE = 200
export const POSTS_PER_PAGE = 9

const showDrafts = process.env.NODE_ENV !== 'production'

export function slugify(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// YAML parses unquoted dates as Date objects; normalize to YYYY-MM-DD strings
function normalizeDate(value, file, field) {
  const date = value instanceof Date ? value.toISOString().slice(0, 10) : String(value)

  if (!DATE_REGEX.test(date) || Number.isNaN(new Date(date).getTime())) {
    throw new Error(`[blog] ${file}: "${field}" debe tener formato YYYY-MM-DD (recibido: ${value})`)
  }

  return date
}

function validate(data, file) {
  for (const field of REQUIRED_FIELDS) {
    if (data[field] === undefined || data[field] === null || data[field] === '') {
      throw new Error(`[blog] ${file}: falta el campo obligatorio "${field}" en el frontmatter`)
    }
  }

  if (!Array.isArray(data.tags) || data.tags.length === 0) {
    throw new Error(`[blog] ${file}: "tags" debe ser una lista con al menos un tag`)
  }

  const cover = data.cover || data.image
  if (cover && !String(cover).startsWith('/')) {
    throw new Error(`[blog] ${file}: "cover" debe ser una ruta local dentro de /public (ej. /images/blog/portada.png)`)
  }
}

function readingTime(content) {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

function parsePostFile(file) {
  const slug = path.basename(file, path.extname(file))
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')
  const { data, content } = matter(raw)

  validate(data, file)

  const meta = {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: normalizeDate(data.date, file, 'date'),
    updatedAt: data.updatedAt ? normalizeDate(data.updatedAt, file, 'updatedAt') : null,
    author: String(data.author),
    tags: data.tags.map((name) => ({ name: String(name), slug: slugify(name) })),
    category: data.category ? String(data.category) : null,
    // `cover` (dev.to style) and `image` are aliases for the optional cover image
    image: data.cover || data.image || null,
    imageAlt: data.coverAlt ? String(data.coverAlt) : null,
    draft: data.draft === true,
    readingTime: readingTime(content),
  }

  return { meta, content }
}

function loadPosts() {
  if (!fs.existsSync(POSTS_DIR)) return []

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => POST_EXTENSIONS.includes(path.extname(file)))

  const seen = new Map()
  const posts = files.map((file) => {
    const post = parsePostFile(file)
    const { slug } = post.meta

    if (seen.has(slug)) {
      throw new Error(`[blog] slug duplicado "${slug}" en ${seen.get(slug)} y ${file}`)
    }
    seen.set(slug, file)

    return post
  })

  return posts
    .filter((post) => showDrafts || !post.meta.draft)
    .sort((a, b) => b.meta.date.localeCompare(a.meta.date))
}

export function getAllPosts() {
  return loadPosts().map((post) => post.meta)
}

export function getPostBySlug(slug) {
  return loadPosts().find((post) => post.meta.slug === slug) || null
}

export function getAllTags() {
  const tags = new Map()

  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      const current = tags.get(tag.slug)
      tags.set(tag.slug, { ...tag, count: (current?.count || 0) + 1 })
    }
  }

  return [...tags.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
}

export function getAllCategories() {
  const categories = new Map()

  for (const post of getAllPosts()) {
    if (post.category) {
      categories.set(slugify(post.category), { name: post.category, slug: slugify(post.category) })
    }
  }

  return [...categories.values()].sort((a, b) => a.name.localeCompare(b.name))
}

export function getPostsByCategory(categorySlug) {
  return getAllPosts().filter((post) => post.category && slugify(post.category) === categorySlug)
}

export function getTotalPages(posts) {
  return Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE))
}

// Returns null for out-of-range pages so callers can respond with notFound
export function paginate(posts, page) {
  const totalPages = getTotalPages(posts)

  if (!Number.isInteger(page) || page < 1 || page > totalPages) return null

  return {
    posts: posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE),
    currentPage: page,
    totalPages,
  }
}

export function getPostsByTag(tagSlug) {
  return getAllPosts().filter((post) => post.tags.some((tag) => tag.slug === tagSlug))
}

export function getRelatedPosts(post, limit = 3) {
  const postTags = new Set(post.tags.map((tag) => tag.slug))

  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const sharedTags = candidate.tags.filter((tag) => postTags.has(tag.slug)).length
      const sameCategory = post.category && candidate.category === post.category ? 1 : 0
      return { candidate, score: sameCategory * 10 + sharedTags }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ candidate }) => candidate)
}
