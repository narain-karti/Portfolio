import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, GitCommit } from "lucide-react";
import { WordReveal, RevealBlock } from "../../../components/MotionPrimitives";
import ProjectHairlineCard from "../../../components/ProjectHairlineCard";
import { BLOG_POSTS } from "../../../data/blogs";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  const cleanSummary = post.summary.replace(/`/g, "");
  return {
    title: post.title,
    description: cleanSummary,
    openGraph: {
      title: `${post.title} — Narain Karti`,
      description: cleanSummary,
      type: "article",
      images: [{ url: post.coverImage, width: 1200, height: 675, alt: post.projectTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: cleanSummary,
      images: [post.coverImage],
    },
  };
}

function cleanInlineCode(text: string): string {
  return text.replace(/`/g, "");
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIdx = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const nextPost = BLOG_POSTS[(currentIdx + 1) % BLOG_POSTS.length];

  return (
    <div className="subpage-shell">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <nav className="breadcrumb-nav" style={{ marginBottom: "2.25rem" }}>
          <Link
            href="/blog"
            className="subtle-link"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            <ArrowLeft size={15} /> All build logs
          </Link>
          <a
            href={post.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="subtle-link"
            style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
          >
            GitHub <ArrowUpRight size={13} />
          </a>
        </nav>

        <header style={{ marginBottom: "2rem" }}>
          <div className="meta-label meta-label-accent" style={{ marginBottom: "0.75rem" }}>
            {post.projectTitle} · {post.commitCount} · {post.readTime}
          </div>

          <WordReveal as="h1" className="page-title" stagger={0.024}>
            {post.title}
          </WordReveal>
          <WordReveal as="p" delay={0.1} stagger={0.012} style={{ fontSize: "1.04rem", lineHeight: 1.6, color: "rgba(255,255,255,0.72)" }}>
            {cleanInlineCode(post.summary)}
          </WordReveal>
        </header>

        <RevealBlock
          inView={false}
          delay={0.12}
          style={{
            position: "relative",
            width: "100%",
            height: "320px",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid #242427",
            marginBottom: "2.75rem",
          }}
        >
          <Image src={post.coverImage} alt={post.projectTitle} fill style={{ objectFit: "cover" }} priority />
        </RevealBlock>

        <RevealBlock delay={0.14}>
          <ProjectHairlineCard
            projectKey={post.slug}
            label={`${post.projectTitle} · INTERACTIVE ARCHITECTURE`}
          />
        </RevealBlock>

        {/* Narrative Sections */}
        <article style={{ display: "flex", flexDirection: "column", gap: "2.4rem", marginBottom: "3.25rem" }}>
          {post.sections.map((section) => (
            <RevealBlock key={section.heading}>
              <section>
                <h2 className="section-heading" style={{ marginBottom: "0.9rem" }}>{section.heading}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.95rem" }}>
                  {section.body.map((para, i) => (
                    <p key={i} style={{ fontSize: "1rem", lineHeight: 1.74, color: "rgba(255,255,255,0.82)" }}>
                      {cleanInlineCode(para)}
                    </p>
                  ))}
                </div>
                {section.codeSnippet && (
                  <pre
                    style={{
                      marginTop: "1.15rem",
                      background: "#121214",
                      border: "1px solid #26262a",
                      borderRadius: "10px",
                      padding: "1.1rem",
                      overflowX: "auto",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      color: "#d4d4d8",
                    }}
                  >
                    <code>{section.codeSnippet}</code>
                  </pre>
                )}
              </section>
            </RevealBlock>
          ))}
        </article>

        {/* Commit History Rail */}
        <RevealBlock
          style={{
            background: "#131314",
            border: "1px solid #242427",
            borderRadius: "14px",
            padding: "1.6rem",
            marginBottom: "2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.15rem" }}>
            <GitCommit size={17} color="#6ee7b7" />
            <h3 style={{ fontSize: "1.18rem" }}>Commit History</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.95rem", borderLeft: "1px solid #2a2a2e", paddingLeft: "1.2rem" }}>
            {post.timeline.map((m) => (
              <div key={`${m.date}-${m.title}`}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                  <span className="meta-label meta-label-accent">{m.date}</span>
                  {m.sha && <span className="meta-label">{m.sha}</span>}
                  <strong style={{ fontSize: "0.95rem", color: "#fff" }}>{m.title}</strong>
                </div>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.5 }}>{cleanInlineCode(m.detail)}</p>
              </div>
            ))}
          </div>
        </RevealBlock>

        {/* Lessons */}
        <RevealBlock
          style={{
            background: "rgba(16, 185, 129, 0.05)",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            borderRadius: "14px",
            padding: "1.4rem",
            marginBottom: "2.5rem",
          }}
        >
          <h3 className="meta-label meta-label-accent" style={{ marginBottom: "0.75rem" }}>
            KEY LESSONS
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
            {post.lessons.map((lesson) => (
              <li key={lesson} style={{ color: "#e5e5e5", fontSize: "0.94rem", lineHeight: 1.55 }}>
                → {cleanInlineCode(lesson)}
              </li>
            ))}
          </ul>
        </RevealBlock>

        {/* Next Essay */}
        <Link
          href={`/blog/${nextPost.slug}`}
          style={{
            display: "block",
            background: "#131314",
            border: "1px solid #242427",
            borderRadius: "12px",
            padding: "1.3rem",
          }}
        >
          <div className="meta-label" style={{ marginBottom: "5px" }}>
            NEXT ENTRY →
          </div>
          <div style={{ fontSize: "1.14rem", fontWeight: 600, color: "#fff" }}>{nextPost.title}</div>
        </Link>
      </div>
    </div>
  );
}
