import { partners } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PartnerPhoto } from "@/components/ui/PartnerPhoto";

export function About() {
  return (
    <section id="quienes-somos" className="bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Quiénes somos"
          title="Un estudio cercano, con vocación de excelencia"
          description="Bravo & Arismendi es un estudio jurídico que combina experiencia, capacidad analítica y un trato directo con cada cliente. Trabajamos para entregarte soluciones claras y una representación comprometida."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center gap-5">
                  <PartnerPhoto
                    name={p.name}
                    role={p.role}
                    initials={p.initials}
                    photo={p.photo}
                    photoLarge={p.photoLarge}
                  />
                  <div>
                    <h3 className="text-xl text-primary">{p.name}</h3>
                    <p className="text-sm font-medium text-accent-dark">
                      {p.role}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-muted">
                  {p.bio}
                </p>

                <ul className="mt-6 space-y-2 border-t border-primary/10 pt-6">
                  {p.credentials.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-primary/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
