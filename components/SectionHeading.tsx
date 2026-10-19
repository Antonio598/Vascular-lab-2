import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  children,
  light = false,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  light?: boolean;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p
        className={`inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.18em] ${
          light ? "text-white/75" : "text-accent"
        }`}
      >
        <span className={`h-0.5 w-8 rounded-full ${light ? "bg-white/50" : "bg-accent"}`} />
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem] ${light ? "text-white" : "text-brand"}`}>
        {title}
      </h2>
      {children && (
        <div className={`mt-4 text-lg leading-relaxed ${light ? "text-white/80" : "text-slate-600"}`}>{children}</div>
      )}
    </Reveal>
  );
}
