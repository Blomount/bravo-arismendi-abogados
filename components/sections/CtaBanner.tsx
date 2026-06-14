import Image from "next/image";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Imagen de fondo + overlay oscuro para legibilidad */}
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/biblioteca.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/85" />
      </div>

      <Container className="relative flex flex-col items-center gap-6 py-24 text-center sm:py-28">
        <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight text-surface sm:text-4xl">
          {siteConfig.slogan}
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-surface/70">
          Conversemos tu caso. Te orientamos con claridad y diseñamos una
          estrategia jurídica a tu medida.
        </p>
        <LinkButton
          href={whatsappUrl}
          external
          variant="primary"
          className="bg-accent text-primary-950 hover:bg-accent-soft"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Habla con un abogado
        </LinkButton>
      </Container>
    </section>
  );
}
