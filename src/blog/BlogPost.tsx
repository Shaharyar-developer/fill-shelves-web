import { Link, useParams } from 'react-router-dom'
import '../App.css'
import './blog.css'
import { getPost, formatDate } from './posts'
import { postMeta } from './seo'
import { useDocumentHead } from './useDocumentHead'
import Markdown from './Markdown'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  useDocumentHead(
    post
      ? postMeta({
          slug: post.slug,
          title: post.title,
          description: post.description,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          canonical: post.canonical,
          keywords: post.keywords,
          faqSchema: post.faqSchema,
        })
      : {
          path: '/blog',
          title: 'Post not found — FillShelves Blog',
          description: 'That post could not be found.',
          canonical: 'https://fillshelves.com/blog',
          type: 'website',
          image: 'https://fillshelves.com/web-app-manifest-512x512.png',
          jsonLd: [],
        },
  )

  if (!post) return <NotFound />

  return (
    <div className="page-wrapper">
      <div className="receipt-container blog-container">
        <div className="receipt-shadow">
          <div className="edge-top" />

          <div className="receipt-content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <Link to="/blog">Blog</Link>
              <span className="sep">/</span>
              <span className="current">{post.title}</span>
            </nav>

            <article>
              <header className="post-header">
                <h1 className="post-title">{post.title}</h1>
                <div className="post-meta">
                  {formatDate(post.datePublished)}
                  <span className="dot">·</span>
                  {post.readingMinutes} min read
                  <span className="dot">·</span>
                  {post.author}
                </div>
              </header>

              <div className="post-prose">
                <Markdown>{post.body}</Markdown>
              </div>
            </article>

            <div className="post-cta">
              <p className="post-cta-text">
                Just need Stocky's restock workflow back — see what sold, POs by
                vendor, receiving — for $15/mo flat?
              </p>
              <a
                href="https://apps.shopify.com/fillshelves"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Start your free 30-day trial
              </a>
            </div>

            <footer className="footer" style={{ marginTop: '44px' }}>
              <div className="barcode" />
              <div className="footer-disclaimer">
                FillShelves — independent app, not affiliated with Shopify or Stocky.
              </div>
              <Link className="blog-back" to="/blog" style={{ marginBottom: 0, marginTop: '4px' }}>
                ← All posts
              </Link>
            </footer>
          </div>

          <div className="edge-bottom" />
        </div>
      </div>
    </div>
  )
}
