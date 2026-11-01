# Workpacket WP03: Three Capabilities Hub & Dedicated Routes

## 1. Goal & Context
Replace the single monolithic 4-capability page with a **Hub-and-Spoke architecture**:
1. A central Capabilities Hub at `/capabilities` introducing **Enterprise Understanding** and how the 3 capabilities operate together.
2. Three dedicated deep-dive capability routes:
   * `/capabilities/organizational-memory`
   * `/capabilities/bounded-ai`
   * `/capabilities/human-ai-accountability`
3. A shared **Capability Switcher Strip** allowing horizontal navigation between the 3 capabilities.
4. Permanent HTTP 308 redirect governance for the legacy `/where-shiftby-helps` route.

## 2. Inputs & References
* `v2docs/Doctrine.md` (Sections 5 & 6: Enterprise Understanding & The 3 Complementary Capabilities)
* `v2docs/Organizational Memory.md`
* `v2docs/Bounded AI.md`
* `v2docs/Human–AI Accountability.md`
* `app/where-shiftby-helps/page.tsx` (legacy file to deprecate/redirect)

## 3. Tasks

### Task 3.1: Reusable Capability Detail Template Component
* Create `components/capabilities/CapabilityDetailLayout.tsx` (and `capability.module.css`):
  * **Hero**: Kicker, Capability Title, Core Proposition / Formal Definition quote.
  * **Enterprise Need & Consequences**: Why the capability is required; what breaks when absent (invisible assumptions, unrecoverable rationale, drift).
  * **When It Matters (Trigger Situations)**: Concrete enterprise scenarios (e.g. experimental AI entering production, multi-agent handoffs, team transitions).
  * **What the Capability Establishes**: Explicit disciplines and boundary models.
  * **Related Engagements**: Direct links to corresponding services from the Service Catalog.
  * **Action CTA**: Direct link to schedule a discussion on this specific capability.

### Task 3.2: Shared Capability Switcher Strip Component
* Create `components/capabilities/CapabilitySwitcher.tsx`:
  * Displays the 3 capabilities side by side with current route indicator.
  * Allows executives to pivot horizontally between *Organizational Memory*, *Bounded AI*, and *Human–AI Accountability* without going back to the hub.
  * Embed at the bottom of every capability detail page.

### Task 3.3: Capabilities Hub (`app/capabilities/page.tsx`)
* Define **Enterprise Understanding**: The organizational ability to preserve, connect, retrieve, apply appropriately, and govern context.
* Detail how the three capabilities interconnect:
  * *Organizational Memory* sustains continuity of understanding.
  * *Bounded AI* reduces drift when AI interprets or acts on context.
  * *Human–AI Accountability* sustains human ownership and oversight across both.
* Clarify the non-canonical status of "Adaptive Execution" (operational outcome, not a separate capability).
* Include deep-dive cards pointing to each capability sub-page.

### Task 3.4: Page Route: Organizational Memory (`app/capabilities/organizational-memory/page.tsx`)
* **Content Source**: `v2docs/Organizational Memory.md`.
* **Definition**: The capability to preserve, connect, recover, distinguish, and responsibly reuse significant knowledge, context, relationships, provenance, prior state, uncertainty, and learning.
* **Sections**:
  * Continuity beyond individual memory
  * Meaningful state model (Current vs. Historical vs. Provisional vs. Reconstructed)
  * RAG and AI memory risks (stale context, unsupported synthesis)
  * Associated services: *AI Knowledge and Context Architecture*, *RAG & Enterprise Retrieval Assessment*

### Task 3.5: Page Route: Bounded AI (`app/capabilities/bounded-ai/page.tsx`)
* **Content Source**: `v2docs/Bounded AI.md`.
* **Definition**: The capability to reduce drift in AI tasks, AI agents, and coordinated workflows by establishing and maintaining explicit boundaries for inputs, reasoning responsibilities, execution flow, outputs, and resource use.
* **Sections**:
  * Drift reduction vs. model drift
  * Application across Tasks, Single Agents, and Multi-Agent Workflows
  * What the capability establishes:
    1. Prepared inputs & explicit result expectations
    2. Bounded reasoning & reusable guidance (skills)
    3. Controlled flow, handoffs, and validation
    4. Observable execution & cumulative resource caps
  * Associated services: *AI Task, Agent & Workflow Advisory*, *AI Evaluation and Reliability*

### Task 3.6: Page Route: Human–AI Accountability (`app/capabilities/human-ai-accountability/page.tsx`)
* **Content Source**: `v2docs/Human–AI Accountability.md`.
* **Definition**: The capability to assign, preserve, exercise, evidence, review, challenge, and adapt explicit human and organizational responsibility and authority throughout AI-enabled work.
* **Sections**:
  * Core distinctions: Responsibility vs. Accountability vs. Authority vs. Oversight vs. Assurance
  * Why technical permission is not organizational authority
  * Proportionate oversight and meaningful human intervention
  * Associated services: *AI Governance and Human Oversight*, *AI Assurance and Evidence Review*

### Task 3.7: Legacy Route Redirect Governance (`/where-shiftby-helps`)
* In `next.config.mjs`, add a permanent 308 redirect from `/where-shiftby-helps` to `/capabilities`.
* Safely decommission `app/where-shiftby-helps/page.tsx` and `styles/where-shiftby-helps.css`.

## 4. Deliverables
* [ ] New capability hub page `app/capabilities/page.tsx`
* [ ] New page `app/capabilities/organizational-memory/page.tsx`
* [ ] New page `app/capabilities/bounded-ai/page.tsx`
* [ ] New page `app/capabilities/human-ai-accountability/page.tsx`
* [ ] Components: `CapabilityDetailLayout.tsx` and `CapabilitySwitcher.tsx`
* [ ] 308 redirect configured in `next.config.mjs` for `/where-shiftby-helps`
* [ ] Metadata entries updated in `content/discoverability.ts`

## 5. Verification & Acceptance Criteria
* All 4 routes render cleanly and are indexed in sitemap.
* No reference to the removed 4th capability as a standalone entity.
* Visiting `/where-shiftby-helps` automatically redirects (308) to `/capabilities`.
* Capability Switcher strip enables fast navigation across all 3 capability pages.
