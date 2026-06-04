import { siteConfig } from "@/lib/site-config";

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  area: string;
  message: string;
}

/**
 * Envío del formulario de contacto.
 *
 * Implementación actual (solo frontend): abre el cliente de correo del usuario
 * con un mensaje pre-rellenado hacia el correo del estudio (mailto).
 *
 * TODO: integrar un backend real (p. ej. una API Route con Resend / SES / Nodemailer
 * o un servicio como Formspree) reemplazando el cuerpo de esta función.
 */
export async function submitContact(data: ContactPayload): Promise<void> {
  const subject = `Consulta legal — ${data.area} — ${data.name}`;
  const body = [
    `Nombre: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Teléfono: ${data.phone}` : null,
    `Área de interés: ${data.area}`,
    "",
    "Mensaje:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");

  const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  if (typeof window !== "undefined") {
    window.location.href = mailto;
  }
}
