# Workpacket WP06: Supporting Routes & Contact Funnel Optimization

## 1. Goal & Context
Upgrade supporting brand and governance routes (`/about`, `/perspective`, `/ai-policy`, `/where-shiftby-helps`) and eliminate key conversion friction on `/contact` as identified in the Executive Experience Audit.

## 2. Inputs & References
* `v2docs/Doctrine.md`
* `content/discoverability.ts` (Corporate entity & founder credentials)
* `SHIFTBY_EXECUTIVE_EXPERIENCE_AUDIT.md` (Findings R1, R4, R5)
* `app/contact/page.tsx`

## 3. Tasks

### Task 6.1: High-Conversion Contact Page (`app/contact/page.tsx`)
* **"What Happens After Contact" Block (Audit Finding R1)**:
  Add an explicit, reassuring 3-step timeline:
  1. *Step 1: 30-Minute Context & Scope Call*: We discuss your current state, operational boundaries, and specific questions without a sales pitch.
  2. *Step 2: Scoping & Boundary Outline*: Within 48 hours, you receive a scoped summary of potential engagement boundaries, required authorizations, and expected deliverables.
  3. *Step 3: Agreed Plan or Referral*: If there is a fit, we begin work under an agreed boundary. If not, we point you to the appropriate resources or partners.
* **Topic Selection**: Update conversation topics to match v2 services: *Knowledge & Context Architecture*, *RAG Assessment*, *Bounded AI & Multi-Agent Workflows*, *AI Governance & Oversight*, *AI Assurance & Red Teaming*.
* **External Links Accessibility**: Ensure booking, LinkedIn, WhatsApp, and Telegram links include `target="_blank" rel="noopener noreferrer"`.

### Task 6.2: About Page Refinement (`app/about/page.tsx`)
* Incorporate Founder Positioning (Audit Finding R4):
  * Ananda Krishna Marri: IAPP Certified AI Governance Professional (AIGP).
  * Background spanning enterprise architecture, cybersecurity investigations, and complex AI transformations.
* Connect the founder's observation directly to the 3 capabilities and Enterprise Understanding.
* Add an explicit conversion CTA to conclude the essay.

### Task 6.3: Perspective Page Realignment (`app/perspective/page.tsx`)
* Update copy to reflect the v2 doctrine: the transition from scattered artifacts to structured Enterprise Understanding.
* Ensure clear bridges to `/capabilities` and `/services`.

### Task 6.4: AI Policy Modernization (`app/ai-policy/page.tsx`)
* Harmonize the AI Policy with `v2docs/Human–AI Accountability.md`:
  * Explicit statements on human ownership, legitimate authority, and non-delegable organizational answerability.
  * Cross-link back to the *AI Governance & Human Oversight* service offering.

## 4. Deliverables
* [ ] Enhanced `app/contact/page.tsx` with "What happens after contact" block
* [ ] Refined `app/about/page.tsx` with founder positioning & AIGP credential
* [ ] Updated `app/perspective/page.tsx` and `app/ai-policy/page.tsx`
* [ ] Fixed external links across all supporting pages

## 5. Verification & Acceptance Criteria
* The contact journey provides complete clarity on next steps and reduces evaluation risk.
* External links open safely in new tabs with security rel attributes.
* All four pages maintain styling harmony under CSS Modules.
