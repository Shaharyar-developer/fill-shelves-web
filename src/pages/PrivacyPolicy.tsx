import { useMemo } from 'react'
import { motion } from 'framer-motion'
import './PrivacyPolicy.css'
import { privacyMeta } from '../blog/seo'
import { useDocumentHead } from '../blog/useDocumentHead'

function PrivacyPolicy() {
  useDocumentHead(useMemo(privacyMeta, []))
  return (
    <div className="page-wrapper">
      <div className="receipt-container" style={{ maxWidth: '800px' }}>
        <motion.div 
          className="receipt-shadow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="edge-top"></div>

          <div className="receipt-content privacy-content">
            <header className="header" style={{ marginBottom: '40px' }}>
              <div className="stars">* * * * * * * * * *</div>
              <div className="brand" style={{ fontSize: '24px' }}>PRIVACY POLICY</div>
              <div className="subtitle">FillShelves App</div>
              <div className="stars">* * * * * * * * * *</div>
            </header>

            <article className="policy-text">
              <h1>FillShelves Privacy Policy</h1>

              <p>
                <strong>Effective date:</strong> June 7, 2026
                <br />
                <strong>Operator:</strong> Shaharyar, the developer of FillShelves ("we," "us"). Contact:
                contact@fillshelves.com
              </p>

              <p>
                FillShelves is a Shopify app that helps retailers see what sold, decide what to reorder,
                create purchase orders for their vendors, and update inventory when stock arrives. This
                policy explains what data the app touches, why, where it lives, and how to get it removed.
                It is written in plain English on purpose.
              </p>

              <h2>The short version</h2>
              <ul>
                <li>
                  We read your store's product, order, inventory, and location data from Shopify{" "}
                  <strong>only</strong> to calculate restock suggestions and update stock counts.
                </li>
                <li>
                  We <strong>do not</strong> request, receive, or store your customers' personal information
                  — no names, emails, phone numbers, or addresses. Ever.
                </li>
                <li>
                  We store only what the app needs to work: your vendor contacts, the purchase orders you
                  create, and your settings.
                </li>
                <li>
                  When you uninstall, your data is deleted. We don't sell data, run ads, or use your data to
                  train AI models.
                </li>
              </ul>

              <h2>1. Data we access through Shopify's APIs</h2>
              <p>
                To provide the app's functionality, FillShelves reads the following from your store via the
                Shopify Admin API:
              </p>
              <ul>
                <li>
                  <strong>Products and variants</strong> — titles, SKUs, vendor names, and unit costs, used
                  to display reorder suggestions and build purchase orders.
                </li>
                <li>
                  <strong>Orders</strong> — line items, quantities, dates, cancellation status, and the
                  location a sale is attributed to, used solely to calculate how many units of each product
                  sold in your chosen time window (last 30/60/90 days). Order data can include information
                  that Shopify classifies as protected customer data (such as line items and order values).
                  We request the <strong>minimum access level</strong> and do <strong>not</strong> request
                  access to customer personal information fields (names, email addresses, phone numbers, or
                  physical addresses). We never see who bought something — only what sold, when, and where.
                </li>
                <li>
                  <strong>Inventory levels and locations</strong> — current on-hand quantities per location,
                  used to compare against sales, and written back (with your confirmation) when you receive
                  a purchase order.
                </li>
              </ul>
              <p>
                <strong>What we store from this:</strong> almost none of it. Sales and inventory figures are
                computed when you press "Fill Shelves" and are not retained as a copy of your catalog or
                order history. When you create a purchase order, we store a snapshot of the ordered line
                items (product and variant titles, SKUs, quantities, unit costs) so your PO remains accurate
                even if the product later changes.
              </p>

              <h2>2. Data you give us directly</h2>
              <ul>
                <li>
                  <strong>Vendor contact details</strong> — vendor names are read from your products' vendor
                  field; email addresses, notes, and lead times are entered by you so purchase orders can be
                  emailed.
                </li>
                <li>
                  <strong>Settings</strong> — your default sales window and the reply-to email address for
                  outgoing purchase orders.
                </li>
                <li>
                  <strong>Purchase orders and receiving history</strong> — the POs you create, their
                  statuses, and a log of received quantities, kept so you have an accurate record of what
                  was ordered and what arrived.
                </li>
              </ul>

              <h2>3. Automated logs</h2>
              <p>
                Our hosting infrastructure generates standard technical logs (such as request timestamps and
                error traces) used for keeping the app running and debugging problems. Logs are retained for
                a short period and are not used for analytics, profiling, or marketing.
              </p>

              <h2>4. Why we process this data (purposes)</h2>
              <p>
                We process the data above for exactly one purpose: providing the FillShelves service to you
                — calculating restock suggestions from your sales, generating and sending purchase orders,
                and updating your Shopify inventory when stock is received. We do not use your data for
                advertising, we do not sell or rent it to anyone, and we do not use it to train
                machine-learning models.
              </p>

              <h2>5. Where your data lives and how it's protected</h2>
              <p>
                App data is stored in a managed PostgreSQL database hosted on Railway. Data is encrypted in
                transit (TLS) and at rest via our hosting provider's storage-layer encryption (Railway's
                managed infrastructure). Access to production data is limited to the developer; test and
                production environments are kept separate.
              </p>

              <h2>6. Service providers (subprocessors)</h2>
              <p>We share data with a small number of providers, only as needed to run the app:</p>
              <ul>
                <li>
                  <strong>Shopify</strong> — the platform the app runs on; your use of Shopify is governed
                  by Shopify's own privacy policy.
                </li>
                <li>
                  <strong>Railway</strong> — application hosting and database.
                </li>
                <li>
                  <strong>Plunk</strong> — email delivery. When you email a purchase order, the vendor's
                  email address and the PO document pass through Plunk (which delivers via Amazon SES) to be
                  delivered.
                </li>
              </ul>
              <p>We do not share your data with anyone else.</p>

              <h2>7. Billing</h2>
              <p>
                Subscriptions are handled entirely by Shopify's billing system. We never see or store your
                payment details.
              </p>

              <h2>8. Retention and deletion</h2>
              <ul>
                <li>Your data is retained while the app is installed on your store.</li>
                <li>
                  When you uninstall FillShelves, Shopify notifies us and your store's data — vendors,
                  purchase orders, receiving history, and settings — is deleted from our systems in
                  accordance with Shopify's mandatory redaction process (Shopify sends the deletion request
                  approximately 48 hours after uninstall, and we honor it automatically).
                </li>
                <li>
                  You can request earlier deletion, or a copy of the data we hold for your store, at any
                  time by emailing contact@fillshelves.com. We respond to verified requests within 30 days.
                </li>
              </ul>

              <h2>9. Customer data requests (GDPR/CCPA and similar)</h2>
              <p>
                Because we do not collect or store your customers' personal information, requests relating
                to a specific customer (access or erasure) generally involve no data on our side. We
                subscribe to Shopify's mandatory compliance webhooks (<code>customers/data_request</code>,{" "}
                <code>customers/redact</code>, <code>shop/redact</code>) and respond to each as required:
                customer-level requests are acknowledged (there is no customer personal data in our systems
                to return or erase), and store-level redaction triggers full deletion as described above.
              </p>

              <h2>10. International transfers</h2>
              <p>
                Our infrastructure is hosted in the United States. If you are in a jurisdiction (such as the
                EEA or UK) that restricts international data transfers, we rely on appropriate safeguards,
                including our providers' standard contractual protections. Note that the merchant data we
                process contains business records (products, stock levels, vendor contacts) rather than
                consumer personal data.
              </p>

              <h2>11. Changes to this policy</h2>
              <p>
                If we make material changes, we will update this page and revise the effective date.
                Continued use of the app after changes take effect constitutes acceptance.
              </p>

              <h2>12. Contact</h2>
              <p>
                Questions, data requests, or complaints: <strong>support@fillshelves.com</strong>. We read
                every email.
              </p>
            </article>

            <footer className="footer" style={{ marginTop: '60px' }}>
              <div className="barcode"></div>
              <div className="footer-disclaimer">FillShelves — independent app, not affiliated with Shopify or Stocky.</div>
              <div className="footer-thanks">* * * END OF POLICY * * *</div>
            </footer>
          </div>
          
          <div className="edge-bottom"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
