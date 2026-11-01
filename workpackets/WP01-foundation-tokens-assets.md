# Workpacket WP01: Core Architecture, Design Tokens & Asset Optimization

## 1. Goal & Context
Establish a lean, modern design token foundation and component shell for the v2 migration, removing the reliance on monolithic global CSS (`page-materialization.css`), fixing the critical 2.5 MB header logo performance issue with vector-sharp SVG/WebP assets, and ensuring clean layout modularity.

## 2. Inputs & References
* `components/global-header.tsx`, `components/global-footer.tsx`
* `public/logo/ShiftBy-Logo-4000px.png`
* `components/BrandDoctrineMark.tsx`
* `styles/page-materialization.css` (for reference tokens to extract)
* `lib/design-tokens.ts`

## 3. Tasks

### Task 1.1: Logo Asset Optimization (Vector-Sharp & Lightweight)
* Replace the 2.5 MB `public/logo/ShiftBy-Logo-4000px.png` in `GlobalHeader` with:
  1. A crisp, vector SVG mark embedded in `components/BrandLogo.tsx` or stored as `public/logo/shiftby-mark.svg`.
  2. A lightweight WebP fallback (< 15 KB) for non-SVG contexts.
* Update `components/global-header.tsx` to render the vector mark with crisp geometry, proper aspect ratio (32×32 or 36×36), and full accessibility attributes (`aria-hidden="true"` on the icon, with `ShiftBy` text link as the accessible title).

### Task 1.2: Design Tokens & CSS Reset
* Clean up `app/globals.css`:
  * Keep essential CSS variables (OKLCH color system, typography scale, spacing tokens, container widths).
  * Remove the 7 `@import` statements that globally load page-specific CSS files (`@import "../styles/homepage.css"`, etc.).
  * Ensure smooth font loading with Next.js Google font (`Ubuntu`).

### Task 1.3: Modular Header & Footer Components
* Convert `GlobalHeader` and `GlobalFooter` to use CSS Modules (`global-header.module.css`, `global-footer.module.css`).
* Update navigation links in `GlobalHeader`:
  * **Capabilities** (Links to `/capabilities` hub, with mobile submenu support)
  * **Services** (`/services`)
  * **Resources** (`/resources`)
  * **Perspective** (`/perspective`)
  * **About** (`/about`)
  * **Start a conversation** (CTA button linking to `/contact`)
* Ensure accessible mobile navigation drawer, skip-to-content links, and keyboard focus states.

### Task 1.4: Base Shell & Layout Architecture
* Refactor `app/layout.tsx` to eliminate `import "../styles/page-materialization.css"`.
* Provide a clean `<PageShell>` component for standard max-width, container gutters, and ambient background styling.

## 4. Deliverables
* [x] New optimized vector logo in `components/BrandLogo.tsx` / `public/logo/shiftby-mark.svg` (588 bytes)
* [x] Refactored `components/global-header.tsx` with `global-header.module.css`
* [x] Refactored `components/global-footer.tsx` with `global-footer.module.css`
* [x] Modernized `components/page-shell.tsx` with `page-shell.module.css`
* [x] Updated `lib/site-data.ts` with v2 navigation architecture and primary CTA
* [ ] Full decommission of `styles/page-materialization.css` (scheduled for WP07 following page migrations)

## 5. Verification & Acceptance Criteria
* `npm run build` succeeds without CSS import warnings.
* Total initial HTML + CSS bundle size reduced by > 65%.
* Header logo asset transfers in < 15 KB (compared to previous 2.5 MB) and renders vector-sharp on retina displays.
* Header navigation is accessible, responsive, and works on desktop and mobile viewports.
