export interface CommitMilestone {
  date: string;
  sha?: string;
  title: string;
  detail: string;
}

export interface ProjectBlogPost {
  slug: string;
  title: string;
  projectTitle: string;
  dateRange: string;
  commitCount: string;
  readTime: string;
  category: string;
  coverImage: string;
  summary: string;
  repoUrl: string;
  tags: string[];
  sections: {
    heading: string;
    body: string[];
    codeSnippet?: string;
  }[];
  timeline: CommitMilestone[];
  lessons: string[];
}

export const BLOG_POSTS: ProjectBlogPost[] = [
  {
    slug: "datadoc-from-script-to-pypi",
    title: "From a Hackathon Script to PyPI: Killing Data Leakage in 0.42 Seconds with Polars",
    projectTitle: "DATADOC",
    dateRange: "July 2026 — September 2026",
    commitCount: "77 Commits · v0.6.1 PyPI Live",
    readTime: "6 min read",
    category: "Data Engineering & CLI",
    coverImage: "/images/datadoc_showcase.jpg",
    summary:
      "How a rough exploratory script evolved through 77 commits into an open-source, leakage-safe Polars dataset engineering engine published to PyPI (`pip install datadoc-cli`).",
    repoUrl: "https://github.com/narain-karti/DATADOC",
    tags: ["Polars", "Rust Core", "Leakage Prevention", "PyPI", "CI/CD"],
    sections: [
      {
        heading: "1. The Origin: Tired of Rewriting Pandas Boilerplate",
        body: [
          "Every ML hackathon started the same way: 200 lines of repetitive Pandas code to check nulls, cap outliers, parse broken currency strings, and draw histograms — followed by realized mistakes where imputation medians leaked validation statistics into training splits.",
          "On July 26, 2026, the first commit of DATADOC dropped a master planning board and an initial `pyproject.toml` scaffold. By the end of day one, the core MissingValuePlugin, OutlierPlugin, and pipeline generator were functional.",
        ],
      },
      {
        heading: "2. Killing Silent Target Leakage & Legacy Engine Debt",
        body: [
          "Early versions ran eagerly like Pandas. Switching to Apache Arrow memory structures and Polars multi-threaded LazyFrames dropped 1-million-row profiling latency from ~5.9s down to 0.42 seconds (a 14× speedup) while shrinking memory overhead by 65%.",
          "By August 8 (`b00db6f`), I made the call to delete `engine.py` and all deprecated legacy commands completely. Instead, DATADOC standardized around an ordered priority ladder: DuplicateRemover (5) -> Imputer (10) -> OutlierCapper (20) -> Datetime (30) -> Categorical (40) -> Scaler (45), where `datadoc fit` learns exclusively on train splits and serializes `pipeline.json` for zero-leakage test transforms.",
        ],
        codeSnippet: `datadoc fit train.csv --target churn --preset balanced
datadoc transform test.csv --pipeline artifacts/pipeline.json --validate
datadoc evaluate titanic.csv --target survived --ablation`,
      },
      {
        heading: "3. The Agentic Auto-Research Loop & CI Hardening",
        body: [
          "In September (`a46f56f` & `d10f61b`), DATADOC gained an Agentic Auto-Research Loop backed by LiteLLM plus leakage-safe vectorized plugin integration. Agents don't mutate data blindly: they propose pipeline recipes, run cross-validated accuracy benchmarks (`datadoc evaluate`), and print before/after scorecards directly in Rich terminal tables.",
          "Shipping cleanly on PyPI required fixing real packaging traps along the way — creating clean `web/dist` placeholders for hatchling force-includes during GitHub Actions CI (`de8dfcd`), tightening Ruff lint rules, and suppressing sklearn convergence noise in evaluation benchmarks.",
        ],
      },
    ],
    timeline: [
      { date: "2026-07-26", title: "Day-One Core Sprint", detail: "Scaffolded pyproject.toml, MissingValuePlugin, OutlierPlugin, and Rich ASCII CLI panels." },
      { date: "2026-08-08", sha: "b00db6f", title: "Legacy Engine Purge", detail: "Deleted old engine.py; unified ID detection (`customer_id`) and interactive step sandbox." },
      { date: "2026-09-13", sha: "461181d", title: "v0.6.0 Report & Compare", detail: "Shipped standalone HTML audit reports, side-by-side dataset diffs, and leakage docs." },
      { date: "2026-09-14", sha: "a46f56f", title: "Agentic Auto-Research Loop", detail: "Integrated AI advisory scorecard and automated cross-validated benchmark loop." },
      { date: "2026-09-19", sha: "d10f61b", title: "Leakage-Safe Vectorized Plugins", detail: "Finalized strict train/test fit-transform isolation across all vectorized plugins." },
    ],
    lessons: [
      "Deleting legacy compatibility code early (`b00db6f`) unlocked faster iteration on the vectorized plugin architecture.",
      "Benchmarking accuracy improvements (`datadoc evaluate`) keeps feature engineering honest against target leakage.",
    ],
  },
  {
    slug: "mech-g-offline-industrial-gemma",
    title: "Engineering MECH-G: Running Local Gemma 4 (26B) Behind an OSHA Lockout Gate",
    projectTitle: "MECH-G",
    dateRange: "October 2026 — November 2026",
    commitCount: "32 Commits · Offline Edge AI",
    readTime: "7 min read",
    category: "Industrial Edge AI & Knowledge Graphs",
    coverImage: "/images/mech_g_showcase.jpg",
    summary:
      "Why vector RAG fails offshore wind technicians — and how compiling 4,000-page manuals into NetworkX OKF graphs + Closed-World Citation Auditing made local Gemma 4 safe for physical hardware.",
    repoUrl: "https://github.com/narain-karti/MECH-G",
    tags: ["Google Gemma 4", "NetworkX OKF", "Citation Auditor", "OSHA LOTO", "FastAPI"],
    sections: [
      {
        heading: "1. The 50 Nm Hallucination That Would Break a Valve",
        body: [
          "Standard cloud chatbots have two fatal flaws on an offshore wind turbine operating at 210 bar: zero internet connectivity (HTTP 504 timeouts) and standard vector RAG chunking that confuses part numbers or hallucinates 55 Nm torque where the spec calls for 35 Nm.",
          "MECH-G's very first commit (`Oct 31, 2026`) established three hard non-negotiables: local Google Gemma 4 (26B) inference, an OmniOKF compiler converting raw OEM manuals into typed AST graphs (`okf_compiler`), and a mathematical Closed-World Citation Auditor.",
        ],
      },
      {
        heading: "2. Graph Grounding + Deterministic Edge Fallbacks",
        body: [
          "Instead of praying top-K cosine similarity retrieves the right warning paragraph, `graph_engine.py` loads machine topologies directly into an in-memory NetworkX directed graph with <500ms traversal.",
          "Every token generated by Gemma passes through `citation_auditor.py`, which cross-checks claimed torque values, part IDs (like `PRV-992-B`), and safety prerequisites against grounded graph nodes. On November 22 (`ad6f964`), I also added deterministic offline edge diagnostic fallbacks for PRV and PCB repairs so the workbench remains reliable even under hardware throttling.",
        ],
        codeSnippet: `Verified Procedure: PRV-992-B Seal Replacement
[GATE] OSHA 1910.147 LOTO -> Confirm 0 PSI + Digital Signature
[TORQUE PASS 1] 15.0 Nm  [OKF Node #104-A]
[TORQUE PASS 2] 25.0 Nm  [OKF Node #104-B]
[TORQUE FINAL]  35.0 Nm  [AUDITED PASS]`,
      },
      {
        heading: "3. Hardening SQLite State, Auth & 4 Pitch Films",
        body: [
          "Through November 22–24, the repo evolved rapidly from UI polish to production hardening: integrating Hairline UI components (`ApprovalCard`, `LogStream`, `SignaturePad`), fixing TypeScript/Docker alignment, and persisting diagnostics & equipment notebooks cleanly inside SQLite with hardened upload isolation (`cc6641a`).",
          "Alongside the engineering stack, I used `lemo-opuscar`, ElevenLabs narration, and Librosa 120 BPM beat sync to ship multiple architectural pitch videos demonstrating the codebase end-to-end.",
        ],
      },
    ],
    timeline: [
      { date: "2026-10-31", title: "OmniOKF + Gemma 4 Foundation", detail: "Built OKF compiler, in-memory NetworkX graph, LOTO gate, and Vercel/Docker wiring." },
      { date: "2026-11-22", sha: "a8670af", title: "Agentic Workbench Integration", detail: "Wired SignaturePad, ApprovalCard, Sparklines, and offline PRV/PCB fallbacks." },
      { date: "2026-11-22", sha: "270ca4e", title: "Architectural Pitch Films", detail: "Engineered automated 60s codebase pitch & 120 BPM story films." },
      { date: "2026-11-24", sha: "cc6641a", title: "SQLite Persistence & Auth Hardening", detail: "Isolated equipment notebooks, persisted diagnostics in SQLite, aligned Docker models." },
    ],
    lessons: [
      "Physical safety domains demand closed-world citation verification; plausibility is dangerous when dealing with 3,000 PSI hydraulics.",
      "Preloading sample images as real File blobs prevented simulated mock paths from drifting away from real multimodal inference.",
    ],
  },
  {
    slug: "project-melv-city-digital-twin",
    title: "Cutting Municipal Bandwidth by 99.82%: Inside Project-MELV's 3D Urban Digital Twin",
    projectTitle: "Project-MELV",
    dateRange: "September 2026 — November 2026",
    commitCount: "22 Commits · SIH 2026 PS #26127",
    readTime: "6 min read",
    category: "Edge Computer Vision & 3D Digital Twin",
    coverImage: "/images/melv_showcase.jpg",
    summary:
      "How we transformed Smart India Hackathon Problem Statement #26127 from siloed CCTV streams into a synchronized Chennai camera mesh, Indian RTO syntax-corrected ANPR, and a 3D React Three Fiber mobility twin.",
    repoUrl: "https://github.com/narain-karti/Project-MELV",
    tags: ["YOLOv8", "ByteTrack", "EasyOCR", "React Three Fiber", "Smart India Hackathon"],
    sections: [
      {
        heading: "1. Why Central CCTV Video Streaming Collapses at City Scale",
        body: [
          "100 urban RTSP traffic cameras streaming 1080p raw video dump over 4.2 terabytes every single day onto central cloud pipes — only for operators to still stare at isolated camera grids.",
          "Initializing Project-MELV on September 26, we inverted the topology: run dual YOLOv8 models (vehicle + license plate localization), ByteTrack multi-object tracking, and EasyOCR right at the camera pole at 30 FPS (14ms inference), and stream ONLY 200-byte JSON trajectory packets over MQTT/HTTP. Result: 99.82% bandwidth saved.",
        ],
      },
      {
        heading: "2. Teaching EasyOCR Indian RTO Grammar & Tracking Chennai Junctions",
        body: [
          "Raw OCR misreads `TN 09 AB 1234` as `TN O9 A8 1Z34` under motion blur. Adding a deterministic Indian RTO grammar state machine repaired positional letter/digit swaps immediately.",
          "By September 27, we wired a realistic Chennai Kanathur CLV Nagar 1st Street multi-camera mesh with spatiotemporal trajectory linking, cloned-plate speed anomaly alerts, and judge media upload sandboxes.",
        ],
      },
      {
        heading: "3. Performance Surgery on the 3D Digital Twin",
        body: [
          "On October 8 (`feat: integrate 3D Traffic AI Simulation`), we fused Webster optimal signal timing heuristics with an interactive React Three Fiber city twin and Dual-AI live vision sandbox.",
          "Merging heavy 3D WebGL libraries initially triggered blank-screen state errors and bloated JS chunks. Two surgical commits resolved strict `showEmergency` WebGL state scoping and split heavy bundles dynamically before configuring multi-service Vercel routing on November 11.",
        ],
      },
    ],
    timeline: [
      { date: "2026-09-26", title: "Master Build Spec & Chennai Mesh", detail: "Scaffolded Neo-Brutalist Command Center, Deck.gl twin, and Kanathur camera topology." },
      { date: "2026-09-27", title: "Dual YOLOv8 + ByteTrack ANPR", detail: "Integrated supervision multi-zone counting, Vision Lab, and editorial UI redesign." },
      { date: "2026-10-08", title: "3D Digital Twin & Bundle Splitting", detail: "Added React Three Fiber + Webster heuristics and resolved WebGL blank screen regressions." },
      { date: "2026-11-11", title: "Multi-Service Production Deployment", detail: "Configured Vercel bindings and dynamic routing across edge/central services." },
    ],
    lessons: [
      "Moving OCR + tracking inference to the pole eliminates 99.82% of municipal cellular backhaul cost.",
      "WebGL 3D scenes inside complex dashboards need strict dynamic bundle splitting and isolated state boundaries.",
    ],
  },
  {
    slug: "project-k-openai-buildathon-journey",
    title: "100+ Commits to ₹3,00,000: Building Project K on NVIDIA Jetson, SUMO MARL & Three.js",
    projectTitle: "PROJECT K",
    dateRange: "November 2025 — February 2026",
    commitCount: "100+ Commits · OpenAI Academy Runner-Up",
    readTime: "7 min read",
    category: "Edge AI & Autonomous Traffic",
    coverImage: "/images/project_k_showcase.jpg",
    summary:
      "The four-month engineering sprint behind Project K — from fighting TensorFlow browser dependencies in November to ESP32-CAM live streams, 3D Three.js signal physics, automated SMTP ambulance dispatch, and a ₹3L national podium.",
    repoUrl: "https://github.com/narain-karti/Project-K",
    tags: ["NVIDIA Jetson", "YOLOv8", "SUMO MARL", "Three.js", "ESP32-CAM", "MQTT"],
    sections: [
      {
        heading: "1. Month 1: Fighting Dependency Hell & Getting Live Video Inference Running",
        body: [
          "Project K started on November 24, 2025 with pragmatic unblocking commits: pinning TensorFlow overrides in `.npmrc`, killing infinite postinstall scripts, and wiring live client-side COCO-SSD / YOLOv8 bounding boxes so uploaded intersection footage analyzed instantaneously.",
          "By December 22–23, we integrated hardware ESP32-CAM live video streaming alongside our first interactive 3D React Three Fiber intersection simulation featuring realistic vehicle acceleration/deceleration and emergency priority interrupts.",
        ],
      },
      {
        heading: "2. Edge Inference Under 120ms & SUMO Reward Modeling",
        body: [
          "To make multi-intersection signal coordination mathematically sound rather than heuristic guesswork, we benchmarked FP16 vs INT8 TensorRT quantization on NVIDIA Jetson Orin — reaching 42.8 FPS with only 0.8% night mAP trade-off — and trained SUMO multi-agent reinforcement learning agents.",
          "Intersections communicate via lightweight MQTT packets in <45ms, clearing green corridors 300 meters ahead of incoming ambulances while automatically falling back to local loop pressure heuristics if cloud backhaul drops.",
        ],
      },
      {
        heading: "3. February Crunch: Claymorphism Overhaul & One-Click Ambulance Dispatch",
        body: [
          "Ahead of national judging on February 14–16, 2026, commits centered on end-to-end operational realism: centered accident alert modals, Git LFS video asset optimization, and fixing SSL port 465 SMTP templates so collision detection triggered one-click `Deploy Ambulance` email alerts to live Render/Vercel responders.",
          "Project K finished as National Runner-Up at the OpenAI Academy × NxtWave GenAI Buildathon, earning a ₹3,00,000 cash grant.",
        ],
      },
    ],
    timeline: [
      { date: "2025-11-24", title: "ML Browser Pipeline & COCO-SSD", detail: "Fixed TF dependency locks and enabled real-time autoplay frame analysis." },
      { date: "2025-12-22", sha: "64cb129", title: "3D Three.js Signal Physics & ESP32-CAM", detail: "Launched 3D urban simulation with realistic physics and live ESP32-CAM edge vision." },
      { date: "2026-02-05", title: "Asset & Deployment Optimization", detail: "Moved demo footage to Git LFS and stripped unused SVG bundle bloat." },
      { date: "2026-02-15", sha: "943839d", title: "Automated Ambulance Dispatch & Podium", detail: "Hardened SSL 465 dispatch alerts; won ₹3L National Runner-Up at OpenAI Buildathon." },
    ],
    lessons: [
      "Judges and operators care about closed loops: detecting a crash means little unless an ambulance alert dispatches reliably.",
      "Thermal throttling on 4x Jetson streams forced clean frame-skip batching paired with CPU ByteTrack.",
    ],
  },
  {
    slug: "deceptrix-fixing-050-baseline-to-7-signal-fusion",
    title: "Eliminating the 0.50 Coin-Flip: Scaling DECEPTRIX to 7-Signal Forensic Fusion",
    projectTitle: "DECEPTRIX",
    dateRange: "August 2026 (42 Commits in 11 Days)",
    commitCount: "42 Commits · Enterprise v1.1 + v4.0",
    readTime: "6 min read",
    category: "Deepfake Forensics & MLOps",
    coverImage: "/images/deceptrix_showcase.jpg",
    summary:
      "Inside an intense 11-day engineering sprint taking a naive single-model deepfake detector to a 7-signal Bayesian ensemble with shot-cut jitter filtering, Celery workers, Grad-CAM, and ReportLab forensic PDFs.",
    repoUrl: "https://github.com/narain-karti/DECEPTRIX",
    tags: ["PyTorch ViT", "2D-FFT", "Bayesian Fusion", "Celery", "Grad-CAM", "ReportLab"],
    sections: [
      {
        heading: "1. Breaking Out of Stubbed Scores & Pydantic Crashes",
        body: [
          "Day one (`Aug 20, 2026`) was all about ruthless realism: fixing a hardcoded `0.50` fallback bug with deterministic signal scoring, resolving Pydantic model crashes, and building a sliding face-extraction tape with laser scanlines so analysts could watch keyframes decode live.",
        ],
      },
      {
        heading: "2. Why Shot Cuts Fooled Single-Frame Detectors",
        body: [
          "Real documentary videos contain abrupt camera cuts every few seconds, which look like massive landmark teleports to naive temporal detectors. On August 21–23, we calibrated the ViT sigmoid cutoff (`delta=3.8`), added a shot-cut jitter filter, and built DECEPTRIX v4.0's 7-signal fusion — combining spatial ViT, 2D-FFT upsampling frequency artifacts, 468-pt landmarks, frozen-face checks, lip-sync alignment, and AudioSpoof detection.",
        ],
      },
      {
        heading: "3. ReportLab 5-Page Dossiers & Celery Enterprise Upgrade",
        body: [
          "Auditors cannot cite a spinner in court or journalism. On August 21 (`11dcfa4`) we designed a 5-page Swiss-grid PDF forensic intelligence dossier via ReportLab containing Grad-CAM manipulation heatmaps and temporal charts, followed on August 26 by Celery + PostgreSQL + webhooks for async production batching.",
        ],
      },
    ],
    timeline: [
      { date: "2026-08-20", title: "Local MVP & Telemetry UI", detail: "Fixed hardcoded 0.50 score bug, Pydantic serialization, and live frame tape." },
      { date: "2026-08-21", sha: "11dcfa4", title: "ViT Delta Calibration & Swiss PDF", detail: "Tuned ViT sigmoid (delta=3.8), shot-cut jitter filter, and 5-page ReportLab dossier." },
      { date: "2026-08-23", title: "DECEPTRIX v4.0 (7-Signal Fusion)", detail: "Unified frozen-face, multi-face tracking, and 2D-FFT into a pure ensemble pipeline." },
      { date: "2026-08-26", title: "Enterprise Upgrade v1.1.0", detail: "Migrated heavy scans to Celery queues, PostgreSQL persistence, Grad-CAM & webhooks." },
    ],
    lessons: [
      "Always test deepfake detectors against normal multi-person movie clips with fast cuts — not clean lab datasets.",
    ],
  },
  {
    slug: "quorum-adversarial-boardroom",
    title: "Breaking LLM Sycophancy: Architecting Quorum's 6-Persona Adversarial Boardroom",
    projectTitle: "QUORUM",
    dateRange: "July 2026 · TakeOver'26 National Winner",
    commitCount: "4-Package Monorepo · Top Rank",
    readTime: "4 min read",
    category: "Multi-Agent Orchestration",
    coverImage: "/images/quorum_showcase.jpg",
    summary:
      "How orthogonal role objectives, a mathematically rewarded Contrarian agent, Nemotron-3-120B, and ReactFlow graph streaming earned Top Rank at TakeOver'26.",
    repoUrl: "https://github.com/narain-karti/Quorum",
    tags: ["ReactFlow", "Fastify", "SQLite WAL", "OpenRouter", "Monorepo"],
    sections: [
      {
        heading: "1. The Agreement Echo Chamber",
        body: [
          "When we first prompted six LLM personas sequentially to evaluate startup decisions, they politely agreed with each other within two turns. Worse, early schema mismatches (`be719df`) between `advisor_id` keys and ReactFlow's `CanvasView` broke live edge streaming.",
        ],
      },
      {
        heading: "2. Orthogonal Incentives & Real-Time ReactFlow Graphs",
        body: [
          "By locking mutually opposing constraints — CFO guarding runway, CTO interrogating architecture limits, CMO pushing growth, and an adversarial Contrarian rewarded exclusively for surfacing unhedged risks — blind-spot discovery jumped 3.2×. Migrating execution to OpenRouter + Nemotron-3-120B (`e2f7fb5`) gave each persona deep reasoning bandwidth while Fastify + SQLite streamed debate graphs in under 80ms.",
        ],
      },
    ],
    timeline: [
      { date: "2026-07-07", sha: "b90f8fc", title: "4-Package Monorepo Init", detail: "Separated web, server, orchestration engine, and shared-types packages." },
      { date: "2026-07-07", sha: "e2f7fb5", title: "Nemotron-3-120B Migration", detail: "Switched orchestrator backend to OpenRouter + Nemotron-3-120B for deeper critiques." },
      { date: "2026-07-07", sha: "be719df", title: "CanvasView Graph Sync Fix", detail: "Resolved advisor_id bindings for live ReactFlow debate trees; won Top Rank." },
    ],
    lessons: [
      "Monorepo shared types between orchestrator backend and ReactFlow canvas prevent painful runtime graph mismatches.",
    ],
  },
  {
    slug: "walkthrough-universal-agent-video-engine",
    title: "Teaching 6 AI Coding Agents to Direct Studio Demos with Walkthrough v2",
    projectTitle: "WALKTHROUGH",
    dateRange: "October 2026",
    commitCount: "v2.0 Engine · 6 AI IDEs",
    readTime: "4 min read",
    category: "Developer Tooling & Motion Systems",
    coverImage: "/images/hardware_lab.jpg",
    summary:
      "Fusing Playwright capture, OneTake spring cursor physics, bounded focus cameras, event-scored SFX, and a universal installer across Antigravity, Claude Code, Cursor, Windsurf, Copilot, and Cline.",
    repoUrl: "https://github.com/narain-karti/Walkthrough",
    tags: ["Playwright", "Cursor Physics", "FFmpeg", "Agent Skills"],
    sections: [
      {
        heading: "1. Treating Demo Recording Like a Deterministic Build",
        body: [
          "Human-made product walkthroughs rely on intentional pointer choreography, smooth bounded zooms, and clean audio pacing. Walkthrough encapsulates that into a declarative `storyboard.json` v3 contract validated before Chromium ever launches.",
        ],
      },
      {
        heading: "2. Fusing OneTake Physics & Universal IDE Discovery",
        body: [
          "Across rapid October releases (`0c50bc1` -> `991310e` -> `da1b379`), we fused OneTake's shutter-blur and camera engine with `sfx_palette.py` (which scores clicks and transitions straight from `events.json`), added a baseline visual quality oracle (`verify.py`), and shipped `walkthrough install --global` to configure rules for 6 major coding agents automatically.",
        ],
      },
    ],
    timeline: [
      { date: "2026-10-03", sha: "0c92450", title: "Playwright + Clamped Camera", detail: "Built pointer choreography, bounded focus zoom, and TTS sync." },
      { date: "2026-10-03", sha: "0c50bc1", title: "OneTake v2 Motion Fusion", detail: "Added shutter blur, event-scored acoustic SFX room, and quality oracle." },
      { date: "2026-10-04", sha: "da1b379", title: "Universal 6-Agent Installer", detail: "Added auto-install targets for Claude Code, Cursor, Antigravity, Windsurf, Copilot, Cline." },
    ],
    lessons: [
      "Explicitly documenting current system boundaries alongside roadmaps builds far more engineering trust than hype.",
    ],
  },
  {
    slug: "axoweb-zero-to-7l-and-aws-microservices",
    title: "Scaling AXOWEB Past ₹7L in 90 Days: Tri-App Dispatch & 5-Role AWS Serverless",
    projectTitle: "AXOWEB & CLOUD",
    dateRange: "2025 – 2026",
    commitCount: "Commercial Venture · BRAVE National 1st",
    readTime: "5 min read",
    category: "Distributed Cloud & Venture Engineering",
    coverImage: "/images/axoweb_showcase.jpg",
    summary:
      "How co-founding AXOWEB Technologies paired rapid commercial execution (Ideal Foundation, Swathanthra, SKR, Udaya) with reusable Flutter/Firebase dispatch apps and a 5-role AWS serverless grievance architecture.",
    repoUrl: "https://github.com/narain-karti",
    tags: ["AWS Lambda", "RDS PostgreSQL", "SQS / Redis", "Cognito", "Flutter", "Firebase"],
    sections: [
      {
        heading: "1. Standardizing Commercial Delivery Without Reinventing Every Stack",
        body: [
          "Co-founding AXOWEB meant owning every stage from initial client discovery and commercial pitches to production cloud deployment. Delivering platforms for clients including Ideal Foundation, Swathanthra, SKR, and Udaya while crossing ₹7,00,000+ in verified billing within 90 days required ruthless architectural reuse.",
          "Instead of custom one-off backends per contract, we converged on two repeatable blueprints: a Flutter + Firebase real-time dispatch template for regional operations, and an event-decoupled AWS serverless core for institutional workloads.",
        ],
      },
      {
        heading: "2. The Tri-App On-Demand Dispatch Suite",
        body: [
          "Regional car-wash and field-service operators struggled with manual WhatsApp scheduling and lost partner utilization. We shipped a synchronized three-application ecosystem — Customer booking app, Field Partner app, and React Admin analytics dashboard — backed by Firebase Auth, Cloud Functions, Firestore geo-queries, and Google Maps routing.",
        ],
      },
      {
        heading: "3. Isolating 5 Governance Tiers on AWS Serverless",
        body: [
          "For university grievance workflows serving Students, Faculty, HODs, Deans, and Ombudsmen, role isolation could not rely on fragile frontend checks. We enforced AWS Cognito cryptographic JWT RBAC claims at API Gateway, routed traffic into stateless TypeScript AWS Lambda services, buffered burst writes through Amazon SQS, and backed ACID relational ledgers with Amazon RDS PostgreSQL and ElastiCache Redis session lookups.",
        ],
        codeSnippet: `Client Portal -> AWS Cognito (5-Role JWT Claims) -> API Gateway -> AWS Lambda -> Amazon SQS -> RDS PostgreSQL (+ ElastiCache Redis)`,
      },
    ],
    timeline: [
      { date: "2025", title: "AXOWEB Venture Launch", detail: "Co-founded studio and standardized Next.js + AWS/Firebase commercial delivery modules." },
      { date: "2025", title: "Tri-App Flutter/Firebase Dispatch", detail: "Shipped Customer, Partner, and React Admin apps with live Firestore geo-tracking and Maps routing." },
      { date: "2025", title: "5-Role AWS Grievance Architecture", detail: "Built Cognito + API Gateway + Lambda + SQS + RDS PostgreSQL + ElastiCache Redis microservices." },
      { date: "2025", title: "BRAVE Startups National 1st & ₹7L+ Revenue", detail: "Awarded 1st Place, Best Innovation & People's Choice after crossing ₹7,00,000+ verified revenue in 90 days." },
    ],
    lessons: [
      "Shipping revenue-generating client software enforces unit economics and failure isolation faster than any textbook.",
      "Queue-buffering burst workloads with SQS in front of relational RDS databases eliminates connection-pool exhaustion during traffic spikes.",
    ],
  },
];
