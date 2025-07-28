import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/layout/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TravelAI - AI-Powered Vacation Planning | Gemini-Powered Travel Itineraries",
  description:
    "Plan your perfect vacation with AI-powered itinerary generation using Google Gemini. Discover personalized travel experiences, optimize your budget, and create unforgettable memories with smart travel planning.",
  keywords:
    "travel planning, AI travel, vacation planner, itinerary generator, travel AI, trip planning, Google Gemini, smart travel, budget optimization",
  authors: [{ name: "TravelAI Team" }],
  openGraph: {
    title: "TravelAI - AI-Powered Vacation Planning",
    description: "Plan your perfect vacation with AI-powered itinerary generation using Google Gemini",
    type: "website",
    locale: "en_US",
    siteName: "TravelAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelAI - AI-Powered Vacation Planning",
    description: "Plan your perfect vacation with AI-powered itinerary generation using Google Gemini",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
