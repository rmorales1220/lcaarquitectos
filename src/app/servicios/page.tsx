import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import CTA from "@/components/CTA";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Arquitectura Residencial, Arquitectura Comercial, Interiorismo, y Construcción y Gerencia de Obra. Servicios integrales de LCA Arquitectos en Monterrey.",
};

const TONES = ["a", "d", "e", "c"];

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Diseño y construcción bajo una sola visión."
        intro="Integramos todas las disciplinas necesarias para llevar tu proyecto del concepto a la realidad, con un solo responsable de principio a fin."
      />

      <section className="py-16 sm:py-24">
        <div className="container-wide space-y-24 sm:space-y-32">
          {SERVICES.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20"
              >
                <Reveal className={reversed ? "lg:order-2" : ""}>
                  <div className="relative aspect-[16/11] w-full">
                    <Placeholder
                      tone={TONES[i]}
                      label={service.title}
                      className="h-full w-full"
                    />
                  </div>
                </Reveal>

                <div className={reversed ? "lg:order-1" : ""}>
                  <p className="eyebrow">
                    Servicio 0{i + 1}
                  </p>
                  <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-white sm:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                    {service.description}
                  </p>
                  <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-neutral-300"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sand" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Proceso */}
      <section className="border-t border-white/5 bg-ink-900/30 py-24 sm:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">Cómo trabajamos</p>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl font-light text-white sm:text-5xl">
              Un proceso claro, de la idea a las llaves.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Escucha", d: "Entendemos tu visión, terreno y forma de vivir." },
              { n: "02", t: "Diseño", d: "Concepto, anteproyecto y desarrollo ejecutivo." },
              { n: "03", t: "Detalle", d: "Interiorismo, materiales e iluminación a medida." },
              { n: "04", t: "Obra", d: "Construcción y supervisión hasta la entrega." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 90} className="border-t border-white/10 pt-6">
                <p className="font-serif text-3xl font-light text-sand">{step.n}</p>
                <h3 className="mt-4 text-lg font-medium text-white">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {step.d}
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
