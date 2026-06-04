import { siteConfig, partners, faqs } from "@/lib/site-config";

/** JSON-LD: LegalService + socios. Inyectar en el <head> del layout. */
export function legalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: `+${siteConfig.contact.phoneE164}`,
    priceRange: "$$",
    knowsLanguage: ["es"],
    areaServed: [
      { "@type": "City", name: "Las Condes" },
      { "@type": "City", name: "Santiago" },
      { "@type": "Country", name: "Chile" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: "CL",
    },
    founder: partners.map((p) => ({
      "@type": "Person",
      name: p.name,
      jobTitle: "Abogado",
    })),
    employee: partners.map((p) => ({
      "@type": "Person",
      name: p.name,
      jobTitle: "Abogado",
    })),
  };
}

/** JSON-LD: FAQPage a partir de las preguntas frecuentes. */
export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** JSON-LD: WebSite (habilita búsquedas y sitelinks). */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.locale,
  };
}
