import type { Cpt } from "@/lib/estudios";

export function CptList({ cpt, compact = false }: { cpt: Cpt[]; compact?: boolean }) {
  return (
    <dl className={compact ? "space-y-1.5" : "space-y-3"}>
      {cpt.map((c) => (
        <div key={c.code} className="flex items-start gap-3">
          <dt className="shrink-0 rounded-md bg-brand/10 px-2 py-0.5 font-mono text-sm font-semibold text-brand">
            {c.code}
          </dt>
          <dd className={`text-slate-600 ${compact ? "text-sm" : ""}`}>{c.name}</dd>
        </div>
      ))}
    </dl>
  );
}
