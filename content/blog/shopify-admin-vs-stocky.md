---
title: "Shopify Admin vs. Stocky: What You Actually Lose"
slug: shopify-admin-vs-stocky
metaDescription: "Shopify says 'just use Admin' when Stocky shuts down. But Admin transfers don't support min/max levels or replenishment suggestions. Here's the feature-by-feature gap — and how to cover it."
keywords:
  - does shopify replace stocky
  - shopify admin inventory vs stocky
  - shopify built in purchase orders
  - shopify restock suggestions
datePublished: 2026-07-15
dateModified: 2026-07-15
author: FillShelves
canonical: https://fillshelves.com/blog/shopify-admin-vs-stocky
---

# Shopify Admin vs. Stocky: What You Actually Lose

**Short answer:** Shopify Admin covers the *storage* side of what Stocky did — transfers, draft purchase orders, inventory adjustments, and receiving all moved into Admin and POS. What it does **not** cover natively is the *thinking* side: **restock suggestions, min/max reorder levels, and replenishment logic.** Those require custom metafields or the Sidekick AI assistant, not a built-in workflow. For most stores, Admin plus one small restock app fills the gap. ([Shopify Help Center](https://help.shopify.com/en/manual/products/inventory/transitioning-from-stocky))

When Stocky shuts down after August 31, 2026, Shopify's official line is essentially "the features you need are now in Admin." That's true for some of them. Here's exactly where it's true and where it isn't.

---

## Feature-by-feature: what moved, what didn't

| Stocky did this | Shopify Admin (native) | Verdict |
|---|---|---|
| Transfer stock between locations | ✅ Transfers in Admin | **Covered** |
| Create purchase orders | ⚠️ Draft POs, manual per-vendor grouping | **Partial** |
| Receive stock against a PO | ✅ Receiving in Admin/POS | **Covered** |
| Adjust inventory | ✅ Inventory adjustments | **Covered** |
| Reporting / cost data | ✅ Reporting in Admin | **Covered** |
| **Restock / reorder suggestions** | ❌ Sidekick AI only | **Lost** |
| **Min/max reorder levels** | ❌ Metafields workaround only | **Lost** |
| **Replenishment workflow** | ❌ Not supported for transfers | **Lost** |
| Supplier records | ❌ Not exportable, not natively rebuilt | **Lost** |

The pattern is clear: **Admin is a good ledger and a poor buyer.** It records what you did. It won't tell you what to reorder.

---

## The three things you actually lose

### 1. Restock suggestions

This was the heart of Stocky for most retailers: open it, and it tells you what to reorder based on what sold. Shopify Admin has no native equivalent. Per Shopify, replenishment suggestions are available *only through the Sidekick AI assistant* — not as a repeatable, reviewable workflow you run every reorder cycle. You can't sit down on the first of the month, pull up "here's what sold vs. what's on hand," and turn it into orders. You're back to eyeballing it or building a spreadsheet.

### 2. Min/max reorder levels

Stocky let you set a minimum and maximum stock level per product and flag anything that dropped below the minimum. In Shopify Admin, **minimum and maximum inventory levels can't be set** as a native feature — Shopify points you at *custom metafield definitions* to fake it. That's a workaround, not a workflow, and it doesn't generate anything for you; it just stores a number.

### 3. The replenishment workflow itself

Shopify is explicit that **admin transfers can't be created using the replenishment workflow.** The connective tissue Stocky provided — "stock is low → here's the suggested order → send it → receive it" — isn't in Admin. You get the individual steps as disconnected tools, but not the loop that made Stocky useful.

---

## What Admin *does* handle well

Give credit where it's due. If your reorder decisions are already in your head — you *know* your vendors and cycles — Admin's native tools are genuinely fine for the mechanical parts:

- **Transfers** between locations are solid.
- **Draft purchase orders** work; you just build and group them manually.
- **Receiving** into Admin/POS updates inventory correctly.
- **Reporting** shows you sales history to inform your own judgment.

For a very small shop with a handful of vendors and a manager who already knows what to buy, Admin alone can work. The gap only bites when you want the tool to *do the reorder math for you.*

---

## The 90% solution: Admin + one small app

Here's the honest conclusion. You do **not** need a $129/month forecasting suite to close the gap Admin leaves. For most stores, the missing piece is exactly one thing: **turn "what sold" into a per-vendor purchase order.** Add a small, focused app that does that, and Admin covers the rest.

That's the entire design of **FillShelves** ($15/mo flat):

- **Restock suggestions** — pick a 30/60/90-day window, see units sold vs. on-hand, get a "replace what sold" quantity per variant. This is the piece Admin lost.
- **Purchase orders by vendor** — suggestions auto-group into one PO per vendor. Vendors are **auto-detected from your Shopify product data**, so you also skip the un-exportable-suppliers problem. Send by email or PDF.
- **Receiving that writes back** — enter what arrived; inventory updates in Shopify.

Admin keeps doing transfers, adjustments, and reporting. The app supplies the reorder brain Admin doesn't have. Together that's ~90% of what a small store used Stocky for, at 12% of the price of the forecasting tools.

> Want min/max reorder levels specifically? That's a forecasting-adjacent feature. FillShelves focuses on "replace what sold" rather than threshold automation today — if hard min/max rules are core to how you buy, compare the [full alternatives list](/blog/stocky-alternatives-2026).

---

## FAQ

**Does Shopify Admin replace Stocky?**
Partially. Admin natively replaces transfers, draft purchase orders, receiving, inventory adjustments, and reporting. It does not natively replace Stocky's restock suggestions, min/max reorder levels, or replenishment workflow.

**Can I set min/max inventory levels in Shopify Admin?**
Not as a native feature. Shopify suggests using custom metafield definitions as a workaround, but Admin has no built-in min/max reorder-level automation.

**Does Shopify have built-in restock or reorder suggestions?**
No native workflow. Replenishment suggestions are available only through Shopify's Sidekick AI assistant, not as a repeatable reorder screen like Stocky had.

**Can I create purchase orders in Shopify Admin?**
Yes, you can create draft purchase orders in Admin, but you group them by vendor manually and there's no automatic restock suggestion feeding them. A small app like FillShelves adds the suggestions and auto-groups POs by vendor.

**Is Shopify Admin enough to replace Stocky for a small store?**
For the mechanical steps (transfers, receiving, reporting), often yes. For the reorder decision itself, most stores add one small restock app to cover the suggestions and per-vendor POs Admin lacks.

---

## Keep reading

- [How to Create Purchase Orders by Vendor in Shopify (Post-Stocky)](/blog/shopify-purchase-orders-by-vendor) — the step-by-step
- [Stocky Alternatives in 2026: Every Option Compared](/blog/stocky-alternatives-2026)
- [Stocky Shuts Down August 31 — The Migration Checklist](/blog/stocky-shutdown-migration-checklist)

---

> **Give Admin the reorder brain it's missing:** [Start a 30-day free trial of FillShelves](https://apps.shopify.com/fillshelves) — restock suggestions + per-vendor POs for $15/mo flat.

<!-- FAQ Schema Markup -->
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Shopify Admin replace Stocky?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Partially. Admin natively replaces transfers, draft purchase orders, receiving, inventory adjustments, and reporting. It does not natively replace Stocky's restock suggestions, min/max reorder levels, or replenishment workflow."
      }
    },
    {
      "@type": "Question",
      "name": "Can I set min/max inventory levels in Shopify Admin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not as a native feature. Shopify suggests using custom metafield definitions as a workaround, but Admin has no built-in min/max reorder-level automation."
      }
    },
    {
      "@type": "Question",
      "name": "Does Shopify have built-in restock or reorder suggestions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No native workflow. Replenishment suggestions are available only through Shopify's Sidekick AI assistant, not as a repeatable reorder screen like Stocky had."
      }
    },
    {
      "@type": "Question",
      "name": "Can I create purchase orders in Shopify Admin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can create draft purchase orders in Admin, but you group them by vendor manually and there's no automatic restock suggestion feeding them. A small app like FillShelves adds the suggestions and auto-groups POs by vendor."
      }
    },
    {
      "@type": "Question",
      "name": "Is Shopify Admin enough to replace Stocky for a small store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For the mechanical steps like transfers, receiving, and reporting, often yes. For the reorder decision itself, most stores add one small restock app to cover the suggestions and per-vendor POs Admin lacks."
      }
    }
  ]
}
</script>
```
