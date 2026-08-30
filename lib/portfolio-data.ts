export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'AI_ML' | 'DATA_SCIENCE' | 'AGENTS' | 'COMPUTER_VISION' | 'SPACE' | 'FULL_STACK';
  badge?: string;
  awardHighlight?: string;
  tags: string[];
  status: 'SHIPPED' | 'ACTIVE_BUILD' | 'RESEARCH_DOSSIER' | 'OPEN_SOURCE' | 'PROTOTYPE';
  year: string;
  summary: string;
  image?: string;
  githubUrl?: string;
  pypiUrl?: string;
  demoUrl?: string;
  pipCommand?: string;
  architectureNodes: string[];
  caseStudy: {
    heroTagline: string;
    problem: string;
    insight: string;
    constraints: string[];
    goals: string[];
    thoughtProcess: string;
    architectureDiagram: {
      steps: { title: string; desc: string; icon: string; tech: string }[];
    };
    techChoices: { tech: string; why: string }[];
    implementationHighlights: string[];
    challengesAndFailures: string[];
    iterations: string[];
    results: string[];
    metricsOrFacts: { label: string; value: string; note: string }[];
    whatILearned: string;
    futureDirection: string;
  };
}

export interface LabExperiment {
  id: string;
  code: string;
  date: string;
  title: string;
  category: 'AI/ML' | 'AGENTS' | 'VISION' | 'SYSTEMS' | 'SPACE';
  hypothesis: string;
  methodology: string;
  result: string;
  status: 'VALIDATED' | 'IN_PROGRESS' | 'ARCHIVED_LEARNING' | 'BENCHMARKED';
  takeaway: string;
  tags: string[];
  color: 'yellow' | 'green' | 'pink' | 'blue' | 'orange';
  rotation: number;
}

export interface ExperienceChapter {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  summary: string;
  narrativeFlow: string;
  achievements: string[];
  projectsBuilt: {
    name: string;
    category: string;
    stack: string[];
    description: string;
    architectureFlow?: string[];
    deliverables?: string[];
  }[];
  architectureFlow?: { title: string; desc: string }[];
  impactNotes: string[];
  skills: string[];
}

export interface AchievementReceipt {
  id: string;
  title: string;
  organization: string;
  award: string;
  prize?: string;
  year: string;
  category: 'STARTUP' | 'AI_HACKATHON' | 'SPACE' | 'ACADEMIC';
  evidenceStory: string;
  linkedProject?: string;
  stampText: string;
  verified: boolean;
}

