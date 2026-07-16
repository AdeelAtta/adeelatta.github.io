import { ExternalLink } from "lucide-react"

const competitions = [
  { title: "1st Place - Geekle AI Hackathon", desc: "Developed a Text-to-Diagram module for generating structured architecture diagrams using AI.", link: "https://www.linkedin.com/posts/geekle-us_geeklehackathon-aihackathon-geekle-activity-7220063052048609281-K0pZ/", team: { name: "FR1", members: ["Nick Chebotar", "Ichwan Haryo Sembodo", "Adeel Atta", "Robin T.", "Kostiantyn Muntian", "Ruslan Mukhametshyn", "Manuel David Sanchez", "Thinh Nguyen", "Nirvan Bajracharya"] } },
  { title: "Meta Hacker Cup 2024", desc: "Ranked 6,752 out of 30,000+ global participants.", link: "https://www.facebook.com/codingcompetitions/hacker-cup/2024/certificate/653288849938114" },
  { title: "Harvard CS50 Puzzle Day", desc: "Global puzzle-solving competition.", link: "https://certificates.cs50.io/4e7a82bd-75a3-4db7-8e11-3061361f9b1c.pdf?size=letter", team: { name: "CS50 Puzzle Squad", members: ["Shafia Ansar", "M. Muavia Ateeq", "Arslan Haroon", "Adeel Atta"] } },
  { title: "Visionary Award - LLM Hackathon (Materials Science)", desc: "Built a RAG-powered system for extracting structured data from scientific papers.", link: "https://www.linkedin.com/posts/maryam-ghadrdan-phd-18a7a310_visionaryaward-llmhackathon-aiforscience-activity-7378534271411470337-NDVU/", team: { name: "Best Team", members: ["Arthur da Silva Sousa Santos", "Muhammad Uzair Khan", "Adeel Atta", "Elena Stojanovska", "Vallabh Vasudevan", "Dr. Remya Ann Kalapurakal", "Robert Robinson", "Maryam Ghadrdan (PhD)", "Dr. Tim Pongratz", "Is Rodrigues"] } },
  { title: "Llama 3 Hackathon", desc: "Built an LLM-as-a-judge chat evaluation tool using the Llama 3 model.", link: "https://lablab.ai/u/@AdeelAtta/cm0fh22ag007me7ihgfyrouj7", team: { name: "Fastian", members: ["Adeel Atta", "Shozab Mehdi", "Sameer Ahmed", "Ashad Qureshi"] } },
  { title: "Pak-Angels Gen AI Hackathon", desc: "Developed AI-powered Environmental & Urban Metrics Tool leveraging NASA POWER data and GPT-4.", link: "https://www.linkedin.com/posts/dr-rabia-chishti-217647148_hackathon-teamsuccess-urbanplanning-activity-7237405101319958528-fYTL/", team: { name: "Smart Solution", members: ["Dr. Rabia Chishti", "Adeel Atta", "Usama Bajwa", "Muhammad Awais", "Ms. Afshan Chishti"] } },
  { title: "WordPress Plugin Hackathon", desc: "Contributed to programmatic plugin feature development.", link: "https://www.linkedin.com/in/adeel-atta/details/certifications/1724527785101/single-media-viewer/?profileId=ACoAADEzf0IBN3mJCSm42DzvYL8IlPhLNTOqo1k" },
]

export function CompetitionsWidget() {
  return (
    <div className="px-5 py-4 space-y-4">
      {competitions.map((item, i) => (
        <div key={i}>
          <div className="flex items-start gap-3">
            <span className="text-accent text-xs mt-1 shrink-0 font-sans">▸</span>
            <div>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-text-primary hover:text-accent transition-colors duration-200 font-sans">
                {item.title} <ExternalLink className="w-3 h-3 inline" />
              </a>
              <p className="text-sm text-text-secondary mt-0.5 leading-relaxed">{item.desc}</p>
              {"team" in item && item.team && (
                <div className="mt-2.5 border border-border-light p-3 bg-bg-elevated">
                  <p className="section-label mb-2">Team: {item.team.name}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.team.members.map((member, mi) => <span key={mi} className="tag">{member}</span>)}
                  </div>
                </div>
              )}
            </div>
          </div>
          {i < competitions.length - 1 && <div className="divider mt-4" />}
        </div>
      ))}
    </div>
  )
}
