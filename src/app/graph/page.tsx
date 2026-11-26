"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass } from "lucide-react";
import Link from "next/link";
import { WordReveal, RevealBlock } from "../../components/MotionPrimitives";
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
  { id: "tab-home", label: "Home", sub: "Portal", kind: "page", x: 560, y: 82, r: 22, href: "/" },
  { id: "tab-work", label: "Work", sub: "10 Systems", kind: "page", x: 350, y: 158, r: 26, href: "/work" },
  { id: "tab-blog", label: "Journal", sub: "Build Logs", kind: "page", x: 770, y: 158, r: 25, href: "/blog" },
  { id: "tab-builder", label: "Impact", sub: "Roles & Awards", kind: "page", x: 210, y: 340, r: 24, href: "/builder" },
  { id: "tab-about", label: "About", sub: "IITM × NIAT", kind: "page", x: 915, y: 335, r: 24, href: "/about" },
  { id: "tab-lab", label: "Research", sub: "Lab & Diagrams", kind: "page", x: 750, y: 548, r: 21, href: "/website" },
  { id: "tab-downloads", label: "Resources", sub: "Resume & CLI", kind: "page", x: 375, y: 548, r: 21, href: "/downloads" },
  { id: "tab-contact", label: "Connect", sub: "Contact", kind: "page", x: 560, y: 572, r: 21, href: "/contact" },

  { id: "dom-edge", label: "Edge AI & Vision", sub: "Jetson · YOLO", kind: "domain", x: 385, y: 292, r: 20, href: "/work" },
  { id: "dom-agents", label: "Multi-Agent", sub: "Debate · RAG", kind: "domain", x: 735, y: 292, r: 20, href: "/builder" },
  { id: "dom-data", label: "Polars & Data", sub: "Arrow · Pipelines", kind: "domain", x: 560, y: 238, r: 20, href: "/work?project=datadoc" },
  { id: "dom-cloud", label: "AWS & Apps", sub: "Lambda · Flutter", kind: "domain", x: 560, y: 422, r: 20, href: "/builder" },

  { id: "datadoc", label: "DATADOC", sub: "PyPI · 0.42s", kind: "project", x: 560, y: 152, r: 20, href: "/work?project=datadoc", secondaryHref: "/blog/datadoc-from-script-to-pypi", secondaryLabel: "Read log" },
  { id: "mech-g", label: "MECH-G", sub: "Offline Gemma 4", kind: "project", x: 878, y: 238, r: 19, href: "/work?project=mech-g", secondaryHref: "/blog/mech-g-offline-industrial-gemma", secondaryLabel: "Read log" },
  { id: "project-melv", label: "Project-MELV", sub: "14ms ANPR", kind: "project", x: 245, y: 228, r: 19, href: "/work?project=project-melv", secondaryHref: "/blog/project-melv-city-digital-twin", secondaryLabel: "Read log" },
  { id: "otomo", label: "OTOMO", sub: "Memory CRM", kind: "project", x: 642, y: 312, r: 18, href: "/work?project=otomo" },
  { id: "elio", label: "ELIO", sub: "Privacy Agent", kind: "project", x: 472, y: 312, r: 18, href: "/work?project=elio" },
  { id: "quorum", label: "Quorum", sub: "TakeOver'26 #1", kind: "project", x: 878, y: 432, r: 20, href: "/work?project=quorum", secondaryHref: "/blog/quorum-adversarial-boardroom", secondaryLabel: "Read log" },
  { id: "project-k", label: "Project K", sub: "Marinotex #1 · ₹3L", kind: "project", x: 156, y: 446, r: 21, href: "/work?project=project-k", secondaryHref: "/blog/project-k-openai-buildathon-journey", secondaryLabel: "Read log" },
  { id: "deceptrix", label: "DECEPTRIX", sub: "7-Signal Audit", kind: "project", x: 332, y: 442, r: 19, href: "/work?project=deceptrix", secondaryHref: "/blog/deceptrix-fixing-050-baseline-to-7-signal-fusion", secondaryLabel: "Read log" },
  { id: "axoweb", label: "AxoWeb", sub: "20+ Clients", kind: "project", x: 486, y: 492, r: 20, href: "/work?project=axoweb", secondaryHref: "/blog/axoweb-zero-to-7l-and-aws-microservices", secondaryLabel: "Read log" },
  { id: "beyond-earth", label: "BEYOND EARTH", sub: "NASA Zonal", kind: "project", x: 960, y: 500, r: 18, href: "/work?project=beyond-earth" },
  { id: "eduvia", label: "Eduvia", sub: "Student Cohorts", kind: "domain", x: 750, y: 422, r: 18, href: "/builder" },
];

