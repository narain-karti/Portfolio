import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Open Source",
  description:
    "Research tracks and open-source work in local inference, zero-copy data engines, adversarial multi-agent setups, and edge privacy.",
};

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
