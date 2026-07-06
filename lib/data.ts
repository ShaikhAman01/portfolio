export const profile = {
  name: "Shaikh Aman",
  brand: "SHAIKH_AMAN",
  role: "Fullstack Developer",
  focus: "Backend-leaning fullstack developer",
  status: "available_for_hire",
  location: "Hyderabad",
  email: "amanshaikh0025@gmail.com",
  terminal: "ssh aman@remote.terminal",
  resumeUrl: "/Shaikh_Aman_Resume.pdf",
  handle: "shaikhaman01",
  github: "https://github.com/ShaikhAman01",
  linkedin: "https://www.linkedin.com/in/shaikhaman01",
  x: "https://x.com/shaikhaman01",
  heroDescription:
    "Backend-leaning fullstack developer building reliable web systems — clean APIs, production-minded data models, and fast user interfaces.",
  contactDescription:
    "Open to backend, fullstack, and product engineering roles. If you're hiring — or just want to talk through one of these systems — my inbox is open."
};

export const heroStack = ["Next.js", "React", "Node.js", "PostgreSQL"];

export const projects = [
  {
    slug: "intelliquery",
    title: "INTELLIQUERY",
    version: "v1.0.0",
    status: "AI_SQL_AGENT",
    description:
      "An AI data assistant that turns plain-English questions into safe, validated SQL. Connects to five database engines, executes everything read-only, and returns charts plus insights grounded in real statistics — never hallucinated numbers.",
    longDescription:
      "A Next.js + FastAPI platform that lets non-technical users query relational databases in plain English, built on a template-first SQL pipeline with an OpenAI-to-Gemini fallback and layered safety checks.",
    tags: ["NEXT.JS", "FASTAPI", "POSTGRESQL", "AI_PIPELINE"],
    image: "/images/intelliquery.png",
    darkImage: "/images/intelliquery.png",
    heroImage: "/images/intelliquery.png",
    heroDarkImage: "/images/intelliquery.png",
    action: "VIEW_CASE_STUDY",
    sourceUrl: "https://github.com/ShaikhAman01/Intelliquery",
    liveUrl: "https://intelliquery.shaikhaman.dev",
    docsUrl: "https://app.notion.com/p/amanshaikh/PROJECT_DOCUMENTATION-39326719f3cc803ab075e9aa5d23696d",
    metrics: [
      ["DB_ENGINES", "5"],
      ["EXECUTION", "READ_ONLY"],
      ["SQL_GEN", "TEMPLATE+LLM"],
      ["CACHING", "TTL+LRU"]
    ],
    stack: [
      "APP:NEXT.JS",
      "API:FASTAPI",
      "DB:POSTGRESQL",
      "AUTH:BETTER_AUTH",
      "AI:OPENAI+GEMINI",
      "NLP:SPACY"
    ],
    about: [
      "IntelliQuery lets people who can't write SQL still get answers from a database. Connect PostgreSQL, MySQL, SQL Server, SQLite, or CockroachDB, ask something like \"top 10 customers by revenue last month\", and get validated SQL, live results, a chart, and an AI summary grounded in real statistics.",
      "Common questions are answered by a deterministic template engine with zero LLM tokens; the rest go through a schema-aware LLM chain (OpenAI with Gemini fallback). Every query passes a SELECT-only validator and runs in a read-only transaction with timeouts and row caps."
    ],
    challenges: [
      "Containing hallucination: prompts are grounded in the real schema, and a repair pass fixes queries that reference tables or columns that don't exist.",
      "One auth across two runtimes: Better Auth creates sessions in Next.js, and FastAPI validates the same tokens against a shared PostgreSQL.",
      "Cache correctness: schema changes invalidate cached SQL, failing queries evict themselves, and empty results are never cached."
    ],
    learnings: [
      "Trustworthy AI features need verification around the model, not just better prompts.",
      "Deterministic fast paths cut more cost and latency than any prompt tuning did.",
      "Layered defenses work: each check catches what the previous one misses."
    ]
  },
  {
    slug: "pixelplayground",
    title: "PIXELPLAYGROUND",
    version: "v1.0.0",
    status: "EDGE_ARCADE",
    description:
      "A full-stack browser arcade — six mini-games plus a lofi chill mode — backed by Cloudflare Workers and D1. Guest-first auth, server-validated scores, and cheat-resistant leaderboards.",
    longDescription:
      "Six single-player games with a real edge backend: Hono on Cloudflare Workers, D1 (SQLite) with Drizzle ORM, JWT auth, and Zod-validated score submission. Every game works fully offline.",
    tags: ["NEXT.JS", "CLOUDFLARE_WORKERS", "HONO", "D1_SQLITE"],
    image: "/images/pixelplayground.png",
    darkImage: "/images/pixelplayground.png",
    heroImage: "/images/pixelplayground.png",
    heroDarkImage: "/images/pixelplayground.png",
    action: "VIEW_CASE_STUDY",
    sourceUrl: "https://github.com/ShaikhAman01/PixelPlayground",
    liveUrl: "https://pixelplayground.shaikhaman.dev",
    docsUrl: "https://app.notion.com/p/amanshaikh/TECHNICAL_DOCUMENTATION-39526719f3cc80c896f6e74a230477ab",
    metrics: [
      ["GAMES", "6"],
      ["BACKEND", "EDGE_WORKERS"],
      ["AUTH", "GUEST_FIRST"],
      ["BUNDLES", "PER_GAME"]
    ],
    stack: [
      "APP:NEXT.JS",
      "API:HONO_WORKERS",
      "DB:D1_SQLITE",
      "ORM:DRIZZLE",
      "STATE:ZUSTAND",
      "VALIDATION:ZOD"
    ],
    about: [
      "PixelPlayground looks like a cozy game site, but the engineering is underneath. There is no login wall: a guest account is created silently on first visit, and upgrading to a real account later keeps every score, stat, and streak.",
      "Scoring is server-authoritative. The Worker validates each submission against per-game plausibility rules, computes streaks itself so they can't be faked, and keeps leaderboards as simple indexed queries."
    ],
    challenges: [
      "bcrypt blew through the Workers CPU budget, so password hashing moved to PBKDF2 via the WebCrypto API.",
      "One route shipped all six game bundles at once; per-game code splitting cut each game to its own ~24-44 KB chunk.",
      "A shared store caused double score submissions; fixed by resetting it on unmount and submitting only on the game engine's verdict."
    ],
    learnings: [
      "Best practice is contextual: edge constraints made bcrypt the wrong answer.",
      "Competitive values like streaks belong on the server, never trusted from the client.",
      "Fire-and-forget persistence keeps games playable even when the network isn't."
    ]
  },
  {
    slug: "inscribe",
    title: "INSCRIBE",
    version: "v1.0.0",
    status: "BLOG_PLATFORM",
    description:
      "A Medium-style blogging platform with a rich-text editor, tags, likes, comments, and one-click AI post summaries — served from Cloudflare's edge.",
    longDescription:
      "A React SPA backed by Hono on Cloudflare Workers, PostgreSQL via Prisma Accelerate, and JWT auth, with a shared Zod schema package published to npm.",
    tags: ["REACT", "HONO", "CLOUDFLARE", "PRISMA"],
    image: "/images/inscribe.png",
    darkImage: "/images/inscribe.png",
    heroImage: "/images/inscribe.png",
    heroDarkImage: "/images/inscribe.png",
    action: "VIEW_CASE_STUDY",
    sourceUrl: "https://github.com/ShaikhAman01/inscribe",
    liveUrl: "https://inscribe.shaikhaman.dev",
    docsUrl: "https://app.notion.com/p/amanshaikh/Inscribe-39526719f3cc80e3977ec4c2a543219f",
    metrics: [
      ["AI_SUMMARIES", "WORKERS_AI"],
      ["VALIDATION", "SHARED_ZOD"],
      ["DB_ACCESS", "ACCELERATE"],
      ["EDITOR", "QUILL"]
    ],
    stack: [
      "APP:REACT+VITE",
      "API:HONO_WORKERS",
      "DB:POSTGRESQL",
      "ORM:PRISMA_ACCELERATE",
      "AUTH:JWT",
      "VALIDATION:ZOD",
      "AI:WORKERS_AI"
    ],
    about: [
      "Inscribe is a full-stack blogging platform: users write with a rich-text editor, tag posts, like and comment, and can summarize any post in two sentences using Cloudflare Workers AI (Llama 3).",
      "Workers can't hold TCP database connections, so Prisma runs through Accelerate's HTTP connection pool. Validation schemas live in a shared npm package (@shaikhaman/medium-common), so frontend and backend can never drift apart."
    ],
    challenges: [
      "Running Prisma on an edge runtime with no TCP connections: solved with the Prisma edge client and Accelerate.",
      "Rendering user-generated HTML safely: every post is sanitized with DOMPurify before it touches the DOM.",
      "Preventing duplicate likes under rapid clicks: a unique database constraint plus a toggle endpoint."
    ],
    learnings: [
      "Shared validation is an architecture decision: one Zod source of truth ended client/server drift.",
      "Constraints belong in the database; UI guards can't stop race conditions.",
      "Edge runtimes reshape standard patterns, from connection pooling to crypto."
    ]
  },
  {
    slug: "quantum",
    title: "QUANTUM",
    version: "v1.0.0",
    status: "ECOMMERCE_APP",
    description:
      "An e-commerce SPA for electronics with real-time product data, cart and checkout flows, and a role-gated admin dashboard — built on React and Firebase.",
    longDescription:
      "A client-only commerce app: Firebase Auth with role-based routing, Firestore real-time listeners for live data, and a Redux cart persisted to localStorage.",
    tags: ["REACT", "FIREBASE", "REDUX", "TAILWIND"],
    image: "/images/quantum.png",
    darkImage: "/images/quantum.png",
    heroImage: "/images/quantum.png",
    heroDarkImage: "/images/quantum.png",
    action: "VIEW_CASE_STUDY",
    sourceUrl: "https://github.com/ShaikhAman01/Quantum-e-commerce",
    liveUrl: "https://quantum.shaikhaman.dev",
    docsUrl: "https://app.notion.com/p/amanshaikh/DOCUMENTATION-39526719f3cc80948445e0288c8da461",
    metrics: [
      ["DATA", "REALTIME"],
      ["AUTH", "EMAIL+GOOGLE"],
      ["ROLES", "USER/ADMIN"],
      ["ADMIN", "FULL_CRUD"]
    ],
    stack: [
      "APP:REACT+VITE",
      "AUTH:FIREBASE",
      "DATA:FIRESTORE",
      "STATE:REDUX_TOOLKIT",
      "STYLE:TAILWIND"
    ],
    about: [
      "Quantum is a single-page e-commerce app with two sides: customers browse, search, manage a persistent cart, and place orders; admins manage the catalog and watch orders and users update live through Firestore listeners.",
      "State is split by shape: the cart lives in Redux Toolkit and persists to localStorage, while live Firestore data flows through a context provider."
    ],
    challenges: [
      "Firestore Timestamps broke Redux's serializability checks; fixed by storing epoch milliseconds instead.",
      "Google sign-in could succeed with no profile document; the login flow now creates one on the fly.",
      "Nested routes 404'd on refresh until an SPA rewrite rule sent every path back to index.html."
    ],
    learnings: [
      "Choose state tools per data shape instead of forcing everything into one store.",
      "Coercing types at the write boundary prevents whole categories of downstream bugs.",
      "Client-side role checks are UX, not security; real enforcement lives in Firestore Security Rules."
    ]
  }
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
  ["VCS", "Git"],
  ["LANGUAGE", "Java"],
  ["LANGUAGE", "Python"],
  ["BACKEND", "FastAPI"]
];

export const history = [
  {
    role: "PRODUCT DEVELOPER INTERN",
    org: "URBANLOOP",
    date: "MAR 2025 - AUG 2025",
    body: "Helped take a ride-hailing backend from a legacy Python/Flask codebase to a production Node.js system, with both the rider and driver apps now live on the Play Store and App Store.",
    highlights: [
      "Migrated the legacy Flask backend to Node.js, Express.js, PostgreSQL, and Prisma ORM.",
      "Built core REST APIs powering the rider app, driver app, and internal admin panel, secured with JWT authentication and role-based access control.",
      "Implemented WebSocket-based real-time ride tracking and a distributed, Redis-backed OTP login flow.",
      "Shipped referral and rewards tracking, WhatsApp API notifications, and cron jobs for scheduled background tasks."
    ],
    links: [
      { label: "DRIVER_APP (ANDROID)", url: "https://play.google.com/store/apps/details?id=com.vamsi98.urbanloop_mobile" },
      { label: "USER_APP (IOS/ANDROID)", url: "https://apps.apple.com/in/app/urbanloop-get-instant-rides/id6748720148" }
    ]
  }
];
