import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = 'https://portfolio-six-beta-n6wwb2mi5s.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Narain Karti — AI/ML Engineer, Data Science & Systems Builder',
  description: 'Personal portfolio of Narain Karti, an AI/ML and Data Science student building intelligent agents, computer vision systems, full-stack applications, open-source tools, and space-innovation projects.',
  keywords: [
    'Narain Karti',
    'AI Engineer',
    'Machine Learning',
    'Data Science',
    'Intelligent Agents',
    'Computer Vision',
    'Space Settlement',
    'DataDoc',
    'Project K',
    'Quorum',
    'IIT Madras',
    'Engineering Scrapbook'
  ],
  authors: [{ name: 'Narain Karti' }],
  creator: 'Narain Karti',
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
  openGraph: {
    title: 'Narain Karti — AI/ML Engineer, Data Science & Systems Builder',
    description: 'Personal engineering scrapbook & digital lab of Narain Karti. "I build intelligent systems for ambitious problems."',
    type: 'website',
    url: SITE_URL,
    images: [{ url: '/images/og-preview.jpg', width: 1200, height: 630, alt: 'Narain Karti — AI/ML Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narain Karti — AI/ML Engineer & Systems Builder',
    description: 'Personal engineering scrapbook & digital lab. AI/ML × Data Science × Agents × Space Innovation.',
    images: ['/images/og-preview.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Pixelify+Sans:wght@600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f8f6f0] text-[#121316] antialiased selection:bg-yellow-200 selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
