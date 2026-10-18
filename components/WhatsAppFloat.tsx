import { WhatsAppIcon } from "./icons";
import { waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar por WhatsApp"
      className="wa-pulse fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:right-6 sm:bottom-6 print:hidden"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}
