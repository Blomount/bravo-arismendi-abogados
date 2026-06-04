import { differentiators } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyUs() {
  return (
    <section id="por-que-elegirnos" className="bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Por qué elegirnos"
          title="Compromiso, claridad y resultados"
          description="No solo te representamos: te acompañamos. Estos son los pilares de nuestra forma de trabajar."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.08}>
                <div className="flex h-full flex-col items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent-dark">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 text-lg text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
