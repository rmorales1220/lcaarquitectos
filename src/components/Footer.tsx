import Link from "next/link";
import { CONTACT, NAV } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="container-wide grid grid-cols-1 gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl font-medium text-white">
              LCA
            </span>
            <span className="text-[0.62rem] font-medium uppercase tracking-widest2 text-neutral-400">
              Arquitectos
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-500">
            Arquitectura residencial en Monterrey. Más de 20 años diseñando
            espacios atemporales, dirigidos por el Arq. Leonardo Castillo Garza.
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="eyebrow">Navegación</h3>
          <ul className="mt-6 space-y-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-neutral-400 transition-colors hover:text-sand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="eyebrow">Contacto</h3>
          <ul className="mt-6 space-y-3 text-sm text-neutral-400">
            <li>
              <a
                href={CONTACT.phoneHref}
                className="transition-colors hover:text-sand"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-sand"
              >
                WhatsApp {CONTACT.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.emailHref}
                className="transition-colors hover:text-sand"
              >
                {CONTACT.email}
              </a>
            </li>
            <li className="max-w-xs pt-1 leading-relaxed text-neutral-500">
              {CONTACT.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-6 text-xs text-neutral-600 sm:flex-row">
          <p>© {year} LCA Arquitectos. Todos los derechos reservados.</p>
          <p className="tracking-wide">
            Monterrey · San Pedro Garza García, N.L.
          </p>
        </div>
      </div>
    </footer>
  );
}
