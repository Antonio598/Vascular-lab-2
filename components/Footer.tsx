import Link from "next/link";
import { Logo } from "./Logo";
import { categories } from "@/lib/estudios";
import { nav, site, telLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark text-white/85 print:hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light className="h-12" />
          <p className="mt-4 text-sm leading-relaxed">{site.tagline}.</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Navegación</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Estudios</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.id}>
                <Link href={`/estudios/#${c.id}`} className="hover:text-white hover:underline">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contacto</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={telLink} className="hover:text-white hover:underline">
                Teléfono y WhatsApp: {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <Link href="/#contacto" className="hover:text-white hover:underline">
                Ver ubicación
              </Link>
            </li>
            <li className="text-white/60">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-white/60 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. Este sitio es informativo y no sustituye la consulta médica. Los códigos CPT son de
            referencia.
          </p>
          <Link href="/privacidad/" className="hover:text-white hover:underline">
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
