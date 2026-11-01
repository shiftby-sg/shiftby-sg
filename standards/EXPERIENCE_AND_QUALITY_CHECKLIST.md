# ShiftBy Experience & Quality Qualification Checklist

This checklist establishes the non-negotiable quality and architectural standards for all pages and components across **ShiftBy.sg**. It codifies both the **User Thinking Model** (how human executives read and decide) and the **Search / Crawler Thinking Model** (how search engines and LLM crawlers index and synthesize).

---

## 1. The User Thinking Model (Executive Experience)

### Rule 1.1: The 3–5 Second Viewport Signal Test
* **Every Viewport Must Transmit Signal Instantly**: An executive scrolling through any viewport on desktop or mobile must understand the core insight, problem, or takeaway within **3 to 5 seconds**.
* **Punchy Visual Hierarchy**:
  - Lead with strong visual contrast: bold headline + crisp kicker + clear 1-line thesis.
  - Avoid dense, unbroken walls of text (> 3 lines of prose without a typographic break is considered a defect).
  - Use scannable visual patterns: comparative cards, structured grids, bulleted key takeaways, and visual labels.
* **Scan Time Budget**: The entire page must be fully comprehensible in **20 to 30 seconds** of fluid scrolling.

### Rule 1.2: Storytelling & Frictionless Scroll Flow
* **Progressive Cognitive Alignment**: Every section must answer the subconscious question raised by the previous section:
  1. *Hero Viewport*: **The Thesis** (*"Execution changes. Understanding preserves confidence."*) $\to$ *User:* "I agree, but why is that hard?"
  2. *Tension Viewport*: **The Real Problem** (*"Organizations preserve artifacts. Understanding is harder to preserve."*) $\to$ *User:* "Ah, exactly. We have tickets and logs, but when things drift, context is gone."
  3. *Solution Viewport*: **The 3 Capabilities** (*"Organizational Memory, Bounded AI, Human–AI Accountability"*) $\to$ *User:* "That's a structured model. Does it apply to my role?"
  4. *Relevance Viewport*: **Persona Buying Cues** (*"CIO/CTO, CISO, CDO, Assurance"*) $\to$ *User:* "That speaks directly to my immediate headache."
  5. *Actionable Engagement Viewport*: **The Service Catalog** (*"7 concrete service offerings with defined outputs"*) $\to$ *User:* "What does an engagement look like?"
  6. *Conversion Viewport*: **Frictionless First Step** (*"30-min call, 48-hr scope, zero sales pressure"*) $\to$ *User:* "Low risk, high clarity. I'll reach out."
* **Zero Cognitive Stalling**: Transitions between bands and sections must feel inevitable, pulling the reader downward toward relevant CTAs.

### Rule 1.3: Immediate Goal & Intent-Driven CTAs
* **Every page must have an unambiguous primary goal**:
  - Direct conversion to a scoping discussion (`/contact?service=<slug>`), or
  - Immediate exploration of a specific capability or technical resource.
* **Low-Friction CTAs**: Clearly explain what happens *after* clicking (time commitment, deliverables, confidentiality, no high-pressure sales pitches).

---

## 2. The Search & AI Crawler Thinking Model (Discoverability)

### Rule 2.1: Semantic Hierarchy & Zero Ambiguity
* **Strict Semantic HTML**:
  - Exactly one `<h1>` per page capturing the definitive semantic thesis.
  - Logical `<h2>` and `<h3>` heading tree without skipping levels.
  - Accessible landmarks: `<header>`, `<main id="main-content">`, `<nav>`, `<aside>`, `<footer>`, `<section aria-labelledby="...">`.
* **Zero Contradictory Routing**:
  - Redirected URLs (`/where-shiftby-helps`, `/explorations`) must return HTTP 308 and never appear in `sitemap.xml`.
  - Canonical URLs must be strictly absolute and normalized (no trailing slash discrepancies or double-slashes).

### Rule 2.2: Schema.org Knowledge Graph Coherence
* The site's JSON-LD graph must interlink:
  - `Organization` (Legal entity, founder, credentials, address)
  - `ProfessionalService` (Catalog of 7 defined services with provider link back to `#organization`)
  - `WebSite` (Publisher link)
* Machine-readable `knowsAbout` topics must align with actual text content on each page.

### Rule 2.3: LLM Discoverability (`llms.txt`)
* Maintain `/llms.txt` with concise, highly accurate corporate doctrine, capability definitions, and service boundaries to guide AI search synthesis (Perplexity, Gemini, ChatGPT Search).

---

## 3. Information Hygiene & Anti-Duplication Standards

### Rule 3.1: Strict Information Hygiene
* **No Redundant Boilerplate**:
  - Do not duplicate long introductory paragraphs or capability definitions verbatim across different pages.
  - The Homepage introduces the high-level framework; capability pages go deep into mechanics; service pages detail commercial scopes and deliverables.
* **Zero Irrelevant Fluff**:
  - Cut generic marketing platitudes (*"We empower synergistic paradigms..."*).
  - Use exact, operational engineering and governance language (*"drift reduction across agents"*, *"non-delegable human answerability"*, *"unexamined prompt dogmas"*).
* **Exception Rule**:
  - `/resources` is the sole cumulative publication repository where doctrine essays, executive briefs, and technical papers can expand over time.

---

## 4. Technical Performance & Resilience Budgets

| Dimension | Target Budget | Enforcement Mechanism |
| :--- | :--- | :--- |
| **Critical Header Asset** | `< 2 KB` | Inline vector SVG (`components/BrandLogo.tsx`) + 588B mark |
| **CSS Architecture** | Scoped CSS Modules only | No page rules in `globals.css`; zero monolithic CSS files |
| **Lighthouse Performance** | `≥ 90` | Zero layout shift (CLS `< 0.05`), optimized system fonts |
| **Lighthouse Accessibility** | `≥ 95` | Contrast ratios `≥ 4.5:1`, skip link, labeled landmarks |
| **External Link Security** | 100% compliance | `target="_blank" rel="noopener noreferrer"` on all outbound links |

---

## 5. Viewport-by-Viewport Review Protocol

Before shipping any change to a page, conduct this 6-question qualification pass:

1. **The 3-Second Check**: Looking at this viewport for 3 seconds, can I immediately state what it is telling me?
2. **The Friction Check**: Is there a wall of text that makes me want to stop scrolling or look away?
3. **The Executive Relevance Check**: Does this copy speak to an enterprise dilemma (CIO/CISO/CDO), or does it sound like a generic SaaS pitch?
4. **The Storytelling Check**: Does this section logically lead into the next section?
5. **The Duplication Check**: Has this exact point already been made elsewhere on the site?
6. **The Action Check**: Is there a clear, low-friction next step or CTA within easy reach?
