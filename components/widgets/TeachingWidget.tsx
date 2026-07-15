import { ExternalLink } from "lucide-react"

const items = [
  {
    title: "Section Leader", org: "Stanford: Code in Place", period: "Apr 2026 – Jun 2026",
    desc: "Led a section of students through Stanford's introductory programming course (CS106A), conducting sessions on core concepts, debugging, and computational problem-solving.",
    link: "https://digitalcredential.stanford.edu/check/DCEA26E01D4AEB0135625A3474AD6C39544208D663C16CCC87A5244F220D1757czIwWG1GVWV5WUVzbzVaNnBFTlBtOGhlS3I1cTV2dTg4bUVQZkJaWDV3cGZqM05V",
  },
  {
    title: "Trainer", org: "ICodeGuru", period: "Feb 2026 – Mar 2026",
    desc: "Mentored less-privileged students in Data Structures & Algorithms. Conducted live online sessions along with my team building algorithmic thinking and structured problem-solving skills.",
    link: "https://www.youtube.com/watch?v=5PkN02TBZ60&list=PLe-jr3hh4N_nxCFmnBil389tMXJ3K-dWz&index=1",
  },
]

export function TeachingWidget() {
  return (
    <div className="px-5 py-4 space-y-5">
      {items.map((item, i) => (
        <div key={i}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-text-primary font-sans">{item.title}</h3>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:text-accent-hover font-medium mt-0.5 inline-flex items-center gap-1 transition-colors duration-200 font-sans">
                {item.org} <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <span className="text-[11px] text-text-muted shrink-0 font-sans">{item.period}</span>
          </div>
          <p className="text-sm text-text-secondary mt-2 leading-relaxed">{item.desc}</p>
          {i < items.length - 1 && <div className="divider mt-5" />}
        </div>
      ))}
    </div>
  )
}
