"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { WordReveal, RevealBlock } from "../../components/MotionPrimitives";
import { BLOG_POSTS } from "../../data/blogs";

export default function BlogIndexPage() {
  const [filter, setFilter] = useState("ALL");
  const categories = ["ALL", ...Array.from(new Set(BLOG_POSTS.map((b) => b.category)))];

  const posts = filter === "ALL" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === filter);

  return (
    <div className="subpage-shell">
      <div className="subpage-container">
        <nav className="breadcrumb-nav">
          <div className="breadcrumb-trail">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb-current">Engineering Journal</span>
          </div>
          <Link href="/work" className="subtle-link">
            Selected Work →
          </Link>
        </nav>

        <header style={{ marginBottom: "2.25rem" }}>
          <WordReveal as="h1" className="page-title" stagger={0.025}>
            Build logs and engineering notes.
          </WordReveal>
          <WordReveal as="p" className="hero-subcopy" delay={0.1} stagger={0.015}>
            Stories from git commit histories and debugging sessions — what broke first, what changed, and why the final design looks the way it does.
          </WordReveal>
        </header>

        {/* Underline Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", marginBottom: "2.25rem", borderBottom: "1px solid #1e1e22", paddingBottom: "8px" }}>
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`filter-tab ${active ? "filter-tab-active" : ""}`}
              >
                {cat === "ALL" ? "All" : cat}
              </button>
            );
          })}
        </div>

        {/* Blog Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.4rem" }}>
          {posts.map((post, idx) => (
            <RevealBlock key={post.slug} delay={(idx % 3) * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="project-card"
                style={{
                  background: "#131314",
                  border: "1px solid #242427",
                  borderRadius: "14px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ position: "relative", height: "180px", width: "100%", background: "#0e0e10" }}>
                  <Image src={post.coverImage} alt={post.projectTitle} fill style={{ objectFit: "cover" }} />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(10,10,10,0.08) 0%, rgba(19,19,20,0.9) 100%)",
                    }}
                  />
                  <span
                    className="meta-label meta-label-accent"
                    style={{ position: "absolute", bottom: "12px", left: "16px" }}
                  >
                    {post.projectTitle} · {post.commitCount}
                  </span>
                </div>

                <div style={{ padding: "1.3rem", display: "flex", flexDirection: "column", flex: 1, gap: "0.75rem" }}>
                  <div className="meta-label" style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>{post.dateRange}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: "1.24rem", lineHeight: 1.3, color: "#fff" }}>{post.title}</h2>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.56, flex: 1 }}>
                    {post.summary.replace(/`/g, "")}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.86rem", fontWeight: 500, color: "#fff", paddingTop: "6px" }}>
                    Read entry <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </RevealBlock>
          ))}
        </div>
      </div>
    </div>
  );
}
