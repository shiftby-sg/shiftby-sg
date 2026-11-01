# ShiftBy v2 Website Migration Master Plan

## 1. Overview & Objective

This plan details the full transition of the ShiftBy.sg website from the v1 prototype/scaffold to the **v2 Architecture & Experience**, incorporating the latest authoritative documentation in [`v2docs/`](../v2docs):

* **Doctrine.md**: The foundational proposition: **Enterprise Understanding** ("*preserve, connect, retrieve, apply appropriately, and govern context through change*").
* **Three Complementary Capabilities**:
  1. **Organizational Memory** (continuity beyond individual memory).
  2. **Bounded AI** (reduced drift in AI-supported reasoning and execution).
  3. **Human–AI Accountability** (sustained human and organizational answerability).
  *(Note: Adaptive Execution was reclassified as an operating outcome of the three, and Decision Traceability was integrated as an assurance dimension).*
* **Individual Capability Routes**: Dedicated deep-dive pages for each capability (`/capabilities/[slug]`).
* **Service Catalog.md**: Complete revamp of `/services` into 7 defined offerings with concrete scopes, "Typical outputs", and clear engagement models.
* **Resources & Insights Section**: A new content-driven hub (`/resources`) for doctrine essays, executive briefs, and technical guidance.
* **Technical Debt Elimination**: Eradication of the 6,400-line `page-materialization.css`, modular CSS migration, 2.5 MB logo asset optimization, and unified metadata.

---

## 2. Workpacket Registry

| Workpacket ID | Title | Scope | Dependencies | Est. Impact |
| :--- | :--- | :--- | :--- | :--- |
| [**WP01**](./WP01-foundation-tokens-assets.md) | **Core Architecture, Design Tokens & Asset Optimization** | Logo replacement, design tokens, modular CSS setup, layout shell | None | P0 / Foundation |
| [**WP02**](./WP02-homepage-and-doctrine.md) | **Homepage Doctrine & Enterprise Understanding** | Homepage rewrite, 3 capabilities preview, services preview, doctrine mark | WP01 | P1 / Core Experience |
| [**WP03**](./WP03-three-capabilities-system.md) | **Three Capabilities Hub & Dedicated Routes** | `/capabilities` hub + 3 dedicated sub-pages with structured capability layouts | WP01 | P1 / Architecture |
| [**WP04**](./WP04-revamped-service-catalog.md) | **Revamped Service Catalog & Engagement Model** | Rebuild `/services` with 7 offerings, typical outputs, and engagement process | WP01, WP03 | P1 / Conversion |
| [**WP05**](./WP05-resources-and-insights-engine.md) | **Resources & Insights Content Engine** | `/resources` hub, `/resources/[slug]` dynamic route, MDX/Markdown loader | WP01 | P2 / Authority |
| [**WP06**](./WP06-supporting-routes-and-contact-funnel.md) | **Supporting Routes & Contact Funnel Optimization** | `/about`, `/contact` (with "What happens after contact"), `/perspective`, `/ai-policy` | WP01, WP04 | P2 / Trust & Funnel |
| [**WP07**](./WP07-seo-metadata-and-cleanup.md) | **SEO Harmonization, CSS Decommissioning & Verification** | Metadata unification, Schema.org normalization, legacy CSS pruning, validation | All WPs | P2 / Quality Gate |

---

## 3. Execution Dependency Graph

```mermaid
flowchart TD
    WP01["WP01: Foundation, Tokens & Assets"] --> WP02["WP02: Homepage Doctrine"]
    WP01 --> WP03["WP03: Three Capabilities System"]
    WP01 --> WP05["WP05: Resources Engine"]
    WP03 --> WP04["WP04: Revamped Service Catalog"]
    WP04 --> WP06["WP06: Supporting Routes & Contact Funnel"]
    WP02 --> WP07["WP07: SEO, Cleanup & Verification"]
    WP03 --> WP07
    WP04 --> WP07
    WP05 --> WP07
    WP06 --> WP07
```

---

## 4. Architectural Rules for v2 Implementation

1. **No Monolithic Stylesheets**:
   * Do NOT add rules to `styles/page-materialization.css` or import page CSS into `app/globals.css`.
   * Use CSS Modules (`[feature].module.css`) for all new and refactored components to ensure zero cascade pollution and optimal bundle splitting.
2. **Strict Metadata Registry**:
   * Every public route must export metadata generated via `getPageMetadata()` from `lib/metadata.ts`.
   * All OpenGraph images, titles, descriptions, and canonical URLs must be verified.
3. **Content Authority**:
   * All doctrinal definitions, capability descriptions, and service scope offerings must cite and maintain fidelity to `v2docs/`.
4. **Performance Budgets**:
   * All images must be optimized (SVG for vector marks, WebP/AVIF for photos, sub-100KB total page weight for critical path).
   * Lighthouse targets: Performance >= 90, Accessibility >= 95, Best Practices >= 95, SEO >= 95.
