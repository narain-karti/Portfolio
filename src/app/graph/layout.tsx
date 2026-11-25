import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Graph",
  description:
    "Interactive map connecting Narain Karti's engineering systems, research tracks, build logs, and technical stack.",
};

export default function GraphLayout({ children }: { children: React.ReactNode }) {
  return children;
}
