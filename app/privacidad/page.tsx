import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  robots: { index: false },
};

// PENDIENTE: revisar el texto con el responsable legal del laboratorio antes de publicar.
export default function PrivacidadPage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 leading-relaxed text-slate-700 sm:px-6">
        <h1 className="text-3xl font-bold text-brand sm:text-4xl">Aviso de privacidad</h1>
        <p className="mt-6">
          Este sitio web de {site.name} es informativo y no recopila datos personales mediante formularios. Cuando nos
          contactas por WhatsApp o correo electrónico, la información que compartes se utiliza únicamente para
          coordinar tu cita y responder tu consulta.
        </p>
        <p className="mt-4">
          El mapa de ubicación es proporcionado por Google Maps y está sujeto a las políticas de privacidad de Google.
          Las conversaciones por WhatsApp están sujetas a las políticas de WhatsApp.
        </p>
        <p className="mt-4">
          Para consultas sobre tus datos, escríbenos a{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
