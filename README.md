# Bravo & Arismendi Abogados — Sitio web

Landing profesional (solo frontend) del estudio jurídico **Bravo & Arismendi**,
Las Condes, Santiago de Chile. Construido con Next.js 14 (App Router), React,
TypeScript y Tailwind CSS. Listo para desplegar en Vercel.

## Requisitos
- Node.js 18.18+ (recomendado 20+)
- npm

## Desarrollo local
```bash
npm install
npm run dev
```
Abre http://localhost:3000

Otros scripts:
```bash
npm run build   # build de producción
npm run start   # sirve el build
npm run lint    # ESLint
```

## Dónde editar el contenido
**Todo el contenido vive en un solo archivo:** [`lib/site-config.ts`](lib/site-config.ts).
Ahí editas textos, datos de contacto, socios, servicios, testimonios y FAQ sin
tocar los componentes.

### Pendientes marcados con `// TODO`
- **Slogan** oficial del estudio.
- **Bio y credenciales de Carol Bravo**.
- **Testimonios reales** (publicar solo los autorizados por el cliente).
- **Fotos de los socios** (hoy se muestran las iniciales como placeholder).
- **Dominio definitivo** en `siteConfig.url` (afecta canonical, sitemap y Open Graph).
- **Imagen Open Graph**: reemplazar `public/og-image.png` por una imagen 1200×630.

## Colores y tipografía
La paleta y las fuentes están centralizadas en
[`tailwind.config.ts`](tailwind.config.ts) (tokens `primary`, `accent`,
`surface`, `sand`, `muted`). Cambiar el tema es cuestión de ajustar esos tokens.

## Formulario de contacto
Hoy funciona en modo **solo frontend**: al enviar abre el cliente de correo del
visitante con el mensaje pre-rellenado hacia el correo del estudio
(ver [`lib/contact.ts`](lib/contact.ts)).
Para envíos automáticos sin abrir el correo, integra un backend (API Route con
Resend / SES / Nodemailer, o un servicio como Formspree) reemplazando el cuerpo
de `submitContact()`.

## SEO incluido
- Metadata API de Next (title/description/keywords, canonical, `metadataBase`).
- Open Graph + Twitter Cards.
- JSON-LD: `LegalService`, `WebSite` y `FAQPage` (ver [`lib/seo.ts`](lib/seo.ts)).
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, favicon SVG.
- HTML semántico, `lang="es-CL"`, un solo `<h1>`, fuentes autohospedadas.

## Deploy en Vercel
1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.
3. Framework: **Next.js** (autodetectado). Sin variables de entorno requeridas.
4. **Deploy**.
5. Configura tu dominio en **Settings → Domains** y actualiza `siteConfig.url`.

> Nota: el © del footer usa el año fijo (2026) por ser build estático; actualízalo
> anualmente en `components/layout/Footer.tsx`.
