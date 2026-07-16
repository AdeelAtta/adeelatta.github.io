import { ExternalLink, Linkedin } from "lucide-react"

type TeamMember = { name: string; url?: string }

const competitions: {
  title: string
  desc: string
  link: string
  team?: { name: string; members: TeamMember[] }
}[] = [
  {
    title: "1st Place — Geekle AI Hackathon",
    desc: "Developed a Text-to-Diagram module for generating structured architecture diagrams using AI.",
    link: "https://www.linkedin.com/posts/geekle-us_geeklehackathon-aihackathon-geekle-activity-7220063052048609281-K0pZ/",
    team: {
      name: "FR1",
      members: [
        { name: "Nick Chebotar", url: "https://www.linkedin.com/in/nick-chebotar/" },
        { name: "Ichwan Haryo Sembodo", url: "https://www.linkedin.com/in/ichwan-haryo-sembodo/" },
        { name: "Adeel Atta", url: "https://www.linkedin.com/in/adeel-atta/" },
        { name: "Robin T.", url: "https://www.linkedin.com/in/robintang2/" },
        { name: "Kostiantyn Muntian", url: "https://www.linkedin.com/in/kostiantyn-muntian/" },
        { name: "Ruslan Mukhametshyn", url: "https://www.linkedin.com/in/rinfly/" },
        { name: "Manuel David Sanchez", url: "https://www.linkedin.com/in/msanchezdev/" },
        { name: "Thinh Nguyen", url: "https://www.linkedin.com/in/ntpthinh/" },
        { name: "Nirvan Bajracharya", url: "https://www.linkedin.com/in/nirvanbajracharya/" },
      ],
    },
  },
  {
    title: "Meta Hacker Cup 2024",
    desc: "Ranked 6,752 out of 30,000+ global participants.",
    link: "https://www.facebook.com/codingcompetitions/hacker-cup/2024/certificate/653288849938114",
  },
  {
    title: "Harvard CS50 Puzzle Day",
    desc: "Global puzzle-solving competition demonstrating problem-solving and logical reasoning skills.",
    link: "https://certificates.cs50.io/4e7a82bd-75a3-4db7-8e11-3061361f9b1c.pdf?size=letter",
    team: {
      name: "CS50 Puzzle Squad",
      members: [
        { name: "Shafia Ansar", url: "https://www.linkedin.com/in/shafia-ansar-886888212/" },
        { name: "M. Muavia Ateeq", url: "https://www.linkedin.com/in/muavia-ateeq-multan-pakistan/" },
        { name: "Arslan Haroon", url: "https://www.linkedin.com/in/arslan-haroon/" },
        { name: "Adeel Atta", url: "https://www.linkedin.com/in/adeel-atta/" },
      ],
    },
  },
  {
    title: "Visionary Award — LLM Hackathon (Materials Science)",
    desc: "Built a RAG-powered system for extracting structured data from scientific papers.",
    link: "https://www.linkedin.com/posts/maryam-ghadrdan-phd-18a7a310_visionaryaward-llmhackathon-aiforscience-activity-7378534271411470337-NDVU/",
    team: {
      name: "Best Team",
      members: [
        { name: "Arthur da Silva Sousa Santos", url: "https://www.linkedin.com/in/arthur-da-silva-sousa-santos-460826201/" },
        { name: "Muhammad Uzair Khan", url: "https://www.linkedin.com/in/uzairkhan-ai-chem/" },
        { name: "Adeel Atta", url: "https://www.linkedin.com/in/adeel-atta/" },
        { name: "Elena Stojanovska", url: "https://www.linkedin.com/in/elenastojanovska/" },
        { name: "Vallabh Vasudevan", url: "https://www.linkedin.com/in/vallabh-vasudevan/" },
        { name: "Dr. Remya Ann Kalapurakal", url: "https://www.linkedin.com/in/remya-kalapurakal/" },
        { name: "Robert Robinson" },
        { name: "Maryam Ghadrdan (PhD)", url: "https://www.linkedin.com/in/maryam-ghadrdan/" },
        { name: "Dr. Tim Pongratz", url: "https://www.linkedin.com/in/dr-tim-pongratz-3036b61b3/" },
        { name: "Is Rodrigues", url: "https://www.linkedin.com/in/is-rodrigues-5b2615272/" },
      ],
    },
  },
  {
    title: "Llama 3 Hackathon",
    desc: "Built an LLM-as-a-judge chat evaluation tool using the Llama 3 model.",
    link: "https://lablab.ai/u/@AdeelAtta/cm0fh22ag007me7ihgfyrouj7",
    team: {
      name: "Fastian",
      members: [
        { name: "Adeel Atta", url: "https://www.linkedin.com/in/adeel-atta/" },
        { name: "Shozab Mehdi", url: "https://www.linkedin.com/in/shozabmehdi/" },
        { name: "Sameer Ahmed", url: "https://www.linkedin.com/in/sameer-vers3/" },
        { name: "Ashad Qureshi", url: "https://www.linkedin.com/in/ashadqureshi1/" },
      ],
    },
  },
  {
    title: "Pak-Angels Gen AI Hackathon",
    desc: "Developed AI-powered Environmental & Urban Metrics Tool leveraging NASA POWER data and GPT-4.",
    link: "https://www.linkedin.com/posts/dr-rabia-chishti-217647148_hackathon-teamsuccess-urbanplanning-activity-7237405101319958528-fYTL/",
    team: {
      name: "Smart Solution",
      members: [
        { name: "Dr. Rabia Chishti", url: "https://www.linkedin.com/in/dr-rabia-chishti-217647148/" },
        { name: "Adeel Atta" },
        { name: "Usama Bajwa", url: "https://www.linkedin.com/in/musamabajwa/" },
        { name: "Muhammad Awais" },
        { name: "Ms. Afshan Chishti" },
      ],
    },
  },
  {
    title: "WordPress Plugin Hackathon",
    desc: "Contributed to programmatic plugin feature development.",
    link: "https://www.linkedin.com/in/adeel-atta/details/certifications/1724527785101/single-media-viewer/?profileId=ACoAADEzf0IBN3mJCSm42DzvYL8IlPhLNTOqo1k",
  },
]

export function CompetitionsWidget() {
  return (
    <div className="px-5 py-4 space-y-4">
      {competitions.map((item, i) => (
        <div key={i}>
          <div className="flex items-start gap-3">
            <span className="text-accent text-xs mt-1 shrink-0 font-sans">▸</span>
            <div>
              <h3 className="text-sm font-semibold font-sans">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors duration-200" aria-label={`${item.title} (opens in new tab)`}>
                  {item.title} <ExternalLink className="w-3 h-3 inline" />
                </a>
              </h3>
              <p className="text-sm text-text-secondary mt-0.5 leading-relaxed">{item.desc}</p>
              {item.team && (
                <div className="mt-2.5 border border-border-light p-3 bg-bg-elevated">
                  <p className="section-label mb-2">Team: {item.team.name}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.team.members.map((member, mi) =>
                      member.url ? (
                        <a key={mi} href={member.url} target="_blank" rel="noopener noreferrer"
                          className="tag inline-flex items-center gap-1 hover:bg-bg-hover hover:text-accent transition-colors duration-200"
                          aria-label={`${member.name} (opens in new tab)`}>
                          <Linkedin className="w-3 h-3" />
                          {member.name}
                        </a>
                      ) : (
                        <span key={mi} className="tag">{member.name}</span>
                      )
                    )}
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
