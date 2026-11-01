# Workpacket WP02: Homepage Doctrine & Enterprise Understanding Alignment

## 1. Goal & Context
Rebuild the homepage (`app/page.tsx`) to reflect the v2 doctrine from `v2docs/Doctrine.md`. The narrative shifts to **Enterprise Understanding** ("*Execution changes. Understanding preserves confidence.*"), introduces the 3 complementary capabilities, highlights the new service offerings, and provides high-intent conversion pathways for enterprise leaders.

## 2. Inputs & References
* `v2docs/Doctrine.md` (Sections 1, 2, 3, 5, 6)
* `SHIFTBY_EXECUTIVE_EXPERIENCE_AUDIT.md` (Recommendations R1, R9, R11)
* `components/BrandDoctrineMark.tsx`

## 3. Tasks

### Task 2.1: Executive Hero Section
* **Category Descriptor**: Add a clear, compact executive category descriptor above the hero headline:
  `EXECUTIVE ADVISORY & GOVERNANCE PRACTICE`
* **Headline**:
  * Line 1: *Execution changes.*
  * Line 2: *Understanding preserves confidence.*
* **Executive Value Proposition**:
  "Organizations execute across people, systems, suppliers, automation, and AI. ShiftBy helps leaders preserve, develop, and apply the understanding required to govern and transform with confidence through change."
* **Primary Actions**:
  * Primary: `Start a conversation →` (routes to `/contact`)
  * Secondary: `Explore the capabilities →` (routes to `/capabilities`)

### Task 2.2: The Organizational Challenge & Distributed Execution
* Frame the core tension from `v2docs/Doctrine.md`:
  "Organizations preserve artifacts more successfully than the understanding that gives those artifacts meaning."
* Present the 5 breakdown points: Context loss through personnel transitions, invisible assumptions, unrecoverable decision rationale, fragmented AI accountability, and drift in automated execution.

### Task 2.3: The Three Complementary Capabilities Grid
* Introduce the 3 capabilities as complementary lenses supporting **Enterprise Understanding**:
  1. **Organizational Memory**: Continuity of organizational understanding beyond individual memory.
  2. **Bounded AI**: Reduced drift in AI-supported reasoning and execution.
  3. **Human–AI Accountability**: Sustained human and organizational answerability for AI-enabled work.
* Each card includes:
  * Purpose & core contribution
  * Why it matters to executive leaders
  * Direct link to individual capability page (`/capabilities/[slug]`)

### Task 2.4: Services & Engagements Teaser
* Introduce the 4 service practice clusters:
  * Knowledge & Context Continuity (Knowledge Graphs, RAG Assessment)
  * Bounded AI Advisory (Tasks, Agents, Workflows)
  * Accountability & Governance (Human Oversight, Assurance & Evidence)
  * Security & Evaluation (Red Teaming, Measured Reliability)
* Link directly to `/services`.

### Task 2.5: Insights & Latest Resources Teaser
* Preview 2–3 selected articles / briefs from the new Resources section.
* Link to `/resources`.

### Task 2.6: Closing Executive Conversation Block
* Address Audit Finding R1: Explain what happens upon contact ("A 30-minute introductory call to explore context, identify boundaries, and assess readiness—no boilerplate proposals").

## 4. Deliverables
* [ ] Rewritten `app/page.tsx` using `app/page.module.css`
* [ ] Inline `<style>` block completely removed from `app/page.tsx`
* [ ] Updated homepage metadata wired to `content/discoverability.ts`
* [ ] Responsive desktop, tablet, and mobile layouts

## 5. Verification & Acceptance Criteria
* Homepage renders cleanly with zero console warnings and no dependency on legacy `homepage.css` or `page-materialization.css`.
* All links to `/capabilities/[slug]`, `/services`, and `/contact` resolve correctly.
* Mobile viewport rendering maintains legible typography and balanced spacing.
