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
    corePositioning: 'I build intelligent systems for ambitious problems.',
    technicalDescriptors: ['AI/ML', 'DATA SCIENCE', 'INTELLIGENT AGENTS', 'COMPUTER VISION', 'SPACE INNOVATION'],
    systemStatus: 'ONLINE / ACTIVE RESEARCH & BUILD',
    location: 'Chennai, India',
    phone: '+91-9176257316',
    github: 'https://github.com/narain-karti',
    linkedin: 'https://www.linkedin.com/in/narainkarti',
    email: 'studyusage2008@gmail.com',
    secondaryEmail: 'narainkarti.work@gmail.com',
    education: [
      {
        institution: 'Indian Institute of Technology Madras (IIT Madras)',
        degree: 'B.S. Data Science and Applications',
        timeline: 'Concurrent Degree · Expected 2029',
        focus: 'Statistical Computing, Machine Learning, Data Architectures & Mathematical Foundations',
        verified: true,
      },
      {
        institution: 'NxtWave Institute of Advanced Technologies',
        degree: 'B.Tech Computer Science Engineering (AI/ML)',
        timeline: 'Expected 2029',
        focus: 'Distributed Systems, Deep Learning, Edge AI, Software Architecture & Full-Stack Systems',
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
      title: 'NASA Space Settlement Contest',
      subtitle: 'Zonal Award Winner · Beyond Earth',
      stat: 'NASA ZONAL',
      context: 'Closed-Loop Orbital Habitat & Life-Support Blueprint',
      badge: 'SPACE_DOSSIER',
    },
    {
      title: 'TakeOver’26 National Hackathon',
      subtitle: 'Top Rank · Quorum Multi-Agent Platform',
      stat: 'TOP RANK',
      context: 'Autonomous Board of Directors Dialectic Engine',
      badge: 'AGENT_SYSTEM',
    },
    {
      title: '5+ Hackathon Victories',
      subtitle: 'Including 3 National-Level Titles',
      stat: '3× NATIONAL',
      context: 'Rapid Prototyping & Production Engineering',
      badge: 'VERIFIED_TRACK_RECORD',
    },
    {
      title: 'IIT Madras & NxtWave IAT',
      subtitle: 'Concurrent BS Data Science & B.Tech AI/ML',
      stat: 'DUAL TRACK',
      context: 'Rigorous Mathematical Rigor + Production Code',
      badge: 'ACADEMIC_FOUNDATION',
    },
  ],

  featuredProjects: [
    {
      id: 'project-k',
      number: '01',
      title: 'PROJECT K',
      subtitle: 'AI-Powered Traffic Intelligence & Adaptive Grid Platform',
      category: 'AI_ML',
      badge: 'NATIONAL RUNNER-UP · ₹3L PRIZE',
      awardHighlight: 'OpenAI Academy × NxtWave GenAI Buildathon',
      tags: ['EDGE AI', 'COMPUTER VISION', 'MULTI-AGENT RL', 'YOLOV8', 'SUMO', 'NVIDIA JETSON', 'MQTT'],
      status: 'SHIPPED',
      year: '2025–2026',
      summary: 'High-throughput edge computer vision and reinforcement learning coordination system for intelligent intersections, instant accident detection, and zero-latency emergency vehicle green-wave prioritization.',
      githubUrl: 'https://github.com/narain-karti/Project-K',
      caseStudy: {
        heroTagline: 'Transforming dumb traffic timers into self-optimizing, incident-aware edge intelligence.',
        problem: 'Fixed-cycle traffic signals inflict billions in lost productivity, while emergency responders face lethal congestion bottlenecks and accident reports suffer 8–12 minute human discovery delays.',
        insight: 'Traffic lights shouldn’t run on naive countdown timers; intersections form a distributed multi-agent graph where local edge vision can coordinate dynamically with neighboring nodes via lightweight telemetry.',
        constraints: [
          'Sub-80ms real-time inferencing on constrained edge hardware (NVIDIA Jetson Orin Nano / Xavier).',
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
          { tech: 'NVIDIA Jetson + TensorRT', why: 'Enabled FP16 quantization achieving 34 FPS multi-stream throughput under 15W power constraints.' },
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
          'Demonstrated 42% queue reduction in simulated high-density downtown grid scenarios.',
          'Accident detection latency under 1.2 seconds from collision impact.',
        ],
        metricsOrFacts: [
          { label: 'Award', value: 'National Runner-Up', note: '₹3,00,000 prize grant' },
          { label: 'Latency', value: '<75ms', note: 'Full edge perception cycle' },
          { label: 'Throughput', value: '34 FPS', note: 'Quad-camera stream on Jetson' },
          { label: 'Detection Speed', value: '1.2s', note: 'Accident trigger to telemetry' },
        ],
        whatILearned: 'Distributed systems thrive on local autonomy. Designing edge nodes that do not depend on cloud uptime makes mission-critical infrastructure fundamentally unbreakable.',
        futureDirection: 'V2X (Vehicle-to-Everything) DSRC radio protocol integration for direct connected-car telemetry exchange.',
      },
    },

    {
      id: 'datadoc',
      number: '02',
      title: 'DATADOC',
      subtitle: 'Open-Source Autonomous Dataset Diagnostics & Curation Engine',
      category: 'DATA_SCIENCE',
      badge: 'PUBLISHED TO PYPI · OPEN SOURCE',
      pipCommand: 'pip install datadoc-cli',
      tags: ['POLARS', 'DATA ENGINEERING', 'AI AGENTS', 'CLI', 'PYPI', 'AUTOMATED EDA', 'TOOL CALLING'],
      status: 'OPEN_SOURCE',
      year: '2025–2026',
      summary: 'High-performance dataset engineering CLI and agentic cleaner built with Polars and tool-calling agents for deterministic data diagnostics, schema validation, outlier healing, and automated EDA.',
      githubUrl: 'https://github.com/narain-karti/DataDoc',
      pypiUrl: 'https://pypi.org/project/datadoc-cli/',
      caseStudy: {
        heroTagline: 'Stop writing the same 200 lines of Pandas cleaning boilerplate for every dataset.',
        problem: 'Data scientists spend 70% of their bandwidth wrangling dirty tabular data, handling silent schema drifts, imputing missing values, and generating redundant diagnostic charts with slow legacy tools.',
        insight: 'Combining Polars’ multi-threaded columnar execution engine with a structured agentic planner creates a deterministic, reproducible CLI tool that inspects, audits, and fixes dirty datasets in seconds.',
        constraints: [
          'Instant execution on multi-gigabyte CSV/Parquet files without memory blowups.',
          'No hallucinated data alterations: all mutations must generate mathematical audit diffs.',
          'Works seamlessly offline via CLI and supports interactive agent chat mode with tool calls.',
        ],
        goals: [
          'Publish as a zero-friction PyPI package installable in one command.',
          'Benchmark at 5–10× faster than Pandas-based profiling tools.',
          'Provide both deterministic rule-based recipes and LLM-assisted semantic fixes.',
        ],
        thoughtProcess: 'We architected DataDoc around a two-layer engine: a core Polars analytical kernel that runs zero-copy schema checks, and an LLM-assisted tool-calling planner that generates reproducible Python code recipes.',
        architectureDiagram: {
          steps: [
            { title: 'Data Ingestion Kernel', desc: 'Zero-copy scanning of CSV, Parquet, JSON lines via Polars LazyFrames.', icon: 'Database', tech: 'Polars / Arrow' },
            { title: 'Deterministic Diagnostics', desc: 'Statistical outlier profiling (IQR/Z-score), missingness correlation, cardinality audits.', icon: 'CheckCircle', tech: 'Rust/Python Core' },
            { title: 'Agentic Diagnostic Planner', desc: 'Analyzes anomalies, recommends healing strategies, and drafts step-by-step cleaning recipes.', icon: 'Bot', tech: 'Tool-Calling Agent' },
            { title: 'Interactive CLI & Rich TUI', desc: 'Beautiful terminal dashboard with colored histograms, diff tables, and one-key exports.', icon: 'Terminal', tech: 'Rich / Click' },
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
          'Processed 5M-row test benchmarks 8.4× faster than standard pandas profiling utilities.',
          'Adopted as default data prep tool across multiple university hackathon teams.',
        ],
        metricsOrFacts: [
          { label: 'Registry', value: 'PyPI Live', note: 'pip install datadoc-cli' },
          { label: 'Speedup', value: '8.4× vs Pandas', note: 'On 5M row benchmark' },
          { label: 'Memory Footprint', value: '-65%', note: 'Through Polars lazy scanning' },
          { label: 'Format Support', value: 'Parquet / CSV / JSON', note: 'Zero-copy Arrow memory' },
        ],
        whatILearned: 'Developer tools win on tactile speed. When an open-source CLI gives instant, deterministic feedback in the terminal, it changes how developers interact with data.',
        futureDirection: 'Automated synthetic data generation matching exact column distribution and differential privacy guarantees.',
      },
    },

    {
      id: 'quorum',
      number: '03',
      title: 'QUORUM',
      subtitle: 'Multi-Agent Autonomous Executive Board of Directors & Dialectic Engine',
      category: 'AGENTS',
      badge: 'TAKEOVER’26 TOP RANK',
      awardHighlight: 'TakeOver’26 National Hackathon Winner',
      tags: ['MULTI-AGENT AI', 'SYSTEM ORCHESTRATION', 'REACTFLOW', 'FASTIFY', 'SQLITE', 'GRAPH UI'],
      status: 'SHIPPED',
      year: '2026',
      summary: 'Collaborative multi-agent debate platform simulating an autonomous C-suite board (CEO, CMO, CFO, CTO, COO & Contrarian) to stress-test business decisions, challenge blind spots, and synthesize actionable consensus.',
      githubUrl: 'https://github.com/narain-karti/Quorum',
      caseStudy: {
        heroTagline: 'Why make critical strategic decisions with one biased prompt when an autonomous board can stress-test every angle?',
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
        thoughtProcess: 'We designed Quorum with an asynchronous node-based message bus. The orchestrator collects proposals, assigns structured critique turns to relevant executives, and scores agreement metrics before synthesizing the final decision memorandum.',
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
          'Used to simulate real product launch strategies across 3 student startup ventures.',
        ],
        metricsOrFacts: [
          { label: 'Award', value: 'Top Rank', note: 'TakeOver’26 National Hackathon' },
          { label: 'Personas', value: '6 Autonomous Agents', note: 'CEO, CFO, CMO, CTO, COO, Contrarian' },
          { label: 'Debate Cycles', value: '3-Stage Dialectic', note: 'Proposal → Critique → Consensus' },
          { label: 'Latency', value: 'Streamed via WS', note: 'Real-time interactive node graph' },
        ],
        whatILearned: 'Multi-agent systems only deliver value when agent incentives are genuinely orthogonal. Harmony produces generic answers; structured dialectic conflict produces insight.',
        futureDirection: 'Dynamic human-in-the-loop intervention allowing users to override individual agent votes during live debates.',
      },
    },

    {
      id: 'privacy-browser-agent',
      number: '04',
      title: 'PRIVACY-FIRST BROWSER AI AGENT',
      subtitle: 'Hybrid Local-Vision Perception & Vault Firewall for Web Automation',
      category: 'AGENTS',
      badge: 'ACTIVE FLAGSHIP BUILD',
      tags: ['AI AGENTS', 'COMPUTER VISION', 'LOCAL AI', 'PRIVACY FIREWALL', 'VISION TRANSFORMERS', 'SECURE VAULT'],
      status: 'ACTIVE_BUILD',
      year: '2026',
      summary: 'System architecture and prototype for an intelligent browser agent that navigates, perceives, and automates web workflows while enforcing strict local client-side redaction of sensitive credentials, PII, and financial tokens.',
      githubUrl: 'https://github.com/narain-karti/privacy-browser-agent',
      caseStudy: {
        heroTagline: 'Automating the web shouldn’t require leaking your private identity and session tokens to third-party cloud models.',
        problem: 'Modern web automation agents upload raw screenshots and unrestricted DOM trees to cloud models, exposing user passwords, bank balances, private chat threads, and medical details.',
        insight: 'A hybrid architecture where lightweight local on-device Vision Transformers detect and mask sensitive visual bounding boxes and DOM nodes BEFORE telemetry leaves the client sandbox.',
        constraints: [
          'Sub-150ms client-side visual masking to avoid perceptible browser automation latency.',
          'Zero plaintext credential leakage across network boundaries.',
          'Deterministic coordinate translation between masked viewport and real browser actuation.',
        ],
        goals: [
          'Implement client-side Privacy Firewall intercepting DOM mutations and screen buffers.',
          'Maintain an isolated local Secure Vault for injecting tokens only during actual keystroke execution.',
          'Route non-sensitive reasoning to cloud models while keeping private data strictly local.',
        ],
        thoughtProcess: 'We segmented the agent pipeline into three concentric trust rings: the Local Perception Ring (on-device), the Privacy Firewall (redaction & token substitution), and the Remote Reasoning Ring (cloud planner).',
        architectureDiagram: {
          steps: [
            { title: 'Browser DOM & Viewport Buffer', desc: 'Raw page state, interactive element coordinates, and rendered viewport pixels.', icon: 'Globe', tech: 'Chrome Extension / CDP' },
            { title: 'Local CV Perception Ring', desc: 'On-device Vision Transformer detects passwords, faces, credit cards, and addresses.', icon: 'Eye', tech: 'WebGPU / ONNX Runtime' },
            { title: 'Privacy Firewall & Masker', desc: 'Redacts sensitive visual areas and replaces private tokens with synthetic placeholders.', icon: 'Shield', tech: 'Local Vault / Tokenizer' },
            { title: 'Sanitized Planning Stream', desc: 'Transmits sanitized page structure to remote reasoning model for intent decomposition.', icon: 'Cpu', tech: 'Remote LLM / Cloud' },
            { title: 'Local Vault Actuator', desc: 'Re-injects real credentials locally into browser inputs at the moment of hardware dispatch.', icon: 'Lock', tech: 'Hardware Dispatcher' },
          ],
        },
        techChoices: [
          { tech: 'WebGPU ONNX Runtime', why: 'Runs lightweight vision classification directly on local GPU without server roundtrips.' },
          { tech: 'Chrome DevTools Protocol (CDP)', why: 'Direct low-level automation with fine-grained DOM mutation listeners.' },
          { tech: 'Isolated Storage Vault', why: 'Keeps encrypted user credentials in browser IndexedDB with AES-GCM-256 keys.' },
        ],
        implementationHighlights: [
          'Architected dual-pipeline DOM and visual bounding box sanitizer.',
          'Engineered mock redaction overlay demonstrating live bounding box protection on login forms.',
          'Designed synthetic token swapper ensuring remote models can plan actions without seeing actual account values.',
        ],
        challengesAndFailures: [
          'Dynamic SPAs with iframe overlays caused coordinate misalignment between visual boxes and click targets; solved via tree-walking spatial projection.',
        ],
        iterations: [
          'v0.1: Pure regex DOM filtering (easily defeated by visual canvas rendering).',
          'v0.2: Dual DOM + lightweight local visual masking pipeline (active build).',
        ],
        results: [
          'Currently in active system design and prototype phase.',
          'Demonstrated 100% masking of sample SSNs, credit card numbers, and password fields in sandbox benchmarks.',
          'Zero plaintext credentials sent to external inference endpoints.',
        ],
        metricsOrFacts: [
          { label: 'Status', value: 'Active Flagship Build', note: 'System design & prototype' },
          { label: 'Local Latency', value: '~110ms', note: 'WebGPU on-device PII scan' },
          { label: 'Security', value: 'AES-256 GCM', note: 'Local identity vault' },
          { label: 'Architecture', value: '3-Ring Hybrid', note: 'Local Perception → Firewall → Cloud' },
        ],
        whatILearned: 'Privacy cannot be an afterthought bolted onto an agent; it must sit at the physical perception boundary between the client and the network.',
        futureDirection: 'Compiling custom 1-bit quantized vision models for zero-overhead mobile browser execution.',
      },
    },

    {
      id: 'beyond-earth',
      number: '05',
      title: 'BEYOND EARTH: NASA SPACE SETTLEMENT',
      subtitle: 'Closed-Loop Orbital Habitat & Life-Support Engineering Blueprint',
      category: 'SPACE',
      badge: 'NASA ZONAL AWARD WINNER',
      awardHighlight: 'NASA Space Settlement Design Contest',
      tags: ['SPACE SYSTEMS', 'ARTIFICIAL GRAVITY', 'LIFE SUPPORT', 'LUNAR MINING', 'CLOSED-LOOP SYSTEMS', 'ORBITAL MECHANICS'],
      status: 'RESEARCH_DOSSIER',
      year: '2024–2025',
      summary: 'Comprehensive engineering field notebook and mission dossier designing a permanent 10,000-inhabitant rotating space settlement with artificial gravity, closed-loop hydroponic life support, lunar ice mining logistics, and off-world governance.',
      caseStudy: {
        heroTagline: 'Engineering a self-sustaining human civilization beyond Earth’s gravitational well.',
        problem: 'Long-duration human space habitation faces existential failure points: bone density decay from microgravity, lethal cosmic radiation, closed-loop oxygen/water shortages, and supply-chain vulnerability.',
        insight: 'True off-world permanence requires geometric optimization of centrifugal rotational gravity, combined with in-situ resource utilization (ISRU) from lunar ice and carbonaceous chondrite asteroids.',
        constraints: [
          'Maintain 1.0G Earth-equivalent artificial gravity at the habitat perimeter without causing vestibular vertigo (angular velocity $\\omega \\le 2$ RPM).',
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
            { title: 'Centrifugal Gravity Geometry', desc: 'Torus radius $R = 224\\text{m}$ rotating at 2.0 RPM to produce exactly $1.0g$ ($9.81\\text{m/s}^2$) at outer rim.', icon: 'RotateCw', tech: 'Rotational Physics' },
            { title: 'Multi-Layer Regolith Shielding', desc: '5-meter lunar regolith outer shell providing 500 g/cm² passive mass shielding against GCR and solar storms.', icon: 'Shield', tech: 'Mass Shielding' },
            { title: 'CELSS Life Support Loop', desc: 'Tiered aeroponic farming, Chlorella vulgaris algal photobioreactors, and Sabatier CO2 reduction.', icon: 'Sun', tech: 'Biological CELSS' },
            { title: 'Lunar ISRU & Mass Drivers', desc: 'Electromagnetic mass drivers launching lunar polar ice and titanium ores to L5 orbital node.', icon: 'Compass', tech: 'ISRU Logistics' },
            { title: 'Civilization Operating System', desc: 'Decentralized cryptographic resource ledger, municipal governance, and emergency sealed bulkheads.', icon: 'Cpu', tech: 'Socio-Technical OS' },
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
          { label: 'Habitat Radius', value: '224 Meters', note: '$\\omega = 2.0$ RPM for $1.0g$' },
          { label: 'Population', value: '10,000 Citizens', note: 'Self-sustaining closed-loop' },
          { label: 'Water Recovery', value: '99.7% Loop', note: 'SCWO + RO filtration' },
        ],
        whatILearned: 'Deep engineering is about respecting physical first principles. Whether designing a life-support loop in orbit or a distributed agent cluster on Earth, mass, energy, and information must balance.',
        futureDirection: 'Computational simulation of habitat thermal dissipation using radiative heat exchangers in orbital shadow cycles.',
      },
    },

    {
      id: 'deceptrix',
      number: '06',
      title: 'DECEPTRIX',
      subtitle: 'Multimodal Video Forensic & Deepfake Temporal Artifact Detector',
      category: 'COMPUTER_VISION',
      badge: 'FORENSIC VISION SUITE',
      tags: ['YOLOV8', 'VISION TRANSFORMERS', 'DEEPFAKE DETECTION', 'TEMPORAL CONSENSUS', 'PYTORCH', 'OPENCV'],
      status: 'PROTOTYPE',
      year: '2025',
      summary: 'Deep learning forensic framework combining frame-level spatial anomaly detection with temporal optical-flow consistency models to detect synthetic media, face swaps, and generative video alterations.',
      githubUrl: 'https://github.com/narain-karti/DECEPTRIX',
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
          { label: 'Analysis Speed', value: '45 FPS', note: 'On RTX 3080 GPU' },
          { label: 'Modalities', value: '3 Streams', note: 'Spatial, Spectral FFT, Temporal' },
          { label: 'Output', value: 'Grad-CAM Heatmaps', note: 'Explainable forensic audits' },
        ],
        whatILearned: 'Generative models create beautiful illusions in static space, but physics and biology betray them over time.',
        futureDirection: 'Audio-visual synchronization analysis detecting lip-sync phoneme micro-delays in synthetic voice clones.',
      },
    },

    {
      id: 'axoweb',
      number: '07',
      title: 'AXOWEB PLATFORM & AWS CLOUD',
      subtitle: 'Tri-App Flutter Ecosystem & 5-Role Enterprise AWS Microservices Platform',
      category: 'FULL_STACK',
      badge: 'BRAVE NATIONAL WINNER · ₹7L+ REVENUE',
      awardHighlight: 'BRAVE Startups National Competition Winner',
      tags: ['STARTUP FOUNDER', 'AWS SERVERLESS', 'LAMBDA', 'RDS POSTGRESQL', 'ELASTICACHE', 'SQS', 'COGNITO', 'FLUTTER', 'REACT', 'FIREBASE'],
      status: 'SHIPPED',
      year: '2025–2026',
      summary: 'Co-founded AI/digital solutions startup; won BRAVE National Competition and grew revenue past ₹7L in 3 months. Shipped 3-app car-wash platform (Flutter, React, Firebase) and engineered an AWS microservice architecture for a 5-role university grievance platform.',
      githubUrl: 'https://github.com/narain-karti',
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
          { tech: 'Flutter & React', why: 'Maximum code reuse and 60 FPS fluid mobile UX on both iOS and Android.' },
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
          { label: 'Apps Shipped', value: '3 Platforms', note: 'Customer, Partner, Admin' },
          { label: 'AWS Microservices', value: '5 Roles', note: 'Lambda + RDS + ElastiCache' },
          { label: 'Award', value: 'National Winner', note: 'BRAVE Startups Competition' },
        ],
        whatILearned: 'Technical architecture must directly serve business velocity. The best architecture is one that stays resilient under sudden commercial scale.',
        futureDirection: 'Predictive demand forecasting using time-series ML models to pre-position field partners before booking peaks.',
      },
    },

    {
      id: 'thinkerscave',
      number: '08',
      title: 'THINKERSCAVE KNOWLEDGE GRAPH & RAG',
      subtitle: 'Restructured Client Data into Neo4j Knowledge Graph & Hybrid RAG Assistant',
      category: 'AI_ML',
      badge: 'RAG & KNOWLEDGE GRAPH',
      tags: ['NEO4J', 'KNOWLEDGE GRAPH', 'LANGCHAIN', 'RAG', 'EXPRESS', 'FASTAPI', 'PYTHON'],
      status: 'SHIPPED',
      year: '2025',
      summary: 'Restructured client unstructured documentation into a high-connectivity Neo4j knowledge graph and developed an intelligent conversational RAG assistant that slashed customer query resolution times by 40%.',
      githubUrl: 'https://github.com/narain-karti',
      caseStudy: {
        heroTagline: 'Turning messy unstructured enterprise documents into verifiable, high-precision conversational intelligence.',
        problem: 'Naive vector-search RAG fails on multi-hop technical questions where answers depend on deep entity relationships and tabular dependencies across disparate files.',
        insight: 'Augmenting dense vector embeddings with an explicit Neo4j knowledge graph allows bi-encoder retrieval to traverse entity relationships deterministically before LLM generation.',
        constraints: [
          'Sub-200ms knowledge graph traversal and entity extraction.',
          'Zero hallucination on factual client policy queries.',
          'Real-time document ingestion with automatic entity relationship extraction.',
        ],
        goals: [
          'Structure 10,000+ client documents into hierarchical Neo4j entity-relation triples.',
          'Build hybrid BM25 + Vector + Graph search pipeline with Cross-Encoder reranking.',
          'Cut customer support resolution time by >35%.',
        ],
        thoughtProcess: 'We combined LLM entity extraction with graph database indexing. When a query arrives, we extract key entities, retrieve neighboring subgraphs from Neo4j, and inject verified factual contexts into the prompt.',
        architectureDiagram: {
          steps: [
            { title: 'Document Parsing & Chunking', desc: 'Hierarchical chunking preserving headers, tables, and code snippets.', icon: 'FileText', tech: 'Unstructured / Python' },
            { title: 'Entity & Relation Extraction', desc: 'LLM pipeline extracts entities, attributes, and directional graph edges.', icon: 'Share2', tech: 'LangChain / OpenAI' },
            { title: 'Neo4j Graph Store & Vectors', desc: 'Nodes and edges indexed in Neo4j alongside dense vector embeddings.', icon: 'Database', tech: 'Neo4j / Cypher' },
            { title: 'Hybrid Retrieval & Reranker', desc: 'Graph traversal combined with vector similarity and cross-encoder scoring.', icon: 'Search', tech: 'FastAPI / Cross-Encoder' },
            { title: 'Attributed Generation', desc: 'Conversational response synthesized with exact citation backlinks.', icon: 'MessageSquare', tech: 'Express / Next.js' },
          ],
        },
        techChoices: [
          { tech: 'Neo4j & Cypher', why: 'Native graph database enabling multi-hop pathfinding in sub-10 milliseconds.' },
          { tech: 'LangChain & FastAPI', why: 'Modular agentic chain composition with high-concurrency async endpoints.' },
          { tech: 'Cross-Encoder Reranker', why: 'Elevates MRR@10 by 37.7% compared to cosine vector search alone.' },
        ],
        implementationHighlights: [
          'Designed automated entity ingestion worker converting raw PDFs and spreadsheets into Cypher graph inserts.',
          'Built web chat widget with live source citation popovers and feedback thumbs.',
        ],
        challengesAndFailures: [
          'Entity resolution ambiguities (e.g. synonyms referring to the same product) caused duplicate graph clusters; solved via embedding clustering and fuzzy canonical name matching.',
        ],
        iterations: [
          'v1: Pure chunk vector search (32% failure on cross-document relationship queries).',
          'v2: Hybrid GraphRAG with Neo4j subgraph traversal and verified citations.',
        ],
        results: [
          'Reduced customer support query resolution times by 40%.',
          'Achieved 94.2% factual precision on technical client onboarding questions.',
          'Successfully ingested 10,000+ enterprise nodes with zero data corruption.',
        ],
        metricsOrFacts: [
          { label: 'Time Saved', value: '40%', note: 'Faster query resolution' },
          { label: 'Precision', value: '94.2%', note: 'Verified factual accuracy' },
          { label: 'Nodes', value: '10,000+', note: 'Neo4j entity graph' },
          { label: 'Latency', value: '180ms', note: 'Hybrid graph + vector search' },
        ],
        whatILearned: 'Vectors give intuition, but graphs give facts. Enterprise AI needs both.',
        futureDirection: 'Self-updating knowledge graphs that learn new entity connections from conversation feedback loops.',
      },
    },
  ] as Project[],

  labExperiments: [
    {
      id: 'exp-001',
      code: 'EXP_001',
      date: '2026.08',
      title: 'Local ViT Attention Masking for Real-Time PII Redaction',
      category: 'VISION',
      hypothesis: 'Running an INT8-quantized Vision Transformer in WebGPU can detect 98%+ of PII bounding boxes in browser viewports under 120ms without cloud offload.',
      methodology: 'Benchmarked ONNX Runtime Web on M-series and Intel Iris GPUs across 200 synthetic banking and government portal mockups.',
      result: 'Average latency: 104ms. Recall on credit card / SSN bounding boxes: 99.1%. Masking error rate: 0.8%.',
      status: 'VALIDATED',
      takeaway: 'Edge visual perception is now fast enough to serve as an inline security gateway before network dispatch.',
      tags: ['ViT', 'WebGPU', 'ONNX', 'Privacy'],
      color: 'yellow',
      rotation: -1.5,
    },
    {
      id: 'exp-017',
      code: 'EXP_017',
      date: '2026.07',
      title: 'Cross-Encoder vs Bi-Encoder Latency in Technical Knowledge Graphs',
      category: 'AI/ML',
      hypothesis: 'A hybrid retrieval stage (BM25 + Bi-Encoder vector search followed by a lightweight Cross-Encoder reranker) improves RAG retrieval MRR@10 by >25% with <40ms overhead.',
      methodology: 'Evaluated on ThinkersCave 10,000-node technical documentation corpus with diverse user query phrasings.',
      result: 'MRR@10 increased from 0.61 to 0.84 (+37.7%). Total retrieval latency: 38ms.',
      status: 'VALIDATED',
      takeaway: 'Always use cross-encoder reranking on top 20 candidates rather than relying on cosine similarity alone.',
      tags: ['RAG', 'Knowledge Graphs', 'Reranking', 'Vector Search'],
      color: 'blue',
      rotation: 2,
    },
    {
      id: 'exp-024',
      code: 'PROTO_024',
      date: '2026.05',
      title: 'Contrarian Agent Dialectic Incentive Optimization in Quorum',
      category: 'AGENTS',
      hypothesis: 'Penalizing conversational agreement and rewarding orthogonal counter-evidence discovery reduces strategic blind spots by >3×.',
      methodology: 'Simulated 50 board scenarios (product launch, pricing change, tech stack migration) across homogeneous vs adversarial agent clusters.',
      result: 'Adversarial contrarian configuration discovered 3.2× more fatal operational edge cases before consensus sign-off.',
      status: 'VALIDATED',
      takeaway: 'Consensus is a trap in AI agent systems. Deliberate tension creates resilient decisions.',
      tags: ['Multi-Agent', 'Game Theory', 'Orchestration'],
      color: 'pink',
      rotation: -2.5,
    },
    {
      id: 'exp-009',
      code: 'MODEL_TEST_09',
      date: '2026.03',
      title: 'FP16 TensorRT Quantization on Jetson Orin Nano for YOLOv8 Traffic Grid',
      category: 'SYSTEMS',
      hypothesis: 'TensorRT FP16 quantization will double Jetson Nano frame throughput without reducing mAP50 by more than 1.5%.',
      methodology: 'Compiled YOLOv8n and YOLOv8s engine files using trtexec with calibration datasets from Project K camera feeds.',
      result: 'Frame rate rose from 16 FPS (PyTorch FP32) to 34.2 FPS (TensorRT FP16). mAP50 dropped by only 0.4%.',
      status: 'BENCHMARKED',
      takeaway: 'Hardware-specific model compilation is non-negotiable for edge robotics and smart city deployments.',
      tags: ['Jetson', 'TensorRT', 'Edge AI', 'Optimization'],
      color: 'green',
      rotation: 1.2,
    },
    {
      id: 'exp-042',
      code: 'EXP_042',
      date: '2025.11',
      title: 'Closed-Loop Chlorella Algal Oxygen Regeneration Kinetics for Space Habitat',
      category: 'SPACE',
      hypothesis: 'A 120m³ photobioreactor array can sustain oxygen consumption for 200 crew members under continuous LED illumination.',
      methodology: 'Modeled stoichiometric gas exchange: $6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\to \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$ with photon absorption curves.',
      result: 'Calculated steady-state yield of 0.84 kg O2/m³/day. Total required volume: 114m³ for 200 individuals with 15% safety buffer.',
      status: 'VALIDATED',
      takeaway: 'Algal photobioreactors provide 4× higher volumetric efficiency compared to traditional aeroponic wheat or soybean systems.',
      tags: ['NASA', 'CELSS', 'Space Systems', 'Bioreactors'],
      color: 'orange',
      rotation: -1,
    },
    {
      id: 'exp-055',
      code: 'EXP_055',
      date: '2025.09',
      title: 'Polars LazyFrame Parallel Diagnostics Benchmark vs Pandas',
      category: 'AI/ML',
      hypothesis: 'Polars lazy query planning will process 10M rows of dirty tabular data with 70% lower peak RAM and 6× higher speed than Pandas.',
      methodology: 'Synthesized 5GB noisy CSV with 50 columns containing missing values, corrupted timestamps, and high cardinality outliers.',
      result: 'Polars finished diagnostics in 3.8s (RAM peak: 1.2GB). Pandas took 31.9s (RAM peak: 4.8GB). DataDoc adopted Polars engine.',
      status: 'VALIDATED',
      takeaway: 'Columnar memory format + multi-threaded Rust execution makes Polars the obvious foundation for modern data engineering CLI tools.',
      tags: ['Polars', 'Rust', 'DataDoc', 'Data Science'],
      color: 'yellow',
      rotation: 2.3,
    },
  ] as LabExperiment[],

  experienceChapters: [
    {
      id: 'axoweb',
      company: 'AXOWEB TECHNOLOGIES',
      role: 'Co-Founder & Lead Systems Architect',
      period: '2024 – Present',
      location: 'India',
      badge: 'BRAVE STARTUPS WINNER · ₹7L+ REVENUE',
      summary: 'Co-founded an AI and enterprise digital solutions venture. Won the BRAVE Startups National Competition (People’s Choice & Best Innovation). Scaled commercial operations to ₹7 Lakhs+ in gross revenue within the first 3 months.',
      narrativeFlow: 'Idea → Product Architecture → Client Delivery → Commercial Impact',
      achievements: [
        'Winner — BRAVE Startups National Competition (Awarded Best Innovation & People’s Choice Awards).',
        'Generated over ₹7,00,000 in revenue within 90 days through technical execution and enterprise client delivery.',
        'Architected and deployed two mission-critical production platforms serving thousands of active end-users.',
      ],
      projectsBuilt: [
        {
          name: 'Car-Wash Commercial Platform',
          category: 'Mobile & Web Ecosystem',
          stack: ['Flutter', 'React', 'Node.js', 'Firebase', 'Stripe'],
          description: 'Three-application unified commercial platform encompassing a customer booking app, worker dispatch portal, and administrative command dashboard. Delivered complete end-to-end scope from commercial proposal and pitch to production release.',
          deliverables: ['Customer Mobile App (Flutter)', 'Field Technician Operations App', 'Admin Business Command Deck (React)', 'Full Commercial Pitch Deck & Pricing Models'],
        },
        {
          name: 'University Grievance & Resolution Platform',
          category: 'Enterprise Cloud Microservices',
          stack: ['AWS Lambda', 'RDS PostgreSQL', 'Amazon ElastiCache (Redis)', 'Amazon SQS', 'AWS Cognito'],
          description: 'High-availability enterprise microservice infrastructure managing student grievances, automated escalations, role-based SLA tracking, and audit logging across 5 distinct institutional administrative user roles.',
          architectureFlow: ['Client Request', 'Cognito Auth + RBAC Guard', 'API Gateway', 'AWS Lambda Handler', 'SQS Async Notification Queue', 'RDS PostgreSQL + ElastiCache'],
          deliverables: ['5 Distinct RBAC User Roles', 'Automated SLA Escalation Worker', 'Encrypted Student Anonymity Vault', 'Real-time Institutional Analytics Dashboard'],
        },
      ],
      impactNotes: [
        'Demonstrated end-to-end founder discipline: technical architecture, client contract negotiations, hiring, and delivery.',
        'Zero downtime across 10,000+ grievance workflows and commercial customer transactions.',
      ],
      skills: ['AWS Cloud', 'PostgreSQL', 'System Architecture', 'Founder Leadership', 'Flutter', 'React', 'RBAC', 'ElastiCache'],
    },

    {
      id: 'thinkerscave',
      company: 'THINKERSCAVE',
      role: 'Software Developer Intern',
      period: '2025',
      location: 'Remote',
      summary: 'Engineered advanced RAG pipelines, knowledge graph restructuring, and tool-calling agent systems powering conversational customer support engines for web and WhatsApp.',
      narrativeFlow: 'Data Ingestion → Knowledge Graph Extraction → RAG Engine → Tool Calling → Multi-Channel Dispatch',
      achievements: [
        'Restructured unstructured corporate data into an entity-relationship Knowledge Graph for contextual RAG retrieval.',
        'Built unified autonomous agent engine connecting tool calling (calendar booking, ticket creation, status checks) to both a web chatbot and WhatsApp bot.',
        'Contributed to core architecture of an AI-integrated Learning Management System (LMS) and hotel management system.',
      ],
      projectsBuilt: [
        {
          name: 'Unified Omnichannel AI Support Engine',
          category: 'Conversational AI & Tool Calling',
          stack: ['Python', 'FastAPI', 'Neo4j / GraphRAG', 'LangChain', 'WhatsApp Business API', 'Vector DB'],
          description: 'Single agentic backend engine that ingests enterprise knowledge graphs and executes deterministic tool-calling workflows across web and WhatsApp messaging channels.',
        },
      ],
      architectureFlow: [
        { title: 'Enterprise Data Lake', desc: 'PDFs, tickets, documentation' },
        { title: 'Knowledge Graph Restructuring', desc: 'Entities, relations & graph embeddings' },
        { title: 'Hybrid RAG Pipeline', desc: 'Vector similarity + graph traversal' },
        { title: 'Tool-Calling Engine', desc: 'API execution & ticket resolution' },
        { title: 'Single Agent Core', desc: 'Stateful conversation orchestrator' },
        { title: 'Omnichannel Dispatch', desc: 'Web Chatbot + WhatsApp Bot' },
      ],
      impactNotes: [
        'Reduced customer support first-response latency from 14 minutes to 4.2 seconds.',
        'Achieved 91% automated ticket resolution without human intervention.',
      ],
      skills: ['RAG', 'Knowledge Graphs', 'LangChain', 'Tool Calling', 'FastAPI', 'WhatsApp API'],
    },

    {
      id: 'microdolphin',
      company: 'MICRODOLPHIN',
      role: 'Agentic AI Engineer Intern',
      period: '2025',
      location: 'Remote',
      summary: 'Designed backend architectures and multi-agent orchestration pipelines for a production-grade platform transforming natural-language user prompts into deployable software applications.',
      narrativeFlow: 'User Prompt → Orchestrator → Specialized Agents → Code Generation → Deployable Application',
      achievements: [
        'Built hierarchical multi-agent orchestration tree separating frontend generation, schema synthesis, and API routing.',
        'Engineered AST validation layer ensuring generated TypeScript / Python code conforms to production linting rules before compilation.',
        'Implemented streaming code diff visualization allowing users to watch real-time file creation.',
      ],
      projectsBuilt: [
        {
          name: 'Natural-Language-to-App Generation Pipeline',
          category: 'Agentic Code Synthesis',
          stack: ['Node.js', 'Python', 'Agent Orchestration', 'Docker Sandbox', 'TypeScript'],
          description: 'Orchestrated specialized agents (Architect Agent, Frontend Agent, Database Agent, Quality Assurance Agent) to collaboratively build working full-stack applications from brief text prompts.',
        },
      ],
      architectureFlow: [
        { title: 'User Natural Language Prompt', desc: 'App requirements and specifications' },
        { title: 'Chief Architect Agent', desc: 'Decomposes spec into schema & components' },
        { title: 'Specialized Sub-Agents', desc: 'UI, Database, API, and Config generation' },
        { title: 'AST & Lint Validator', desc: 'Static code analysis and self-healing fixes' },
        { title: 'Deployable Application', desc: 'Containerized runnable web application' },
      ],
      impactNotes: [
        'Boosted code generation compilation pass rates from 68% to 94.5% via automated AST reflection loops.',
      ],
      skills: ['Multi-Agent Systems', 'Code Synthesis', 'Docker', 'AST Parsing', 'TypeScript', 'Prompt Engineering'],
    },

    {
      id: 'tribe-fortis',
      company: 'TRIBE FORTIS',
      role: 'Mobile / Web Developer Intern',
      period: '2024 – 2025',
      location: 'Remote',
      summary: 'Implemented AI-driven mobile fitness features, real-time activity tracking, and trainer-synchronized workout and dietary planning routines.',
      narrativeFlow: 'User Metrics → AI Recommendation Engine → Real-Time Telemetry → Trainer Sync',
      achievements: [
        'Developed interactive mobile workout modules with real-time rep cadence timers and rest tracking.',
        'Engineered trainer portal synchronizing dietary macros and exercise routines with instant client push updates.',
        'Optimized client-side rendering for smooth 60fps mobile interaction on mid-tier Android & iOS devices.',
      ],
      projectsBuilt: [
        {
          name: 'AI-Driven Fitness & Trainer Sync System',
          category: 'Mobile Health & Real-Time Sync',
          stack: ['React Native', 'Firebase', 'Node.js', 'REST APIs'],
          description: 'Cross-platform mobile application delivering personalized adaptive workout progressions and bidirectional synchronization between trainers and clients.',
        },
      ],
      impactNotes: [
        'Maintained 4.8-star user satisfaction rating across 500+ active beta testers.',
      ],
      skills: ['React Native', 'Firebase', 'Mobile UX', 'Real-Time Sync', 'State Management'],
    },

    {
      id: 'allytriz',
      company: 'ALLYTRIZ TECHNOLOGIES',
      role: 'Mobile / Web Developer Intern',
      period: '2024',
      location: 'Remote',
      summary: 'Designed, built, and deployed robust full-stack web applications from initial wireframes through client production deployment.',
      narrativeFlow: 'Wireframing → Component Architecture → API Integration → Production Deployment',
      achievements: [
        'Built full-stack web portals using React, Node.js, and relational databases for regional enterprise clients.',
        'Collaborated directly with client stakeholders to translate business workflows into interactive web interfaces.',
        'Established automated CI/CD deployment pipelines on cloud hosting providers.',
      ],
      projectsBuilt: [
        {
          name: 'Enterprise Client Web Applications',
          category: 'Full-Stack Web Engineering',
          stack: ['React', 'Node.js', 'Express', 'SQL', 'Git CI/CD'],
          description: 'Custom client dashboards, booking portals, and responsive interfaces built with strict adherence to design specifications and data security.',
        },
      ],
      impactNotes: [
        'Delivered 100% of sprint tickets on schedule with zero critical post-release regression bugs.',
      ],
      skills: ['Full-Stack Web', 'React', 'Express', 'SQL Databases', 'CI/CD'],
    },
  ] as ExperienceChapter[],

  openSourceData: {
    githubUsername: 'narain-karti',
    profileUrl: 'https://github.com/narain-karti',
    totalContributions: '1,400+ Contributions',
    pinnedRepos: [
      {
        name: 'DataDoc',
        repo: 'narain-karti/DataDoc',
        description: 'Open-source autonomous dataset diagnostics, cleaning & automated EDA engine powered by Polars and tool-calling agents.',
        language: 'Python',
        languageColor: '#3572A5',
        stars: '★ PyPI Published',
        badge: 'ORIGINAL BUILD · PYPI',
        tag: 'DATA_ENGINEERING',
        url: 'https://github.com/narain-karti/DataDoc',
      },
      {
        name: 'Project-K',
        repo: 'narain-karti/Project-K',
        description: 'AI-powered smart city traffic intelligence, accident detection and dynamic green wave signal optimization on NVIDIA Jetson.',
        language: 'Python / C++',
        languageColor: '#3572A5',
        stars: '★ National Runner-Up',
        badge: 'ORIGINAL BUILD · ₹3L WIN',
        tag: 'EDGE_AI_CV',
        url: 'https://github.com/narain-karti/Project-K',
      },
      {
        name: 'Quorum',
        repo: 'narain-karti/Quorum',
        description: 'Autonomous multi-agent board of directors simulating adversarial C-suite debate with ReactFlow visual graph UI.',
        language: 'TypeScript',
        languageColor: '#3178c6',
        stars: '★ TakeOver’26 Winner',
        badge: 'ORIGINAL BUILD · TOP RANK',
        tag: 'AGENT_ORCHESTRATION',
        url: 'https://github.com/narain-karti/Quorum',
      },
      {
        name: 'DECEPTRIX',
        repo: 'narain-karti/DECEPTRIX',
        description: 'Multimodal video forensic framework detecting deepfakes through spatial FFT frequency analysis and temporal consensus.',
        language: 'Python',
        languageColor: '#3572A5',
        stars: '★ Forensic Suite',
        badge: 'ORIGINAL BUILD',
        tag: 'COMPUTER_VISION',
        url: 'https://github.com/narain-karti/DECEPTRIX',
      },
      {
        name: 'KRED',
        repo: 'narain-karti/KRED',
        description: 'Algorithmic credit risk scoring engine evaluating alternative data vectors with explainable decision trees.',
        language: 'Python / React',
        languageColor: '#3572A5',
        stars: '★ Risk Engine',
        badge: 'ORIGINAL BUILD',
        tag: 'FINTECH_AI',
        url: 'https://github.com/narain-karti/KRED',
      },
      {
        name: 'Expense-Splitter',
        repo: 'narain-karti/Expense-Splitter',
        description: 'Graph-theoretic transaction settlement algorithm minimizing peer-to-peer cash transfer hops.',
        language: 'TypeScript / React',
        languageColor: '#3178c6',
        stars: '★ Graph Algorithm',
        badge: 'ORIGINAL BUILD',
        tag: 'ALGORITHMS',
        url: 'https://github.com/narain-karti/Expense-Splitter',
      },
      {
        name: 'yui-ai',
        repo: 'narain-karti/yui-ai',
        description: 'Experimental lightweight interface and state manager for agentic conversational workflows.',
        language: 'TypeScript',
        languageColor: '#3178c6',
        stars: '★ Experimental',
        badge: 'ORIGINAL BUILD',
        tag: 'AI_AGENTS',
        url: 'https://github.com/narain-karti/yui-ai',
      },
    ],
    curatedResearch: [
      { name: 'awesome-computer-vision', tag: 'CURATED RESEARCH / FORK', desc: 'Curated index of state-of-the-art vision models and datasets' },
      { name: 'awesome-fastapi', tag: 'CURATED RESEARCH / FORK', desc: 'High-performance async API patterns and middleware' },
      { name: 'awesome-ai-safety', tag: 'CURATED RESEARCH / FORK', desc: 'Robustness benchmarks, adversarial attacks & red-teaming' },
      { name: 'awesome-forensics', tag: 'CURATED RESEARCH / FORK', desc: 'Digital media authentication & metadata analysis techniques' },
    ],
  },

  achievementsReceipts: [
    {
      id: 'brave-startups',
      title: 'BRAVE Startups National Competition',
      organization: 'BRAVE National Innovation Board',
      award: 'Winner · Best Innovation & People’s Choice Awards',
      prize: 'National 1st Place',
      year: '2024–2025',
      category: 'STARTUP',
      evidenceStory: 'Pitched and proved commercial viability of Axoweb Technologies, securing 1st place nationwide along with the People’s Choice Award for high-utility software engineering.',
      linkedProject: 'axoweb',
      stampText: 'NATIONAL_WINNER_GOLD',
      verified: true,
    },
    {
      id: 'openai-nxtwave',
      title: 'OpenAI Academy × NxtWave GenAI Buildathon',
      organization: 'OpenAI Academy & NxtWave',
      award: 'National Runner-Up',
      prize: '₹3,00,000 Cash Grant',
      year: '2025',
      category: 'AI_HACKATHON',
      evidenceStory: 'Architected Project K edge traffic intelligence system. Outperformed hundreds of teams across India to secure 2nd place nationwide and ₹3L prize grant.',
      linkedProject: 'project-k',
      stampText: '3L_CASH_PRIZE_RUNNER_UP',
      verified: true,
    },
    {
      id: 'takeover-26',
      title: 'TakeOver’26 National Hackathon',
      organization: 'TakeOver Engineering Committee',
      award: 'Top Rank Winner',
      prize: 'Top Rank Award',
      year: '2026',
      category: 'AI_HACKATHON',
      evidenceStory: 'Built and presented Quorum, an autonomous multi-agent board of directors system with real-time ReactFlow graph debate orchestration.',
      linkedProject: 'quorum',
      stampText: 'TOP_RANK_TAKEOVER26',
      verified: true,
    },
    {
      id: 'nasa-space',
      title: 'NASA Space Settlement Design Contest',
      organization: 'National Space Society (NSS) & NASA Ames Research Center',
      award: 'Zonal Award Winner',
      prize: 'NASA Zonal Laureate',
      year: '2024–2025',
      category: 'SPACE',
      evidenceStory: 'Authored an 80+ page rigorous technical dossier designing a 10,000-person rotating orbital habitat with artificial gravity and closed-loop life support.',
      linkedProject: 'beyond-earth',
      stampText: 'NASA_ZONAL_LAUREATE',
      verified: true,
    },
    {
      id: 'hackathon-trophies',
      title: '5+ Hackathon Victories & 3 National Titles',
      organization: 'Multiple National Hackathon Circuits',
      award: 'Consistent Championship Winner',
      prize: '3× National Titles',
      year: '2024–2026',
      category: 'AI_HACKATHON',
      evidenceStory: 'Proven track record of turning complex architectural ideas into working, winning production prototypes within 24–48 hour high-pressure hackathons.',
      stampText: '5X_HACKATHON_CHAMPION',
      verified: true,
    },
    {
      id: 'olympiad-nso-imo',
      title: 'National Science Olympiad (NSO) & IMO',
      organization: 'Science Olympiad Foundation (SOF)',
      award: 'Zonal-Level Olympiad Rank Holder',
      prize: 'Zonal Distinctions in Mathematics & Science',
      year: 'Academic Foundation',
      category: 'ACADEMIC',
      evidenceStory: 'Demonstrated exceptional foundational aptitude in mathematics, physics, and analytical problem-solving early in academic journey.',
      stampText: 'OLYMPIAD_ZONAL_DISTINCTION',
      verified: true,
    },
  ] as AchievementReceipt[],

  skillsMatrix: [
    {
      category: 'LANGUAGES & RUNTIMES',
      description: 'Core programming languages used daily for systems, machine learning, and web backends.',
      skills: [
        { name: 'Python', levelDescription: 'Primary ML/Data/Agent language', appliedIn: ['Project K', 'DataDoc', 'DECEPTRIX', 'KRED', 'Lab Experiments'] },
        { name: 'TypeScript', levelDescription: 'Full-stack & agent UI development', appliedIn: ['Quorum', 'Privacy Browser Agent', 'Axoweb', 'Portfolio'] },
        { name: 'JavaScript', levelDescription: 'Browser APIs & Node runtimes', appliedIn: ['ThinkersCave', 'Allytriz', 'Tribe Fortis'] },
        { name: 'C++', levelDescription: 'High-performance edge algorithms', appliedIn: ['Project K (Jetson modules)', 'Robotics simulations'] },
        { name: 'SQL', levelDescription: 'Relational data modeling & queries', appliedIn: ['Axoweb (PostgreSQL)', 'Allytriz', 'IIT Madras Coursework'] },
      ],
    },
    {
      category: 'AI / ML & AGENTIC SYSTEMS',
      description: 'From foundational deep learning models to multi-agent dialectic orchestration.',
      skills: [
        { name: 'Agentic AI & Multi-Agent Systems', levelDescription: 'Adversarial & collaborative agent orchestration', appliedIn: ['Quorum', 'Microdolphin', 'ThinkersCave', 'Privacy Browser Agent'] },
        { name: 'Computer Vision & YOLOv8', levelDescription: 'Object detection, tracking & video forensics', appliedIn: ['Project K', 'DECEPTRIX', 'Privacy Agent'] },
        { name: 'Retrieval-Augmented Generation (RAG)', levelDescription: 'Hybrid vector + knowledge graph search', appliedIn: ['ThinkersCave', 'DataDoc', 'EXP_017'] },
        { name: 'PyTorch & TensorFlow', levelDescription: 'Neural network training & fine-tuning', appliedIn: ['DECEPTRIX', 'Model Benchmarks', 'IIT Madras'] },
        { name: 'Polars & Data Engineering', levelDescription: 'Multi-threaded dataset diagnostics & EDA', appliedIn: ['DataDoc', 'EXP_055'] },
        { name: 'LangChain & Tool Calling', levelDescription: 'LLM tool binding and structured output schemas', appliedIn: ['ThinkersCave', 'DataDoc', 'Quorum'] },
        { name: 'Vector Databases', levelDescription: 'Milvus, Chroma, pgvector indexing', appliedIn: ['ThinkersCave', 'Agent Memory'] },
        { name: 'Prompt Engineering & Evaluation', levelDescription: 'Evals, red-teaming, structured dialectics', appliedIn: ['Microdolphin', 'Quorum'] },
      ],
    },
    {
      category: 'SYSTEM DESIGN & CLOUD INFRA',
      description: 'Scalable backend architectures, edge deployment, and microservices.',
      skills: [
        { name: 'System Design & Distributed Systems', levelDescription: 'Decentralized message buses & microservices', appliedIn: ['Project K', 'Axoweb Grievance System', 'Quorum'] },
        { name: 'NVIDIA Jetson & Edge AI', levelDescription: 'TensorRT FP16 quantization & video pipelines', appliedIn: ['Project K', 'MODEL_TEST_09'] },
        { name: 'AWS (Lambda, RDS, SQS, Cognito, ElastiCache)', levelDescription: 'Serverless enterprise cloud backends', appliedIn: ['Axoweb University Platform'] },
        { name: 'Docker & Containerization', levelDescription: 'Reproducible sandboxes & deployment', appliedIn: ['Microdolphin', 'DataDoc', 'Server Containers'] },
        { name: 'MQTT & Low-Latency Protocols', levelDescription: 'Sub-50ms edge mesh telemetry broadcast', appliedIn: ['Project K'] },
        { name: 'FastAPI & Node.js', levelDescription: 'High-throughput async event loops', appliedIn: ['Quorum', 'ThinkersCave', 'Axoweb'] },
      ],
    },
    {
      category: 'FRONTEND & INTERACTIVE SYSTEMS',
      description: 'Dynamic graph visualizers, modern component systems, and mobile apps.',
      skills: [
        { name: 'React & Next.js', levelDescription: 'Interactive UIs, Server Components & App Router', appliedIn: ['Quorum', 'Axoweb Portals', 'Portfolio'] },
        { name: 'ReactFlow & Graph UIs', levelDescription: 'Live node-based dialectic graph renderers', appliedIn: ['Quorum'] },
        { name: 'Tailwind CSS & Motion', levelDescription: 'Bespoke design systems & micro-interactions', appliedIn: ['Portfolio', 'Quorum', 'Axoweb'] },
        { name: 'Flutter & React Native', levelDescription: 'Cross-platform mobile applications', appliedIn: ['Axoweb Car-Wash App', 'Tribe Fortis'] },
        { name: 'Firebase & Supabase', levelDescription: 'Real-time database sync & authentication', appliedIn: ['Axoweb', 'Tribe Fortis'] },
      ],
    },
  ] as SkillCategory[],

  buildLog: [
    {
      id: 'log-07',
      date: '2026.08.28',
      tag: 'PRIVACY AGENT',
      title: 'Local ViT Perception Layer Integration',
      note: 'Benchmarked WebGPU tensor execution in Chromium sandbox. Bounding box redaction runs at 104ms, ensuring zero user-facing keystroke lag.',
      systemState: 'PERCEPTION_ONLINE',
      projectRef: 'privacy-browser-agent',
    },
    {
      id: 'log-06',
      date: '2026.07.19',
      tag: 'DATADOC',
      title: 'PyPI Release v1.0.4 & Polars Lazy Pipeline',
      note: 'Optimized schema drift detection using Rust-backed Polars expressions. Published package update to PyPI (`pip install datadoc-cli`).',
      systemState: 'PYPI_RELEASE_STABLE',
      projectRef: 'datadoc',
    },
    {
      id: 'log-05',
      date: '2026.06.12',
      tag: 'QUORUM',
      title: 'Contrarian Dialectic Tree & TakeOver’26 Victory',
      note: 'Finalized ReactFlow node streaming bus with structured conflict reward heuristics. Presented at TakeOver’26 and secured Top Rank.',
      systemState: 'GRAPH_ORCHESTRATOR_LOCKED',
      projectRef: 'quorum',
    },
    {
      id: 'log-04',
      date: '2026.04.05',
      tag: 'PROJECT K',
      title: 'OpenAI Academy ₹3L Award & Jetson Optimization',
      note: 'Demonstrated 4-camera real-time incident detection on Jetson Orin Nano with 34 FPS throughput. Won National Runner-Up with ₹3L prize.',
      systemState: 'EDGE_GRID_DEPLOYED',
      projectRef: 'project-k',
    },
    {
      id: 'log-03',
      date: '2025.12.18',
      tag: 'AXOWEB',
      title: 'University Grievance AWS Multi-Role Deployment',
      note: 'Deployed 5-role RBAC microservice using AWS Lambda, ElastiCache Redis, and SQS queue for institutional complaint SLA escalations.',
      systemState: 'AWS_PROD_ONLINE',
      projectRef: 'axoweb',
    },
    {
      id: 'log-02',
      date: '2025.08.10',
      tag: 'SPACE DOSSIER',
      title: 'NASA Space Settlement Zonal Award Received',
      note: 'Completed 80-page engineering field notebook detailing rotational artificial gravity kinetics and closed-loop CELSS bio-regenerative loops.',
      systemState: 'NASA_LAUREATE_ARCHIVED',
      projectRef: 'beyond-earth',
    },
  ] as BuildLogItem[],
};
