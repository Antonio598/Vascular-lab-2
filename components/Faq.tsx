import { ChevronDownIcon } from "./icons";

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-mist overflow-hidden rounded-2xl border-2 border-brand/15 bg-white">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-brand hover:bg-mist/40 [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDownIcon className="size-5 shrink-0 text-accent transition-transform group-open:rotate-180" />
          </summary>
          <p className="px-5 pb-5 leading-relaxed text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
