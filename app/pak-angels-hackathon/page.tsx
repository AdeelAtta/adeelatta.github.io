import type { Metadata } from "next"
import { ArrowRight, BarChart3, Cloud, Database, Globe, Linkedin, MapPin, TreePine, Users } from "lucide-react"

const HACKATHON_URL =
  "https://www.linkedin.com/posts/dr-rabia-chishti-217647148_hackathon-teamsuccess-urbanplanning-activity-7237405101319958528-fYTL/"

export const metadata: Metadata = {
  title: "Pak-Angels Gen AI Hackathon – Urban AI Tool | NASA-Powered Environmental Analytics",
  description:
    "AI-powered Environmental & Urban Metrics Tool leveraging NASA POWER meteorological data and GPT-4. Built for the Pak-Angels Gen AI Hackathon.",
  metadataBase: new URL("https://adeelatta.dev"),
  authors: [{ name: "Adeel Atta" }],
  keywords: [
    "Pak-Angels hackathon", "Gen AI hackathon", "NASA POWER data", "environmental analytics",
    "urban metrics tool", "AI environmental tool", "GPT-4 environmental analysis",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://adeelatta.dev/pak-angels-hackathon" },
  openGraph: {
    title: "Pak-Angels Gen AI Hackathon – Urban AI Tool",
    description: "AI-powered Environmental & Urban Metrics Tool leveraging NASA POWER meteorological data and GPT-4.",
    url: "https://adeelatta.dev/pak-angels-hackathon",
    siteName: "Projects by Adeel Atta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pak-Angels Gen AI Hackathon – Urban AI Tool",
    description: "AI-powered Environmental & Urban Metrics Tool leveraging NASA POWER data and GPT-4.",
  },
}

export default function PakAngelsPage() {
  return (
    <div className="pa">
      <style>{`
        .pa {
          --clr-space: #0a0e1a;
          --clr-space-light: #12182b;
          --clr-card: #1a2240;
          --clr-card-hover: #222b50;
          --clr-accent: #4fc3f7;
          --clr-emerald: #66bb6a;
          --clr-amber: #ffb74d;
          --clr-rose: #ef5350;
          --clr-ink: #e8eaf6;
          --clr-body: #b0b8d1;
          --clr-muted: #6b7394;
          --clr-hairline: #2a3355;
          font-family: "Inter", system-ui, -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.55;
          background-color: var(--clr-space);
          color: var(--clr-body);
        }
        .pa * { font-family: inherit; }
        .pa h1, .pa h2, .pa h3, .pa h4 { letter-spacing: normal; }
        .pa .btn-primary { background: linear-gradient(135deg, var(--clr-accent), #0288d1); color: #0a0e1a; border-radius: 8px; font-weight: 600; }
        .pa .btn-primary:hover { opacity: 0.9; }
        .pa .glow { box-shadow: 0 0 40px rgba(79, 195, 247, 0.15); }
        @media (prefers-reduced-motion: no-preference) {
          .pa .float { animation: float 6s ease-in-out infinite; }
          .pa .pulse { animation: pulse 3s ease-in-out infinite; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 25% 50%, #4fc3f7 0%, transparent 50%), radial-gradient(circle at 75% 50%, #66bb6a 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-[1200px] px-8 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[1px]" style={{ borderColor: "var(--clr-hairline)", color: "var(--clr-accent)" }}>
              <Users className="size-3.5" />
              Pak-Angels Gen AI Hackathon
            </div>
            <h1 className="text-[36px] font-bold leading-[1.1] tracking-[-1px] md:text-[52px] lg:text-[64px]" style={{ color: "var(--clr-ink)" }}>
              Environmental & Urban Metrics<br />
              <span style={{ color: "var(--clr-accent)" }}>AI-Powered</span> Analytics Tool
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.6]" style={{ color: "var(--clr-body)" }}>
              Leveraging NASA POWER meteorological data and GPT-4 to provide actionable environmental
              insights for urban planning, agriculture, and climate resilience.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://urban-ai.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-[14px] leading-none transition-all"
              >
                <BarChart3 className="size-4" />
                Launch Live App
                <ArrowRight className="size-4" />
              </a>
              <a
                href="https://github.com/AdeelAtta/urban_planner_tool"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[8px] border px-6 py-3.5 text-[14px] font-medium leading-none transition-colors hover:opacity-80"
                style={{ borderColor: "var(--clr-hairline)", color: "var(--clr-ink)" }}
              >
                <Globe className="size-4" />
                View on GitHub
              </a>
              <a
                href={HACKATHON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[8px] border px-6 py-3.5 text-[14px] font-medium leading-none transition-colors hover:opacity-80"
                style={{ borderColor: "var(--clr-hairline)", color: "var(--clr-ink)" }}
              >
                <Linkedin className="size-4" />
                Hackathon Post
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
              { icon: Database, value: "NASA POWER", label: "Meteorological Data" },
              { icon: Cloud, value: "40+ Years", label: "Historical Climate Data" },
              { icon: MapPin, value: "Global", label: "Geographic Coverage" },
              { icon: TreePine, value: "AI-Powered", label: "GPT-4 Insights" },
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
                Built for the Pak-Angels Gen AI Hackathon
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65]" style={{ color: "var(--clr-body)" }}>
                This tool processes multi-variable NASA POWER meteorological datasets to provide
                environmental and urban metrics. By combining satellite-derived climate data with
                GPT-4&apos;s natural language capabilities, it enables researchers, urban planners,
                and policymakers to query complex environmental data using plain English.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Automated parsing of NASA POWER API responses",
                  "GPT-4 powered natural language query interface",
                  "Real-time environmental metrics generation",
                  "Interactive visualizations and data export",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px]">
                    <span className="mt-1 block size-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--clr-emerald)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glow rounded-[16px] border p-8" style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-card)" }}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full" style={{ backgroundColor: "var(--clr-rose)" }} />
                  <span className="size-2.5 rounded-full" style={{ backgroundColor: "var(--clr-amber)" }} />
                  <span className="size-2.5 rounded-full" style={{ backgroundColor: "var(--clr-emerald)" }} />
                </div>
                <span className="text-[12px] font-medium" style={{ color: "var(--clr-muted)" }}>API Query — NASA POWER</span>
              </div>
              <pre className="text-[13px] leading-[1.6]" style={{ color: "var(--clr-body)" }}>
                <span style={{ color: "var(--clr-muted)" }}>// Fetching temperature & precipitation data</span>{"\n"}
                <span style={{ color: "var(--clr-accent)" }}>GET</span> https://power.larc.nasa.gov/api/temporal/monthly/point?{"\n"}
                &nbsp;&nbsp;parameters=TS,T2M,PRECTOTCORR{"\n"}
                &nbsp;&nbsp;community=RE{"\n"}
                &nbsp;&nbsp;latitude=24.86{"\n"}
                &nbsp;&nbsp;longitude=67.00{"\n"}
                &nbsp;&nbsp;start=2020{"\n"}
                &nbsp;&nbsp;end=2024{"\n"}
                &nbsp;&nbsp;format=JSON{"\n"}
                <span style={{ color: "var(--clr-muted)" }}>{"\n"}// GPT-4 generates insights from the response</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tech Stack ─── */}
      <section style={{ backgroundColor: "var(--clr-space-light)" }} className="py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-accent)" }}>
              Tech Stack
            </p>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
              Built with modern AI infrastructure
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "NASA POWER API", desc: "Satellite-derived meteorological datasets — temperature, precipitation, solar radiation, and more." },
              { title: "GPT-4 (OpenAI)", desc: "Natural language understanding for querying complex environmental data in plain English." },
              { title: "Streamlit", desc: "Interactive Python-based frontend for real-time data visualization and exploration." },
              { title: "Python Analytics", desc: "Pandas, NumPy, and custom analytical pipelines for environmental metric computation." },
            ].map((t) => (
              <div key={t.title} className="rounded-[12px] border p-6" style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-card)" }}>
                <h3 className="text-[15px] font-semibold" style={{ color: "var(--clr-ink)" }}>{t.title}</h3>
                <p className="mt-2 text-[13px]" style={{ color: "var(--clr-body)" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-accent)" }}>
              Capabilities
            </p>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
              What the tool can do
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: Database, title: "Climate Data Analysis", desc: "Parse and analyze 40+ years of NASA POWER meteorological data for any global location." },
              { icon: BarChart3, title: "Urban Metrics Generation", desc: "Generate actionable environmental metrics for urban planning and climate resilience." },
              { icon: Cloud, title: "Natural Language Queries", desc: "Ask questions in plain English — GPT-4 translates them into structured data analysis." },
            ].map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="glow rounded-[16px] border p-8 text-center" style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-card)" }}>
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-[10px]" style={{ backgroundColor: "rgba(79, 195, 247, 0.15)" }}>
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

      {/* ─── CTA ─── */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="glow rounded-[20px] border px-8 py-16 text-center" style={{ borderColor: "rgba(79, 195, 247, 0.2)", backgroundColor: "var(--clr-card)" }}>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[36px]" style={{ color: "var(--clr-ink)" }}>
              Explore environmental data for any location
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px]" style={{ color: "var(--clr-body)" }}>
              Try the live app and discover how AI can make NASA climate data accessible to everyone.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://urban-ai.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-[14px] leading-none"
              >
                Launch Live App
                <ArrowRight className="size-4" />
              </a>
              <a
                href="https://github.com/AdeelAtta/urban_planner_tool"
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
              Built for{" "}
              <span className="font-semibold" style={{ color: "var(--clr-ink)" }}>Pak-Angels Gen AI Hackathon</span>
              {" "}by{" "}
              <a href="/" className="transition-opacity hover:opacity-80" style={{ color: "var(--clr-accent)" }}>
                Adeel Atta
              </a>
            </p>
            <div className="flex gap-5">
              <a href="https://urban-ai.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                Live App
              </a>
              <span style={{ color: "var(--clr-muted)" }}>/</span>
              <a href="https://github.com/AdeelAtta/urban_planner_tool" target="_blank" rel="noopener noreferrer" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                GitHub
              </a>
              <span style={{ color: "var(--clr-muted)" }}>/</span>
              <a href={HACKATHON_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                Hackathon Post
              </a>
              <span style={{ color: "var(--clr-muted)" }}>/</span>
              <a href="https://power.larc.nasa.gov/" target="_blank" rel="noopener noreferrer" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                NASA POWER
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
