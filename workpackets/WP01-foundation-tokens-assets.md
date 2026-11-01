# Workpacket WP01: Core Architecture, Design Tokens & Asset Optimization

## 1. Goal & Context
Establish a lean, modern design token foundation and component shell for the v2 migration, removing the reliance on monolithic global CSS (`page-materialization.css`), and fixing the critical 2.5 MB header logo performance issue.

## 2. Inputs & References
* `components/global-header.tsx`, `components/global-footer.tsx`
* `public/logo/ShiftBy-Logo-4000px.png`
* `components/BrandDoctrineMark.tsx`
* `styles/page-materialization.css` (for reference tokens to extract)
* `lib/design-tokens.ts`

## 3. Tasks

### Task 1.1: Logo Asset Optimization
* Replace the 2.5 MB `public/logo/ShiftBy-Logo-4000px.png` in `GlobalHeader` with an optimized SVG vector logo or a crisp, lightweight WebP mark (< 20 KB).
* Update `components/global-header.tsx` to use correct intrinsic dimensions (e.g. 36×36 or 40×40) with proper alt/aria attributes.

### Task 1.2: Design Tokens & CSS Reset
* Clean up `app/globals.css`:
  * Keep essential CSS variables (OKLCH color system, typography scale, spacing tokens, container widths).
  * Remove the 7 `@import` statements that globally load page-specific CSS files (`@import "../styles/homepage.css"`, etc.).
  * Ensure smooth font loading with Next.js Google font (`Ubuntu`).

### Task 1.3: Modular Header & Footer Components
* Convert `GlobalHeader` and `GlobalFooter` to use CSS Modules (`global-header.module.css`, `global-footer.module.css`).
* Update navigation links in `GlobalHeader` to include:
  * Capabilities (dropdown or hub link)
  * Services
  * Resources (new)
  * Perspective
  * About
  * Contact CTA
* Ensure accessible mobile navigation drawer, skip-to-content links, and keyboard focus states.

### Task 1.4: Base Shell & Layout Architecture
* Refactor `app/layout.tsx` to eliminate `import "../styles/page-materialization.css"`.
* Provide a clean `<PageShell>` component for standard max-width, container gutters, and ambient background styling.

## 4. Deliverables
* [ ] New optimized logo asset in `public/logo/`
* [ ] Refactored `components/global-header.tsx` with `global-header.module.css`
* [ ] Refactored `components/global-footer.tsx` with `global-footer.module.css`
* [ ] Cleaned `app/globals.css` without monolithic `@import` calls
* [ ] `app/layout.tsx` decoupled from `page-materialization.css`

## 5. Verification & Acceptance Criteria
* `npm run build` succeeds without CSS import warnings.
* Total initial HTML + CSS bundle size reduced significantly.
* Header logo asset transfers in < 20 KB (compared to previous 2.5 MB).
* Header navigation is accessible, responsive, and works on desktop and mobile viewports.
