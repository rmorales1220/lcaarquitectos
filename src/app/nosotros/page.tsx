import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";
import CTA from "@/components/CTA";
import { STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a LCA Arquitectos, despacho dirigido por el Arq. Leonardo Castillo Garza con más de 20 años de experiencia en arquitectura residencial en Monterrey.",
};

const VALUES = [
  {
    title: "Diseño atemporal",
    text: "Buscamos la permanencia sobre la tendencia. Cada decisión de diseño está pensada para envejecer con gracia y sentirse vigente por décadas.",
  },
  {
    title: "Detalle obsesivo",
    text: "La calidad vive en las juntas, los encuentros de materiales y la luz. Cuidamos cada detalle como si fuera el más importante del proyecto.",
  },
  {
    title: "Acompañamiento total",
    text: "Un solo interlocutor, del concepto a la entrega. Integramos diseño, interiorismo y obra para una experiencia sin fricciones.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Arquitectura de autor, hecha para perdurar."
        intro="Somos un despacho boutique con base en Monterrey. Trabajamos con un número limitado de proyectos al año para entregar arquitectura pensada al detalle."
      />

      {/* Fundador */}
      <section className="py-24 sm:py-32">
        <div className="container-wide grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5]">
              <Placeholder tone="b" label="Arq. Leonardo Castillo Garza" className="h-full w-full" />
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pl-8">
            <SectionHeading
              eyebrow="Dirección"
              title="Arq. Leonardo Castillo Garza"
              intro="Fundador y director de LCA Arquitectos. Con más de 20 años de trayectoria, ha desarrollado un lenguaje arquitectónico propio: sobrio, luminoso y profundamente conectado con el contexto del noreste de México."
            />
            <Reveal delay={120}>
              <p className="mt-6 leading-relaxed text-neutral-400">
                Su trabajo se distingue por el equilibrio entre la nobleza de los
                materiales, la precisión constructiva y una lectura sensible de la
                forma de habitar de cada cliente. Cada residencia es un ejercicio
                único de escucha y proporción.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <blockquote className="mt-10 border-l-2 border-sand pl-6">
                <p className="font-serif text-2xl font-light italic leading-snug text-white sm:text-3xl">
                  “La buena arquitectura no se impone al lugar; lo revela.”
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-white/5 bg-ink-900/30 py-20">
        <div className="container-wide grid grid-cols-1 gap-12 text-center sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <p className="font-serif text-6xl font-light text-sand sm:text-7xl">
                {stat.value}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.16em] text-neutral-400">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Filosofía"
            title="Los principios que guían cada proyecto."
            align="center"
          />
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-white/5 bg-white/5 md:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 100}
                className="bg-ink-950 p-10 sm:p-12"
              >
                <span className="font-serif text-2xl font-light text-sand/60">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-serif text-2xl font-light text-white">
                  {value.title}
                </h3>
                <p className="mt-4 leading-relaxed text-neutral-400">
                  {value.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
