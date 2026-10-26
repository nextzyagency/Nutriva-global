# Nutriva Global — E-commerce de Alimentos Saludables

Nutriva Global es una plataforma e-commerce premium construida con **Astro**, **Tailwind CSS** y **GSAP**, diseñada para la distribución internacional de alimentos saludables, orgánicos y sostenibles.

## 🚀 Tecnologías

- **Framework:** Astro 6.0+
- **Estilos:** Tailwind CSS (Vite Plugin)
- **Diseño:** sistema documentado en `DESIGN.md` (tokens en `src/styles/global.css`)
- **Despliegue:** Optimizado para Cloudflare Pages
- **SEO:** Metadatos dinámicos, JSON-LD estructurado, Robots.txt y Sitemap.

## 📦 Estructura del Proyecto

```text
Nutriva-global/
├── public/              # Assets estáticos y configuraciones de Cloudflare
│   ├── _headers         # Cabeceras de seguridad y caché para Cloudflare
│   └── robots.txt       # Optimización para buscadores
├── src/
│   ├── assets/          # Imágenes optimizadas vía astro:assets
│   ├── components/      # Componentes UI y Secciones
│   ├── data/            # Fuente de verdad de productos (JSON)
│   ├── layouts/         # Plantilla base con SEO
│   ├── pages/           # Rutas del sitio (Home, Categorías, Nosotros, Contacto)
│   └── styles/          # Estilos globales y tokens de diseño
└── astro.config.mjs     # Configuración de Astro y Vite
```

## 🛠️ Características Principales

1. **Propuesta mayorista en cada página:** formulario en el hero, CTA y página de contacto con prellenado por línea y producto.
2. **Arquitectura de Datos:** Los productos se gestionan desde `src/data/products.json`, facilitando actualizaciones de catálogo sin tocar código.
3. **Optimización de Imágenes:** Uso de `astro:assets` para conversión automática a WebP y Lazy Loading.
4. **SEO de Alto Rendimiento:** Jerarquía de encabezados (H1-H3) estricta, etiquetas `alt` en todas las imágenes y Schema.org integrado para visibilidad en Google.

## 🚀 Despliegue en Cloudflare Pages

El proyecto incluye un archivo `public/_headers` configurado para:
- Cabeceras de seguridad (X-Frame-Options, HSTS, etc.).
- Caché agresiva para assets inmutables (1 año).
- Rendimiento optimizado en el Edge.

---
Desarrollado por **Antigravity** — Ingeniero Frontend Senior.
