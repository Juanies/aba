# Periódicos digitales

Proyecto Astro + TypeScript para publicar periódicos definidos en código. No necesita panel de administración ni base de datos externa.

## Ejecutar

```sh
npm install
npm run dev
```

## Estructura

- `src/data/newspapers.json`: catálogo de periódicos (`id`, `title`, `slug`, `description`, `cover`, `createdAt`).
- `src/data/newspapers.ts`: acceso a datos y relación periódico-publicaciones.
- `src/content/newspapers/<slug>/`: publicaciones Markdown.
- `src/content.config.ts`: validación del frontmatter.
- `src/pages/periodicos/[periodico].astro`: portada dinámica del periódico.
- `src/pages/periodicos/[periodico]/categoria/[categoria].astro`: sección dinámica filtrada por categoría.
- `src/pages/periodicos/[periodico]/[publicacion].astro`: publicación dinámica renderizada desde Markdown.
- `src/layouts/CantinaLayout.astro`: diseño alternativo para la categoría `cantina`.

Cada publicación incluye `newspaperId`, `category`, `title`, `slug`, `description`, `author`, `date`, `cover` y `contentPath` en su frontmatter. Para añadir una edición, incorpora un objeto al JSON y una carpeta con sus archivos Markdown. Astro generará las rutas de portada, categoría y publicación automáticamente durante el build. Si `category` es `cantina`, se utiliza el header y footer alternativos.

## Rutas de ejemplo

- `/`
- `/periodicos/diario-valladolid`
- `/periodicos/diario-valladolid/plaza-mayor-renovada`
- `/periodicos/la-gaceta-norte`
- `/periodicos/la-gaceta-norte/faro-restaurado`
- `/periodicos/la-gaceta-norte/categoria/cantina`
