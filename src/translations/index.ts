export type Lang = "en" | "es";

export const t = {
  en: {
    // ── Navigation ──────────────────────────────────────
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      howItWorks: "How It Works",
      quote: "Request a Quote",
      contact: "Contact",
      cta: "Get a Quote",
    },

    // ── Hero (Home) ──────────────────────────────────────
    hero: {
      badge: "Licensed Medical Courier · Atlanta, GA",
      headline: "Fast, Reliable Medical Delivery You Can Trust",
      sub: "MEDSWIFT EXPRESS partners with pharmacies and healthcare providers to deliver prescriptions and medical supplies directly to patients — safely, on time, every time.",
      cta1: "Request a Quote",
      cta2: "Learn How It Works",
    },

    // ── Trust Strip ──────────────────────────────────────
    trust: [
      { icon: "⚡", label: "Same-Day Delivery" },
      { icon: "🔒", label: "HIPAA-Aware Handling" },
      { icon: "📍", label: "Real-Time Updates" },
      { icon: "🕐", label: "On-Time Guarantee" },
      { icon: "🏥", label: "Healthcare-Focused" },
    ],

    // ── Services (home preview) ──────────────────────────
    servicesSection: {
      badge: "What We Deliver",
      title: "Comprehensive Medical Courier Services",
      sub: "Designed specifically for pharmacies, clinics, and healthcare providers across the Atlanta metro area.",
    },
    services: [
      {
        icon: "💊",
        title: "Prescription Delivery",
        desc: "We collect prescriptions directly from your pharmacy and deliver them to your patients with care and discretion.",
      },
      {
        icon: "🩺",
        title: "Medical Supply Delivery",
        desc: "From specimen kits to medical equipment, we handle sensitive healthcare items with the attention they deserve.",
      },
      {
        icon: "🚀",
        title: "Same-Day & Rush Delivery",
        desc: "When urgency matters most, our same-day and rush options keep your operations — and your patients — moving.",
      },
      {
        icon: "📅",
        title: "Scheduled & Recurring Routes",
        desc: "Set up recurring delivery routes so your pharmacy or clinic runs like clockwork, every single week.",
      },
      {
        icon: "🏥",
        title: "Clinic & Hospital Support",
        desc: "Supporting facilities that need reliable inter-facility transport or patient-facing delivery services.",
      },
      {
        icon: "❄️",
        title: "Temperature-Sensitive Items",
        desc: "Special handling for medications and supplies that require temperature-controlled transport.",
      },
    ],

    // ── How It Works (home teaser) ───────────────────────
    howSection: {
      badge: "Simple Process",
      title: "Delivering in 4 Simple Steps",
      sub: "From your counter to your patient's door — our process is streamlined, transparent, and built for busy healthcare environments.",
    },
    steps: [
      {
        number: "01",
        title: "Submit a Request",
        desc: "Your pharmacy or clinic submits a delivery request via our simple online form or by phone.",
      },
      {
        number: "02",
        title: "We Schedule Pickup",
        desc: "A MEDSWIFT driver is assigned and arrives at your location at the scheduled pickup time.",
      },
      {
        number: "03",
        title: "Secure Transport",
        desc: "Your medical items are transported safely, following all handling protocols for sensitive healthcare products.",
      },
      {
        number: "04",
        title: "Confirmed Delivery",
        desc: "The package is delivered to the patient or destination and you receive delivery confirmation.",
      },
    ],

    // ── CTA Banner ───────────────────────────────────────
    ctaBanner: {
      title: "Ready to Streamline Your Pharmacy Deliveries?",
      sub: "Join healthcare providers across Atlanta who trust MEDSWIFT EXPRESS for reliable, professional medical courier service.",
      btn: "Request a Quote Today",
    },

    // ── About Page ───────────────────────────────────────
    about: {
      badge: "Who We Are",
      title: "Built for Healthcare. Built on Trust.",
      body1: "MEDSWIFT EXPRESS is an Atlanta-based medical courier service dedicated to one mission: ensuring that prescriptions and medical supplies reach patients safely and on time. We work directly with pharmacies, clinics, and healthcare providers to manage the critical last mile of the healthcare supply chain.",
      body2: "We understand that what we deliver isn't just a package — it's someone's medication, someone's care. That's why every delivery is handled with professionalism, discretion, and urgency.",
      mission: {
        title: "Our Mission",
        text: "To be the most trusted medical courier partner in the Atlanta metro area — one delivery at a time.",
      },
      values: [
        { icon: "🤝", title: "Reliability", desc: "When you schedule a delivery, it happens. We maintain on-time performance as our core standard." },
        { icon: "🔒", title: "Confidentiality", desc: "All deliveries are handled with full awareness of patient privacy and healthcare compliance." },
        { icon: "⚡", title: "Urgency", desc: "Medical needs don't wait. We operate with a sense of urgency on every single run." },
        { icon: "🏆", title: "Professionalism", desc: "Our drivers are trained, courteous, and represent your organization as an extension of your team." },
      ],
      whyUs: {
        title: "Why Pharmacies Choose MEDSWIFT",
        points: [
          "Dedicated to healthcare — not a general delivery app",
          "Same-day and scheduled options to fit your workflow",
          "Professional drivers trained for sensitive medical handling",
          "Real-time communication and delivery confirmation",
          "Serving the Atlanta metro area and surrounding communities",
          "Invoiced billing via check or PO number for business clients",
        ],
      },
    },

    // ── Services Page ─────────────────────────────────────
    servicesPage: {
      badge: "Our Services",
      title: "Specialized Medical Courier Solutions",
      sub: "Every service we offer is built around the unique demands of the healthcare industry — speed, safety, and dependability.",
      services: [
        {
          icon: "💊",
          title: "Prescription Delivery",
          desc: "We partner with pharmacies to deliver patient prescriptions directly to their homes or care facilities. This service is ideal for pharmacies looking to improve patient convenience and reduce missed pickups. We handle all communication with the recipient and provide confirmation upon delivery.",
          tags: ["Same-day available", "Proof of delivery", "Patient-friendly"],
        },
        {
          icon: "🩺",
          title: "Medical Supply Delivery",
          desc: "We transport a wide range of medical supplies — from wound care kits and diagnostic tools to laboratory specimens and clinical equipment. Our drivers are trained to handle sensitive materials with care and to maintain proper chain-of-custody when required.",
          tags: ["Specimen-safe", "Chain of custody", "Secure packaging"],
        },
        {
          icon: "🚀",
          title: "Same-Day & Rush Delivery",
          desc: "When a patient needs medication urgently or a clinic needs supplies immediately, we respond. Our rush delivery service provides the fastest possible turnaround for time-sensitive medical items in the Atlanta metro area.",
          tags: ["Priority dispatch", "Rapid response", "Time-critical"],
        },
        {
          icon: "📅",
          title: "Scheduled & Recurring Routes",
          desc: "Set up recurring delivery schedules — daily, weekly, or custom — to support your pharmacy's regular patient base or clinic's supply needs. Scheduled routes allow for predictable costs and reliable service without repeated coordination.",
          tags: ["Weekly routes", "Custom scheduling", "Predictable billing"],
        },
        {
          icon: "🏥",
          title: "Clinic & Hospital Support",
          desc: "We support outpatient clinics, specialty practices, and smaller hospital facilities with inter-facility transport and patient-facing deliveries. From supply replenishment to discharge prescription fulfillment, we integrate seamlessly with your operations.",
          tags: ["Inter-facility", "Discharge support", "Outpatient clinics"],
        },
        {
          icon: "❄️",
          title: "Temperature-Sensitive Handling",
          desc: "Certain medications and biological materials require specific temperature conditions during transport. We offer temperature-aware handling solutions to ensure these items maintain their integrity from pickup to delivery.",
          tags: ["Cold chain aware", "Biologics", "Insulin & injectables"],
        },
      ],
      pricing: {
        title: "Simple, Transparent Pricing",
        sub: "No surprise fees. Billing is handled via invoice — payable by check or purchase order (PO number) for business accounts.",
        note: "Contact us for a custom quote based on your delivery volume, frequency, and service area.",
        cta: "Request a Quote",
      },
    },

    // ── How It Works Page ─────────────────────────────────
    howPage: {
      badge: "The Process",
      title: "Simple Delivery. Reliable Results.",
      sub: "We've designed our delivery process to be as simple as possible for pharmacies and healthcare providers — with zero disruption to your workflow.",
      steps: [
        {
          number: "01",
          title: "Submit a Delivery Request",
          desc: "Use our online Request a Quote form or call us directly. Provide your pharmacy name, pickup location, delivery address, and any special instructions. You'll hear back from us promptly to confirm details.",
          detail: "Online form · Phone call · Email",
        },
        {
          number: "02",
          title: "We Confirm & Assign a Driver",
          desc: "Once your request is received, we confirm the pickup time and assign a trained MEDSWIFT driver to your order. You'll receive confirmation so you know exactly when to expect us.",
          detail: "Same-day or scheduled pickup options",
        },
        {
          number: "03",
          title: "Secure Pickup & Transport",
          desc: "Your driver arrives at the scheduled time, collects the items, and transports them following all appropriate handling protocols. Sensitive items are transported with proper packaging and care.",
          detail: "Professional handling · Chain of custody",
        },
        {
          number: "04",
          title: "Delivery & Confirmation",
          desc: "The package is delivered to the patient, facility, or destination. You receive delivery confirmation, giving you and your patients peace of mind that every order was completed successfully.",
          detail: "Proof of delivery · Delivery notification",
        },
      ],
      faq: {
        title: "Common Questions",
        items: [
          {
            q: "What areas do you serve?",
            a: "We primarily serve the Atlanta metro area and surrounding communities. Contact us to confirm service coverage for your specific locations.",
          },
          {
            q: "How do I pay for deliveries?",
            a: "Business clients are billed via invoice. Payment is accepted by check or purchase order (PO number). We do not require upfront payment for established accounts.",
          },
          {
            q: "Can I set up recurring deliveries?",
            a: "Yes — we offer scheduled and recurring routes that can be customized to your pharmacy's daily or weekly delivery needs.",
          },
          {
            q: "How quickly can you respond to a rush order?",
            a: "Rush and same-day delivery availability depends on driver availability and distance. Contact us directly for time-sensitive requests.",
          },
        ],
      },
    },

    // ── Quote Page ────────────────────────────────────────
    quotePage: {
      badge: "Get Started",
      title: "Request a Delivery Quote",
      sub: "Fill out the form below and a MEDSWIFT EXPRESS representative will contact you within one business day to confirm details and pricing.",
      form: {
        name: "Full Name",
        namePh: "e.g. Jane Smith",
        company: "Pharmacy / Organization Name",
        companyPh: "e.g. Riverside Pharmacy",
        phone: "Phone Number",
        phonePh: "e.g. (404) 555-0100",
        email: "Email Address",
        emailPh: "e.g. orders@yourpharmacy.com",
        pickup: "Pickup Address",
        pickupPh: "Full street address",
        delivery: "Delivery Address",
        deliveryPh: "Full street address or city/area",
        serviceType: "Service Type",
        serviceOptions: [
          "Select a service type",
          "Prescription Delivery",
          "Medical Supply Delivery",
          "Same-Day / Rush Delivery",
          "Scheduled / Recurring Route",
          "Clinic & Hospital Support",
          "Other",
        ],
        frequency: "Delivery Frequency",
        frequencyOptions: [
          "Select frequency",
          "One-time delivery",
          "Daily",
          "Weekly",
          "Monthly",
          "As needed",
        ],
        notes: "Additional Notes",
        notesPh: "Any special handling instructions, delivery window preferences, or other details...",
        submit: "Submit Request",
        submitting: "Sending...",
        success: "Thank you! Your request has been submitted. We'll be in touch within one business day.",
        error: "Something went wrong. Please try again or call us directly at (757) 940-8468.",
      },
    },

    // ── Contact Page ──────────────────────────────────────
    contactPage: {
      badge: "Get In Touch",
      title: "We'd Love to Hear From You",
      sub: "Whether you're a pharmacy, clinic, or healthcare provider — we're ready to discuss how MEDSWIFT EXPRESS can support your delivery needs.",
      info: {
        phone: "(757) 940-8468",
        email: "beatricenatasha99@gmail.com",
        location: "Atlanta, GA Metro Area",
        hours: "Mon–Fri: 8am–6pm · Sat: 9am–2pm",
      },
      form: {
        name: "Full Name",
        namePh: "Your name",
        email: "Email Address",
        emailPh: "Your email",
        phone: "Phone Number",
        phonePh: "Your phone number",
        subject: "Subject",
        subjectPh: "How can we help?",
        message: "Message",
        messagePh: "Tell us about your delivery needs...",
        submit: "Send Message",
        submitting: "Sending...",
        success: "Message sent! We'll get back to you shortly.",
        error: "Something went wrong. Please try again or call us directly.",
      },
    },

    // ── Footer ────────────────────────────────────────────
    footer: {
      tagline: "Professional medical courier services for pharmacies and healthcare providers across Atlanta.",
      links: "Quick Links",
      contact: "Contact",
      legal: "© 2026 MEDSWIFT EXPRESS. All rights reserved.",
      serving: "Serving the Atlanta, GA Metro Area",
    },
  },

  // ────────────────────────────────────────────────────────
  // SPANISH
  // ────────────────────────────────────────────────────────
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      howItWorks: "¿Cómo Funciona?",
      quote: "Solicitar Cotización",
      contact: "Contacto",
      cta: "Cotización",
    },

    hero: {
      badge: "Mensajería Médica Certificada · Atlanta, GA",
      headline: "Entrega Médica Rápida y Confiable en la que Puede Confiar",
      sub: "MEDSWIFT EXPRESS se asocia con farmacias y proveedores de salud para entregar recetas y suministros médicos directamente a los pacientes — con seguridad, puntualidad y profesionalismo.",
      cta1: "Solicitar Cotización",
      cta2: "¿Cómo Funciona?",
    },

    trust: [
      { icon: "⚡", label: "Entrega el Mismo Día" },
      { icon: "🔒", label: "Manejo con Conciencia HIPAA" },
      { icon: "📍", label: "Actualizaciones en Tiempo Real" },
      { icon: "🕐", label: "Garantía de Puntualidad" },
      { icon: "🏥", label: "Enfocado en Salud" },
    ],

    servicesSection: {
      badge: "Lo que Entregamos",
      title: "Servicios Completos de Mensajería Médica",
      sub: "Diseñados específicamente para farmacias, clínicas y proveedores de salud en el área metropolitana de Atlanta.",
    },
    services: [
      {
        icon: "💊",
        title: "Entrega de Recetas",
        desc: "Recogemos recetas directamente de su farmacia y las entregamos a sus pacientes con cuidado y discreción.",
      },
      {
        icon: "🩺",
        title: "Entrega de Suministros Médicos",
        desc: "Desde kits de muestras hasta equipos médicos, manejamos artículos médicos sensibles con la atención que merecen.",
      },
      {
        icon: "🚀",
        title: "Entrega el Mismo Día y Urgente",
        desc: "Cuando la urgencia importa más, nuestras opciones de entrega urgente mantienen sus operaciones y pacientes en movimiento.",
      },
      {
        icon: "📅",
        title: "Rutas Programadas y Recurrentes",
        desc: "Configure rutas de entrega recurrentes para que su farmacia o clínica funcione como un reloj, cada semana.",
      },
      {
        icon: "🏥",
        title: "Apoyo a Clínicas y Hospitales",
        desc: "Apoyamos instalaciones que necesitan transporte confiable entre instalaciones o servicios de entrega para pacientes.",
      },
      {
        icon: "❄️",
        title: "Artículos Sensibles a la Temperatura",
        desc: "Manejo especial para medicamentos y suministros que requieren transporte con control de temperatura.",
      },
    ],

    howSection: {
      badge: "Proceso Simple",
      title: "Entregamos en 4 Pasos Simples",
      sub: "Desde su mostrador hasta la puerta del paciente — nuestro proceso es simplificado, transparente y construido para entornos médicos ocupados.",
    },
    steps: [
      {
        number: "01",
        title: "Envíe una Solicitud",
        desc: "Su farmacia o clínica envía una solicitud de entrega a través de nuestro formulario en línea o por teléfono.",
      },
      {
        number: "02",
        title: "Programamos la Recolección",
        desc: "Un conductor de MEDSWIFT es asignado y llega a su ubicación a la hora programada de recolección.",
      },
      {
        number: "03",
        title: "Transporte Seguro",
        desc: "Sus artículos médicos son transportados de forma segura, siguiendo todos los protocolos de manejo para productos médicos sensibles.",
      },
      {
        number: "04",
        title: "Entrega Confirmada",
        desc: "El paquete es entregado al paciente o destino y usted recibe confirmación de entrega.",
      },
    ],

    ctaBanner: {
      title: "¿Listo para Optimizar sus Entregas de Farmacia?",
      sub: "Únase a los proveedores de salud en Atlanta que confían en MEDSWIFT EXPRESS para un servicio de mensajería médica confiable y profesional.",
      btn: "Solicitar Cotización Hoy",
    },

    about: {
      badge: "Quiénes Somos",
      title: "Construido para la Salud. Construido en Confianza.",
      body1: "MEDSWIFT EXPRESS es un servicio de mensajería médica con sede en Atlanta, dedicado a una misión: garantizar que las recetas y suministros médicos lleguen a los pacientes de forma segura y a tiempo. Trabajamos directamente con farmacias, clínicas y proveedores de salud para gestionar el último tramo crítico de la cadena de suministro de salud.",
      body2: "Entendemos que lo que entregamos no es solo un paquete — es el medicamento de alguien, el cuidado de alguien. Por eso cada entrega se maneja con profesionalismo, discreción y urgencia.",
      mission: {
        title: "Nuestra Misión",
        text: "Ser el socio de mensajería médica más confiable en el área metropolitana de Atlanta — una entrega a la vez.",
      },
      values: [
        { icon: "🤝", title: "Confiabilidad", desc: "Cuando programa una entrega, ocurre. Mantenemos el rendimiento puntual como nuestro estándar principal." },
        { icon: "🔒", title: "Confidencialidad", desc: "Todas las entregas se manejan con plena conciencia de la privacidad del paciente y el cumplimiento médico." },
        { icon: "⚡", title: "Urgencia", desc: "Las necesidades médicas no esperan. Operamos con sentido de urgencia en cada entrega." },
        { icon: "🏆", title: "Profesionalismo", desc: "Nuestros conductores están capacitados, son corteses y representan su organización como parte de su equipo." },
      ],
      whyUs: {
        title: "Por qué las Farmacias Eligen MEDSWIFT",
        points: [
          "Dedicados a la salud — no una aplicación de entrega general",
          "Opciones el mismo día y programadas para adaptarse a su flujo de trabajo",
          "Conductores profesionales capacitados para el manejo médico sensible",
          "Comunicación en tiempo real y confirmación de entrega",
          "Servicio en el área metropolitana de Atlanta y comunidades cercanas",
          "Facturación por cheque o número de orden de compra para clientes empresariales",
        ],
      },
    },

    servicesPage: {
      badge: "Nuestros Servicios",
      title: "Soluciones Especializadas de Mensajería Médica",
      sub: "Cada servicio que ofrecemos está diseñado en torno a las demandas únicas de la industria de la salud — velocidad, seguridad y confiabilidad.",
      services: [
        {
          icon: "💊",
          title: "Entrega de Recetas",
          desc: "Nos asociamos con farmacias para entregar recetas de pacientes directamente a sus hogares o centros de cuidado. Este servicio es ideal para farmacias que buscan mejorar la comodidad del paciente y reducir los retiros no realizados.",
          tags: ["Disponible el mismo día", "Prueba de entrega", "Amigable con el paciente"],
        },
        {
          icon: "🩺",
          title: "Entrega de Suministros Médicos",
          desc: "Transportamos una amplia gama de suministros médicos — desde kits de cuidado de heridas y herramientas de diagnóstico hasta especímenes de laboratorio y equipo clínico. Nuestros conductores están capacitados para manejar materiales sensibles.",
          tags: ["Seguro para especímenes", "Cadena de custodia", "Embalaje seguro"],
        },
        {
          icon: "🚀",
          title: "Entrega el Mismo Día y Urgente",
          desc: "Cuando un paciente necesita medicación urgente o una clínica necesita suministros de inmediato, respondemos. Nuestro servicio de entrega urgente proporciona el tiempo de respuesta más rápido posible para artículos médicos urgentes.",
          tags: ["Despacho prioritario", "Respuesta rápida", "Tiempo crítico"],
        },
        {
          icon: "📅",
          title: "Rutas Programadas y Recurrentes",
          desc: "Configure horarios de entrega recurrentes — diarios, semanales o personalizados — para apoyar la base regular de pacientes de su farmacia o las necesidades de suministros de la clínica.",
          tags: ["Rutas semanales", "Programación personalizada", "Facturación predecible"],
        },
        {
          icon: "🏥",
          title: "Apoyo a Clínicas y Hospitales",
          desc: "Apoyamos clínicas ambulatorias, consultorios especializados e instalaciones hospitalarias menores con transporte entre instalaciones y entregas orientadas al paciente.",
          tags: ["Entre instalaciones", "Apoyo al alta", "Clínicas ambulatorias"],
        },
        {
          icon: "❄️",
          title: "Manejo Sensible a la Temperatura",
          desc: "Ciertos medicamentos y materiales biológicos requieren condiciones de temperatura específicas durante el transporte. Ofrecemos soluciones de manejo con conciencia de temperatura.",
          tags: ["Conciencia de cadena de frío", "Biológicos", "Insulina e inyectables"],
        },
      ],
      pricing: {
        title: "Precios Simples y Transparentes",
        sub: "Sin cargos sorpresa. La facturación se maneja mediante factura — pagadera por cheque o número de orden de compra para cuentas empresariales.",
        note: "Contáctenos para una cotización personalizada basada en su volumen de entregas, frecuencia y área de servicio.",
        cta: "Solicitar Cotización",
      },
    },

    howPage: {
      badge: "El Proceso",
      title: "Entrega Simple. Resultados Confiables.",
      sub: "Hemos diseñado nuestro proceso de entrega para ser lo más simple posible para farmacias y proveedores de salud, sin interrupciones en su flujo de trabajo.",
      steps: [
        {
          number: "01",
          title: "Envíe una Solicitud de Entrega",
          desc: "Use nuestro formulario en línea o llámenos directamente. Proporcione el nombre de su farmacia, ubicación de recogida, dirección de entrega e instrucciones especiales. Le responderemos rápidamente para confirmar los detalles.",
          detail: "Formulario en línea · Llamada telefónica · Correo electrónico",
        },
        {
          number: "02",
          title: "Confirmamos y Asignamos un Conductor",
          desc: "Una vez recibida su solicitud, confirmamos el horario de recogida y asignamos un conductor capacitado de MEDSWIFT a su pedido. Recibirá confirmación para saber exactamente cuándo esperarnos.",
          detail: "Opciones de recogida el mismo día o programadas",
        },
        {
          number: "03",
          title: "Recogida y Transporte Seguros",
          desc: "Su conductor llega a la hora programada, recoge los artículos y los transporta siguiendo todos los protocolos de manejo apropiados. Los artículos sensibles se transportan con embalaje y cuidado apropiados.",
          detail: "Manejo profesional · Cadena de custodia",
        },
        {
          number: "04",
          title: "Entrega y Confirmación",
          desc: "El paquete es entregado al paciente, instalación o destino. Usted recibe confirmación de entrega, brindándole a usted y a sus pacientes tranquilidad de que cada pedido se completó exitosamente.",
          detail: "Prueba de entrega · Notificación de entrega",
        },
      ],
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            q: "¿Qué áreas atienden?",
            a: "Principalmente servimos el área metropolitana de Atlanta y las comunidades circundantes. Contáctenos para confirmar cobertura de servicio para sus ubicaciones específicas.",
          },
          {
            q: "¿Cómo pago por las entregas?",
            a: "Los clientes empresariales son facturados mediante factura. El pago se acepta por cheque o número de orden de compra. No requerimos pago anticipado para cuentas establecidas.",
          },
          {
            q: "¿Puedo configurar entregas recurrentes?",
            a: "Sí — ofrecemos rutas programadas y recurrentes que se pueden personalizar a las necesidades de entrega diarias o semanales de su farmacia.",
          },
          {
            q: "¿Qué tan rápido pueden responder a un pedido urgente?",
            a: "La disponibilidad de entrega urgente y el mismo día depende de la disponibilidad del conductor y la distancia. Contáctenos directamente para solicitudes urgentes.",
          },
        ],
      },
    },

    quotePage: {
      badge: "Comenzar",
      title: "Solicitar Cotización de Entrega",
      sub: "Complete el formulario a continuación y un representante de MEDSWIFT EXPRESS se comunicará con usted dentro de un día hábil para confirmar detalles y precios.",
      form: {
        name: "Nombre Completo",
        namePh: "ej. María García",
        company: "Nombre de Farmacia / Organización",
        companyPh: "ej. Farmacia Riverside",
        phone: "Número de Teléfono",
        phonePh: "ej. (404) 555-0100",
        email: "Correo Electrónico",
        emailPh: "ej. pedidos@sufarmacia.com",
        pickup: "Dirección de Recogida",
        pickupPh: "Dirección completa",
        delivery: "Dirección de Entrega",
        deliveryPh: "Dirección completa o ciudad/área",
        serviceType: "Tipo de Servicio",
        serviceOptions: [
          "Seleccione un tipo de servicio",
          "Entrega de Recetas",
          "Entrega de Suministros Médicos",
          "Entrega el Mismo Día / Urgente",
          "Ruta Programada / Recurrente",
          "Apoyo a Clínica y Hospital",
          "Otro",
        ],
        frequency: "Frecuencia de Entrega",
        frequencyOptions: [
          "Seleccione frecuencia",
          "Entrega única",
          "Diaria",
          "Semanal",
          "Mensual",
          "Según sea necesario",
        ],
        notes: "Notas Adicionales",
        notesPh: "Instrucciones especiales de manejo, preferencias de horario de entrega u otros detalles...",
        submit: "Enviar Solicitud",
        submitting: "Enviando...",
        success: "¡Gracias! Su solicitud ha sido enviada. Nos comunicaremos dentro de un día hábil.",
        error: "Algo salió mal. Por favor intente de nuevo o llámenos al (757) 940-8468.",
      },
    },

    contactPage: {
      badge: "Contáctenos",
      title: "Nos Encantaría Escucharle",
      sub: "Ya sea que sea una farmacia, clínica o proveedor de salud, estamos listos para hablar sobre cómo MEDSWIFT EXPRESS puede apoyar sus necesidades de entrega.",
      info: {
        phone: "(757) 940-8468",
        email: "beatricenatasha99@gmail.com",
        location: "Área Metropolitana de Atlanta, GA",
        hours: "Lun–Vie: 8am–6pm · Sáb: 9am–2pm",
      },
      form: {
        name: "Nombre Completo",
        namePh: "Su nombre",
        email: "Correo Electrónico",
        emailPh: "Su correo electrónico",
        phone: "Número de Teléfono",
        phonePh: "Su número de teléfono",
        subject: "Asunto",
        subjectPh: "¿Cómo podemos ayudarle?",
        message: "Mensaje",
        messagePh: "Cuéntenos sobre sus necesidades de entrega...",
        submit: "Enviar Mensaje",
        submitting: "Enviando...",
        success: "¡Mensaje enviado! Nos comunicaremos con usted en breve.",
        error: "Algo salió mal. Por favor intente de nuevo o llámenos directamente.",
      },
    },

    footer: {
      tagline: "Servicios profesionales de mensajería médica para farmacias y proveedores de salud en todo Atlanta.",
      links: "Navegación",
      contact: "Contacto",
      legal: "© 2026 MEDSWIFT EXPRESS. Todos los derechos reservados.",
      serving: "Sirviendo el Área Metropolitana de Atlanta, GA",
    },
  },
};
