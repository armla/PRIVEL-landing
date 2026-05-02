/*
 * PRIVEL — i18n Translations
 * English (default) and Spanish (Costa Rica formal)
 * Spanish uses formal "usted" register throughout
 */

export type Lang = "en" | "es";

export const translations = {
  en: {
    // Meta / SEO
    metaTitle: "Privel — Private Advisory Intelligence for Luxury Real Estate",
    metaDescription:
      "Privel is a proprietary advisory system developed internally for The Agency Costa Rica. Market intelligence, client strategy, and operational infrastructure — by invitation only.",

    // Nav
    navCapabilities: "Capabilities",
    navAccess: "Access",
    navLogin: "Agent Access",
    navRequestAccess: "Inquire",
    navBrand: "The Agency Costa Rica",

    // Hero
    heroBadge: "Private Advisory System",
    heroHeadline: "The intelligence layer for luxury real estate.",
    heroBody:
      "Privel is a private advisory system developed as an internal advisory infrastructure for The Agency Costa Rica. It consolidates market knowledge, client strategy, and operational support into a single, discreet system.",
    heroExclusive: "Exclusive to The Agency Costa Rica team",
    heroScroll: "Scroll",
    heroInvitation: "By Invitation Only",
    heroTagline: "Advisory. Precision. Access.",

    // Capabilities headline (two-line structure)
    capHeadlineMain: "Structured for high-value transactions.",
    capHeadlineSub: "Aligned with how top advisors operate.",

    // Divider
    dividerBuiltFor: "Built for",
    dividerStatement:
      "Professionals who operate at the highest level of the Costa Rica luxury market.",

    // Capabilities
    capSectionLabel: "Capabilities",
    capSectionSub: "What Privel does",
    capHeadline: "Structured for high-value transactions.",
    capabilities: [
      {
        index: "01",
        title: "Market Intelligence",
        body: "Curated access to proprietary property data, comparable sales, and micro-market analysis across Costa Rica's prime corridors — structured for immediate deployment in high-stakes client conversations.",
      },
      {
        index: "02",
        title: "Client Advisory Support",
        body: "Internal frameworks for buyer qualification, offer positioning, and negotiation strategy. Developed for advisors who operate at the highest price points within the brokerage.",
      },
      {
        index: "03",
        title: "Listing Preparation",
        body: "Structured workflows aligned with positioning and presentation standards. Built to reflect The Agency's global brand requirements from the first client touchpoint.",
      },
      {
        index: "04",
        title: "Document & Communication Drafts",
        body: "Proprietary drafts for client correspondence, property descriptions, and internal memos — calibrated to The Agency Costa Rica's voice and operational standards.",
      },
      {
        index: "05",
        title: "Exclusive Agent Network",
        body: "Direct access to The Agency Costa Rica's internal knowledge base, preferred vendor infrastructure, and cross-referral architecture. Reserved for active members of the brokerage.",
      },
    ],

    // Dark section
    darkSectionLabel: "The standard",
    darkHeadline: "Not every agent qualifies. That is the point.",
    darkBody:
      "Privel is not a general-purpose tool. It is a proprietary resource allocated internally to agents who are active members of The Agency Costa Rica. Access is granted, not purchased. The system reflects the standards of the brokerage it serves.",

    // How it works
    processSectionLabel: "Process",
    processSub: "How access works",
    processHeadline: "Simple. Deliberate. Private.",
    processLoginLabel: "Agent Access",
    steps: [
      {
        step: "I",
        title: "Join The Agency Costa Rica",
        body: "Privel is available exclusively to agents operating within The Agency Costa Rica brokerage. Membership in the brokerage is the prerequisite.",
      },
      {
        step: "II",
        title: "Internal Access",
        body: "Once onboarded, agents receive private access credentials. There is no public registration. No waitlist. Access is granted directly by the brokerage.",
      },
      {
        step: "III",
        title: "Operate at a Higher Level",
        body: "Use Privel as your private advisory layer — for research, client preparation, documentation, and market positioning within the brokerage.",
      },
    ],

    // CTA / Access
    accessSectionLabel: "Access",
    accessSub: "Access",
    accessHeadline: "Interested in joining The Agency Costa Rica?",
    accessBodyIntro: "Access to Privel is part of how we operate.",
    accessBody:
      "If you are a real estate professional in Costa Rica and want to learn more about joining The Agency Costa Rica and gaining access to PRIVEL, submit your information below. A member of our team will be in touch.",
    accessTagline: "theagency.cr",
    formTitle: "Inquiry Form",
    formName: "Full Name",
    formNamePlaceholder: "Your full name",
    formEmail: "Email Address",
    formEmailPlaceholder: "your@email.com",
    formNote: "Professional Background",
    formNotePlaceholder: "Tell us briefly about your experience",
    formSubmit: "Submit Request",
    formMicroCopy: "All inquiries are reviewed internally.",
    formConfirm: "Request Received",

    // Footer
    footerTagline: "A proprietary advisory system of The Agency Costa Rica",
    footerCap: "Capabilities",
    footerAccess: "Access",
    footerAgency: "The Agency Costa Rica",
    footerCopyright: "Grupo LX Inmobiliaria CR SA. All rights reserved.",
  },

  es: {
    // Meta / SEO
    metaTitle: "Privel — Inteligencia de Asesoría Privada para Bienes Raíces de Lujo",
    metaDescription:
      "Privel es un sistema de asesoría propietario desarrollado internamente para The Agency Costa Rica. Inteligencia de mercado, estrategia de clientes e infraestructura operativa — solo por invitación.",

    // Nav
    navCapabilities: "Capacidades",
    navAccess: "Acceso",
    navLogin: "Acceso Agentes",
    navRequestAccess: "Consultar",
    navBrand: "The Agency Costa Rica",

    // Hero
    heroBadge: "Sistema de Asesoría Privada",
    heroHeadline: "La capa de inteligencia para bienes raíces de lujo.",
    heroBody:
      "Privel es un sistema de asesoría privada desarrollado como infraestructura interna de asesoría para The Agency Costa Rica. Consolida el conocimiento del mercado, la estrategia de clientes y el soporte operativo en un solo sistema discreto.",
    heroExclusive: "Exclusivo para el equipo de The Agency Costa Rica",
    heroScroll: "Desplazar",
    heroInvitation: "Solo por Invitación",
    heroTagline: "Asesoría. Precisión. Acceso.",

    // Capabilities headline (two-line structure)
    capHeadlineMain: "Estructurado para transacciones de alto valor.",
    capHeadlineSub: "Alineado con la forma en que operan los mejores asesores.",

    // Divider
    dividerBuiltFor: "Diseñado para",
    dividerStatement:
      "Profesionales que operan al más alto nivel del mercado inmobiliario de lujo en Costa Rica.",

    // Capabilities
    capSectionLabel: "Capacidades",
    capSectionSub: "Qué hace Privel",
    capHeadline: "Estructurado para transacciones de alto valor.",
    capabilities: [
      {
        index: "01",
        title: "Inteligencia de Mercado",
        body: "Acceso curado a datos propietarios de propiedades, ventas comparables y análisis de micro-mercado en los principales corredores de Costa Rica — estructurado para uso inmediato en conversaciones de alto valor con clientes.",
      },
      {
        index: "02",
        title: "Soporte de Asesoría al Cliente",
        body: "Marcos internos para la calificación de compradores, posicionamiento de ofertas y estrategia de negociación. Desarrollado para asesores que operan en los puntos de precio más altos dentro de la correduría.",
      },
      {
        index: "03",
        title: "Preparación de Listados",
        body: "Flujos de trabajo estructurados alineados con los estándares de posicionamiento y presentación. Diseñado para reflejar los requisitos de marca global de The Agency desde el primer punto de contacto con el cliente.",
      },
      {
        index: "04",
        title: "Borradores de Documentos y Comunicaciones",
        body: "Borradores propietarios para correspondencia con clientes, descripciones de propiedades y memorandos internos — calibrados según la voz y los estándares operativos de The Agency Costa Rica.",
      },
      {
        index: "05",
        title: "Red Exclusiva de Agentes",
        body: "Acceso directo a la base de conocimiento interna de The Agency Costa Rica, infraestructura de proveedores preferidos y arquitectura de referencias cruzadas. Reservado para miembros activos de la correduría.",
      },
    ],

    // Dark section
    darkSectionLabel: "El estándar",
    darkHeadline: "No todo agente califica. Ese es el punto.",
    darkBody:
      "Privel no es una herramienta de uso general. Es un recurso propietario asignado internamente a los agentes que son miembros activos de The Agency Costa Rica. El acceso se otorga, no se compra. El sistema refleja los estándares de la correduría a la que sirve.",

    // How it works
    processSectionLabel: "Proceso",
    processSub: "Cómo funciona el acceso",
    processHeadline: "Simple. Deliberado. Privado.",
    processLoginLabel: "Acceso de Agentes",
    steps: [
      {
        step: "I",
        title: "Únase a The Agency Costa Rica",
        body: "Privel está disponible exclusivamente para agentes que operan dentro de la correduría de The Agency Costa Rica. La membresía en la correduría es el requisito previo.",
      },
      {
        step: "II",
        title: "Acceso Interno",
        body: "Una vez incorporado, los agentes reciben credenciales de acceso privado. No hay registro público. No hay lista de espera. El acceso es otorgado directamente por la correduría.",
      },
      {
        step: "III",
        title: "Opere a un Nivel Superior",
        body: "Utilice Privel como su capa de asesoría privada — para investigación, preparación de clientes, documentación y posicionamiento de mercado dentro de la correduría.",
      },
    ],

    // CTA / Access
    accessSectionLabel: "Acceso",
    accessSub: "Acceso",
    accessHeadline: "¿Le interesa unirse a The Agency Costa Rica?",
    accessBodyIntro: "El acceso a Privel es parte de cómo operamos.",
    accessBody:
      "Si usted es un profesional inmobiliario en Costa Rica y desea obtener más información sobre cómo unirse a The Agency Costa Rica y acceder a PRIVEL, envíe su información a continuación. Un miembro de nuestro equipo se pondrá en contacto con usted.",
    accessTagline: "theagency.cr",
    formTitle: "Formulario de Consulta",
    formName: "Nombre Completo",
    formNamePlaceholder: "Su nombre completo",
    formEmail: "Correo Electrónico",
    formEmailPlaceholder: "su@correo.com",
    formNote: "Trayectoria Profesional",
    formNotePlaceholder: "Cuéntenos brevemente sobre su experiencia",
    formSubmit: "Enviar Solicitud",
    formMicroCopy: "Todas las consultas son revisadas internamente.",
    formConfirm: "Solicitud Recibida",

    // Footer
    footerTagline: "Un sistema de asesoría propietario de The Agency Costa Rica",
    footerCap: "Capacidades",
    footerAccess: "Acceso",
    footerAgency: "The Agency Costa Rica",
    footerCopyright: "Grupo LX Inmobiliaria CR SA. Todos los derechos reservados.",
  },
} as const;

export type Translations = typeof translations.en;
