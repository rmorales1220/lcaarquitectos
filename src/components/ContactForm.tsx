"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "error" | "success";

function newChallenge() {
  const a = Math.floor(Math.random() * 8) + 2;
  const b = Math.floor(Math.random() * 8) + 2;
  return { a, b };
}

const inputClass =
  "w-full border-b border-white/15 bg-transparent py-3 text-neutral-100 placeholder:text-neutral-600 outline-none transition-colors focus:border-sand";
const labelClass =
  "text-[0.7rem] font-medium uppercase tracking-widest2 text-neutral-500";

export default function ContactForm() {
  const [challenge, setChallenge] = useState(newChallenge);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    captcha: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const expected = useMemo(
    () => challenge.a + challenge.b,
    [challenge]
  );

  function update(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setError("Por favor completa nombre, correo y mensaje.");
      return;
    }

    if (Number(form.captcha) !== expected) {
      setStatus("error");
      setError("La respuesta de la suma no es correcta. Inténtalo de nuevo.");
      setChallenge(newChallenge());
      setForm((f) => ({ ...f, captcha: "" }));
      return;
    }

    // Front-end demo: no backend wired yet. Swap for an API route / email service.
    setStatus("success");
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      captcha: "",
    });
    setChallenge(newChallenge());
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-sm border border-sand/20 bg-ink-900/40 p-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-sand/40 text-sand">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-serif text-3xl font-light text-white">
          Gracias por escribirnos
        </h3>
        <p className="mt-3 max-w-sm text-neutral-400">
          Hemos recibido tu mensaje. Un integrante de nuestro equipo te
          contactará a la brevedad.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm uppercase tracking-[0.16em] text-sand link-underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className={labelClass}>
            Nombre *
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={update}
            className={inputClass}
            placeholder="Tu nombre"
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className={labelClass}>
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={update}
            className={inputClass}
            placeholder="+52 …"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>
            Correo *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            className={inputClass}
            placeholder="tucorreo@ejemplo.com"
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="service" className={labelClass}>
            Servicio de interés
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={update}
            className={`${inputClass} appearance-none`}
          >
            <option value="" className="bg-ink-900">
              Selecciona una opción
            </option>
            <option value="residencial" className="bg-ink-900">
              Arquitectura Residencial
            </option>
            <option value="comercial" className="bg-ink-900">
              Arquitectura Comercial
            </option>
            <option value="interiorismo" className="bg-ink-900">
              Interiorismo
            </option>
            <option value="construccion" className="bg-ink-900">
              Construcción y Gerencia de Obra
            </option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelClass}>
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={update}
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Cuéntanos sobre tu proyecto…"
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <label htmlFor="captcha" className={labelClass}>
            Verificación · ¿Cuánto es {challenge.a} + {challenge.b}?
          </label>
          <input
            id="captcha"
            name="captcha"
            inputMode="numeric"
            value={form.captcha}
            onChange={update}
            className={`${inputClass} max-w-[160px]`}
            placeholder="Resultado"
          />
        </div>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-sand px-8 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-ink-950 transition-all hover:bg-sand-light"
        >
          Enviar mensaje
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}
