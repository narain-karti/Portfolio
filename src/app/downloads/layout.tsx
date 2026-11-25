import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Resume",
  description:
    "Download Narain Karti's PDF resume, install datadoc-cli from PyPI, and explore standalone interactive figures.",
};

export default function DownloadsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
