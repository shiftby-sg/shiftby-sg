import type { ReactNode } from "react";

type SignalCardProps = {
  label: string;
  title: string;
  children: ReactNode;
};

export function SignalCard({ label, title, children }: SignalCardProps) {
  return (
    <article className="card">
      <p className="card__eyebrow">{label}</p>
      <h3 className="card__title">{title}</h3>
      <div className="card__body">{children}</div>
    </article>
  );
}
