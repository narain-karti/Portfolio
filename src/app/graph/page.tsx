"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Compass, Filter } from "lucide-react";
import TransitionLink from "../../components/TransitionLink";
import { BLOG_POSTS } from "../../data/blogs";

type NodeKind = "page" | "project" | "domain";

interface GraphNode {
  id: string;
  label: string;
  sub: string;
  kind: NodeKind;
  x: number;
  y: number;
  r: number;
  href: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

const NODES: GraphNode[] = [
  // Core Navigation Tabs (top + outer orbit)
  { id: "tab-home", label: "Home", sub: "Bento Portal", kind: "page", x: 560, y: 82, r: 22, href: "/" },
  { id: "tab-work", label: "Work", sub: "9 Systems & Dossiers", kind: "page", x: 350, y: 158, r: 26, href: "/work" },
  { id: "tab-blog", label: "Blogs", sub: "8 Build Logs", kind: "page", x: 770, y: 158, r: 25, href: "/blog" },
  { id: "tab-builder", label: "Builder", sub: "Experience & Stack", kind: "page", x: 210, y: 340, r: 24, href: "/builder" },
  { id: "tab-about", label: "About", sub: "IITM × NxtWave", kind: "page", x: 915, y: 335, r: 24, href: "/about" },
  { id: "tab-lab", label: "Hairline Lab", sub: "Isometric Figures", kind: "page", x: 750, y: 548, r: 21, href: "/website" },
  { id: "tab-downloads", label: "Downloads", sub: "Resume & CLI", kind: "page", x: 375, y: 548, r: 21, href: "/downloads" },
  { id: "tab-contact", label: "Contact", sub: "Get in Touch", kind: "page", x: 560, y: 572, r: 21, href: "/contact" },

  // Domain Hubs (inner ring anchors)
  { id: "dom-edge", label: "Edge AI & Vision", sub: "Jetson · YOLO · FFT", kind: "domain", x: 385, y: 292, r: 20, href: "/work" },
  { id: "dom-agents", label: "Multi-Agent Systems", sub: "Tools · Dialectic · RAG", kind: "domain", x: 735, y: 292, r: 20, href: "/builder" },
  { id: "dom-data", label: "Polars & Data", sub: "Arrow · Leakage-Safe", kind: "domain", x: 560, y: 238, r: 20, href: "/work?project=datadoc" },
  { id: "dom-cloud", label: "AWS & Full-Stack", sub: "Lambda · Next.js · Flutter", kind: "domain", x: 560, y: 422, r: 20, href: "/builder" },

  // All 10 Flagship Projects + Leadership/Venture Initiatives
  { id: "datadoc", label: "DATADOC", sub: "PyPI · 0.42s / 1M", kind: "project", x: 560, y: 152, r: 20, href: "/work?project=datadoc", secondaryHref: "/blog/datadoc-from-script-to-pypi", secondaryLabel: "Read Commit Log" },
  { id: "mech-g", label: "MECH-G", sub: "Offline Gemma 4", kind: "project", x: 878, y: 238, r: 19, href: "/work?project=mech-g", secondaryHref: "/blog/mech-g-offline-industrial-gemma", secondaryLabel: "Read Commit Log" },
  { id: "project-melv", label: "Project-MELV", sub: "14ms · 99.82% Cut", kind: "project", x: 245, y: 228, r: 19, href: "/work?project=project-melv", secondaryHref: "/blog/project-melv-city-digital-twin", secondaryLabel: "Read Commit Log" },
  { id: "otomo", label: "OTOMO", sub: "AI Memory CRM · BRAVE", kind: "project", x: 642, y: 312, r: 18, href: "/work?project=otomo" },
  { id: "elio", label: "ELIO", sub: "Privacy Agent · SIH", kind: "project", x: 472, y: 312, r: 18, href: "/work?project=elio" },
  { id: "quorum", label: "Quorum", sub: "TakeOver'26 #1", kind: "project", x: 878, y: 432, r: 20, href: "/work?project=quorum", secondaryHref: "/blog/quorum-adversarial-boardroom", secondaryLabel: "Read Commit Log" },
  { id: "project-k", label: "Project K", sub: "OpenAI ₹3L Winner", kind: "project", x: 156, y: 446, r: 21, href: "/work?project=project-k", secondaryHref: "/blog/project-k-openai-buildathon-journey", secondaryLabel: "Read Commit Log" },
  { id: "deceptrix", label: "DECEPTRIX", sub: "7-Signal Forensics", kind: "project", x: 332, y: 442, r: 19, href: "/work?project=deceptrix", secondaryHref: "/blog/deceptrix-fixing-050-baseline-to-7-signal-fusion", secondaryLabel: "Read Commit Log" },
  { id: "axoweb", label: "AxoWeb", sub: "₹10L+* · 20+ Clients", kind: "project", x: 486, y: 492, r: 20, href: "/work?project=axoweb", secondaryHref: "/blog/axoweb-zero-to-7l-and-aws-microservices", secondaryLabel: "Read Venture Log" },
  { id: "beyond-earth", label: "BEYOND EARTH", sub: "NASA Zonal Award", kind: "project", x: 960, y: 500, r: 18, href: "/work?project=beyond-earth" },
  { id: "eduvia", label: "Eduvia", sub: "55+ Signups · Cohorts", kind: "domain", x: 750, y: 422, r: 18, href: "/builder" },
];

const EDGES: [string, string][] = [
  // Home hub links
  ["tab-home", "tab-work"],
  ["tab-home", "tab-blog"],
  ["tab-home", "dom-data"],
  ["tab-work", "datadoc"],
  ["tab-work", "project-melv"],
  ["tab-work", "project-k"],
  ["tab-work", "deceptrix"],
  ["tab-work", "dom-edge"],
  ["tab-blog", "datadoc"],
  ["tab-blog", "mech-g"],
  ["tab-blog", "quorum"],
  ["tab-builder", "dom-edge"],
  ["tab-builder", "axoweb"],
  ["tab-builder", "eduvia"],
  ["tab-builder", "dom-cloud"],
  ["tab-builder", "project-k"],
  ["tab-about", "mech-g"],
  ["tab-about", "quorum"],
  ["tab-about", "beyond-earth"],
  ["tab-about", "eduvia"],
  ["tab-downloads", "datadoc"],
  ["tab-downloads", "tab-contact"],
  ["tab-lab", "quorum"],
  ["tab-lab", "elio"],
  ["tab-lab", "otomo"],
  ["tab-lab", "tab-contact"],

  // Project <-> Domain cross links
  ["dom-data", "datadoc"],
  ["dom-data", "deceptrix"],
  ["dom-data", "otomo"],
  ["dom-edge", "project-melv"],
  ["dom-edge", "project-k"],
  ["dom-edge", "deceptrix"],
  ["dom-edge", "elio"],
  ["dom-agents", "mech-g"],
  ["dom-agents", "quorum"],
  ["dom-agents", "otomo"],
  ["dom-agents", "elio"],
  ["dom-agents", "datadoc"],
  ["dom-cloud", "axoweb"],
  ["dom-cloud", "project-melv"],
  ["dom-cloud", "quorum"],
];

export default function KnowledgeGraphPage() {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [filterKind, setFilterKind] = useState<"all" | NodeKind>("all");
  const [cursorSvg, setCursorSvg] = useState<{ x: number; y: number } | null>(null);

  const adjacency = useMemo(() => {
    const map = new Map<string, Set<string>>();
    NODES.forEach((n) => map.set(n.id, new Set()));
    EDGES.forEach(([a, b]) => {
      map.get(a)?.add(b);
      map.get(b)?.add(a);
    });
    return map;
  }, []);

  const activeNode = useMemo(
    () => NODES.find((n) => n.id === hoveredId) ?? null,
    [hoveredId]
  );

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    setCursorSvg({
      x: ((e.clientX - rect.left) / rect.width) * 1120,
      y: ((e.clientY - rect.top) / rect.height) * 640,
    });
  };

