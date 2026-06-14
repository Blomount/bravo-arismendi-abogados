import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-primary-950 text-surface"
    >
      {/* Fondo: gradiente sutil + textura de líneas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[40rem] w-[40rem] rounded-full bg-accent/10 blur-3xl"
      />

      <Container className="relative grid min-h-[88vh] grid-cols-1 items-center gap-12 py-28 lg:grid-cols-2 lg:gap-8">
        <div className="max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface/15 bg-surface/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
            Abogados · Santiago, Chile
          </span>

          <h1 className="text-balance text-4xl font-semibold leading-[1.1] text-surface sm:text-5xl lg:text-6xl">
            Defendemos tus derechos con{" "}
            <span className="text-accent-soft">estrategia y rigor</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-surface/70">
            {siteConfig.slogan}. En {siteConfig.shortName} acompañamos a personas
            y empresas en la resolución eficiente de sus conflictos jurídicos,
            con atención cercana y confidencialidad.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <LinkButton href={whatsappUrl} external variant="primary"
              className="bg-accent text-primary-950 hover:bg-accent-soft">
              <WhatsAppIcon className="h-5 w-5" />
              Habla con un abogado
            </LinkButton>
            <LinkButton
              href="#servicios"
              variant="secondary"
              className="border-surface/25 text-surface hover:border-surface/50 hover:bg-surface/5"
            >
              Conoce nuestros servicios
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>

          {/* Sellos de confianza */}
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-surface/10 pt-8">
            <div>
              <dt className="text-2xl font-semibold text-surface">8+</dt>
              <dd className="mt-1 text-xs text-surface/60">Áreas de práctica</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-surface">100%</dt>
              <dd className="mt-1 text-xs text-surface/60">
                Atención personalizada
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-surface">Santiago</dt>
              <dd className="mt-1 text-xs text-surface/60">y todo Chile</dd>
            </div>
          </dl>
        </div>

        {/* Retrato ambiental (solo desktop) */}
        <div className="relative hidden justify-self-center lg:block lg:justify-self-end">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl"
          />
          <Image
            src="/arismendi-oficina.jpg"
            alt="Raúl Arismendi, abogado socio de Bravo & Arismendi"
            width={900}
            height={1350}
            priority
            sizes="(min-width: 1024px) 24rem, 0px"
            className="relative w-[20rem] rounded-2xl object-cover shadow-2xl ring-1 ring-surface/10 xl:w-[24rem]"
          />
        </div>
      </Container>
    </section>
  );
}
