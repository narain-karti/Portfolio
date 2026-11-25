import type { Metadata, Viewport } from "next";
import "./globals.css";
import PortfolioDock from "../components/PortfolioDock";
import PageTransition from "../components/PageTransition";
import SoundFXController from "../components/SoundFXController";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Narain Karti — AI Systems, Data Science & Engineering",
    template: "%s — Narain Karti",
  },
  description:
    "Portfolio of Narain Karti — AI systems engineer studying Data Science at IIT Madras and AI/ML at NIAT. Creator of DATADOC (PyPI), MECH-G, Project-MELV, Quorum, and founder of AxoWeb.",
  keywords: [
    "Narain Karti",
    "AI Systems Engineer",
    "IIT Madras Data Science",
    "NIAT AI ML",
    "DATADOC CLI",
    "MECH-G",
    "Project-MELV",
    "Quorum",
    "AxoWeb Technologies",
    "Machine Learning Portfolio",
  ],
  authors: [{ name: "Narain Karti", url: "https://github.com/narain-karti" }],
  creator: "Narain Karti",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Narain Karti — AI Systems & Engineering",
    description:
      "AI systems engineer studying at IIT Madras & NIAT. Explore DATADOC (PyPI), MECH-G, Project-MELV, Quorum, AxoWeb, and engineering build logs.",
    siteName: "Narain Karti",
    locale: "en_US",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Narain Karti — AI Systems & Engineering",
    description:
      "AI systems, edge vision, data engines, and software built from scratch. Explore projects, research notes, and build logs.",
  },
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Narain Karti",
  url: SITE_URL,
  jobTitle: "AI Systems Engineer & Founder",
  description:
    "AI systems engineer studying Data Science at IIT Madras and AI/ML at NIAT. Founder of AxoWeb Technologies and creator of DATADOC, MECH-G, Project-MELV, and Quorum.",
  affiliation: [
    { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Madras" },
    { "@type": "CollegeOrUniversity", name: "NxtWave Institute of Advanced Technologies" },
    { "@type": "Organization", name: "AxoWeb Technologies", url: "https://axoweb.in" },
  ],
  sameAs: [
    "https://github.com/narain-karti",
    "https://www.linkedin.com/in/narainkarti/",
    "https://pypi.org/project/datadoc-cli/",
    "https://axoweb.in",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
      </head>
      <body>
        <SoundFXController />
        <PageTransition>{children}</PageTransition>
        <div className="bottom-blur-scrim" aria-hidden="true" />
        <PortfolioDock />
      </body>
    </html>
  );
}
