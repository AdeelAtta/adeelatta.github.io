import type { Metadata } from "next"
import { ArrowRight, CheckCircle, Database, Zap, Shield, BookOpen, GitBranch, BarChart3, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "SchemaIntern – DB-Aware NL to SQL | Natural Language to SQL Queries",
  description:
    "Schema-aware natural language to SQL. Connect your database and ask questions in plain English. SchemaIntern knows your schema and generates accurate, safe SQL.",
  metadataBase: new URL("https://adeelatta.dev"),
  authors: [{ name: "Adeel Atta" }],
  keywords: [
    "NL to SQL", "natural language to SQL", "AI SQL generator", "schema-aware SQL",
    "database query tool", "text to SQL", "AI database assistant", "PostgreSQL AI", "MySQL AI query",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://adeelatta.dev/schema-intern-nl-to-sql" },
  openGraph: {
    title: "SchemaIntern – DB-Aware NL to SQL",
    description: "Connect your database and ask questions in plain English. SchemaIntern knows your schema and generates accurate, safe SQL.",
    url: "https://adeelatta.dev/schema-intern-nl-to-sql",
    siteName: "SchemaIntern by Adeel Atta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SchemaIntern – DB-Aware NL to SQL",
    description: "Connect your database and ask questions in plain English. SchemaIntern generates accurate, safe SQL.",
  },
}

const DEMO_URL = "https://nl-2-analytics.vercel.app/auth/login"
const API_URL = "https://schemaintern-backend.onrender.com/docs"

const features = [
  { icon: Database, title: "Connect Any Database", desc: "PostgreSQL, MySQL, Snowflake, BigQuery — SchemaIntern discovers your schema automatically. No manual YAML or config files." },
  { icon: Zap, title: "Ask in Plain English", desc: 'Type "Show me revenue by month for 2026" and get the SQL instantly. No more waiting for engineering tickets.' },
  { icon: GitBranch, title: "Self-Learning Engine", desc: "A Knowledge Engine that learns from your schema and query patterns. The more you use it, the smarter it gets." },
  { icon: Shield, title: "Enterprise Security", desc: "Role-based access, query validation before execution, and full audit logging. Safe for production databases." },
  { icon: BarChart3, title: "Smart Query Planning", desc: "AI plans optimal query strategies, validates SQL syntax, and enforces enterprise policies before execution." },
  { icon: BookOpen, title: "Learn From Feedback", desc: "Every query and correction feeds back into the engine. SchemaIntern improves with each interaction." },
]

const pipeline = [
  { label: "Schema Discovery", desc: "Auto-detect tables, columns, relations" },
  { label: "Context Retrieval", desc: "Knowledge Engine finds relevant schema" },
  { label: "Query Planning", desc: "AI plans optimal query strategy" },
  { label: "SQL Generation", desc: "Generate validated SQL" },
  { label: "Security Check", desc: "Enforce policies & validate" },
  { label: "Execution", desc: "Run & learn from feedback" },
]

const howItWorks = [
  { step: 1, title: "Register & Connect", desc: "Create an account and connect your database. SchemaIntern discovers schema automatically." },
  { step: 2, title: "Ask in Natural Language", desc: "Type your question in plain English. The AI retrieves relevant context from the Knowledge Engine." },
  { step: 3, title: "Review Generated SQL", desc: "SchemaIntern generates, validates, and shows you the SQL before execution." },
  { step: 4, title: "Execute & Learn", desc: "Run the query safely. Feedback improves the engine for future queries." },
]

const faqs = [
  { q: "What databases does SchemaIntern support?", a: "PostgreSQL, MySQL, Snowflake, and BigQuery. More databases are being added." },
  { q: "Is my data secure?", a: "Yes. SchemaIntern enforces role-based access, validates every query before execution, and maintains full audit logs." },
  { q: "Do I need to define my schema manually?", a: "No. SchemaIntern discovers your schema automatically — no YAML files, no manual configuration." },
  { q: "How does the Knowledge Engine work?", a: "It learns from your schema structure, query patterns, and user feedback. Each interaction improves accuracy." },
  { q: "Is there a free tier?", a: "Register for free at nl-2-analytics.vercel.app and start querying." },
  { q: "Can I use it with production databases?", a: "Yes. Enterprise security policies, query validation, and role-based access make it safe for production use." },
]

export default function SchemaInternPage() {
  return (
    <div className="si">
      <style>{`
        .si {
          --clr-yellow: #ffd02f;
          --clr-yellow-light: #fff4c4;
          --clr-blue: #4262ff;
          --clr-coral: #ffc6c6;
          --clr-rose: #fde0f0;
          --clr-teal: #c3faf5;
          --clr-canvas: #ffffff;
          --clr-surface: #f7f8fa;
          --clr-surface-soft: #fafbfc;
          --clr-ink: #1c1c1e;
          --clr-ink-deep: #050038;
          --clr-slate: #555a6a;
          --clr-steel: #6b6f7e;
          --clr-muted: #a5a8b5;
          --clr-hairline: #e0e2e8;
          --clr-hairline-soft: #eef0f3;
          --clr-hairline-strong: #c7cad5;
          --clr-on-dark: #ffffff;
          --clr-on-dark-muted: #a5a8b5;
          --clr-footer: #1c1c1e;
          font-family: "Noto Sans", system-ui, -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.5;
          background-color: var(--clr-canvas);
          color: var(--clr-slate);
        }
        .si * { font-family: inherit; }
        .si h1, .si h2, .si h3, .si h4 { letter-spacing: normal; }
        .si .btn-primary { background-color: var(--clr-ink); color: var(--clr-on-dark); border-radius: 9999px; }
        .si .btn-primary:hover { background-color: #2c2c34; }
        .si .btn-secondary { background-color: transparent; color: var(--clr-ink); border: 1px solid var(--clr-hairline-strong); border-radius: 9999px; }
        .si .btn-secondary:hover { background-color: var(--clr-surface); }
        .si .btn-on-dark { background-color: var(--clr-on-dark); color: var(--clr-ink); border-radius: 9999px; }
        .si .card-pastel { border-radius: 28px; padding: 32px; }
        .si .card-pastel-yellow { background-color: var(--clr-yellow); color: var(--clr-ink); }
        .si .card-pastel-coral { background-color: var(--clr-coral); color: var(--clr-ink); }
        .si .card-pastel-teal { background-color: var(--clr-teal); color: var(--clr-ink); }
        .si .card-pastel-rose { background-color: var(--clr-rose); color: var(--clr-ink); }
        .si .card-white { background-color: var(--clr-canvas); border: 1px solid var(--clr-hairline-soft); border-radius: 28px; padding: 32px; }
        .si .card-white:hover { box-shadow: rgba(5,0,56,0.06) 0px 4px 12px 0px; }
        @media (prefers-reduced-motion: no-preference) {
          .si .float { animation: float 6s ease-in-out infinite; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      {/* ─── Hero ─── */}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-8 py-[120px]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mx-auto max-w-xl text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.5px]" style={{ backgroundColor: "var(--clr-yellow)", color: "var(--clr-ink)" }}>
                <Zap className="size-3.5" />
                DB-Aware NL to SQL
              </div>
              <h1 className="text-[40px] font-medium leading-[1.05] tracking-[-2px] md:text-[60px] lg:text-[80px]" style={{ color: "var(--clr-ink)" }}>
                Ask in English.<br />
                Get <span style={{ color: "var(--clr-blue)" }}>SQL</span> Instantly.
              </h1>
              <p className="mt-5 text-[18px] leading-[1.5]" style={{ color: "var(--clr-slate)" }}>
                SchemaIntern knows your database schema and generates accurate, safe SQL from natural language.
                No more waiting for engineering tickets.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-[14px] font-medium leading-[1.3] transition-colors">
                  Try Live Demo
                  <ArrowRight className="size-4" />
                </a>
                <a href="#how-it-works" className="btn-secondary inline-flex items-center gap-2 px-6 py-3 text-[14px] font-medium leading-[1.3] transition-colors">
                  How It Works
                </a>
              </div>

            </div>

            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-lg rounded-[16px] border float" style={{ backgroundColor: "var(--clr-canvas)", borderColor: "var(--clr-hairline-soft)", boxShadow: "rgba(5, 0, 56, 0.08) 0px 12px 32px -4px" }}>
                <div className="flex items-center gap-2 border-b px-5 py-3" style={{ borderColor: "var(--clr-hairline-soft)" }}>
                  <div className="flex gap-1.5">
                    <span className="size-2.5 rounded-full" style={{ backgroundColor: "#ff9999" }} />
                    <span className="size-2.5 rounded-full" style={{ backgroundColor: "#ffd02f" }} />
                    <span className="size-2.5 rounded-full" style={{ backgroundColor: "#00b473" }} />
                  </div>
                  <span className="ml-3 text-[12px] font-medium" style={{ color: "var(--clr-steel)" }}>Query — SchemaIntern</span>
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3 pb-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold" style={{ backgroundColor: "var(--clr-yellow)", color: "var(--clr-ink)" }}>U</span>
                    <div className="rounded-[12px] px-4 py-2.5 text-[14px]" style={{ backgroundColor: "var(--clr-surface)" }}>
                      Show me monthly revenue for 2026
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold" style={{ backgroundColor: "var(--clr-blue)", color: "#fff" }}>AI</span>
                    <div className="rounded-[12px] px-4 py-2.5 text-[13px] leading-[1.55]" style={{ backgroundColor: "var(--clr-surface-soft)" }}>
                      <pre className="font-[inherit] text-[inherit]" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
<span style={{ color: "var(--clr-steel)" }}>-- Generated SQL</span>{"\n"}
<span style={{ color: "var(--clr-blue)" }}>SELECT</span> DATE_TRUNC(<span style={{ color: "#00b473" }}>'month'</span>, o.created_at) <span style={{ color: "var(--clr-blue)" }}>AS</span> month,{"\n"}
  <span style={{ color: "var(--clr-blue)" }}>SUM</span>(oi.quantity * oi.unit_price) <span style={{ color: "var(--clr-blue)" }}>AS</span> revenue{"\n"}
<span style={{ color: "var(--clr-blue)" }}>FROM</span> orders o{"\n"}
<span style={{ color: "var(--clr-blue)" }}>JOIN</span> order_items oi <span style={{ color: "var(--clr-blue)" }}>ON</span> o.id = oi.order_id{"\n"}
<span style={{ color: "var(--clr-blue)" }}>WHERE</span> o.created_at &gt;= <span style={{ color: "#00b473" }}>'2026-01-01'</span>{"\n"}
  <span style={{ color: "var(--clr-blue)" }}>AND</span> o.created_at &lt; <span style={{ color: "#00b473" }}>'2027-01-01'</span>{"\n"}
<span style={{ color: "var(--clr-blue)" }}>GROUP BY</span> month{"\n"}
<span style={{ color: "var(--clr-blue)" }}>ORDER BY</span> month;
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pastel Feature Cards ─── */}
      <section style={{ backgroundColor: "var(--clr-surface)" }} className="py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.5px]" style={{ color: "var(--clr-steel)" }}>
              Features
            </p>
            <h2 className="text-[36px] font-medium leading-[1.2] tracking-[-0.5px] md:text-[48px]" style={{ color: "var(--clr-ink)" }}>
              Built for modern data teams
            </h2>
            <p className="mt-4 text-[16px]" style={{ color: "var(--clr-slate)" }}>
              SchemaIntern combines schema discovery, AI query generation, and enterprise security.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon
              const pastelCard = ["card-pastel-yellow", "card-pastel-coral", "card-pastel-teal", "card-pastel-rose", "card-pastel-yellow", "card-pastel-coral"][i]
              return (
                <div key={f.title} className={`card-pastel ${pastelCard}`}>
                  <div className="mb-4 flex size-11 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(28,28,30,0.08)" }}>
                    <Icon className="size-5" style={{ color: "var(--clr-ink)" }} />
                  </div>
                  <h3 className="text-[18px] font-medium leading-[1.4]" style={{ color: "var(--clr-ink)" }}>
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.5]">
                    {f.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Pipeline ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.5px]" style={{ color: "var(--clr-steel)" }}>
              Architecture
            </p>
            <h2 className="text-[36px] font-medium leading-[1.2] tracking-[-0.5px] md:text-[48px]" style={{ color: "var(--clr-ink)" }}>
              End-to-end query pipeline
            </h2>
            <p className="mt-4 text-[16px]" style={{ color: "var(--clr-slate)" }}>
              From natural language to safe SQL execution in six steps.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-6">
            {pipeline.map((step, i) => (
              <div key={step.label} className="text-center">
                <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-full text-[14px] font-semibold" style={{ backgroundColor: "var(--clr-yellow)", color: "var(--clr-ink)" }}>
                  {i + 1}
                </div>
                <h3 className="text-[14px] font-medium leading-[1.4]" style={{ color: "var(--clr-ink)" }}>{step.label}</h3>
                <p className="mt-1 text-[13px]" style={{ color: "var(--clr-steel)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" style={{ backgroundColor: "var(--clr-surface)" }} className="py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.5px]" style={{ color: "var(--clr-steel)" }}>
              How It Works
            </p>
            <h2 className="text-[36px] font-medium leading-[1.2] tracking-[-0.5px] md:text-[48px]" style={{ color: "var(--clr-ink)" }}>
              Get started in minutes
            </h2>
            <p className="mt-4 text-[16px]" style={{ color: "var(--clr-slate)" }}>
              Register, connect your database, and start querying in natural language.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {howItWorks.map((item) => (
              <div key={item.step} className="card-white text-center">
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full text-[20px] font-semibold" style={{ backgroundColor: "var(--clr-yellow)", color: "var(--clr-ink)" }}>
                  {item.step}
                </div>
                <h3 className="text-[16px] font-medium leading-[1.4]" style={{ color: "var(--clr-ink)" }}>{item.title}</h3>
                <p className="mt-2 text-[14px]" style={{ color: "var(--clr-slate)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-[1280px] rounded-[32px] px-8 py-20 text-center md:px-16" style={{ backgroundColor: "var(--clr-ink)" }}>
          <h2 className="text-[28px] font-medium leading-[1.15] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-on-dark)" }}>
            Ready to query your database in plain English?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px]" style={{ color: "var(--clr-on-dark-muted)" }}>
            Register free at nl-2-analytics.vercel.app and connect your database in minutes.
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-on-dark mt-8 inline-flex items-center gap-2 px-6 py-3 text-[14px] font-medium leading-[1.3] transition-colors"
          >
            Try SchemaIntern Free
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ backgroundColor: "var(--clr-surface)" }} className="py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.5px]" style={{ color: "var(--clr-steel)" }}>
              FAQ
            </p>
            <h2 className="text-[36px] font-medium leading-[1.2] tracking-[-0.5px] md:text-[48px]" style={{ color: "var(--clr-ink)" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto mt-14 max-w-2xl space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="overflow-hidden rounded-[8px]" style={{ borderBottom: "1px solid var(--clr-hairline)" }}>
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-[16px] font-medium leading-[1.4] transition-colors hover:opacity-80" style={{ color: "var(--clr-ink)" }}>
                  {faq.q}
                  <span className="text-[20px] font-medium" style={{ color: "var(--clr-yellow)" }}>+</span>
                </summary>
                <div className="px-6 pb-5 text-[14px]" style={{ color: "var(--clr-slate)" }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="px-8 py-16" style={{ backgroundColor: "var(--clr-footer)" }}>
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-[14px]" style={{ color: "var(--clr-on-dark-muted)" }}>
              &copy; {new Date().getFullYear()} SchemaIntern by{" "}
              <a href="https://adeelatta.dev" className="transition-opacity hover:opacity-80" style={{ color: "var(--clr-on-dark)" }}>
                Adeel Atta
              </a>
            </p>
            <div className="flex gap-5">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] transition-colors hover:opacity-80" style={{ color: "var(--clr-on-dark-muted)" }}>
                Live Demo
              </a>
              <span style={{ color: "var(--clr-on-dark-muted)" }}>/</span>
              <a href={API_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] transition-colors hover:opacity-80" style={{ color: "var(--clr-on-dark-muted)" }}>
                API
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
