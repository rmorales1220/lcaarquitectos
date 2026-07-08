# Imágenes y renders

Esta carpeta (`/public`) almacena los archivos estáticos del sitio.

## Reemplazar los placeholders por fotos reales

El sitio usa **placeholders elegantes** (bloques con textura) generados por el
componente `src/components/Placeholder.tsx` en lugar de fotografías reales.

Para reemplazarlos:

1. Coloca tus imágenes en esta carpeta, por ejemplo:
   - `public/proyectos/casa-sierra.jpg`
   - `public/equipo/leonardo-castillo.jpg`
   - `public/hero.jpg`

2. Sustituye el componente `<Placeholder />` por `next/image`, por ejemplo:

   ```tsx
   import Image from "next/image";

   <Image
     src="/proyectos/casa-sierra.jpg"
     alt="Casa Sierra"
     fill
     className="object-cover"
   />
   ```

3. Recomendaciones:
   - Formato: `.jpg` o `.webp`
   - Proporción sugerida para tarjetas de proyecto: **4:5**
   - Proporción sugerida para el hero: **16:9** o mayor
   - Optimiza el peso de las imágenes antes de subirlas.

Los slugs y datos de cada proyecto viven en `src/lib/data.ts`.
