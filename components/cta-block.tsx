import Link from "next/link";

type CTAAction = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

type CTABlockProps = {
  eyebrow: string;
  title: string;
  body: string;
  actions: readonly CTAAction[];
};

export function CTABlock({
  eyebrow,
  title,
  body,
  actions
}: CTABlockProps) {
  return (
    <section className="content-band">
      <div className="content-band__inner">
        <div className="cta-block">
          <p className="split-section__eyebrow">{eyebrow}</p>
          <h2 className="cta-block__title">{title}</h2>
          <p className="cta-block__body">{body}</p>
          <div className="cta-block__actions">
            {actions.map((action) => (
              <Link
                className={`button-link button-link--${action.variant}`}
                href={action.href}
                key={action.label}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
