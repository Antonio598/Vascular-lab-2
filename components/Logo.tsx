import { useId } from "react";

// Isotipo: la "V" con la órbita roja del logo de Vascular Clinic.
export function LogoMark({ light = false, animated = true, className = "" }: { light?: boolean; animated?: boolean; className?: string }) {
  const id = useId().replace(/:/g, "");
  const blue = light ? "#ffffff" : "#1B4B8C";
  const red = light ? "#ff8a96" : "#D7263D";
  return (
    <svg viewBox="0 0 400 384" className={className} aria-hidden>
      <defs>
        <mask id={`orbit-${id}`} maskUnits="userSpaceOnUse" x="-50" y="-50" width="500" height="500">
          <ellipse cx="200" cy="175" rx="215" ry="76" fill="white" />
          <ellipse cx="200" cy="157" rx="190" ry="68" fill="black" />
        </mask>
      </defs>
      <path className={animated ? "logo-v" : undefined} d="M0 0H72L174 290L276 0H345L203 384H145Z" fill={blue} />
      <g className={animated ? "logo-orbit" : undefined}>
        <g transform="rotate(-24 200 175)">
          <rect x="-30" y="80" width="460" height="190" fill={red} mask={`url(#orbit-${id})`} />
        </g>
      </g>
    </svg>
  );
}

// Logo completo: isotipo + "Vascular Lab". El texto es HTML para que escale y se lea bien en cualquier tamaño.
export function Logo({
  light = false,
  animated = true,
  className = "",
  size = "md",
}: {
  light?: boolean;
  animated?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: { mark: "h-9", text: "text-[19px]" },
    md: { mark: "h-11 sm:h-12", text: "text-[22px] sm:text-[25px]" },
    lg: { mark: "h-16", text: "text-[34px]" },
  }[size];
  return (
    <span className={`logo group/logo inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark light={light} animated={animated} className={`${sizes.mark} w-auto shrink-0`} />
      <span className={`font-display leading-[0.92] font-semibold tracking-[-0.01em] ${sizes.text}`}>
        <span className={`block ${light ? "text-white" : "text-brand"}`}>Vascular</span>
        <span className={`block ${light ? "text-[#ff8a96]" : "text-accent"}`}>Lab</span>
      </span>
    </span>
  );
}
