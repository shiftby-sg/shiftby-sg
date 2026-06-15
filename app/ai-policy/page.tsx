import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "AI Policy | ShiftBy"
  },
  description:
    "How ShiftBy uses artificial intelligence to support research, drafting, analysis, exploration, and understanding while preserving human responsibility.",
  alternates: {
    canonical: "/ai-policy"
  }
};

const policySections = [
  {
    title: "Purpose",
    paragraphs: [
      "ShiftBy explores how organizations preserve understanding as decisions, knowledge, accountability, and execution evolve.",
      "Artificial Intelligence may assist in research, analysis, drafting, exploration, and content development.",
      "AI is used to support understanding, not replace human judgment."
    ]
  },
  {
    title: "Human Responsibility",
    paragraphs: [
      "All conclusions, recommendations, published content, and advisory outcomes remain subject to human review.",
      "Humans remain accountable for decisions and actions.",
      "AI assistance does not transfer responsibility."
    ]
  },
  {
    title: "Accuracy and Verification",
    paragraphs: [
      "AI-generated content may be incomplete, inaccurate, or outdated.",
      "Important decisions should not rely solely on AI-generated outputs.",
      "Information should be reviewed, validated, and assessed within its intended context."
    ]
  },
  {
    title: "Confidentiality",
    paragraphs: [
      "ShiftBy does not intentionally use confidential client information in public AI systems without appropriate authorization.",
      "Sensitive information should be handled according to applicable agreements and obligations."
    ]
  },
  {
    title: "Transparency",
    paragraphs: [
      "Where appropriate, ShiftBy may use AI tools to support research, drafting, analysis, and exploration activities.",
      "The focus remains on the quality of understanding, reasoning, and human oversight."
    ]
  },
  {
    title: "Continuous Learning",
    paragraphs: [
      "AI technologies evolve rapidly.",
      "ShiftBy continuously evaluates how AI can support better understanding, accountability, and organizational learning while maintaining appropriate human governance."
    ]
  }
];

export default function AiPolicyPage() {
  return (
    <div className="ai-policy-design-port">
      <section aria-labelledby="ai-policy-title" className="section ai-policy-hero">
        <div>
          <span className="kicker">AI Policy</span>
          <h1 id="ai-policy-title">AI is used to support understanding.</h1>
          <p className="lead">
            ShiftBy uses AI assistance carefully, with human review,
            accountability, and context remaining central to the work.
          </p>
        </div>
      </section>

      <section aria-label="AI Policy details" className="quiet-band">
        <div className="section ai-policy-sections">
          {policySections.map((section) => (
            <article className="ai-policy-section" key={section.title}>
              <h2>{section.title}</h2>
              <div>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="ai-policy-close" className="section ai-policy-close">
        <p id="ai-policy-close">Understanding should survive change.</p>
      </section>
    </div>
  );
}