const EDGES: [string, string][] = [
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
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb-current">Knowledge Graph</span>
          </div>
          <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
            <Link href="/work" className="subtle-link">
              All Projects →
            </Link>
            <Link href="/blog" className="subtle-link">
              {BLOG_POSTS.length} Essays →
            </Link>
          </div>
        </nav>

        <header style={{ marginBottom: "1.75rem" }}>
          <WordReveal as="h1" className="page-title" stagger={0.025}>
            Portfolio Knowledge Graph
          </WordReveal>
          <WordReveal as="p" className="hero-subcopy" delay={0.1} stagger={0.015}>
            Hover any node to see how projects, domains, and pages connect. Click a node to open it directly.
          </WordReveal>
        </header>

        {/* Filter strip */}
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
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
            {[
              { id: "all", label: `All (${NODES.length})` },
              { id: "project", label: `Projects (${NODES.filter((n) => n.kind === "project").length})` },
              { id: "page", label: `Pages (${NODES.filter((n) => n.kind === "page").length})` },
              { id: "domain", label: `Domains (${NODES.filter((n) => n.kind === "domain").length})` },
            ].map((f) => {
              const active = filterKind === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilterKind(f.id as "all" | NodeKind)}
                  className={`filter-tab ${active ? "filter-tab-active" : ""}`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="meta-label" style={{ color: activeNode ? "#6ee7b7" : "#8e8e93", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <Compass size={14} />
            {activeNode ? `${activeNode.label} → ${activeNode.href}` : "Hover a node to trace links"}
          </div>
        </div>

        {/* Graph Stage */}
        <RevealBlock
          inView={false}
          delay={0.1}
          style={{
            position: "relative",
            background: "#111112",
            border: "1px solid #242427",
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "2.25rem",
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
            aria-label="Interactive Knowledge Graph connecting portfolio pages and projects"
          >
            <defs>
              <radialGradient id="kgCursorGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(110, 231, 183, 0.14)" />
                <stop offset="100%" stopColor="rgba(110, 231, 183, 0)" />
              </radialGradient>
            </defs>

            {cursorSvg && (
              <circle cx={cursorSvg.x} cy={cursorSvg.y} r="150" fill="url(#kgCursorGlow)" pointerEvents="none" />
            )}

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
                  stroke={connectedToHover ? "#6ee7b7" : "#2c2c30"}
                  strokeWidth={connectedToHover ? 1.8 : 1}
                  strokeOpacity={dimmed ? 0.16 : connectedToHover ? 0.95 : 0.72}
                />
              );
            })}

            {NODES.map((node) => {
              const isHovered = hoveredId === node.id;
              const isNeighbor = hoveredId ? adjacency.get(hoveredId)?.has(node.id) ?? false : false;
              const matchesFilter = filterKind === "all" || node.kind === filterKind;
              const dimmed = hoveredId ? !isHovered && !isNeighbor : !matchesFilter;

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
                node.kind === "page" ? "#16201c" : node.kind === "project" ? "#161618" : "#1c1a16";
              const stroke = isHovered
                ? "#ffffff"
                : isNeighbor
                ? "#6ee7b7"
                : node.kind === "page"
                ? "#4a5d54"
                : node.kind === "domain"
                ? "#595243"
                : "#38383d";

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
                    fill="#7e7e86"
                    fontSize="9.2"
                    fontFamily="var(--font-mono), monospace"
                  >
                    {node.sub}
                  </text>
                </g>
              );
            })}
          </svg>

          <div
            style={{
              borderTop: "1px solid #202024",
              background: "#131314",
              padding: "0.85rem 1.25rem",
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
                  <span className="meta-label meta-label-accent">{activeNode.kind.toUpperCase()}</span>
                  <strong style={{ fontSize: "1rem", color: "#fff" }}>{activeNode.label}</strong>
                  <span style={{ fontSize: "0.86rem", color: "#8e8e93" }}>{activeNode.sub}</span>
                </div>
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  {activeNode.secondaryHref && (
                    <Link href={activeNode.secondaryHref} className="subtle-link">
                      {activeNode.secondaryLabel} →
                    </Link>
                  )}
                  <Link href={activeNode.href} className="subtle-link" style={{ color: "#6ee7b7" }}>
                    Open <ArrowUpRight size={12} style={{ display: "inline" }} />
                  </Link>
                </div>
              </>
            ) : (
              <span className="meta-label">
                Click any node to jump directly to its page or architecture dossier.
              </span>
            )}
          </div>
        </RevealBlock>

        {/* Directory */}
        <h2 className="section-heading" style={{ marginBottom: "1rem" }}>Directory</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
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
                background: "#131314",
                border: hoveredId === n.id ? "1px solid #6ee7b7" : "1px solid #242427",
                borderRadius: "12px",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span className={`meta-label ${n.kind === "page" ? "meta-label-accent" : ""}`}>
                    {n.kind}
                  </span>
                  <ArrowUpRight size={14} color="#888" />
                </div>
                <Link href={n.href} style={{ fontWeight: 600, fontSize: "1rem", color: "#fff", display: "block" }}>
                  {n.label}
                </Link>
                <div style={{ fontSize: "0.82rem", color: "#8e8e93", marginTop: "2px" }}>{n.sub}</div>
              </div>

              {n.secondaryHref && (
                <Link href={n.secondaryHref} className="subtle-link" style={{ color: "#6ee7b7" }}>
                  {n.secondaryLabel} →
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