  return (
    <div className="subpage-shell">
      <div className="subpage-container">
        <nav className="breadcrumb-nav">
          <div className="breadcrumb-trail">
            <TransitionLink href="/">Home</TransitionLink>
            <span>/</span>
            <span className="breadcrumb-current">Knowledge Graph</span>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <TransitionLink href="/work" className="grid-card-pill">
              Open All Projects →
            </TransitionLink>
            <TransitionLink href="/blog" className="grid-card-pill">
              All {BLOG_POSTS.length} Essays →
            </TransitionLink>
          </div>
        </nav>

        <div style={{ marginBottom: "1.75rem" }}>
          <h1 className="hero-manifesto" style={{ marginBottom: "0.75rem" }}>
            Interactive Portfolio Knowledge Graph
          </h1>
          <p className="hero-subcopy">
            Hover any node to trace how projects, engineering write-ups, technical stacks, and site tabs connect. Click any project or tab node to jump straight to its page or architecture dossier.
          </p>
        </div>

        {/* Filter & HUD strip */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
            marginBottom: "1rem",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "#888", display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <Filter size={13} /> Highlight:
            </span>
            {[
              { id: "all", label: `Everything (${NODES.length} Nodes)` },
              { id: "project", label: `Projects (${NODES.filter((n) => n.kind === "project").length})` },
              { id: "page", label: `Site Tabs (${NODES.filter((n) => n.kind === "page").length})` },
              { id: "domain", label: `Domains (${NODES.filter((n) => n.kind === "domain").length})` },
            ].map((f) => {
              const active = filterKind === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilterKind(f.id as "all" | NodeKind)}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.74rem",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    border: active ? "1px solid #6ee7b7" : "1px solid #2a2a2a",
                    background: active ? "rgba(110, 231, 183, 0.14)" : "#141414",
                    color: active ? "#6ee7b7" : "#a3a3a3",
                    cursor: "pointer",
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: activeNode ? "#6ee7b7" : "#888", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <Compass size={14} />
            {activeNode ? `${activeNode.label} → Click to open ${activeNode.href}` : "Hover or tap any node to inspect links"}
          </div>
        </div>

        {/* Interactive Graph Stage */}
        <div
          style={{
            position: "relative",
            background: "#111111",
            border: "1px solid #262626",
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "2rem",
          }}
        >
          <svg
            viewBox="0 0 1120 640"
            style={{ width: "100%", height: "auto", display: "block", minHeight: "360px", touchAction: "pan-y" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              setCursorSvg(null);
              setHoveredId(null);
            }}
            role="img"
            aria-label="Interactive Knowledge Graph connecting all portfolio pages and projects"
          >
            <defs>
              <radialGradient id="kgCursorGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(110, 231, 183, 0.14)" />
                <stop offset="100%" stopColor="rgba(110, 231, 183, 0)" />
              </radialGradient>
            </defs>

            {/* Subtle architectural dot backdrop */}
            {cursorSvg && (
              <circle cx={cursorSvg.x} cy={cursorSvg.y} r="150" fill="url(#kgCursorGlow)" pointerEvents="none" />
            )}

            {/* Edges */}
            {EDGES.map(([aId, bId]) => {
              const a = NODES.find((n) => n.id === aId);
              const b = NODES.find((n) => n.id === bId);
              if (!a || !b) return null;

              const connectedToHover = hoveredId ? aId === hoveredId || bId === hoveredId : false;
              const matchesFilter =
                filterKind === "all" || a.kind === filterKind || b.kind === filterKind;
              const dimmed = hoveredId ? !connectedToHover : !matchesFilter;

              return (
                <line
                  key={`${aId}-${bId}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  className={connectedToHover ? "knowledge-edge-flow" : undefined}
                  stroke={connectedToHover ? "#6ee7b7" : "#2c2c2c"}
                  strokeWidth={connectedToHover ? 1.8 : 1}
                  strokeOpacity={dimmed ? 0.16 : connectedToHover ? 0.95 : 0.72}
                />
              );
            })}

            {/* Nodes */}
            {NODES.map((node) => {
              const isHovered = hoveredId === node.id;
              const isNeighbor = hoveredId ? adjacency.get(hoveredId)?.has(node.id) ?? false : false;
              const matchesFilter = filterKind === "all" || node.kind === filterKind;
              const dimmed = hoveredId ? !isHovered && !isNeighbor : !matchesFilter;

              // Subtle magnetic pull toward cursor within 115 viewBox units
              let dx = 0,
                dy = 0;
              if (cursorSvg) {
                const dist = Math.hypot(cursorSvg.x - node.x, cursorSvg.y - node.y);
                if (dist > 1 && dist < 120) {
                  const pull = ((120 - dist) / 120) * 6;
                  dx = ((cursorSvg.x - node.x) / dist) * pull;
                  dy = ((cursorSvg.y - node.y) / dist) * pull;
                }
              }

              const fill =
                node.kind === "page" ? "#16201c" : node.kind === "project" ? "#161616" : "#1c1a16";
              const stroke = isHovered
                ? "#ffffff"
                : isNeighbor
                ? "#6ee7b7"
                : node.kind === "page"
                ? "#4a5d54"
                : node.kind === "domain"
                ? "#595243"
                : "#383838";

              return (
                <g
                  key={node.id}
                  transform={`translate(${(node.x + dx).toFixed(1)}, ${(node.y + dy).toFixed(1)})`}
                  style={{
                    cursor: "pointer",
                    opacity: dimmed ? 0.2 : 1,
                    transition: "opacity 0.18s ease",
                  }}
                  onMouseEnter={() => setHoveredId(node.id)}
                  onFocus={() => setHoveredId(node.id)}
                  onClick={() => router.push(node.href)}
                  tabIndex={0}
                  role="link"
                  aria-label={`${node.label} — ${node.sub}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      router.push(node.href);
                    }
                  }}
                >
                  {isHovered && (
                    <circle
                      r={node.r + 7}
                      fill="none"
                      stroke="#6ee7b7"
                      strokeWidth="1"
                      strokeOpacity="0.5"
                    />
                  )}
                  <circle
                    r={isHovered ? node.r + 2 : node.r}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={isHovered || isNeighbor ? 1.8 : 1.15}
                  />
                  <circle
                    r={3.2}
                    fill={node.kind === "page" ? "#6ee7b7" : node.kind === "project" ? "#ffffff" : "#fbbf24"}
                  />
                  <text
                    y={node.r + 14}
                    textAnchor="middle"
                    fill={isHovered || isNeighbor ? "#ffffff" : "#cfcfcf"}
                    fontSize="11.5"
                    fontWeight="600"
                    fontFamily="var(--font-space-grotesk), sans-serif"
                  >
                    {node.label}
                  </text>
                  <text
                    y={node.r + 26}
                    textAnchor="middle"
                    fill="#7e7e7e"
                    fontSize="9.2"
                    fontFamily="var(--font-mono), monospace"
                  >
                    {node.sub}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Bottom Inspector Bar inside Graph */}
          <div
            style={{
              borderTop: "1px solid #222",
              background: "#141414",
              padding: "0.9rem 1.25rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {activeNode ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <span className="grid-card-pill grid-card-pill-live">{activeNode.kind.toUpperCase()}</span>
                  <strong style={{ fontSize: "1rem", color: "#fff" }}>{activeNode.label}</strong>
                  <span style={{ fontSize: "0.86rem", color: "#9a9a9a" }}>{activeNode.sub}</span>
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {activeNode.secondaryHref && (
                    <TransitionLink href={activeNode.secondaryHref} className="grid-card-pill">
                      {activeNode.secondaryLabel} →
                    </TransitionLink>
                  )}
                  <TransitionLink href={activeNode.href} className="grid-card-pill grid-card-pill-live">
                    Open Node <ArrowUpRight size={12} style={{ display: "inline" }} />
                  </TransitionLink>
                </div>
              </>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#8a8a8a", fontSize: "0.86rem" }}>
                <Sparkles size={15} color="#6ee7b7" />
                <span>
                  Click any node to navigate directly — project nodes open straight into their Work Architecture Dossier.
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Accessible Quick Directory Cards (also ideal on narrow phones) */}
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Direct Node Directory</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            gap: "0.9rem",
          }}
        >
          {NODES.filter((n) => filterKind === "all" || n.kind === filterKind).map((n) => (
            <motion.div
              key={n.id}
              whileHover={{ y: -2 }}
              onMouseEnter={() => setHoveredId(n.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: "#141414",
                border: hoveredId === n.id ? "1px solid #6ee7b7" : "1px solid #262626",
                borderRadius: "12px",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: n.kind === "page" ? "#6ee7b7" : "#888" }}>
                    {n.kind.toUpperCase()}
                  </span>
                  <ArrowUpRight size={14} color="#888" />
                </div>
                <TransitionLink href={n.href} style={{ fontWeight: 600, fontSize: "1rem", color: "#fff", display: "block" }}>
                  {n.label}
                </TransitionLink>
                <div style={{ fontSize: "0.8rem", color: "#8e8e8e", marginTop: "3px" }}>{n.sub}</div>
              </div>

              {n.secondaryHref && (
                <TransitionLink href={n.secondaryHref} style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#6ee7b7" }}>
                  {n.secondaryLabel} →
                </TransitionLink>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
