/**
 * SINGLE SOURCE OF TRUTH del sitio.
 * Edita aquí todos los textos, datos de contacto, socios, servicios,
 * testimonios y preguntas frecuentes. Los componentes solo consumen este archivo.
 *
 * Los campos marcados con  // TODO  son placeholders pendientes de confirmar.
 */

export const siteConfig = {
  name: "Bravo & Arismendi Abogados",
  shortName: "Bravo & Arismendi",
  slogan: "Compromiso, excelencia y visión para resolver los desafíos de hoy",
  description:
    "Abogados en Santiago, Chile. Asesoría estratégica y litigación en Derecho Civil, Familia, Penal, Laboral y más. Compromiso con la resolución eficiente de conflictos.",
  // Cambia esto al dominio definitivo antes de publicar (afecta canonical, sitemap y OG)
  url: "https://www.byabogados.cl",
  locale: "es-CL",

  contact: {
    email: "contacto@byabogados.cl",
    phoneDisplay: "+56 9 8176 4676",
    phoneE164: "56981764676",
    whatsappMessage: "Hola, necesito asesoría legal.",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    addressLine: "Santiago de Chile",
  },

  nav: [
    { label: "Quiénes somos", href: "#quienes-somos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Por qué elegirnos", href: "#por-que-elegirnos" },
    { label: "Cómo trabajamos", href: "#proceso" },
    { label: "Referencias", href: "#referencias" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

/** Link de WhatsApp con mensaje pre-cargado. */
export const whatsappUrl = `https://wa.me/${siteConfig.contact.phoneE164}?text=${encodeURIComponent(
  siteConfig.contact.whatsappMessage
)}`;

export const mailtoUrl = `mailto:${siteConfig.contact.email}`;

// ----------------------------------------------------------------------------
// Socios
// ----------------------------------------------------------------------------
export interface Partner {
  name: string;
  role: string;
  /** Ruta a la foto (círculo) en /public. Placeholder hasta tener la imagen real. */
  photo?: string;
  /** Versión grande para el lightbox al hacer click. Cae a `photo` si no existe. */
  photoLarge?: string;
  initials: string;
  bio: string;
  credentials: string[];
}

export const partners: Partner[] = [
  {
    name: "Carol Bravo",
    role: "Abogada · Socia",
    initials: "CB",
    photo: "/carol.jpg",
    photoLarge: "/carol-full.jpg",
    bio: "Abogada con destacada trayectoria en gestión de corretaje de propiedades y asesoría integral a empresas. Su práctica se desarrolla con éxito en Derecho Civil, Penal y de Familia, entre otras áreas. Destaca por su agudo rigor analítico, un alto desempeño profesional y un firme compromiso con la excelencia y la defensa estratégica de sus representados.",
    credentials: [
      "Abogada, Universidad Andrés Bello (2020)",
      "Diplomada en Violencia de Género",
      "Especialización en Compras Públicas, Ley Karin y Propiedad Intelectual",
    ],
  },
  {
    name: "Raúl Arismendi",
    role: "Abogado · Socio",
    initials: "RA",
    photo: "/arismendi.jpg",
    photoLarge: "/arismendi-full.jpg",
    bio: "Con una sólida y amplia trayectoria en el ejercicio de la profesión, su práctica se enfoca en la asesoría estratégica y litigación en las áreas de Derecho Civil, Penal y Laboral, destacando por su alta capacidad analítica y un compromiso orientado a la resolución eficiente de conflictos jurídicos complejos.",
    credentials: [
      "Abogado, Universidad de los Andes",
      "Magíster en Derecho Penal Económico y de la Empresa, Universidad San Sebastián",
    ],
  },
];

// ----------------------------------------------------------------------------
// Servicios  (data-driven y escalable: agrega items sin tocar el layout)
// ----------------------------------------------------------------------------
import {
  Scale,
  Users,
  Gavel,
  Briefcase,
  Building2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Derecho Civil y Propiedades",
    description:
      "Litigios contractuales, regularización de propiedades, corretaje inmobiliario, indemnizaciones y asesoría patrimonial.",
    icon: Scale,
  },
  {
    title: "Derecho Penal y Litigación Compleja",
    description:
      "Defensa y representación penal estratégica, delitos económicos y de la empresa.",
    icon: Gavel,
  },
  {
    title: "Derecho Laboral y Corporativo",
    description:
      "Asesoría integral a empresas, compliance (Ley Karin), compras públicas y propiedad intelectual. Defensas y demandas laborales.",
    icon: Briefcase,
  },
  {
    title: "Derecho de Familia",
    description:
      "Divorcios, pensiones de alimentos, cuidado personal, relación directa y regular, y causas de violencia de género.",
    icon: Users,
  },
  {
    title: "Litigación Constitucional y Administrativa",
    description:
      "Recursos de protección y trámites ante la Administración del Estado.",
    icon: ShieldCheck,
  },
  {
    title: "Policía Local",
    description:
      "Trámites, descargos y comparecencias ante Juzgados de Policía Local: accidentes de tránsito, ley del consumidor, entre otros.",
    icon: Building2,
  },
];

// ----------------------------------------------------------------------------
// Por qué elegirnos
// ----------------------------------------------------------------------------
import { Target, HeartHandshake, Lock, TrendingUp } from "lucide-react";

export interface Differentiator {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const differentiators: Differentiator[] = [
  {
    title: "Estrategia a la medida",
    description:
      "Analizamos cada caso en profundidad para diseñar la estrategia jurídica más eficiente para tus objetivos.",
    icon: Target,
  },
  {
    title: "Atención personalizada",
    description:
      "Trato directo con tus abogados. Te mantenemos informado y acompañado en cada etapa del proceso.",
    icon: HeartHandshake,
  },
  {
    title: "Confidencialidad total",
    description:
      "Tu información se maneja con la máxima reserva y el resguardo del secreto profesional.",
    icon: Lock,
  },
  {
    title: "Resolución eficiente",
    description:
      "Orientación a resultados: buscamos la vía más rápida y conveniente para resolver tu conflicto.",
    icon: TrendingUp,
  },
];

// ----------------------------------------------------------------------------
// Cómo trabajamos
// ----------------------------------------------------------------------------
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Primer contacto",
    description:
      "Nos cuentas tu situación por WhatsApp, correo o el formulario. Coordinamos una primera reunión.",
  },
  {
    step: "02",
    title: "Evaluación del caso",
    description:
      "Estudiamos los antecedentes, evaluamos las alternativas y te explicamos con transparencia el panorama.",
  },
  {
    step: "03",
    title: "Estrategia y propuesta",
    description:
      "Definimos juntos la estrategia y te presentamos una propuesta clara de honorarios y plazos.",
  },
  {
    step: "04",
    title: "Representación",
    description:
      "Asumimos tu defensa o gestión con dedicación, manteniéndote informado en cada hito del proceso.",
  },
];

// ----------------------------------------------------------------------------
// Referencias de clientes
// (Reemplazar por testimonios reales AUTORIZADOS por los clientes)
// ----------------------------------------------------------------------------
export interface Testimonial {
  quote: string;
  author: string;
  matter: string;
}

// TODO: reemplazar por testimonios reales autorizados
export const testimonials: Testimonial[] = [
  {
    quote:
      "Un trabajo impecable y muy humano. Me explicaron cada paso y siempre sentí que mi caso estaba en buenas manos.",
    author: "Cliente — Derecho de Familia",
    matter: "Santiago",
  },
  {
    quote:
      "Resolvieron un conflicto que arrastraba hacía años. Profesionalismo, claridad y resultados.",
    author: "Cliente — Derecho Civil",
    matter: "Santiago",
  },
  {
    quote:
      "Defensa seria y estratégica. Recomiendo absolutamente al equipo por su compromiso y cercanía.",
    author: "Cliente — Derecho Laboral",
    matter: "Región Metropolitana",
  },
];

// ----------------------------------------------------------------------------
// Preguntas frecuentes  (también alimentan el JSON-LD FAQPage)
// ----------------------------------------------------------------------------
export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "¿La primera consulta tiene costo?",
    answer:
      "Coordinamos una primera evaluación para entender tu caso y orientarte sobre las alternativas. Escríbenos por WhatsApp o el formulario y te indicamos los detalles según la materia.",
  },
  {
    question: "¿Cómo se determinan los honorarios?",
    answer:
      "Los honorarios se acuerdan de forma transparente antes de iniciar, según la complejidad y el tipo de gestión. Siempre recibirás una propuesta clara antes de comprometerte.",
  },
  {
    question: "¿En qué ciudades atienden?",
    answer:
      "Atendemos en Santiago y en todo Chile según la materia, de forma presencial cuando el caso lo requiere y también de manera remota para mayor comodidad.",
  },
  {
    question: "¿Qué áreas del derecho cubren?",
    answer:
      "Civil, Familia, Penal, Laboral, Policía Local, regularización de propiedades, recursos de protección y trámites ante la Administración del Estado.",
  },
  {
    question: "¿Atienden a empresas además de personas?",
    answer:
      "Sí. Asesoramos tanto a personas como a empresas, con especial énfasis en la asesoría estratégica y la litigación.",
  },
  {
    question: "¿Cómo agendo una reunión?",
    answer:
      "La forma más rápida es escribirnos por WhatsApp al +56 9 8176 4676. También puedes enviarnos el formulario de contacto o un correo y te responderemos a la brevedad.",
  },
];
