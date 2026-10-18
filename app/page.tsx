import { Button } from "@/components/Button";
import { CategoryCard } from "@/components/CategoryCard";
import { Faq, type FaqItem } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  DownloadIcon,
  FileIcon,
  GlobeIcon,
  HeartPulseIcon,
  MailIcon,
  PinIcon,
  StethoscopeIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { categories, studies } from "@/lib/estudios";
import { mapsDirectionsUrl, mapsEmbedUrl, site, solicitudHref, waLink } from "@/lib/site";

const faqs: FaqItem[] = [
  {
    q: "¿Cómo puedo agendar un estudio?",
    a: "Comunícate con nosotros por WhatsApp e indica el estudio solicitado. Te orientaremos sobre disponibilidad y coordinación de la cita.",
  },
  {
    q: "¿Necesito una solicitud médica?",
    a: "Te recomendamos traer la solicitud de tu médico si cuentas con ella. Escríbenos por WhatsApp y te confirmaremos los requisitos para tu estudio.",
  },
  {
    q: "¿Mi estudio requiere preparación?",
    a: "La preparación depende del estudio. Al agendar, solicita las indicaciones correspondientes.",
  },
  {
    q: "¿Qué información debo tener disponible?",
    a: "El nombre del estudio, la solicitud médica si cuentas con ella y la región que se evaluará. Cuando corresponda, indica si el estudio es derecho, izquierdo o bilateral.",
  },
  {
    q: "¿Cuánto tiempo dura?",
    a: "La duración varía según el estudio y la región evaluada. Te la confirmaremos al coordinar tu cita.",
  },
  {
    q: "¿Cuándo y cómo recibiré los resultados?",
    a: "El plazo y la forma de entrega se confirman al agendar, según el estudio realizado.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Consúltanos por WhatsApp las formas de pago disponibles y las condiciones con aseguradoras.",
  },
  {
    q: "¿No encuentras el estudio que necesitas?",
    a: "Contáctanos para consultar tu solicitud y confirmar disponibilidad.",
  },
];

const steps = [
  { title: "Escríbenos por WhatsApp", text: "Contáctanos al " + site.phoneDisplay + " para consultar disponibilidad." },
  { title: "Indica el estudio que necesitas", text: "Nombre del estudio, región a evaluar y lateralidad si corresponde." },
  { title: "Confirma tu cita", text: "Fecha, horario e instrucciones de preparación para tu visita." },
];

const solicitudFields = [
  "Nombre e identificación del paciente.",
  "Fecha.",
  "Estudio solicitado.",
  "Lateralidad: derecho, izquierdo o bilateral.",
  "Indicación clínica o diagnóstico presuntivo.",
  "Médico solicitante.",
];

