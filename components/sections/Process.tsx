import { processSteps } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="proceso" className="bg-primary-950 py-24 text-surface sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso claro, de principio a fin"
          description="Desde el primer contacto hasta la resolución de tu caso, sabes exactamente en qué etapa estás."
          className="[&_h2]:text-surface [&_p]:text-surface/70"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={(i % 4) * 0.08}>
              <div className="relative">
                <span className="font-serif text-5xl font-semibold text-accent/40">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg text-surface">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-surface/65">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
