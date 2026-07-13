"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { ExternalLink, User, GraduationCap, Briefcase } from "lucide-react"

type TabId = "introduction" | "teaching" | "experience"

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h2 className="text-sm font-bold text-accent uppercase tracking-[0.15em]">{children}</h2>
      <div className="h-px bg-[#e5e7eb] mt-1.5" />
    </div>
  )
}

function IntroductionContent() {
  return (
    <>
      {/* Bio */}
      <section className="pt-4">
        <p className="text-base leading-relaxed text-[#4a4a6a]">
          A curious engineer who enjoys exploring across domains — from blockchain and full-stack development
          to AI/ML and education. I learn continuously, adapt quickly, and believe that the best work
          happens at the intersection of different fields.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="pt-4">
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-[#1a1a2e]">B.S. Software Engineering</h3>
              <p className="text-xs text-accent font-medium">University of Sindh, Jamshoro</p>
            </div>
            <span className="text-xs text-[#6b7280] shrink-0">Jan 2020 – May 2024</span>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {["CGPA: 3.71 / 4.00"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-[11px] bg-[#f5f3f0] text-[#4a4a6a] px-2 py-0.5 rounded-sm border border-[#e5e7eb]"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
          <div className="pt-2">
            <p className="text-[11px] font-medium text-[#6b7280] uppercase tracking-wider mb-1.5">
              Relevant Coursework
            </p>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              Data Science, Computer Communication & Networks, Pervasive Computing, Operating Systems,
              Microprocessor & Assembly Language, Digital Logic Design, Data Structures & Algorithms,
              Linear Algebra, Probability & Statistics, Calculus
            </p>
          </div>
        </div>
      </section>

      {/* AWARDS & HONORS */}
      <section className="pt-4">
        <SectionHeading>Awards &amp; Honors</SectionHeading>
        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-bold text-[#1a1a2e]">Gold Medal</h3>
            <p className="text-sm text-[#6b7280]">
              Ranked 1st out of 1,500+ students in the Faculty of Engineering and Technology, University of Sindh.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#1a1a2e]">Silver Medal</h3>
            <p className="text-sm text-[#6b7280]">
              Ranked 1st in the Software Engineering Department, University of Sindh.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#1a1a2e]">Prime Minister Laptop Award</h3>
            <p className="text-sm text-[#6b7280]">
              Recipient of the Prime Minister Laptop Award during undergraduate studies.
            </p>
          </div>
        </div>
      </section>

      {/* COMPETITIONS */}
      <section className="pt-4">
        <SectionHeading>International Competitions &amp; Hackathons</SectionHeading>
        <div className="space-y-3">
          {[
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
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-accent text-xs mt-0.5 shrink-0">▸</span>
              <div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#1a1a2e] hover:text-accent transition-colors"
                >
                  {item.title} <ExternalLink className="w-3 h-3 inline" aria-hidden="true" />
                </a>
                <p className="text-sm text-[#6b7280] mt-0.5">{item.desc}</p>
                {"team" in item && item.team && (
                  <div className="mt-3 border border-[#e5e7eb] rounded-lg p-3 bg-[#fafafa]">
                    {"name" in item.team && item.team.name && (
                      <p className="text-[11px] font-semibold text-[#1a1a2e] mb-2">
                        Team: {item.team.name}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      {item.team.members.map((member, mi) => (
                        <a
                          key={mi}
                          href={member.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-white border border-[#e5e7eb] rounded-full px-2.5 py-1 hover:border-accent transition-colors"
                          title={member.name}
                        >
                          <div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center text-[9px] text-white font-bold shrink-0">
                            {member.name.charAt(0)}
                          </div>
                          <span className="text-[10px] text-[#6b7280] hover:text-[#1a1a2e]">{member.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function TeachingContent() {
  return (
    <section className="pt-4">
      <SectionHeading>Teaching &amp; Mentoring</SectionHeading>
      <div className="space-y-4">
        {[
          {
            title: "Section Leader",
            org: "Stanford: Code in Place",
            period: "Apr 2026 – continue",
            desc: "Led a section of students through Stanford's introductory programming course (CS106A), conducting sessions on core concepts, debugging, and computational problem-solving.",
            link: "https://digitalcredential.stanford.edu/check/DCEA26E01D4AEB0135625A3474AD6C39544208D663C16CCC87A5244F220D1757czIwWG1GVWV5WUVzbzVaNnBFTlBtOGhlS3I1cTV2dTg4bUVQZkJaWDV3cGZqM05V",
          },
          {
            title: "Moderator & Trainer",
            org: "ICodeGuru",
            period: "Feb 2026 – Present",
            desc: "Mentored less-privileged students in Data Structures & Algorithms. Conducted live online sessions building algorithmic thinking and structured problem-solving skills.",
            link: "https://www.youtube.com/watch?v=5PkN02TBZ60&list=PLe-jr3hh4N_nxCFmnBil389tMXJ3K-dWz&index=1",
          },
        ].map((item, i) => (
          <div key={i}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-[#1a1a2e]">{item.title}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent font-medium hover:underline"
                >
                  {item.org} <ExternalLink className="w-3 h-3 inline" aria-hidden="true" />
                </a>
              </div>
              <span className="text-xs text-[#6b7280] shrink-0">{item.period}</span>
            </div>
            <p className="text-sm text-[#6b7280] mt-1 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ExperienceContent() {
  return (
    <>
      <section className="pt-4">
        <SectionHeading>Professional Experience</SectionHeading>
        <div className="space-y-4">
          {[
            {
              title: "Frontend Engineer (Software Engineer II)",
              org: "Mentalyc",
              period: "Apr 2025 – Mar 2026",
              desc: "Owned end-to-end frontend development for an AI mental health platform serving 30,000+ users. Built a modular design system, automated developer workflows, and wrote BDD test cases with Cucumber.",
            },
            {
              title: "Frontend Developer (Software Engineer I)",
              org: "Analog Mutations",
              period: "Feb 2023 – Mar 2025",
              desc: "Developed user-centric interfaces for Web3 applications serving 600+ users. Integrated blockchain functionality using Cosmos SDK and Solana. Collaborated on Node.js and Express backend integrations.",
            },
          ].map((job, i) => (
            <div key={i}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold text-[#1a1a2e]">{job.title}</h3>
                  <p className="text-xs text-accent font-medium">{job.org}</p>
                </div>
                <span className="text-xs text-[#6b7280] shrink-0">{job.period}</span>
              </div>
              <p className="text-sm text-[#6b7280] mt-1 leading-relaxed">{job.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-4">
        <SectionHeading>Technical Skills</SectionHeading>
        <div className="space-y-3">
          {[
            {
              category: "AI & Machine Learning",
              items: "Python (Pandas, NumPy), PyTorch, Scikit-learn, HuggingFace, RAG, LLM Engineering, ML Model Training, Deep Learning",
            },
            {
              category: "Software Engineering",
              items: "React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Git, Docker, JEST, Playwright, BDD / Cucumber",
            },
            {
              category: "Blockchain & Web3",
              items: "Cosmos SDK, Solana, Web3.js, Ethers.js, WalletConnect, MetaMask, EVM, Staking Platforms",
            },
          ].map((skill, i) => (
            <div key={i} className="grid grid-cols-[120px_1fr] gap-3">
              <span className="text-xs font-semibold text-[#1a1a2e]">{skill.category}</span>
              <span className="text-sm text-[#6b7280] leading-relaxed">{skill.items}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-4">
        <SectionHeading>Projects</SectionHeading>
        <div className="space-y-4">
          {[
            {
              title: "Mentalyc Web App",
              desc: "Designed and implemented a modular design system, feature implementations, and bug fixes for an AI mental health platform serving 30,000+ active subscribers using TypeScript and ES6.",
              link: "https://app.mentalyc.com",
            },
            {
              title: "Mentalyc Chrome Extension",
              desc: "Developed frontend design system with API and web integrations to facilitate auto notes transfer from therapy sessions to different EHR systems.",
              link: "https://chromewebstore.google.com/detail/mentalyc/jhlkppjeaacmnbpdmlflkknfjfjkpfgj",
            },
            {
              title: "Personify Chat Assistant (Browser Extension)",
              desc: "Chrome extension providing AI-powered real-time messaging suggestions across WhatsApp Web and LinkedIn.",
              link: "https://chromewebstore.google.com/detail/personify-ai-chat-assista/dfokiabcgalihnedbbjbkdfhjeokdpne",
            },
            {
              title: "EthicalNode Platform",
              desc: "Maintained computational execution for a distributed staking network serving 900+ edge nodes with $1M+ on-chain capital.",
              link: "https://ethicalnode.com",
            },
            {
              title: "Ethical Wallet",
              desc: "Built a Chrome extension wallet enabling secure browser-based blockchain transactions.",
              link: "https://chromewebstore.google.com/detail/ethical-wallet/nfaepmamdapehcbedhejbjcpnlcldodi",
            },
            {
              title: "Decentr.ai: Multi-Model AI Aggregation Hub & API Gateway",
              desc: "MERN-stack platform consolidating multi-vendor AI access (GPT-4, Llama, Claude, DALL-E) under a decentralized wallet subscription gateway with scalable backend REST APIs.",
            },
            {
              title: "Environmental & Urban Metrics Modeling Tool",
              desc: "Engineered an analytical pipeline for structural parsing of multi-variable NASA POWER meteorological datasets. Integrated empirical parameters with LLM runtime contexts for climate-resiliency evaluation.",
              link: "https://urban-ai.streamlit.app/",
            },
            {
              title: "Research Replication: Dataset Features & ML Performance Analysis",
              desc: "Replicated a 2024 Nature Scientific Reports study — built a data pipeline across 45 Kaggle/UCI datasets using PCA-weighted aggregations, Spearman correlations, and SHAP under 5-fold cross-validation.",
              link: "https://colab.research.google.com/drive/1T2OJ9f613JXnJaQeEGuanD1aDuLN_vQE?usp=sharing",
            },
            {
              title: "Plant Disease Detection & Classification",
              desc: "Implemented deep learning computer vision architectures using PyTorch to automate plant disease identification, optimizing classification accuracy for edge processing scenarios.",
              link: "https://github.com/AdeelAtta/FE-plant-disease-detection",
            },
          ].map((project, i) => (
            <div key={i}>
              <div className="flex items-start gap-2">
                <span className="text-accent text-xs mt-0.5 shrink-0">▸</span>
                <div>
                  <h3 className="text-sm font-bold text-[#1a1a2e]">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        {project.title} <ExternalLink className="w-3 h-3 inline" aria-hidden="true" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="text-sm text-[#6b7280] mt-0.5 leading-relaxed">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

const tabComponents: Record<TabId, React.ReactNode> = {
  introduction: <IntroductionContent />,
  teaching: <TeachingContent />,
  experience: <ExperienceContent />,
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("introduction")

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between gap-4 mb-8 bg-[#fafafa] border border-[#e5e7eb] rounded-lg px-4 py-2 w-full">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">A</span>
          </div>
          <span className="text-sm font-semibold text-[#1a1a2e] hidden sm:inline">Adeel Atta</span>
        </div>
        <div className="flex items-center gap-1" role="tablist">
          {([
            { id: "introduction" as TabId, label: "Introduction", icon: User },
            { id: "teaching" as TabId, label: "Teaching & Mentor", icon: GraduationCap },
            { id: "experience" as TabId, label: "Experience", icon: Briefcase },
          ] as const).map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 text-xs py-1.5 px-3 rounded-md transition-colors ${
                  isActive
                    ? "bg-white text-[#1a1a2e] font-semibold shadow-sm border border-[#e5e7eb]"
                    : "text-[#6b7280] hover:text-[#1a1a2e]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </nav>

      <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12">
        <Sidebar />
        <main className="space-y-10">
          <div key={activeTab} role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {tabComponents[activeTab]}
          </div>
        </main>
      </div>
      <footer className="border-t border-[#e5e7eb] mt-12 pt-6 text-center text-xs text-[#9ca3af]">
        <p>&copy; {new Date().getFullYear()} Adeel Atta. All rights reserved.</p>
      </footer>
    </div>
  )
}
