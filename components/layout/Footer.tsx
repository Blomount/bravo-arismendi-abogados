import { Mail, MapPin, Phone } from "lucide-react";
import {
  siteConfig,
  whatsappUrl,
  mailtoUrl,
  services,
} from "@/lib/site-config";
import { Container } from "@/components/ui/Container";

const year = 2026; // actualizar anualmente (build estático)

export function Footer() {
  return (
    <footer className="bg-primary-950 text-surface/80">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <p className="font-serif text-xl font-semibold text-surface">
              Bravo <span className="text-accent">&amp;</span> Arismendi
              <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-surface/50">
                Abogados
              </span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-surface/60">
              {siteConfig.slogan}
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-surface">
              Áreas de práctica
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.title}>
                  <a
                    href="#servicios"
                    className="text-surface/60 transition-colors hover:text-accent"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-surface">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-surface/60 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={mailtoUrl}
                  className="flex items-center gap-2 break-all text-surface/60 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-surface/60">
                <MapPin className="h-4 w-4 shrink-0" />
                {siteConfig.contact.addressLine}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-surface/10 pt-6 text-xs text-surface/50 sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            {/* TODO: enlazar a páginas reales cuando existan */}
            <a href="#" className="transition-colors hover:text-accent">
              Política de Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Términos
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
