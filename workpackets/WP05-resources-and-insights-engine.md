# Workpacket WP05: Resources & Insights Content Engine

## 1. Goal & Context
Implement a content-driven **Resources / Insights** section (`/resources` and `/resources/[slug]`). This engine enables ShiftBy to publish doctrine essays, executive briefs, methodology papers, and reframe legacy prototypes (*UnifyPlane*, *CanonLens*, *Inspiral*) as research investigations. The engine must be strictly compatible with **React 19 (`^19.0.0`)** and **Next.js 15 (`^15.0.0`)**.

## 2. Inputs & References
* `v2docs/Doctrine.md`
* `v2docs/Bounded AI.md`, `v2docs/Human–AI Accountability.md`, `v2docs/Organizational Memory.md`
* `app/explorations/page.tsx` (legacy prototypes to reframe into research briefs)
* `SHIFTBY_EXECUTIVE_EXPERIENCE_AUDIT.md` (Finding R6: Evidence & Thought Leadership)

## 3. Tasks

### Task 5.1: React 19-Safe Content Storage & Loader
* Store markdown articles in `content/resources/*.md`.
* Build a lightweight parser/loader in `lib/resources.ts`:
  * Use `gray-matter` for parsing frontmatter (`title`, `slug`, `date`, `author`, `category`, `readingTime`, `excerpt`, `tags`).
  * Use a clean, React 19-safe markdown renderer (or lightweight AST walker) to avoid peer-dependency conflicts with older MDX packages.
  * Provide utility functions: `getAllResources()`, `getResourceBySlug(slug)`, and `getResourcesByCategory(category)`.

### Task 5.2: Resources Hub (`app/resources/page.tsx`)
* Design an editorial grid of resources:
  * Featured article banner (lead doctrine essay).
  * Filter/category pills: *Doctrine Essays*, *Executive Briefs*, *Technical Architecture*, *AI Governance*, *Research Investigations*.
  * Clean resource card showing title, excerpt, publication date, reading time, and category tag.

### Task 5.3: Individual Article Template (`app/resources/[slug]/page.tsx`)
* Create `app/resources/[slug]/page.tsx` with `article.module.css`:
  * **Header**: Category tag, publish date, title, subtitle/lead, estimated reading time, author credential (Ananda Krishna, AIGP).
  * **Executive Summary Box**: Key takeaways highlighted before long-form reading.
  * **Article Body**: Clean typography, blockquotes, callout blocks, table formatting.
  * **Author Bio & Credential Footer**: Founder positioning and direct link to schedule a discussion.
  * **Dynamic Metadata**: Canonical URL, OpenGraph article tags, publish dates.

### Task 5.4: Seed Initial Publications & Reframe Explorations
* Author 4 initial high-impact publications:
  1. `enterprise-understanding-beyond-artifacts.md`: Why organizations preserve artifacts while context fades, and how Enterprise Understanding preserves confidence.
  2. `the-bounded-ai-principle.md`: Why agentic discretion without explicit boundaries creates catastrophic execution drift.
  3. `rag-retrieval-vs-answer-grounding.md`: Why citation presence does not equal answer correctness in enterprise RAG systems.
  4. `investigations-in-context-drift.md` (Reframing Explorations): Reframe *UnifyPlane*, *CanonLens*, and *Inspiral* as ShiftBy's internal research investigations into semantic drift, boundary enforcement, and execution visibility.

### Task 5.5: Legacy Route Redirect Governance (`/explorations`)
* In `next.config.mjs`, add a 308 redirect from `/explorations` to `/resources`.
* Decommission `app/explorations/page.tsx` and `styles/explorations.css`.

## 4. Deliverables
* [x] Content loader in `lib/resources.ts`
* [x] Hub page `app/resources/page.tsx` with `resources.module.css`
* [x] Dynamic route `app/resources/[slug]/page.tsx` with `article.module.css`
* [x] 4 seeded articles in `lib/resources-data.ts`
* [x] 308 redirect configured in `next.config.mjs` for `/explorations`
* [x] Updated navigation in header/footer to include "Resources"

## 5. Verification & Acceptance Criteria
* Zero React 19 / Next.js 15 build warnings during markdown compilation.
* `/resources` renders cleanly with filtering/sorting.
* Individual slug routes generate valid static pages during `next build`.
* Inbound requests to `/explorations` smoothly redirect to `/resources`.
