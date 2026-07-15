// Static prerender step. Runs after the client build and the SSR build:
//   1. reads the built dist/index.html as a template (keeps Vite's hashed
//      script/style tags + favicons/manifest),
//   2. renders every route to static HTML with per-page <head> + JSON-LD,
//   3. writes dist/<route>/index.html for each,
//   4. emits sitemap.xml and robots.txt.
//
// The result: full, crawlable HTML for every URL — no JS required to see the
// content, meta tags, or structured data.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, 'dist')

const server = await import(pathToFileURL(join(__dirname, 'dist-ssr/entry-server.js')).href)
const { routes, renderPage, SITE } = server

const template = readFileSync(join(DIST, 'index.html'), 'utf8')

function pageFile(routePath) {
  if (routePath === '/') return join(DIST, 'index.html')
  return join(DIST, routePath.replace(/^\//, ''), 'index.html')
}

function buildHtml(head, bodyHtml) {
  return template
    // Drop the placeholder <title> from the template; renderHead supplies one.
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    .replace('</head>', head + '\n  </head>')
    .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`)
}

const sitemapEntries = []

for (const routePath of routes) {
  const { html, head, meta } = renderPage(routePath)
  const out = pageFile(routePath)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, buildHtml(head, html))
  console.log('prerendered', routePath, '→', out.replace(DIST, 'dist'))

  sitemapEntries.push({
    loc: SITE.origin + (routePath === '/' ? '/' : routePath),
    lastmod: meta.lastmod,
    changefreq: meta.changefreq,
    priority: meta.priority,
  })
}

// ---- sitemap.xml ----
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sitemapEntries
    .map((e) => {
      const parts = [`    <loc>${e.loc}</loc>`]
      if (e.lastmod) parts.push(`    <lastmod>${e.lastmod}</lastmod>`)
      if (e.changefreq) parts.push(`    <changefreq>${e.changefreq}</changefreq>`)
      if (e.priority != null) parts.push(`    <priority>${e.priority.toFixed(1)}</priority>`)
      return `  <url>\n${parts.join('\n')}\n  </url>`
    })
    .join('\n') +
  `\n</urlset>\n`

writeFileSync(join(DIST, 'sitemap.xml'), sitemap)
console.log('wrote sitemap.xml with', sitemapEntries.length, 'urls')

// ---- robots.txt ----
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE.origin}/sitemap.xml
`
writeFileSync(join(DIST, 'robots.txt'), robots)
console.log('wrote robots.txt')
