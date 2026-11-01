# Workpacket WP04: Revamped Service Catalog & Engagement Model

## 1. Goal & Context
Completely rewrite `/services` based on `v2docs/Service Catalog.md`. Replace the current 818-line monolithic page and its 240 lines of inline `<style>` overrides with a structured, executive-grade service catalog detailing 7 concrete services, scope options, typical outputs, delivery boundaries, and the engagement process.

## 2. Inputs & References
* `v2docs/Service Catalog.md`
* `SHIFTBY_EXECUTIVE_EXPERIENCE_AUDIT.md` (Findings R1, R3, R10, R12)

## 3. Tasks

### Task 4.1: Reusable Service Offering Card Component
* Create `components/services/ServiceCard.tsx` (and `.module.css`):
  * **Title & Primary Capability Tag** (e.g. *Organizational Memory*, *Bounded AI*, *Accountability*, *Cross-Cutting*)
  * **Target Need / "For organizations that..."**
  * **Scope Options**: Defined selectable scopes (e.g. *Readiness & Architecture* vs. *Quality Evaluation*)
  * **Typical Outputs / Deliverables**: Concrete artifacts (e.g. *Knowledge assessment, semantic model, boundary specification, validation plan, red team findings*)
  * **Direct Action**: `Inquire about this engagement →`

### Task 4.2: Seven Concrete Service Offerings
Implement the full catalog according to `v2docs/Service Catalog.md`:

1. **Organizational Memory Services**:
   * **AI Knowledge and Context Architecture**: Semantic modeling, knowledge graphs, retained AI context/memory lifecycle.
   * **RAG and Enterprise Retrieval Assessment**: Source suitability, permissions, data quality, grounding, conflicting source handling.
2. **Bounded AI Services**:
   * **AI Task, Agent and Workflow Advisory**: Readiness & boundary assessment, control design, workflow review, observability and resource planning.
3. **Human–AI Accountability Services**:
   * **AI Governance and Human Oversight**: Accountability & decision-rights map, meaningful oversight design, practical challenge & override capability.
   * **AI Assurance and Evidence Review**: Traceability of decisions, controls, test evidence, reliance evaluations.
4. **Cross-Cutting Services**:
   * **AI Security and Red Teaming**: Threat modeling, prompt injection, tool manipulation, trust boundary testing.
   * **AI Evaluation and Reliability**: Measured task performance, semantic fidelity, grounding verification, retesting against baselines.

### Task 4.3: "How Engagements Work" Section
* Address Audit Finding R1 by detailing the engagement lifecycle:
  1. **Before Work Begins**: Agree on business problem, accountable owner, boundaries, testing authorizations, and acceptance criteria.
  2. **During the Engagement**: Bounded sprints, collaborative review, evidence-driven evaluation.
  3. **Outputs & Closure**: Actionable findings, deliverable handoff, retest criteria, next steps.

### Task 4.4: Delivery Boundaries & Governance
* Clearly articulate delivery boundaries:
  * ShiftBy provides advisory, assessment, design, testing, and enablement.
  * Client teams / partners retain production deployment, operations, and ultimate risk-acceptance.
  * Advisory informs decisions; does not replace client authority.

## 4. Deliverables
* [ ] Rewritten `app/services/page.tsx` using CSS Modules (`services.module.css`)
* [ ] Component `components/services/ServiceCard.tsx`
* [ ] Inline `<style>` overrides completely removed
* [ ] Updated services metadata in `content/discoverability.ts`

## 5. Verification & Acceptance Criteria
* The 7 services and their typical outputs are clearly displayed and searchable/filterable.
* Zero inline `<style>` hacks or cascade clashes with `services.css` or `page-materialization.css`.
* Every service card has a distinct conversion link passing context to `/contact`.
