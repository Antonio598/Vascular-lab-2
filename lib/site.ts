// Datos generales del sitio. Los campos marcados como PENDIENTE deben confirmarse antes de publicar.

export const site = {
  name: "Vascular Lab",
  tagline: "Laboratorio vascular no invasivo y estudios cardiovasculares",
  // PENDIENTE: confirmar dominio principal.
  url: "https://vascularlab.pa",
  domain: "vascularlab.pa",
  whatsapp: "50761345752",
  phoneDisplay: "+507 6134-5752",
  email: "contacto@vascularlab.pa",
  address: "Plaza Signature, piso 2, consultorio 5, Brisas del Golf, Panamá",
  addressShort: "Plaza Signature, piso 2, cons. 5 · Brisas del Golf",
  // PENDIENTE: confirmar horario de atención.
  hours: "Horario por confirmar · consulta disponibilidad por WhatsApp",
  // PENDIENTE: reemplazar por el pin exacto de Google Maps.
  mapsQuery: "Plaza Signature, Brisas del Golf, Panamá",
  // PENDIENTE: cuando exista el PDF final corregido, colócalo en /public y escribe aquí su ruta
  // (por ejemplo "/solicitud-estudios.pdf"). Mientras sea null se usa la versión imprimible /solicitud.
  solicitudPdf: null as string | null,
};

export const nav = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#estudios", label: "Nuestros estudios" },
  { href: "/#pacientes", label: "Información para pacientes" },
  { href: "/#medicos", label: "Médicos referidores" },
  { href: "/#contacto", label: "Ubicación y contacto" },
];

export const DEFAULT_WA_MESSAGE = "Hola, quisiera agendar un estudio en Vascular Lab.";

export function waLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function studyWaLink(studyName: string) {
  return waLink(`Hola, quisiera consultar por el estudio: ${studyName}.`);
}

export const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=16&output=embed`;
export const solicitudHref = site.solicitudPdf ?? "/solicitud/";
