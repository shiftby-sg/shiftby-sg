# Workpacket WP07: SEO, Metadata Harmonization, CSS Decommissioning & Verification

## 1. Goal & Context
Finalize the v2 migration by wiring all routes to centralized metadata, normalizing Schema.org structured data, safely decommissioning legacy monolithic CSS files, purging unused Phase 1 scaffold code, updating the automated test manifest (`run-validation-suite.mjs`), and running the complete test/validation suite.

## 2. Inputs & References
* `content/discoverability.ts`
* `lib/metadata.ts`
* `lib/structured-data.ts`
* `tests/validation/run-validation-suite.mjs`
* `playwright.config.ts`

## 3. Tasks

### Task 7.1: Centralized Metadata Registry Unification
* Update `content/discoverability.ts` to include all v2 routes:
  * `/` (Home)
  * `/capabilities` (Capabilities Hub)
  * `/capabilities/organizational-memory`
  * `/capabilities/bounded-ai`
  * `/capabilities/human-ai-accountability`
  * `/services`
  * `/resources`
  * `/about`
  * `/perspective`
  * `/contact`
  * `/ai-policy`
* Refactor every `page.tsx` file to export `metadata = getPageMetadata(pageMetadataEntries.<route>)`.
* Verify OpenGraph tags, Twitter cards, canonical tags, and keywords across all pages.

### Task 7.2: Schema.org Structured Data Normalization
* In `lib/structured-data.ts`:
  * Normalize `@id` URIs to avoid double-slashes (`${siteRoot}#organization`).
  * Add the 3 capabilities (*Organizational Memory*, *Bounded AI*, *Human–AI Accountability*) to `knowsAbout` topics.
  * Add founder credentials (AIGP) to the `Person` schema.
  * Define `ProfessionalService` schema with the 7 service catalog offerings.

### Task 7.3: Decommissioning Monolithic CSS & Legacy Dead Code
* Safely remove or archive:
  * `styles/page-materialization.css` (6,400 lines)
  * Legacy page CSS files once replaced by CSS Modules
  * Unused Phase 1 scaffold components: `components/placeholder-page.tsx`, `components/page-shell.tsx`, `components/section-frame.tsx`, `components/page-intro.tsx`, `components/evidence-block.tsx`, `components/cta-block.tsx`, `components/signal-card.tsx`.
* Clean up `.gitignore` to prevent tracking `.DS_Store`, `mockups/`, and build artifacts.

### Task 7.4: Test Suite & Validation Manifest Update
* Update `tests/validation/run-validation-suite.mjs`:
  * Update `routes` array to test all v2 routes (including `/capabilities/bounded-ai`, `/capabilities/organizational-memory`, `/capabilities/human-ai-accountability`, and `/resources`).
  * Remove expectations for deleted legacy CSS files (`styles/homepage.css`, etc.).
* Run:
  1. `npm run typecheck` (zero TypeScript errors)
  2. `npm run lint` (zero ESLint warnings)
  3. `npm run build` (successful static page generation for all routes)
  4. Lighthouse / validation suite check across mobile and desktop viewports.

## 4. Deliverables
* [x] Fully unified `content/discoverability.ts` and `lib/structured-data.ts`
* [x] All routes using `getPageMetadata`
* [x] Legacy CSS and dead scaffold components purged
* [x] Updated `tests/validation/run-validation-suite.mjs` matching v2 routes
* [x] Updated validation fixtures matching v2 routes and CSS Modules

## 5. Verification & Acceptance Criteria
* 100% route coverage with valid HTML, sitemap XML, and robots.txt.
* Zero build errors, type errors, or lint warnings.
* Total CSS footprint reduced by > 70% compared to v1.
