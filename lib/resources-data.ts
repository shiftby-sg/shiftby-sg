export interface ResourceSection {
  heading?: string;
  paragraphs: string[];
  callout?: string;
  list?: string[];
}

export interface ResourceArticle {
  slug: string;
  title: string;
  subtitle: string;
  publishDate: string;
  category:
    | "Doctrine Essay"
    | "Executive Brief"
    | "Technical Architecture"
    | "Research Investigation";
  readingTime: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
    credential: string;
  };
  excerpt: string;
  executiveSummary: string[];
  sections: ResourceSection[];
}

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "enterprise-understanding-beyond-artifacts",
    title: "Enterprise Understanding: Why Preserving Artifacts Fails to Preserve Confidence",
    subtitle:
      "Organizations rarely face an information shortage. They face a loss of the connected context that gives artifacts meaning through time and change.",
    publishDate: "October 2026",
    category: "Doctrine Essay",
    readingTime: "6 min read",
    featured: true,
    author: {
      name: "Ananda Krishna Marri",
      role: "Founder, ShiftBy",
      credential: "IAPP Certified AI Governance Professional (AIGP)"
    },
    excerpt:
      "When key architects transition or AI accelerates analysis, documents remain while rationale, assumptions, and dependencies fade. Confidence comes from preserving understanding.",
    executiveSummary: [
      "Information records what happened; understanding explains why it happened, what supported it, who authorized it, and what has changed.",
      "Preserving artifacts alone (code, tickets, wikis) fails because operational context, rejected alternatives, and edge-case exceptions are lost.",
      "Enterprise Understanding is the organizational ability to preserve, connect, retrieve, apply appropriately, and govern context through change.",
      "The ShiftBy capability triad (Organizational Memory, Bounded AI, Human–AI Accountability) provides the operating foundation to sustain understanding."
    ],
    sections: [
      {
        heading: "The Common Enterprise Observation",
        paragraphs: [
          "Organizations constantly change. Strategies evolve, teams reorganize, systems are replaced, suppliers transition, and AI accelerates analysis and execution. Yet when leaders are asked why a critical system behaves the way it does, or what rationale governed a past architectural compromise, the answers are rarely found in the documentation.",
          "Organizations preserve artifacts more successfully than the understanding that gives those artifacts meaning. Repositories hold gigabytes of code, tickets, diagrams, and dashboards. Yet the living context—what assumptions existed, what evidence supported the decision, who held legitimate authority, and what dependencies were affected—was stored only in the memory of the individuals who have since moved on."
        ]
      },
      {
        heading: "What We Mean by Understanding",
        paragraphs: [
          "Information communicates facts and records events. Understanding is the connected, supported context relevant to a decision, action, change, responsibility, or business outcome that explains their meaning, authority, relationships, implications, and provenance.",
          "Preserved understanding must also distinguish authority, status, and uncertainty. Unknown, missing, conflicting, superseded, and low-confidence material must remain visible rather than being silently converted into fact or approval."
        ],
        callout:
          "Understanding is not required to capture every fact. It must be proportionate to the need it serves, distinguishing contemporaneous records from later retrospective reconstruction."
      },
      {
        heading: "The Business Transformation",
        paragraphs: [
          "When an organization develops Enterprise Understanding, the business consequence is measurable: important context remains recoverable after team transitions; decisions remain reconstructable through their evidence and authority; knowledge is reused instead of repeatedly rediscovered; and changes occur without silently losing intent.",
          "This is not a utopian promise that change becomes risk-free. It is a disciplined commitment to ensure that as execution becomes distributed across people, systems, suppliers, automation, and AI, confidence remains preserved."
        ]
      }
    ]
  },
  {
    slug: "the-bounded-ai-principle",
    title: "The Bounded AI Principle: Why Agentic Discretion Requires Explicit Boundaries",
    subtitle:
      "A demonstration of sophisticated reasoning is not enough when subsequent processes rely on the result. How to reduce execution drift across AI tasks, agents, and workflows.",
    publishDate: "November 2026",
    category: "Executive Brief",
    readingTime: "5 min read",
    author: {
      name: "Ananda Krishna Marri",
      role: "Founder, ShiftBy",
      credential: "IAPP Certified AI Governance Professional (AIGP)"
    },
    excerpt:
      "General domain knowledge does not establish an enterprise's own operating rules. Without explicit boundaries, AI substitutes general plausibility for enterprise suitability.",
    executiveSummary: [
      "AI execution drift is an unintended departure in reasoning or flow progression, distinct from statistical model drift.",
      "LLMs naturally substitute general plausibility for missing enterprise context, generating syntactically valid answers that violate business rules.",
      "Bounded AI establishes four essential disciplines: Prepared Inputs, Bounded Reasoning Guidance, Flow Validation, and Cumulative Resource Caps.",
      "Multi-agent workflows require explicit boundary handoffs to prevent provisional findings from being treated as settled facts."
    ],
    sections: [
      {
        heading: "The Illusion of Plausibility",
        paragraphs: [
          "Enterprises are rapidly deploying AI tasks and autonomous agents into processes that already carry established business obligations, legal constraints, and operational dependencies. A common failure mode is that alignment weakens without an obvious crash or error.",
          "Because foundation models are trained on general domain knowledge, they will naturally substitute broad assumptions whenever specific enterprise context, definitions, or exceptions are absent. The result is a response that reads plausibly to human operators but violates company policy, pricing rules, or architectural constraints."
        ]
      },
      {
        heading: "The Problem of Downstream Propagation",
        paragraphs: [
          "When an AI task changes a requirement, omits a qualification, or introduces an unsupported assumption, that output frequently becomes another task or agent's input. The departure propagates into reports, database writes, or automated customer actions.",
          "The enterprise risk is not simply a single inaccurate answer: it is downstream operational workflows proceeding on altered meaning or unmet conditions."
        ],
        callout:
          "Bounded AI is about drift reduction, not a guarantee of error-free reasoning. It gives operators the controls, gates, and observability to contain departures early."
      },
      {
        heading: "The Four Boundary Disciplines",
        paragraphs: [
          "To govern AI participation responsibly, organizations must enforce four boundaries:",
          "First, Prepared Inputs: establishing explicit input/output contracts so business requirements remain recognizable.",
          "Second, Bounded Reasoning: separating reusable guidance (skills) from the ephemeral prompt, keeping methods distinct from data.",
          "Third, Controlled Flow & Validation: distinguishing deterministic progression from agent discretion, and checking findings at handoff seams.",
          "Fourth, Observable Resource Caps: enforcing strict cumulative limits across tokens, cost, execution time, and retry loops."
        ]
      }
    ]
  },
  {
    slug: "rag-retrieval-vs-answer-grounding",
    title: "Retrieval Quality vs. Answer Grounding in Enterprise RAG Systems",
    subtitle:
      "Why citation presence does not equal answer correctness, and how to evaluate source permissions, conflicting facts, and attribution in production retrieval pipelines.",
    publishDate: "November 2026",
    category: "Technical Architecture",
    readingTime: "7 min read",
    author: {
      name: "Ananda Krishna Marri",
      role: "Founder, ShiftBy",
      credential: "IAPP Certified AI Governance Professional (AIGP)"
    },
    excerpt:
      "A relevant citation does not prove an answer is correct. Examining source readiness, permission boundaries, and conflicting-source resolution in enterprise retrieval.",
    executiveSummary: [
      "Retrieval quality (relevance, coverage) and answer quality (grounding, attribution) are fundamentally distinct dimensions.",
      "Most RAG failures stem from uncurated source readiness: stale documents, conflicting policies, and missing permission scopes.",
      "When sources conflict, models often average or hallucinate reconciliations rather than surfacing the contradiction.",
      "A rigorous assessment evaluates source suitability before runtime and verifies grounding fidelity under exceptional queries."
    ],
    sections: [
      {
        heading: "The Retrieval Paradox",
        paragraphs: [
          "Retrieval-Augmented Generation (RAG) is the dominant architecture for grounding LLMs in enterprise knowledge. Yet teams frequently encounter a baffling paradox: search benchmarks show high recall and top-k precision, but business users report incorrect, misleading, or out-of-date answers.",
          "The root cause is the conflation of retrieval quality with answer quality. A retrieval engine can return a completely relevant paragraph from an internal policy document. However, if the model synthesizes that text alongside a conflicting customer agreement or fails to recognize that the document has been superseded, the generated answer remains fundamentally flawed."
        ]
      },
      {
        heading: "Source Readiness & Permission Boundaries",
        paragraphs: [
          "Enterprise knowledge is messy. Repositories contain draft memos, superseded standard operating procedures, and local team workarounds. If a RAG system indexes everything without modeling provenance and freshness, it treats historical speculation as current ground truth.",
          "Furthermore, permissions must be enforced at the source chunk level. If a system retrieves information across trust boundaries without verifying user entitlements, it creates severe compliance and confidentiality risks."
        ],
        callout:
          "Citation presence does not equal answer correctness. A model can cite an authentic paragraph while drawing an unsupported conclusion that reverses the document's original meaning."
      },
      {
        heading: "Handling Conflicting Evidence",
        paragraphs: [
          "When enterprise documents present conflicting guidelines, standard LLMs tend to generate a blended synthesis that conceals the contradiction. In regulated or mission-critical environments, this is hazardous.",
          "A bounded retrieval system must be designed to recognize conflict, withhold automated conclusions, and surface the ambiguity to a human reviewer with appropriate decision authority."
        ]
      }
    ]
  },
  {
    slug: "investigations-in-context-drift",
    title: "Investigations in Context Drift: Lessons from UnifyPlane, CanonLens, and Inspiral",
    subtitle:
      "How ShiftBy's internal research prototypes into execution, meaning, and discovery shaped our understanding of operational drift and enterprise accountability.",
    publishDate: "October 2026",
    category: "Research Investigation",
    readingTime: "8 min read",
    author: {
      name: "Ananda Krishna Marri",
      role: "Founder, ShiftBy",
      credential: "IAPP Certified AI Governance Professional (AIGP)"
    },
    excerpt:
      "Reframing ShiftBy's internal investigations into execution traceability, semantic context modeling, and adaptive workflow visibility.",
    executiveSummary: [
      "Some organizational challenges cannot be understood through abstract management theory alone; they require empirical investigation.",
      "UnifyPlane examined how execution drifts as decisions move across distributed human and automated systems.",
      "CanonLens investigated how semantic meaning fragments across enterprise terminology and knowledge representations.",
      "Inspiral studied how discovery and learning can be preserved across long-running, multi-stage investigations without losing lineage.",
      "These investigations are not commercial software products—they are the research foundation that informs ShiftBy's advisory practice."
    ],
    sections: [
      {
        heading: "Why We Build Investigations",
        paragraphs: [
          "At ShiftBy, we believe that complex organizational problems cannot be solved purely through theoretical advisory frameworks. To understand how context behaves as work evolves across people, systems, suppliers, automation, and AI, we conduct targeted internal investigations.",
          "These investigations—UnifyPlane, CanonLens, and Inspiral—are not commercial SaaS products. They are research testbeds designed to explore what survives, what fragments, and what becomes visible through change."
        ]
      },
      {
        heading: "UnifyPlane: Investigating Execution Drift",
        paragraphs: [
          "UnifyPlane studied the execution dimension of understanding. Organizations frequently know what happened after an incident or major transformation, but understanding why it happened becomes exponentially harder as execution becomes distributed.",
          "The investigation focused on decision traceability and AI governance visibility: Can decision rationale, supporting evidence, and human accountability remain visible when actions are automated across multi-agent workflows? The findings directly shaped our Bounded AI boundary discipline."
        ]
      },
      {
        heading: "CanonLens: Investigating Semantic Drift",
        paragraphs: [
          "CanonLens examined the dimension of meaning. Different business units, technical teams, and automated agents frequently use identical words to represent conflicting concepts, or different words for the same underlying reality.",
          "The investigation explored semantic modeling, relationship mapping, and enterprise knowledge graph architecture. It demonstrated that without explicit state distinctions (current vs historical vs provisional), shared vocabularies quickly collapse under operational pressure. This work forms the core of our Organizational Memory practice."
        ],
        callout:
          "Investigations provide the empirical evidence that grounds ShiftBy's advisory work in technical reality rather than consulting slogans."
      },
      {
        heading: "Inspiral: Investigating Discovery & Learning Lineage",
        paragraphs: [
          "Inspiral focused on the dimension of discovery: How does an organization preserve the lineage of an investigation through time? When teams conduct root-cause analyses, security incident reviews, or AI evaluations, the investigative process itself is often lost once a final report is issued.",
          "By tracking the sequence of hypotheses, rejected evidence, and intermediate states, Inspiral revealed that preserving the discovery lineage is vital for genuine organizational learning."
        ]
      }
    ]
  }
];
