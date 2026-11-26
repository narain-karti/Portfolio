export interface ProjectMetric {
  label: string;
  value: string;
  note: string;
}

export interface ArchitectureStep {
  title: string;
  desc: string;
  tech: string;
}

export interface WorkProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "AI_ML" | "DATA_ENGINE" | "AGENTS" | "VISION" | "FULL_STACK" | "SPACE";
  badge?: string;
  awardHighlight?: string;
  tags: string[];
  status: string;
  year: string;
  summary: string;
  image: string;
  githubUrl?: string;
  pypiUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  pressLinks?: { outlet: string; url: string }[];
  pipCommand?: string;
  metrics: ProjectMetric[];
  problem: string;
  whyItMatters: string;
  contribution: string;
  insight: string;
  architectureSteps: ArchitectureStep[];
  whatILearned: string;
  blogSlug?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  kind: "VENTURE" | "INTERNSHIP" | "LEADERSHIP" | "INITIATIVE";
  period: string;
  location: string;
  badge: string;
  url?: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface ToolkitItem {
  name: string;
  category: "languages" | "ai" | "backend" | "frontend" | "systems";
  level: number;
  provenIn: string;
  description: string;
}

export interface AwardItem {
  id: string;
  title: string;
  org: string;
  prize: string;
  year: string;
  story: string;
  linkedProject?: string;
}

export interface ResearchDirection {
  id: string;
  title: string;
  status: "Active Experiment" | "Validated System" | "Exploratory Track";
  summary: string;
  focusAreas: string[];
  linkedHref: string;
}

export const NARAIN_PROFILE = {
  name: "Narain Karti",
  callsign: "NARAIN.OS",
  role: "AI/ML Engineer · Data Science Student · Deep-Tech Builder · Entrepreneur",
  headline: "AI systems, data science, and practical engineering.",
  positioningStatement:
    "Hi, I'm Narain. Welcome in. I enjoy taking ideas apart to see how they work, then building quiet, reliable software around them.",
  location: "Chennai, India",
  email: "narainkarti.work@gmail.com",
  secondaryEmail: "studyusage2008@gmail.com",
  phone: "+91-9176257316",
  github: "https://github.com/narain-karti",
  linkedin: "https://www.linkedin.com/in/narainkarti/",
  pypi: "https://pypi.org/project/datadoc-cli/",
  axowebUrl: "https://axoweb.in",
  eduviaUrl: "https://eduvia-topaz.vercel.app",
  eduviaInstagram: "eduviaa",
  eduviaLinkedin: "eduvia-x",
  availability: "Open to AI research, engineering roles & collaborations",
  domains: ["AI / ML", "Data Science", "AI Infrastructure", "Product Engineering"],
  bioParagraphs: [
    "At 17, I'm pursuing a dual academic track — a B.Tech in CSE (AI/ML) at NIAT (CGPA 8.9) alongside a B.S. in Data Science from IIT Madras (expected 2029) — while balancing open-source engineering, DSA & LeetCode, internships, and national hackathons.",
    "Outside classes, I founded AxoWeb Technologies to build backend systems, mobile apps, and workflow tools for real clients. That grew from cold outreach into 20+ active clients, 15+ shipped builds, a ₹10L+ revenue milestone, and both the Best Innovation and People's Choice Awards at the BRAVE Competition 2026.",
    "On the national stage, our team won the Marinotex Hackathon 2026 and finished First Runner-Up (₹3,00,000) out of 70,000+ students at the OpenAI Academy × NxtWave GenAI Buildathon in New Delhi with Project K (which evolved into Project-MELV). I also mentor student builders through Eduvia and serve as Joint Secretary at AMET Incubation Centre (ACEII).",
  ],
  academicAchievements: [
    "National Science Olympiad (NSO) — Zonal-level selection",
    "International Mathematics Olympiad (IMO) — Zonal-level selection",
    "JEE Main 2025 — Qualified",
    "NASA Space Settlement Design Contest — Zonal-level Award",
  ],
  education: [
    {
      institution: "Indian Institute of Technology, Madras",
      short: "IIT Madras",
      degree: "B.S., Data Science and Applications (Concurrent Degree)",
      period: "2025 — 2029",
      focus: "Mathematics, Probability, Statistical Analysis, Algorithms & Large-Scale Data Systems",
    },
    {
      institution: "NxtWave Institute of Advanced Technologies (NIAT)",
      short: "NIAT · B.Tech",
      degree: "B.Tech, Computer Science Engineering (AI/ML · CGPA 8.9)",
      period: "2025 — 2029",
      focus: "Artificial Intelligence, Machine Learning, Backend Architecture & Product Engineering",
    },
  ],
  services: [
    "AI Infrastructure & Edge Serving",
    "Autonomous Multi-Agent Systems",
    "High-Throughput Data Engines",
    "Applied Computer Vision & Privacy",
    "Research, Open Source & Startups",
  ],
  threePillars: [
    {
      title: "01 · Research",
      detail: "Identify unsolved infrastructure bottlenecks, review literature, run reproducible experiments, and document verifiable benchmarks.",
    },
    {
      title: "02 · Real-World AI Products",
      detail: "Convert validated findings into fast CLI tooling, edge-capable diagnostics, model-serving workflows, and evaluation pipelines.",
    },
    {
      title: "03 · Open Source",
      detail: "Release libraries, CLI utilities, and benchmark harnesses publicly so fellow engineers can inspect, test, and build on them.",
    },
  ],
};

