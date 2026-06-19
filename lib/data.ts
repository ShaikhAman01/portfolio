export const profile = {
  name: "Shaikh Aman",
  brand: "SHAIKH_AMAN",
  role: "Fullstack Developer",
  focus: "Backend-leaning fullstack developer",
  status: "available_for_hire",
  location: "Hyderabad",
  email: "amanshaikh0025@gmail.com",
  terminal: "ssh aman@remote.terminal",
  resumeUrl: "https://drive.google.com/uc?export=download&id=1UOF2R32ly093ZI2MDQ7zqp9KK_S41pEY",
  handle: "shaikhaman01",
  github: "https://github.com/ShaikhAman01",
  linkedin: "https://www.linkedin.com/in/shaikhaman01",
  x: "https://x.com/shaikhaman01",
  heroDescription:
    "Backend-leaning fullstack developer building reliable web systems with clean APIs, production-minded data models, and fast user interfaces.",
  contactDescription:
    "Open to backend, fullstack, and product engineering opportunities where I can build reliable APIs, admin systems, and real-time features."
};

export const heroStack = ["Next.js", "React", "Node.js", "PostgreSQL"];

export const projects = [
  {
    slug: "intelliquery",
    title: "INTELLIQUERY",
    version: "v1.0.0",
    status: "AI_SQL_AGENT",
    description:
      "A split-architecture fullstack agentic engine that safely connects to relational databases to analyze schema topology trees and execute automated text-to-SQL workflows via conversational paths.",
    longDescription:
      "A secure, read-only multi-service platform using Next.js on the frontend and FastAPI on the backend. Managed via unified Vercel service structures, bypassing CORS, and providing live execution sandboxes.",
    tags: ["NEXT.JS", "FASTAPI", "POSTGRESQL", "AI_AGENT"],
    image: "/images/intelliquery.png",
    darkImage: "/images/intelliquery.png",
    heroImage: "/images/intelliquery.png",
    heroDarkImage: "/images/intelliquery.png",
    action: "VIEW_CASE_STUDY",
    sourceUrl: "https://github.com/ShaikhAman01/Intelliquery",
    liveUrl: "https://intelliquery.shaikhaman.dev", 
    docsUrl: "#docs",
    metrics: [
      ["ROUTING", "VERCEL_SERVICE"],
      ["BACKEND", "FASTAPI"],
      ["FRONTEND", "NEXT.JS"],
      ["ENGINE", "AGENTIC_AI"]
    ],
    stack: [
      "APP:NEXT.JS",
      "API:FASTAPI",
      "DB:POSTGRESQL_NEON",
      "AUTH:BETTER_AUTH",
      "AI:OPENAI_LLM"
    ],
    about: [
      "Intelliquery bridges structural database models with non-technical operations teams by executing safe, conversationally generated analytic read runs.",
      "The architecture is mapped cleanly as a mono-repository split project, taking full advantage of Vercel’s multi-project services to run Next.js alongside asynchronous Python runtimes seamlessly."
    ],
    challenges: [
      "Synchronizing continuous edge environment secrets with dynamic multi-service pipelines.",
      "Parsing client-side search parameter extraction tokens across complex Next.js pre-rendering static server passes without raising CSR-bailout container faults."
    ],
    learnings: [
      "Decoupling dynamic URL structures to use empty string origins allows multi-service modules to match host names implicitly across staging and production.",
      "Isolating state tracking logic behind explicit parent routers ensures robust execution sequences."
    ]
  },
  {
    slug: "inscribe",
    title: "INSCRIBE",
    version: "v1.0.0",
    status: "BLOG_PLATFORM",
    description:
      "A full-stack blogging platform built with TypeScript, React, Cloudflare Workers, PostgreSQL, and Prisma ORM.",
    longDescription:
      "A production-style blogging platform with JWT authentication, Zod validation, optimized relational data modeling, and a serverless backend on Cloudflare Workers.",
    tags: ["TYPESCRIPT", "REACT", "CLOUDFLARE", "PRISMA"],
    image: "/images/inscribe.png",
    darkImage: "/images/inscribe.png",
    heroImage: "/images/inscribe.png",
    heroDarkImage: "/images/inscribe.png",
    action: "VIEW_CASE_STUDY",
    sourceUrl: "https://github.com/ShaikhAman01/inscribe",
    liveUrl: "https://inscribe.shaikhaman.dev",
    docsUrl: "#docs",
    metrics: [
      ["INVALID_REQUESTS", "-35%"],
      ["AUTH", "JWT"],
      ["VALIDATION", "ZOD"],
      ["DATABASE", "POSTGRESQL"]
    ],
    stack: [
      "APP:REACT",
      "LANG:TYPESCRIPT",
      "API:CLOUDFLARE_WORKERS",
      "DB:POSTGRESQL",
      "ORM:PRISMA",
      "AUTH:JWT",
      "VALIDATION:ZOD"
    ],
    about: [
      "Inscribe is a full-stack blog platform built to practice production-style backend patterns while keeping the writing experience fast and simple.",
      "The backend uses Cloudflare Workers with PostgreSQL and Prisma ORM, with JWT authentication and Zod validation to keep request handling predictable and secure."
    ],
    challenges: [
      "Designing an optimized relational schema for posts, authors, and authenticated user flows.",
      "Reducing invalid requests through strict validation before data reaches the database layer.",
      "Keeping the serverless API structure clean enough to extend with comments, tags, and analytics later."
    ],
    learnings: [
      "Validation and auth logic should be explicit, small, and easy to test.",
      "Good database structure makes frontend work simpler because the API becomes more predictable.",
      "Serverless backends reward careful boundaries between routing, validation, and persistence."
    ]
  },
  {
    slug: "quantum",
    title: "QUANTUM",
    version: "v1.0.0",
    status: "ECOMMERCE_APP",
    description:
      "A scalable e-commerce application with React, Firebase, Tailwind CSS, authentication, and an admin panel for CRUD operations.",
    longDescription:
      "A commerce platform focused on product management, authentication, and responsive shopping flows, with Firebase handling auth and data operations.",
    tags: ["REACT", "FIREBASE", "TAILWIND"],
    image: "/images/quantum.png",
    darkImage: "/images/quantum.png",
    heroImage: "/images/quantum.png",
    heroDarkImage: "/images/quantum.png",
    action: "EXPLORE_BUILD",
    sourceUrl: "https://github.com/ShaikhAman01/Quantum-e-commerce",
    liveUrl: "https://quantum.shaikhaman.dev",
    docsUrl: "#docs",
    metrics: [
      ["ADMIN_PANEL", "CRUD"],
      ["AUTH", "FIREBASE"],
      ["UI", "TAILWIND"],
      ["STATUS", "TEMP_DATA"]
    ],
    stack: ["APP:REACT", "STYLE:TAILWIND", "AUTH:FIREBASE", "DATA:FIRESTORE", "ADMIN:CRUD"],
    about: [
      "Quantum is an e-commerce application built around a clean product browsing experience and an admin panel for managing catalog data.",
      "The current project details are temporary, but the implementation direction emphasizes scalable UI structure, authentication, and maintainable admin workflows."
    ],
    challenges: [
      "Creating a simple admin flow for product creation, updates, and deletes.",
      "Keeping product state consistent between the storefront and admin panel.",
      "Maintaining a responsive visual system across product grids, detail views, and checkout states."
    ],
    learnings: [
      "Admin workflows need clear empty states, validation, and fast feedback.",
      "Firebase is useful for rapid product iteration when the data model is still evolving.",
      "Tailwind makes repeated commerce layouts easier to tune once spacing rules are consistent."
    ]
  },
  // {
  //   slug: "flashpay",
  //   title: "FLASHPAY",
  //   version: "v0.8.0",
  //   status: "PAYMENT_APP",
  //   description:
  //     "A secure payment application using React and Node.js with real-time transaction handling, validation, and resilient error states.",
  //   longDescription:
  //     "A payment application prototype focused on secure flows, real-time transaction updates, and validation-driven reliability across transfer operations.",
  //   tags: ["REACT", "NODE.JS", "REALTIME"],
  //   image: "/images/hyper-card.png",
  //   darkImage: "/images/hyper-card.png",
  //   heroImage: "/images/hyper-hero-light.png",
  //   heroDarkImage: "/images/hyper-hero-dark.png",
  //   action: "VIEW_FLOW",
  //   sourceUrl: "https://github.com/ShaikhAman01",
  //   docsUrl: "#docs",
  //   metrics: [
  //     ["FAILED_TXNS", "-20%"],
  //     ["BACKEND", "NODE.JS"],
  //     ["UPDATES", "REALTIME"],
  //     ["VALIDATION", "ENFORCED"]
  //   ],
  //   stack: ["APP:REACT", "API:NODE.JS", "REALTIME:WEBSOCKETS", "VALIDATION:ZOD", "STATE:TRANSACTIONS"],
  //   about: [
  //     "FlashPay is a secure payment application prototype built to handle transaction flows with strong validation and clear error recovery.",
  //     "The project emphasizes real-time feedback, backend validation, and defensive UI states so users understand what is happening during transfers."
  //   ],
  //   challenges: [
  //     "Representing transaction states clearly while the backend processes updates.",
  //     "Reducing failed transactions through stronger validation and predictable error messages.",
  //     "Separating UI concerns from payment-flow logic so the codebase remains maintainable."
  //   ],
  //   learnings: [
  //     "Payment interfaces need calm, unambiguous states more than decorative UI.",
  //     "Error handling is part of the product experience, not just backend hygiene.",
  //     "Real-time updates are most useful when paired with strict validation and recovery paths."
  //   ]
  // }
];

