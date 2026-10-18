import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "whatsapp" | "outline" | "ghost-light";

const styles: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  whatsapp: "bg-accent text-white hover:bg-accent-dark",
  outline: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
  "ghost-light": "border-2 border-white/70 text-white hover:bg-white hover:text-brand",
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
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand ${styles[variant]} ${className}`;
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
