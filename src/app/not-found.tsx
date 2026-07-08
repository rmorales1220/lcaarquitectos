import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sand/[0.06] blur-[130px]" />
      <div className="relative text-center">
        <p className="font-serif text-[9rem] font-light leading-none text-white/90 sm:text-[13rem]">
          404
        </p>
        <p className="eyebrow mt-2">Página no encontrada</p>
        <h1 className="mt-6 font-serif text-3xl font-light text-white sm:text-4xl">
          Este espacio aún no ha sido diseñado.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-neutral-400">
          La página que buscas no existe o fue movida. Regresa al inicio para
          seguir explorando nuestro trabajo.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full bg-sand px-8 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-ink-950 transition-all hover:bg-sand-light"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-neutral-200 transition-all hover:border-sand hover:text-sand"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
}
