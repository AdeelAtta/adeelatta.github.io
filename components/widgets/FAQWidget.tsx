export const faqItems = [
  {
    q: "Who is Adeel Atta?",
    a: "Adeel Atta is a frontend engineer who architects, builds, and ships fast, accessible web products with React and Next.js — backed by backend, AI, and Web3 knowledge. Gold and silver medalist at the University of Sindh and 1st place winner at the Geekle AI Hackathon.",
  },
  {
    q: "What technologies does Adeel work with?",
    a: "React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, PostgreSQL, MongoDB, Python (PyTorch, Pandas, Scikit-learn), LLM engineering and RAG, plus Web3 tooling like Ethers.js, WalletConnect, and the Cosmos SDK.",
  },
  {
    q: "What has Adeel won?",
    a: "Gold Medal (ranked 1st out of 1,500+ students in the Faculty of Engineering and Technology, University of Sindh), Silver Medal, the Prime Minister Laptop Award, and 1st place with a $2,000 prize at the Geekle AI Hackathon. Competed in 8+ international hackathons.",
  },
  {
    q: "Is Adeel available for hire?",
    a: "Yes — Adeel is open to frontend and full-stack engineering roles. Contact him via email at adeelatta2000@gmail.com or LinkedIn (linkedin.com/in/adeel-atta).",
  },
  {
    q: "Where can I see Adeel's projects?",
    a: "Dedicated project pages live on this site — including VR Shooting Gallery, IndexFlow, SchemaIntern, Nexboard, and Personify — and open-source work is on GitHub at github.com/AdeelAtta.",
  },
]

export function FAQWidget() {
  return (
    <div className="px-5 py-4 space-y-2">
      {faqItems.map((item, i) => (
        <details key={i} className="group border border-border-light rounded-md">
          <summary className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-text-primary font-sans cursor-pointer list-none select-none hover:bg-bg-hover transition-colors duration-200">
            {item.q}
            <span className="text-accent text-xs transition-transform duration-200 group-open:rotate-45 shrink-0">+</span>
          </summary>
          <p className="px-4 pb-3.5 text-sm text-text-secondary leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
