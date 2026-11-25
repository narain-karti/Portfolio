import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Ten AI systems, edge vision, data kernel, and backend projects built from scratch — including DATADOC (PyPI), MECH-G, Project-MELV, Quorum, and Project K.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
