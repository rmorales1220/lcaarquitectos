import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";
import { PROJECTS, SERVICES, STATS } from "@/lib/data";

export default function HomePage() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <Placeholder
          tone="c"
          className="absolute inset-0 h-full w-full animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 to-transparent" />

        <div className="container-wide relative z-10 pb-24 pt-32">
          <div className="max-w-4xl">
            <p className="eyebrow mb-8 animate-fade-in opacity-0 [animation-delay:200ms]">
              Arquitectura Residencial · Monterrey
            </p>
            <h1 className="animate-fade-up font-serif text-5xl font-light leading-[1.0] text-white opacity-0 [animation-delay:350ms] sm:text-7xl lg:text-[5.5rem]">
              Espacios que perduran,
              <br />
              <span className="text-sand">diseñados para vivirse.</span>
            </h1>
            <p className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-neutral-300 opacity-0 [animation-delay:550ms]">
              Despacho de arquitectura dirigido por el Arq. Leonardo Castillo
              Garza. Más de 20 años creando residencias atemporales donde la luz,
              la materia y el detalle se encuentran.
            </p>
            <div className="mt-10 flex animate-fade-up flex-col gap-4 opacity-0 [animation-delay:700ms] sm:flex-row">
              <Link
                href="/proyectos"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-sand px-8 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-ink-950 transition-all hover:bg-sand-light"
              >
                Ver proyectos
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-white transition-all hover:border-sand hover:text-sand"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
          <span className="text-[0.6rem] uppercase tracking-widest2 text-neutral-500">
            Desliza
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-sand to-transparent" />
        </div>
      </section>

      {/* NOSOTROS / FILOSOFÍA */}
      <section className="py-28 sm:py-40">
        <div className="container-wide grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <Reveal>
            <div className="relative aspect-[4/5] w-full">
              <Placeholder tone="a" className="h-full w-full" />
              <div className="absolute -bottom-8 -right-4 hidden w-56 border border-white/10 bg-ink-900/90 p-6 backdrop-blur-sm sm:block">
                <p className="font-serif text-5xl font-light text-sand">+20</p>
                <p className="mt-2 text-sm text-neutral-400">
                  años de experiencia en arquitectura de autor
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Nosotros"
              title="Una filosofía de diseño honesta y atemporal."
              intro="En LCA Arquitectos creemos que la buena arquitectura no se persigue, se descubre. Escuchamos el terreno, la luz y a quienes habitarán cada espacio para crear proyectos que trascienden modas."
            />
            <Reveal delay={120}>
              <p className="mt-6 leading-relaxed text-neutral-400">
                Bajo la dirección del Arq. Leonardo Castillo Garza, cada proyecto
                se aborda con rigor técnico y sensibilidad estética. Trabajamos
                con un número limitado de clientes al año para garantizar
                atención al detalle de principio a fin.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-4xl font-light text-white sm:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs leading-snug text-neutral-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <Link
                href="/nosotros"
                className="mt-10 inline-block text-sm uppercase tracking-[0.16em] text-sand link-underline"
              >
                Conoce al despacho
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="border-t border-white/5 bg-ink-900/30 py-28 sm:py-36">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Servicios"
            title="Todo lo que un gran proyecto necesita."
            intro="Del primer boceto a la entrega de llaves, integramos diseño, interiorismo y construcción bajo una sola visión."
          />

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-white/5 bg-white/5 md:grid-cols-2">
            {SERVICES.map((service, i) => (
              <Reveal
                key={service.slug}
                delay={i * 80}
                className="group relative bg-ink-950 p-10 transition-colors duration-500 hover:bg-ink-900 sm:p-12"
              >
                <span className="font-serif text-2xl font-light text-sand/60">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-serif text-3xl font-light text-white">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-neutral-400">
                  {service.short}
                </p>
                <Link
                  href="/servicios"
                  className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-neutral-500 transition-colors group-hover:text-sand"
                >
                  Saber más
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section className="py-28 sm:py-36">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Proyectos"
              title="Selección de obra reciente."
            />
            <Reveal>
              <Link
                href="/proyectos"
                className="inline-block text-sm uppercase tracking-[0.16em] text-sand link-underline"
              >
                Ver todos los proyectos
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                <ProjectCard project={project} priority />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
