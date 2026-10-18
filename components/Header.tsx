"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { CloseIcon, MailIcon, MenuIcon, PinIcon, WhatsAppIcon } from "./icons";
import { nav, site, waLink } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 print:hidden">
      {/* Franja de contacto, como en la papelería */}
      <div
        className={`hidden overflow-hidden bg-mist text-brand transition-[max-height] duration-300 lg:block ${
          scrolled ? "max-h-0" : "max-h-12"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-2 text-sm font-medium">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent">
            <WhatsAppIcon className="size-4 text-accent" /> {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-accent">
            <MailIcon className="size-4 text-accent" /> {site.email}
          </a>
          <span className="flex items-center gap-1.5">
            <PinIcon className="size-4 text-accent" /> {site.addressShort}
          </span>
        </div>
      </div>

      <div className={`border-b-4 border-accent bg-white/95 backdrop-blur transition-shadow ${scrolled ? "shadow-md" : ""}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/#inicio" aria-label="Vascular Lab, inicio" onClick={() => setOpen(false)}>
            <Logo className="h-11 w-auto sm:h-12" />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-6 xl:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-[15px] font-medium text-brand hover:text-accent">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark sm:inline-flex"
            >
              <WhatsAppIcon className="size-4" /> Agendar cita
            </a>
            <button
              type="button"
              className="rounded-lg p-2 text-brand xl:hidden"
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-mist bg-white xl:hidden">
            <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-mist py-3 text-base font-medium text-brand last:border-0"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="py-3 sm:hidden">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-white"
                >
                  <WhatsAppIcon className="size-5" /> Agendar por WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
