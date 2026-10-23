import { Button } from "@/components/Button";
import { CountUp } from "@/components/CountUp";
import { Faq, type FaqItem } from "@/components/Faq";
import { EcgLine, HeroVisual } from "@/components/HeroVisual";
import { LogoIcon } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StudyExplorer } from "@/components/StudyExplorer";
import {
  ArrowRightIcon,
  ClockIcon,
  GlobeIcon,
  MailIcon,
  PinIcon,
  PhoneIcon,
  StethoscopeIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { categories, studies } from "@/lib/estudios";
import { mapsDirectionsUrl, mapsEmbedUrl, site, telLink, waLink } from "@/lib/site";

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
  { title: "Escríbenos por WhatsApp", text: `Contáctanos al ${site.phoneDisplay} para consultar disponibilidad.` },
  { title: "Comparte tu solicitud médica", text: "Envíanos la orden de tu médico para identificar el estudio y la región que se evaluará." },
  { title: "Confirma tu cita", text: "Fecha, horario e instrucciones de preparación para tu visita." },
];

const referralTips = [
  "Estudio solicitado",
  "Lateralidad: derecho, izquierdo o bilateral, cuando corresponda",
  "Indicación clínica o diagnóstico presuntivo",
];

function Words({ text, start = 0, className = "" }: { text: string; start?: number; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className={`word ${className}`}>
          <span style={{ animationDelay: `${start + i * 90}ms` }}>{w}</span>
          {" "}
        </span>
      ))}
    </>
  );
}

