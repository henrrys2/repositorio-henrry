export interface Project {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "erp-system",
    title: {
      es: "Sistema ERP Empresarial",
      en: "Enterprise ERP System",
    },
    description: {
      es: "API REST completa para gestión empresarial incluyendo facturación, inventario y reportes. Construida con Next.js, Prisma y PostgreSQL.",
      en: "Complete REST API for business management including billing, inventory and reporting. Built with Next.js, Prisma and PostgreSQL.",
    },
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Node.js"],
    featured: true,
  },
  {
    id: "gym-app",
    title: {
      es: "App de Gestión de Gimnasio",
      en: "Gym Management App",
    },
    description: {
      es: "Aplicación web integral para automatizar procesos operativos de un centro de gimnasio. Interfaz moderna con Next.js y Shadcn UI.",
      en: "Comprehensive web application to automate operational processes for a gym center. Modern interface with Next.js and Shadcn UI.",
    },
    technologies: ["Next.js", "Shadcn UI", "TypeScript", "PostgreSQL"],
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: {
      es: "Plataforma E-Commerce",
      en: "E-Commerce Platform",
    },
    description: {
      es: "Tienda online completa con integración de pasarelas de pago (PayPal, MercadoPago). Desarrollada con Laravel y diseño responsivo.",
      en: "Complete online store with payment gateway integration (PayPal, MercadoPago). Developed with Laravel and responsive design.",
    },
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "CSS"],
    featured: true,
  },
];
