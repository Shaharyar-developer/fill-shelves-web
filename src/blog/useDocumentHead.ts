import { useEffect } from 'react'
import type { PageMeta } from './seo'

// On the server, crawlers get the fully-rendered <head> from the prerender step.
// On the client we only need to keep the head in sync as the user navigates the
// SPA, so this mutates the existing tags (or creates them) rather than
// duplicating what prerender already injected.
function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useDocumentHead(meta: PageMeta) {
  useEffect(() => {
    document.title = meta.title
    setMeta('meta[name="description"]', 'name', 'description', meta.description)
    setLink('canonical', meta.canonical)
    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', meta.canonical)
    setMeta('meta[property="og:type"]', 'property', 'og:type', meta.type)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description)
  }, [meta])
}
