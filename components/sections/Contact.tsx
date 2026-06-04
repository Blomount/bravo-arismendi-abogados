"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Loader2, CheckCircle2, Lock } from "lucide-react";
import {
  siteConfig,
  whatsappUrl,
  mailtoUrl,
  services,
} from "@/lib/site-config";
import { submitContact } from "@/lib/contact";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const schema = z.object({
  name: z.string().min(2, "Ingresa tu nombre"),
  email: z.string().email("Ingresa un correo válido"),
  phone: z.string().optional(),
  area: z.string().min(1, "Selecciona un área"),
  message: z.string().min(10, "Cuéntanos brevemente tu caso"),
});

type FormValues = z.infer<typeof schema>;

const fieldClasses =
  "w-full rounded-lg border border-primary/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

export function Contact() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { area: "" },
  });

  const onSubmit = async (data: FormValues) => {
    await submitContact(data);
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contacto"
          title="Conversemos sobre tu caso"
          description="Cuéntanos tu situación y te responderemos a la brevedad. La primera orientación es sin compromiso."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-5">
          {/* Datos de contacto */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-primary-950 p-8 text-surface">
              <h3 className="text-xl text-surface">Habla directamente con nosotros</h3>
              <p className="mt-2 text-sm text-surface/70">
                La vía más rápida es WhatsApp. También puedes llamarnos o
                escribirnos por correo.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-surface/85 transition-colors hover:text-accent-soft"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/10">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-surface/50">WhatsApp</span>
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </a>

                <a
                  href={`tel:+${siteConfig.contact.phoneE164}`}
                  className="flex items-center gap-3 text-sm text-surface/85 transition-colors hover:text-accent-soft"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/10">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-surface/50">Teléfono</span>
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </a>

                <a
                  href={mailtoUrl}
                  className="flex items-center gap-3 text-sm text-surface/85 transition-colors hover:text-accent-soft"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/10">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-surface/50">Correo</span>
                    <span className="break-all">{siteConfig.contact.email}</span>
                  </span>
                </a>

                <div className="flex items-center gap-3 text-sm text-surface/85">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/10">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-surface/50">Oficina</span>
                    {siteConfig.contact.addressLine}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/10 bg-white p-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-accent" />
                <h3 className="mt-4 text-xl text-primary">¡Gracias por escribirnos!</h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Se abrió tu correo con el mensaje listo para enviar. Si
                  prefieres una respuesta más rápida, escríbenos por WhatsApp.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Escribir por WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="rounded-2xl border border-primary/10 bg-white p-7 shadow-sm"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">
                      Nombre
                    </label>
                    <input id="name" type="text" className={fieldClasses}
                      placeholder="Tu nombre completo" {...register("name")} />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary">
                      Correo
                    </label>
                    <input id="email" type="email" className={fieldClasses}
                      placeholder="tucorreo@ejemplo.cl" {...register("email")} />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-primary">
                      Teléfono <span className="text-muted">(opcional)</span>
                    </label>
                    <input id="phone" type="tel" className={fieldClasses}
                      placeholder="+56 9 ..." {...register("phone")} />
                  </div>

                  <div>
                    <label htmlFor="area" className="mb-1.5 block text-sm font-medium text-primary">
                      Área de interés
                    </label>
                    <select id="area" className={fieldClasses} {...register("area")}>
                      <option value="">Selecciona…</option>
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Otra">Otra consulta</option>
                    </select>
                    {errors.area && (
                      <p className="mt-1 text-xs text-red-600">{errors.area.message}</p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">
                    Mensaje
                  </label>
                  <textarea id="message" rows={5} className={fieldClasses}
                    placeholder="Cuéntanos brevemente tu caso…" {...register("message")} />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="mt-6 w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando…
                    </>
                  ) : (
                    "Enviar consulta"
                  )}
                </Button>

                <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted">
                  <Lock className="h-3.5 w-3.5" />
                  Tu información se trata con estricta confidencialidad.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
