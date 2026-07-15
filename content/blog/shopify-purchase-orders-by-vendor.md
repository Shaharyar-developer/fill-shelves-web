---
title: "How to Create Purchase Orders by Vendor in Shopify (Post-Stocky)"
slug: shopify-purchase-orders-by-vendor
metaDescription: "A step-by-step guide to creating purchase orders grouped by vendor in Shopify after Stocky shuts down — the native draft-PO route and the faster restock-app route, with screenshots."
keywords:
  - shopify purchase orders by vendor
  - shopify reorder app
  - restock app shopify
  - purchase order app shopify
datePublished: 2026-07-15
dateModified: 2026-07-15
author: FillShelves
canonical: https://fillshelves.com/blog/shopify-purchase-orders-by-vendor
---

# How to Create Purchase Orders by Vendor in Shopify (Post-Stocky)

**Short answer:** Shopify doesn't have native purchase orders exposed the way Stocky did, so after the shutdown you have two paths: (1) build **draft purchase orders manually** in Shopify Admin, grouping products by vendor yourself, or (2) use a **restock app** that reads what sold, suggests reorder quantities, and **auto-groups the POs by vendor**. This guide walks through both, so you can pick based on how many vendors you buy from.

With Stocky sunsetting after August 31, 2026, "how do I make a PO per vendor" is suddenly a live question for thousands of stores. Here's the workflow, step by step.

---

## First: understand how Shopify handles vendors

Every Shopify product has a built-in **Vendor** field (Products → a product → Organization → Vendor). Stocky used a richer supplier record with contact info; Shopify's vendor is just a text string on the product — no email, no lead time, no contact.

That matters for two reasons:

1. **Grouping** a PO by vendor means grouping products that share the same Vendor string.
2. When you move off Stocky, **supplier contact info can't be exported** — but the Vendor *string* is already sitting on your products. Any tool that reads it can reconstruct your vendor list instantly.

Keep your product Vendor fields clean and consistent (e.g., always "Acme Co.", never sometimes "Acme"). Grouping only works as well as your data.

---

## Method 1: Native draft purchase orders in Shopify Admin

Best for stores with **just a few vendors** and time to do it by hand.

### Step 1 — Find what sold

> _[Screenshot: Shopify Admin → Analytics → Reports → "Products sold by variant", filtered to your date range]_

Go to **Analytics → Reports** and open a **sales-by-product** report for your reorder window (last 30/60/90 days). Note quantities sold. Shopify won't subtract on-hand for you here — you're reading raw sales.

### Step 2 — Check on-hand inventory

> _[Screenshot: Shopify Admin → Products → Inventory, showing on-hand quantities by location]_

Open **Products → Inventory**. For each product that sold, note the **on-hand** quantity at the location you're reordering for. Your rough reorder quantity is *sold − on-hand − already-on-order*.

### Step 3 — Create a draft PO per vendor

> _[Screenshot: Shopify Admin → Purchase orders → Create purchase order, vendor/supplier field highlighted]_

In Admin, create a **draft purchase order** and set the supplier/vendor. Add only the line items for products from **that one vendor**. Repeat — a separate draft PO for each vendor you're ordering from. This manual grouping is the part Stocky automated; natively, you do it by hand.

> **Heads up:** Shopify's native CSV upload for POs only creates a **draft with line items** — it can't restore historical statuses, received quantities, or supplier links. So you can't bulk-import your old Stocky POs to get a head start. ([Shopify Help Center](https://help.shopify.com/en/manual/products/inventory/transitioning-from-stocky))

### Step 4 — Send and receive

Export/print the draft PO to send to your vendor (Shopify has no native "email PO to supplier from the app" like this). When stock arrives, **receive** against the PO so inventory updates.

**The catch:** for anything past ~5 vendors, Method 1 is a slow, error-prone afternoon every reorder cycle — reading two reports, doing subtraction in your head, and hand-splitting line items by vendor. That's exactly the grind Stocky removed.

---

## Method 2: A restock app that groups POs by vendor automatically

Best for stores with **more than a handful of vendors** — or anyone who wants their reorder cycle back to 10 minutes. This is the FillShelves workflow ($15/mo flat).

### Step 1 — Install and let it detect your vendors

> _[Screenshot: FillShelves Vendors screen — list of vendors auto-detected from product data, each with an "add email" field]_

On install, FillShelves reads the **Vendor field on your products** and builds your vendor list automatically. No re-typing — the supplier list you *couldn't* export from Stocky rebuilds itself. You just add each vendor's email (and optional lead time).

### Step 2 — Click "Fill Shelves"

