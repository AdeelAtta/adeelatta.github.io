const jobs = [
  { title: "Frontend Engineer (Software Engineer II)", org: "Mentalyc", period: "Apr 2025 – Mar 2026",
    desc: "Owned end-to-end frontend development for an AI mental health platform serving 30,000+ users. Built a modular design system, automated developer workflows, and wrote BDD test cases with Cucumber." },
  { title: "Frontend Developer (Software Engineer I)", org: "Analog Mutations", period: "Feb 2023 – Mar 2025",
    desc: "Developed user-centric interfaces for Web3 applications serving 600+ users. Integrated blockchain functionality using Cosmos SDK and Solana. Collaborated on Node.js and Express backend integrations." },
]

export function ExperienceWidget() {
  return (
    <div className="px-5 py-4 space-y-5">
      {jobs.map((job, i) => (
        <div key={i}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-text-primary font-sans">{job.title}</h3>
              <p className="text-xs text-accent font-medium mt-0.5 font-sans">{job.org}</p>
            </div>
            <span className="text-[11px] text-text-muted shrink-0 font-sans">{job.period}</span>
          </div>
          <p className="text-sm text-text-secondary mt-2 leading-relaxed">{job.desc}</p>
          {i < jobs.length - 1 && <div className="divider mt-5" />}
        </div>
      ))}
    </div>
  )
}
