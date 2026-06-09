import type { ReactNode } from "react";

type SectionFrameProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function SectionFrame({
  eyebrow,
  title,
  description,
  children
}: SectionFrameProps) {
  return (
    <section className="section-frame">
      <div className="section-frame__header">
        {eyebrow ? <p className="section-frame__eyebrow">{eyebrow}</p> : null}
        <h2 className="section-frame__title">{title}</h2>
        {description ? (
          <p className="section-frame__description">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
