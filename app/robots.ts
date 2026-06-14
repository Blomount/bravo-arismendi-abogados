import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // No hay rutas privadas; todo el sitio es indexable.
      disallow: [],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
