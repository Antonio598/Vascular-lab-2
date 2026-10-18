import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { PrintButton } from "@/components/PrintButton";
import { CategoryIcon, MailIcon, PinIcon, WhatsAppIcon, GlobeIcon } from "@/components/icons";
import { getCategory, studiesIn, type CategoryId } from "@/lib/estudios";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solicitud de estudios",
  description: "Solicitud de estudios imprimible para médicos referidores de Vascular Lab.",
};

// Versión imprimible de la papelería, ya con "Doppler arterial de miembros superiores" en lugar del renglón duplicado.

function SheetHeader() {
  return (
    <div className="flex items-center justify-between gap-6 border-b-[6px] border-accent bg-mist px-6 py-4">
      <Logo className="h-14 w-auto" />
      <ul className="space-y-0.5 text-right text-[13px] font-semibold text-brand">
        <li className="flex items-center justify-end gap-1.5">
          <WhatsAppIcon className="size-4 text-accent" /> {site.phoneDisplay}
        </li>
        <li className="flex items-center justify-end gap-1.5">
          <GlobeIcon className="size-4 text-accent" /> {site.domain}
        </li>
        <li className="flex items-center justify-end gap-1.5">
          <MailIcon className="size-4 text-accent" /> {site.email}
        </li>
        <li className="flex items-center justify-end gap-1.5">
          <PinIcon className="size-4 text-accent" /> {site.addressShort}
        </li>
      </ul>
    </div>
  );
}

function Box({ id, extra }: { id: CategoryId; extra?: React.ReactNode }) {
  const c = getCategory(id);
  const head = c.color === "red" ? "bg-accent" : "bg-brand";
  return (
    <div className="overflow-hidden rounded-xl border-2 border-brand">
      <h2 className={`flex items-center gap-2 px-4 py-2 text-[15px] font-semibold uppercase text-white ${head}`}>
        <CategoryIcon id={id} className="size-5" /> {c.name}
      </h2>
      <ul className="space-y-2 px-4 py-3 text-[13px] font-medium text-brand">
        {studiesIn(id).map((s) => (
          <li key={s.slug} className="flex items-start gap-2.5">
            <span className="mt-0.5 size-4 shrink-0 border-2 border-brand" />
            {s.name}
          </li>
        ))}
        {extra}
      </ul>
    </div>
  );
}

function Line({ label, className = "" }: { label: string; className?: string }) {
  return (
    <p className={`flex items-end gap-2 text-[13px] font-semibold text-brand uppercase ${className}`}>
      <span className="shrink-0">{label}</span>
      <span className="mb-1 flex-1 border-b border-slate-400" />
    </p>
  );
}

function Indicacion({ lateralidad = false }: { lateralidad?: boolean }) {
  return (
    <div className={`grid gap-4 rounded-xl border-2 border-brand p-4 ${lateralidad ? "grid-cols-[auto_1fr]" : ""}`}>
      {lateralidad && (
        <div className="border-r border-brand pr-5">
          <p className="text-[13px] font-semibold text-brand uppercase">Lateralidad (si aplica):</p>
          <div className="mt-3 flex gap-4 text-[13px] font-medium text-brand">
            {["Derecho", "Izquierdo", "Bilateral"].map((l) => (
              <span key={l} className="flex items-center gap-1.5">
                <span className="size-4 border-2 border-brand" /> {l}
              </span>
            ))}
          </div>
        </div>
      )}
      <div>
        <p className="text-[13px] font-semibold text-brand uppercase">Indicación clínica / diagnóstico presuntivo:</p>
        <span className="mt-6 block border-b border-slate-400" />
        <span className="mt-6 block border-b border-slate-400" />
      </div>
    </div>
  );
}

const sheet = "mx-auto w-full max-w-[1050px] space-y-4 bg-white p-4 shadow-lg ring-1 ring-mist print:max-w-none print:p-0 print:shadow-none print:ring-0";

export default function SolicitudPage() {
  return (
    <section className="bg-mist/60 py-10 print:bg-white print:py-0">
      <div className="mx-auto mb-8 max-w-[1050px] px-4 print:hidden">
        <h1 className="text-3xl font-bold text-brand">Solicitud de estudios</h1>
        <p className="mt-2 text-slate-600">
          Formulario para médicos referidores. Imprímelo o guárdalo como PDF (orientación horizontal). Para coordinar un
          estudio también puedes{" "}
          <a href={waLink("Hola, soy médico y quisiera coordinar un estudio para un paciente.")} className="font-semibold text-accent underline" target="_blank" rel="noopener noreferrer">
            escribirnos por WhatsApp
          </a>
          .
        </p>
        <div className="mt-5">
          <PrintButton />
        </div>
      </div>

      <div className="space-y-10 overflow-x-auto px-4 print:space-y-0 print:overflow-visible print:px-0">
        {/* Hoja 1 */}
        <div className={`${sheet} min-w-[860px] break-after-page print:min-w-0`}>
          <SheetHeader />
          <h2 className="text-2xl font-bold text-brand uppercase">Solicitud de estudios</h2>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl border-2 border-brand px-4 py-3">
            <Line label="Nombre:" />
            <Line label="Cédula:" />
            <Line label="Fecha:" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Box id="venosos" />
            <Box id="arteriales" />
            <Box id="hemodinamicos" />
          </div>
          <Indicacion lateralidad />
          <Line label="Médico solicitante:" className="max-w-2xl pt-2" />
        </div>

        {/* Hoja 2 */}
        <div className={`${sheet} min-w-[860px] print:min-w-0`}>
          <SheetHeader />
          <div className="grid grid-cols-2 gap-4">
            <Box id="otros" />
            <Box
              id="cardiovasculares"
              extra={
                <li className="flex items-end gap-2.5">
                  <span className="mb-0.5 size-4 shrink-0 border-2 border-brand" />
                  Otro:
                  <span className="mb-1 flex-1 border-b border-slate-400" />
                </li>
              }
            />
          </div>
          <Indicacion />
          <Line label="Médico solicitante:" className="max-w-2xl pt-2" />
        </div>
      </div>
    </section>
  );
}
