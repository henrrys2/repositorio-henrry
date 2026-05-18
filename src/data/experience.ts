export interface Experience {
  company: string;
  role: {
    es: string;
    en: string;
  };
  type: {
    es: string;
    en: string;
  };
  location: string;
  startDate: string;
  endDate: string | null;
  description: {
    es: string[];
    en: string[];
  };
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Desarrollos San Cirilo SPA",
    role: {
      es: "Desarrollador Web",
      en: "Web Developer",
    },
    type: {
      es: "Remoto",
      en: "Remote",
    },
    location: "Santiago, Chile",
    startDate: "2021-06",
    endDate: "2026-05",
    description: {
      es: [
        "Participación en la migración de CakePHP 1.3 a CakePHP 4, asegurando compatibilidad, estabilidad y mejoras en la arquitectura.",
        "Desarrollé y mantuve APIs REST en Next.js (Node.js, TypeScript y Prisma) y PostgreSQL para aplicaciones ERP.",
        "Configuración del servidor, deploy y administración de entornos productivos basados en Linux (CentOS).",
        "Gestión de actualización de dependencias y resolución de problemas críticos en proyectos legados.",
        "Administración y ejecución de tareas programadas (cronjobs), asegurando continuidad operativa.",
        "Elaboración de reportes ad-hoc con consultas SQL avanzadas.",
        "Implementación de una API de autenticación segura entre sistemas.",
      ],
      en: [
        "Participated in migration from CakePHP 1.3 to CakePHP 4, ensuring compatibility, stability and architecture improvements.",
        "Developed and maintained REST APIs in Next.js (Node.js, TypeScript and Prisma) and PostgreSQL for ERP applications.",
        "Server configuration, deployment and administration of production environments based on Linux (CentOS).",
        "Managed dependency updates and resolution of critical issues in legacy projects.",
        "Administration and execution of scheduled tasks (cronjobs), ensuring operational continuity.",
        "Creation of ad-hoc reports with advanced SQL queries.",
        "Implementation of a secure authentication API between systems.",
      ],
    },
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "CakePHP",
      "PHP",
      "Linux",
      "CentOS",
    ],
  },
  {
    company: "Innovahora S.A.C",
    role: {
      es: "Desarrollador Web",
      en: "Web Developer",
    },
    type: {
      es: "Híbrido",
      en: "Hybrid",
    },
    location: "Ilo, Perú",
    startDate: "2020-11",
    endDate: "2021-06",
    description: {
      es: [
        "Desarrollo y mantenimiento de soluciones web para clientes extranjeros: eCommerce, ERPs y plataformas administrativas.",
        "Desarrollo frontend a partir de diseños en PSD, implementando interfaces responsivas con HTML, CSS y JavaScript.",
        "Desarrollo completo de tiendas online con CodeIgniter y Laravel.",
        "Integración de pasarelas de pago: PayPal, Tunki y MercadoPago.",
        "Mantenimiento backend y frontend en sistemas con Node.js y React.",
        "Integración con la API de SUNAT para facturación electrónica en un ERP del sector salud.",
      ],
      en: [
        "Development and maintenance of web solutions for foreign clients: eCommerce, ERPs and administrative platforms.",
        "Frontend development from PSD designs, implementing responsive interfaces with HTML, CSS and JavaScript.",
        "Complete development of online stores with CodeIgniter and Laravel.",
        "Payment gateway integration: PayPal, Tunki and MercadoPago.",
        "Backend and frontend maintenance in Node.js and React systems.",
        "Integration with SUNAT API for electronic invoicing in a healthcare ERP.",
      ],
    },
    technologies: [
      "Laravel",
      "CodeIgniter",
      "PHP",
      "Node.js",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "MySQL",
    ],
  },
];
