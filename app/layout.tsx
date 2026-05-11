import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'Lutervyn | OS & Ecosystem Portal',
  description: 'Lutervyn is an advanced operating system interface with a complete ecosystem. Explore research, development, and interactive OS experience.',
  keywords: ['Lutervyn', 'OS', 'operating system', 'ecosystem', 'research', 'interface', 'interactive'],
  authors: [{ name: 'Lutervyn' }],
  metadataBase: new URL('https://lutervyn.github.io/Lutervyn/'),
  openGraph: {
    title: 'Lutervyn | OS & Ecosystem Portal',
    description: 'Lutervyn is an advanced operating system interface with a complete ecosystem. Explore research, development, and interactive OS experience.',
    url: 'https://lutervyn.github.io/Lutervyn/',
    siteName: 'Lutervyn',
    images: [
      {
        url: 'https://lutervyn.github.io/Lutervyn/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lutervyn OS Interface',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lutervyn | OS & Ecosystem Portal',
    description: 'Advanced operating system interface and ecosystem',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lutervyn',
    url: 'https://lutervyn.github.io/Lutervyn/',
    description: 'Lutervyn is an advanced operating system interface with a complete ecosystem for research and development',
    sameAs: [
      'https://github.com/Lutervyn',
    ],
    logo: 'https://lutervyn.github.io/Lutervyn/logo.png',
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>{children} <Analytics /></body>
    </html>
  )
}
