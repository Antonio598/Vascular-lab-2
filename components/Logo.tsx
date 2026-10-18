// Logo provisional en SVG, basado en la papelería. Reemplazar por el archivo definitivo cuando esté disponible.

export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  const blue = light ? "#ffffff" : "#1B4B8C";
  const red = light ? "#ff8a96" : "#D7263D";
  return (
    <svg viewBox="0 0 250 80" className={className} role="img" aria-label="Vascular Lab">
      {/* V */}
      <path d="M4 8h17l14 44L49 8h17L44 72H26Z" fill={blue} />
      {/* L */}
      <path d="M52 30h15v29h22v13H52Z" fill={blue} />
      {/* órbita roja */}
      <path
        d="M8 54c-6-6 6-20 30-31s45-14 49-7c2 4-3 10-12 16 5-6 7-10 5-12-5-5-24 0-42 10S10 47 13 55Z"
        fill={red}
      />
      <text x="104" y="40" fontFamily="var(--font-fira), sans-serif" fontWeight="600" fontSize="31" fill={blue}>
        Vascular
      </text>
      <text x="104" y="70" fontFamily="var(--font-fira), sans-serif" fontWeight="600" fontSize="31" fill={red}>
        Lab
      </text>
    </svg>
  );
}
