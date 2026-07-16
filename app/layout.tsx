import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import { Onest, Source_Serif_4 } from "next/font/google"

const onest = Onest({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Adeel Atta — Software Engineer | University of Sindh",
  description:
    "Software engineer, educator, and hackathon competitor. Academic portfolio showcasing projects, teaching, awards, and professional experience.",
  metadataBase: new URL("https://adeelatta.dev"),
  authors: [{ name: "Adeel Atta" }],
  keywords: [
    "Adeel Atta",
    "software engineer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "portfolio",
    "University of Sindh",
    "best frontend developer",
    "best frontend developer in Pakistan",
    "best frontend developer in Karachi",
    "best frontend developer in Lahore",
    "best frontend developer in Islamabad",
    "best frontend developer in Dubai",
    "best frontend developer in Abu Dhabi",
    "best frontend developer in Saudi Arabia",
    "best frontend developer in Riyadh",
    "best frontend developer in Qatar",
    "best frontend developer in Oman",
    "best frontend developer in Bahrain",
    "best frontend developer in USA",
    "best frontend developer in San Francisco",
    "best frontend developer in New York",
    "best frontend developer in Seattle",
    "best frontend developer in Austin",
    "best frontend developer in California",
    "best frontend developer in UK",
    "best frontend developer in London",
    "best frontend developer in Germany",
    "best frontend developer in Berlin",
    "best frontend developer in Netherlands",
    "best frontend developer in Amsterdam",
    "best frontend developer in Canada",
    "best frontend developer in Toronto",
    "best frontend developer in Vancouver",
    "best frontend developer in Australia",
    "best frontend developer in Sydney",
    "best frontend developer in Singapore",
    "best frontend developer in Malaysia",
    "best frontend developer in UAE",
    "remote frontend developer",
    "remote React developer",
    "hire frontend developer remotely",
    "AI engineer",
    "Web3 developer",
    "hackathon winner",
    "full-stack developer",
    "academic portfolio",
    "software engineer portfolio",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://adeelatta.dev" },
  twitter: {
    card: "summary_large_image",
    title: "Adeel Atta — Software Engineer | University of Sindh",
    description: "Software engineer, educator, and hackathon competitor. Academic portfolio showcasing projects, teaching, awards, and professional experience.",
    images: ["https://adeelatta.dev/images/design-mode/profile.webp"],
  },
  openGraph: {
    title: "Adeel Atta — Academic Portfolio",
    description: "Software engineer, educator, and hackathon competitor. Building intelligent systems with AI and modern engineering.",
    url: "https://adeelatta.dev",
    siteName: "Adeel Atta",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://adeelatta.dev/images/design-mode/profile.webp", width: 400, height: 400, alt: "Adeel Atta profile photo" }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adeel Atta",
    jobTitle: "Software Engineer",
    url: "https://adeelatta.dev",
    email: "adeelatta2000@gmail.com",
    telephone: "+92-303-2727095",
    image: "https://adeelatta.dev/images/design-mode/profile.webp",
    alumniOf: "University of Sindh",
    sameAs: [
      "https://www.linkedin.com/in/adeel-atta/",
      "https://github.com/AdeelAtta",
      "https://adeelatta.dev",
    ],
  }

  return (
    <html lang="en" className={`${onest.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem("adeel-theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary font-serif antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:outline-none">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
