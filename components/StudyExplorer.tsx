"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRightIcon, CategoryIcon } from "./icons";
import { categories, studiesIn } from "@/lib/estudios";

// Catálogo por pestañas: en la portada solo categorías y nombres; descripción y CPT viven en /estudios.
// Todos los paneles están en el HTML (los inactivos ocultos) para que los enlaces sigan indexables.
export function StudyExplorer() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const select = (i: number, btn?: HTMLButtonElement | null) => {
    setActive(i);
    btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const onKey = (e: React.KeyboardEvent) => {
    const delta = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!delta) return;
    e.preventDefault();
    const next = (active + delta + categories.length) % categories.length;
    const btn = tabsRef.current?.querySelectorAll("button")[next] as HTMLButtonElement | undefined;
    btn?.focus();
    select(next, btn);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-8">
      <div
        ref={tabsRef}
        role="tablist"
        aria-label="Categorías de estudios"
        onKeyDown={onKey}
        className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {categories.map((c, i) => {
          const selected = i === active;
          const on = c.color === "red" ? "bg-accent shadow-accent/30" : "bg-brand shadow-brand/30";
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={selected}
              aria-controls={`panel-${c.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={(e) => select(i, e.currentTarget)}
              className={`group flex shrink-0 snap-start items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 lg:py-4 ${
                selected
                  ? `${on} text-white shadow-lg lg:translate-x-2`
                  : "bg-white text-brand ring-1 ring-brand/10 hover:ring-brand/30 lg:hover:translate-x-1"
              }`}
            >
              <span
                className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  selected ? "bg-white/15" : c.color === "red" ? "bg-accent/10 text-accent" : "bg-brand/10 text-brand"
                }`}
              >
                <CategoryIcon id={c.id} className="size-5 transition-transform duration-300 group-hover:scale-110" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[15px] leading-tight font-semibold whitespace-nowrap lg:text-base lg:whitespace-normal">
                  {c.name}
                </span>
                <span className={`hidden text-xs lg:block ${selected ? "text-white/75" : "text-slate-500"}`}>
                  {studiesIn(c.id).length} estudios
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {categories.map((c, i) => {
        const list = studiesIn(c.id);
        const red = c.color === "red";
        return (
          <div
            key={c.id}
            role="tabpanel"
            id={`panel-${c.id}`}
            aria-labelledby={`tab-${c.id}`}
            hidden={i !== active}
            className="panel-in relative overflow-hidden rounded-3xl bg-white p-5 shadow-[0_20px_60px_-25px_rgb(15_47_92/0.25)] ring-1 ring-brand/5 sm:p-7"
          >
            <CategoryIcon
              id={c.id}
              className={`pointer-events-none absolute -top-6 -right-6 size-40 ${red ? "text-accent/5" : "text-brand/5"}`}
            />
            <div className="relative flex flex-wrap items-end justify-between gap-3 border-b border-mist pb-5">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${red ? "text-accent" : "text-brand-light"}`}>
                  {list.length} estudios
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-brand sm:text-3xl">{c.name}</h3>
              </div>
              <Link
                href={`/estudios/#${c.id}`}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold ${red ? "text-accent" : "text-brand"} hover:underline`}
              >
                Descripciones y CPT <ArrowRightIcon className="size-4" />
              </Link>
            </div>

            <ul className="relative mt-5 grid gap-3 md:grid-cols-2">
              {list.map((s, j) => (
                <li key={s.slug} className="fade-up" style={{ animationDelay: `${j * 60}ms` }}>
                  <Link
                    href={`/estudios/${s.slug}/`}
                    className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-mist bg-ice/50 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-white hover:shadow-xl hover:shadow-brand/10"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`size-2 shrink-0 rounded-full ${red ? "bg-accent" : "bg-brand"}`} />
                      <span className="font-semibold text-brand transition-colors group-hover:text-accent">{s.name}</span>
                    </span>
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white text-brand ring-1 ring-brand/10 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:ring-accent">
                      <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
