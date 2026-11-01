# Workpacket WP05: Resources & Insights Content Engine

## 1. Goal & Context
Implement a content-driven **Resources / Insights** section (`/resources` and `/resources/[slug]`). This engine enables ShiftBy to publish doctrine essays, executive briefs, methodology papers, and case studies to build authority and drive inbound executive conversion.

## 2. Inputs & References
* `v2docs/Doctrine.md`
* `v2docs/Bounded AI.md`, `v2docs/Human–AI Accountability.md`, `v2docs/Organizational Memory.md`
* `SHIFTBY_EXECUTIVE_EXPERIENCE_AUDIT.md` (Finding R6: Evidence & Thought Leadership)

## 3. Tasks

### Task 5.1: Content Storage & Data Layer
* Create directory `content/resources/` to house markdown/MDX articles.
* Build a lightweight parser/loader in `lib/resources.ts` that:
  * Reads frontmatter (title, slug, date, author, category, readingTime, excerpt, tags).
  * Parses markdown content into HTML/React elements.
  * Sorts articles by date descending.
  * Provides `getAllResources()` and `getResourceBySlug(slug)`.

### Task 5.2: Resources Hub (`app/resources/page.tsx`)
* Design an editorial grid of resources:
  * Featured article banner (lead essay).
  * Filter/category pills: *Doctrine Essays*, *Executive Briefs*, *Technical Architecture*, *AI Governance*.
  * Clean resource card showing title, excerpt, publication date, reading time, and category tag.

### Task 5.3: Individual Article Template (`app/resources/[slug]/page.tsx`)
* Create `app/resources/[slug]/page.tsx` with `article.module.css`:
  * **Header**: Category tag, publish date, title, subtitle/lead, estimated reading time, author credential (Ananda Krishna, AIGP).
  * **Executive Summary Box**: Key takeaways before long-form text.
  * **Article Body**: Clean typography, blockquotes, callout blocks, table formatting.
  * **Author Bio & Credential Footer**: Founder positioning and direct link to schedule a discussion.
  * **Dynamic Metadata**: Canonical URL, OpenGraph article tags, publish dates.

### Task 5.4: Seed Initial Articles from v2 Foundation
* Author 3 initial high-impact publications directly from `v2docs`:
  1. `enterprise-understanding-beyond-artifacts.md`: Why organizations preserve artifacts while context fades, and how Enterprise Understanding preserves confidence.
  2. `the-bounded-ai-principle.md`: Why agentic discretion without explicit boundaries creates catastrophic execution drift.
  3. `rag-retrieval-vs-answer-grounding.md`: Why citation presence does not equal answer correctness in enterprise RAG systems.

## 4. Deliverables
* [ ] Content loader in `lib/resources.ts`
* [ ] Hub page `app/resources/page.tsx` with `resources.module.css`
* [ ] Dynamic route `app/resources/[slug]/page.tsx` with `article.module.css`
* [ ] 3 seeded articles in `content/resources/`
* [ ] Updated navigation in header/footer to include "Resources"

## 5. Verification & Acceptance Criteria
* `/resources` renders cleanly with filtering/sorting.
* Individual slug routes generate valid static pages during `next build`.
* Social share metadata (OpenGraph article tags) passes verification.
