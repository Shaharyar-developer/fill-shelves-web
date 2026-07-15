// Single source of truth for the blog: the authored Markdown lives in
// /content/blog/*.md. We load it at build time (both the client bundle and the
// SSR/prerender bundle) so there is never a second copy to keep in sync.

export interface Post {
  slug: string
  title: string
  description: string
  keywords: string[]
  datePublished: string
  dateModified: string
  author: string
  canonical: string
  /** Prose Markdown, with the trailing JSON-LD code block stripped out. */
  body: string
  /** The FAQPage JSON-LD, already parsed, ready to inline in <head>. */
  faqSchema: unknown | null
  /** Reading time in minutes, rounded up. */
  readingMinutes: number
}

// Eagerly import every post as a raw string. The leading slash is repo-root
// relative, which keeps /content as the one and only place posts are authored.
const files = import.meta.glob('/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

// Curated ordering: comparison hub first, then the deadline/utility pieces,
// then the evergreen tutorial, then the shareable pricing rant.
const ORDER = [
  'stocky-alternatives-2026',
  'stocky-shutdown-migration-checklist',
  'shopify-admin-vs-stocky',
  'shopify-purchase-orders-by-vendor',
  'cheap-stocky-alternative-pricing-math',
]

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw)
  if (!match) return { data: {}, content: raw }

  const data: Record<string, unknown> = {}
  const lines = match[1].split(/\r?\n/)
  let currentListKey: string | null = null

  for (const line of lines) {
    if (line.trim() === '') continue
    const listItem = /^\s*-\s+(.*)$/.exec(line)
    if (listItem && currentListKey) {
      ;(data[currentListKey] as string[]).push(unquote(listItem[1].trim()))
      continue
    }
    const kv = /^([A-Za-z0-9_]+):\s*(.*)$/.exec(line)
    if (kv) {
      const key = kv[1]
      const value = kv[2].trim()
      if (value === '') {
        // Start of a block list (e.g. `keywords:` followed by `- ...`).
        data[key] = []
        currentListKey = key
      } else {
        data[key] = unquote(value)
        currentListKey = null
      }
    }
  }
  return { data, content: match[2] }
}

function unquote(value: string): string {
  return value.replace(/^["']|["']$/g, '')
}

// The FAQ JSON-LD is authored as a fenced ```html block after an HTML comment
// marker. We pull the JSON out (for structured data) and drop that whole tail
// from the visible prose.
const FAQ_MARKER = '<!-- FAQ Schema Markup -->'

function extractFaqSchema(content: string): { body: string; faqSchema: unknown | null } {
  const markerIndex = content.indexOf(FAQ_MARKER)
  let body = (markerIndex >= 0 ? content.slice(0, markerIndex) : content).trimEnd()

  // Drop the leading H1 — the page renders the title as its single <h1>, so the
  // Markdown's own `# Title` would create a duplicate H1 (an SEO anti-pattern).
  body = body.replace(/^\s*#\s+.*\r?\n+/, '')

  // Strip "[Screenshot: ...]" placeholder blockquotes so the tutorial reads as
  // finished prose until real images are dropped in. Real `![alt](src)` image
  // markdown does not match this pattern and renders normally.
  body = body.replace(/^>\s*_?\[Screenshot:[^\]]*\]_?\s*$/gim, '').replace(/\n{3,}/g, '\n\n')

  let faqSchema: unknown | null = null
  const jsonLdMatch = /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/.exec(content)
  if (jsonLdMatch) {
    try {
      faqSchema = JSON.parse(jsonLdMatch[1])
    } catch {
      faqSchema = null
    }
  }
  return { body, faqSchema }
}

function estimateReadingMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 220))
}

function buildPost(raw: string): Post {
  const { data, content } = parseFrontmatter(raw)
  const { body, faqSchema } = extractFaqSchema(content)
  return {
    slug: String(data.slug ?? ''),
    title: String(data.title ?? ''),
    description: String(data.metaDescription ?? ''),
    keywords: Array.isArray(data.keywords) ? (data.keywords as string[]) : [],
    datePublished: String(data.datePublished ?? ''),
    dateModified: String(data.dateModified ?? data.datePublished ?? ''),
    author: String(data.author ?? 'FillShelves'),
    canonical: String(data.canonical ?? ''),
    body,
    faqSchema,
    readingMinutes: estimateReadingMinutes(body),
  }
}

export const posts: Post[] = Object.values(files)
  .map(buildPost)
  .filter((p) => p.slug)
  .sort((a, b) => {
    const ai = ORDER.indexOf(a.slug)
    const bi = ORDER.indexOf(b.slug)
    if (ai !== -1 && bi !== -1) return ai - bi
    if (ai !== -1) return -1
    if (bi !== -1) return 1
    return b.datePublished.localeCompare(a.datePublished)
  })

export const postsBySlug: Record<string, Post> = Object.fromEntries(
  posts.map((p) => [p.slug, p]),
)

export function getPost(slug: string | undefined): Post | undefined {
  return slug ? postsBySlug[slug] : undefined
}

/** Up to `n` other posts, for the "keep reading" section. */
export function relatedPosts(slug: string, n = 3): Post[] {
  return posts.filter((p) => p.slug !== slug).slice(0, n)
}

export function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00Z')
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
