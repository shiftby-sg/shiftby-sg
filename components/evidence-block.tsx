type EvidenceBlockProps = {
  label: string;
  value: string;
  caption: string;
};

export function EvidenceBlock({
  label,
  value,
  caption
}: EvidenceBlockProps) {
  return (
    <div className="evidence-block">
      <p className="evidence-block__label">{label}</p>
      <p className="evidence-block__value">{value}</p>
      <p className="evidence-block__caption">{caption}</p>
    </div>
  );
}
