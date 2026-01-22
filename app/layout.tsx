import React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

/* ------------------ SEO METADATA ------------------ */

export const metadata: Metadata = {
  metadataBase: new URL("https://safarjunction.com"), // change to your real domain
  title: {
    default: "Safar Junction | Northeast India Tourism",
    template: "%s | Safar Junction",
  },
  description:
    "Explore Northeast India as seven distinct worlds. Immersive, experience-driven travel journeys through Assam, Meghalaya, Arunachal Pradesh, and beyond.",
  applicationName: "Safar Junction",
  generator: "Anvaya Solution",
  keywords: [
    "Northeast India tourism",
    "Assam travel",
    "Meghalaya travel",
    "Arunachal Pradesh tourism",
    "Seven Sister States",
    "India offbeat travel",
    "Luxury travel Northeast India",
    "Safar Junction",
  ],
  authors: [{ name: "Safar Junction" }],
  creator: "Safar Junction",
  publisher: "Safar Junction",

  /* ----------- Icons & Favicons ----------- */
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },

  /* ----------- Open Graph (Facebook, WhatsApp, LinkedIn) ----------- */
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://safarjunction.com",
    siteName: "Safar Junction",
    title: "Safar Junction | Northeast India Tourism",
    description:
      "Seven Sister States. Seven Worlds. One Journey. Discover immersive travel experiences across Northeast India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Safar Junction – Northeast India Travel",
      },
    ],
  },

  /* ----------- Twitter / X ----------- */
  twitter: {
    card: "summary_large_image",
    title: "Safar Junction | Northeast India Tourism",
    description:
      "Experience Northeast India as seven distinct worlds. Culture, nature, and stories that redefine travel.",
    images: ["/og-image.jpg"],
    creator: "@safarjunction", // optional
  },

  /* ----------- Robots ----------- */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* ----------- Category ----------- */
  category: "travel",
}

/* ------------------ VIEWPORT ------------------ */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a", // matches dark travel aesthetic
}

/* ------------------ ROOT LAYOUT ------------------ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}