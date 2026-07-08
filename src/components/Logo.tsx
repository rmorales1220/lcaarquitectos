import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="LCA Arquitectos — Inicio"
      className={`group flex items-baseline gap-2 ${className}`}
    >
      <span className="font-serif text-2xl font-medium leading-none tracking-tight text-white transition-colors group-hover:text-sand">
        LCA
      </span>
      <span className="hidden text-[0.62rem] font-medium uppercase tracking-widest2 text-neutral-400 transition-colors group-hover:text-neutral-200 sm:inline">
        Arquitectos
      </span>
    </Link>
  );
}
