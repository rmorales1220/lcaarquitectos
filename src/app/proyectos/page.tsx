import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Portafolio de proyectos de arquitectura residencial, comercial e interiorismo desarrollados por LCA Arquitectos en Monterrey y su área metropolitana.",
};

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        title="Obra construida y en desarrollo."
        intro="Una selección de proyectos que reflejan nuestra búsqueda de proporción, luz y materialidad. Los renders serán reemplazados por fotografía de obra terminada."
      />

      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 text-center">
            <p className="mx-auto max-w-xl text-neutral-400">
              ¿Quieres conocer más sobre alguno de estos proyectos o comenzar el
              tuyo? Con gusto agendamos una conversación.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
