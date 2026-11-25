import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Get in touch with Narain Karti for AI research, systems engineering roles, open-source work, or early-stage startup collaborations.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
