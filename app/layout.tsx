import type React from "react"
import type { Metadata } from "next"
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
  title: "Adeel Atta - Software Engineer | University of Sindh",
  description:
    "Software engineer, educator, and hackathon competitor. Academic portfolio showcasing projects, teaching, awards, and professional experience.",
  metadataBase: new URL("https://adeelatta.dev"),
  authors: [{ name: "Adeel Atta" }],
  openGraph: {
    title: "Adeel Atta - Academic Portfolio",
    description: "Software engineer, educator, and hackathon competitor. Building intelligent systems with AI and modern engineering.",
    url: "https://adeelatta.dev",
    siteName: "Adeel Atta",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://adeelatta.dev/images/design-mode/profile.webp", width: 400, height: 400, alt: "Adeel Atta profile photo" }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${onest.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem("adeel-theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`
        }} />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary font-serif antialiased">
        {children}
      </body>
    </html>
  )
}
