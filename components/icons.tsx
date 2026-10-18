import type { SVGProps } from "react";
import type { CategoryId } from "@/lib/estudios";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function WhatsAppIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

export function MailIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}

export function PinIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function GlobeIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function DownloadIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </svg>
  );
}

export function CheckIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function MenuIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function StethoscopeIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <path d="M10 13v2a5 5 0 0 0 10 0v-2" />
      <circle cx="20" cy="11" r="2" />
    </svg>
  );
}

export function FileIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  );
}

/* Iconos de categoría, inspirados en los de la solicitud de estudios */

function VeinIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21V12M12 12c0-3-3-4-3-7M12 12c0-3 3-4 3-7M12 15c-2-1-5-1-7-3M12 15c2-1 5-1 7-3M9 5 7 3M15 5l2-2" />
    </svg>
  );
}

function ArteryIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18M12 8c-2 0-4-1-6-3M12 8c2 0 4-1 6-3M12 13c-3 0-5 1-7 3M12 13c3 0 5 1 7 3M6 5 4 6M18 5l2 1M5 16l-1 2M19 16l1 2" />
    </svg>
  );
}

function GaugeIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M4 17a8 8 0 1 1 16 0" />
      <path d="m12 17 4-5M7 13.5l-.8-.6M17.8 12.9l-.8.6M12 9V8" />
    </svg>
  );
}

function SearchIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="14" cy="10" r="6" />
      <path d="m9.5 14.5-6 6M11.5 7.5a3 3 0 0 1 3-1" />
    </svg>
  );
}

export function HeartPulseIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M20.5 8.5c0 5.5-8.5 11-8.5 11s-8.5-5.5-8.5-11A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8.5 2.5Z" />
      <path d="M3.5 12h4l1.5-3 2.5 6 2-4h7" />
    </svg>
  );
}

const categoryIcons: Record<CategoryId, (p: P) => React.ReactElement> = {
  venosos: VeinIcon,
  arteriales: ArteryIcon,
  hemodinamicos: GaugeIcon,
  otros: SearchIcon,
  cardiovasculares: HeartPulseIcon,
};

export function CategoryIcon({ id, ...props }: P & { id: CategoryId }) {
  const Icon = categoryIcons[id];
  return <Icon {...props} />;
}
