---
title: "Stocky Shuts Down August 31 — The Migration Checklist"
slug: stocky-shutdown-migration-checklist
metaDescription: "Stocky shuts down after August 31, 2026. Here's exactly what to export, the timeline to follow, and the three gotchas Shopify warns about — including the supplier data you can't export."
keywords:
  - stocky shutting down
  - stocky sunset date
  - stocky discontinued 2026
  - stocky shutdown what to do
  - export stocky data
datePublished: 2026-07-15
dateModified: 2026-07-15
author: FillShelves
canonical: https://fillshelves.com/blog/stocky-shutdown-migration-checklist
---

# Stocky Shuts Down August 31 — The Migration Checklist

**Short answer:** Stocky stops working after **August 31, 2026**. Before then you need to (1) receive and close every open purchase order, (2) export your completed POs, stocktakes, and cost data as CSV, and (3) manually rebuild your supplier list — because **supplier data can't be exported from Stocky at all**. You'll have read-only export access for at least 90 days after the deadline, but the app itself goes dark. ([Shopify Help Center](https://help.shopify.com/en/manual/products/inventory/transitioning-from-stocky))

This is the checklist. No fluff.

---

## The timeline

| Date | What happens | What to do |
|---|---|---|
| **Feb 2, 2026** | Stocky removed from the Shopify App Store (already happened) | New installs disabled |
| **~Aug 17, 2026** (≈14 days before) | Shopify's recommended cutoff for *new* orders | **Stop creating new POs in Stocky** |
| **Before Aug 31, 2026** | Final export window while the app is fully functional | Receive/close open POs, export everything |
| **After Aug 31, 2026** | App and all Stocky APIs stop working | Data is read-only export only |
| **~90+ days after** | Read-only export access for at least 90 days | Last chance to pull anything you missed |

Shopify's own guidance is explicit: stop creating new orders **about 14 days before August 31, 2026**, and **"receive and close all open, in-transit purchase orders in Stocky before the deadline."** ([Shopify Help Center](https://help.shopify.com/en/manual/products/inventory/transitioning-from-stocky))

---

## The export checklist

Do these in order. Everything is a manual export — nothing migrates automatically.

- [ ] **Close open purchase orders.** Receive anything in transit and mark POs complete. Draft/open POs won't carry any useful status into a new system, so clear the board.
- [ ] **Export completed purchase orders** as CSV (Purchase Orders → export each PO / PO report).
- [ ] **Export your stocktake history** as CSV.
- [ ] **Export your historical cost data** as CSV.
- [ ] **Manually capture your supplier list.** There is no export. Copy every vendor's name, email, contact, and terms into a spreadsheet by hand (or skip this step entirely — see the shortcut below).
- [ ] **Save everything off-platform** — download the CSVs to your own drive, not just "in Shopify." After the deadline you only have read-only access.
- [ ] **Pick and set up your replacement app before August 31** so there's no gap in your reorder cycle.

---

## The three gotchas nobody warns you about

### Gotcha 1: You cannot export your suppliers

This is the big one. Straight from Shopify: *"Suppliers can't be exported from Stocky."* No CSV, no API, no button. Every vendor relationship you built inside Stocky — emails, contacts, lead times — has to be re-entered by hand in your new tool. For a store with 40 vendors, that's an afternoon of copy-paste. ([Shopify Help Center](https://help.shopify.com/en/manual/products/inventory/transitioning-from-stocky))

**The shortcut:** your vendor names already live on your Shopify products, in the built-in `vendor` field. Any tool that reads that field can rebuild your supplier list instantly. **FillShelves detects your vendors automatically from your products** — the one thing you *can't* export from Stocky is the thing it recreates in one click. You just add each vendor's email and you're done. That turns the single most painful migration step into a non-event.

### Gotcha 2: Historical POs can't be imported into Shopify

Even the POs you *can* export don't come back cleanly. Per Shopify: *"Historical purchase orders can't be imported into Shopify,"* and the native CSV upload *"only adds product line items to a new draft purchase order. It can't import past purchase order statuses, received quantities, or supplier links."* ([Shopify Help Center](https://help.shopify.com/en/manual/products/inventory/transitioning-from-stocky))

Translation: your exported PO CSVs are **records for your files**, not something you re-import to get history back. Keep them for accounting and reordering reference. Don't expect your PO history to live inside Shopify.

### Gotcha 3: "Read-only for 90 days" is a safety net, not a plan

Shopify gives you read-only export access for at least 90 days after August 31. That's there so you can grab something you forgot — not so you can keep running your business on Stocky. Once the deadline passes, you can't create POs, receive stock, or run suggestions. Treat August 31 as the hard wall and be fully migrated before it.

---

## After you've exported: what replaces the workflow?

Exporting is only half the job. The other half is running your next reorder cycle somewhere. Your options, briefly:

- **Shopify Admin (native):** handles transfers, draft POs, and receiving — but **not** restock suggestions or min/max replenishment. See [Shopify Admin vs. Stocky: What You Actually Lose](/blog/shopify-admin-vs-stocky).
- **Forecasting suites** (Inventory Planner, inFlow, Prediko, Sumtracker): full-featured, $49–129+/mo, right for large or multi-warehouse catalogs.
- **FillShelves ($15/mo flat):** for small retail stores that just need restock suggestions, per-vendor POs, and receiving — with vendors auto-detected so you skip Gotcha 1 entirely.

Full comparison: [Stocky Alternatives in 2026: Every Option Compared](/blog/stocky-alternatives-2026).

---

## FAQ

**When exactly does Stocky shut down?**
After August 31, 2026. The app and all its APIs stop working after that date. Stocky was removed from the Shopify App Store on February 2, 2026.

**Can I export my data from Stocky?**
Partly. You can export completed purchase order reports, stocktake history, and historical cost data as CSV. You cannot export your supplier list — there is no export option for supplier data.

**Can I export suppliers from Stocky?**
No. Supplier data cannot be exported from Stocky. You must re-enter vendors manually in your new system, or use a tool that detects vendors from your Shopify product data automatically.

**Can I import my Stocky purchase orders into Shopify?**
No. Historical purchase orders can't be imported into Shopify. The native CSV upload only creates draft line items and can't restore statuses, received quantities, or supplier links.

**How long do I have read-only access after the shutdown?**
At least 90 days after August 31, 2026. Use it only as a safety net to grab anything you missed — you can't run your reorder workflow in read-only mode.

**When should I stop creating purchase orders in Stocky?**
About 14 days before August 31, 2026 — Shopify recommends stopping new orders around then and receiving/closing all open, in-transit POs before the deadline.

---

> **Skip the worst migration step entirely:** [Start a 30-day free trial of FillShelves](https://apps.shopify.com/fillshelves). It auto-detects your vendors from Shopify, so the supplier list you *can't* export from Stocky rebuilds itself in one click.

<!-- FAQ Schema Markup -->
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When exactly does Stocky shut down?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After August 31, 2026. The app and all its APIs stop working after that date. Stocky was removed from the Shopify App Store on February 2, 2026."
      }
    },
    {
      "@type": "Question",
      "name": "Can I export my data from Stocky?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Partly. You can export completed purchase order reports, stocktake history, and historical cost data as CSV. You cannot export your supplier list — there is no export option for supplier data."
      }
    },
    {
      "@type": "Question",
      "name": "Can I export suppliers from Stocky?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Supplier data cannot be exported from Stocky. You must re-enter vendors manually in your new system, or use a tool that detects vendors from your Shopify product data automatically."
      }
    },
    {
      "@type": "Question",
      "name": "Can I import my Stocky purchase orders into Shopify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Historical purchase orders can't be imported into Shopify. The native CSV upload only creates draft line items and can't restore statuses, received quantities, or supplier links."
      }
    },
    {
      "@type": "Question",
      "name": "How long do I have read-only access after the shutdown?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At least 90 days after August 31, 2026. Use it only as a safety net to grab anything you missed — you can't run your reorder workflow in read-only mode."
      }
    },
    {
      "@type": "Question",
      "name": "When should I stop creating purchase orders in Stocky?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "About 14 days before August 31, 2026. Shopify recommends stopping new orders around then and receiving and closing all open, in-transit purchase orders before the deadline."
      }
    }
  ]
}
</script>
```
