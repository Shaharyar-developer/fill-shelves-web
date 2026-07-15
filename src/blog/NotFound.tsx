import { Link } from 'react-router-dom'
import '../App.css'
import './blog.css'

export default function NotFound() {
  return (
    <div className="page-wrapper">
      <div className="receipt-container blog-container">
        <div className="receipt-shadow">
          <div className="edge-top" />
          <div className="receipt-content" style={{ textAlign: 'center' }}>
            <header className="header" style={{ marginBottom: '24px' }}>
              <div className="stars">* * * * * * * * * *</div>
              <div className="brand" style={{ fontSize: '20px' }}>404</div>
              <div className="subtitle">Page not found</div>
              <div className="stars">* * * * * * * * * *</div>
            </header>
            <p className="blog-intro">
              That page doesn't exist. It may have moved.
            </p>
            <div className="post-cta" style={{ borderStyle: 'dashed' }}>
              <Link className="cta-button" to="/blog">Read the Stocky shutdown guide</Link>
            </div>
            <footer className="footer" style={{ marginTop: '32px' }}>
              <div className="barcode" />
              <Link className="blog-back" to="/" style={{ marginBottom: 0 }}>← Back to home</Link>
            </footer>
          </div>
          <div className="edge-bottom" />
        </div>
      </div>
    </div>
  )
}
