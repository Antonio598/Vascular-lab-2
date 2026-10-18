import Link from "next/link";
import { CategoryIcon, ArrowRightIcon } from "./icons";
import type { Category } from "@/lib/estudios";
import { studiesIn } from "@/lib/estudios";

// Tarjeta con cabecera de color e icono, igual que los bloques de la solicitud de estudios.
export function CategoryCard({ category }: { category: Category }) {
  const head = category.color === "red" ? "bg-accent" : "bg-brand";
  const border = category.color === "red" ? "border-accent/25" : "border-brand/25";
  return (
    <article className={`flex h-full flex-col overflow-hidden rounded-2xl border-2 ${border} bg-white shadow-sm`}>
      <h3 className={`flex items-center gap-3 px-5 py-4 text-lg font-semibold uppercase tracking-wide text-white ${head}`}>
        <CategoryIcon id={category.id} className="size-7 shrink-0" />
        {category.name}
      </h3>
      <ul className="flex-1 divide-y divide-mist px-5 py-2">
        {studiesIn(category.id).map((s) => (
          <li key={s.slug}>
            <Link
              href={`/estudios/${s.slug}/`}
              className="group flex items-start justify-between gap-3 py-3 text-[15px] font-medium text-brand hover:text-accent"
            >
              <span>{s.name}</span>
              <ArrowRightIcon className="mt-0.5 size-4 shrink-0 opacity-40 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
