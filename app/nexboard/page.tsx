import type { Metadata } from "next"
import { ArrowRight, Award, Bot, Building2, Globe, Rocket, Users, Zap, BadgeCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Nexboard – AI-Powered Onboarding & Sales Simulation Platform | Microsoft Agents League",
  description:
    "AI-powered intelligent multi-tenant SaaS platform transforming employee onboarding with interactive agent simulations and marketing/email simulations for sales teams. Built for the Microsoft Agents League Hackathon.",
  metadataBase: new URL("https://adeelatta.dev"),
  authors: [{ name: "Adeel Atta" }],
  keywords: [
    "Nexboard", "Microsoft Agents League", "Agents League Hackathon", "AI onboarding platform",
    "sales simulation", "email simulation", "marketing simulation", "multi-tenant SaaS",
    "AI agents", "employee onboarding",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://adeelatta.dev/nexboard" },
  openGraph: {
    title: "Nexboard – AI-Powered Onboarding & Sales Simulation Platform",
    description: "AI-powered multi-tenant SaaS platform for employee onboarding with interactive agent and sales simulations.",
    url: "https://adeelatta.dev/nexboard",
    siteName: "Projects by Adeel Atta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexboard – AI-Powered Onboarding & Sales Simulation Platform",
    description: "AI-powered multi-tenant SaaS platform for employee onboarding with interactive agent and sales simulations.",
  },
}

const DEMO_URL = "https://nexboard-kappa.vercel.app/auth/signup"
const GITHUB_URL = "https://github.com/SoomroBilal/Nexboard"
const CERT_URL = "https://globalai.community/badges/8de07177-ee97-4319-ab3a-54899b367936"
const HACKATHON_URL = "https://info.microsoft.com/Agents-League-Hackathon-Registration/"

export default function NexboardPage() {
  return (
    <div className="nx">
      <style>{`
        .nx {
          --clr-bg: #07090f;
          --clr-bg-light: #0d1117;
          --clr-card: #131a24;
          --clr-card-hover: #1a2330;
          --clr-accent: #f97316;
          --clr-accent-2: #eab308;
          --clr-ink: #f8fafc;
          --clr-body: #9ca3af;
          --clr-muted: #556171;
          --clr-hairline: #1f2a37;
          font-family: "Inter", system-ui, -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.55;
          background-color: var(--clr-bg);
          color: var(--clr-body);
        }
        .nx * { font-family: inherit; }
        .nx h1, .nx h2, .nx h3, .nx h4 { letter-spacing: normal; }
        .nx .btn-primary { background: linear-gradient(135deg, var(--clr-accent), #ea580c); color: #0b0c10; border-radius: 8px; font-weight: 700; }
        .nx .btn-primary:hover { opacity: 0.9; }
        .nx .glow { box-shadow: 0 0 45px rgba(249, 115, 22, 0.12); }
        .nx .grad-text { background: linear-gradient(135deg, var(--clr-accent), var(--clr-accent-2)); -webkit-background-clip: text; background-clip: text; color: transparent; }
        @media (prefers-reduced-motion: no-preference) {
          .nx .float { animation: nxfloat 6s ease-in-out infinite; }
        }
        @keyframes nxfloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 25% 40%, #f97316 0%, transparent 50%), radial-gradient(circle at 75% 60%, #eab308 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-[1200px] px-8 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[1px]" style={{ borderColor: "var(--clr-hairline)", color: "var(--clr-accent)" }}>
              <Bot className="size-3.5" />
              Microsoft Agents League Hackathon
            </div>
            <h1 className="text-[34px] font-bold leading-[1.1] tracking-[-1px] md:text-[52px] lg:text-[60px]" style={{ color: "var(--clr-ink)" }}>
              Nexboard<span className="grad-text">.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.6]" style={{ color: "var(--clr-body)" }}>
              An AI-powered intelligent multi-tenant SaaS platform transforming employee onboarding with
              interactive agent simulations and marketing/email simulations for sales teams.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-[14px] leading-none transition-all"
              >
                <Rocket className="size-4" />
                Launch Live App
                <ArrowRight className="size-4" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[8px] border px-6 py-3.5 text-[14px] font-medium leading-none transition-colors hover:opacity-80"
                style={{ borderColor: "var(--clr-hairline)", color: "var(--clr-ink)" }}
              >
                <Globe className="size-4" />
                Source on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="border-y py-12" style={{ borderColor: "var(--clr-hairline)" }}>
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {[
              { icon: Building2, value: "Multi-Tenant", label: "SaaS Architecture" },
              { icon: Bot, value: "Agent-Powered", label: "Interactive Simulations" },
              { icon: Users, value: "Onboarding", label: "Employee Training" },
              { icon: Award, value: "Hackathon", label: "Microsoft Agents League" },
            ].map((s) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="flex items-center gap-3">
                  <Icon className="size-8" style={{ color: "var(--clr-accent)" }} />
                  <div>
                    <p className="text-[15px] font-semibold" style={{ color: "var(--clr-ink)" }}>{s.value}</p>
                    <p className="text-[13px]" style={{ color: "var(--clr-muted)" }}>{s.label}</p>
                  </div>
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
                Built for the Microsoft Agents League Hackathon
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65]" style={{ color: "var(--clr-body)" }}>
                Nexboard reimagines employee onboarding as an immersive, agent-driven experience. New hires don&apos;t just
                read manuals — they interact with AI agents that guide them through realistic marketing and email
                simulations, practicing real-world sales scenarios before they ever speak to a prospect.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Interactive agent simulations that coach new employees",
                  "Marketing & email simulation modules for sales teams",
                  "Multi-tenant SaaS architecture with per-organization workspaces",
                  "Intelligent feedback and performance tracking",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px]">
                    <span className="mt-1 block size-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--clr-accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glow rounded-[16px] border p-8" style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-card)" }}>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-[8px]" style={{ backgroundColor: "rgba(249, 115, 22, 0.15)" }}>
                  <Zap className="size-4" style={{ color: "var(--clr-accent)" }} />
                </span>
                <span className="text-[12px] font-medium" style={{ color: "var(--clr-muted)" }}>Recognition</span>
              </div>
              <a
                href={CERT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-[12px] border p-5 transition-colors hover:opacity-90"
                style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-bg-light)" }}
              >
                <BadgeCheck className="mt-0.5 size-7 shrink-0" style={{ color: "var(--clr-accent-2)" }} />
                <div>
                  <p className="text-[14px] font-semibold" style={{ color: "var(--clr-ink)" }}>Verified Hackathon Badge</p>
                  <p className="mt-1 text-[13px]" style={{ color: "var(--clr-body)" }}>
                    Awarded by the Global AI Community for participation in the Microsoft Agents League Hackathon.
                  </p>
                  <p className="mt-2 text-[12px] font-semibold" style={{ color: "var(--clr-accent)" }}>
                    View badge <ArrowRight className="ml-1 inline size-3" />
                  </p>
                </div>
              </a>
              <a
                href={HACKATHON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-start gap-4 rounded-[12px] border p-5 transition-colors hover:opacity-90"
                style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-bg-light)" }}
              >
                <Award className="mt-0.5 size-7 shrink-0" style={{ color: "var(--clr-accent)" }} />
                <div>
                  <p className="text-[14px] font-semibold" style={{ color: "var(--clr-ink)" }}>Microsoft Agents League Hackathon</p>
                  <p className="mt-1 text-[13px]" style={{ color: "var(--clr-body)" }}>
                    Official competition page and registration details.
                  </p>
                  <p className="mt-2 text-[12px] font-semibold" style={{ color: "var(--clr-accent)" }}>
                    Visit event <ArrowRight className="ml-1 inline size-3" />
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section style={{ backgroundColor: "var(--clr-bg-light)" }} className="py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-accent)" }}>
              Capabilities
            </p>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
              What Nexboard does
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: Bot, title: "Interactive Agent Simulations", desc: "AI agents coach new hires through realistic onboarding scenarios with instant, tailored feedback." },
              { icon: Zap, title: "Marketing & Email Simulations", desc: "Sales teams practice campaigns, outreach, and customer conversations in a risk-free sandbox." },
              { icon: Building2, title: "Multi-Tenant SaaS", desc: "Organizations get dedicated workspaces with role-based access and shared training content." },
            ].map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="glow rounded-[16px] border p-8 text-center" style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-card)" }}>
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-[10px]" style={{ backgroundColor: "rgba(249, 115, 22, 0.15)" }}>
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

      {/* ─── Tech Stack ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-accent)" }}>
              Tech Stack
            </p>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
              Built with a modern AI stack
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "AI Agents", desc: "Conversational agents power the interactive simulation and coaching experience." },
              { title: "Next.js", desc: "Fast, SEO-friendly frontend with server-side rendering for the SaaS dashboard." },
              { title: "Multi-Tenant Backend", desc: "Scalable API layer with per-organization isolation and authentication." },
              { title: "Cloud Deployment", desc: "Deployed on Vercel for instant global availability and preview environments." },
            ].map((t) => (
              <div key={t.title} className="rounded-[12px] border p-6" style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-card)" }}>
                <h3 className="text-[15px] font-semibold" style={{ color: "var(--clr-ink)" }}>{t.title}</h3>
                <p className="mt-2 text-[13px]" style={{ color: "var(--clr-body)" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="glow rounded-[20px] border px-8 py-16 text-center" style={{ borderColor: "rgba(249, 115, 22, 0.2)", backgroundColor: "var(--clr-card)" }}>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[36px]" style={{ color: "var(--clr-ink)" }}>
              Try Nexboard yourself
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px]" style={{ color: "var(--clr-body)" }}>
              Explore the live app and see how AI simulations can transform onboarding and sales training.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-[14px] leading-none"
              >
                Launch Live App
                <ArrowRight className="size-4" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[8px] border px-6 py-3.5 text-[14px] font-medium leading-none transition-colors hover:opacity-80"
                style={{ borderColor: "var(--clr-hairline)", color: "var(--clr-ink)" }}
              >
                <Globe className="size-4" />
                View Source
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t px-8 py-12" style={{ borderColor: "var(--clr-hairline)" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-[13px]" style={{ color: "var(--clr-muted)" }}>
              Built for the{" "}
              <span className="font-semibold" style={{ color: "var(--clr-ink)" }}>Microsoft Agents League Hackathon</span>
              {" "}by{" "}
              <a href="/" className="transition-opacity hover:opacity-80" style={{ color: "var(--clr-accent)" }}>
                Adeel Atta
              </a>{" "}
              &{" "}
              <a href="https://www.linkedin.com/in/muhammad-bilal-soomro-972494214/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" style={{ color: "var(--clr-accent)" }}>
                Muhammad Bilal Soomro
              </a>
            </p>
            <div className="flex gap-5">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                Live App
              </a>
              <span style={{ color: "var(--clr-muted)" }}>/</span>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                GitHub
              </a>
              <span style={{ color: "var(--clr-muted)" }}>/</span>
              <a href={CERT_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                Verified Badge
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}