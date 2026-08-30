'use client';

import React, { useState, useEffect } from 'react';
import {
  Play,
  RotateCcw,
  Shield,
  ShieldAlert,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  Cpu,
  Terminal,
  Activity,
  Zap,
  Users,
  Compass,
  Eye,
  EyeOff,
  Lock,
} from 'lucide-react';

/* =========================================================================
   01: PROJECT K - EDGE TRAFFIC & AMBULANCE GREEN WAVE SIMULATOR
========================================================================= */
export function ProjectKSimulator() {
  const [ambulanceActive, setAmbulanceActive] = useState(false);
  const [trafficDensity, setTrafficDensity] = useState<'LOW' | 'NORMAL' | 'HIGH'>('HIGH');
  const [northQueue, setNorthQueue] = useState(18);
  const [eastQueue, setEastQueue] = useState(14);
  const [fps] = useState(34.2);

  const signalState: 'NORTH_GREEN' | 'EAST_GREEN' | 'AMBULANCE_OVERRIDE' = ambulanceActive
    ? 'AMBULANCE_OVERRIDE'
    : trafficDensity === 'HIGH'
    ? 'NORTH_GREEN'
    : 'EAST_GREEN';

  const handleToggleAmbulance = () => {
    setAmbulanceActive((prev) => {
      const next = !prev;
      if (next) {
        setNorthQueue((q) => Math.max(0, q - 8));
      } else {
        setNorthQueue(18);
      }
      return next;
    });
  };

  return (
    <div className="bg-[#0f172a] text-slate-100 p-4 sm:p-5 rounded-xs border border-slate-700 font-mono text-xs space-y-4">
      {/* Simulation Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-2">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-white">NVIDIA JETSON ORIN NANO · EDGE SIMULATOR</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-700">
            {fps} FPS (FP16 TensorRT)
          </span>
          <span className="text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-700">
            MQTT MESH: CONNECTED
          </span>
        </div>
      </div>

      {/* Intersection Visual Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Intersection Map & Live Camera Feeds */}
        <div className="bg-slate-900 p-3 rounded border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>NODE_ID: INT-842 (DOWNTOWN CORRIDOR)</span>
            <span className={signalState === 'AMBULANCE_OVERRIDE' ? 'text-rose-400 font-bold animate-pulse' : 'text-emerald-400'}>
              {signalState}
            </span>
          </div>

          {/* Road Visual Representation */}
          <div className="relative h-40 bg-slate-950 border border-slate-800 rounded flex items-center justify-center overflow-hidden">
            {/* North-South Road */}
            <div className="absolute top-0 bottom-0 w-16 bg-slate-800 border-x border-dashed border-slate-600 flex flex-col justify-between items-center py-1">
              <span className="text-[9px] text-slate-400">NORTH (Q: {northQueue})</span>
              {ambulanceActive && (
                <div className="bg-rose-600 text-white text-[9px] px-1 py-0.5 rounded font-bold animate-bounce flex items-center gap-1">
                  <span>🚨 AMB</span>
                </div>
              )}
              <span className="text-[9px] text-slate-400">SOUTH</span>
            </div>

            {/* East-West Road */}
            <div className="absolute left-0 right-0 h-16 bg-slate-800 border-y border-dashed border-slate-600 flex justify-between items-center px-1">
              <span className="text-[9px] text-slate-400">WEST</span>
              <span className="text-[9px] text-slate-400">EAST (Q: {eastQueue})</span>
            </div>

            {/* Center Signal Light Indicator */}
            <div className="relative z-10 w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-600 flex items-center justify-center">
              <div
                className={`w-4 h-4 rounded-full ${
                  signalState === 'AMBULANCE_OVERRIDE'
                    ? 'bg-rose-500 animate-ping'
                    : signalState === 'NORTH_GREEN'
                    ? 'bg-emerald-400'
                    : 'bg-amber-400'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Right: Interactive Telemetry & Controls */}
        <div className="space-y-3">
          <div className="space-y-2">
            <span className="text-slate-400 text-[11px] uppercase font-bold">SIMULATION CONTROLS</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleToggleAmbulance}
                className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                  ambulanceActive
                    ? 'bg-rose-600 text-white ring-2 ring-rose-400'
                    : 'bg-slate-800 hover:bg-slate-700 text-rose-300 border border-rose-800'
                }`}
              >
                {ambulanceActive ? '🚨 DISABLE AMBULANCE' : '🚨 TRIGGER EMERGENCY AMBULANCE'}
              </button>

              <button
                type="button"
                onClick={() => {
                  setTrafficDensity((d) => (d === 'HIGH' ? 'LOW' : 'HIGH'));
                  setNorthQueue((q) => (q > 10 ? 5 : 22));
                  setEastQueue((q) => (q > 10 ? 4 : 16));
                }}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 text-xs"
              >
                TOGGLE DENSITY: {trafficDensity}
              </button>
            </div>
          </div>

          <div className="bg-slate-900/80 p-2.5 rounded border border-slate-800 text-[11px] space-y-1.5">
            <div className="flex justify-between text-slate-300">
              <span>Incident Detection Engine:</span>
              <span className="text-emerald-400 font-bold">ONLINE (0 Acc. in last 10m)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Dynamic Green Wave:</span>
              <span className={ambulanceActive ? 'text-rose-400 font-bold' : 'text-slate-400'}>
                {ambulanceActive ? 'ACTIVE (300m Corridor Clear)' : 'STANDBY'}
              </span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Adaptive Phase Wait Time:</span>
              <span className="text-yellow-300">{ambulanceActive ? '0.0s (Pre-empted)' : '14.2s Avg'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   02: DATADOC - INTERACTIVE CLI & POLARS SANDBOX
========================================================================= */
export function DataDocCLISimulator() {
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    '$ pip install datadoc-cli',
    'Collecting datadoc-cli... [PyPI verified]',
    'Successfully installed datadoc-cli-1.0.4 polars-1.22.0',
    '$ datadoc profile sample_churn.csv --engine polars',
  ]);
  const [isRunning, setIsRunning] = useState(false);

  const runCommand = (cmd: string) => {
    setIsRunning(true);
    setTerminalHistory((prev) => [...prev, `$ ${cmd}`]);

    setTimeout(() => {
      if (cmd.includes('fix') || cmd.includes('clean')) {
        setTerminalHistory((prev) => [
          ...prev,
          '[DataDoc Agent] Scanning 2,500,000 rows across 24 columns...',
          '✓ Imputed 4,210 missing `income` values via median group heuristic.',
          '✓ Flagged & clipped 812 extreme `age` outliers (IQR threshold 3.0).',
          '✓ Converted dirty `signup_date` strings to Datetime[ns] format.',
          '✓ Exported reproducible Python pipeline: `clean_pipeline.py`.',
          '⏱ Total execution time: 0.34s (Polars LazyFrame parallel execution)',
        ]);
      } else if (cmd.includes('schema')) {
        setTerminalHistory((prev) => [
          ...prev,
          'Schema Validation Manifest:',
          '  - customer_id: Int64 [Unique 100%]',
          '  - total_spend: Float64 [0 nulls, mean: $412.50]',
          '  - status: Categorical ["active", "churned", "trial"]',
          '  - drift_score: 0.021 (Clean - No distribution shift detected)',
        ]);
      } else {
        setTerminalHistory((prev) => [
          ...prev,
          '[DataDoc EDA] Found 2,500,000 rows | 24 features',
          'Missing Value Summary: income (0.16%), postal_code (0.04%)',
          'Speed Benchmark: 8.4× faster than Pandas DataFrame profile.',
        ]);
      }
      setIsRunning(false);
    }, 450);
  };

  return (
    <div className="bg-[#141518] text-[#f0f0f0] p-4 sm:p-5 rounded-xs border border-neutral-700 font-mono text-xs space-y-3">
      {/* CLI Header */}
      <div className="flex items-center justify-between border-b border-neutral-700 pb-2 text-[11px]">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-yellow-400" />
          <span className="font-bold text-white">DATADOC CLI · INTERACTIVE SANDBOX</span>
        </div>
        <span className="text-neutral-400">pip install datadoc-cli</span>
      </div>

      {/* Terminal Output Area */}
      <div className="bg-black/60 p-3 rounded border border-neutral-800 h-44 overflow-y-auto space-y-1 text-[11px] select-text">
        {terminalHistory.map((line, i) => (
          <div
            key={i}
            className={
              line.startsWith('$')
                ? 'text-yellow-300 font-bold'
                : line.includes('✓')
                ? 'text-emerald-400'
                : line.includes('Error')
                ? 'text-rose-400'
                : 'text-neutral-300'
            }
          >
            {line}
          </div>
        ))}
        {isRunning && <div className="text-yellow-400 animate-pulse">Running Polars engine...</div>}
      </div>

      {/* Quick Action Commands */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="text-[10px] text-neutral-400 uppercase font-bold">CLICK PRESET COMMAND:</span>
        <button
          type="button"
          onClick={() => runCommand('datadoc fix --clean-outliers --impute-missing')}
          className="px-2.5 py-1 bg-yellow-400 text-neutral-950 font-bold rounded-xs hover:bg-yellow-300 text-[11px]"
        >
          datadoc fix (Clean Outliers)
        </button>
        <button
          type="button"
          onClick={() => runCommand('datadoc validate-schema --detect-drift')}
          className="px-2.5 py-1 bg-neutral-800 text-neutral-200 border border-neutral-600 rounded-xs hover:bg-neutral-700 text-[11px]"
        >
          datadoc validate-schema
        </button>
        <button
          type="button"
          onClick={() => setTerminalHistory(['$ datadoc --help', 'DataDoc CLI: High performance Polars-powered dataset cleaner.'])}
          className="px-2.5 py-1 bg-neutral-800 text-neutral-400 rounded-xs hover:text-white text-[11px]"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

/* =========================================================================
   03: QUORUM - MULTI-AGENT BOARD DIALECTIC SIMULATOR
========================================================================= */
export function QuorumBoardSimulator() {
  const [scenario, setScenario] = useState<'PRICING' | 'TECH_MIGRATION' | 'ACQUISITION'>('PRICING');
  const [activeStep, setActiveStep] = useState(0);

  const scenarios = {
    PRICING: {
      title: 'Initiative: Launch AI Pro Plan at $49/mo instead of $19/mo',
      turns: [
        { agent: 'CEO Agent', stance: 'Proposal', message: 'Higher price point targets high-LTV enterprise users and covers GPU cluster compute costs.' },
        { agent: 'CFO Agent', stance: 'Financial Review', message: 'Projected gross margin increases from 42% to 78%. Payback period drops to 2.1 months.' },
        { agent: 'CMO Agent', stance: 'Conversion Risk', message: 'Warning: Top-of-funnel conversion rate will drop by ~60% without a generous self-serve trial.' },
        { agent: 'Contrarian Agent', stance: 'Blind Spot Flag', message: 'Competitor open-source alternatives will undercut us at $0 within 90 days. We need usage-based API tiers.' },
        { agent: 'Orchestrator Consensus', stance: 'Final Synthesis', message: 'Adopt hybrid model: $29/mo base seat + usage tokens with 14-day zero-card trial.' },
      ],
    },
    TECH_MIGRATION: {
      title: 'Initiative: Rewrite entire Node.js microservice layer in Rust',
      turns: [
        { agent: 'CTO Agent', stance: 'Proposal', message: 'Rust eliminates GC pauses and drops memory footprint by 80% on high-load ingress proxies.' },
        { agent: 'COO Agent', stance: 'Operational Risk', message: 'Developer onboarding time will triple and feature velocity will stall for 4 months.' },
        { agent: 'CFO Agent', stance: 'Cost Impact', message: 'Cloud Run / EC2 server bills will drop from $14k/mo to $3.2k/mo.' },
        { agent: 'Contrarian Agent', stance: 'Failure Mode', message: 'Our bottleneck is database I/O latency, not CPU serialization. Rust won’t fix unindexed SQL queries.' },
        { agent: 'Orchestrator Consensus', stance: 'Final Synthesis', message: 'Do not rewrite whole monolith. Extract only the 2 highest-throughput streaming workers to Rust.' },
      ],
    },
    ACQUISITION: {
      title: 'Initiative: Acquire boutique 4-person AI research consultancy for $500k',
      turns: [
        { agent: 'CEO Agent', stance: 'Proposal', message: 'Acquihire immediately injects proprietary RL fine-tuning talent into our core engineering roadmap.' },
        { agent: 'CFO Agent', stance: 'Valuation Audit', message: '500k represents 6 months of current runway. Requires raising a bridge note.' },
        { agent: 'Contrarian Agent', stance: 'Retention Risk', message: 'Key founders will likely leave after 1-year vesting cliff unless equity is tied to milestone releases.' },
        { agent: 'Orchestrator Consensus', stance: 'Final Synthesis', message: 'Structure deal as 40% upfront cash + 60% 3-year performance-vested equity milestone package.' },
      ],
    },
  };

  const current = scenarios[scenario];

  return (
    <div className="bg-[#181a20] text-slate-100 p-4 sm:p-5 rounded-xs border border-slate-700 font-mono text-xs space-y-4">
      {/* Board Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-2 text-[11px]">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-purple-400" />
          <span className="font-bold text-white">QUORUM · AUTONOMOUS BOARD DIALECTIC GRAPH</span>
        </div>
        <span className="text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-700">
          REACTFLOW GRAPH BUS
        </span>
      </div>

      {/* Scenario Selector */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] text-slate-400 uppercase font-bold">SELECT BOARD TOPIC:</span>
        <button
          type="button"
          onClick={() => { setScenario('PRICING'); setActiveStep(0); }}
          className={`px-2.5 py-1 rounded text-xs transition-all ${
            scenario === 'PRICING' ? 'bg-purple-600 text-white font-bold' : 'bg-slate-800 text-slate-300'
          }`}
        >
          Pricing Strategy
        </button>
        <button
          type="button"
          onClick={() => { setScenario('TECH_MIGRATION'); setActiveStep(0); }}
          className={`px-2.5 py-1 rounded text-xs transition-all ${
            scenario === 'TECH_MIGRATION' ? 'bg-purple-600 text-white font-bold' : 'bg-slate-800 text-slate-300'
          }`}
        >
          Rust Rewrite
        </button>
        <button
          type="button"
          onClick={() => { setScenario('ACQUISITION'); setActiveStep(0); }}
          className={`px-2.5 py-1 rounded text-xs transition-all ${
            scenario === 'ACQUISITION' ? 'bg-purple-600 text-white font-bold' : 'bg-slate-800 text-slate-300'
          }`}
        >
          Acquihire
        </button>
      </div>

      {/* Active Dialogue Turns */}
      <div className="bg-slate-900 p-3.5 rounded border border-slate-800 space-y-2.5">
        <p className="text-xs font-bold text-yellow-300 border-b border-slate-800 pb-1.5">
          {current.title}
        </p>

        <div className="space-y-2 max-h-52 overflow-y-auto">
          {current.turns.map((turn, i) => (
            <div
              key={i}
              className={`p-2 rounded border transition-all ${
                turn.agent.includes('Contrarian')
                  ? 'bg-rose-950/30 border-rose-800 text-rose-100'
                  : turn.agent.includes('Consensus')
                  ? 'bg-emerald-950/40 border-emerald-700 text-emerald-100'
                  : 'bg-slate-800/60 border-slate-700 text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-slate-400 mb-0.5">
                <span className="font-bold text-white flex items-center gap-1">
                  <span>{turn.agent}</span>
                  {turn.agent.includes('Contrarian') && (
                    <span className="px-1 bg-rose-800 text-white text-[9px] rounded">DEVIL’S ADVOCATE</span>
                  )}
                </span>
                <span className="italic">{turn.stance}</span>
              </div>
              <p className="text-[11px] leading-relaxed">{turn.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   04: PRIVACY BROWSER AGENT - DOM & CV REDACTION SIMULATOR
========================================================================= */
export function PrivacyAgentSimulator() {
  const [firewallActive, setFirewallActive] = useState(true);

  return (
    <div className="bg-[#111827] text-slate-100 p-4 sm:p-5 rounded-xs border border-slate-700 font-mono text-xs space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-2 text-[11px]">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-white">PRIVACY FIREWALL · LOCAL CV REDACTION DEMO</span>
        </div>
        <button
          type="button"
          onClick={() => setFirewallActive(!firewallActive)}
          className={`px-3 py-1 rounded text-xs font-bold transition-all flex items-center gap-1.5 ${
            firewallActive
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-rose-700 text-white ring-2 ring-rose-400'
          }`}
        >
          {firewallActive ? <Lock className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
          <span>{firewallActive ? 'FIREWALL ACTIVE (PROTECTED)' : 'FIREWALL OFF (UNSAFE)'}</span>
        </button>
      </div>

      {/* Interactive Webpage Sandbox View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: What the Browser Webpage Displays */}
        <div className="bg-slate-900 p-3 rounded border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>CLIENT VIEWPORT (BROWSER)</span>
            <span className="text-emerald-400 text-[10px]">LOCAL ON-DEVICE SCAN</span>
          </div>

          <div className="bg-white text-neutral-900 p-3 rounded text-xs space-y-2">
            <div className="text-[11px] font-bold text-neutral-500 uppercase border-b pb-1">
              Checkout & Identity Verification
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-neutral-500 block">CARDHOLDER NAME</label>
              <div className="relative">
                <input
                  type="text"
                  disabled
                  value="Narain Karti"
                  className="w-full bg-neutral-100 px-2 py-1 border rounded text-xs font-mono"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-neutral-500 block">CREDIT CARD NUMBER</label>
              <div className="relative">
                <input
                  type="text"
                  disabled
                  value={firewallActive ? '████-████-████-8842' : '4532-8921-0041-8842'}
                  className={`w-full px-2 py-1 border rounded text-xs font-mono ${
                    firewallActive ? 'bg-emerald-100 text-emerald-900 border-emerald-400' : 'bg-rose-100 text-rose-900 border-rose-400 font-bold'
                  }`}
                />
                {firewallActive && (
                  <span className="absolute right-2 top-1 text-[9px] bg-emerald-600 text-white px-1 rounded">
                    MASKED
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-neutral-500 block">SSN / GOVT ID</label>
              <div className="relative">
                <input
                  type="text"
                  disabled
                  value={firewallActive ? '***-**-6721 [VAULT_REF_49]' : '984-21-6721'}
                  className={`w-full px-2 py-1 border rounded text-xs font-mono ${
                    firewallActive ? 'bg-emerald-100 text-emerald-900 border-emerald-400' : 'bg-rose-100 text-rose-900'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: What Cloud AI Model Receives */}
        <div className="bg-slate-900 p-3 rounded border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>TELEMETRY SENT TO CLOUD AI</span>
            <span className={firewallActive ? 'text-emerald-400' : 'text-rose-400 font-bold'}>
              {firewallActive ? '0 PII LEAKAGE' : '⚠️ HIGH RISK LEAKAGE'}
            </span>
          </div>

          <pre className="bg-black/70 p-2.5 rounded border border-slate-800 text-[10px] text-slate-300 overflow-x-auto h-40">
            {firewallActive
              ? JSON.stringify(
                  {
                    action: 'click_button',
                    target: 'submit_payment',
                    masked_fields: {
                      card_token: '$VAULT_TOKEN_A89F',
                      cvv_status: 'LOCAL_INJECT_ON_DISPATCH',
                      user_pii: 'REDACTED_BY_LOCAL_VIT',
                    },
                    network_leakage: '0 bytes private data',
                  },
                  null,
                  2
                )
              : JSON.stringify(
                  {
                    action: 'click_button',
                    target: 'submit_payment',
                    RAW_EXPOSED_DATA: {
                      card_number: '4532-8921-0041-8842',
                      ssn: '984-21-6721',
                      holder: 'Narain Karti',
                    },
                    warning: 'PLAINTEXT SENT OVER NETWORK',
                  },
                  null,
                  2
                )}
          </pre>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   05: NASA SPACE SETTLEMENT - GRAVITY & OXYGEN CALCULATOR
========================================================================= */
export function SpaceSettlementSimulator() {
  const [rpm, setRpm] = useState<number>(2.0);
  const radius = 224; // meters
  // Centripetal Acceleration: a = \omega^2 * r
  // \omega = (2 * \pi * RPM) / 60
  const omega = (2 * Math.PI * rpm) / 60;
  const accel = omega * omega * radius;
  const earthG = (accel / 9.81).toFixed(2);

  return (
    <div className="bg-[#0b132b] text-slate-100 p-4 sm:p-5 rounded-xs border border-blue-900 font-mono text-xs space-y-4">
      {/* Dossier Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-900/80 pb-2 text-[11px]">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-cyan-400" />
          <span className="font-bold text-white">BEYOND EARTH · ROTATIONAL GRAVITY & LIFE SUPPORT CALCULATOR</span>
        </div>
        <span className="text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-700">
          NASA ZONAL DOSSIER
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Rotational Gravity Equation */}
        <div className="bg-slate-900/90 p-3 rounded border border-blue-950 space-y-3">
          <span className="text-[11px] text-cyan-300 font-bold uppercase">1. ROTATIONAL GRAVITY KINETICS</span>

          <div className="space-y-2 text-[11px] text-slate-300">
            <p>Habitat Torus Radius: <strong className="text-white">{radius} meters</strong></p>
            <div>
              <label className="block text-slate-400 mb-1">
                Rotational Velocity (RPM): <strong className="text-cyan-300">{rpm} RPM</strong>
              </label>
              <input
                type="range"
                min="0.5"
                max="4.0"
                step="0.1"
                value={rpm}
                onChange={(e) => setRpm(parseFloat(e.target.value))}
                className="w-full accent-cyan-400"
              />
            </div>

            <div className="p-2 bg-slate-950 rounded border border-blue-900 text-center">
              <span className="text-xs text-slate-400">Resulting Artificial Gravity:</span>
              <div className="text-xl font-bold text-cyan-300 mt-0.5">
                {earthG} g ({accel.toFixed(2)} m/s²)
              </div>
              <span className="text-[10px] text-slate-400">
                {parseFloat(earthG) >= 0.95 && parseFloat(earthG) <= 1.05
                  ? '✓ Optimal 1.0g Earth-Equivalent'
                  : parseFloat(earthG) < 0.95
                  ? '⚠️ Hypogravity (bone density risk)'
                  : '⚠️ Excessive Centrifugal Strain'}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Closed Loop Bio-Regenerative (CELSS) */}
        <div className="bg-slate-900/90 p-3 rounded border border-blue-950 space-y-3">
          <span className="text-[11px] text-cyan-300 font-bold uppercase">2. CLOSED-LOOP CELSS MASS BALANCE</span>

          <div className="space-y-1.5 text-[11px] text-slate-300">
            <div className="flex justify-between border-b border-slate-800 pb-1">
              <span>Population Capacity:</span>
              <strong className="text-white">10,000 Citizens</strong>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-1">
              <span>O2 Photobioreactor Loop:</span>
              <strong className="text-emerald-400">99.4% Efficiency</strong>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-1">
              <span>Water Reclamation (SCWO):</span>
              <strong className="text-cyan-400">99.7% Loop</strong>
            </div>
            <div className="flex justify-between">
              <span>Radiation Shielding:</span>
              <strong className="text-yellow-300">5m Lunar Regolith (500 g/cm²)</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   06: AXOWEB PLATFORM - AWS SERVERLESS & MULTI-APP DISPATCH SIMULATOR
========================================================================= */
export function AxowebPlatformSimulator() {
  const [activeRole, setActiveRole] = useState<'CUSTOMER' | 'PARTNER' | 'ADMIN' | 'DEAN'>('CUSTOMER');
  const [bookingStatus, setBookingStatus] = useState<'IDLE' | 'DISPATCHING' | 'ACCEPTED' | 'COMPLETED'>('IDLE');
  const [lambdaExecutionMs, setLambdaExecutionMs] = useState(42);

  const handleSimulateBooking = () => {
    setBookingStatus('DISPATCHING');
    setLambdaExecutionMs(38);
    setTimeout(() => {
      setBookingStatus('ACCEPTED');
      setLambdaExecutionMs(45);
    }, 800);
  };

  return (
    <div className="bg-[#042f2e] text-teal-100 p-4 sm:p-5 rounded-xs border border-teal-700 font-mono text-xs space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal-800 pb-2 text-[11px]">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-teal-300" />
          <span className="font-bold text-white">AXOWEB · AWS SERVERLESS &amp; 5-ROLE RBAC TELEMETRY</span>
        </div>
        <span className="text-emerald-300 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-600">
          ₹7L+ REVENUE PLATFORM
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Role Switcher & App Simulation */}
        <div className="bg-teal-950/90 p-3 rounded border border-teal-800 space-y-3">
          <span className="text-[11px] text-teal-300 font-bold uppercase">1. MULTI-ROLE CLIENT SUITE</span>
          
          <div className="flex flex-wrap gap-1.5">
            {(['CUSTOMER', 'PARTNER', 'ADMIN', 'DEAN'] as const).map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => setActiveRole(role)}
                className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all border ${
                  activeRole === role
                    ? 'bg-teal-400 text-teal-950 border-teal-300'
                    : 'bg-teal-900 text-teal-200 border-teal-700 hover:bg-teal-800'
                }`}
              >
                {role} APP
              </button>
            ))}
          </div>

          <div className="p-3 bg-teal-900/60 rounded border border-teal-700/60 space-y-2 text-[11px]">
            <div className="flex justify-between">
              <span>Selected Persona:</span>
              <strong className="text-white">{activeRole} (Cognito Group: {activeRole}_ROLE)</strong>
            </div>
            <div className="flex justify-between">
              <span>Simulated Action:</span>
              <span className="text-teal-200">
                {activeRole === 'CUSTOMER' && 'Instant Mobile Booking Dispatch'}
                {activeRole === 'PARTNER' && 'Live GPS Navigation & Job Acceptance'}
                {activeRole === 'ADMIN' && 'Revenue & Commission Reconciliation'}
                {activeRole === 'DEAN' && 'Confidential Grievance Escalation Gate'}
              </span>
            </div>
            
            {activeRole === 'CUSTOMER' && (
              <button
                type="button"
                onClick={handleSimulateBooking}
                className="w-full mt-2 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded transition-colors text-center"
              >
                {bookingStatus === 'IDLE' && 'Trigger Test Car-Wash Booking >>'}
                {bookingStatus === 'DISPATCHING' && 'Routing through SQS Queue...'}
                {bookingStatus === 'ACCEPTED' && '✓ Partner Dispatched (0.8s SLA)'}
              </button>
            )}
          </div>
        </div>

        {/* Right: AWS Microservices Graph */}
        <div className="bg-teal-950/90 p-3 rounded border border-teal-800 space-y-3">
          <span className="text-[11px] text-teal-300 font-bold uppercase">2. AWS MICROSERVICES STATE</span>

          <div className="space-y-1.5 text-[11px] text-teal-200">
            <div className="flex justify-between border-b border-teal-800 pb-1">
              <span>API Gateway Latency:</span>
              <strong className="text-emerald-300">&lt;18ms (CloudFront Edge)</strong>
            </div>
            <div className="flex justify-between border-b border-teal-800 pb-1">
              <span>Lambda Execution Time:</span>
              <strong className="text-white">{lambdaExecutionMs} ms (Arm64 Graviton)</strong>
            </div>
            <div className="flex justify-between border-b border-teal-800 pb-1">
              <span>ElastiCache Redis Hits:</span>
              <strong className="text-teal-300">99.2% (Sub-2ms cache)</strong>
            </div>
            <div className="flex justify-between">
              <span>PostgreSQL RDS Health:</span>
              <strong className="text-emerald-400">ACID Verified (100% durability)</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   07: DECEPTRIX - MULTIMODAL DEEPFAKE FORENSIC DETECTOR
========================================================================= */
export function DeceptrixSimulator() {
  const [frameIndex, setFrameIndex] = useState(12);
  const [spectralScore, setSpectralScore] = useState(94.2);
  const isManipulated = frameIndex >= 8 && frameIndex <= 24;

  return (
    <div className="bg-[#18181b] text-neutral-200 p-4 sm:p-5 rounded-xs border border-neutral-700 font-mono text-xs space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-700 pb-2 text-[11px]">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-purple-400" />
          <span className="font-bold text-white">DECEPTRIX · MULTIMODAL TEMPORAL FORENSIC AUDITOR</span>
        </div>
        <span className="text-purple-300 bg-purple-950/70 px-2 py-0.5 rounded border border-purple-600">
          93.4% FORENSIC BENCHMARK
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-neutral-900 p-3 rounded border border-neutral-800 space-y-3">
          <span className="text-[11px] text-purple-300 font-bold uppercase">1. VIDEO SCRUBBER &amp; HEATMAP</span>
          
          <div>
            <label className="block text-neutral-400 mb-1">
              Frame Timestamp: <strong className="text-white">Frame #{frameIndex} (00:0{Math.floor(frameIndex / 6)}s)</strong>
            </label>
            <input
              type="range"
              min="1"
              max="30"
              value={frameIndex}
              onChange={(e) => setFrameIndex(parseInt(e.target.value))}
              className="w-full accent-purple-400"
            />
          </div>

          <div className={`p-3 rounded border text-center font-bold ${
            isManipulated ? 'bg-rose-950/70 border-rose-600 text-rose-300' : 'bg-emerald-950/70 border-emerald-600 text-emerald-300'
          }`}>
            {isManipulated ? '🚨 SYNTHETIC ARTIFACT DETECTED (Face-Swap Blend Boundary)' : '✓ AUTHENTIC BIOLOGICAL PULSE (rPPG Verified)'}
          </div>
        </div>

        <div className="bg-neutral-900 p-3 rounded border border-neutral-800 space-y-2">
          <span className="text-[11px] text-purple-300 font-bold uppercase">2. SPECTRAL &amp; TEMPORAL CONSENSUS</span>
          <div className="space-y-1.5 text-[11px] text-neutral-300">
            <div className="flex justify-between border-b border-neutral-800 pb-1">
              <span>Spatial 2D-FFT Residuals:</span>
              <strong className={isManipulated ? 'text-rose-400' : 'text-emerald-400'}>
                {isManipulated ? 'High Frequency Spike (Upscaling artifact)' : 'Natural Spectral Falloff'}
              </strong>
            </div>
            <div className="flex justify-between border-b border-neutral-800 pb-1">
              <span>Temporal Optical Flow Jitter:</span>
              <strong className={isManipulated ? 'text-amber-400' : 'text-emerald-400'}>
                {isManipulated ? '3.4px inter-frame drift' : '0.2px smooth flow'}
              </strong>
            </div>
            <div className="flex justify-between">
              <span>Overall Synthetic Index:</span>
              <strong className={isManipulated ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                {isManipulated ? '97.8% FAKE PROBABILITY' : '2.1% (AUTHENTIC)'}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   08: THINKERSCAVE - NEO4J KNOWLEDGE GRAPH & RAG SIMULATOR
========================================================================= */
export function ThinkersCaveSimulator() {
  const [query, setQuery] = useState('How does grievance escalation route to the dean?');
  const [retrievedNodes, setRetrievedNodes] = useState(['Faculty_Member', 'HOD_Approval_Gate', 'Dean_Appeals_Ombudsman']);

  return (
    <div className="bg-[#1e1b4b] text-indigo-100 p-4 sm:p-5 rounded-xs border border-indigo-700 font-mono text-xs space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-800 pb-2 text-[11px]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-indigo-300" />
          <span className="font-bold text-white">THINKERSCAVE · NEO4J KNOWLEDGE GRAPH + HYBRID RAG</span>
        </div>
        <span className="text-emerald-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-600">
          -40% RESOLUTION TIME
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-indigo-950/80 p-3 rounded border border-indigo-800 space-y-2">
          <span className="text-[11px] text-indigo-300 font-bold uppercase">1. NATURAL LANGUAGE RAG QUERY</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-indigo-900 px-3 py-1.5 rounded border border-indigo-700 text-white text-xs focus:outline-none"
          />
          <div className="text-[10px] text-indigo-300">
            &gt; Cypher generated: MATCH (u:User)-[:SUBMITS]-&gt;(g:Grievance)-[:ESCALATES_TO]-&gt;(d:Dean) RETURN g, d
          </div>
        </div>

        <div className="bg-indigo-950/80 p-3 rounded border border-indigo-800 space-y-2">
          <span className="text-[11px] text-indigo-300 font-bold uppercase">2. RETRIEVED SUBGRAPH NODES</span>
          <div className="flex flex-wrap gap-1.5">
            {retrievedNodes.map((n, i) => (
              <span key={i} className="px-2 py-1 bg-indigo-800 text-yellow-300 rounded border border-indigo-600 text-[10px] font-bold">
                ● {n}
              </span>
            ))}
          </div>
          <div className="text-[10px] text-emerald-300">
            ✓ Cross-Encoder Rank Score: 0.942 (Attributed to Policy Bylaw 14.2)
          </div>
        </div>
      </div>
    </div>
  );
}
