export type Language = "it" | "en";

export interface ProjectItem {
  id: string;
  title: string;
  tagline: {
    it: string;
    en: string;
  };
  description: {
    it: string;
    en: string;
  };
  tags: string[];
  githubUrl?: string;
  npmUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
  badge?: string;
  image?: string;
}

export interface TechItem {
  name: string;
  category: "languages" | "frontend" | "backend" | "devops";
  experience: string;
  description: {
    it: string;
    en: string;
  };
  iconName: string;
  highlight?: boolean;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Cristian Della Monica",
    role: {
      it: "Software Developer & Computer Science Student",
      en: "Software Developer & Computer Science Student",
    },
    email: "cristiandellamonica@gmail.com",
    github: "https://github.com/CriDM",
    linkedin: "https://www.linkedin.com/in/cristian-della-monica/",
    location: {
      it: "Cava de' Tirreni (SA), Italia",
      en: "Cava de' Tirreni (SA), Italy",
    },
  },
  hero: {
    badge: {
      it: "Disponibile per nuove opportunità & progetti",
      en: "Available for new projects & opportunities",
    },
    roles: {
      it: [
        "Software Developer",
        "Frontend & Full Stack Dev",
        "Appassionato di Reti & Sistemi",
        "Studente di Informatica",
      ],
      en: [
        "Software Developer",
        "Frontend & Full Stack Dev",
        "Systems & Networking Enthusiast",
        "Computer Science Student",
      ],
    },
    description: {
      it: "Creo software moderno, dai protocolli di rete a basso livello alle applicazioni web reattive e performanti. Focalizzato su codice pulito, architetture robuste ed esperienze utente curate nei dettagli.",
      en: "Building modern software from low-level network protocols to responsive, high-performance web applications. Focused on clean code, robust architecture, and polished user experiences.",
    },
    ctaProjects: {
      it: "Esplora i Progetti",
      en: "Explore Projects",
    },
    ctaContact: {
      it: "Contattami",
      en: "Get in Touch",
    },
    ctaCopyEmail: {
      it: "Copia Email",
      en: "Copy Email",
    },
  },
  about: {
    title: {
      it: "Chi Sono",
      en: "About Me",
    },
    subtitle: {
      it: "Sviluppatore con una forte passione per l'ingegneria del software e la risoluzione di problemi complessi.",
      en: "Developer with a strong passion for software engineering and solving complex problems.",
    },
    bioParagraphs: {
      it: [
        "Attualmente frequento il corso di Laurea in Informatica presso l'Università degli Studi di Salerno. Ho una solida formazione scientifica e matematica unita a un profondo interesse per le tecnologie emergenti, i sistemi distribuiti e l'architettura software.",
        "Le mie esperienze precedenti, sia in contesti lavorativi nel settore informatico che a contatto con le persone, mi hanno permesso di sviluppare forti capacità analitiche, autonomia, problem solving e una comunicazione chiara ed efficace in team multidisciplinari.",
        "Nel mio percorso ho approfondito sia lo sviluppo applicativo ad alto livello (React, Next.js, TypeScript, FastAPI) sia l'interazione a basso livello con hardware e protocolli di rete (IPP, CUPS, multithreading C++, MQTT, IoT). Mi considero una persona curiosa, determinata e orientata all'apprendimento continuo.",
      ],
      en: [
        "I am currently pursuing a Bachelor's degree in Computer Science at the University of Salerno. I have a solid scientific and mathematical foundation combined with a deep curiosity for emerging technologies, distributed systems, and modern software architecture.",
        "My previous experiences, both in software environments and interpersonal roles, helped me cultivate sharp analytical thinking, high autonomy, problem-solving abilities, and strong team communication.",
        "Throughout my journey, I have worked across both high-level modern web stacks (React, Next.js, TypeScript, FastAPI) and low-level system integrations with network protocols (IPP, CUPS, C++ multithreading, MQTT, IoT). I am proactive, detail-oriented, and constantly seeking new challenges.",
      ],
    },
    highlights: [
      {
        value: "CS Student",
        label: {
          it: "Università di Salerno",
          en: "University of Salerno",
        },
      },
      {
        value: "Full-Stack & Systems",
        label: {
          it: "Frontend, Backend & Reti",
          en: "Frontend, Backend & Systems",
        },
      },
      {
        value: "Open Source",
        label: {
          it: "NPM Package & GitHub Repos",
          en: "NPM Packages & GitHub Repos",
        },
      },
    ],
  },
  skillsSection: {
    title: {
      it: "Tecnologie & Competenze",
      en: "Tech Stack & Skills",
    },
    subtitle: {
      it: "Gli strumenti, linguaggi e framework con cui progetto e sviluppo quotidianamente.",
      en: "The tools, languages, and frameworks I use to architect and build software.",
    },
    categories: {
      languages: {
        title: {
          it: "Linguaggi di Programmazione",
          en: "Programming Languages",
        },
        items: [
          { name: "TypeScript", desc: "Type-safe modern web & backend development" },
          { name: "JavaScript", desc: "ES6+, async flows & browser APIs" },
          { name: "Python", desc: "FastAPI, DICOM processing, automation & scripts" },
          { name: "C++", desc: "Multithreading, GMP library & high performance" },
          { name: "Java", desc: "OOP, event-driven architectures & Swing" },
          { name: "SQL", desc: "Relational queries, schema design & migrations" },
        ],
      },
      frontend: {
        title: {
          it: "Frontend & UI Engineering",
          en: "Frontend & UI Engineering",
        },
        items: [
          { name: "React", desc: "Component architecture, hooks & custom state management" },
          { name: "Next.js", desc: "Server-side rendering, API routes & modern routing" },
          { name: "Tailwind CSS", desc: "Custom design systems, responsive UI & animations" },
          { name: "Vite", desc: "Fast bundling, HMR & modern tooling configuration" },
          { name: "Framer Motion", desc: "Smooth micro-animations & layout transitions" },
          { name: "HTML5 / CSS3", desc: "Semantic markup, CSS Grid & Flexbox, accessibility" },
        ],
      },
      backend: {
        title: {
          it: "Backend, Reti & Protocolli",
          en: "Backend, Networks & Protocols",
        },
        items: [
          { name: "FastAPI", desc: "Async Python microservices & OpenAPI documentation" },
          { name: "Node.js / Express", desc: "RESTful endpoints & asynchronous services" },
          { name: "NestJS", desc: "Modular enterprise TypeScript backends" },
          { name: "IPP & CUPS", desc: "Internet Printing Protocol & network print daemon" },
          { name: "MQTT & IoT", desc: "Publish/subscribe messaging & hardware telemetry" },
          { name: "REST APIs", desc: "Clean contract design, JWT auth & validation" },
        ],
      },
      devops: {
        title: {
          it: "Database, Sistemi & Strumenti",
          en: "Databases, Systems & Tools",
        },
        items: [
          { name: "PostgreSQL", desc: "Relational persistence & optimized queries" },
          { name: "Prisma ORM", desc: "Type-safe database migrations & schema management" },
          { name: "Git & GitHub", desc: "Version control, branching & PR workflows" },
          { name: "Docker", desc: "Containerized environments & reproducible setups" },
          { name: "Linux / Raspberry Pi", desc: "Headless servers, systemd & bash scripting" },
          { name: "SQLite", desc: "Lightweight embedded storage & testing" },
        ],
      },
    },
  },
  projects: [
    {
      id: "ipp-browser",
      title: "IPP-Browser",
      badge: "NPM Package",
      isFeatured: true,
      tagline: {
        it: "Libreria NPM per il protocollo IPP direttamente dal browser",
        en: "NPM library bringing Internet Printing Protocol directly into browsers",
      },
      description: {
        it: "Potente libreria TypeScript pubblicata su NPM che porta le funzionalità dell'Internet Printing Protocol (IPP) nativamente nel browser. Permette di comunicare ed inviare stampe direttamente a dispositivi di rete senza richiedere plugin esterni o software intermediario.",
        en: "A published NPM TypeScript library bringing native Internet Printing Protocol (IPP) capabilities directly to web browsers. Enables web applications to discover and print to network-compatible devices without third-party plugins or desktop software.",
      },
      tags: ["TypeScript", "NPM Package", "IPP Protocol", "Browser APIs", "Networking"],
      npmUrl: "https://www.npmjs.com/package/@digasystems/ipp-browser",
      githubUrl: "https://github.com/CriDM",
    },
    {
      id: "print-server",
      title: "Self-Hosted Print Server",
      badge: "FastAPI + CUPS",
      isFeatured: true,
      tagline: {
        it: "Server di stampa autonomo con discovery IPP e gestione remota",
        en: "Self-hosted print server with IPP network discovery & remote control",
      },
      description: {
        it: "Soluzione self-hosted basata su FastAPI, daemon CUPS e protocollo IPP per la gestione, monitoraggio e discovery automatico delle stampanti sulla rete locale con interfaccia di controllo web reattiva.",
        en: "A self-hosted print server built with FastAPI, CUPS printing daemon, and IPP network discovery for seamless local network printer management and remote print job dispatching.",
      },
      tags: ["Python", "FastAPI", "CUPS", "IPP", "Linux / Network"],
      githubUrl: "https://github.com/CriDM/print-server",
    },
    {
      id: "dicom-tools",
      title: "DICOM 3D Tools",
      badge: "Medical Imaging",
      tagline: {
        it: "Estrazione metadati ed elaborazione 2D/3D di immagini mediche",
        en: "Metadata extraction & 2D/3D medical imaging visualization",
      },
      description: {
        it: "Strumenti in Python dedicati all'imaging medico: estrazione metadati clinici da file DICOM, elaborazione delle slice radiologiche e ricostruzione volumetrica 3D.",
        en: "Python suite engineered for medical imaging: clinical metadata extraction from DICOM files, slice processing, and 3D volumetric rendering.",
      },
      tags: ["Python", "Medical DICOM", "3D Visualization", "NumPy", "Data Science"],
      githubUrl: "https://github.com/CriDM/dicom-tools-python",
    },
    {
      id: "prime-set-research",
      title: "Prime Set Research C++",
      badge: "High Performance",
      tagline: {
        it: "Generatore multithread di numeri primi con libreria GMP",
        en: "Multithreaded prime generator with GMP & twin primes support",
      },
      description: {
        it: "Generatore multiscala di numeri primi sviluppato in C++ moderno ad alte prestazioni. Supporta calcolo multithreading parallelo, integrazione con libreria ad altissima precisione GMP e ricerca di numeri primi gemelli.",
        en: "High-performance multiscale prime number generator in modern C++. Features multithreaded computation, arbitrary-precision arithmetic with GNU MP (GMP), and twin prime search algorithms.",
      },
      tags: ["C++", "Multithreading", "GMP", "Algorithms", "Concurrency"],
      githubUrl: "https://github.com/CriDM/prime-set-research-cpp",
    },
    {
      id: "traffic-simulator",
      title: "Traffic Simulator TP2",
      badge: "OOP & Event-Driven",
      tagline: {
        it: "Simulatore di traffico a eventi con interfaccia Java Swing",
        en: "Event-driven traffic simulator with pluggable Java Swing GUI",
      },
      description: {
        it: "Simulatore di traffico a eventi scritto in Java: modella strade, incroci e veicoli intelligenti. Sviluppato con architettura estendibile a factory, pattern builder e doppia modalità (GUI Swing e batch da console).",
        en: "Event-driven traffic simulation engine implemented in Java. Models road networks, junctions, and dynamic vehicles using extensible OOP design patterns (factories, builders) with both Swing GUI and console modes.",
      },
      tags: ["Java", "OOP Patterns", "Event-Driven", "Swing GUI", "Simulation"],
      githubUrl: "https://github.com/CriDM/traffic-simulator-tp2",
    },
    {
      id: "preventivatore",
      title: "Preventivatore Desktop",
      badge: "Desktop Automation",
      tagline: {
        it: "Applicazione desktop Python per preventivi e PDF professionali",
        en: "Python desktop app for automated quotes & structured PDF generation",
      },
      description: {
        it: "Applicazione desktop per la compilazione rapida di preventivi commerciali con dati aziendali personalizzati, calcolo automatico dei totali e generazione di documenti PDF pronti per il cliente.",
        en: "Python desktop utility to streamline commercial quotation workflows with custom company templates, automated calculations, and structured PDF generation.",
      },
      tags: ["Python", "Desktop App", "PDF Generation", "Automation"],
      githubUrl: "https://github.com/CriDM/preventivatore",
    },
  ],
  contact: {
    title: {
      it: "Parliamo di un Progetto",
      en: "Let's Connect",
    },
    subtitle: {
      it: "Hai un'idea, una proposta di lavoro o vuoi scambiare due chiacchiere sulle tecnologie? La mia casella è sempre aperta.",
      en: "Have a project idea, an opportunity, or want to discuss technology? Feel free to reach out anytime.",
    },
    copiedNotification: {
      it: "Indirizzo email copiato negli appunti!",
      en: "Email address copied to clipboard!",
    },
  },
};