export default function Home() {
  return (
    <>
      {/* PORTADA */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-[#2a63b0] text-white">
        <svg
          className="pointer-events-none absolute -right-40 -bottom-40 w-[46rem] opacity-[0.08]"
          viewBox="0 0 200 200"
          aria-hidden
        >
          <circle cx="100" cy="100" r="96" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="white" strokeWidth="2" />
          <path d="M10 100h45l10-30 15 60 12-45 8 15h90" fill="none" stroke="white" strokeWidth="3" />
        </svg>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-1.5 text-sm font-medium ring-1 ring-white/25">
              <span className="size-2 rounded-full bg-accent" /> Brisas del Golf · Laboratorio vascular no invasivo
            </p>
            <h1 className="mt-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              Tu salud vascular, <span className="text-[#ff9aa6]">en un solo lugar.</span>
            </h1>
            <p className="mt-5 text-xl font-medium text-white/90">
              Laboratorio vascular no invasivo y estudios cardiovasculares en Brisas del Golf.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              En Vascular Lab realizamos estudios para la evaluación de la circulación venosa y arterial, además de
              estudios hemodinámicos y cardiovasculares. Consulta nuestro catálogo y comunícate con nosotros para
              coordinar el estudio solicitado por tu médico.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={waLink()} variant="whatsapp" icon={<WhatsAppIcon className="size-5" />}>
                Agendar por WhatsApp
              </Button>
              <Button href="/#estudios" variant="ghost-light">
                Ver nuestros estudios
              </Button>
              <Button href={mapsDirectionsUrl} variant="ghost-light" icon={<PinIcon className="size-5" />}>
                Cómo llegar
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { n: studies.length, l: "estudios disponibles" },
              { n: categories.length, l: "áreas de evaluación" },
              { n: "100%", l: "estudios no invasivos" },
              { n: "1", l: "sede en Brisas del Golf" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur">
                <p className="text-4xl font-bold">{s.n}</p>
                <p className="mt-1 text-sm text-white/80">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CINTA */}
      <div className="marquee overflow-hidden border-y-4 border-accent bg-mist py-3" aria-hidden>
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-[15px] font-semibold text-brand">
          {[...studies, ...studies].map((s, i) => (
            <span key={i} className="flex items-center gap-8">
              {s.name}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* NUESTROS ESTUDIOS */}
      <section id="estudios" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Nuestros estudios" title="Laboratorio vascular no invasivo y estudios cardiovasculares">
            Conoce nuestros estudios para la evaluación de la circulación venosa, arterial y la salud cardiovascular.
          </SectionHeading>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.id} delay={i * 80}>
                <CategoryCard category={c} />
              </Reveal>
            ))}
            <Reveal delay={400}>
              <div className="flex h-full flex-col justify-center rounded-2xl bg-mist p-8">
                <HeartPulseIcon className="size-10 text-accent" />
                <h3 className="mt-4 text-xl font-bold text-brand">¿No encuentras tu estudio?</h3>
                <p className="mt-2 text-slate-600">Escríbenos con tu solicitud médica y te confirmamos disponibilidad.</p>
                <div className="mt-6">
                  <Button href={waLink("Hola, quisiera consultar si realizan un estudio.")} variant="whatsapp" icon={<WhatsAppIcon className="size-5" />}>
                    Consultar por WhatsApp
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/estudios/" variant="primary" icon={<ArrowRightIcon className="size-5" />}>
              Más información sobre los estudios
            </Button>
            <Button href={waLink()} variant="whatsapp" icon={<WhatsAppIcon className="size-5" />}>
              Agendar por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* PACIENTES */}
      <section id="pacientes" className="bg-mist/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Información para pacientes" title="Coordina tu estudio con nosotros">
            Si tienes una solicitud médica, contáctanos para consultar disponibilidad y coordinar tu cita. Al agendar,
            confirma el nombre del estudio, la región que se evaluará y, cuando corresponda, si es del lado derecho,
            izquierdo o bilateral.
          </SectionHeading>

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <li className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand/10">
                  <span className="flex size-11 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand">{s.title}</h3>
                  <p className="mt-1 text-slate-600">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="mx-auto mt-14 max-w-3xl">
            <h3 className="mb-5 text-center text-2xl font-bold text-brand">Preguntas frecuentes</h3>
            <Faq items={faqs} />
            <div className="mt-8 text-center">
              <Button href={waLink()} variant="whatsapp" icon={<WhatsAppIcon className="size-5" />}>
                Consultar o agendar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MÉDICOS REFERIDORES */}
      <section id="medicos" className="bg-brand py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Médicos referidores</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Información para médicos referidores</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Consulte nuestro catálogo de estudios vasculares no invasivos y cardiovasculares. Para facilitar la
              coordinación, indique el estudio solicitado, la lateralidad cuando corresponda y la indicación clínica o
              diagnóstico presuntivo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={solicitudHref} variant="whatsapp" icon={<DownloadIcon className="size-5" />}>
                Descargar solicitud de estudios
              </Button>
              <Button
                href={waLink("Hola, soy médico y quisiera coordinar un estudio para un paciente.")}
                variant="ghost-light"
                icon={<StethoscopeIcon className="size-5" />}
              >
                Contactar para coordinación
              </Button>
              <Button href="/estudios/" variant="ghost-light">
                Ver catálogo por categoría
              </Button>
            </div>
          </div>

          <Reveal>
            <div className="rounded-2xl bg-white p-7 text-slate-700 shadow-xl">
              <h3 className="flex items-center gap-3 text-lg font-semibold text-brand">
                <FileIcon className="size-6 text-accent" /> Contenido de la solicitud
              </h3>
              <ul className="mt-5 space-y-3">
                {solicitudFields.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* UBICACIÓN Y CONTACTO */}
      <section id="contacto" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Ubicación y contacto" title="Visítanos en Brisas del Golf">
            Estamos en Plaza Signature, piso 2, consultorio 5, Brisas del Golf, Panamá. Contáctanos para coordinar tu
            cita y recibir indicaciones para tu visita.
          </SectionHeading>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-4">
              {[
                { icon: PinIcon, label: "Ubicación", value: site.address },
                { icon: WhatsAppIcon, label: "Teléfono y WhatsApp", value: site.phoneDisplay, href: waLink() },
                { icon: MailIcon, label: "Correo electrónico", value: site.email, href: `mailto:${site.email}` },
                { icon: ClockIcon, label: "Horario de atención", value: site.hours },
                { icon: GlobeIcon, label: "Sitio web", value: site.domain },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 rounded-2xl border-2 border-brand/10 p-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-semibold break-words text-brand hover:text-accent"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-brand">{value}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button href={mapsDirectionsUrl} variant="primary" icon={<PinIcon className="size-5" />}>
                  Cómo llegar
                </Button>
                <Button href={waLink()} variant="whatsapp" icon={<WhatsAppIcon className="size-5" />}>
                  Agendar por WhatsApp
                </Button>
              </div>
            </div>

            <div className="min-h-[360px] overflow-hidden rounded-2xl border-2 border-brand/10 shadow-sm">
              <iframe
                title="Mapa de Vascular Lab en Plaza Signature, Brisas del Golf"
                src={mapsEmbedUrl}
                className="h-full min-h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="bg-accent py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Da el siguiente paso</h2>
          <p className="mt-4 text-lg text-white/90">
            Conoce nuestros estudios y coordina tu próxima visita. En Vascular Lab te orientamos para realizar la
            evaluación solicitada por tu médico.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-accent hover:bg-mist"
            >
              <WhatsAppIcon className="size-5" /> Agendar por WhatsApp
            </a>
            <Button href="/estudios/" variant="ghost-light">
              Ver nuestros estudios
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
