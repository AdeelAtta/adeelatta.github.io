const jobs = [
  { title: "Frontend Engineer", org: "Mentalyc", period: "Apr 2025 – Mar 2026",
    desc: "Developed and maintained React & TypeScript frontends integrated with RESTful APIs, serving 30,000+ users in an Agile environment. Wrote comprehensive unit, integration, and E2E tests (JEST, Playwright, BDD/Cucumber) and maintained technical documentation for frontend applications and development processes. Conducted code reviews, collaborated with UX Designers and Architects to translate business requirements into scalable technical solutions, and participated in sprint planning and retrospectives." },
  { title: "Frontend Developer", org: "Analog Mutations", period: "Feb 2023 – Apr 2025",
    desc: "Built and optimized React-based user interfaces and RESTful API integrations for high-concurrency, cross-functional services serving hundreds of active users. Maintained strict Git version control practices, spearheading systematic code review workflows and managing CI/CD release pipelines via GitHub. Designed and documented frontend application architecture, troubleshooting and resolving issues in deployed applications while identifying opportunities for performance optimization and refactoring." },
  { title: "Section Leader", org: "Stanford University: Code in Place", period: "Apr 2026 – Jun 2026",
    desc: "Led a group of diverse students through the first half of Stanford's flagship intro to Python course, CS106A. Gained interpersonal skills, practiced engaging pedagogy, and demonstrated mastery of basic Python principles." },
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