> _[Screenshot: FillShelves home — sales window picker (30/60/90 days), location picker, and the "Fill Shelves" button]_

Pick a sales window and location, then hit the button. FillShelves compares **units sold vs. on-hand** and suggests **"replace what sold"** for every variant — the subtraction from Method 1, done for you. Zero-quantity lines are hidden by default.

### Step 3 — Review, grouped by vendor

> _[Screenshot: FillShelves suggestions list grouped by vendor — product, sold, on hand, suggested qty (editable) per line]_

Suggestions arrive **already grouped by vendor**. Every line is editable — change a quantity, zero out a line, or add a product manually via search. Your judgment always wins over the number.

### Step 4 — Create POs, send, receive

> _[Screenshot: FillShelves PO detail — one PO per vendor with Send (email/PDF) and Receive actions]_

Accept the suggestions and FillShelves creates **one purchase order per vendor**. Send each as an **email or PDF**. When boxes arrive, open the PO in **receive** mode, enter what came in (supports partial receiving), and FillShelves **writes the inventory back into Shopify** at that location.

That's the full loop — see what sold, order by vendor, receive — in one place.

---

## Which method should you use?

| Situation | Use |
|---|---|
| 1–3 vendors, plenty of time | Method 1 (native draft POs) |
| Several+ vendors, want speed | Method 2 (restock app) |
| You want restock suggestions done for you | Method 2 |
| You want vendors rebuilt without re-typing | Method 2 |
| You need advanced demand forecasting | Neither — see [full comparison](/blog/stocky-alternatives-2026) |

---

## FAQ

**Does Shopify have purchase orders?**
Shopify supports draft purchase orders in Admin, but it doesn't expose native POs via API the way Stocky did, and it won't group them by vendor or suggest reorder quantities automatically. You group and calculate manually, or use a restock app.

**How do I group purchase orders by vendor in Shopify?**
Natively, you create a separate draft PO for each vendor and add only that vendor's products. A restock app like FillShelves does the grouping automatically by reading each product's Vendor field.

**Where does Shopify get the vendor for a product?**
From the built-in Vendor field on each product (Product → Organization → Vendor). It's a text string with no contact info, so tools store vendor email and lead time separately.

**Can I import my old Stocky purchase orders into Shopify?**
No. Historical POs can't be imported. Shopify's native CSV upload only creates a draft PO with line items — it can't restore statuses, received quantities, or supplier links.

**What's the fastest way to reorder by vendor after Stocky shuts down?**
Use a restock app that reads what sold, suggests quantities, and auto-groups POs by vendor. FillShelves does this for $15/month flat, including receiving that writes inventory back to Shopify.

---

## Keep reading

- [Shopify Admin vs. Stocky: What You Actually Lose](/blog/shopify-admin-vs-stocky)
- [Stocky Alternatives in 2026: Every Option Compared](/blog/stocky-alternatives-2026)
- [Stocky Shuts Down August 31 — The Migration Checklist](/blog/stocky-shutdown-migration-checklist)

---

> **Get your reorder cycle back to 10 minutes:** [Start a 30-day free trial of FillShelves](https://apps.shopify.com/fillshelves) — restock suggestions, per-vendor POs, and receiving for $15/mo flat.

<!-- FAQ Schema Markup -->
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Shopify have purchase orders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shopify supports draft purchase orders in Admin, but it doesn't expose native POs via API the way Stocky did, and it won't group them by vendor or suggest reorder quantities automatically. You group and calculate manually, or use a restock app."
      }
    },
    {
      "@type": "Question",
      "name": "How do I group purchase orders by vendor in Shopify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Natively, you create a separate draft purchase order for each vendor and add only that vendor's products. A restock app like FillShelves does the grouping automatically by reading each product's Vendor field."
      }
    },
    {
      "@type": "Question",
      "name": "Where does Shopify get the vendor for a product?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "From the built-in Vendor field on each product (Product → Organization → Vendor). It's a text string with no contact info, so tools store vendor email and lead time separately."
      }
    },
    {
      "@type": "Question",
      "name": "Can I import my old Stocky purchase orders into Shopify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Historical POs can't be imported. Shopify's native CSV upload only creates a draft PO with line items — it can't restore statuses, received quantities, or supplier links."
      }
    },
    {
      "@type": "Question",
      "name": "What's the fastest way to reorder by vendor after Stocky shuts down?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use a restock app that reads what sold, suggests quantities, and auto-groups purchase orders by vendor. FillShelves does this for $15/month flat, including receiving that writes inventory back to Shopify."
      }
    }
  ]
}
</script>
```
