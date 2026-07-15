// Pure SEO helpers — no DOM access, so this module is safe to import from the
// client bundle, the SSR bundle, and the Node prerender step alike.

export const SITE = {
  origin: 'https://fillshelves.com',
  name: 'FillShelves',
  tagline: 'The simple Stocky replacement for Shopify',
  // Social share image (already shipped in /public).
  ogImage: 'https://fillshelves.com/web-app-manifest-512x512.png',
  logo: 'https://fillshelves.com/web-app-manifest-512x512.png',
  twitter: '@fillshelves',
  installUrl: 'https://apps.shopify.com/fillshelves',
} as const

export interface PageMeta {
  path: string
  title: string
  description: string
  canonical: string
  type: 'website' | 'article'
  image: string
  keywords?: string[]
  published?: string
  modified?: string
  /** Structured data blocks to embed as <script type="application/ld+json">. */
  jsonLd: object[]
  /** Sitemap hints. */
  lastmod?: string
  priority?: number
  changefreq?: string
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const org = {
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.origin,
  logo: SITE.logo,
} as const

/** Build the full set of <head> tags for a page as an HTML string. */
export function renderHead(meta: PageMeta): string {
  const t = escapeHtml(meta.title)
  const d = escapeHtml(meta.description)
  const url = escapeHtml(meta.canonical)
  const img = escapeHtml(meta.image)

  const tags: string[] = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
  ]

  if (meta.keywords && meta.keywords.length) {
    tags.push(`<meta name="keywords" content="${escapeHtml(meta.keywords.join(', '))}" />`)
  }

  tags.push(
    `<meta property="og:type" content="${meta.type}" />`,
    `<meta property="og:site_name" content="${SITE.name}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="${SITE.twitter}" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${img}" />`,
  )

  if (meta.type === 'article') {
    if (meta.published) tags.push(`<meta property="article:published_time" content="${meta.published}" />`)
    if (meta.modified) tags.push(`<meta property="article:modified_time" content="${meta.modified}" />`)
    tags.push(`<meta property="article:publisher" content="${SITE.origin}" />`)
  }

  for (const block of meta.jsonLd) {
    // JSON-LD is embedded raw; escape the closing-script sequence defensively.
    const json = JSON.stringify(block).replace(/<\/(script)/gi, '<\\/$1')
    tags.push(`<script type="application/ld+json">${json}</script>`)
  }

  return tags.map((tag) => '    ' + tag).join('\n')
}

function breadcrumb(items: { name: string; path: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: SITE.origin + it.path,
    })),
  }
}

// ---- Per-route metadata builders --------------------------------------------

export function homeMeta(): PageMeta {
  return {
    path: '/',
    title: 'FillShelves — The Simple Stocky Replacement for Shopify',
    description:
      'Stocky shuts down August 31, 2026. FillShelves brings back the restock workflow: see what sold, get purchase orders grouped by vendor, and receive stock back into Shopify. $15/mo flat.',
    canonical: SITE.origin + '/',
    type: 'website',
    image: SITE.ogImage,
    lastmod: '2026-07-15',
    priority: 1.0,
    changefreq: 'weekly',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        ...org,
        sameAs: [SITE.installUrl],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE.name,
        url: SITE.origin,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: SITE.name,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Shopify',
        description:
          'Restock suggestions, purchase orders by vendor, and receiving for Shopify — a simple, flat-rate replacement for Stocky.',
        offers: {
          '@type': 'Offer',
          price: '15',
          priceCurrency: 'USD',
        },
      },
    ],
  }
}

export function privacyMeta(): PageMeta {
  return {
    path: '/privacy-policy',
    title: 'Privacy Policy — FillShelves',
    description:
      'How the FillShelves Shopify app handles your data. We never store customer personal information and delete store data on uninstall.',
    canonical: SITE.origin + '/privacy-policy',
    type: 'website',
    image: SITE.ogImage,
    lastmod: '2026-06-07',
    priority: 0.3,
    changefreq: 'yearly',
    jsonLd: [],
  }
}

export interface BlogPostSummary {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified: string
  canonical: string
  keywords: string[]
  faqSchema: unknown | null
}

export function blogIndexMeta(items: BlogPostSummary[]): PageMeta {
  return {
    path: '/blog',
    title: 'The Stocky Shutdown Guide — FillShelves Blog',
    description:
      'Everything Shopify merchants need after Stocky shuts down August 31, 2026: alternatives compared, a migration checklist, the real pricing math, and how to run purchase orders by vendor.',
    canonical: SITE.origin + '/blog',
    type: 'website',
    image: SITE.ogImage,
    lastmod: items[0]?.dateModified,
    priority: 0.9,
    changefreq: 'weekly',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'FillShelves Blog',
        url: SITE.origin + '/blog',
        description:
          'Guides for Shopify merchants migrating off Stocky before it shuts down on August 31, 2026.',
        publisher: org,
        blogPost: items.map((p) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          url: p.canonical,
          datePublished: p.datePublished,
          dateModified: p.dateModified,
        })),
      },
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ]),
    ],
  }
}

export function postMeta(p: BlogPostSummary): PageMeta {
  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.description,
    url: p.canonical,
    mainEntityOfPage: { '@type': 'WebPage', '@id': p.canonical },
    datePublished: p.datePublished,
    dateModified: p.dateModified,
    author: org,
    publisher: org,
    image: SITE.ogImage,
    keywords: p.keywords.join(', '),
  }

  const jsonLd: object[] = [
    blogPosting,
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: p.title, path: '/blog/' + p.slug },
    ]),
  ]
  if (p.faqSchema && typeof p.faqSchema === 'object') {
    jsonLd.push(p.faqSchema as object)
  }

  return {
    path: '/blog/' + p.slug,
    title: `${p.title} | FillShelves`,
    description: p.description,
    canonical: p.canonical,
    type: 'article',
    image: SITE.ogImage,
    keywords: p.keywords,
    published: p.datePublished,
    modified: p.dateModified,
    lastmod: p.dateModified,
    priority: 0.8,
    changefreq: 'monthly',
    jsonLd,
  }
}
