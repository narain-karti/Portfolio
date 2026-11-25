"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { WordReveal, RevealBlock } from "../../components/MotionPrimitives";
import { NARAIN_PROFILE } from "../../data/portfolio-data";

const COLLABORATION_AREAS = [
  "AI & ML Research",
  "Systems Engineering",
  "Open Source",
  "Early-Stage Startups",
];

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 1800);
  };

  const socials = [
    { label: "GitHub", sub: "@narain-karti", href: NARAIN_PROFILE.github },
    { label: "LinkedIn", sub: "/in/narainkarti", href: NARAIN_PROFILE.linkedin },
    { label: "PyPI", sub: "datadoc-cli", href: NARAIN_PROFILE.pypi },
    { label: "AxoWeb", sub: "axoweb.in", href: NARAIN_PROFILE.axowebUrl },
    { label: "Eduvia", sub: "Student cohorts", href: NARAIN_PROFILE.eduviaUrl },
  ];

  return (
    <div className="contact-viewport-shell">
      <div className="contact-viewport-inner">
        <nav className="breadcrumb-nav">
          <div className="breadcrumb-trail">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb-current">Connect</span>
          </div>
          <span className="meta-label meta-label-accent">{NARAIN_PROFILE.location} · IST</span>
        </nav>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "clamp(1.25rem, 3vw, 3rem)",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(0.85rem, 2vh, 1.35rem)" }}>
            <div>
              <WordReveal as="h1" className="page-title" style={{ marginBottom: "0.65rem" }} stagger={0.025}>
                Let&apos;s build something.
              </WordReveal>
              <WordReveal
                as="p"
                delay={0.1}
                stagger={0.015}
                style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.55, maxWidth: "46ch", fontSize: "0.96rem" }}
              >
                If you&apos;re working on an interesting engineering problem, a research idea, or an early product, I&apos;d love to talk.
              </WordReveal>
            </div>

            <RevealBlock inView={false} delay={0.14} style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px" }}>
              {COLLABORATION_AREAS.map((area) => (
                <span key={area} className="meta-label" style={{ color: "rgba(255,255,255,0.72)" }}>
                  · {area}
                </span>
              ))}
            </RevealBlock>

            <RevealBlock inView={false} delay={0.18} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "440px" }}>
              {[NARAIN_PROFILE.email, NARAIN_PROFILE.secondaryEmail].map((email) => (
                <div
                  key={email}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    background: "#131314",
                    border: "1px solid #242427",
                    borderRadius: "10px",
                    padding: "10px 14px",
                  }}
                >
                  <a href={`mailto:${email}`} style={{ fontSize: "0.94rem", fontWeight: 500, color: "#fff" }}>
                    {email}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(email)}
                    className="subtle-link"
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {copiedEmail === email ? <Check size={13} color="#6ee7b7" /> : <Copy size={13} />}
                    {copiedEmail === email ? "Copied" : "Copy"}
                  </button>
                </div>
              ))}
            </RevealBlock>

            <RevealBlock inView={false} delay={0.22} style={{ display: "flex", flexWrap: "wrap", gap: "18px", color: "#8e8e93", fontSize: "0.86rem" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <MapPin size={14} /> {NARAIN_PROFILE.location}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Phone size={14} /> {NARAIN_PROFILE.phone}
              </span>
            </RevealBlock>
          </div>

          <RevealBlock
            inView={false}
            delay={0.2}
            style={{ display: "flex", flexDirection: "column", gap: "clamp(6px, 1.1vh, 10px)" }}
          >
            <span className="meta-label" style={{ marginBottom: "2px" }}>
              ELSEWHERE
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
                  background: "#131314",
                  border: "1px solid #242427",
                  borderRadius: "12px",
                  padding: "clamp(10px, 1.4vh, 14px) 16px",
                  transition: "transform 0.18s ease, border-color 0.18s ease",
                }}
              >
                <div>
                  <div style={{ fontSize: "1.08rem", fontWeight: 600 }}>{s.label}</div>
                  <div className="meta-label">{s.sub}</div>
                </div>
                <ArrowUpRight size={17} color="#9a9aa2" />
              </a>
            ))}
          </RevealBlock>
        </div>

        <div style={{ height: "4px" }} />
      </div>
    </div>
  );
}
