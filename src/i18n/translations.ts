export type Locale = "es" | "en";

export const translations = {
  es: {
    header: {
      home: "Inicio",
      about: "Sobre Mí",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      downloadCV: "Descargar CV",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Henrry Mendoza",
      title: "Desarrollador Full Stack",
      description:
        "Más de 5 años creando aplicaciones web escalables con Node.js, PHP y PostgreSQL. Especializado en APIs REST, Next.js y soluciones empresariales.",
      contactMe: "Contáctame",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      description:
        "Soy un Desarrollador Web con más de 5 años de experiencia como Full Stack. Estoy enfocado en el desarrollo de aplicaciones web, utilizando Node.js, PHP (Laravel, CodeIgniter, CakePHP) y PostgreSQL, creando APIs y soluciones escalables.",
      description2:
        "Desarrollé servicios del lado del servidor mediante API Routes de Next.js, centralizando la lógica de negocios y asegurando la manipulación de datos sensibles fuera del alcance del cliente. También construí una aplicación web integral utilizando Next.js y Shadcn para automatizar procesos operativos de un centro de gimnasio.",
      stats: {
        experience: "Años de Experiencia",
        technologies: "Tecnologías",
        projects: "Proyectos Completados",
      },
    },
    skills: {
      title: "Habilidades & Tecnologías",
      subtitle:
        "Tecnologías con las que trabajo día a día para construir soluciones robustas.",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de Datos",
      tools: "Herramientas",
    },
    experience: {
      title: "Experiencia Profesional",
      subtitle: "Mi trayectoria profesional en el desarrollo web.",
      present: "Presente",
    },
    projects: {
      title: "Proyectos",
      subtitle:
        "Una selección de proyectos en los que he trabajado recientemente.",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      comingSoon: "Próximamente",
    },
    contact: {
      title: "Contacto",
      subtitle:
        "¿Tienes un proyecto en mente? Me encantaría saber más. Envíame un mensaje.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito! Te responderé pronto.",
      error: "Hubo un error al enviar el mensaje. Intenta de nuevo.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      location: "Ubicación",
      whatsapp: "WhatsApp",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      madeWith: "Hecho con",
      and: "y",
    },
  },
  en: {
    header: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Henrry Mendoza",
      title: "Full Stack Developer",
      description:
        "5+ years building scalable web applications with Node.js, PHP, and PostgreSQL. Specialized in REST APIs, Next.js, and enterprise solutions.",
      contactMe: "Contact Me",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      description:
        "I'm a Web Developer with 5+ years of Full Stack experience. I'm focused on web application development using Node.js, PHP (Laravel, CodeIgniter, CakePHP), and PostgreSQL, creating APIs and scalable solutions.",
      description2:
        "I developed server-side services through Next.js API Routes, centralizing business logic and ensuring sensitive data handling outside the client's reach. I also built a comprehensive web application using Next.js and Shadcn to automate operational processes for a gym center.",
      stats: {
        experience: "Years of Experience",
        technologies: "Technologies",
        projects: "Completed Projects",
      },
    },
    skills: {
      title: "Skills & Technologies",
      subtitle:
        "Technologies I work with daily to build robust solutions.",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      tools: "Tools",
    },
    experience: {
      title: "Professional Experience",
      subtitle: "My professional journey in web development.",
      present: "Present",
    },
    projects: {
      title: "Projects",
      subtitle:
        "A selection of projects I've worked on recently.",
      viewProject: "View Project",
      viewCode: "View Code",
      comingSoon: "Coming Soon",
    },
    contact: {
      title: "Contact",
      subtitle:
        "Have a project in mind? I'd love to hear about it. Send me a message.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! I'll get back to you soon.",
      error: "There was an error sending the message. Please try again.",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Tell me about your project...",
      location: "Location",
      whatsapp: "WhatsApp",
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made with",
      and: "and",
    },
  },
} as const;

export type TranslationKeys = typeof translations.es;
