import { PinIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { mapsDirectionsUrl, telLink, waLink } from "@/lib/site";

// Escritorio: botón flotante. Móvil: barra fija inferior con las tres acciones principales.
export function WhatsAppFloat() {
  return (
    <>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar por WhatsApp"
        className="wa-pulse fixed right-6 bottom-6 z-50 hidden size-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 md:flex print:hidden"
      >
        <WhatsAppIcon className="size-8" />
      </a>

      <nav
        aria-label="Acciones rápidas"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-mist bg-white/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgb(15_47_92/0.08)] backdrop-blur md:hidden print:hidden"
      >
        <div className="grid grid-cols-[1fr_auto_auto] gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-semibold text-white active:scale-95"
          >
            <WhatsAppIcon className="size-5" /> Agendar cita
          </a>
          <a
            href={telLink}
            aria-label="Llamar"
            className="flex size-12 items-center justify-center rounded-full bg-brand text-white active:scale-95"
          >
            <PhoneIcon className="size-5" />
          </a>
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cómo llegar"
            className="flex size-12 items-center justify-center rounded-full bg-accent text-white active:scale-95"
          >
            <PinIcon className="size-5" />
          </a>
        </div>
      </nav>
    </>
  );
}
