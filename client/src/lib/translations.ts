/*
 * PRIVEL — i18n Translations
 * English (default) and Spanish (Costa Rica formal)
 * Spanish uses formal "usted" register throughout
 */

export type Lang = "en" | "es";

export const translations = {
  en: {
    // Meta / SEO
    metaTitle: "Privel — Private Advisory Platform for Luxury Real Estate Agents",
    metaDescription:
      "Privel is a private advisory platform built exclusively for luxury real estate agents at The Agency Costa Rica. Market intelligence, client strategy, and operational support — by invitation only.",

    // Nav
    navCapabilities: "Capabilities",
    navAccess: "Access",
    navLogin: "Agent Login",
    navRequestAccess: "Request Access",
    navBrand: "The Agency Costa Rica",

    // Hero
    heroBadge: "Private Advisory Platform",
    heroHeadline: "The intelligence layer for luxury real estate.",
    heroBody:
      "Privel is a private advisory tool built exclusively for agents of The Agency Costa Rica. It consolidates market knowledge, client strategy, and operational support into a single, discreet platform.",
    heroExclusive: "Exclusive to The Agency Costa Rica agents",
    heroScroll: "Scroll",
    heroInvitation: "By Invitation Only",
    heroTagline: "Advisory. Precision. Access.",

    // Divider
    dividerBuiltFor: "Built for",
    dividerStatement:
      "Professionals who operate at the highest level of the Costa Rica luxury market.",

    // Capabilities
    capSectionLabel: "Capabilities",
    capSectionSub: "What Privel does",
    capHeadline: "A platform designed around how you work.",
    capabilities: [
      {
        index: "01",
        title: "Market Intelligence",
        body: "Real-time access to curated property data, comparable sales, and micro-market analysis across Costa Rica's prime corridors — structured for immediate use in client conversations.",
      },
      {
        index: "02",
        title: "Client Advisory Support",
        body: "Structured frameworks for buyer qualification, offer positioning, and negotiation strategy. Built for professionals who close at the highest price points.",
      },
      {
        index: "03",
        title: "Listing Preparation",
        body: "Guided workflows for property positioning, pricing rationale, and presentation standards aligned with The Agency's global brand requirements.",
      },
      {
        index: "04",
        title: "Document & Communication Drafts",
        body: "On-brand drafts for client correspondence, property descriptions, and internal memos — generated to The Agency Costa Rica's voice and standards.",
      },
      {
        index: "05",
        title: "Exclusive Agent Network",
        body: "Direct access to The Agency Costa Rica's internal knowledge base, preferred vendors, and cross-referral infrastructure. Reserved for active members of the brokerage.",
      },
    ],

    // Dark section
    darkSectionLabel: "The standard",
    darkHeadline: "Not every agent qualifies. That is the point.",
    darkBody:
      "Privel is not a general-purpose tool. It is a private resource allocated to agents who are active members of The Agency Costa Rica. Access is granted, not purchased. The platform reflects the standards of the brokerage it serves.",

    // How it works
    processSectionLabel: "Process",
    processSub: "How access works",
    processHeadline: "Simple. Deliberate. Private.",
    steps: [
      {
        step: "I",
        title: "Join The Agency Costa Rica",
        body: "Privel is available exclusively to agents operating under The Agency Costa Rica brokerage. Membership in the brokerage is the prerequisite.",
      },
      {
        step: "II",
        title: "Receive Your Credentials",
        body: "Once onboarded, agents receive private access credentials. There is no public registration. No waitlist. Access is granted directly by the brokerage.",
      },
      {
        step: "III",
        title: "Operate at a Higher Level",
        body: "Use Privel as your private advisory layer — for research, client preparation, documentation, and market positioning.",
      },
    ],

    // CTA / Access
    accessSectionLabel: "Access",
    accessSub: "Access",
    accessHeadline: "Interested in joining The Agency Costa Rica?",
    accessBody:
      "If you are a real estate professional in Costa Rica and want to learn more about joining The Agency Costa Rica and gaining access to PRIVEL, submit your information below. A member of our team will be in touch.",
    accessTagline: "theagency.cr",
    formTitle: "Inquiry Form",
    formName: "Full Name",
    formNamePlaceholder: "Your full name",
    formEmail: "Email Address",
    formEmailPlaceholder: "your@email.com",
    formLicense: "License Number (optional)",
    formLicensePlaceholder: "SUGEF / CCCBR license",
    formNote: "Brief Note",
    formNotePlaceholder: "Tell us briefly about your experience",
    formSubmit: "Submit Inquiry",
    formConfirm: "Inquiry Received",

    // Footer
    footerTagline: "A private platform of The Agency Costa Rica",
    footerCap: "Capabilities",
    footerAccess: "Access",
    footerAgency: "The Agency Costa Rica",
    footerCopyright: "Grupo LX Inmobiliaria CR SA. All rights reserved.",
  },

  es: {
    // Meta / SEO
    metaTitle: "Privel — Plataforma de Asesoría Privada para Agentes Inmobiliarios de Lujo",
    metaDescription:
      "Privel es una plataforma de asesoría privada creada exclusivamente para los agentes de bienes raíces de lujo de The Agency Costa Rica. Inteligencia de mercado, estrategia de clientes y soporte operativo — solo por invitación.",

    // Nav
    navCapabilities: "Capacidades",
    navAccess: "Acceso",
    navLogin: "Acceso Agentes",
    navRequestAccess: "Solicitar Acceso",
    navBrand: "The Agency Costa Rica",

    // Hero
    heroBadge: "Plataforma de Asesoría Privada",
    heroHeadline: "La capa de inteligencia para bienes raíces de lujo.",
    heroBody:
      "Privel es una herramienta de asesoría privada creada exclusivamente para los agentes de The Agency Costa Rica. Consolida el conocimiento del mercado, la estrategia de clientes y el soporte operativo en una sola plataforma discreta.",
    heroExclusive: "Exclusivo para agentes de The Agency Costa Rica",
    heroScroll: "Desplazar",
    heroInvitation: "Solo por Invitación",
    heroTagline: "Asesoría. Precisión. Acceso.",

    // Divider
    dividerBuiltFor: "Diseñado para",
    dividerStatement:
      "Profesionales que operan al más alto nivel del mercado inmobiliario de lujo en Costa Rica.",

    // Capabilities
    capSectionLabel: "Capacidades",
    capSectionSub: "Qué hace Privel",
    capHeadline: "Una plataforma diseñada en torno a su forma de trabajar.",
    capabilities: [
      {
        index: "01",
        title: "Inteligencia de Mercado",
        body: "Acceso en tiempo real a datos de propiedades curados, ventas comparables y análisis de micro-mercado en los principales corredores de Costa Rica — estructurado para uso inmediato en conversaciones con clientes.",
      },
      {
        index: "02",
        title: "Soporte de Asesoría al Cliente",
        body: "Marcos estructurados para la calificación de compradores, posicionamiento de ofertas y estrategia de negociación. Diseñado para profesionales que cierran en los puntos de precio más altos.",
      },
      {
        index: "03",
        title: "Preparación de Listados",
        body: "Flujos de trabajo guiados para el posicionamiento de propiedades, justificación de precios y estándares de presentación alineados con los requisitos de marca global de The Agency.",
      },
      {
        index: "04",
        title: "Borradores de Documentos y Comunicaciones",
        body: "Borradores alineados con la marca para correspondencia con clientes, descripciones de propiedades y memorandos internos — generados según la voz y los estándares de The Agency Costa Rica.",
      },
      {
        index: "05",
        title: "Red Exclusiva de Agentes",
        body: "Acceso directo a la base de conocimiento interna de The Agency Costa Rica, proveedores preferidos e infraestructura de referencias cruzadas. Reservado para miembros activos de la correduría.",
      },
    ],

    // Dark section
    darkSectionLabel: "El estándar",
    darkHeadline: "No todo agente califica. Ese es el punto.",
    darkBody:
      "Privel no es una herramienta de uso general. Es un recurso privado asignado a los agentes que son miembros activos de The Agency Costa Rica. El acceso se otorga, no se compra. La plataforma refleja los estándares de la correduría a la que sirve.",

    // How it works
    processSectionLabel: "Proceso",
    processSub: "Cómo funciona el acceso",
    processHeadline: "Simple. Deliberado. Privado.",
    steps: [
      {
        step: "I",
        title: "Únase a The Agency Costa Rica",
        body: "Privel está disponible exclusivamente para agentes que operan bajo la correduría de The Agency Costa Rica. La membresía en la correduría es el requisito previo.",
      },
      {
        step: "II",
        title: "Reciba Sus Credenciales",
        body: "Una vez incorporado, los agentes reciben credenciales de acceso privado. No hay registro público. No hay lista de espera. El acceso es otorgado directamente por la correduría.",
      },
      {
        step: "III",
        title: "Opere a un Nivel Superior",
        body: "Utilice Privel como su capa de asesoría privada — para investigación, preparación de clientes, documentación y posicionamiento de mercado.",
      },
    ],

    // CTA / Access
    accessSectionLabel: "Acceso",
    accessSub: "Acceso",
    accessHeadline: "¿Le interesa unirse a The Agency Costa Rica?",
    accessBody:
      "Si usted es un profesional inmobiliario en Costa Rica y desea obtener más información sobre cómo unirse a The Agency Costa Rica y acceder a PRIVEL, envíe su información a continuación. Un miembro de nuestro equipo se pondrá en contacto con usted.",
    accessTagline: "theagency.cr",
    formTitle: "Formulario de Consulta",
    formName: "Nombre Completo",
    formNamePlaceholder: "Su nombre completo",
    formEmail: "Correo Electrónico",
    formEmailPlaceholder: "su@correo.com",
    formLicense: "Número de Licencia (opcional)",
    formLicensePlaceholder: "Licencia SUGEF / CCCBR",
    formNote: "Nota Breve",
    formNotePlaceholder: "Cuéntenos brevemente sobre su experiencia",
    formSubmit: "Enviar Consulta",
    formConfirm: "Consulta Recibida",

    // Footer
    footerTagline: "Una plataforma privada de The Agency Costa Rica",
    footerCap: "Capacidades",
    footerAccess: "Acceso",
    footerAgency: "The Agency Costa Rica",
    footerCopyright: "Grupo LX Inmobiliaria CR SA. Todos los derechos reservados.",
  },
} as const;

export type Translations = typeof translations.en;
