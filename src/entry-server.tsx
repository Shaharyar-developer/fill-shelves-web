import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes.tsx'
import { posts } from './blog/posts'
import {
  SITE,
  renderHead,
  homeMeta,
  privacyMeta,
  blogIndexMeta,
  postMeta,
  type PageMeta,
} from './blog/seo'

function summaries() {
  return posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    datePublished: p.datePublished,
    dateModified: p.dateModified,
    canonical: p.canonical,
    keywords: p.keywords,
    faqSchema: p.faqSchema,
  }))
}

/** Every path we statically prerender to its own index.html. */
export const routes: string[] = [
  '/',
  '/privacy-policy',
  '/blog',
  ...posts.map((p) => `/blog/${p.slug}`),
]

function metaForPath(path: string): PageMeta {
  if (path === '/') return homeMeta()
  if (path === '/privacy-policy') return privacyMeta()
  if (path === '/blog') return blogIndexMeta(summaries())

  const slug = path.replace('/blog/', '')
  const post = summaries().find((p) => p.slug === slug)
  if (post) return postMeta(post)

  // Fallback (should not happen for known routes).
  return {
    path,
    title: SITE.name,
    description: SITE.tagline,
    canonical: SITE.origin + path,
    type: 'website',
    image: SITE.ogImage,
    jsonLd: [],
  }
}

export interface RenderedPage {
  html: string
  head: string
  meta: PageMeta
}

export function renderPage(path: string): RenderedPage {
  const meta = metaForPath(path)
  const html = renderToStaticMarkup(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  )
  return { html, head: renderHead(meta), meta }
}

export { SITE }
