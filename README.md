# Vascular-lab-2

Sitio web de **Vascular Lab**: laboratorio vascular no invasivo y estudios cardiovasculares (Brisas del Golf, Panamá).

Hecho con Next.js, TypeScript y Tailwind CSS. Se exporta como sitio estático.

## Uso

```bash
npm install
npm run dev     # desarrollo en http://localhost:3000
npm run build   # genera el sitio estático en out/
```

Para publicar, sube el contenido de `out/` a cualquier hosting estático (Netlify, Vercel, Hostinger, etc.).

## Dónde editar

- `lib/estudios.ts`: catálogo de estudios (nombre, descripción, CPT). Alimenta la portada, `/estudios`, las fichas y la solicitud.
- `lib/site.ts`: contacto, WhatsApp, dirección, horario, mapa y PDF de la solicitud. Los datos marcados como `PENDIENTE` deben confirmarse antes de publicar.
- `components/Logo.tsx`: logo provisional; reemplazar por el definitivo.

## Páginas

- `/`: portada con estudios, información para pacientes, médicos referidores y contacto.
- `/estudios/`: catálogo completo por categoría.
- `/estudios/<slug>/`: ficha de cada estudio (enlaces para los códigos QR).
- `/solicitud/`: solicitud de estudios imprimible.
- `/privacidad/`: aviso de privacidad.
