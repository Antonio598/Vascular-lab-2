import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CptList } from "@/components/CptList";
import { ArrowRightIcon, CategoryIcon, ChevronDownIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { CPT_MARKS_NOTE, CPT_NOTE, categories, studiesIn } from "@/lib/estudios";
import { mapsDirectionsUrl, studyWaLink, waLink } from "@/lib/site";
import { EcgLine } from "@/components/HeroVisual";
import { OpenDetailsOnHash } from "@/components/OpenDetailsOnHash";

export const metadata: Metadata = {
  title: "Nuestros estudios",
  description:
    "Catálogo de estudios de Vascular Lab: venosos, arteriales, hemodinámicos, especializados y cardiovasculares, con descripción y CPT de referencia.",
  alternates: { canonical: "/estudios/" },
};

export default function EstudiosPage() {
  return (
    <>
      <OpenDetailsOnHash />
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-dark to-brand py-16 text-white">
        <EcgLine className="absolute inset-x-0 bottom-4 -z-10 h-20 w-full text-white/50" />
        <div className="fade-up mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            Vascular Lab · Laboratorio vascular no invasivo y estudios cardiovasculares
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Tu salud vascular, en un solo lugar.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/85">
            En Vascular Lab realizamos estudios para evaluar la circulación venosa y arterial, además de pruebas
            hemodinámicas y cardiovasculares. Consulta nuestros estudios y comunícate con nosotros para coordinar tu
            cita.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={waLink()} variant="whatsapp" icon={<WhatsAppIcon className="size-5" />}>
              Agendar por WhatsApp
            </Button>
            <Button href="#venosos" variant="ghost-light">
              Ver nuestros estudios
            </Button>
            <Button href={mapsDirectionsUrl} variant="ghost-light" icon={<PinIcon className="size-5" />}>
              Cómo llegar
            </Button>
          </div>
        </div>
      </section>

      {/* Accesos rápidos por categoría */}
      <nav aria-label="Categorías" className="sticky top-[76px] z-30 border-b border-mist bg-white/95 backdrop-blur lg:top-[80px]">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {categories.map((c) => (
            <li key={c.id} className="shrink-0">
              <a
                href={`#${c.id}`}
                className="block rounded-full border border-brand/20 px-4 py-1.5 text-sm font-medium text-brand hover:border-accent hover:text-accent"
              >
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="bg-mist/50 py-14">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6">
          {categories.map((c, i) => {
            const head = c.color === "red" ? "bg-accent" : "bg-brand";
            return (
              <details key={c.id} id={c.id} open={i === 0} className="group scroll-mt-40 overflow-hidden rounded-2xl bg-white shadow-sm">
                <summary
                  className={`flex cursor-pointer list-none items-center gap-4 px-5 py-5 text-white sm:px-7 ${head} [&::-webkit-details-marker]:hidden`}
                >
                  <CategoryIcon id={c.id} className="size-8 shrink-0" />
                  <span className="flex-1">
                    <span className="block text-xl font-semibold uppercase tracking-wide">{c.name}</span>
                    <span className="mt-0.5 block text-sm text-white/80">{c.intro}</span>
                  </span>
                  <span className="hidden text-sm text-white/80 sm:inline">{studiesIn(c.id).length} estudios</span>
                  <ChevronDownIcon className="size-6 shrink-0 transition-transform group-open:rotate-180" />
                </summary>

                <div className="divide-y divide-mist">
                  {studiesIn(c.id).map((s) => (
                    <article key={s.slug} className="grid gap-4 px-5 py-6 sm:px-7 lg:grid-cols-[1.1fr_1.3fr_auto] lg:items-start lg:gap-8">
                      <div>
                        <h2 className="text-lg font-semibold text-brand">
                          <Link href={`/estudios/${s.slug}/`} className="hover:text-accent">
                            {s.name}
                          </Link>
                        </h2>
                        <p className="mt-2 leading-relaxed text-slate-600">{s.description}</p>
                      </div>
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">CPT de referencia</p>
                        <CptList cpt={s.cpt} compact />
                      </div>
                      <div className="flex flex-wrap gap-2 lg:flex-col">
                        <Link
                          href={`/estudios/${s.slug}/`}
                          className="inline-flex items-center gap-1.5 rounded-full border-2 border-brand px-4 py-2 text-sm font-semibold text-brand hover:bg-brand hover:text-white"
                        >
                          Ver ficha <ArrowRightIcon className="size-4" />
                        </Link>
                        <a
                          href={studyWaLink(s.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-dark"
                        >
                          <WhatsAppIcon className="size-4" /> Consultar
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </details>
            );
          })}

          <div className="rounded-2xl border-l-4 border-brand bg-white p-6 text-sm leading-relaxed text-slate-600">
            <p>
              <strong className="text-brand">Nota sobre los códigos CPT:</strong> {CPT_NOTE}
            </p>
            <p className="mt-2">{CPT_MARKS_NOTE}</p>
          </div>
        </div>
      </section>
    </>
  );
}
