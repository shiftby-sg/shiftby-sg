# Workpacket WP06: Supporting Routes & Contact Funnel Optimization

## 1. Goal & Context
Upgrade supporting brand and governance routes (`/about`, `/perspective`, `/ai-policy`) and optimize the `/contact` funnel by consuming incoming service intent (`?service=<slug>`), detailing the 3-step conversation timeline (Audit Finding R1), and securing all external links.

## 2. Inputs & References
* `v2docs/Doctrine.md`
* `content/discoverability.ts` (Corporate entity & founder credentials)
* `SHIFTBY_EXECUTIVE_EXPERIENCE_AUDIT.md` (Findings R1, R4, R5, R18)
* `app/contact/page.tsx`

## 3. Tasks

### Task 6.1: High-Conversion Contact Page with Service Intent Listener (`app/contact/page.tsx`)
* **Service Intent Listener**:
  * Inspect URL search parameters for `?service=<service-slug>`.
  * If present, render a contextual acknowledgment banner (e.g. *"Inquiring about: RAG & Enterprise Retrieval Assessment"*), pre-highlighting that topic in the conversation selector.
* **"What Happens After Start a Conversation" Timeline (Audit Finding R1)**:
  Add an explicit, reassuring 3-step timeline:
  1. *Step 1: 30-Minute Context & Scope Call*: We discuss your current state, operational boundaries, and specific questions without a sales pitch or generic slides.
  2. *Step 2: Scoping & Boundary Summary*: Within 48 hours, you receive a scoped summary of potential engagement boundaries, required authorizations, and expected deliverables.
  3. *Step 3: Agreed Plan or Referral*: If there is mutual fit, work begins under an agreed boundary. If not, we point you to the appropriate resources or specialist partners.
* **Topic Selection**: Update conversation topics to match the v2 service catalog: *Knowledge & Context Architecture*, *RAG Assessment*, *Bounded AI & Multi-Agent Workflows*, *AI Governance & Oversight*, *AI Assurance & Red Teaming*.
* **External Links Accessibility & Security**: Ensure Outlook booking, LinkedIn, WhatsApp, and Telegram links include `target="_blank" rel="noopener noreferrer"`.

### Task 6.2: About Page Refinement (`app/about/page.tsx`)
* Incorporate Founder Positioning (Audit Finding R4):
  * Name: Ananda Krishna Marri.
  * Credential: IAPP Certified AI Governance Professional (AIGP).
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
* [ ] Enhanced `app/contact/page.tsx` with service query parameter listener and 3-step timeline
* [ ] Refined `app/about/page.tsx` with founder positioning & AIGP credential
* [ ] Updated `app/perspective/page.tsx` and `app/ai-policy/page.tsx`
* [ ] External link attributes (`target="_blank" rel="noopener noreferrer"`) secured across all pages

## 5. Verification & Acceptance Criteria
* Navigating to `/contact?service=rag-retrieval-assessment` dynamically acknowledges the selected service.
* The contact journey provides complete clarity on next steps and reduces evaluation risk.
* External links open safely in new tabs with security rel attributes.
* All supporting pages maintain styling harmony under CSS Modules.
