import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

// Renders post Markdown with GitHub-flavored extensions (tables, task lists).
// Internal links use the router so in-app navigation stays a SPA transition;
// external links open safely in a new tab.
const components: Components = {
  a({ href, children }) {
    const url = href ?? ''
    if (url.startsWith('/')) {
      return <Link to={url}>{children as ReactNode}</Link>
    }
    return (
      <a href={url} target="_blank" rel="noopener noreferrer nofollow">
        {children as ReactNode}
      </a>
    )
  },
  // Wrap tables so wide comparison grids scroll on small screens.
  table({ children }) {
    return (
      <div className="table-scroll">
        <table>{children as ReactNode}</table>
      </div>
    )
  },
}

export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {children}
    </ReactMarkdown>
  )
}
