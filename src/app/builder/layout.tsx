import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact & Leadership",
  description:
    "Ventures, internships, campus leadership, awards, and production stack — AxoWeb Technologies, Eduvia, ACEII, Microdolphin, and OpenAI Buildathon.",
};

export default function BuilderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