export interface BuildLogItem {
  id: string;
  date: string;
  tag: string;
  title: string;
  note: string;
  systemState: string;
  projectRef?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    levelDescription: string;
    appliedIn: string[];
  }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Narain Karti',
    callsign: 'NARAIN.OS',
    version: 'v2026.08.30',
    corePositioning: 'I build intelligent systems, multi-agent architectures, and production cloud backends.',
    technicalDescriptors: ['AI/ML', 'DATA SCIENCE', 'INTELLIGENT AGENTS', 'COMPUTER VISION', 'DISTRIBUTED SYSTEMS'],
    systemStatus: 'ONLINE / ACTIVE RESEARCH & BUILD',
    location: 'Chennai, India',
    phone: '+91-9176257316',
    github: 'https://github.com/narain-karti',
    linkedin: 'https://www.linkedin.com/in/narainkarti',
    email: 'studyusage2008@gmail.com',
    secondaryEmail: 'narainkarti.work@gmail.com',
    avatar: '/images/hero_avatar.jpg',
    education: [
      {
        institution: 'Indian Institute of Technology Madras (IIT Madras)',
        degree: 'B.S. Data Science and Applications',
        timeline: 'Concurrent Degree · Expected 2029',
        focus: 'Statistical Computing, Machine Learning, Mathematical Foundations & Large-Scale Data Systems',
        verified: true,
      },
      {
        institution: 'NxtWave Institute of Advanced Technologies',
        degree: 'B.Tech Computer Science Engineering (AI/ML)',
        timeline: 'Expected 2029',
        focus: 'Deep Learning, Edge AI, Distributed Systems, Software Architecture & Full-Stack Systems',
        verified: true,
      },
    ],
  },

  proofStrip: [
    {
      title: 'BRAVE Startups National Winner',
      subtitle: 'Best Innovation & People’s Choice Awards',
      stat: 'National 1st',
      context: 'Axoweb Technologies · ₹7L+ Revenue in 3 Mo',
      badge: 'FOUNDER_GOLD',
    },
    {
      title: 'OpenAI Academy × NxtWave Buildathon',
      subtitle: 'National Runner-Up · Project K',
      stat: '₹3,00,000',
      context: 'Edge AI Traffic Signal Optimization Platform',
      badge: 'TOP_2_NATIONAL',
    },
    {
      title: 'TakeOver’26 National Hackathon',
      subtitle: 'Top Rank · Quorum Multi-Agent Platform',
      stat: 'TOP RANK',
      context: 'Autonomous Board of Directors Dialectic Engine',
      badge: 'AGENT_SYSTEM',
    },
    {
      title: 'DataDoc PyPI Package',
      subtitle: 'Published Open-Source Dataset Engineering Tool',
      stat: '0.42s / 1M',
      context: '14× Faster than Pandas EDA · Polars Kernel',
      badge: 'PYPI_LIVE',
    },
    {
      title: '5+ Hackathon Victories',
      subtitle: 'Including 3 National-Level Titles',
      stat: '3× NATIONAL',
      context: 'Rapid Prototyping & Production Systems',
      badge: 'VERIFIED_TRACK_RECORD',
    },
    {
      title: 'IIT Madras & NxtWave IAT',
      subtitle: 'Concurrent BS Data Science & B.Tech AI/ML',
      stat: 'DUAL TRACK',
      context: 'Mathematical Rigor + Production Engineering',
      badge: 'ACADEMIC_FOUNDATION',
    },
  ],

  featuredProjects: [
    {
      id: 'datadoc',
      number: '01',
      title: 'DATADOC',
      subtitle: 'Open-Source Autonomous Dataset Diagnostics & Curation Engine',
      category: 'DATA_SCIENCE' as const,
      badge: 'PUBLISHED TO PYPI · OPEN SOURCE',
      pipCommand: 'pip install datadoc-cli',
      image: '/images/datadoc_showcase.jpg',
      tags: ['POLARS', 'PYTHON', 'DATA ENGINEERING', 'AI AGENTS', 'CLI', 'PYPI', 'RUST CORE'],
      status: 'OPEN_SOURCE' as const,
      year: '2026',
      summary: 'High-performance dataset engineering CLI and agentic cleaner built with Polars and tool-calling agents. Diagnoses anomalies, outliers, schema drifts, and null distributions with 0.42s execution on 1M rows.',
      githubUrl: 'https://github.com/narain-karti/DATADOC',
      pypiUrl: 'https://pypi.org/project/datadoc-cli/',
      architectureNodes: ['Polars LazyFrame Ingestion', 'Deterministic Profiler', 'Agentic Repair Planner', 'Rich Terminal TUI', 'Reproducible Pipeline Exporter'],
      caseStudy: {
        heroTagline: 'Stop writing 200 lines of Pandas cleaning boilerplate for every dataset.',
        problem: 'Data scientists spend up to 70% of their bandwidth wrangling dirty tabular data, troubleshooting silent schema drifts, imputing missing values, and generating redundant exploratory charts with slow legacy tools.',
        insight: 'Combining Polars’ multi-threaded columnar execution engine with a structured agentic planner creates a deterministic, reproducible CLI tool that inspects, audits, and fixes dirty datasets in milliseconds.',
        constraints: [
          'Sub-second execution on multi-gigabyte CSV/Parquet files without memory blowups.',
          'Zero hallucinated data alterations: all mutations must generate mathematical audit diffs.',
          'Works seamlessly offline via CLI and supports interactive agent chat mode with tool calls.',
        ],
        goals: [
          'Publish as a zero-friction PyPI package installable in one command (`pip install datadoc-cli`).',
          'Benchmark at 10–14× faster than Pandas-based exploratory data analysis tools.',
          'Provide both deterministic rule-based recipes and LLM-assisted semantic fixes.',
        ],
        thoughtProcess: 'We architected DataDoc around a two-layer engine: a core Polars analytical kernel running zero-copy schema checks, and an LLM-assisted tool-calling planner that generates reproducible Python code recipes.',
        architectureDiagram: {
          steps: [
            { title: 'Data Ingestion Kernel', desc: 'Zero-copy scanning of CSV, Parquet, and JSON lines via Polars LazyFrames.', icon: 'Database', tech: 'Polars / Apache Arrow' },
            { title: 'Deterministic Diagnostics', desc: 'Statistical outlier profiling (IQR/Z-score), missingness correlation, cardinality audits.', icon: 'CheckCircle', tech: 'Rust / Python Core' },
            { title: 'Agentic Diagnostic Planner', desc: 'Analyzes anomalies, recommends healing strategies, and drafts step-by-step cleaning recipes.', icon: 'Bot', tech: 'Tool-Calling Agent' },
            { title: 'Interactive CLI & Rich TUI', desc: 'Terminal dashboard with colored histograms, diff tables, and one-key exports.', icon: 'Terminal', tech: 'Rich / Click' },
            { title: 'Audit Manifest Export', desc: 'Outputs verified clean dataset + fully reproducible pure-Python data pipeline script.', icon: 'FileText', tech: 'Export Engine' },
          ],
        },
        techChoices: [
          { tech: 'Polars (over Pandas)', why: 'Multi-threaded query engine written in Rust; handles 10M rows in seconds with minimal RAM overhead.' },
          { tech: 'Rich TUI Library', why: 'Provides professional terminal graphics, live spinners, and accessible ASCII data tables.' },
          { tech: 'Deterministic AST Generation', why: 'Guarantees the user gets actual executable Python code, not a black-box magical blob.' },
        ],
        implementationHighlights: [
          'Published package to official PyPI repository (`datadoc-cli`) with clean setup and automated testing.',
          'Built intelligent column type inference capable of identifying dirty timestamp formats, currency strings, and boolean flags.',
          'Integrated natural-language query engine allowing users to ask questions like "Which customer columns have high collinearity?".',
        ],
        challengesAndFailures: [
          'Large unindexed CSVs caused memory spikes during exploratory correlation calculations; mitigated by switching strictly to lazy evaluation and chunked sampling.',
        ],
        iterations: [
          'v0.1: Quick script for personal hackathon data preparation.',
          'v0.5: Modular Python package with Polars backend.',
          'v1.0: Full PyPI release with interactive CLI, agent planner, and reproducible script export.',
        ],
        results: [
          'Successfully released on PyPI (`pip install datadoc-cli`).',
          'Processed 1M-row test benchmarks in 0.42 seconds (14× faster than Pandas profiling).',
          'Adopted as default data prep tool across multiple university hackathon teams.',
        ],
        metricsOrFacts: [
          { label: 'Registry', value: 'PyPI Live', note: 'pip install datadoc-cli' },
          { label: 'Speedup', value: '14× vs Pandas', note: '0.42s on 1M row benchmark' },
          { label: 'Memory Footprint', value: '-65%', note: 'Through Polars lazy scanning' },
          { label: 'Format Support', value: 'Parquet / CSV / JSON', note: 'Zero-copy Arrow memory' },
        ],
        whatILearned: 'Developer tools win on tactile speed. When an open-source CLI gives instant, deterministic feedback in the terminal, it changes how developers interact with data.',
        futureDirection: 'Automated synthetic data generation matching exact column distribution and differential privacy guarantees.',
      },
    },

    {
      id: 'quorum',
      number: '02',
      title: 'QUORUM',
      subtitle: 'Multi-Agent Autonomous Executive Board of Directors & Dialectic Engine',
      category: 'AGENTS' as const,
      badge: 'TAKEOVER’26 TOP RANK',
      awardHighlight: 'TakeOver’26 National Hackathon Winner',
      image: '/images/quorum_showcase.jpg',
      tags: ['MULTI-AGENT AI', 'SYSTEM ORCHESTRATION', 'REACTFLOW', 'FASTIFY', 'SQLITE', 'GRAPH UI', 'MONOREPO'],
      status: 'SHIPPED' as const,
      year: '2026',
      summary: 'Collaborative multi-agent debate platform simulating an autonomous C-suite board (CEO, CMO, CFO, CTO, COO & Contrarian) to stress-test business decisions, challenge blind spots, and synthesize actionable consensus.',
      githubUrl: 'https://github.com/narain-karti/Quorum',
      architectureNodes: ['Strategic Prompt Ingestion', 'Role Dispatcher & State', 'Structured Dialectic Bus', 'ReactFlow Graph Stream', 'Executive Memo Synthesizer'],
      caseStudy: {
        heroTagline: 'Why make high-stakes business decisions with one biased prompt when an autonomous board can stress-test every angle?',
        problem: 'Single-prompt LLM outputs suffer from sycophancy, missing financial rigor, technical blind spots, and unvetted risk assumptions.',
        insight: 'By instantiating specialized adversarial agent personas (CFO guarding burn rate, CTO challenging technical feasibility, Contrarian breaking assumptions) governed by a debate orchestrator, the resulting decision tree is radically more resilient.',
        constraints: [
          'Must prevent infinite debate loops and hallucination cascades between conversational agents.',
          'Real-time visualization of agent debate turns with dynamic graph edges in ReactFlow.',
          'Sub-second local message persistence and structured executive summary generation.',
        ],
        goals: [
          'Build an intuitive visual graph UI showing live debates between C-suite personas.',
          'Implement a strict consensus algorithm with a dedicated Contrarian Devil’s Advocate agent.',
          'Produce structured strategic dossiers: Risk Matrices, Resource Allocations, and Go-To-Market steps.',
        ],
        thoughtProcess: 'We designed Quorum with an asynchronous node-based message bus across a 4-package monorepo (web, server, engine, shared-types). The orchestrator collects proposals, assigns structured critique turns to relevant executives, and scores agreement metrics before synthesizing the final decision memorandum.',
        architectureDiagram: {
          steps: [
            { title: 'Strategic Prompt Ingestion', desc: 'User submits high-stakes company initiative or scenario to the board.', icon: 'FileText', tech: 'Fastify / TypeScript' },
            { title: 'Role Dispatcher & Context Init', desc: 'Initializes CEO, CFO, CMO, CTO, COO & Contrarian with independent memory stores.', icon: 'Users', tech: 'Orchestrator Engine' },
            { title: 'Structured Dialectic Rounds', desc: 'Agents interrogate claims, calculate financial burn, and flag architectural risks.', icon: 'MessageSquare', tech: 'Multi-Agent Turn Bus' },
            { title: 'Graph UI Edge Streaming', desc: 'Real-time WebSocket streaming of speech turns and consensus weights to ReactFlow UI.', icon: 'GitGraph', tech: 'ReactFlow / WebSockets' },
            { title: 'Consensus & Executive Memo', desc: 'Synthesizes unanimous actionable recommendations, risk register, and dissents.', icon: 'Award', tech: 'SQLite / PDF Engine' },
          ],
        },
        techChoices: [
          { tech: 'ReactFlow', why: 'Visual node graph mapping how opinions converge and where conflicts arise between agents.' },
          { tech: 'Fastify + TypeScript', why: 'Low-latency asynchronous event loop capable of streaming multi-agent tokens simultaneously.' },
          { tech: 'SQLite (WAL Mode)', why: 'Zero-config instant local persistence for multi-turn debate sessions.' },
        ],
        implementationHighlights: [
          'Engineered a unique "Contrarian Protocol" where the contrarian agent is mathematically rewarded for discovering non-obvious failure modes.',
          'Created real-time debate graph visualizing live sentiment alignment and argument rebuttals between agents.',
          'Built executive summary exporter creating boardroom-ready PDF briefs with risk-weighted scores.',
        ],
        challengesAndFailures: [
          'Initial tests resulted in polite echo chambers where agents agreed too quickly; solved by injecting explicit conflicting objective functions (e.g. CFO minimizes burn, CMO maximizes aggressive customer acquisition).',
        ],
        iterations: [
          'v1: Linear chat transcript with sequential prompts.',
          'v2: Branching tree dialogue without visual graph.',
          'v3: Full ReactFlow graph orchestration with real-time token streaming and automated consensus scoring.',
        ],
        results: [
          'Awarded Top Rank at TakeOver’26 National Hackathon.',
          'Demonstrated 3.2× higher risk-identification rate compared to single-agent strategic prompting.',
          'Structured across clean 4-package monorepo architecture.',
        ],
        metricsOrFacts: [
          { label: 'Award', value: 'Top Rank', note: 'TakeOver’26 National Hackathon' },
          { label: 'Personas', value: '6 Autonomous Agents', note: 'CEO, CFO, CMO, CTO, COO, Contrarian' },
          { label: 'Debate Cycles', value: '3-Stage Dialectic', note: 'Proposal → Critique → Consensus' },
          { label: 'Latency', value: '<80ms', note: 'Real-time WebSocket stream' },
        ],
        whatILearned: 'Multi-agent systems only deliver value when agent incentives are genuinely orthogonal. Harmony produces generic answers; structured dialectic conflict produces insight.',
        futureDirection: 'Dynamic human-in-the-loop intervention allowing users to override individual agent votes during live debates.',
      },
    },

    {
      id: 'project-k',
      number: '03',
      title: 'PROJECT K',
      subtitle: 'AI-Powered Traffic Intelligence & Emergency Corridor Preemption Platform',
      category: 'AI_ML' as const,
      badge: 'NATIONAL RUNNER-UP · ₹3L PRIZE',
      awardHighlight: 'OpenAI Academy × NxtWave GenAI Buildathon',
      image: '/images/project_k_showcase.jpg',
      tags: ['EDGE AI', 'COMPUTER VISION', 'MULTI-AGENT RL', 'YOLOV8', 'SUMO', 'NVIDIA JETSON', 'MQTT'],
      status: 'SHIPPED' as const,
      year: '2026',
      summary: 'High-throughput edge computer vision and reinforcement learning coordination system for intelligent intersections, instant accident detection, and zero-latency emergency vehicle green-wave prioritization.',
      githubUrl: 'https://github.com/narain-karti/Project-K',
      architectureNodes: ['NVIDIA Jetson RTSP Capture', 'YOLOv8 Edge Perception', 'MARL Signal Optimizer', 'MQTT Telemetry Mesh', 'GIS Emergency Corridor Control'],
      caseStudy: {
        heroTagline: 'Transforming dumb traffic timers into self-optimizing, incident-aware edge intelligence.',
        problem: 'Fixed-cycle traffic signals inflict billions in lost productivity, while emergency responders face lethal congestion bottlenecks and accident reports suffer 8–12 minute human discovery delays.',
        insight: 'Traffic lights shouldn’t run on naive countdown timers; intersections form a distributed multi-agent graph where local edge vision can coordinate dynamically with neighboring nodes via lightweight telemetry.',
        constraints: [
          'Sub-120ms real-time inferencing on constrained edge hardware (NVIDIA Jetson Orin Nano / Xavier).',
          'Intermittent cloud connectivity requiring fully autonomous fail-safe local fallback.',
          'Strict privacy compliance: zero raw video streaming to central servers; telemetry limited to vector counts and incident bounding descriptors.',
        ],
        goals: [
          'Achieve 95%+ vehicle class tracking accuracy across inclement weather and occlusion.',
          'Reduce emergency vehicle transit delays by >40% through automatic acoustic/vision green wave routing.',
          'Enable seamless edge-to-cloud mesh communication with MQTT backhaul.',
        ],
        thoughtProcess: 'Instead of expensive centralized video streaming, we pushed YOLOv8 inference to the physical intersection post. We used SUMO (Simulation of Urban MObility) to train multi-agent reinforcement learning reward models balancing queue lengths against wait penalties.',
        architectureDiagram: {
          steps: [
            { title: 'Edge Video Capture', desc: '4× 1080p RTSP feeds processed on NVIDIA Jetson with TensorRT acceleration.', icon: 'Camera', tech: 'Jetson / RTSP' },
            { title: 'YOLOv8 Edge Inference', desc: 'Real-time object detection, vehicle counting, lane density calculation & incident detection.', icon: 'Cpu', tech: 'YOLOv8 / DeepSORT' },
            { title: 'Local RL Signal Agent', desc: 'Calculates dynamic phase splits based on real-time queue pressure and priority cues.', icon: 'Activity', tech: 'Multi-Agent RL / SUMO' },
            { title: 'MQTT Telemetry Mesh', desc: 'Broadcasts lane density & incident triggers to neighboring nodes & cloud dashboard in <45ms.', icon: 'Radio', tech: 'MQTT / Mosquitto' },
            { title: 'Cloud Command Deck', desc: 'Live GIS mapping, telemetry playback, emergency corridor orchestration, and audit logs.', icon: 'Layout', tech: 'AWS IoT / Next.js / Azure' },
          ],
        },
        techChoices: [
          { tech: 'NVIDIA Jetson + TensorRT', why: 'Enabled FP16 quantization achieving 30+ FPS multi-stream throughput under 15W power constraints.' },
          { tech: 'SUMO Simulator', why: 'Allowed synthetic stress testing of 10,000+ extreme traffic jam and multi-ambulance edge cases.' },
          { tech: 'MQTT Protocol', why: 'Ultra-low overhead publish-subscribe architecture tolerant of high packet drop environments.' },
        ],
        implementationHighlights: [
          'Engineered custom spatio-temporal anomaly detector for instant multi-lane accident detection with zero manual triggers.',
          'Developed emergency vehicle optical & siren signature fusion to trigger pre-emptive green corridors 300 meters upstream.',
          'Designed decentralized fail-safe: if cloud or peer connectivity drops, local Jetson switches to local pressure heuristics without resetting cycle.',
        ],
        challengesAndFailures: [
          'Nighttime glare and heavy rain caused initial false-positive vehicle counts; resolved by training synthetic contrast-augmented YOLO checkpoints.',
          'Jetson thermal throttling during sustained 4-camera inferencing; solved by batching frame skips and offloading tracking to ByteTrack on CPU.',
        ],
        iterations: [
          'v1: Pure central server architecture (too slow, high bandwidth cost).',
          'v2: Jetson edge inference with fixed threshold switching.',
          'v3: Full Multi-Agent RL coordination with MQTT grid handshakes.',
        ],
        results: [
          'Recognized as National Runner-Up at OpenAI Academy × NxtWave Buildathon with ₹3,00,000 cash grant.',
          'Demonstrated 38% queue reduction in simulated high-density downtown grid scenarios.',
          'Accident detection latency under 1.2 seconds from collision impact.',
        ],
        metricsOrFacts: [
          { label: 'Award', value: 'National Runner-Up', note: '₹3,00,000 prize grant' },
          { label: 'Latency', value: '<120ms', note: 'Full edge perception cycle' },
          { label: 'Delay Reduction', value: '38%', note: 'Intersection queue improvement' },
          { label: 'Ambulance Clearance', value: '100%', note: 'Zero transit hold-ups' },
        ],
        whatILearned: 'Distributed systems thrive on local autonomy. Designing edge nodes that do not depend on cloud uptime makes mission-critical infrastructure fundamentally unbreakable.',
        futureDirection: 'V2X (Vehicle-to-Everything) DSRC radio protocol integration for direct connected-car telemetry exchange.',
      },
    },

    {
      id: 'axoweb',
      number: '04',
      title: 'AXOWEB PLATFORM & AWS CLOUD',
      subtitle: 'Tri-App Flutter Ecosystem & 5-Role Enterprise AWS Microservices Platform',
      category: 'FULL_STACK' as const,
      badge: 'BRAVE NATIONAL WINNER · ₹7L+ REVENUE',
      awardHighlight: 'BRAVE Startups National Competition Winner',
      image: '/images/axoweb_showcase.jpg',
      tags: ['STARTUP FOUNDER', 'AWS SERVERLESS', 'LAMBDA', 'RDS POSTGRESQL', 'ELASTICACHE', 'SQS', 'COGNITO', 'FLUTTER', 'REACT', 'FIREBASE'],
      status: 'SHIPPED' as const,
      year: '2025–2026',
      summary: 'Co-founded AI/digital solutions startup; won BRAVE National Competition and grew revenue past ₹7L in 3 months. Shipped 3-app car-wash platform (Flutter, React, Firebase) and engineered an AWS microservice architecture for a 5-role university grievance platform.',
      githubUrl: 'https://axoweb.in',
      architectureNodes: ['Tri-App Flutter/React Suite', 'AWS Cognito Auth Gateway', 'Lambda Serverless Microservices', 'SQS Async Booking Queue', 'RDS PostgreSQL & Redis Tier'],
      caseStudy: {
        heroTagline: 'Architecting scalable serverless backends and commercial mobile applications from zero to revenue.',
        problem: 'Service businesses lose up to 40% of bookings due to uncoordinated field operations and fragmented customer dispatch, while institutional grievance systems fail without strict role-based access control.',
        insight: 'By decomposing operations into distinct persona-specific mobile frontends (Customer, Field Partner, Admin) connected to an event-driven AWS serverless backbone, dispatch efficiency and auditability scale seamlessly.',
        constraints: [
          'Sub-200ms API response times across peak multi-tenant booking rushes.',
          'Zero-loss transactional ledger with automatic queue buffering during network dips.',
          'Strict 5-tier role segregation (Students, Faculty, HOD, Dean, Ombudsman) with cryptographic audit trails.',
        ],
        goals: [
          'Deliver tri-app mobile ecosystem on Flutter & React with Firebase real-time state synchronization.',
          'Engineer AWS Lambda + RDS PostgreSQL + ElastiCache Redis backend handling 10,000+ monthly requests.',
          'Scale startup revenue past ₹7,00,000+ within 90 days of commercial launch.',
        ],
        thoughtProcess: 'We prioritized rapid execution and operational stability. Rather than a fragile monolithic backend, we engineered event-driven microservices on AWS Lambda with SQS queues decoupling high-volume incoming requests from transactional database writes.',
        architectureDiagram: {
          steps: [
            { title: 'Client Multi-App Suite', desc: 'Flutter & React cross-platform apps for Customers, Partners, and Admins.', icon: 'Smartphone', tech: 'Flutter / React' },
            { title: 'Cognito & Auth Gateway', desc: 'JWT verification and 5-tier RBAC permission enforcement.', icon: 'Lock', tech: 'AWS Cognito / API Gateway' },
            { title: 'Serverless Compute & SQS', desc: 'Decoupled Lambda microservices processing asynchronous booking queues.', icon: 'Cpu', tech: 'AWS Lambda / SQS' },
            { title: 'Transactional & Cache Tier', desc: 'PostgreSQL RDS for ACID records with ElastiCache Redis for fast session reads.', icon: 'Database', tech: 'RDS Postgres / Redis' },
            { title: 'Real-time WebSocket Push', desc: 'Instant live tracking and push notifications dispatched to field partners.', icon: 'Bell', tech: 'Firebase Cloud Messaging' },
          ],
        },
        techChoices: [
          { tech: 'Flutter & React', why: 'Maximum code reuse and fluid 60 FPS mobile UX across iOS and Android.' },
          { tech: 'AWS Lambda + SQS', why: 'Scale-to-zero cost efficiency with resilient asynchronous message buffering.' },
          { tech: 'RDS PostgreSQL + Redis', why: 'Rock-solid relational consistency paired with sub-5ms caching for active dispatches.' },
        ],
        implementationHighlights: [
          'Led end-to-end full-stack development, client pitch decks, and commercial business proposals.',
          'Engineered automatic geo-fenced partner assignment algorithm minimizing dispatch drive times by 32%.',
          'Configured CI/CD pipelines with automated testing and zero-downtime blue-green deployments.',
        ],
        challengesAndFailures: [
          'Database connection spikes during booking rushes initially saturated PostgreSQL pools; solved by provisioning AWS RDS Proxy and Redis connection multiplexing.',
        ],
        iterations: [
          'v1: Direct Firebase monolith (insufficient for complex multi-tier institutional permissions).',
          'v2: Hybrid AWS Lambda microservices with Redis caching and RDS PostgreSQL persistence.',
        ],
        results: [
          'Won 1st Place & Best Innovation in the BRAVE Startups National Competition.',
          'Generated ₹7,00,000+ in verified client revenue in the first 3 months of operations.',
          'Successfully deployed grievance management architecture across university faculty and student bodies.',
        ],
        metricsOrFacts: [
          { label: 'Revenue', value: '₹7,00,000+', note: 'Within first 90 days' },
          { label: 'Competition', value: '1st Place', note: 'BRAVE Startups National Winner' },
          { label: 'Apps Shipped', value: '3 Live Apps', note: 'Flutter / React / Firebase' },
          { label: 'RBAC Roles', value: '5 Tiers', note: 'AWS Cognito & PostgreSQL' },
        ],
        whatILearned: 'Writing code is only half the battle. Building a profitable software company means understanding unit economics, customer friction, and designing architecture that scales gracefully under stress.',
        futureDirection: 'Dynamic ML-based demand surge pricing and automated predictive fleet routing.',
      },
    },

    {
      id: 'deceptrix',
      number: '05',
      title: 'DECEPTRIX',
      subtitle: 'Multimodal Video Forensic & Deepfake Temporal Artifact Detector',
      category: 'COMPUTER_VISION' as const,
      badge: 'FORENSIC VISION SUITE',
      tags: ['YOLOV8', 'VISION TRANSFORMERS', 'DEEPFAKE DETECTION', 'TEMPORAL CONSENSUS', 'PYTORCH', 'OPENCV', 'FFT'],
      status: 'PROTOTYPE' as const,
      year: '2026',
      image: '/images/deceptrix_showcase.jpg',
      summary: 'Deep learning forensic framework combining frame-level spatial anomaly detection with temporal optical-flow consistency models and 2D FFT spectral analysis to detect synthetic media, face swaps, and generative video alterations.',
      githubUrl: 'https://github.com/narain-karti/DECEPTRIX',
      architectureNodes: ['Video Frame Buffer', '2D FFT Spectral Analysis', 'Temporal Consistency Transformer', 'Multimodal Consensus Scorer', 'Forensic Heatmap Report'],
      caseStudy: {
        heroTagline: 'Exposing synthetic video manipulation through micro-expression temporal drift and frequency artifacts.',
        problem: 'Generative AI video and face-swap tools have made deepfakes indistinguishable to the human eye, enabling identity fraud, fake evidence, and social deception.',
        insight: 'While individual generated frames can fool spatial classifiers, generative models consistently fail to maintain biological pulse signatures (rPPG) and temporal optical-flow micro-consistency across 30+ frames.',
        constraints: [
          'Must withstand standard social media video compression (H.264 / H.265 compression artifacts).',
          'Provide transparent frame-by-frame heatmap explanations for human forensic auditors.',
          'Process video streams without needing server-grade supercomputing clusters.',
        ],
        goals: [
          'Achieve 92%+ detection accuracy on unseen face-swap datasets.',
          'Extract spatial frequency domain (FFT) anomalies indicative of GAN upsampling.',
          'Generate downloadable forensic audit certificates highlighting manipulated timestamps.',
        ],
        thoughtProcess: 'We paired a spatial CNN backbone (for blending boundary detection) with a temporal recurrent transformer (evaluating cross-frame consistency of eye blinks and facial blood flow pulse).',
        architectureDiagram: {
          steps: [
            { title: 'Video Ingestion & Frame Split', desc: 'Extracts 60fps frame buffers and crops facial regions via MTCNN / YOLOv8-face.', icon: 'Video', tech: 'OpenCV / YOLO' },
            { title: 'Spatial Frequency FFT Analysis', desc: 'Identifies high-frequency spectral artifacts left behind by generative upscalers.', icon: 'Activity', tech: 'PyTorch / 2D FFT' },
            { title: 'Temporal Consistency Model', desc: 'Analyzes optical flow vectors and eye-blink periodicity across consecutive frames.', icon: 'Layers', tech: 'Vision Transformer / LSTM' },
            { title: 'Multimodal Consensus Scorer', desc: 'Aggregates spatial, spectral, and temporal confidence metrics into unified fake index.', icon: 'CheckSquare', tech: 'Ensemble Engine' },
            { title: 'Forensic Heatmap Report', desc: 'Renders bounding box heatmaps over manipulated frames with evidentiary timestamps.', icon: 'FileText', tech: 'Reporting Deck' },
          ],
        },
        techChoices: [
          { tech: 'PyTorch + TorchVision', why: 'Rapid prototyping of custom loss functions penalizing temporal jitter in synthetic faces.' },
          { tech: 'FFT Spectral Filters', why: 'Captures artifact patterns that survive aggressive resolution downscaling.' },
          { tech: 'Grad-CAM Visualizations', why: 'Essential for legal and journalistic auditability by visually spotlighting blended borders.' },
        ],
        implementationHighlights: [
          'Trained on diverse cross-generator datasets containing DeepFaceLab, FaceForensics++, and synthetic Sora-style clips.',
          'Engineered custom temporal consistency metric calculating frame-to-frame landmark distance divergence.',
          'Built web-based inspector dashboard allowing users to scrub through videos and inspect live manipulation probabilities.',
        ],
        challengesAndFailures: [
          'High compression YouTube videos initially triggered false positives due to macroblocking; resolved by adding compression noise augmentation during training.',
        ],
        iterations: [
          'v1: Single-frame ResNet classifier (fragile against compression).',
          'v2: Dual-stream spatial + FFT model.',
          'v3: Multimodal temporal consensus pipeline with Grad-CAM visualization.',
        ],
        results: [
          'Demonstrated 93.4% accuracy on FaceForensics++ benchmark dataset.',
          'Successfully flagged 98% of deepfake sample videos in controlled blind tests.',
          'Provided sub-2-second audit generation for 15-second mobile video clips.',
        ],
        metricsOrFacts: [
          { label: 'Accuracy', value: '93.4%', note: 'On FaceForensics++ benchmark' },
          { label: 'Analysis Speed', value: '45 FPS', note: 'On RTX GPU stream' },
          { label: 'Modalities', value: '3 Streams', note: 'Spatial, Spectral FFT, Temporal' },
          { label: 'Output', value: 'Grad-CAM Heatmaps', note: 'Explainable forensic audits' },
        ],
        whatILearned: 'Generative models create beautiful illusions in static space, but physics and biology betray them over time.',
        futureDirection: 'Audio-visual synchronization analysis detecting lip-sync phoneme micro-delays in synthetic voice clones.',
      },
    },

    {
      id: 'beyond-earth',
      number: '06',
      title: 'BEYOND EARTH: NASA SPACE SETTLEMENT',
      subtitle: 'Closed-Loop Orbital Habitat & Life-Support Engineering Blueprint',
      category: 'SPACE' as const,
      badge: 'NASA ZONAL AWARD WINNER',
      awardHighlight: 'NASA Space Settlement Design Contest',
      image: '/images/space_settlement.jpg',
      tags: ['SPACE SYSTEMS', 'ARTIFICIAL GRAVITY', 'LIFE SUPPORT', 'LUNAR MINING', 'CLOSED-LOOP SYSTEMS', 'ORBITAL MECHANICS'],
      status: 'RESEARCH_DOSSIER' as const,
      year: '2024–2025',
      summary: 'Comprehensive engineering field notebook and mission dossier designing a permanent rotating space settlement with artificial gravity, closed-loop hydroponic life support, lunar ice mining logistics, and off-world governance.',
      architectureNodes: ['Centrifugal Gravity Ring', 'Regolith Shielding', 'CELSS Life Support Loop', 'Lunar Mass Drivers', 'Decentralized OS'],
      caseStudy: {
        heroTagline: 'Engineering a self-sustaining human civilization beyond Earth’s gravitational well.',
        problem: 'Long-duration human space habitation faces existential failure points: bone density decay from microgravity, lethal cosmic radiation, closed-loop oxygen/water shortages, and supply-chain vulnerability.',
        insight: 'True off-world permanence requires geometric optimization of centrifugal rotational gravity, combined with in-situ resource utilization (ISRU) from lunar ice and carbonaceous chondrite asteroids.',
        constraints: [
          'Maintain 1.0G Earth-equivalent artificial gravity at the habitat perimeter without causing vestibular vertigo.',
          '99.5%+ closed-loop reclamation efficiency for water, nitrogen, and oxygen.',
          'Passive radiation shielding withstanding solar particle events (SPE) and galactic cosmic rays (GCR).',
        ],
        goals: [
          'Design modular rotating torus habitat housing 10,000 residents sustainably.',
          'Model thermodynamic equilibrium, closed-loop biological life support systems (CELSS), and agrarian yields.',
          'Structure complete socio-economic, industrial manufacturing, and governance frameworks.',
        ],
        thoughtProcess: 'Rather than treating space habitat design as science fiction, we approached it as an uncompromising thermodynamic and mass-balance engineering problem based on published aerospace literature and physics constraints.',
        architectureDiagram: {
          steps: [
            { title: 'Centrifugal Gravity Geometry', desc: 'Torus radius R = 224m rotating at 2.0 RPM to produce exactly 1.0g (9.81 m/s²) at outer rim.', icon: 'RotateCw', tech: 'Rotational Physics' },
            { title: 'Multi-Layer Regolith Shielding', desc: '5-meter lunar regolith outer shell providing 500 g/cm² passive mass shielding against GCR.', icon: 'Shield', tech: 'Mass Shielding' },
            { title: 'CELSS Life Support Loop', desc: 'Tiered aeroponic farming, Chlorella vulgaris algal photobioreactors, and Sabatier CO2 reduction.', icon: 'Sun', tech: 'Biological CELSS' },
            { title: 'Lunar ISRU & Mass Drivers', desc: 'Electromagnetic mass drivers launching lunar polar ice and titanium ores to L5 orbital node.', icon: 'Compass', tech: 'ISRU Logistics' },
            { title: 'Civilization Operating System', desc: 'Decentralized cryptographic resource ledger, municipal governance, and sealed bulkheads.', icon: 'Cpu', tech: 'Socio-Technical OS' },
          ],
        },
        techChoices: [
          { tech: 'Toroidal Hull Geometry', why: 'Maximizes usable high-gravity surface area while optimizing structural stress-to-volume ratios.' },
          { tech: 'Chlorella Photobioreactors', why: 'Provides rapid O2 regeneration and biomass production with 4× the photon efficiency of traditional crops.' },
          { tech: 'Lagrangian L5 Placement', why: 'Gravitationally stable orbit requiring minimal station-keeping propellant over multi-decade lifespans.' },
        ],
        implementationHighlights: [
          'Calculated exact habitat mass budgets, structural tension load on carbon-nanotube composite spokes, and atmospheric pressure gradients.',
          'Engineered dual-loop water recovery combining vapor condensation, multi-barrier reverse osmosis, and supercritical water oxidation (SCWO).',
          'Authored full 80+ page technical dossier featuring detailed architectural cutaway drawings, resource maps, and power budgets.',
        ],
        challengesAndFailures: [
          'Initial smaller radius (120m) resulted in excessive Coriolis differential causing inner ear disorientation; redesigned to 224m radius with lower RPM.',
        ],
        iterations: [
          'v1: Cylinder habitat concept (excessive atmospheric mass requirement).',
          'v2: Stanford Torus revision with updated ISRU material supply chains.',
          'v3: Final award-winning blueprint submitted to NASA Space Settlement Contest.',
        ],
        results: [
          'Awarded Zonal Award in the prestigious NASA Space Settlement Design Contest.',
          'Recognized for exceptional engineering rigor in life-support mass balance and structural calculations.',
          'Established foundational systems-thinking mindset applied to all subsequent software and AI architectures.',
        ],
        metricsOrFacts: [
          { label: 'Award', value: 'NASA Zonal Award', note: 'International Design Contest' },
          { label: 'Habitat Radius', value: '224 Meters', note: 'Produces 1.0g artificial gravity' },
          { label: 'Water Recovery', value: '99.7% Loop', note: 'SCWO + RO filtration' },
          { label: 'Contest Rank', value: 'Zonal Winner', note: 'Space Systems Engineering' },
        ],
        whatILearned: 'Deep engineering is about respecting physical first principles. Whether designing a life-support loop in orbit or a distributed agent cluster on Earth, mass, energy, and information must balance.',
        futureDirection: 'Computational simulation of habitat thermal dissipation using radiative heat exchangers in orbital shadow cycles.',
      },
    },
  ],

  otherProjects: [
    {
      name: 'RETROD-PMS-LEAD-GEN',
      description: 'PMS Lead Generation and Prospecting Automation Tool built with TypeScript.',
      url: 'https://github.com/narain-karti/RETROD-PMS-LEAD-GEN',
      language: 'TypeScript',
      stars: 0,
      tags: ['TypeScript', 'Lead Gen', 'Automation', 'PMS Tool'],
    },
    {
      name: 'Expense-Splitter',
      description: 'Native mobile expense splitting and group financial reconciliation application built in Kotlin.',
      url: 'https://github.com/narain-karti/Expense-Splitter',
      language: 'Kotlin',
      stars: 1,
      tags: ['Kotlin', 'Android', 'Mobile', 'Fintech'],
    },
    {
      name: 'yui-ai',
      description: 'TypeScript AI assistant and developer automation utility.',
      url: 'https://github.com/narain-karti/yui-ai',
      language: 'TypeScript',
      stars: 0,
      tags: ['TypeScript', 'AI', 'Developer Tools'],
    },
    {
      name: 'KRED',
      description: 'Modern financial calculation and credit analysis module.',
      url: 'https://github.com/narain-karti/KRED',
      language: 'TypeScript',
      stars: 0,
      tags: ['TypeScript', 'Finance', 'Web'],
    },
  ],

  experienceChapters: [
    {
      id: 'axoweb',
      company: 'AXOWEB Technologies',
      role: 'Co-Founder',
      period: '2025 — Present',
      location: 'Chennai, India',
      badge: '₹7L+ REVENUE · BRAVE NATIONAL WINNER',
      summary: 'Co-founded an AI/digital solutions startup; won the BRAVE Startups National Competition and grew revenue past ₹7L within 3 months. Shipped a three-app Flutter/React/Firebase car-wash platform and engineered an AWS microservice architecture for a university grievance platform.',
      narrativeFlow: 'Led technical architecture, developer team, and business client delivery from initial pitch decks to production deployment.',
      achievements: [
        'Won 1st Place & Best Innovation in the BRAVE Startups National Competition.',
        'Grew verified enterprise and client revenue past ₹7,00,000 within the first 90 days.',
        'Shipped a 3-app on-demand mobile platform (Customer, Field Partner, Admin) with real-time Firebase tracking.',
        'Designed AWS serverless microservices (Lambda, RDS PostgreSQL, ElastiCache Redis, SQS, Cognito) supporting 5 distinct user access roles.',
      ],
      projectsBuilt: [
        {
          name: 'Tri-App On-Demand Car-Wash Platform',
          category: 'Mobile & Cloud',
          stack: ['Flutter', 'React', 'Firebase', 'Google Maps API'],
          description: 'Customer booking app, partner dispatch app, and admin analytics dashboard with real-time partner routing.',
          deliverables: [
            'Cross-platform Flutter mobile applications for customer & field partner roles',
            'Real-time Firestore geo-tracking with Google Maps routing integration',
            'Admin analytics dashboard built in React with automated dispatch metrics',
          ],
          architectureFlow: ['Flutter Mobile', 'Firebase Auth', 'Cloud Functions', 'Firestore', 'Admin React Dashboard'],
        },
        {
          name: '5-Role University Grievance Platform',
          category: 'AWS Enterprise Microservices',
          stack: ['AWS Lambda', 'RDS PostgreSQL', 'ElastiCache', 'SQS', 'Cognito'],
          description: 'Scalable role-based grievance tracking system serving Students, Faculty, HODs, Deans, and Ombudsmen.',
          deliverables: [
            'AWS Cognito user pools with 5-tier cryptographic RBAC claims',
            'Event-driven Lambda microservices decoupled via SQS queue buffers',
            'Relational PostgreSQL schema with ElastiCache Redis session caching',
          ],
          architectureFlow: ['Client Portal', 'AWS Cognito', 'API Gateway', 'Lambda Compute', 'SQS Queues', 'RDS PostgreSQL'],
        },
      ],
      architectureFlow: [
        { title: 'Auth & RBAC', desc: 'AWS Cognito JWT verification & 5-tier role mapping' },
        { title: 'API Gateway', desc: 'REST endpoint routing & rate limiting' },
        { title: 'Compute Layer', desc: 'Stateless AWS Lambda TypeScript microservices' },
        { title: 'Buffer & Queue', desc: 'Amazon SQS for resilient event persistence' },
        { title: 'Persistence', desc: 'Amazon RDS PostgreSQL with connection proxy' },
        { title: 'Cache Tier', desc: 'Amazon ElastiCache Redis for fast lookups' },
      ],
      impactNotes: ['₹7L+ Revenue in 3 months', 'National 1st Place Trophy', '3 Shipped Mobile Apps', '5-Role AWS Microservices'],
      skills: ['AWS Lambda', 'PostgreSQL', 'Flutter', 'React', 'Redis', 'SQS', 'Cognito', 'Firebase', 'System Design'],
    },

    {
      id: 'thinkerscave',
      company: 'ThinkersCave',
      role: 'Software Developer (Intern)',
      period: '2025',
      location: 'Chennai, India',
      badge: 'RAG & KNOWLEDGE GRAPHS',
      summary: 'Restructured client data into a knowledge graph and built a RAG + tool-calling customer support agent, deployed from a single engine across a website chatbot and WhatsApp bot. Contributed to an AI-integrated LMS and hotel management system.',
      narrativeFlow: 'Engineered conversational intelligence backends and integrated knowledge graph embeddings for deterministic customer query resolution.',
      achievements: [
        'Restructured unstructured corporate data into a graph database for high-precision semantic retrieval.',
        'Built a RAG + tool-calling customer support agent deployed across website and WhatsApp channel.',
        'Contributed core features to an AI-integrated Learning Management System (LMS) and hotel management backend.',
      ],
      projectsBuilt: [
        {
          name: 'Multi-Channel RAG Support Agent',
          category: 'Generative AI & Agents',
          stack: ['LangChain', 'Python', 'Vector DB', 'WhatsApp Business API', 'Express'],
          description: 'Unified agentic support bot resolving complex customer queries with tool-calling capabilities.',
          deliverables: [
            'Knowledge graph schema structuring client product catalogs & FAQs',
            'Tool-calling dispatcher triggering internal order status APIs',
            'Omnichannel deployment across Next.js web chat and WhatsApp webhook',
          ],
          architectureFlow: ['User Message', 'WhatsApp / Webhook', 'FastAPI Server', 'Vector Retrieval', 'LLM Agent', 'Tool Execution'],
        },
      ],
      architectureFlow: [
        { title: 'Message Ingestion', desc: 'Webhook listener for WhatsApp & Web Chat' },
        { title: 'Semantic Router', desc: 'Intent classification & query decomposition' },
        { title: 'Graph Retrieval', desc: 'Knowledge graph entity lookup & vector search' },
        { title: 'Tool Execution', desc: 'Deterministic API calls for order & booking status' },
        { title: 'Agent Synthesis', desc: 'Grounded LLM response formatting' },
        { title: 'Response Push', desc: 'Sub-second reply dispatch to client channel' },
      ],
      impactNotes: ['Cross-Platform Web & WhatsApp Dispatch', 'Knowledge Graph Schema Design', 'LMS & Hotel System AI Upgrades'],
      skills: ['LangChain', 'Python', 'RAG', 'Vector Databases', 'Knowledge Graphs', 'Node.js', 'Express'],
    },

    {
      id: 'microdolphin',
      company: 'Microdolphin',
      role: 'Agentic AI Engineer (Intern)',
      period: '2025',
      location: 'Remote',
      badge: 'MULTI-AGENT ORCHESTRATION',
      summary: 'Designed backend architecture and multi-agent orchestration for a production-grade platform that generates full-stack applications directly from natural-language prompts.',
      narrativeFlow: 'Engineered autonomous coding agent workflows with recursive feedback loops and code generation sandboxes.',
      achievements: [
        'Designed backend architecture and multi-agent orchestration for an autonomous prompt-to-app platform.',
        'Implemented validation loops where reviewer agents inspect generated AST code before deployment.',
      ],
      projectsBuilt: [
        {
          name: 'Natural Language Prompt-to-App Engine',
          category: 'Agentic AI Systems',
          stack: ['Python', 'FastAPI', 'Multi-Agent LLMs', 'Docker', 'AST Parsing'],
          description: 'Autonomous orchestration decomposing user intent into schema, API routes, and frontend views.',
          deliverables: [
            'Planner, Architect, Coder, and Linter multi-agent pipeline',
            'Isolated Docker container sandboxes for running build tests',
            'Real-time streaming generation progress to client web dashboard',
          ],
          architectureFlow: ['User Prompt', 'Planner Agent', 'Schema Agent', 'Frontend Agent', 'Docker Test', 'Deployment'],
        },
      ],
      architectureFlow: [
        { title: 'Prompt Ingestion', desc: 'Deconstructs user requirement into technical specifications' },
        { title: 'System Architect', desc: 'Generates DB schema and API route signatures' },
        { title: 'Code Generator', desc: 'Synthesizes Next.js components and backend logic' },
        { title: 'AST Linter', desc: 'Static analysis and syntax tree verification' },
        { title: 'Sandbox Execution', desc: 'Docker ephemeral container builds & unit tests' },
        { title: 'Client Bundle', desc: 'Live preview URL dispatch in <45s' },
      ],
      impactNotes: ['End-to-End Application Synthesis', 'Multi-Agent Turn Orchestration', 'Code Sandboxing & AST Verification'],
      skills: ['Agentic AI', 'FastAPI', 'Python', 'Prompt Engineering', 'Model Evaluation', 'Docker'],
    },

    {
      id: 'tribefortis',
      company: 'Tribe Fortis & Allytriz Technologies',
      role: 'Mobile/Web Developer (Intern)',
      period: '2024 — 2025',
      location: 'Chennai, India',
      badge: 'MOBILE & CLOUD FULL-STACK',
      summary: 'Built AI-driven fitness app features (real-time tracking, trainer-synced workout/diet routines) at Tribe Fortis, and delivered full-stack web applications from design through deployment at Allytriz.',
      narrativeFlow: 'Shipped production mobile interfaces, real-time sync, and client web portals with robust cloud deployments.',
      achievements: [
        'Engineered real-time fitness metrics tracking and trainer-synced diet routines in Flutter/React Native.',
        'Delivered full-stack client web applications from Figma prototypes to cloud production deployments at Allytriz.',
      ],
      projectsBuilt: [
        {
          name: 'AI-Driven Fitness Routine Platform',
          category: 'Mobile App',
          stack: ['Flutter', 'Node.js', 'PostgreSQL', 'Cloud Deployments'],
          description: 'Interactive workout tracking with dynamic dietary sync for personal trainers and gym members.',
          deliverables: [
            'Interactive workout rep & calorie tracking with local offline sync',
            'Trainer portal with customizable workout templates and client progress logs',
          ],
          architectureFlow: ['Mobile App', 'Node.js API', 'PostgreSQL', 'Cloud Storage'],
        },
      ],
      impactNotes: ['Real-Time Mobile Biometrics', 'Client Portals Delivered', 'Cloud Deployments'],
      skills: ['Flutter', 'React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Git'],
    },
  ],

  achievements: [
    {
      id: 'openai-buildathon',
      title: 'National Runner-Up (₹3,00,000 Cash Prize)',
      organization: 'OpenAI Academy × NxtWave GenAI Buildathon',
      award: 'National Runner-Up',
      prize: '₹3,00,000',
      year: '2026',
      category: 'AI_HACKATHON' as const,
      evidenceStory: 'Recognized on the national stage for Project K: an edge AI traffic intelligence platform combining YOLOv8 on NVIDIA Jetson, SUMO reinforcement learning simulation, and MQTT emergency vehicle preemption.',
      linkedProject: 'project-k',
      stampText: 'OPENAI ACADEMY RUNNER-UP',
      verified: true,
    },
    {
      id: 'takeover-26',
      title: 'Top Rank, National Hackathon TakeOver’26',
      organization: 'TakeOver’26 National Hackathon',
      award: 'Top Rank Podium Winner',
      prize: 'National Award',
      year: '2026',
      category: 'AI_HACKATHON' as const,
      evidenceStory: 'Won Top Rank for Quorum: a multi-agent autonomous executive board debate platform simulating C-suite personas (CEO, CMO, CFO, CTO, COO, Contrarian) with ReactFlow graph visualizations.',
      linkedProject: 'quorum',
      stampText: 'TAKEOVER 26 TOP RANK',
      verified: true,
    },
    {
      id: 'brave-startups',
      title: 'BRAVE Startups National Competition Winner',
      organization: 'BRAVE Startups National Initiative',
      award: '1st Place · People’s Choice & Best Innovation',
      prize: 'National Champion',
      year: '2025',
      category: 'STARTUP' as const,
      evidenceStory: 'Awarded 1st Place with AXOWEB Technologies for innovative enterprise AI solutions and scaled commercial revenue past ₹7,00,000 within 3 months.',
      linkedProject: 'axoweb',
      stampText: 'BRAVE NATIONAL 1ST',
      verified: true,
    },
    {
      id: 'nasa-settlement',
      title: 'Zonal Award, NASA Space Settlement Contest',
      organization: 'NASA Space Settlement Design Contest',
      award: 'Zonal Award Winner',
      prize: 'International Recognition',
      year: '2024',
      category: 'SPACE' as const,
      evidenceStory: 'Authored an 80+ page technical engineering blueprint designing a 224m rotating torus space settlement with 1.0g artificial gravity and closed-loop biological life support.',
      linkedProject: 'beyond-earth',
      stampText: 'NASA ZONAL AWARD',
      verified: true,
    },
    {
      id: 'five-hackathons',
      title: '5+ Hackathon Victories (3× National Level)',
      organization: 'Various National Tech Hackathons',
      award: '5× Podium Finishes',
      prize: 'Podium Honors',
      year: '2024–2026',
      category: 'AI_HACKATHON' as const,
      evidenceStory: 'Proven rapid prototyping ability, leading engineering teams to top podium finishes in national-level AI, systems, and full-stack competitions.',
      stampText: '5X PODIUM WINS',
      verified: true,
    },
  ],

  achievementsReceipts: [
    {
      id: 'openai-buildathon',
      title: 'National Runner-Up (₹3,00,000 Cash Prize)',
      organization: 'OpenAI Academy × NxtWave GenAI Buildathon',
      award: 'National Runner-Up',
      prize: '₹3,00,000',
      year: '2026',
      category: 'AI_HACKATHON' as const,
      evidenceStory: 'Recognized on the national stage for Project K: an edge AI traffic intelligence platform combining YOLOv8 on NVIDIA Jetson, SUMO reinforcement learning simulation, and MQTT emergency vehicle preemption.',
      linkedProject: 'project-k',
      stampText: 'OPENAI ACADEMY RUNNER-UP',
      verified: true,
    },
    {
      id: 'takeover-26',
      title: 'Top Rank, National Hackathon TakeOver’26',
      organization: 'TakeOver’26 National Hackathon',
      award: 'Top Rank Podium Winner',
      prize: 'National Award',
      year: '2026',
      category: 'AI_HACKATHON' as const,
      evidenceStory: 'Won Top Rank for Quorum: a multi-agent autonomous executive board debate platform simulating C-suite personas (CEO, CMO, CFO, CTO, COO, Contrarian) with ReactFlow graph visualizations.',
      linkedProject: 'quorum',
      stampText: 'TAKEOVER 26 TOP RANK',
      verified: true,
    },
    {
      id: 'brave-startups',
      title: 'BRAVE Startups National Competition Winner',
      organization: 'BRAVE Startups National Initiative',
      award: '1st Place · People’s Choice & Best Innovation',
      prize: 'National Champion',
      year: '2025',
      category: 'STARTUP' as const,
      evidenceStory: 'Awarded 1st Place with AXOWEB Technologies for innovative enterprise AI solutions and scaled commercial revenue past ₹7,00,000 within 3 months.',
      linkedProject: 'axoweb',
      stampText: 'BRAVE NATIONAL 1ST',
      verified: true,
    },
    {
      id: 'nasa-settlement',
      title: 'Zonal Award, NASA Space Settlement Contest',
      organization: 'NASA Space Settlement Design Contest',
      award: 'Zonal Award Winner',
      prize: 'International Recognition',
      year: '2024',
      category: 'SPACE' as const,
      evidenceStory: 'Authored an 80+ page technical engineering blueprint designing a 224m rotating torus space settlement with 1.0g artificial gravity and closed-loop biological life support.',
      linkedProject: 'beyond-earth',
      stampText: 'NASA ZONAL AWARD',
      verified: true,
    },
    {
      id: 'five-hackathons',
      title: '5+ Hackathon Victories (3× National Level)',
      organization: 'Various National Tech Hackathons',
      award: '5× Podium Finishes',
      prize: 'Podium Honors',
      year: '2024–2026',
      category: 'AI_HACKATHON' as const,
      evidenceStory: 'Proven rapid prototyping ability, leading engineering teams to top podium finishes in national-level AI, systems, and full-stack competitions.',
      stampText: '5X PODIUM WINS',
      verified: true,
    },
  ],

  labExperiments: [
    {
      id: 'exp-01',
      code: 'EXP-JETSON-01',
      date: 'AUG 2026',
      title: 'YOLOv8 FP16 vs INT8 Quantization on Jetson Orin',
      category: 'VISION' as const,
      hypothesis: 'INT8 TensorRT quantization will yield 2.4x FPS increase with less than 1.5% mAP drop in low-light traffic intersection video.',
      methodology: 'Calibrated post-training quantization on 5,000 Chennai intersection night frames using TensorRT 8.6.',
      result: 'Achieved 42.8 FPS (up from 18.2 FPS FP32) with 0.8% mAP degradation.',
      status: 'VALIDATED' as const,
      takeaway: 'INT8 calibration is fully viable for edge intersection deployment under 15W TDP.',
      tags: ['TensorRT', 'YOLOv8', 'Edge AI', 'NVIDIA Jetson'],
      color: 'yellow' as const,
      rotation: -1.5,
    },
    {
      id: 'exp-02',
      code: 'EXP-POLARS-02',
      date: 'JUL 2026',
      title: 'Polars Lazy Evaluation vs Pandas Chunking on 10M Rows',
      category: 'SYSTEMS' as const,
      hypothesis: 'Streaming LazyFrame execution reduces peak memory usage by over 60% compared to chunked Pandas reader.',
      methodology: 'Benchmarked 10GB financial transaction CSV with schema type coercion and IQR outlier filtering.',
      result: 'Polars executed in 3.8s with 420MB RAM ceiling; Pandas chunking took 34.2s with 3.1GB peak RAM.',
      status: 'BENCHMARKED' as const,
      takeaway: 'Standardized on Polars as the default data kernel for the DataDoc CLI package.',
      tags: ['Polars', 'Rust', 'Memory Optimization', 'Arrow'],
      color: 'green' as const,
      rotation: 2.0,
    },
    {
      id: 'exp-03',
      code: 'EXP-AGENT-03',
      date: 'AUG 2026',
      title: 'Adversarial Contrarian Persona Tuning in Multi-Agent Debate',
      category: 'AGENTS' as const,
      hypothesis: 'Rewarding the Contrarian agent for finding non-obvious failure modes reduces decision confirmation bias by 40%.',
      methodology: 'Ran 50 simulated venture investment memos through Quorum board with and without adversarial loss penalties.',
      result: 'Adversarial configuration identified 3.2x more hidden liabilities and unhedged market risks.',
      status: 'VALIDATED' as const,
      takeaway: 'Sycophancy in LLM swarms is broken only when agent objective functions are mathematically orthogonal.',
      tags: ['Multi-Agent', 'Game Theory', 'Prompt Tuning', 'Quorum'],
      color: 'pink' as const,
      rotation: -2.0,
    },
    {
      id: 'exp-04',
      code: 'EXP-CELSS-04',
      date: 'DEC 2024',
      title: 'Chlorella Vulgaris Photobioreactor Mass Balance in Microgravity',
      category: 'SPACE' as const,
      hypothesis: 'Continuous light-harvesting bioreactors achieve 4.2x photon conversion efficiency vs terrestrial aeroponics in Stanford Torus.',
      methodology: 'Modeled gas exchange coefficients and algal biomass productivity for a 10,000 inhabitant closed-loop habitat.',
      result: 'Calculated 99.7% closed-loop O2/CO2 cycle requiring 140m² algal panel area per 100 residents.',
      status: 'VALIDATED' as const,
      takeaway: 'Biological CELSS integration was core to the NASA Space Settlement Zonal Award winning dossier.',
      tags: ['Space Systems', 'CELSS', 'NASA', 'Thermodynamics'],
      color: 'blue' as const,
      rotation: 1.5,
    },
    {
      id: 'exp-05',
      code: 'EXP-FORENSIC-05',
      date: 'AUG 2026',
      title: '2D FFT Spectral Artifact Detection on AI Generated Video',
      category: 'AI/ML' as const,
      hypothesis: 'Generative upscaling filters leave distinct high-frequency checkerboard signatures in the 2D Fourier domain.',
      methodology: 'Computed 2D FFT magnitude spectra across 1,000 deepfake and genuine facial crops at varying compression levels.',
      result: 'Spectral energy distribution anomalies classified synthetic faces with 93.4% AUC before facial feature analysis.',
      status: 'VALIDATED' as const,
      takeaway: 'Formed the baseline spectral feature stream for the DECEPTRIX forensic inspection engine.',
      tags: ['Fourier Transform', 'PyTorch', 'Media Forensics', 'Computer Vision'],
      color: 'orange' as const,
      rotation: -1.0,
    },
  ],

  buildLog: [
    {
      id: 'log-01',
      date: 'AUG 2026',
      tag: 'PYPI RELEASE',
      title: 'Published DataDoc CLI v1.0.0 to PyPI',
      note: 'Released open-source dataset engineering CLI powered by Polars. 0.42s execution benchmark on 1M rows with interactive terminal TUI.',
      systemState: 'PRODUCTION DEPLOYED',
      projectRef: 'datadoc',
    },
    {
      id: 'log-02',
      date: 'AUG 2026',
      tag: 'PODIUM WIN',
      title: 'Top Rank at TakeOver’26 National Hackathon',
      note: 'Shipped Quorum: 4-package monorepo multi-agent executive boardroom debate platform with real-time ReactFlow graph streaming.',
      systemState: 'AWARD VERIFIED',
      projectRef: 'quorum',
    },
    {
      id: 'log-03',
      date: 'AUG 2026',
      tag: 'NATIONAL 2ND',
      title: 'OpenAI Academy × NxtWave Buildathon Runner-Up (₹3L)',
      note: 'Benchmarked Project K: YOLOv8 edge vision on NVIDIA Jetson, SUMO multi-agent RL, and MQTT emergency preemption.',
      systemState: 'GRANT AWARDED',
      projectRef: 'project-k',
    },
    {
      id: 'log-04',
      date: '2025–2026',
      tag: 'COMMERCIAL',
      title: 'AXOWEB Scaled to ₹7L+ Revenue & Won BRAVE Startups',
      note: 'Co-founded startup, shipped 3-app car-wash platform on Flutter/Firebase, and engineered AWS 5-role grievance microservices.',
      systemState: 'REVENUE ACTIVE',
      projectRef: 'axoweb',
    },
    {
      id: 'log-05',
      date: '2025',
      tag: 'INTERNSHIP',
      title: 'Knowledge Graph RAG Agent at ThinkersCave',
      note: 'Restructured corporate data into graph embeddings and deployed omnichannel tool-calling chatbot across web and WhatsApp.',
      systemState: 'SHIPPED TO PRODUCTION',
      projectRef: 'thinkerscave',
    },
  ],

  openSourceData: {
    pinnedRepos: [
      {
        name: 'DATADOC',
        badge: 'PYPI PACKAGE',
        description: 'Autonomous dataset diagnostics and curation engine built with Polars and agentic AI. Sub-second execution on multi-million row datasets.',
        url: 'https://github.com/narain-karti/DATADOC',
        language: 'Python',
        languageColor: '#3572A5',
        stars: 7,
      },
      {
        name: 'Quorum',
        badge: 'MONOREPO',
        description: 'Multi-agent autonomous executive board debate platform with ReactFlow graph UI, Fastify server, and SQLite storage.',
        url: 'https://github.com/narain-karti/Quorum',
        language: 'TypeScript',
        languageColor: '#3178c6',
        stars: 2,
      },
      {
        name: 'Project-K',
        badge: 'EDGE AI',
        description: 'Edge-cloud traffic intelligence system running YOLOv8 on NVIDIA Jetson with SUMO RL and MQTT emergency green wave.',
        url: 'https://github.com/narain-karti/Project-K',
        language: 'Python',
        languageColor: '#3572A5',
        stars: 1,
      },
      {
        name: 'DECEPTRIX',
        badge: 'FORENSICS',
        description: 'Explainable media forensics and deepfake detection suite combining spatial CNNs, 2D FFT spectral filters, and temporal transformers.',
        url: 'https://github.com/narain-karti/DECEPTRIX',
        language: 'Python',
        languageColor: '#3572A5',
        stars: 1,
      },
      {
        name: 'RETROD-PMS-LEAD-GEN',
        badge: 'AUTOMATION',
        description: 'PMS lead generation and pipeline qualification automation tool built with TypeScript.',
        url: 'https://github.com/narain-karti/RETROD-PMS-LEAD-GEN',
        language: 'TypeScript',
        languageColor: '#3178c6',
        stars: 0,
      },
      {
        name: 'Expense-Splitter',
        badge: 'ANDROID',
        description: 'Native mobile expense splitting and group financial reconciliation application built in Kotlin.',
        url: 'https://github.com/narain-karti/Expense-Splitter',
        language: 'Kotlin',
        languageColor: '#A97BFF',
        stars: 1,
      },
    ],
    curatedResearch: [
      { name: 'SUMO Traffic RL', tag: 'SIMULATION', desc: 'Custom reinforcement learning reward functions for multi-intersection coordination' },
      { name: 'Polars Arrow Memory', tag: 'ENGINEERING', desc: 'Zero-copy data exploration algorithms and LazyFrame query planners' },
      { name: 'LangChain Tool Routing', tag: 'AGENTIC AI', desc: 'Multi-channel WhatsApp and web dispatch pipelines with stateful memory' },
      { name: 'NVIDIA TensorRT', tag: 'EDGE INFERENCE', desc: 'FP16 and INT8 quantization benchmarks on Jetson Orin Nano modules' },
    ],
  },

  skillsMatrix: [
    {
      category: 'AI / ML & AGENTIC SYSTEMS',
      description: 'Production architectures, autonomous agents, and model evaluation',
      skills: [
        { name: 'Agentic AI & Multi-Agent Swarms', levelDescription: 'Adversarial and collaborative multi-agent loop orchestration', appliedIn: ['Quorum', 'Microdolphin', 'ThinkersCave'] },
        { name: 'RAG & Knowledge Graphs', levelDescription: 'Semantic entity indexing and tool-calling conversational bots', appliedIn: ['ThinkersCave'] },
        { name: 'Computer Vision & YOLOv8', levelDescription: 'Real-time multi-class tracking, edge detection, and anomaly filtering', appliedIn: ['Project K', 'DECEPTRIX'] },
        { name: 'Deep Learning & PyTorch', levelDescription: 'Custom loss functions, vision transformers, and FFT frequency models', appliedIn: ['DECEPTRIX', 'Project K'] },
        { name: 'Prompt Engineering & Evaluation', levelDescription: 'Structured JSON schemas, few-shot reasoning, and sycophancy reduction', appliedIn: ['Quorum', 'Microdolphin'] },
      ],
    },
    {
      category: 'DATA SCIENCE & KERNELS',
      description: 'Sub-second data engineering, statistical profiling, and pipelines',
      skills: [
        { name: 'Polars & Apache Arrow', levelDescription: 'Multi-threaded columnar query execution and zero-copy memory', appliedIn: ['DataDoc CLI', 'PyPI Package'] },
        { name: 'Python Data Engineering', levelDescription: 'Outlier detection, schema reconciliation, and AST code generation', appliedIn: ['DataDoc', 'ThinkersCave'] },
        { name: 'Statistical Computing (IIT Madras)', levelDescription: 'Probability distributions, hypothesis testing, and regression rigor', appliedIn: ['IIT Madras BS', 'Project K'] },
        { name: 'Vector Databases', levelDescription: 'High-dimensional embeddings, cosine similarity, and chunked indexing', appliedIn: ['ThinkersCave'] },
      ],
    },
    {
      category: 'CLOUD & DISTRIBUTED SYSTEMS',
      description: 'Scalable serverless microservices, caching, and edge hardware',
      skills: [
        { name: 'AWS Serverless Architecture', levelDescription: 'AWS Lambda, RDS PostgreSQL, ElastiCache Redis, SQS, Cognito', appliedIn: ['AXOWEB Technologies'] },
        { name: 'NVIDIA Jetson Edge Systems', levelDescription: 'TensorRT optimization, RTSP video streaming, and GPIO logic', appliedIn: ['Project K', 'The Lab'] },
        { name: 'Docker & Microservices', levelDescription: 'Containerized execution sandboxes and CI/CD pipelines', appliedIn: ['Microdolphin', 'AXOWEB'] },
        { name: 'MQTT & Telemetry Meshes', levelDescription: 'Low-latency publish/subscribe IoT backhaul for emergency networks', appliedIn: ['Project K'] },
      ],
    },
    {
      category: 'FULL-STACK & MOBILE ENGINEERING',
      description: 'Enterprise web apps, real-time node graphs, and cross-platform mobile',
      skills: [
        { name: 'React & Next.js', levelDescription: 'Interactive dashboards, ReactFlow graph topologies, and SSR portals', appliedIn: ['Quorum', 'AXOWEB', 'Portfolio'] },
        { name: 'Fastify, Node.js & FastAPI', levelDescription: 'Asynchronous event loops, WebSocket streaming, and REST APIs', appliedIn: ['Quorum', 'ThinkersCave', 'Microdolphin'] },
        { name: 'Flutter & Firebase', levelDescription: 'Tri-app on-demand mobile dispatch ecosystems with real-time sync', appliedIn: ['AXOWEB', 'Tribe Fortis'] },
        { name: 'TypeScript & Monorepos', levelDescription: 'Strict type safety across shared packages, servers, and clients', appliedIn: ['Quorum', 'AXOWEB'] },
      ],
    },
  ],

  technicalSkills: {
    languages: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
    frameworks: ['React', 'Node.js', 'Express', 'FastAPI'],
    aiMl: [
      'Machine Learning',
      'Generative AI',
      'LLMs',
      'Agentic AI',
      'RAG',
      'LangChain',
      'PyTorch',
      'TensorFlow',
      'Fine-Tuning',
      'Prompt Engineering',
      'Model Evaluation & Benchmarking',
      'Vector Databases',
      'Computer Vision',
    ],
    systems: ['System Design', 'Distributed Systems', 'Kubernetes', 'CI/CD', 'Docker'],
    tools: ['Git', 'GitHub', 'Supabase', 'REST APIs'],
  },
};
