import type { Metadata } from "next"
import { ArrowRight, Award, BadgeCheck, Boxes, FileText, GitBranch, Globe, Linkedin, Medal, Network, PenTool, Sparkles, Trophy, Users, Workflow } from "lucide-react"

export const metadata: Metadata = {
  title: "Geekle AI Hackathon — 1st Place | Text-to-Diagram with AI",
  description:
    "1st Place at the Geekle AI Hackathon with a $2,000 prize. Built a Text-to-Diagram module that generates structured architecture diagrams from natural language using AI.",
  metadataBase: new URL("https://adeelatta.dev"),
  authors: [{ name: "Adeel Atta" }],
  keywords: [
    "Geekle AI Hackathon", "Geekle hackathon 1st place", "Text-to-Diagram",
    "AI diagram generator", "architecture diagram AI", "text to diagram",
    "hackathon winner", "AI hackathon", "FR1 team",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://adeelatta.dev/geekle-ai-hackathon" },
  openGraph: {
    title: "Geekle AI Hackathon — 1st Place | Text-to-Diagram with AI",
    description: "1st Place at the Geekle AI Hackathon ($2,000 prize). Text-to-Diagram: structured architecture diagrams generated from natural language.",
    url: "https://adeelatta.dev/geekle-ai-hackathon",
    siteName: "Projects by Adeel Atta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geekle AI Hackathon — 1st Place",
    description: "Text-to-Diagram: structured architecture diagrams generated from natural language with AI. Won 1st place and $2,000 at the Geekle AI Hackathon.",
  },
}

const ANNOUNCEMENT_URL =
  "https://www.linkedin.com/posts/geekle-us_geeklehackathon-aihackathon-geekle-activity-7220063052048609281-K0pZ/"

const teamMembers = [
  { name: "Nick Chebotar", url: "https://www.linkedin.com/in/nick-chebotar/" },
  { name: "Ichwan Haryo Sembodo", url: "https://www.linkedin.com/in/ichwan-haryo-sembodo/" },
  { name: "Adeel Atta", url: "https://www.linkedin.com/in/adeel-atta/" },
  { name: "Robin T.", url: "https://www.linkedin.com/in/robintang2/" },
  { name: "Kostiantyn Muntian", url: "https://www.linkedin.com/in/kostiantyn-muntian/" },
  { name: "Ruslan Mukhametshyn", url: "https://www.linkedin.com/in/rinfly/" },
  { name: "Manuel David Sanchez", url: "https://www.linkedin.com/in/msanchezdev/" },
  { name: "Thinh Nguyen", url: "https://www.linkedin.com/in/ntpthinh/" },
  { name: "Nirvan Bajracharya", url: "https://www.linkedin.com/in/nirvanbajracharya/" },
]

const features = [
  { icon: PenTool, title: "Natural Language Input", desc: "Describe your system in plain English — the module handles the rest." },
  { icon: Network, title: "Architecture Diagrams", desc: "Generates structured, machine-readable architecture diagrams from your description." },
  { icon: Boxes, title: "Structured Output", desc: "Produces well-defined components and relationships instead of loose freeform drawings." },
  { icon: Workflow, title: "From Idea to Layout", desc: "Turns high-level requirements into a clear, structured visual layout in seconds." },
  { icon: GitBranch, title: "Iterative Refinement", desc: "Refine prompts and regenerate — iterate on the diagram until it matches your design." },
  { icon: FileText, title: "Shareable", desc: "Export and share the generated diagram with your team or embed it in documentation." },
]

const stats = [
  { icon: Medal, value: "1st Place", label: "Geekle AI Hackathon" },
  { icon: Award, value: "$2,000", label: "Prize won" },
  { icon: Users, value: "9 members", label: "Team FR1" },
  { icon: Sparkles, value: "AI-powered", label: "Text-to-Diagram module" },
]

export default function GeekleAiHackathonPage() {
  return (
    <div className="gk">
      <style>{`
        .gk {
          --clr-bg: #0b0e14;
          --clr-bg-light: #11151e;
          --clr-card: #161c28;
          --clr-card-hover: #1b2332;
          --clr-accent: #22d3ee;
          --clr-accent-2: #a78bfa;
          --clr-gold: #fbbf24;
          --clr-ink: #f1f5f9;
          --clr-body: #94a3b8;
          --clr-muted: #64748b;
          --clr-hairline: #1e2636;
          font-family: "Inter", system-ui, -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.55;
          background-color: var(--clr-bg);
          color: var(--clr-body);
        }
        .gk * { font-family: inherit; }
        .gk h1, .gk h2, .gk h3, .gk h4 { letter-spacing: normal; }
        .gk .btn-primary { background: linear-gradient(135deg, var(--clr-accent), #6366f1); color: #0b0e14; border-radius: 8px; font-weight: 700; }
        .gk .btn-primary:hover { opacity: 0.9; }
        .gk .btn-secondary { background-color: transparent; color: var(--clr-ink); border: 1px solid var(--clr-hairline); border-radius: 8px; font-weight: 600; }
        .gk .btn-secondary:hover { border-color: var(--clr-accent); color: var(--clr-accent); }
        .gk .glow { box-shadow: 0 0 45px rgba(34, 211, 238, 0.1); }
        .gk .grad-text { background: linear-gradient(135deg, var(--clr-accent), var(--clr-accent-2)); -webkit-background-clip: text; background-clip: text; color: transparent; }
        @media (prefers-reduced-motion: no-preference) {
          .gk .float { animation: gkfloat 6s ease-in-out infinite; }
        }
        @keyframes gkfloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 20% 35%, #22d3ee 0%, transparent 50%), radial-gradient(circle at 80% 60%, #a78bfa 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-[1200px] px-8 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[1px]" style={{ borderColor: "var(--clr-hairline)", color: "var(--clr-gold)" }}>
              <Trophy className="size-3.5" />
              1st Place — Geekle AI Hackathon
            </div>
            <h1 className="text-[36px] font-bold leading-[1.1] tracking-[-1px] md:text-[54px] lg:text-[64px]" style={{ color: "var(--clr-ink)" }}>
              From <span className="grad-text">text</span> to
              <br />
              architecture diagrams
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.65]" style={{ color: "var(--clr-body)" }}>
              Built a Text-to-Diagram module that generates structured architecture diagrams using AI.
              Team FR1 took 1st place and a $2,000 prize at the Geekle AI Hackathon.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={ANNOUNCEMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-[14px] leading-none transition-all"
              >
                <BadgeCheck className="size-4" />
                View Win Announcement
                <ArrowRight className="size-4" />
              </a>
              <a href="#team" className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 text-[14px] leading-none transition-all">
                <Users className="size-4" />
                Meet Team FR1
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats bar ─── */}
      <section className="border-y py-12" style={{ borderColor: "var(--clr-hairline)" }}>
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="flex flex-col items-center text-center">
                  <Icon className="mb-3 size-6" style={{ color: "var(--clr-accent)" }} />
                  <p className="text-[20px] font-bold" style={{ color: "var(--clr-ink)" }}>{s.value}</p>
                  <p className="mt-0.5 text-[13px]" style={{ color: "var(--clr-muted)" }}>{s.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-accent)" }}>
                About the Project
              </p>
              <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
                Diagrams that build themselves
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65]" style={{ color: "var(--clr-body)" }}>
                Text-to-Diagram converts natural language descriptions into structured architecture
                diagrams. Instead of manually arranging boxes and arrows, you describe your system
                and the AI produces a clean, organized diagram — components, relationships, and
                hierarchy all included.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Describe your architecture in plain English",
                  "AI generates structured, organized diagrams",
                  "Clear components and relationships from the start",
                  "Iterate with prompt refinements until it's right",
                  "Built for hackathon pace: ideas to visuals in minutes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px]">
                    <span className="mt-1.5 block size-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--clr-accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glow float rounded-[16px] border p-8" style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-card)" }}>
              <div className="mb-4 flex items-center gap-3">
                <Workflow className="size-5" style={{ color: "var(--clr-accent)" }} />
                <span className="text-[13px] font-semibold" style={{ color: "var(--clr-ink)" }}>Text-to-Diagram flow</span>
              </div>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Describe your system", desc: "Type the architecture in plain language — services, databases, queues, and their connections." },
                  { step: "2", title: "AI structures it", desc: "The module identifies components and relationships and lays them out as a structured diagram." },
                  { step: "3", title: "Review and refine", desc: "Adjust the prompt, regenerate, and polish until the diagram matches the design." },
                  { step: "4", title: "Ship it", desc: "Export the diagram for documentation, presentations, or sharing with the team." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-3">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold" style={{ backgroundColor: "rgba(34, 211, 238, 0.15)", color: "var(--clr-accent)" }}>
                      {s.step}
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold" style={{ color: "var(--clr-ink)" }}>{s.title}</p>
                      <p className="text-[13px]" style={{ color: "var(--clr-body)" }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="py-24" style={{ backgroundColor: "var(--clr-bg-light)" }}>
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-accent)" }}>
              Features
            </p>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
              What the module does
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="rounded-[16px] border p-8 transition-colors hover:border-[color:var(--clr-accent)]" style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-card)" }}>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-[10px]" style={{ backgroundColor: "rgba(34, 211, 238, 0.12)" }}>
                    <Icon className="size-6" style={{ color: "var(--clr-accent)" }} />
                  </div>
                  <h3 className="text-[16px] font-semibold" style={{ color: "var(--clr-ink)" }}>{f.title}</h3>
                  <p className="mt-2 text-[13px]" style={{ color: "var(--clr-body)" }}>{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section id="team" className="py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-accent)" }}>
              Team FR1
            </p>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
              Nine minds, one win
            </h2>
            <p className="mt-4 text-[15px]" style={{ color: "var(--clr-body)" }}>
              Text-to-Diagram was built by Team FR1 — a cross-continental group of engineers who came
              together for the Geekle AI Hackathon.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {teamMembers.map((m) => (
              <a
                key={m.name}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[10px] border px-4 py-2.5 text-[13px] font-medium transition-colors hover:border-[color:var(--clr-accent)] hover:text-[color:var(--clr-accent)]"
                style={{ borderColor: "var(--clr-hairline)", color: "var(--clr-ink)", backgroundColor: "var(--clr-card)" }}
                aria-label={`${m.name} (opens LinkedIn in new tab)`}
              >
                <Linkedin className="size-3.5" style={{ color: "var(--clr-accent)" }} />
                {m.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Hackathon ─── */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[20px] px-8 py-16 text-center glow" style={{ backgroundColor: "var(--clr-card)", border: "1px solid var(--clr-hairline)" }}>
            <Trophy className="mx-auto mb-4 size-10" style={{ color: "var(--clr-gold)" }} />
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[36px]" style={{ color: "var(--clr-ink)" }}>
              1st place at the Geekle AI Hackathon
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px]" style={{ color: "var(--clr-body)" }}>
              The module was selected as the winning entry, taking home the $2,000 prize.
              See the official announcement from Geekle.
            </p>
            <a
              href={ANNOUNCEMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-[8px] px-6 py-3.5 text-[14px] font-semibold leading-none transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--clr-ink)", color: "var(--clr-bg)" }}
            >
              <Globe className="size-4" />
              View Announcement
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t px-8 py-12" style={{ borderColor: "var(--clr-hairline)" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-[13px]" style={{ color: "var(--clr-muted)" }}>
              Text-to-Diagram by{" "}
              <a href="https://adeelatta.dev" className="transition-opacity hover:opacity-80" style={{ color: "var(--clr-ink)" }}>
                Adeel Atta
              </a>{" "}
              · Team FR1
            </p>
            <div className="flex gap-5">
              <a href={ANNOUNCEMENT_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                Win Announcement
              </a>
              <span style={{ color: "var(--clr-muted)" }}>/</span>
              <a href="https://geekle.us" target="_blank" rel="noopener noreferrer" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                Geekle
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
