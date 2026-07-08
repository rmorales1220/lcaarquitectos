# LCA Arquitectos

Sitio web del despacho **LCA Arquitectos** — arquitectura residencial en
Monterrey, dirigido por el Arq. Leonardo Castillo Garza (+20 años de
experiencia).

Diseño oscuro, minimalista y editorial: fondo casi negro, títulos con serif
ligera (Cormorant Garamond), cuerpo con Inter, acento color arena/taupe y
animaciones sutiles de aparición.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Fuentes vía `next/font` (Cormorant Garamond + Inter)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

## Producción

```bash
npm run build
npm run start
```

## Estructura

```
src/
├─ app/
│  ├─ layout.tsx          # layout raíz, fuentes, header/footer/whatsapp
│  ├─ page.tsx            # Inicio
│  ├─ nosotros/           # Nosotros / filosofía
│  ├─ servicios/          # Servicios
│  ├─ proyectos/          # Grid de proyectos
│  ├─ contacto/           # Formulario con captcha de suma
│  ├─ not-found.tsx       # Página 404
│  ├─ robots.ts / sitemap.ts
│  └─ globals.css
├─ components/            # Header, Footer, WhatsApp, cards, form, etc.
└─ lib/data.ts            # Datos: contacto, servicios, proyectos, nav
```

## Páginas

- **Inicio** — hero a pantalla completa, filosofía con stats (+20 años, +120
  proyectos), servicios, proyectos destacados y CTA.
- **Nosotros** — despacho, fundador y valores.
- **Servicios** — Arquitectura Residencial, Arquitectura Comercial,
  Interiorismo, y Construcción y Gerencia de Obra.
- **Proyectos** — grid de proyectos.
- **Contacto** — formulario con captcha de suma, datos y ubicación.

## Renders / imágenes

Los renders usan **placeholders elegantes** con textura mientras se integran
las fotografías reales. Consulta [`public/README.md`](./public/README.md) para
saber cómo reemplazarlos.

## Contacto del despacho

- Tel: +52 81 1164 9200
- WhatsApp: +52 81 2923 5319
- Correo: contacto@lcaarquitectos.mx
- Dirección: Torre Legacy, San Pedro Garza García, N.L.
