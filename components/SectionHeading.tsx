import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${light ? "text-white/70" : "text-accent"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-brand"}`}>{title}</h2>
      {children && <div className={`mt-4 text-lg leading-relaxed ${light ? "text-white/85" : "text-slate-600"}`}>{children}</div>}
    </div>
  );
}
