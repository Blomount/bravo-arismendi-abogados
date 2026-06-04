"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Barra "sólida" (fondo claro) cuando hay scroll o el menú móvil está abierto.
  // En ese caso el texto va oscuro; sobre el hero transparente va claro.
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-primary/10 bg-surface/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <a href="#inicio" className="group flex flex-col leading-none">
          <span
            className={cn(
              "font-serif text-lg font-semibold transition-colors sm:text-xl",
              solid ? "text-primary" : "text-surface"
            )}
          >
            Bravo <span className="text-accent">&amp;</span> Arismendi
          </span>
          <span
            className={cn(
              "text-[10px] font-medium uppercase tracking-[0.3em] transition-colors",
              solid ? "text-muted" : "text-surface/60"
            )}
          >
            Abogados
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                solid
                  ? "text-primary/80 hover:text-primary"
                  : "text-surface/80 hover:text-surface"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton href={whatsappUrl} external variant="primary">
            <WhatsAppIcon className="h-4 w-4" />
            Contactar
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "rounded-md p-2 transition-colors lg:hidden",
            solid ? "text-primary" : "text-surface"
          )}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Menú móvil */}
      {open && (
        <div className="border-t border-primary/10 bg-surface lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-primary/90 hover:bg-primary/5"
              >
                {item.label}
              </a>
            ))}
            <LinkButton
              href={whatsappUrl}
              external
              variant="primary"
              className="mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Contactar por WhatsApp
            </LinkButton>
          </Container>
        </div>
      )}
    </header>
  );
}
