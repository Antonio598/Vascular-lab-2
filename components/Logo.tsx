// Logo oficial (public/logo-vascular-lab.png) e isotipo VL (public/isotipo-vascular-lab.png, exportado de diseno/Avatar.psd).
// La versión clara se obtiene con un filtro que los pasa a blanco.

const whiteFilter = "brightness-0 invert";

export function Logo({
  light = false,
  className = "h-11 sm:h-12",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-vascular-lab.png"
      width={2314}
      height={769}
      alt="Vascular Lab"
      className={`logo-in w-auto ${light ? whiteFilter : ""} ${className}`}
    />
  );
}

// Solo el isotipo "VL".
export function LogoIcon({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/isotipo-vascular-lab.png"
      width={593}
      height={542}
      alt=""
      aria-hidden
      className={`h-auto ${light ? whiteFilter : ""} ${className}`}
    />
  );
}