export const FLAGSHIP_PROJECTS: WorkProject[] = [
  {
    id: "datadoc",
    number: "01",
    title: "DATADOC",
    subtitle: "Open-Source Dataset Diagnostics & Leakage-Safe Curation Engine",
    category: "DATA_ENGINE",
    badge: "PYPI LIVE · 2.5K+ INSTALLS*",
    pipCommand: "pip install datadoc-cli",
    image: "/images/datadoc_showcase.jpg",
    tags: ["Python", "Polars", "Apache Arrow", "LiteLLM", "FastAPI", "PyPI"],
    status: "Open Source (v0.6.1)",
    year: "2026",
    summary:
      "Polars-backed dataset diagnostics CLI that profiles 1M rows in 0.42s and saves leakage-safe preprocessing pipelines.",
    githubUrl: "https://github.com/narain-karti/DATADOC",
    pypiUrl: "https://pypi.org/project/datadoc-cli/",
    blogSlug: "datadoc-from-script-to-pypi",
    problem:
      "ML engineers spend too much time rewriting Pandas cleaning scripts that silently leak validation data or run out of RAM on larger files.",
    whyItMatters:
      "Silent test-set leakage invalidates model benchmarks in production and research alike. Validating splits early fixes data quality before training starts.",
    contribution:
      "Built the Polars LazyFrame profiling core, strict train/test fit-transform ladder, LiteLLM benchmark loop, and PyPI release pipeline.",
    insight:
      "Pairing zero-copy Arrow LazyFrames with an ordered priority ladder turns preprocessing into an auditable pipeline.json artifact.",
    metrics: [
      { label: "1M-Row Benchmark", value: "0.42s", note: "vs ~5.9s Pandas eager profiling" },
      { label: "Package Adoption", value: "2,500+*", note: "Reported pip installs (*verify live on PyPI)" },
      { label: "RAM Footprint", value: "-65%", note: "Zero-copy Apache Arrow streaming" },
    ],
    architectureSteps: [
      { title: "Polars LazyFrame Ingestion", desc: "Zero-copy scan of CSV, Parquet, and JSON without eager memory blowups.", tech: "Polars / Arrow" },
      { title: "Priority Plugin Ladder", desc: "Leakage-safe fit on train split only; applies serialized transforms on test.", tech: "Python Core" },
      { title: "Agentic Auto-Research Loop", desc: "Proposes transformations and runs cross-validated accuracy benchmarks via LiteLLM.", tech: "LiteLLM / Agents" },
      { title: "Standalone Code Export", desc: "Emits pure reproducible Python scripts, FastAPI Studio UI, or Joblib bundles.", tech: "AST / FastAPI" },
    ],
    whatILearned: "Developer tools win on tactile speed and honesty — auditing 1M rows in under half a second changes how teams catch leakage.",
  },
  {
    id: "project-melv",
    number: "02",
    title: "PROJECT-MELV",
    subtitle: "Edge ANPR Recognition & 3D Urban Mobility Digital Twin",
    category: "VISION",
    badge: "99.82% BANDWIDTH CUT",
    image: "/images/melv_showcase.jpg",
    tags: ["YOLOv8", "ByteTrack", "EasyOCR", "React Three Fiber", "FastAPI", "Edge CV"],
    status: "Production Prototype (SIH PS #26127)",
    year: "2026",
    summary:
      "Edge ANPR system evolved from Project K for Smart India Hackathon PS #26127, running locally in 14ms and sending 200-byte JSON events instead of raw video.",
    githubUrl: "https://github.com/narain-karti/Project-MELV",
    blogSlug: "project-melv-city-digital-twin",
    pressLinks: [
      { outlet: "LiveChennai", url: "https://www.livechennai.com/detailnews.asp?catid=&newsid=78442" },
      { outlet: "Express News Asia", url: "https://expressnews.asia/2026/02/tn-students-shine-as-runner-up-at-indias-largest-genai-student-challenge-openai-academy-x-nxtwave-buildathon-finale/" },
    ],
    problem:
      "Streaming raw 1080p CCTV across 100+ junctions burns over 4 TB/day of bandwidth and leaves camera feeds disconnected.",
    whyItMatters:
      "City-scale traffic analytics only works when inference runs on the pole and cellular backhaul stays minimal.",
    contribution:
      "Built the dual YOLOv8 and ByteTrack pipeline, Indian RTO regex repair for noisy OCR, trajectory graph linking, and React Three Fiber 3D twin.",
    insight:
      "Running plate detection and Indian RTO syntax correction directly at the edge shrinks per-event network payloads to ~200 bytes.",
    metrics: [
      { label: "Frame Inference", value: "14ms", note: "Reported local ANPR pipeline speed" },
      { label: "Payload Footprint", value: "~200 B", note: "Structured JSON vs raw RTSP video" },
      { label: "Bandwidth Saved", value: "99.82%", note: "Reported reduction vs raw stream baseline" },
    ],
    architectureSteps: [
      { title: "Dual YOLOv8 + ByteTrack", desc: "Simultaneous vehicle tracking and license plate bounding extraction.", tech: "YOLOv8 / Supervision" },
      { title: "Indian RTO Grammar OCR", desc: "Reads plates and auto-repairs state/district letter-digit confusion.", tech: "EasyOCR + Regex AST" },
      { title: "Trajectory Graph Engine", desc: "Links multi-junction routes and flags impossible-speed anomalies.", tech: "FastAPI / Graph" },
      { title: "3D City Digital Twin", desc: "Live Chennai camera mesh with adaptive signal timing simulation.", tech: "React Three Fiber" },
    ],
    whatILearned: "Moving extraction to the camera pole solves both urban backhaul cost and privacy simultaneously — telemetry outperforms raw video dumps.",
  },
  {
    id: "otomo",
    number: "03",
    title: "OTOMO",
    subtitle: "“CRM That Never Forgets” — AI Relationship Memory Engine",
    category: "AGENTS",
    badge: "BRAVE AWARD WINNER",
    awardHighlight: "BRAVE Competition · Best Student Innovation & People's Choice Recognition",
    image: "/images/otomo_showcase.jpg",
    tags: ["AI Memory", "Context Graph", "Relationship CRM", "Product Design", "LLMs"],
    status: "Award-Recognized Concept",
    year: "2026",
    summary:
      "An AI relationship-memory CRM that keeps track of commitments, follow-ups, and context across scattered chats and meetings.",
    githubUrl: "https://github.com/narain-karti",
    problem:
      "Conventional CRMs act as passive spreadsheets of names and emails, losing interaction context, promises, and timing nuances across chats and meetings.",
    whyItMatters:
      "Founders, researchers, and partnerships depend on continuity and trust; remembering small details is often what turns conversations into long-term work.",
    contribution:
      "Originated the 'CRM That Never Forgets' memory-graph model, product positioning, user workflows, and live competition pitch.",
    insight:
      "Structuring memory around commitments, open threads, and context decay transforms a static directory into an active relationship assistant.",
    metrics: [
      { label: "BRAVE Recognition", value: "2 Awards", note: "Best Innovation & People's Choice*" },
      { label: "Core Focus", value: "Memory", note: "Commitments & context retention" },
      { label: "Design Ethos", value: "Zero-Friction", note: "Context before manual data entry" },
    ],
    architectureSteps: [
      { title: "Interaction Capture Layer", desc: "Ingests meeting notes, follow-ups, and fragmented message context.", tech: "Structured Parsing" },
      { title: "Relationship Memory Graph", desc: "Links people, shared projects, commitments, and temporal reminders.", tech: "Semantic Memory" },
      { title: "Recall & Briefing Engine", desc: "Surfaces key history and pending promises right before conversations.", tech: "LLM Summarization" },
      { title: "Proactive Follow-Up Loop", desc: "Flags drifting high-value threads without noisy notification spam.", tech: "Workflow Triggers" },
    ],
    whatILearned: "Users abandon CRMs that feel like administrative chores; software gets adopted when it actively preserves human memory (*verify final certificate category titles).",
  },
  {
    id: "mech-g",
    number: "04",
    title: "MECH-G",
    subtitle: "Offline-First Industrial Diagnostic & OKF Knowledge Workspace",
    category: "AI_ML",
    badge: "LOCAL GEMMA 4 (26B)",
    image: "/images/mech_g_showcase.jpg",
    tags: ["Google Gemma 4", "NetworkX OKF", "FastAPI", "React 19", "SQLite", "OSHA LOTO"],
    status: "Shipped Architecture",
    year: "2026",
    summary:
      "Offline diagnostic workspace for zero-connectivity sites. Compiles 4,000-page OEM manuals into NetworkX graphs queried locally by Gemma 4.",
    githubUrl: "https://github.com/narain-karti/MECH-G",
    blogSlug: "mech-g-offline-industrial-gemma",
    problem:
      "Cloud SaaS assistants fail completely offline, while standard vector RAG hallucinates critical hardware specs like 55 Nm torque where the manual specifies 35 Nm.",
    whyItMatters:
      "In high-pressure mechanical environments, hallucinated numbers and skipped safety checks cause real equipment damage and technician injury.",
    contribution:
      "Built the OmniOKF AST manual compiler, in-memory NetworkX graph traversal, Closed-World Citation Auditor, and OSHA 1910.147 LOTO digital interlock.",
    insight:
      "Combining typed knowledge graphs with deterministic citation auditing ensures every torque spec traces strictly to a verified node.",
    metrics: [
      { label: "Connectivity Needed", value: "0 kbps", note: "Local Gemma 4 (26B) execution" },
      { label: "Graph Query Time", value: "<500ms", note: "In-memory NetworkX traversal" },
      { label: "Safety Lockout", value: "OSHA LOTO", note: "Blocks steps until 0-PSI sign-off" },
    ],
    architectureSteps: [
      { title: "OmniOKF Compiler", desc: "Parses OEM PDFs into typed AST nodes and verified knowledge bundles.", tech: "okf_compiler / AST" },
      { title: "Closed-World Citation Auditor", desc: "Validates every part ID and torque threshold before token streaming.", tech: "Semantic Guardrail" },
      { title: "Multimodal Triage Engine", desc: "Fuses valve inspection imagery with acoustic FFT harmonics.", tech: "Vision + Acoustic FFT" },
      { title: "OSHA LOTO Compliance Gate", desc: "Enforces zero-energy digital sign-off prior to wrenching guidance.", tech: "SQLite / React 19" },
    ],
    whatILearned: "Safety-critical AI demands closed-world verification and deterministic interlocks rather than probabilistic text similarity.",
  },
  {
    id: "project-k",
    number: "05",
    title: "PROJECT K",
    subtitle: "Edge AI Traffic Intelligence & Emergency Corridor System",
    category: "AI_ML",
    badge: "MARINOTEX WINNER · ₹3L OPENAI BUILDATHON",
    awardHighlight: "Marinotex National Hackathon 2026 Winner · OpenAI Academy × NxtWave ₹3L National Runner-Up",
    image: "/images/project_k_showcase.jpg",
    tags: ["NVIDIA Jetson", "YOLOv8", "MARL", "SUMO", "MQTT", "Three.js"],
    status: "National Winner Architecture",
    year: "2025–2026",
    summary:
      "Edge traffic optimization and emergency green-wave system — National Winner at Marinotex Hackathon 2026 and ₹3,00,000 First Runner-Up at the OpenAI Academy Buildathon before evolving into Project-MELV.",
    githubUrl: "https://github.com/narain-karti/Project-K",
    blogSlug: "project-k-openai-buildathon-journey",
    videoUrl: "https://www.youtube-nocookie.com/embed/9cr06w31vpY",
    pressLinks: [
      { outlet: "LiveChennai", url: "https://www.livechennai.com/detailnews.asp?catid=&newsid=78442" },
      { outlet: "Express News Asia", url: "https://expressnews.asia/2026/02/tn-students-shine-as-runner-up-at-indias-largest-genai-student-challenge-openai-academy-x-nxtwave-buildathon-finale/" },
    ],
    problem:
      "Fixed signal timers trap ambulances in deadlocked intersections while highway collision reporting suffers long human-detection delays.",
    whyItMatters:
      "Reducing emergency response friction by minutes directly preserves life and decongests urban arterial corridors.",
    contribution:
      "Implemented Jetson YOLOv8 perception loops, SUMO MARL traffic phase training, MQTT corridor messaging, and React Three Fiber monitoring UI.",
    insight:
      "Running local TensorRT perception with lightweight MQTT green-wave signaling lets intersections respond even under intermittent cloud connectivity.",
    metrics: [
      { label: "Buildathon Award", value: "₹3,00,000", note: "OpenAI Academy National Runner-Up" },
      { label: "Edge Inference Loop", value: "<120ms", note: "Jetson Orin perception cycle" },
      { label: "Simulated Queue Cut", value: "-38%", note: "SUMO MARL benchmark improvement" },
    ],
    architectureSteps: [
      { title: "ESP32-CAM / Jetson Capture", desc: "Live intersection RTSP & YOLOv8 vehicle/emergency classification.", tech: "YOLOv8 / TensorRT" },
      { title: "SUMO MARL Signal Agent", desc: "Dynamic green splits balancing cross-junction vehicle queues.", tech: "SUMO / Python RL" },
      { title: "MQTT Priority Mesh", desc: "Low-latency upstream corridor preemption alerts in <45ms.", tech: "MQTT / Mosquitto" },
      { title: "3D Command & Dispatch", desc: "Three.js intersection twin with responder dispatch workflows.", tech: "Three.js / WebGL" },
    ],
    whatILearned: "Designing intersections with local offline fallback keeps infrastructure resilient when wide-area backhaul degrades.",
  },
  {
    id: "elio",
    number: "06",
    title: "ELIO",
    subtitle: "Context-Aware Browser Privacy Agent (ISRO SIH Context)",
    category: "AGENTS",
    badge: "PRIVACY AGENT · SIH",
    image: "/images/elio_showcase.jpg",
    tags: ["Python", "Playwright", "Browser AI", "Privacy Automation", "Agents"],
    status: "Open Source Prototype",
    year: "2025–2026",
    summary:
      "Browser privacy agent explored for an ISRO SIH problem, built around tracking protection and resilient automated execution.",
    githubUrl: "https://github.com/narain-karti/ELIO---Private-Browser-Agent.",
    problem:
      "Automated browser agents and day-to-day browsing expose user fingerprints, scripts, and session telemetry without clear visibility or guardrails.",
    whyItMatters:
      "As web workflows become agent-driven, user privacy and non-blocking execution safety must sit directly inside the browser automation layer.",
    contribution:
      "Explored and implemented non-blocking browser action pipelines, resilient UI recovery loops, and privacy-focused request auditing.",
    insight:
      "Separating page observation from sanitized action execution keeps privacy policies deterministic while preventing agent brittle failures.",
    metrics: [
      { label: "Focus Area", value: "Privacy", note: "Browser-level user protection" },
      { label: "Pipeline Mode", value: "Non-Blocking", note: "Async Playwright recovery" },
      { label: "Context", value: "ISRO SIH", note: "Explored problem prototype" },
    ],
    architectureSteps: [
      { title: "Browser Context Isolation", desc: "Ephemeral session state reducing persistent tracking leakage.", tech: "Playwright / Python" },
      { title: "DOM Action Resilience", desc: "Recovers gracefully when dynamic frontend selectors shift.", tech: "Selector Heuristics" },
      { title: "Privacy Audit Layer", desc: "Inspects third-party telemetry hooks during automated runs.", tech: "Network Interceptor" },
      { title: "Agent Execution Loop", desc: "Executes multi-step browser tasks safely under strict bounds.", tech: "Python Core" },
    ],
    whatILearned: "Browser agents only earn user trust when privacy guarantees and selector recovery work reliably without fragile hardcoded waits.",
  },
  {
    id: "quorum",
    number: "07",
    title: "QUORUM",
    subtitle: "Adversarial Multi-Agent Executive Board & Dialectic Engine",
    category: "AGENTS",
    badge: "TAKEOVER'26 TOP RANK",
    awardHighlight: "Top Rank · TakeOver'26 National Hackathon",
    image: "/images/quorum_showcase.jpg",
    tags: ["Multi-Agent", "ReactFlow", "Fastify", "SQLite WAL", "OpenRouter", "TypeScript"],
    status: "Award Winner",
    year: "2026",
    summary:
      "Six-persona adversarial executive boardroom over a TypeScript monorepo that streams structured debate graphs in real time.",
    githubUrl: "https://github.com/narain-karti/Quorum",
    blogSlug: "quorum-adversarial-boardroom",
    problem:
      "Single-prompt LLMs suffer from sycophancy bias — politely agreeing with flawed strategic assumptions rather than stress-testing burn, architecture, or risk.",
    whyItMatters:
      "Teams use AI for high-stakes strategy reviews; structured disagreement uncovers critical failure modes before code or capital is committed.",
    contribution:
      "Built the 4-package TypeScript monorepo, orthogonal persona constraints + Contrarian reward design, Fastify SSE bus, and live ReactFlow canvas.",
    insight:
      "Conflicting agent objectives paired with an explicit Contrarian uncovered 3.2× more architectural and financial risks in testing.",
    metrics: [
      { label: "Hackathon Result", value: "Top Rank", note: "TakeOver'26 National" },
      { label: "Debate Personas", value: "6 Agents", note: "Orthogonal C-suite + Contrarian" },
      { label: "Blind-Spot Gain", value: "3.2×", note: "Risk discovery vs single prompt" },
    ],
    architectureSteps: [
      { title: "4-Package Monorepo", desc: "Shared types synchronizing backend orchestrator and canvas UI.", tech: "TypeScript / Fastify" },
      { title: "OpenRouter Reasoning Bus", desc: "Routes Nemotron-3-120B personas with isolated role contexts.", tech: "OpenRouter / LLM" },
      { title: "SQLite WAL Store", desc: "Persists transcripts and retrieved document chunks locally.", tech: "SQLite FTS" },
      { title: "ReactFlow Topology Canvas", desc: "Streams proposals, counter-arguments, and consensus live.", tech: "ReactFlow / Vite" },
    ],
    whatILearned: "Multi-agent teams only outperform single prompts when agent incentives directly oppose one another.",
  },
  {
    id: "deceptrix",
    number: "08",
    title: "DECEPTRIX",
    subtitle: "Explainable 7-Signal Deepfake Forensics & Audit Platform",
    category: "VISION",
    badge: "7-SIGNAL BAYESIAN FUSION",
    image: "/images/deceptrix_showcase.jpg",
    tags: ["PyTorch", "ViT", "2D-FFT", "Celery", "PostgreSQL", "Grad-CAM", "ReportLab"],
    status: "Enterprise v1.1 / Pipeline v4",
    year: "2026",
    summary:
      "Explainable deepfake verification tool combining seven forensic checks (ViT, 2D-FFT, landmarks, lip-sync, audio) into a 5-page PDF audit report.",
    githubUrl: "https://github.com/narain-karti/DECEPTRIX",
    blogSlug: "deceptrix-fixing-050-baseline-to-7-signal-fusion",
    problem:
      "Social compression strips naive CNN artifacts, shot cuts trigger false positives, and black-box binary percentages lack journalistic or legal auditability.",
    whyItMatters:
      "Verification teams need reproducible evidence heatmaps and transparent signal breakdowns rather than unexplained scores.",
    contribution:
      "Calibrated ViT sigmoid thresholds, built shot-cut jitter filtering, integrated 7-signal Bayesian fusion, Celery workers, and ReportLab 5-page PDF dossiers.",
    insight:
      "Combining spatial ViT with 2D-FFT spectral upsampler checks and shot-cut temporal consensus prevents false flags on compressed real footage.",
    metrics: [
      { label: "Forensic Ensemble", value: "7 Signals", note: "Spatial, FFT, Landmarks, Audio" },
      { label: "Audit Output", value: "5-Page PDF", note: "Swiss-grid dossier + Grad-CAM" },
      { label: "Queue Architecture", value: "Celery + PG", note: "Async enterprise worker tasks" },
    ],
    architectureSteps: [
      { title: "Multi-Face Extractor", desc: "Sliding extraction tape filtering abrupt documentary shot cuts.", tech: "OpenCV / FaceMesh" },
      { title: "7-Signal Forensic Suite", desc: "Calibrated ViT (delta=3.8) + 2D-FFT + AudioSpoof scoring.", tech: "PyTorch / SciPy" },
      { title: "Bayesian Consensus", desc: "Temporal median fusion balancing sensitivity and real-video precision.", tech: "Python Core" },
      { title: "ReportLab Dossier", desc: "Auto-generates inspectable Grad-CAM heatmaps & signal charts.", tech: "ReportLab / Celery" },
    ],
    whatILearned: "Testing deepfake pipelines against fast-cut real footage teaches far more than chasing clean benchmark AUC.",
  },
  {
    id: "beyond-earth",
    number: "09",
    title: "BEYOND EARTH",
    subtitle: "Closed-Loop Orbital Habitat & CELSS Engineering Blueprint",
    category: "SPACE",
    badge: "NASA ZONAL AWARD",
    awardHighlight: "NASA Space Settlement Design Contest — Zonal-Level Winner",
    image: "/images/space_settlement.jpg",
    tags: ["Orbital Mechanics", "CELSS", "ISRU", "Hydroponics", "Systems Design"],
    status: "Zonal Award Dossier",
    year: "2024–2025",
    summary:
      "Orbital 1.0g space-habitat blueprint covering lunar/asteroid ISRU, closed-loop life support, and settlement economics.",
    metrics: [
      { label: "NASA Contest", value: "Zonal Award", note: "Independently designed settlement" },
      { label: "Habitat Gravity", value: "1.0g Torus", note: "224m radius rotational spin" },
      { label: "Water Recycling", value: "99.7%", note: "Closed-loop CELSS recovery" },
    ],
    problem:
      "Deep-space settlements fail without closed mass budgets for artificial gravity, cosmic radiation shielding, food/oxygen loops, and sustainable governance.",
    whyItMatters:
      "Space habitat engineering forces disciplined systems thinking where atmosphere, energy, mass, and society must operate as one closed loop.",
    contribution:
      "Independently authored the complete habitat engineering, closed-loop life-support budget, resource extraction, and governance/economic frameworks; later mentored junior teams.",
    insight:
      "Combining lunar ice & asteroid ISRU with 5m regolith radiation shielding and Chlorella photobioreactors makes L5 habitation mathematically tractable.",
    architectureSteps: [
      { title: "Rotational 1.0g Torus", desc: "224m torus rotating at 2.0 RPM eliminating Coriolis disorientation.", tech: "Orbital Statics" },
      { title: "Lunar & Asteroid ISRU", desc: "Structural mass, oxygen, and polar water-ice utilization chains.", tech: "Resource Logistics" },
      { title: "Closed-Loop CELSS", desc: "Hydroponic crops, Chlorella O2 regeneration & water recycling.", tech: "Mass Conservation" },
      { title: "Governance & Economics", desc: "Off-Earth civic constitution and circular resource economy.", tech: "Systems Policy" },
    ],
    whatILearned: "Whether designing orbital life support or distributed AI clusters, conservation laws determine what survives outside slides.",
  },
  {
    id: "axoweb",
    number: "10",
    title: "AXOWEB SYSTEMS",
    subtitle: "Venture Systems Studio: AI Agents, n8n Automation & AWS Cloud",
    category: "FULL_STACK",
    badge: "₹10L+ MILESTONE · 20+ CLIENTS",
    awardHighlight: "BRAVE Competition · Entrepreneurial Product Venture",
    liveUrl: "https://axoweb.in",
    image: "/images/axoweb_showcase.jpg",
    tags: ["AWS Lambda", "PostgreSQL", "SQS / Redis", "n8n Automation", "Flutter", "Next.js"],
    status: "Active Venture (axoweb.in)",
    year: "2025–2026",
    summary:
      "Systems studio delivering AWS backends, mobile apps, and workflow automation across 20+ clients and 15+ builds.",
    githubUrl: "https://github.com/narain-karti",
    blogSlug: "axoweb-zero-to-7l-and-aws-microservices",
    problem:
      "Local businesses and startups needed reliable operational software — bookings, AI agents, n8n automations, and RBAC cloud backends — not brochure sites.",
    whyItMatters:
      "Real customer billing teaches prioritization, reliable delivery, pricing, and architecture reuse under commercial deadlines.",
    contribution:
      "Led client outreach (200+ businesses & 100+ startups), scoping, architecture, AWS/Firebase delivery, and team coordination across web, mobile, and automation.",
    insight:
      "Standardizing on two repeatable blueprints — AWS serverless RBAC cores and Flutter/Firebase real-time dispatch apps — accelerated zero-to-production delivery.",
    metrics: [
      { label: "Reported Revenue", value: "₹10L+*", note: "Grew from ₹7L+ in initial 90d (*period milestones)" },
      { label: "Active Client Base", value: "20+ Clients", note: "15+ delivered software systems" },
      { label: "Cloud Primitives", value: "5-Role AWS", note: "Cognito + Lambda + SQS + RDS" },
    ],
    architectureSteps: [
      { title: "AWS Cognito 5-Role RBAC", desc: "Cryptographic JWT claims separating institutional permission tiers.", tech: "AWS Cognito / API GW" },
      { title: "SQS-Buffered Lambda Compute", desc: "Decouples burst writes so relational RDS pools never saturate.", tech: "Lambda / SQS" },
      { title: "n8n & Agentic Automation", desc: "Custom CRM, lead qualification, and operational workflows.", tech: "n8n / AI Agents" },
      { title: "Tri-App Flutter Dispatch", desc: "Customer, Partner, and Admin apps synced via live Firestore geo-queries.", tech: "Flutter / Firebase" },
    ],
    whatILearned: "Building software people pay for forces honest architecture: reliability and clear outcomes beat over-engineered abstractions.",
  },
];

