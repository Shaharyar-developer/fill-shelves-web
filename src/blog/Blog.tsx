import { Link } from 'react-router-dom'
import '../App.css'
import './blog.css'
import { posts, formatDate } from './posts'
import { blogIndexMeta } from './seo'
import { useDocumentHead } from './useDocumentHead'

export default function Blog() {
  useDocumentHead(
    blogIndexMeta(
      posts.map((p) => ({
        slug: p.slug,
        title: p.title,
        description: p.description,
        datePublished: p.datePublished,
        dateModified: p.dateModified,
        canonical: p.canonical,
        keywords: p.keywords,
        faqSchema: p.faqSchema,
      })),
    ),
  )

  return (
    <div className="page-wrapper">
      <div className="receipt-container blog-container">
        <div className="receipt-shadow">
          <div className="edge-top" />

          <div className="receipt-content">
            <header className="header" style={{ marginBottom: '18px' }}>
              <div className="stars">* * * * * * * * * *</div>
              <div className="brand" style={{ fontSize: '15px', letterSpacing: '5px' }}>
                FILLSHELVES BLOG
              </div>
              <h1 className="blog-title">The Stocky Shutdown Guide</h1>
              <div className="stars">* * * * * * * * * *</div>
            </header>

            <p className="blog-intro">
              Stocky is shutting down. These guides cover exactly what to do next —
              what to export before you lose access, how the alternatives really
              compare, and how to rebuild your restock-and-purchase-order workflow
              without a $1,500/year forecasting bill.
            </p>
            <div className="blog-deadline">Stocky shuts down · August 31, 2026</div>

            <ol className="post-list">
              {posts.map((p, i) => (
                <li key={p.slug} className="post-card">
                  <div className="post-card-num">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h2 className="post-card-title">
                      <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                    </h2>
                    <div className="post-card-meta">
                      {formatDate(p.datePublished)} · {p.readingMinutes} min read
                    </div>
                    <p className="post-card-desc">{p.description}</p>
                    <Link className="post-card-more" to={`/blog/${p.slug}`}>
                      Read →
                    </Link>
                  </div>
                </li>
              ))}
            </ol>

            <div className="post-cta">
              <p className="post-cta-text">
                Just need Stocky's restock workflow back for the price of lunch?
              </p>
              <a
                href="https://apps.shopify.com/fillshelves"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Install FillShelves — $15/mo
              </a>
            </div>

            <footer className="footer" style={{ marginTop: '40px' }}>
              <div className="barcode" />
              <div className="footer-disclaimer">
                FillShelves — independent app, not affiliated with Shopify or Stocky.
              </div>
              <Link
                className="blog-back"
                to="/"
                style={{ marginBottom: 0, marginTop: '4px' }}
              >
                ← Back to home
              </Link>
            </footer>
          </div>

          <div className="edge-bottom" />
        </div>
      </div>
    </div>
  )
}
