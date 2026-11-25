import type { Metadata } from "next";
import "./globals.css";
import PortfolioDock from "../components/PortfolioDock";
import PageTransition from "../components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000")
  ),
  title: "Narain Karti — AI Systems, Data Science & Engineering Portfolio",
  description:
    "Portfolio of Narain Karti. IIT Madras BS (Data Science) & NIAT B.Tech (AI/ML) student, Founder of AxoWeb Technologies, Creator of Eduvia, DATADOC (PyPI), Project-MELV, Otomo, MECH-G, Elio, Quorum & Project K.",
  icons: {
    icon: [{ url: "/images/favicon.jpg" }],
    apple: { url: "/images/favicon.jpg" },
  },
  openGraph: {
    title: "Narain Karti — AI Systems, Data Science & Engineering Portfolio",
    description:
      "Building intelligent systems. Exploring what's next. AI infrastructure, edge computer vision, multi-agent systems, and developer tools.",
    type: "website",
    images: [{ url: "/images/og-preview.jpg", width: 1200, height: 630, alt: "Narain Karti Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Narain Karti — AI Systems & Engineering",
    description:
      "Concurrent IIT Madras & NIAT scholar. Founder of AxoWeb Technologies, creator of DATADOC, Project-MELV, Otomo, MECH-G, and Project K.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PageTransition>{children}</PageTransition>
        <PortfolioDock />
      </body>
    </html>
  );
}
