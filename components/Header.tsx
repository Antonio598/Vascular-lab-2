"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ArrowRightIcon, CloseIcon, MailIcon, MenuIcon, PinIcon, WhatsAppIcon } from "./icons";
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

  // Bloquea el scroll del fondo con el menú móvil abierto
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 print:hidden">
      <div
        className={`hidden overflow-hidden bg-brand-dark text-white/85 transition-[max-height] duration-300 lg:block ${
          scrolled ? "max-h-0" : "max-h-12"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-[13px]">
          <p className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
              <span className="relative size-2 rounded-full bg-[#25D366]" />
            </span>
            Citas por WhatsApp · {site.tagline}
          </p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-white">
              <MailIcon className="size-4" /> {site.email}
            </a>
            <span className="flex items-center gap-1.5">
              <PinIcon className="size-4" /> {site.addressShort}
            </span>
          </div>
        </div>
      </div>

      <div
        className={`relative z-40 border-b border-mist bg-white/90 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_30px_rgb(15_47_92/0.08)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
          <Link href="/#inicio" aria-label="Vascular Lab, inicio" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-1 xl:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-full px-3.5 py-2 text-[15px] font-medium text-brand transition-colors hover:text-accent"
              >
                {item.label}
                <span className="absolute inset-x-3.5 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="shine hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:-translate-y-0.5 hover:bg-accent-dark sm:inline-flex"
            >
              <WhatsAppIcon className="size-4" /> Agendar cita
            </a>
            <button
              type="button"
              className="relative z-50 rounded-full p-2.5 text-brand transition hover:bg-ice xl:hidden"
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
            </button>
          </div>
        </div>

        {/* Barra de progreso de lectura */}
        <div className="scroll-progress absolute inset-x-0 -bottom-px h-[3px] bg-gradient-to-r from-brand via-accent to-accent" />
        <div className="absolute inset-x-0 -bottom-px h-[3px] bg-accent/15" />
      </div>

      {/* Menú móvil a pantalla completa */}
      <div
        id="menu-movil"
        className={`fixed inset-0 top-0 z-30 flex flex-col bg-white pt-24 transition-[opacity,visibility] duration-300 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <svg className="pointer-events-none absolute -right-24 -bottom-24 w-96 text-brand/5" viewBox="0 0 200 200" aria-hidden>
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="18" />
        </svg>
        <nav aria-label="Menú móvil" className="flex-1 overflow-y-auto px-6">
          <ul>
            {nav.map((item, i) => (
              <li
                key={item.href}
                className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-mist py-4 font-display text-2xl font-semibold text-brand active:text-accent"
                >
                  {item.label}
                  <ArrowRightIcon className="size-5 text-accent" />
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={`mt-8 space-y-3 pb-10 text-slate-600 transition-all duration-500 ${open ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: open ? "450ms" : "0ms" }}
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-4 text-lg font-semibold text-white"
            >
              <WhatsAppIcon className="size-5" /> Agendar por WhatsApp
            </a>
            <p className="flex items-center gap-2 pt-2 text-sm">
              <PinIcon className="size-4 text-accent" /> {site.address}
            </p>
            <p className="flex items-center gap-2 text-sm">
              <MailIcon className="size-4 text-accent" /> {site.email}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
