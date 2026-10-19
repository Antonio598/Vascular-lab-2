import { LogoMark } from "./Logo";
import { CategoryIcon, HeartPulseIcon } from "./icons";

// Onda Doppler arterial trifásica, repetida (decorativa).
const DOPPLER = Array.from({ length: 4 }, (_, i) => {
  const x = i * 60;
  return `L${x + 8} 48 L${x + 14} 8 L${x + 21} 48 L${x + 26} 58 L${x + 32} 42 L${x + 38} 48 L${x + 60} 48`;
}).join(" ");

// Composición animada de la portada: isotipo central, órbitas y tarjetas flotantes.
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden>
      {/* Pulsos */}
      <div className="pulse-ring absolute inset-[18%] rounded-full bg-brand/10" />
      <div className="pulse-ring absolute inset-[18%] rounded-full bg-accent/10 [animation-delay:1.6s]" />

      {/* Órbitas giratorias con puntos */}
      <svg className="spin-slow absolute inset-0 size-full" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="92" fill="none" stroke="#1B4B8C" strokeOpacity="0.15" strokeDasharray="2 6" />
        <circle cx="100" cy="8" r="3.2" fill="#D7263D" />
        <circle cx="8" cy="100" r="2.4" fill="#1B4B8C" />
      </svg>
      <svg className="spin-slow absolute inset-[9%] size-[82%] [animation-direction:reverse] [animation-duration:28s]" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="94" fill="none" stroke="#D7263D" strokeOpacity="0.18" strokeDasharray="1 5" />
        <circle cx="194" cy="100" r="3" fill="#1B4B8C" />
      </svg>

      {/* Isotipo */}
      <div className="absolute inset-[24%] flex items-center justify-center rounded-full bg-white shadow-[0_30px_80px_-20px_rgb(15_47_92/0.35)] ring-1 ring-brand/5">
        <LogoMark className="float w-[58%]" />
      </div>

      {/* Tarjeta: Doppler */}
      <div className="float absolute bottom-[4%] left-0 w-[58%] rounded-2xl bg-white/90 p-3 shadow-xl ring-1 ring-brand/10 backdrop-blur [animation-delay:-2s] sm:p-4">
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
          <span>Flujo arterial</span>
          <span className="flex items-center gap-1 text-accent">
            <span className="size-1.5 rounded-full bg-accent" /> Doppler
          </span>
        </div>
        <svg viewBox="0 0 240 64" className="mt-2 w-full">
          <path d="M0 48H240" stroke="#1B4B8C" strokeOpacity="0.12" />
          <path d={`M0 48 ${DOPPLER}`} fill="none" stroke="#1B4B8C" strokeOpacity="0.12" strokeWidth="2" />
          <path className="trace" pathLength={100} d={`M0 48 ${DOPPLER}`} fill="none" stroke="#D7263D" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Tarjeta: venoso */}
      <div className="float absolute top-[6%] left-[2%] flex items-center gap-2.5 rounded-2xl bg-white/90 py-2.5 pr-4 pl-2.5 shadow-xl ring-1 ring-brand/10 backdrop-blur [animation-delay:-4s]">
        <span className="flex size-9 items-center justify-center rounded-xl bg-brand text-white">
          <CategoryIcon id="venosos" className="size-5" />
        </span>
        <span className="text-sm leading-tight font-semibold text-brand">
          Estudios
          <br />
          venosos
        </span>
      </div>

      {/* Tarjeta: cardio */}
      <div className="float absolute top-[22%] right-0 flex items-center gap-2.5 rounded-2xl bg-white/90 py-2.5 pr-4 pl-2.5 shadow-xl ring-1 ring-brand/10 backdrop-blur [animation-delay:-1s]">
        <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-white">
          <HeartPulseIcon className="heartbeat size-5" />
        </span>
        <span className="text-sm leading-tight font-semibold text-brand">
          ECG · Holter
          <br />
          <span className="font-medium text-slate-500">Ecocardiograma</span>
        </span>
      </div>

      {/* Tarjeta: hemodinámicos */}
      <div className="float absolute right-[3%] bottom-[18%] flex items-center gap-2.5 rounded-2xl bg-brand py-2.5 pr-4 pl-2.5 text-white shadow-xl [animation-delay:-3s]">
        <span className="flex size-9 items-center justify-center rounded-xl bg-white/15">
          <CategoryIcon id="hemodinamicos" className="size-5" />
        </span>
        <span className="text-sm leading-tight font-semibold">
          ITB · IDB
          <br />
          <span className="font-medium text-white/75">PVR</span>
        </span>
      </div>
    </div>
  );
}

// Trazo de ECG que recorre todo el ancho.
export function EcgLine({ className = "" }: { className?: string }) {
  const beat = (x: number) => `L${x} 60 L${x + 14} 60 L${x + 20} 52 L${x + 26} 60 L${x + 34} 60 L${x + 40} 18 L${x + 47} 96 L${x + 54} 60 L${x + 70} 60 L${x + 80} 48 L${x + 92} 60`;
  const d = `M0 60 ${[60, 360, 660, 960].map(beat).join(" ")} L1200 60`;
  return (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={className} aria-hidden>
      <path d={d} fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      <path className="trace [animation-duration:6s]" pathLength={100} d={d} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
