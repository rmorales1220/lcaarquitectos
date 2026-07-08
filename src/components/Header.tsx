"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change and lock scroll while open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/5 bg-ink-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors ${
                  active
                    ? "text-sand"
                    : "text-neutral-400 hover:text-neutral-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contacto"
          className="hidden rounded-full border border-white/15 px-5 py-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-neutral-200 transition-all hover:border-sand hover:text-sand lg:inline-block"
        >
          Agenda una cita
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-20 z-40 origin-top bg-ink-950/98 backdrop-blur-md transition-all duration-500 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="container-wide flex flex-col gap-2 pt-10">
          {NAV.map((item, i) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
                className={`border-b border-white/5 py-5 font-serif text-3xl font-light transition-all duration-500 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                } ${active ? "text-sand" : "text-neutral-200"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            className="mt-8 inline-block w-fit rounded-full border border-sand/60 px-7 py-3 text-sm uppercase tracking-[0.16em] text-sand"
          >
            Agenda una cita
          </Link>
        </nav>
      </div>
    </header>
  );
}