export default function Home() {
  const half = Math.ceil(studies.length / 2);
  return (
    <>
      {/* ================= PORTADA ================= */}
      <section id="inicio" className="relative isolate overflow-hidden bg-ice">
        {/* Fondo: manchas de color y retícula de puntos */}
        <div className="blob absolute -top-40 -left-40 -z-10 size-[34rem] rounded-full bg-brand/15 blur-3xl" />
        <div className="blob absolute top-1/3 -right-32 -z-10 size-[28rem] rounded-full bg-accent/12 blur-3xl [animation-delay:-6s]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgb(27_75_140/0.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-10 pb-24 sm:px-6 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:pt-20 lg:pb-32">
          <div>
            <p className="fade-up inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-brand shadow-sm ring-1 ring-brand/10">
              <span className="relative flex size-2">
                <span className="pulse-ring absolute inset-0 rounded-full bg-accent" />
                <span className="relative size-2 rounded-full bg-accent" />
              </span>
              Laboratorio vascular no invasivo
            </p>

            <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-semibold text-brand sm:text-6xl lg:text-[4.25rem]">
              <Words text="Tu salud vascular," start={100} />
              <br className="hidden sm:block" />
              <span className="relative inline-block text-accent">
                <Words text="en un solo lugar." start={400} />
                <svg className="absolute -bottom-2 left-0 h-4 w-[95%]" viewBox="0 0 300 16" preserveAspectRatio="none" aria-hidden>
                  <path className="draw-stroke" pathLength={1} d="M3 12C80 2 200 0 297 9" fill="none" stroke="#D7263D" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="fade-up mt-6 text-lg font-medium text-brand sm:text-xl [animation-delay:600ms]">
              Laboratorio vascular no invasivo y estudios cardiovasculares.
            </p>
            <p className="fade-up mt-3 max-w-xl leading-relaxed text-slate-600 sm:text-lg [animation-delay:700ms]">
              En Vascular Lab realizamos estudios para la evaluación de la circulación venosa y arterial, además de
              estudios hemodinámicos y cardiovasculares. Consulta nuestro catálogo y comunícate con nosotros para
              coordinar el estudio solicitado por tu médico.
            </p>

            <div className="fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap [animation-delay:850ms]">
              <Button href={waLink()} variant="whatsapp" icon={<WhatsAppIcon className="size-5" />}>
                Agendar por WhatsApp
              </Button>
              <Button href="/#estudios" variant="primary" icon={<ArrowRightIcon className="size-5" />}>
                Ver nuestros estudios
              </Button>
            </div>

            <dl className="fade-up mt-10 grid max-w-md grid-cols-3 divide-x divide-brand/10 [animation-delay:1000ms]">
              {[
                { n: studies.length, s: "", l: "estudios" },
                { n: categories.length, s: "", l: "áreas" },
                { n: 100, s: "%", l: "no invasivos" },
              ].map((x) => (
                <div key={x.l} className="px-4 first:pl-0">
                  <dt className="sr-only">{x.l}</dt>
                  <dd className="font-display text-3xl font-semibold text-brand sm:text-4xl">
                    <CountUp to={x.n} suffix={x.s} />
                  </dd>
                  <dd className="text-sm text-slate-500">{x.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="fade-up px-2 [animation-delay:300ms] sm:px-8 lg:px-0">
            <HeroVisual />
          </div>
        </div>

        <EcgLine className="absolute inset-x-0 bottom-6 h-16 w-full text-accent sm:h-20" />
      </section>

      {/* ================= CINTAS ================= */}
      <div className="relative z-10 -mt-6 overflow-hidden py-6" aria-hidden>
        <div className="marquee -mx-4 -rotate-[1.5deg] bg-brand py-3.5 shadow-lg">
          <div className="marquee-track flex w-max gap-8 font-display text-base font-medium whitespace-nowrap text-white sm:text-lg">
            {[...studies.slice(0, half), ...studies.slice(0, half)].map((s, i) => (
              <span key={i} className="flex items-center gap-8">
                {s.name}
                <span className="text-[#ff8a96]">✦</span>
              </span>
            ))}
          </div>
        </div>
        <div className="marquee -mx-4 -mt-2 rotate-[1deg] bg-accent py-3 shadow-lg">
          <div className="marquee-track reverse flex w-max gap-8 font-display text-base font-medium whitespace-nowrap text-white/95 sm:text-lg">
            {[...studies.slice(half), ...studies.slice(half)].map((s, i) => (
              <span key={i} className="flex items-center gap-8">
                {s.name}
                <span className="text-white/60">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= ESTUDIOS ================= */}
      <section id="estudios" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Nuestros estudios" title="Laboratorio vascular no invasivo y estudios cardiovasculares">
            Conoce nuestros estudios para la evaluación de la circulación venosa, arterial y la salud cardiovascular.
          </SectionHeading>

          <Reveal className="mt-12" dir="zoom">
            <StudyExplorer />
          </Reveal>

          <Reveal className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/estudios/" variant="primary" icon={<ArrowRightIcon className="size-5" />}>
              Más información sobre los estudios
            </Button>
            <Button href="/#contacto" variant="outline">
              ¿No encuentras tu estudio? Contáctanos
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ================= PACIENTES ================= */}
      <section id="pacientes" className="relative overflow-hidden bg-ice py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Información para pacientes" title="Coordina tu estudio con nosotros">
            Si tienes una solicitud médica, contáctanos para consultar disponibilidad y coordinar tu cita. Al agendar,
            confirma el nombre del estudio, la región que se evaluará y, cuando corresponda, si es del lado derecho,
            izquierdo o bilateral.
          </SectionHeading>

          {/* Pasos con línea que se dibuja */}
          <Reveal className="relative mt-14">
            <div className="steps-line absolute top-7 right-[16%] left-[16%] hidden h-0.5 bg-gradient-to-r from-brand via-accent to-brand md:block" />
            <ol className="relative grid gap-5 md:grid-cols-3 md:gap-8">
              {steps.map((s, i) => (
                <li key={s.title} className="step-item flex gap-4 md:flex-col md:items-center md:text-center" style={{ transitionDelay: `${300 + i * 200}ms` }}>
                  <span className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-white font-display text-xl font-semibold text-accent shadow-lg ring-4 ring-ice">
                    <span className="absolute inset-1 rounded-full border-2 border-dashed border-accent/30" />
                    {i + 1}
                  </span>
                  <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand/5 md:mt-5 md:w-full">
                    <h3 className="text-lg font-semibold text-brand">{s.title}</h3>
                    <p className="mt-1 text-slate-600">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <Reveal dir="left" className="lg:sticky lg:top-32 lg:self-start">
              <h3 className="text-3xl font-semibold text-brand">Preguntas frecuentes</h3>
              <p className="mt-3 text-slate-600">
                ¿Tienes otra duda? Contáctanos y te orientamos.
              </p>
              <div className="relative mt-6 overflow-hidden rounded-3xl bg-brand p-6 text-white">
                <LogoIcon light className="absolute -right-6 -bottom-8 w-36 opacity-10" />
                <p className="font-display text-xl font-semibold">¿Listo para agendar?</p>
                <p className="mt-1 text-white/80">Encuentra nuestros datos de contacto y ubicación.</p>
                <a href="/#contacto" className="mt-4 inline-flex items-center gap-2 font-semibold text-white hover:underline">
                  Ubicación y contacto <ArrowRightIcon className="size-4" />
                </a>
              </div>
            </Reveal>
            <Reveal dir="right">
              <Faq items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= MÉDICOS ================= */}
      <section id="medicos" className="relative isolate overflow-hidden bg-brand-dark py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgb(47_107_192/0.55),transparent_60%)]" />
        <LogoIcon light className="absolute -bottom-24 -left-24 -z-10 w-[30rem] opacity-[0.05]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading light align="left" eyebrow="Médicos referidores" title="Información para médicos referidores">
              Consulte nuestro catálogo de estudios vasculares no invasivos y cardiovasculares. Para facilitar la
              coordinación, indique el estudio solicitado, la lateralidad cuando corresponda y la indicación clínica o
              diagnóstico presuntivo.
            </SectionHeading>
            <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap" delay={150}>
              <Button href="/estudios/" variant="white" icon={<ArrowRightIcon className="size-5" />}>
                Ver catálogo por categoría
              </Button>
              <Button href="/#contacto" variant="ghost-light" icon={<StethoscopeIcon className="size-5" />}>
                Contacto para coordinación
              </Button>
            </Reveal>
          </div>

          {/* Qué indicar al referir: las casillas se marcan solas */}
          <Reveal dir="right" className="mx-auto w-full max-w-lg">
            <div className="rotate-2 rounded-3xl bg-white p-1.5 text-slate-700 shadow-2xl shadow-black/40 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
              <div className="flex items-center justify-between gap-4 rounded-t-[1.25rem] border-b-4 border-accent bg-ice px-6 py-4">
                <span className="font-display text-lg leading-tight font-semibold text-brand">Para facilitar la coordinación, indique:</span>
                <LogoIcon className="w-12 shrink-0" />
              </div>
              <ul className="space-y-4 p-6">
                {referralTips.map((f, i) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border-2 border-brand">
                      <svg viewBox="0 0 24 24" className="tick size-4" aria-hidden>
                        <path
                          d="m5 12.5 4.5 4.5L19 7.5"
                          pathLength={1}
                          fill="none"
                          stroke="#D7263D"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ animationDelay: `${500 + i * 280}ms` }}
                        />
                      </svg>
                    </span>
                    <span className="font-medium text-brand">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CONTACTO ================= */}
      <section id="contacto" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Ubicación y contacto" title="Visítanos en Brisas del Golf">
            Estamos en Brisas del Golf, Signature Plaza, piso 2, consultorio 5, Panamá. Contáctanos para coordinar tu
            cita y recibir indicaciones para tu visita.
          </SectionHeading>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.35fr]">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { icon: PinIcon, label: "Ubicación", value: site.address, href: mapsDirectionsUrl },
                { icon: PhoneIcon, label: "Teléfono y WhatsApp", value: site.phoneDisplay, href: telLink },
                { icon: MailIcon, label: "Correo electrónico", value: site.email, href: `mailto:${site.email}` },
                { icon: ClockIcon, label: "Horario de atención", value: site.hours },
                { icon: GlobeIcon, label: "Sitio web", value: site.domain },
              ].map(({ icon: Icon, label, value, href }, i) => {
                const body = (
                  <>
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</span>
                      <span className="block font-semibold break-words text-brand">{value}</span>
                    </span>
                  </>
                );
                const cls = "group flex h-full items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-brand/10 transition-all duration-300";
                return (
                  <Reveal key={label} delay={i * 70} dir="left">
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className={`${cls} hover:-translate-y-0.5 hover:shadow-lg hover:ring-accent/30`}
                      >
                        {body}
                      </a>
                    ) : (
                      <div className={cls}>{body}</div>
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal dir="right" className="relative min-h-[380px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-brand/10">
              <iframe
                title="Mapa de Vascular Lab en Signature Plaza, Brisas del Golf"
                src={mapsEmbedUrl}
                className="absolute inset-0 size-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-x-3 bottom-3 flex rounded-2xl bg-white/95 p-2 shadow-lg backdrop-blur sm:inset-x-auto sm:right-4 sm:bottom-4">
                <Button href={mapsDirectionsUrl} variant="primary" icon={<PinIcon className="size-5" />} className="w-full !py-3">
                  Cómo llegar
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= CIERRE ================= */}
      <section className="relative isolate overflow-hidden bg-accent py-20 text-white">
        <div className="absolute top-1/2 left-1/2 -z-10 size-[40rem] -translate-x-1/2 -translate-y-1/2">
          <div className="pulse-ring absolute inset-0 rounded-full border-2 border-white/30" />
          <div className="pulse-ring absolute inset-0 rounded-full border-2 border-white/30 [animation-delay:1s]" />
          <div className="pulse-ring absolute inset-0 rounded-full border-2 border-white/30 [animation-delay:2s]" />
        </div>
        <EcgLine className="absolute inset-x-0 top-1/2 -z-10 h-24 w-full -translate-y-1/2 text-white/25" />
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6" dir="zoom">
          <HeartBadge />
          <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">Da el siguiente paso</h2>
          <p className="mt-4 text-lg text-white/90">
            Conoce nuestros estudios y coordina tu próxima visita. En Vascular Lab te orientamos para realizar la
            evaluación solicitada por tu médico.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/estudios/" variant="white" icon={<ArrowRightIcon className="size-5" />}>
              Ver nuestros estudios
            </Button>
            <Button href={mapsDirectionsUrl} variant="ghost-light" icon={<PinIcon className="size-5" />}>
              Cómo llegar
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function HeartBadge() {
  return (
    <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
      <svg viewBox="0 0 24 24" className="heartbeat size-8" fill="white" aria-hidden>
        <path d="M12 21s-8.5-5.5-8.5-11.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8.5 3.5C20.5 15.5 12 21 12 21Z" />
      </svg>
    </span>
  );
}
