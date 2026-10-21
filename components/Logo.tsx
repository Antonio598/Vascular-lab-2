// Logo oficial (public/logo-vascular-lab.png). La versión clara se obtiene con un filtro que lo pasa a blanco.

const SRC = "/logo-vascular-lab.png";
const WIDTH = 2314;
const HEIGHT = 769;
// El isotipo "VL" ocupa el primer 36 % del ancho del archivo.
const ICON_RATIO = 839 / HEIGHT;

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
      src={SRC}
      width={WIDTH}
      height={HEIGHT}
      alt="Vascular Lab"
      className={`logo-in w-auto ${light ? whiteFilter : ""} ${className}`}
    />
  );
}

// Solo el isotipo "VL", recortado del mismo archivo.
export function LogoIcon({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`inline-block overflow-hidden ${className}`} style={{ aspectRatio: ICON_RATIO }} aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={SRC} width={WIDTH} height={HEIGHT} alt="" className={`h-full w-auto max-w-none ${light ? whiteFilter : ""}`} />
    </span>
  );
}
