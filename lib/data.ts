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
      "A multi-tenant Next.js + FastAPI platform that lets non-technical users query relational databases in plain English — built around a template-first SQL generation pipeline with an OpenAI-to-Gemini fallback chain, self-healing query repair, and a defense-in-depth execution sandbox.",
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
      "IntelliQuery solves a real problem: the people who need answers from a database usually can't write SQL. A user connects a database (PostgreSQL, MySQL, SQL Server, SQLite, or CockroachDB), asks something like \"top 10 customers by revenue last month\", and gets validated SQL, live results, an auto-selected chart, and an AI summary — grounded in exact statistics computed server-side, so the model can't invent numbers.",
      "The pipeline always uses the cheapest layer that can answer correctly: a deterministic template engine handles common questions with zero LLM tokens, a schema-aware LLM chain (OpenAI with Gemini fallback) handles the rest, and every statement — generated, cached, or user-edited — passes a SELECT-only validator before running inside a read-only transaction with statement timeouts and row caps."
    ],
    challenges: [
      "Containing LLM hallucination: schema-grounded prompts with sampled column values, pre-execution table validation, and a one-shot repair pass that fixes queries referencing non-existent tables or columns — surfacing a working answer instead of a raw database error.",
      "Sharing one auth system across two runtimes: Better Auth (Next.js) creates sessions, and FastAPI validates the same session tokens against a shared PostgreSQL — no JWT bridging, no duplicated user store.",
      "Making caching correct, not just fast: schema refreshes invalidate generated SQL for that connection, failed cached queries evict themselves and regenerate via the LLM, and empty results are never cached."
    ],
    learnings: [
      "Trustworthy AI features need verification layers around the model, not just better prompts — validate before execution, repair on failure, and ground insights in server-computed statistics.",
      "Deterministic fast paths (the template engine, heuristic chart selection) cut more cost and latency than any prompt optimization did.",
      "Defense in depth works: SELECT-only parsing, forbidden-keyword scans, read-only transactions, timeouts, and row caps each catch what the previous layer misses."
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
      "Six single-player games with a real edge backend: Hono on Cloudflare Workers, D1 (SQLite) with Drizzle ORM, JWT auth, and Zod-validated score submission. Every game works fully offline — the backend is a sync layer, never a dependency.",
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
      "PixelPlayground looks like a cozy game site, but the engineering substance is underneath. Nobody sees a login wall: a guest account is created silently on first visit, and upgrading to a username and password later keeps the same user row — so every score, stat, and streak survives without a data migration.",
      "Scoring is server-authoritative. The client only reports what happened; the Worker validates each submission against per-game plausibility rules, computes Wordle streaks itself so they can't be farmed, and maintains write-time aggregates so leaderboards are simple indexed queries instead of scans over history."
    ],
    challenges: [
      "bcrypt blew through the Workers CPU budget, so password hashing moved to PBKDF2 via the WebCrypto API — 100k iterations, per-user salts, and constant-time comparison.",
      "One route serves six games, which naively shipped every player all six bundles — including a 14,907-word Wordle dictionary. Per-game dynamic imports cut each game to its own ~24–44 KB chunk, with the dictionary loading only on the Wordle page.",
      "A shared store plus per-mount game engines caused a double-submission bug: fixed by resetting the store on unmount and only submitting on the game engine's own verdict."
    ],
    learnings: [
      "Know your runtime — \"best practice\" (bcrypt) is contextual, and edge constraints forced better decisions.",
      "Derive competitive values (streaks, bests) server-side from reported facts; never accept them from the client.",
      "Fire-and-forget persistence keeps the game responsive even when the network isn't — the app degrades to exactly what it would be as a purely client-side app."
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
      "A React SPA backed by Hono on Cloudflare Workers, PostgreSQL via Prisma Accelerate, and JWT auth — with a shared Zod schema package published to npm so client and server always validate the same shapes.",
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
      ["EDITOR", "QUILL+DOMPURIFY"]
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
      "Inscribe is a full-stack blogging platform: users write with a rich-text editor, tag posts, like and comment, and can summarize any post in two sentences using Cloudflare Workers AI (Llama 3) — wired in as a Worker binding, so there are no API keys to manage.",
      "Because Workers can't hold TCP database connections, Prisma queries run through Accelerate's HTTP connection pool. Validation schemas live in a shared package published to npm (@shaikhaman/medium-common), so frontend types and backend validation can never drift apart."
    ],
    challenges: [
      "Running Prisma on an edge runtime with no TCP connections — solved with the Prisma edge client and Accelerate's connection pooling.",
      "Rendering user-generated Quill HTML safely — every post is sanitized with DOMPurify before it touches the DOM.",
      "Preventing duplicate likes under rapid clicks — a database-level unique constraint on (user, post) plus a toggle endpoint instead of blind inserts."
    ],
    learnings: [
      "Shared validation is an architecture decision, not a convenience — one Zod source of truth eliminated a whole class of client/server drift.",
      "Constraints belong in the database; UI-level guards alone can't prevent race conditions.",
      "Edge runtimes reshape standard patterns — connection pooling, crypto, and bundling all needed edge-specific answers."
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
      "A client-only commerce app: Firebase Auth (email/password + Google) with role-based routing, Firestore real-time listeners keeping products, orders, and users live, and a Redux cart persisted to localStorage.",
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
      ["AUTH", "FIREBASE+GOOGLE"],
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
      "Quantum is a single-page e-commerce app with two sides: customers browse by category, search, manage a persistent cart, and place orders; admins manage the product catalog and watch every order and user update live through Firestore's real-time listeners.",
      "State is deliberately split by shape: the cart lives in Redux Toolkit (serializable, persisted to localStorage), while live Firestore data flows through a context provider — each store matched to the data it holds."
    ],
    challenges: [
      "Firestore Timestamp objects broke Redux's serializability checks when products entered the cart — fixed by converting to epoch milliseconds at write time, with a conversion guard on reads.",
      "Google sign-in can succeed for a user with no profile document; the login flow detects this and creates the Firestore user record on the fly.",
      "Refreshing nested routes 404'd on static hosting until an SPA rewrite rule sent every path back to index.html."
    ],
    learnings: [
      "Not everything belongs in one store — choosing state tools per data shape beat forcing a single pattern.",
      "Coercing types at the write boundary (prices as numbers, timestamps as millis) prevents whole categories of downstream bugs.",
      "Client-side role checks are UX, not security — real enforcement belongs in Firestore Security Rules."
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
