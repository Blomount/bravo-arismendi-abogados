import { services } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="servicios" className="bg-sand/40 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Nuestros servicios"
          title="Áreas de práctica"
          description="Asesoría estratégica y litigación en las materias que más importan a personas y empresas."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 4) * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-accent-soft">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 text-lg text-primary">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
