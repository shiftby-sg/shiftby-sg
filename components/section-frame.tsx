import type { ReactNode } from "react";

type SectionFrameProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  id?: string;
};

export function SectionFrame({
  eyebrow,
  title,
  description,
  children,
  id
}: SectionFrameProps) {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <section
      aria-labelledby={titleId}
      className="section-frame"
      id={id}
    >
      <div className="section-frame__header">
        {eyebrow ? <p className="section-frame__eyebrow">{eyebrow}</p> : null}
        <h2 className="section-frame__title" id={titleId}>
          {title}
        </h2>
        {description ? (
          <p className="section-frame__description">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
