"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GitCommit, Clock } from "lucide-react";
import TransitionLink from "../../components/TransitionLink";
import { BLOG_POSTS } from "../../data/blogs";

export default function BlogIndexPage() {
  const [filter, setFilter] = useState("ALL");
  const categories = ["ALL", ...Array.from(new Set(BLOG_POSTS.map((b) => b.category)))];

  const posts = filter === "ALL" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === filter);

  return (
    <>
      <div className="subpage-shell">
        <div className="subpage-container">
          <nav className="breadcrumb-nav">
            <div className="breadcrumb-trail">
              <TransitionLink href="/">Home</TransitionLink>
              <span>/</span>
              <span className="breadcrumb-current">Engineering Blogs</span>
            </div>
            <TransitionLink href="/work" className="grid-card-pill">
              Explore System Dossiers →
            </TransitionLink>
          </nav>

          <div style={{ marginBottom: "3rem" }}>
            <h1 className="hero-manifesto">
              How each project came together — commit logs, dead ends, and what actually fixed them.
            </h1>
            <p className="hero-subcopy">
              Written straight from git commit history and post-mortems: how DATADOC reached 0.42s on 1M rows, how MECH-G stays accurate completely offline, and why DECEPTRIX needed Bayes fusion.
            </p>
          </div>

          {/* Filters */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2.5rem" }}>
            {categories.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.76rem",
                    padding: "7px 14px",
                    borderRadius: "999px",
                    border: active ? "1px solid #fff" : "1px solid #2b2b2b",
                    backgroundColor: active ? "#fff" : "#141414",
                    color: active ? "#000" : "#b3b3b3",
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Blog Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "1.5rem" }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  background: "#131313",
                  border: "1px solid #262626",
                  borderRadius: "14px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.25s ease, border-color 0.25s ease",
                }}
              >
                <div style={{ position: "relative", height: "185px", width: "100%", background: "#0e0e0e" }}>
                  <Image src={post.coverImage} alt={post.projectTitle} fill style={{ objectFit: "cover" }} />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.88) 100%)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      padding: "4px 10px",
                      borderRadius: "999px",
                      background: "rgba(0,0,0,0.75)",
                      border: "1px solid rgba(255,255,255,0.16)",
                      color: "#e5e5e5",
                    }}
                  >
                    {post.projectTitle}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "14px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "#6ee7b7",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <GitCommit size={13} /> {post.commitCount}
                  </span>
                </div>

                <div style={{ padding: "1.35rem", display: "flex", flexDirection: "column", flex: 1, gap: "0.8rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#888", fontFamily: "var(--font-mono)" }}>
                    <span>{post.dateRange}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: "1.25rem", lineHeight: 1.3, color: "#fff" }}>{post.title}</h2>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.66)", lineHeight: 1.55, flex: 1 }}>
                    {post.summary}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {post.tags.map((t) => (
                      <span key={t} className="mini-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.86rem", fontWeight: 600, color: "#fff", paddingTop: "6px" }}>
                    Read Commit Journey <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
