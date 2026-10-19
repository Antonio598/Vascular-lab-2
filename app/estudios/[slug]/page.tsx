import type { Metadata } from "next";
import Link from "next/link";
import { EcgLine } from "@/components/HeroVisual";
import { LogoMark } from "@/components/Logo";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { CptList } from "@/components/CptList";
import { ArrowRightIcon, CategoryIcon, ClockIcon, FileIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { CPT_MARKS_NOTE, CPT_NOTE, getCategory, getStudy, studies, studiesIn } from "@/lib/estudios";
import { mapsDirectionsUrl, site, studyWaLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return studies.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getStudy(slug);
  if (!study) return {};
  return {
    title: study.name,
    description: study.description,
    alternates: { canonical: `/estudios/${study.slug}/` },
    openGraph: { title: `${study.name} | ${site.name}`, description: study.description },
  };
}

// PENDIENTE: completar por estudio cuando el profesional responsable valide la información.
const pendingDetails = [
  { icon: FileIcon, label: "Preparación", value: "Se indica al agendar, según el estudio." },
  { icon: ClockIcon, label: "Duración aproximada", value: "Se confirma al agendar." },
  { icon: ClockIcon, label: "Entrega de resultados", value: "Se confirma al agendar." },
];

export default async function StudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getStudy(slug);
  if (!study) notFound();

  const category = getCategory(study.category);
  const related = studiesIn(study.category).filter((s) => s.slug !== study.slug);
  const head = category.color === "red" ? "from-accent-dark to-accent" : "from-brand-dark to-brand";
  const hasMarks = study.cpt.some((c) => /[*†]/.test(c.code));

  return (
    <>
      <section className={`relative isolate overflow-hidden bg-gradient-to-br ${head} py-14 text-white`}>
        <EcgLine className="absolute inset-x-0 bottom-4 -z-10 h-20 w-full text-white/50" />
        <LogoMark light animated={false} className="absolute -top-10 -right-16 -z-10 hidden w-96 opacity-10 md:block" />
        <div className="fade-up mx-auto max-w-5xl px-4 sm:px-6">
          <nav aria-label="Ruta" className="text-sm text-white/75">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white hover:underline">
                  Inicio
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/estudios/" className="hover:text-white hover:underline">
                  Estudios
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={`/estudios/#${category.id}`} className="hover:text-white hover:underline">
                  {category.name}
                </Link>
              </li>
            </ol>
          </nav>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
            <CategoryIcon id={category.id} className="size-4" /> {category.name}
          </p>
          <h1 className="mt-4 text-3xl leading-tight font-bold sm:text-5xl">{study.name}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">{study.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={studyWaLink(study.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand hover:bg-mist"
            >
              <WhatsAppIcon className="size-5 text-[#25D366]" /> Consultar por este estudio
            </a>
            <Button href={mapsDirectionsUrl} variant="ghost-light" icon={<PinIcon className="size-5" />}>
              Cómo llegar
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-brand">¿Qué evalúa?</h2>
              <p className="mt-3 text-lg leading-relaxed text-slate-600">{study.description}</p>
            </div>

            <div className="rounded-2xl border-2 border-brand/10 p-6">
              <h2 className="text-lg font-bold text-brand">CPT de referencia</h2>
              <div className="mt-4">
                <CptList cpt={study.cpt} />
              </div>
              <p className="mt-5 border-t border-mist pt-4 text-sm leading-relaxed text-slate-500">
                {CPT_NOTE}
                {hasMarks && <> {CPT_MARKS_NOTE}</>}
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            {pendingDetails.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl bg-mist/60 p-5">
                <Icon className="mt-0.5 size-6 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-brand">{label}</p>
                  <p className="text-slate-600">{value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-brand p-6 text-white">
              <p className="font-semibold">¿Tienes una solicitud médica?</p>
              <p className="mt-1 text-sm text-white/85">
                Al escribirnos, indica la región a evaluar y, si corresponde, si es derecho, izquierdo o bilateral.
              </p>
              <a
                href={studyWaLink(study.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold hover:bg-accent-dark"
              >
                <WhatsAppIcon className="size-5" /> Agendar por WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-mist/50 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-brand">Otros {category.name.toLowerCase()}</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/estudios/${s.slug}/`}
                    className="group flex h-full items-center justify-between gap-3 rounded-xl bg-white p-4 font-medium text-brand shadow-sm hover:text-accent"
                  >
                    {s.name}
                    <ArrowRightIcon className="size-4 shrink-0 transition group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/estudios/" variant="outline">
                Ver todos los estudios
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
