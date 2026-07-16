import { ExternalLink } from "lucide-react"

const projects = [
  { title: "Mentalyc Web App", desc: "Designed and implemented a modular design system for an AI mental health platform serving 30,000+ active subscribers.", link: "https://app.mentalyc.com" },
  { title: "Mentalyc Chrome Extension", desc: "Developed frontend design system with API and web integrations for auto notes transfer to different EHR systems.", link: "https://chromewebstore.google.com/detail/mentalyc/jhlkppjeaacmnbpdmlflkknfjfjkpfgj" },
  { title: "Ethical Wallet", desc: "Built a Chrome extension wallet enabling secure browser-based blockchain transactions.", link: "https://chromewebstore.google.com/detail/ethical-wallet/nfaepmamdapehcbedhejbjcpnlcldodi" },
  { title: "Personify Chat Assistant", desc: "Chrome extension providing AI-powered real-time messaging suggestions across WhatsApp Web and LinkedIn.", link: "https://github.com/SameerVers3/Chat-Evaluator-llama3-hackathon" },
  { title: "Decentr.ai", desc: "MERN-stack platform consolidating multi-vendor AI access under a decentralized wallet subscription gateway." },
  { title: "Environmental & Urban Metrics Modeling Tool", desc: "Analytical pipeline for structural parsing of multi-variable NASA POWER meteorological datasets.", link: "https://urban-ai.streamlit.app/" },
  { title: "Plant Disease Detection & Classification", desc: "Deep learning computer vision architectures using PyTorch for automated plant disease identification.", link: "https://github.com/AdeelAtta/FE-plant-disease-detection" },
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
