import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Narain Karti — studying Data Science at IIT Madras and AI/ML at NIAT, building AxoWeb, and mentoring student builders.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