export const skills = [
  ["FRONTEND", "React"],
  ["FRAMEWORK", "Next.js"],
  ["LANGUAGE", "TypeScript"],
  ["RUNTIME", "Node.js"],
  ["DATABASE", "PostgreSQL"],
  ["ORM", "Prisma ORM"],
  ["STYLE", "Tailwind CSS"],
  ["REALTIME", "WebSockets"],
  ["CACHE", "Redis"],
  ["EDGE", "Cloudflare Workers"],
  ["TOOL", "Docker"],
  ["TOOL", "Git"],
  ["LANGUAGE", "Java"],
  ["LANGUAGE", "Python"],
  ["BACKEND", "FastAPI"]
];

export const history = [
  {
    role: "PRODUCT DEVELOPER INTERN",
    org: "URBANLOOP",
    date: "MAR 2025 - AUG 2025",
    body: "Scaled a backend toward production readiness using Node.js, Express.js, PostgreSQL, and Prisma ORM while improving uptime, API response time, and maintainability.",
    highlights: [
      "Designed a secure admin panel with role-based access control, reducing manual errors by 30%.",
      "Optimized RESTful APIs with JWT authentication, improving response time by 25%.",
      "Integrated WebSocket-based communication, boosting engagement by 40%.",
      "Refactored the codebase to reduce technical debt and bug reports by 15%."
    ],
    links: [
      { label: "DRIVER_APP (ANDROID)", url: "https://play.google.com/store/apps/details?id=com.vamsi98.urbanloop_mobile" },
      { label: "USER_APP (IOS/ANDROID)", url: "https://apps.apple.com/in/app/urbanloop-get-instant-rides/id6748720148" }
    ]
  }
];
