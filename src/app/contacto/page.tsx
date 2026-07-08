import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a LCA Arquitectos en San Pedro Garza García, Monterrey. Teléfono +52 81 1164 9200, WhatsApp y correo contacto@lcaarquitectos.mx.",
};

const DETAILS = [
  {
    label: "Teléfono",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    external: false,
  },
  {
    label: "WhatsApp",
    value: CONTACT.whatsapp,
    href: CONTACT.whatsappHref,
    external: true,
  },
  {
    label: "Correo",
    value: CONTACT.email,
    href: CONTACT.emailHref,
    external: false,
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu proyecto."
        intro="Estamos en San Pedro Garza García. Escríbenos y con gusto agendamos una primera conversación para conocer tu visión."
      />

      <section className="py-16 sm:py-24">
        <div className="container-wide grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Info */}
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-serif text-3xl font-light text-white">
                Información de contacto
              </h2>
              <p className="mt-4 leading-relaxed text-neutral-400">
                Atendemos por cita para dedicar a cada cliente el tiempo que su
                proyecto merece.
              </p>
            </Reveal>

            <div className="mt-10 space-y-8">
              {DETAILS.map((item, i) => (
                <Reveal key={item.label} delay={i * 90}>
                  <p className="eyebrow mb-2">{item.label}</p>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-lg text-neutral-200 transition-colors hover:text-sand"
                  >
                    {item.value}
                  </a>
                </Reveal>
              ))}

              <Reveal delay={280}>
                <p className="eyebrow mb-2">Dirección</p>
                <p className="text-lg leading-relaxed text-neutral-200">
                  {CONTACT.address}
                </p>
                <p className="mt-1 text-sm text-neutral-500">
                  Monterrey, Nuevo León, México
                </p>
              </Reveal>

              <Reveal delay={360}>
                <p className="eyebrow mb-2">Horario</p>
                <p className="text-neutral-300">
                  Lunes a viernes · 9:00 – 18:00
                </p>
                <p className="text-neutral-500">Sábados · 10:00 – 14:00</p>
              </Reveal>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <Reveal className="border border-white/10 bg-ink-900/30 p-8 sm:p-12">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="border-t border-white/5">
        <div className="relative h-[360px] w-full">
          <div className="placeholder-surface flex h-full w-full items-center justify-center">
            <div className="text-center">
              <p className="eyebrow">Ubicación</p>
              <p className="mt-3 font-serif text-2xl font-light text-white/60">
                {CONTACT.address}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