export const OTHER_REPOS = [
  {
    name: "WALKTHROUGH Engine v2",
    desc: "Universal AI agent browser demo recorder (Claude Code, Cursor, Antigravity, Windsurf, Copilot, Cline) with clamped zoom and SFX scoring.",
    url: "https://github.com/narain-karti/Walkthrough",
    tech: ["Playwright", "Python", "Motion Engine"],
  },
  {
    name: "Eduvia Platform",
    desc: "Student innovation & hackathon cohort ecosystem — 55+ registrations in 4 days, pitch mentorship & Doomathon.",
    url: "https://eduvia-topaz.vercel.app",
    tech: ["Education", "Cohorts", "Mentorship"],
  },
  {
    name: "KRED & Ozeno Fintech",
    desc: "Credit analysis pipeline backed by Groq inference and idempotent PostgreSQL migrations.",
    url: "https://github.com/narain-karti/KRED",
    tech: ["TypeScript", "Groq AI", "PLpgSQL"],
  },
  {
    name: "RETROD-PMS-LEAD-GEN",
    desc: "Property management lead generation and qualification automation platform built in TypeScript.",
    url: "https://github.com/narain-karti/RETROD-PMS-LEAD-GEN",
    tech: ["TypeScript", "Automation", "CRM"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "axoweb",
    company: "AxoWeb Technologies",
    role: "Founder & Technology Lead",
    kind: "VENTURE",
    period: "2025 — Present",
    location: "Chennai, India",
    badge: "₹10L+ MILESTONE · 20+ CLIENTS",
    url: "https://axoweb.in",
    summary:
      "“We don't build websites. We build systems.” Built an engineering venture delivering full-stack platforms, mobile apps, AI agents, and n8n workflow automations — scaling from ₹7L+ in our initial 90 days to a reported ₹10L+ revenue milestone across 20+ active clients and 15+ delivered projects.",
    highlights: [
      "Converted early cold outreach (200+ local businesses & 100+ startups) into structured client discovery, estimates, and recurring systems delivery.",
      "Architected a 5-role AWS serverless grievance platform (Lambda, RDS PostgreSQL, ElastiCache Redis, SQS, Cognito) and Tri-App Flutter/Firebase dispatch ecosystem.",
      "Delivered commercial builds for clients including Ideal Foundation, Swathanthra, SKR, and Udaya.",
    ],
    stack: ["AWS Lambda", "PostgreSQL", "ElastiCache", "n8n", "AI Agents", "Flutter", "Next.js"],
  },
  {
    id: "eduvia",
    company: "Eduvia",
    role: "Creator, Organizer & Mentor",
    kind: "INITIATIVE",
    period: "2025 — Present",
    location: "India",
    badge: "55+ SIGNUPS IN 4 DAYS · COHORTS",
    url: "https://eduvia-topaz.vercel.app",
    summary:
      "Founded a student innovation and learning initiative helping students convert raw ideas into structured hackathon builds, MVPs, pitch decks, and early startup concepts.",
    highlights: [
      "Recorded 55+ registrations within the first 4 days of the early cohort launch campaign.",
      "Conducted hands-on sessions covering problem discovery, MVP scoping, UI/UX execution, and live pitching (including Doomathon formats).",
    ],
    stack: ["Curriculum Design", "MVP Mentorship", "Hackathon Prep", "Community"],
  },
  {
    id: "microdolphin",
    company: "Microdolphin",
    role: "Agentic AI Engineer Intern",
    kind: "INTERNSHIP",
    period: "2025",
    location: "Remote",
    badge: "PROMPT-TO-APP AGENTS",
    summary:
      "Architected multi-agent backend orchestration for a platform generating full-stack web applications directly from natural-language specifications.",
    highlights: [
      "Engineered Planner, Schema, Coder, and AST-Linter agents inside isolated ephemeral Docker build sandboxes.",
      "Automated verification loops catching build and compilation regressions prior to client preview.",
    ],
    stack: ["FastAPI", "Python", "Multi-Agent LLMs", "Docker", "AST Parsing"],
  },
  {
    id: "thinkerscave",
    company: "ThinkersCave",
    role: "Software Developer Intern",
    kind: "INTERNSHIP",
    period: "2025",
    location: "Chennai, India",
    badge: "RAG & KNOWLEDGE GRAPHS",
    summary:
      "Restructured fragmented client catalogs into queryable knowledge graphs and shipped an omnichannel RAG + tool-calling customer support agent across web chat and WhatsApp.",
    highlights: [
      "Built unified tool-calling orchestration querying live order and booking state.",
      "Contributed AI upgrades across an enterprise LMS and Hotel Management dashboard.",
    ],
    stack: ["Python", "LangChain", "Knowledge Graphs", "Vector DBs", "WhatsApp API", "Express"],
  },
  {
    id: "aceii",
    company: "AMET Incubation Centre / ACEII",
    role: "Joint Secretary",
    kind: "LEADERSHIP",
    period: "2025 — Present",
    location: "Chennai, India",
    badge: "SELECTED LEADERSHIP",
    summary:
      "Selected via interview process to help drive student entrepreneurship, incubation programming, and campus startup culture.",
    highlights: [
      "Coordinating startup awareness initiatives, mentorship pipelines, and student venture incubation programs.",
    ],
    stack: ["Incubation", "Venture Operations", "Student Entrepreneurship"],
  },
  {
    id: "niat-club",
    company: "NIAT Advanced Technology Club",
    role: "Vice President (Former)",
    kind: "LEADERSHIP",
    period: "2025",
    location: "Chennai, India",
    badge: "TECH COMMUNITY LEADERSHIP",
    summary:
      "Led technical and entrepreneurship community events, coordinating hackathon participation, business/IPO awareness programs, and junior builder mentorship.",
    highlights: [
      "Mentored junior cohorts entering hackathons and NASA Space Settlement competitions.",
    ],
    stack: ["Event Ops", "Hackathon Mentoring", "Tech Awareness"],
  },
  {
    id: "tribefortis",
    company: "Tribe Fortis & Allytriz Technologies",
    role: "Full-Stack & Mobile Developer Intern",
    kind: "INTERNSHIP",
    period: "2024 — 2025",
    location: "Chennai, India",
    badge: "FULL-STACK DELIVERY",
    summary:
      "Led end-to-end delivery of an organization's full-stack web application and built AI-assisted workout & trainer-synced mobile routines.",
    highlights: [
      "Owned frontend/backend task coordination, timeline execution, and production release.",
      "Implemented offline-capable workout rep tracking synced to trainer feedback.",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Flutter", "REST APIs"],
  },
];

export const BUILDER_PRINCIPLES = [
  {
    number: "01",
    title: "Understand Before Optimizing",
    description:
      "Don't just wrap black-box APIs. Understand the data layout, graph topology, and failure conditions underneath so systems hold up outside slide decks.",
  },
  {
    number: "02",
    title: "Zero-Copy & Memory Discipline",
    description:
      "Columnar Apache Arrow buffers and Rust-backed Polars kernels beat brute-force cloud scaling. Always design with RAM ceilings and cache lines in mind.",
  },
  {
    number: "03",
    title: "Orthogonal Agent Incentives",
    description:
      "Polite multi-agent consensus turns into an echo chamber. Real critique emerges when agent objectives oppose — CFO burn limits vs Contrarian failure hunting.",
  },
  {
    number: "04",
    title: "Edge Autonomy Offline",
    description:
      "If an industrial manual assistant or intersection controller fails when cloud Wi-Fi drops, it isn't field-ready. Deterministic local fallbacks come first.",
  },
];

export const TOOLKIT: ToolkitItem[] = [
  { name: "Python", category: "languages", level: 5, provenIn: "DATADOC · MECH-G · DECEPTRIX · ELIO", description: "CLI tools, Polars engines, ML pipelines & FastAPI servers" },
  { name: "C++", category: "languages", level: 4, provenIn: "DSA · Systems Foundations", description: "Algorithmic problem-solving & low-level performance fundamentals" },
  { name: "JavaScript / TypeScript", category: "languages", level: 5, provenIn: "AxoWeb · Quorum · Portfolio", description: "Strict monorepos, Next.js 15, Express.js & Fastify APIs" },
  { name: "SQL / PLpgSQL", category: "languages", level: 4, provenIn: "IIT Madras · AWS RDS · SQLite", description: "Relational schema design, FTS & query optimization" },

  { name: "Polars & Apache Arrow", category: "ai", level: 5, provenIn: "datadoc-cli (0.42s / 1M rows)", description: "Multi-threaded LazyFrames & leakage-safe data transforms" },
  { name: "Multi-Agent & LiteLLM / LangChain", category: "ai", level: 5, provenIn: "Quorum · Microdolphin · ThinkersCave · DATADOC", description: "Stateful debate orchestrators, RAG & tool-calling buses" },
  { name: "YOLOv8 & Edge Computer Vision", category: "ai", level: 5, provenIn: "Project K · Project-MELV · DECEPTRIX", description: "14ms ANPR, ByteTrack, EasyOCR & 2D-FFT forensics" },
  { name: "Local LLMs (Gemma 4 / OKF)", category: "ai", level: 4, provenIn: "MECH-G Offline Workspace", description: "Closed-world citation auditing & AST graph grounding" },

  { name: "Express.js, FastAPI & Fastify", category: "backend", level: 5, provenIn: "AxoWeb · MECH-G · Quorum · MELV", description: "MVC backends, REST APIs, SSE streaming & async queues" },
  { name: "AWS Serverless", category: "backend", level: 4, provenIn: "AxoWeb 5-Role Platform", description: "Lambda, RDS PostgreSQL, ElastiCache Redis, SQS, Cognito" },
  { name: "n8n & Workflow Automation", category: "backend", level: 5, provenIn: "AxoWeb Client Systems", description: "Business process automation, webhooks & AI operational flows" },
  { name: "Docker, MQTT & NVIDIA Jetson", category: "backend", level: 4, provenIn: "Project K · Microdolphin · DECEPTRIX", description: "Isolated build sandboxes, Celery queues & low-latency telemetry" },

  { name: "Next.js 15 & React 19", category: "frontend", level: 5, provenIn: "AxoWeb · Eduvia · MECH-G · Portfolio", description: "Turbopack App Router, motion systems & complex dashboards" },
  { name: "ReactFlow & Three.js", category: "frontend", level: 4, provenIn: "Quorum · Project-MELV · Project K", description: "Interactive agent graphs & 3D urban mobility digital twins" },
  { name: "Flutter & Firebase", category: "frontend", level: 4, provenIn: "AxoWeb Tri-App Suite · Tribe Fortis", description: "Cross-platform mobile dispatch & fitness tracking apps" },
];

export const AWARDS: AwardItem[] = [
  {
    id: "marinotex-2026",
    title: "National Level Winner — Marinotex Hackathon 2026",
    org: "AMET University × Atal Innovation Mission (NITI Aayog)",
    prize: "National Winner",
    year: "2026",
    story: "Won the national-level Marinotex Hackathon 2026 with Project K, earning strong jury recognition and validation against innovators from across the country.",
    linkedProject: "project-k",
  },
  {
    id: "openai-buildathon",
    title: "National Runner-Up — OpenAI Academy × NxtWave Buildathon",
    org: "OpenAI Academy × NxtWave",
    prize: "₹3,00,000 Cash Grant",
    year: "2026",
    story: "Awarded for Project K: hybrid edge-cloud traffic optimization running YOLOv8 on NVIDIA Jetson, SUMO MARL, and MQTT emergency preemption.",
    linkedProject: "project-k",
  },
  {
    id: "brave-2026",
    title: "Best Innovation & People's Choice — BRAVE Competition 2026",
    org: "BRAVE National Student Startup Finale",
    prize: "Best Innovation + People's Choice",
    year: "2026",
    story: "Won both Best Innovation and People's Choice Award for AxoWeb Technologies at the national-level student startup competition, alongside feedback from Midhula Devabhaktuni (Founder, Mivi) and industry leaders.",
    linkedProject: "axoweb",
  },
  {
    id: "takeover-26",
    title: "Top Rank — National Hackathon TakeOver'26",
    org: "TakeOver'26",
    prize: "National Top Rank",
    year: "2026",
    story: "Built Quorum, an autonomous 6-persona C-suite dialectic engine with live ReactFlow visualization across a 4-package monorepo.",
    linkedProject: "quorum",
  },
  {
    id: "nasa-space",
    title: "Zonal Award — NASA Space Settlement Design Contest",
    org: "NASA / NSS",
    prize: "Zonal-Level Winner",
    year: "2024",
    story: "Independently designed a 1.0g rotating torus space habitat with ISRU, closed-loop hydroponics & O2 life support, and settlement economics.",
    linkedProject: "beyond-earth",
  },
];

export const RESEARCH_DIRECTIONS: ResearchDirection[] = [
  {
    id: "ai-infra",
    title: "AI Infrastructure & Deterministic Model Serving",
    status: "Active Experiment",
    summary:
      "Investigating how graph-grounded local inference, closed-world citation verification, and lightweight serving abstractions eliminate latency and hallucination risk on constrained hardware.",
    focusAreas: ["Local Quantized Inference", "Closed-World Citation Audits", "Edge Fallbacks"],
    linkedHref: "/work?project=mech-g",
  },
  {
    id: "data-leakage",
    title: "Zero-Copy Data Kernels & Leakage-Free Pipelines",
    status: "Validated System",
    summary:
      "Benchmarking Apache Arrow & Polars execution graphs against Pandas eager flows while enforcing serialized fit/transform boundaries and ablation-driven evaluation.",
    focusAreas: ["Polars LazyFrames", "Pipeline Serialization", "Auto-Research Loops"],
    linkedHref: "/work?project=datadoc",
  },
  {
    id: "adversarial-agents",
    title: "Adversarial Multi-Agent Debate Topologies",
    status: "Validated System",
    summary:
      "Measuring how opposing persona reward functions (Contrarian vs CFO/CTO) reduce LLM sycophancy and surface edge-case flaws compared to single-prompt baselines.",
    focusAreas: ["Orthogonal Incentives", "Dialectic Graphs", "Context Budgeting"],
    linkedHref: "/work?project=quorum",
  },
  {
    id: "privacy-edge",
    title: "Browser Privacy Agents & Ultra-Compact Edge Telemetry",
    status: "Exploratory Track",
    summary:
      "Exploring edge extraction topologies (~200B JSON payloads in MELV) alongside context-aware browser privacy automation (Elio) so intelligence never demands invasive raw uploads.",
    focusAreas: ["99.82% Bandwidth Cut", "Browser Privacy Agents", "Edge Computing"],
    linkedHref: "/work?project=elio",
  },
];
