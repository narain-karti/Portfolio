import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Journal",
  description:
    "Build logs, git commit histories, debugging stories, and architectural breakdowns behind Narain Karti's engineering projects.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
