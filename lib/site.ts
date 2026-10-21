// Datos generales del sitio. Los campos marcados como PENDIENTE deben confirmarse antes de publicar.

export const site = {
  name: "Vascular Lab",
  tagline: "Laboratorio vascular no invasivo y estudios cardiovasculares",
  url: "https://vascularlab.pa",
  domain: "vascularlab.pa",
  whatsapp: "50768729827",
  phoneDisplay: "+507 6872-9827",
  email: "contacto@vascularlab.pa",
  address: "Brisas del Golf, Signature Plaza, piso 2, consultorio 5, Panamá",
  // PENDIENTE: confirmar horario de atención.
  hours: "Horario por confirmar · consulta disponibilidad por WhatsApp",
  // PENDIENTE: reemplazar por el pin exacto de Google Maps.
  mapsQuery: "Signature Plaza, Brisas del Golf, Panamá",
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

export const telLink = `tel:+${site.whatsapp}`;
export const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=16&output=embed`;
