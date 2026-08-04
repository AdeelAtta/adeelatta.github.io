import { ExternalLink } from "lucide-react"

const projects = [
  { title: "Mentalyc Web App", desc: "Designed and implemented a modular design system for an AI mental health platform serving 30,000+ active subscribers.", link: "https://app.mentalyc.com" },
  { title: "Mentalyc Chrome Extension", desc: "Developed frontend design system with API and web integrations for auto notes transfer to different EHR systems.", link: "https://chromewebstore.google.com/detail/mentalyc/jhlkppjeaacmnbpdmlflkknfjfjkpfgj" },
  { title: "Ethical Wallet", desc: "Built a Chrome extension wallet enabling secure browser-based blockchain transactions.", link: "https://chromewebstore.google.com/detail/ethical-wallet/nfaepmamdapehcbedhejbjcpnlcldodi" },
  { title: "Personify Chat Assistant", desc: "Chrome extension providing AI-powered real-time messaging suggestions across WhatsApp Web and LinkedIn.", link: "https://adeelatta.dev/personify-chat-assistant" },
  { title: "Decentr.ai", desc: "MERN-stack platform consolidating multi-vendor AI access under a decentralized wallet subscription gateway." },
  { title: "Pak-Angels Gen AI Hackathon – Urban AI Tool", desc: "AI-powered Environmental & Urban Metrics Tool leveraging NASA POWER meteorological data and GPT-4. Built for Pak-Angels Gen AI Hackathon.", link: "https://adeelatta.dev/pak-angels-hackathon" },
  { title: "Plant Disease Detection & Classification", desc: "Deep learning computer vision architectures using PyTorch for automated plant disease identification.", link: "https://adeelatta.dev/plant-disease-detection" },
  { title: "IndexFlow – Brave Search Indexer", desc: "Chrome extension that automates bulk URL submission to Brave Search. Supports XML sitemaps, sitemap URLs, and manual paste input.", link: "https://adeelatta.dev/indexflow" },
  { title: "SchemaIntern – DB-Aware NL to SQL", desc: "Schema-aware natural language to SQL built for the AMD Developer Hackathon. Connect your database and ask questions in plain English. Generates accurate, safe SQL.", link: "https://adeelatta.dev/schema-intern-nl-to-sql" },
  { title: "Nexboard – Microsoft Agents League Hackathon", desc: "AI-powered intelligent multi-tenant SaaS platform transforming employee onboarding with interactive agent simulations and marketing/email simulations for sales teams.", link: "https://adeelatta.dev/nexboard" },
  { title: "Text-to-Diagram – Geekle AI Hackathon (1st Place)", desc: "AI module that generates structured architecture diagrams from natural language. Won 1st place and a $2,000 prize at the Geekle AI Hackathon.", link: "https://adeelatta.dev/geekle-ai-hackathon" },
  { title: "VR Shooting Gallery – Meta Quest 3", desc: "Carnival-style VR shooting range built for Meta Quest 3. Shoot moving targets, build combos, and unlock guns and skins across five themed ranges.", link: "https://adeelatta.dev/gun-shooting" },
]

export function ProjectsWidget() {
  return (
    <div className="px-5 py-4 space-y-3">
      {projects.map((project, i) => (
        <div key={i}>
          <div className="flex items-start gap-3">
            <span className="text-accent text-xs mt-1 shrink-0 font-sans">▸</span>
            <div>
              <h3 className="text-sm font-semibold text-text-primary font-sans">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200" aria-label={`${project.title} (opens in new tab)`}>
                    {project.title} <ExternalLink className="w-3 h-3 inline" />
                  </a>
                ) : project.title}
              </h3>
              <p className="text-sm text-text-secondary mt-0.5 leading-relaxed">{project.desc}</p>
            </div>
          </div>
          {i < projects.length - 1 && <div className="divider" />}
        </div>
      ))}
    </div>
  )
}
