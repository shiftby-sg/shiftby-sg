import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  lede: ReactNode;
  body: ReactNode;
  aside?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  lede,
  body,
  aside
}: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="page-intro__grid">
        <div className="page-intro__copy">
          <p className="page-intro__eyebrow">{eyebrow}</p>
          <h1 className="page-intro__title">{title}</h1>
          <p className="page-intro__lede">{lede}</p>
          <p className="page-intro__body">{body}</p>
        </div>
        {aside ? <aside className="page-intro__aside">{aside}</aside> : null}
      </div>
    </section>
  );
}
