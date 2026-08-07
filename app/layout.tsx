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
  title: "Adeel Atta — Frontend Engineer | Architecting & Shipping Web Experiences",
  description:
    "Frontend engineer who architects, builds, and ships fast, accessible web products — design systems, performance, testing, and CI/CD — powered by backend and AI knowledge. Hackathon winner and educator.",
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
    "frontend engineer",
    "React engineer",
    "Next.js engineer",
    "academic portfolio",
    "software engineer portfolio",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://adeelatta.dev" },
  twitter: {
    card: "summary_large_image",
    title: "Adeel Atta — Frontend Engineer | Architecting & Shipping Web Experiences",
    description: "Frontend engineer architecting, building, and shipping React & Next.js products — design systems, performance, testing, CI/CD — with backend and AI knowledge.",
    images: ["https://adeelatta.dev/images/design-mode/profile.webp"],
  },
  openGraph: {
    title: "Adeel Atta — Frontend Engineer | Architecting & Shipping Web Experiences",
    description: "Frontend engineer architecting, building, and shipping React & Next.js products — design systems, performance, testing, CI/CD — with backend and AI knowledge.",
    url: "https://adeelatta.dev",
    siteName: "Adeel Atta",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://adeelatta.dev/images/design-mode/profile.webp", width: 400, height: 400, alt: "Adeel Atta profile photo" }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Adeel Atta",
      jobTitle: "Frontend Engineer",
      url: "https://adeelatta.dev",
      email: "adeelatta2000@gmail.com",
      telephone: "+92-303-2727095",
      image: "https://adeelatta.dev/images/design-mode/profile.webp",
      alumniOf: "University of Sindh",
      award: [
        "Gold Medal - Ranked 1st in the Faculty of Engineering and Technology, University of Sindh",
        "Silver Medal - Ranked 1st in the Software Engineering Department, University of Sindh",
        "Prime Minister Laptop Award",
        "1st Place - Geekle AI Hackathon",
      ],
      knowsLanguage: ["English", "Urdu"],
      knowsAbout: ["React", "Next.js", "TypeScript", "Python", "AI/ML", "LLM Engineering", "RAG", "Blockchain"],
      sameAs: [
        "https://www.linkedin.com/in/adeel-atta/",
        "https://github.com/AdeelAtta",
        "https://adeelatta.dev",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Adeel Atta — Frontend Engineer (React & Next.js)",
      url: "https://adeelatta.dev",
      description:
        "Portfolio of Adeel Atta — frontend engineer architecting and shipping fast, beautiful web experiences with backend and AI knowledge. Projects, teaching, awards, and professional experience.",
      inLanguage: "en-US",
      publisher: {
        "@type": "Person",
        name: "Adeel Atta",
        url: "https://adeelatta.dev",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Adeel Atta",
      url: "https://adeelatta.dev",
      email: "adeelatta2000@gmail.com",
      logo: "https://adeelatta.dev/images/design-mode/profile.webp",
      sameAs: [
        "https://www.linkedin.com/in/adeel-atta/",
        "https://github.com/AdeelAtta",
      ],
    },
  ]

  return (
    <html lang="en" className={`${onest.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem("adeel-theme");if(t!=="light")document.documentElement.classList.add("dark")}catch(e){}})()`
        }} />
        {jsonLd.map((ld, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
          />
        ))}
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
