import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, GitCommit } from "lucide-react";
import { BLOG_POSTS } from "../../../data/blogs";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIdx = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const nextPost = BLOG_POSTS[(currentIdx + 1) % BLOG_POSTS.length];

  return (
    <>
      <div className="subpage-shell">
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <nav className="breadcrumb-nav" style={{ marginBottom: "2.5rem" }}>
            <Link
              href="/blog"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#9a9a9a", fontSize: "0.9rem" }}
            >
              <ArrowLeft size={16} /> Back to All Project Blogs
            </Link>
            <a
              href={post.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="grid-card-pill"
              style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}
            >
              GitHub Repo <ArrowUpRight size={13} />
            </a>
          </nav>

          <header style={{ marginBottom: "2.25rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1rem" }}>
              <span className="grid-card-pill grid-card-pill-live">{post.projectTitle}</span>
              <span className="grid-card-pill">{post.commitCount}</span>
              <span className="grid-card-pill">{post.readTime}</span>
            </div>

            <h1 style={{ fontSize: "clamp(1.85rem, 4vw, 2.85rem)", lineHeight: 1.15, marginBottom: "1rem" }}>
              {post.title}
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "rgba(255,255,255,0.72)" }}>{post.summary}</p>
          </header>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "340px",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid #262626",
              marginBottom: "3rem",
            }}
          >
            <Image src={post.coverImage} alt={post.projectTitle} fill style={{ objectFit: "cover" }} priority />
          </div>

          {/* Narrative Sections */}
          <article style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "3.5rem" }}>
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 style={{ fontSize: "1.55rem", marginBottom: "1rem", color: "#fff" }}>{section.heading}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {section.body.map((para, i) => (
                    <p key={i} style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "rgba(255,255,255,0.82)" }}>
                      {para}
                    </p>
                  ))}
                </div>
                {section.codeSnippet && (
                  <pre
                    style={{
                      marginTop: "1.25rem",
                      background: "#121212",
                      border: "1px solid #2b2b2b",
                      borderRadius: "10px",
                      padding: "1.15rem",
                      overflowX: "auto",
                      fontSize: "0.86rem",
                      lineHeight: 1.6,
                      color: "#d4d4d4",
                    }}
                  >
                    <code>{section.codeSnippet}</code>
                  </pre>
                )}
              </section>
            ))}
          </article>

          {/* Verified Commit History Rail */}
          <section
            style={{
              background: "#131313",
              border: "1px solid #262626",
              borderRadius: "14px",
              padding: "1.75rem",
              marginBottom: "2.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.25rem" }}>
              <GitCommit size={18} color="#6ee7b7" />
              <h3 style={{ fontSize: "1.2rem" }}>Verified Commit History Timeline</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", borderLeft: "1px solid #2e2e2e", paddingLeft: "1.25rem" }}>
              {post.timeline.map((m) => (
                <div key={`${m.date}-${m.title}`} style={{ position: "relative" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#6ee7b7" }}>{m.date}</span>
                    {m.sha && (
                      <span className="mini-tag" style={{ fontSize: "0.7rem" }}>
                        {m.sha}
                      </span>
                    )}
                    <strong style={{ fontSize: "0.95rem", color: "#fff" }}>{m.title}</strong>
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.5 }}>{m.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Engineering Takeaways */}
          <section
            style={{
              background: "rgba(16, 185, 129, 0.06)",
              border: "1px solid rgba(16, 185, 129, 0.22)",
              borderRadius: "14px",
              padding: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            <h3 style={{ fontSize: "1rem", fontFamily: "var(--font-mono)", color: "#6ee7b7", marginBottom: "0.75rem" }}>
              ARCHITECTURAL LESSONS
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {post.lessons.map((lesson) => (
                <li key={lesson} style={{ color: "#e5e5e5", fontSize: "0.95rem", lineHeight: 1.55 }}>
                  → {lesson}
                </li>
              ))}
            </ul>
          </section>

          {/* Next Essay */}
          <Link
            href={`/blog/${nextPost.slug}`}
            style={{
              display: "block",
              background: "#141414",
              border: "1px solid #2a2a2a",
              borderRadius: "12px",
              padding: "1.35rem",
            }}
          >
            <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "#888", marginBottom: "6px" }}>
              NEXT ENGINEERING JOURNEY →
            </div>
            <div style={{ fontSize: "1.15rem", fontWeight: 600, color: "#fff" }}>{nextPost.title}</div>
          </Link>
        </div>
      </div>
    </>
  );
}
