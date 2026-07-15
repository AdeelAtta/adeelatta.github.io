const skillGroups = [
  { category: "AI & Machine Learning", items: ["Python (Pandas, NumPy)", "PyTorch", "Scikit-learn", "HuggingFace", "RAG", "LLM Engineering", "ML Model Training", "Deep Learning"] },
  { category: "Software Engineering", items: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "Git", "Docker", "JEST", "Playwright", "BDD / Cucumber"] },
  { category: "Blockchain & Web3", items: ["Cosmos SDK", "Solana", "Web3.js", "Ethers.js", "WalletConnect", "MetaMask", "EVM", "Staking Platforms"] },
]

export function SkillsWidget() {
  return (
    <div className="px-5 py-4 space-y-4">
      {skillGroups.map((group, i) => (
        <div key={i}>
          <p className="section-label mb-2.5">{group.category}</p>
          <div className="flex flex-wrap gap-1.5">
            {group.items.map((skill, j) => <span key={j} className="tag">{skill}</span>)}
          </div>
          {i < skillGroups.length - 1 && <div className="divider mt-4" />}
        </div>
      ))}
    </div>
  )
}
