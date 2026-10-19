import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "whatsapp" | "outline" | "ghost-light" | "white";

const styles: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-dark",
  whatsapp: "bg-accent text-white shadow-lg shadow-accent/30 hover:bg-accent-dark",
  outline: "border-2 border-brand/20 bg-white text-brand hover:border-brand",
  "ghost-light": "border-2 border-white/40 text-white hover:border-white hover:bg-white/10",
  white: "bg-white text-brand shadow-lg hover:bg-ice",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}) {
  const cls = `shine inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand ${styles[variant]} ${className}`;
  const external = /^(https?:|mailto:|tel:)/.test(href);
  if (external) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {icon}
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {icon}
      {children}
    </Link>
  );
}
