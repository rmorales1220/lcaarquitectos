import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/40 to-ink-950" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sand/[0.05] blur-[130px]" />
      <div className="container-wide relative text-center">
        <Reveal>
          <p className="eyebrow">Comencemos</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-light leading-[1.05] text-white sm:text-6xl">
            Diseñemos juntos el espacio que has imaginado.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
            Cada gran proyecto inicia con una conversación. Cuéntanos tu visión
            y te acompañaremos en cada paso.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 rounded-full bg-sand px-8 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-ink-950 transition-all hover:bg-sand-light"
            >
              Agenda una cita
            </Link>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-neutral-200 transition-all hover:border-sand hover:text-sand"
            >
              Ver proyectos
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
