import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './App.css'
import { homeMeta } from './blog/seo'
import { useDocumentHead } from './blog/useDocumentHead'

function App() {
  const [daysAway, setDaysAway] = useState(58)
  const [isNarrow, setIsNarrow] = useState(false)

  useDocumentHead(useMemo(homeMeta, []))

  useEffect(() => {
    const shutdown = new Date(2026, 7, 31) // August 31, 2026
    const today = new Date()
    const diffDays = Math.max(0, Math.ceil((shutdown.getTime() - today.getTime()) / 86400000))
    setDaysAway(diffDays)

    const handleResize = () => {
      setIsNarrow(window.innerWidth < 620)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const flowDir = isNarrow ? 'column' : 'row'
  const arrow = isNarrow ? '↓' : '→'

  return (
    <div className="page-wrapper">
      <div className="top-banner">
        Stocky shuts down August 31, 2026 — <strong className="highlight">{daysAway} days</strong> away. FillShelves is available now.
      </div>

      <div className="receipt-container">
        <motion.div 
          className="receipt-shadow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="edge-top"></div>

          <div className="receipt-content">
            <header className="header">
              <div className="stars">* * * * * * * * * *</div>
              <div className="brand">FILLSHELVES</div>
              <div className="subtitle">Restock · Purchase orders · Shopify POS</div>
              <div className="stars">* * * * * * * * * *</div>
            </header>

            <section className="hero-section">
              <div className="stamp">Available Now</div>
              <h1>The simple Stocky replacement.</h1>
              <p className="description">
                The 'fill my shelves' button is coming back. FillShelves looks at what sold, suggests what to reorder, and turns it into purchase orders your vendors can act on.
              </p>

              <a href="https://apps.shopify.com/fillshelves" target="_blank" rel="noopener noreferrer" className="cta-button">
                Install on Shopify
              </a>
              
              <p className="pricing">
                Free 30-day trial. $15/month after. No tiers, no revenue-based pricing.
              </p>
            </section>

            <section className="flow-section">
              <div className="flow-title">HOW IT RUNS</div>
              <div className="flow-diagram" style={{ flexDirection: flowDir }}>
                <div className="flow-step">
                  <div className="step-title">SOLD</div>
                  <div className="step-desc">last 30/60/90</div>
                </div>
                <div className="flow-arrow">{arrow}</div>
                <div className="flow-step">
                  <div className="step-title">SUGGEST</div>
                  <div className="step-desc">vs. on hand</div>
                </div>
                <div className="flow-arrow">{arrow}</div>
                <div className="flow-step">
                  <div className="step-title">PO</div>
                  <div className="step-desc">by vendor</div>
                </div>
                <div className="flow-arrow">{arrow}</div>
                <div className="flow-step">
                  <div className="step-title">RECEIVE</div>
                  <div className="step-desc">stock updates</div>
                </div>
              </div>
            </section>

            <section className="features-section">
              <h2 className="features-title">WHAT IT DOES</h2>

              <div className="feature-item">
                <div className="feature-num">01</div>
                <div>
                  <div className="feature-name">Fill shelves in one click</div>
                  <div className="feature-text">Restock suggestions from your last 30/60/90 days of sales, checked against what's on hand. Adjust any line — your judgment beats the number.</div>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-num">02</div>
                <div>
                  <div className="feature-name">Purchase orders by vendor</div>
                  <div className="feature-text">Grouped, editable, sent as PDF or email. Receive against them, full or partial, and your Shopify inventory updates.</div>
                </div>
              </div>

              <div className="feature-item no-border">
                <div className="feature-num">03</div>
                <div>
                  <div className="feature-name">Works how retail actually works</div>
                  <div className="feature-text">Your vendors, your order cycles, your minimums. No demand curves.</div>
                </div>
              </div>
            </section>

            <section className="anti-features-section">
              <h2 className="anti-features-title">WHAT IT DELIBERATELY DOESN'T DO</h2>

              <div className="anti-feature-item">
                <span className="struck">AI forecasting</span>
                <span className="void">VOID</span>
              </div>
              <div className="anti-feature-item">
                <span className="struck">Multi-channel sync</span>
                <span className="void">VOID</span>
              </div>
              <div className="anti-feature-item">
                <span className="struck">Analytics dashboards</span>
                <span className="void">VOID</span>
              </div>
              <div className="anti-feature-item">
                <span className="struck">$349/month tier</span>
                <span className="void">VOID</span>
              </div>

              <p className="anti-features-text">
                If you need those, the big apps are great. If you just want Stocky's restock workflow back for the price of lunch, that's this.
              </p>
            </section>

            <section className="closing-section">
              <p className="description">
                Built by one developer. Tell me what your restock workflow needs — every reply gets read.
              </p>

              <a href="https://apps.shopify.com/fillshelves" target="_blank" rel="noopener noreferrer" className="cta-button">
                Install on Shopify
              </a>

              <p className="pricing" style={{ marginTop: '18px' }}>
                New to the shutdown?{' '}
                <Link to="/blog" className="text-link">Read the Stocky shutdown guide →</Link>
              </p>
            </section>

            <footer className="footer">
              <div className="barcode"></div>
              <div className="footer-disclaimer">FillShelves — independent app, not affiliated with Shopify or Stocky.</div>
              <div className="footer-thanks">* * * THANK YOU * * *</div>
            </footer>
          </div>
          
          <div className="edge-bottom"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default App
