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
  // TODO: definir slogan oficial del estudio
  slogan: "Asesoría jurídica estratégica y litigación de excelencia",
  description:
    "Estudio jurídico en Las Condes, Santiago. Asesoría estratégica y litigación en Derecho Civil, Familia, Penal, Laboral y más. Compromiso con la resolución eficiente de conflictos.",
  // Cambia esto al dominio definitivo antes de publicar (afecta canonical, sitemap y OG)
  url: "https://bravoyarismendiabogados.cl",
  locale: "es-CL",

  contact: {
    email: "bravoyarismendiabogados@gmail.com",
    phoneDisplay: "+56 9 8176 4676",
    phoneE164: "56981764676",
    whatsappMessage: "Hola, necesito asesoría legal.",
    city: "Las Condes",
    region: "Región Metropolitana",
    country: "Chile",
    // TODO: dirección exacta de la oficina (opcional, mejora el SEO local)
    addressLine: "Las Condes, Santiago de Chile",
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
  /** Ruta a la foto en /public. Placeholder hasta tener la imagen real. */
  photo?: string;
  initials: string;
  bio: string;
  credentials: string[];
}

export const partners: Partner[] = [
  {
    name: "Carol Bravo",
    role: "Abogada · Socia",
    initials: "CB",
    // TODO: completar bio real (título, universidad, especialidad)
    bio: "Abogada con vocación de servicio y enfoque en la atención cercana y rigurosa de cada cliente. Su práctica se orienta a entregar soluciones jurídicas claras y efectivas.",
    credentials: [
      // TODO: completar credenciales reales de Carol Bravo
      "Abogada",
    ],
  },
  {
    name: "Raúl Arismendi",
    role: "Abogado · Socio",
    initials: "RA",
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
  Home,
  ShieldCheck,
  FileText,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Derecho Civil",
    description:
      "Contratos, responsabilidad civil, indemnizaciones, cobranzas y conflictos patrimoniales con una estrategia clara.",
    icon: Scale,
  },
  {
    title: "Derecho de Familia",
    description:
      "Divorcios, pensión de alimentos, cuidado personal, relación directa y regular y violencia intrafamiliar.",
    icon: Users,
  },
  {
    title: "Derecho Penal",
    description:
      "Defensa penal y querellas, con asesoría estratégica en delitos económicos y de la empresa.",
    icon: Gavel,
  },
  {
    title: "Derecho Laboral",
    description:
      "Despidos, finiquitos, tutela de derechos fundamentales y demandas laborales para trabajadores y empresas.",
    icon: Briefcase,
  },
  {
    title: "Policía Local",
    description:
      "Representación en juzgados de policía local: infracciones, accidentes de tránsito y procedimientos municipales.",
    icon: Building2,
  },
  {
    title: "Regularización de propiedades",
    description:
      "Saneamiento de títulos, regularización de la pequeña propiedad raíz y trámites de inscripción.",
    icon: Home,
  },
  {
    title: "Recursos de protección",
    description:
      "Acciones constitucionales para resguardar tus derechos fundamentales ante actos arbitrarios o ilegales.",
    icon: ShieldCheck,
  },
  {
    title: "Trámites ante la Administración del Estado",
    description:
      "Gestiones y recursos ante organismos públicos, procedimientos administrativos y reclamaciones.",
    icon: FileText,
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
    matter: "Las Condes",
  },
  {
    quote:
      "Resolvieron un conflicto que arrastraba hacía años. Profesionalismo, claridad y resultados.",
    author: "Cliente — Derecho Civil",
    matter: "Santiago",
  },
  {
    quote:
      "Defensa seria y estratégica. Recomiendo absolutamente al estudio por su compromiso y cercanía.",
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
    question: "¿En qué comunas y ciudades atienden?",
    answer:
      "Nuestra oficina está en Las Condes, Santiago, y atendemos casos en toda la Región Metropolitana y a nivel nacional según la materia.",
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
