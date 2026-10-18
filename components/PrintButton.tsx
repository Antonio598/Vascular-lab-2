"use client";

import { DownloadIcon } from "./icons";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-dark"
    >
      <DownloadIcon className="size-5" /> Imprimir o guardar como PDF
    </button>
  );
}
