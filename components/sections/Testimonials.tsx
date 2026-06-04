import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section id="referencias" className="bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Referencias de clientes"
          title="La confianza de quienes ya trabajaron con nosotros"
          description="Testimonios de clientes que autorizaron compartir su experiencia."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-7 shadow-sm">
                <Quote
                  className="h-8 w-8 text-accent/50"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-primary/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-primary/10 pt-4">
                  <p className="text-sm font-semibold text-primary">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted">{t.matter}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          {/* Recordatorio interno: publicar solo testimonios autorizados por el cliente. */}
          Testimonios publicados con autorización de cada cliente.
        </p>
      </Container>
    </section>
  );
}
