"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check, MapPin, Phone } from "lucide-react";
import TransitionLink from "../../components/TransitionLink";
import { NARAIN_PROFILE } from "../../data/portfolio-data";

const COLLABORATION_TRACKS = [
  { label: "AI & ML Research", note: "Applied ML research, AI infrastructure experiments & reproducible implementations" },
  { label: "Engineering Roles", note: "AI Systems, ML Engineering, Backend & Developer Tooling internships or builds" },
  { label: "Open Source", note: "Developer utilities, benchmarks, Python/Rust data pipelines & agent tooling" },
  { label: "Deep-Tech Startups", note: "Zero-to-one product engineering, founding teams & technical architecture" },
];

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 1800);
  };

  const socials = [
    { label: "GitHub", sub: "@narain-karti · Open Source", href: NARAIN_PROFILE.github },
    { label: "LinkedIn", sub: "/in/narainkarti", href: NARAIN_PROFILE.linkedin },
    { label: "PyPI", sub: "datadoc-cli Package", href: NARAIN_PROFILE.pypi },
    { label: "AxoWeb Systems", sub: "axoweb.in · Venture Studio", href: NARAIN_PROFILE.axowebUrl },
    { label: "Eduvia", sub: "Student Cohorts & Mentorship", href: NARAIN_PROFILE.eduviaUrl },
  ];

  return (
    <div className="subpage-shell" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div className="subpage-container" style={{ width: "100%" }}>
        <nav className="breadcrumb-nav">
          <div className="breadcrumb-trail">
            <TransitionLink href="/">Home</TransitionLink>
            <span>/</span>
            <span className="breadcrumb-current">Let&apos;s Connect</span>
          </div>
          <span className="grid-card-pill grid-card-pill-live">{NARAIN_PROFILE.availability}</span>
        </nav>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
            marginTop: "1.5rem",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "clamp(2rem, 4.4vw, 3.4rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                marginBottom: "1rem",
              }}
            >
              Have an interesting problem? Let&apos;s build something.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: "1.75rem", maxWidth: "54ch" }}>
              I&apos;m actively interested in collaborating on meaningful AI infrastructure, research experiments, developer tools, and early-stage product engineering.
            </p>

            {/* Open collaboration tracks */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "0.75rem", marginBottom: "2rem" }}>
              {COLLABORATION_TRACKS.map((t) => (
                <div
                  key={t.label}
                  style={{
                    background: "#131315",
                    border: "1px solid #26262a",
                    borderRadius: "10px",
                    padding: "0.9rem 1rem",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#6ee7b7", marginBottom: "4px" }}>
                    {t.label}
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.64)", lineHeight: 1.4 }}>{t.note}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "1.75rem" }}>
              {[NARAIN_PROFILE.email, NARAIN_PROFILE.secondaryEmail].map((email) => (
                <div
                  key={email}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "10px",
                    background: "#141414",
                    border: "1px solid #282828",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    maxWidth: "460px",
                  }}
                >
                  <a href={`mailto:${email}`} style={{ fontSize: "0.98rem", fontWeight: 500, color: "#fff" }}>
                    {email}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(email)}
                    className="grid-card-pill"
                    style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "5px" }}
                  >
                    {copiedEmail === email ? <Check size={12} color="#6ee7b7" /> : <Copy size={12} />}
                    {copiedEmail === email ? "Copied" : "Copy"}
                  </button>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", color: "#9a9a9a", fontSize: "0.88rem" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <MapPin size={15} /> {NARAIN_PROFILE.location} (IST UTC+05:30)
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Phone size={15} /> {NARAIN_PROFILE.phone}
              </span>
            </div>
          </div>

          <aside style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#888", marginBottom: "4px" }}>
              PROFILES, PACKAGES &amp; VENTURES
            </span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#141414",
                  border: "1px solid #262626",
                  borderRadius: "12px",
                  padding: "14px 18px",
                  transition: "transform 0.2s ease, border-color 0.2s ease",
                }}
              >
                <div>
                  <div style={{ fontSize: "1.18rem", fontWeight: 600 }}>{s.label}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#888" }}>{s.sub}</div>
                </div>
                <ArrowUpRight size={19} color="#fff" />
              </a>
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
}
