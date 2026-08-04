import type { Metadata } from "next"
import { ArrowRight, Github, MessageSquare, Sparkles, Linkedin, Globe, Zap, Brain, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Personify Chat Assistant | AI-Powered Messaging for WhatsApp & LinkedIn",
  description:
    "Chrome extension providing AI-powered real-time messaging suggestions across WhatsApp Web and LinkedIn. Built with Llama 3.",
  metadataBase: new URL("https://adeelatta.dev"),
  authors: [{ name: "Adeel Atta" }],
  keywords: [
    "AI chat assistant", "WhatsApp AI", "LinkedIn AI", "messaging suggestions",
    "Llama 3", "Chrome extension", "AI reply", "smart messaging",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://adeelatta.dev/personify-chat-assistant" },
  openGraph: {
    title: "Personify Chat Assistant",
    description: "AI-powered real-time messaging suggestions across WhatsApp Web and LinkedIn. Built with Llama 3.",
    url: "https://adeelatta.dev/personify-chat-assistant",
    siteName: "Projects by Adeel Atta",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://adeelatta.dev/images/design-mode/profile.webp", width: 400, height: 400, alt: "Adeel Atta profile photo" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://adeelatta.dev/images/design-mode/profile.webp"],
    title: "Personify Chat Assistant",
    description: "AI-powered real-time messaging suggestions across WhatsApp Web and LinkedIn. Built with Llama 3.",
  },
}

const GITHUB_URL = "https://github.com/SameerVers3/Chat-Evaluator-llama3-hackathon"
const LIVE_URL = "https://chromewebstore.google.com/detail/personify-ai-chat-assista/dfokiabcgalihnedbbjbkdfhjeokdpne"

export default function PersonifyPage() {
  return (
    <div className="pf">
      <style>{`
        .pf {
          --clr-primary: #6c3fc3;
          --clr-primary-light: #8b5cf6;
          --clr-primary-soft: #f3e8ff;
          --clr-accent: #f59e0b;
          --clr-canvas: #ffffff;
          --clr-surface: #faf5ff;
          --clr-card: #ffffff;
          --clr-ink: #1c1c1e;
          --clr-body: #4b5563;
          --clr-muted: #6b7280;
          --clr-hairline: #e5e7eb;
          --clr-whatsapp: #25d366;
          --clr-linkedin: #0a66c2;
          font-family: "Inter", system-ui, -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.55;
          background-color: var(--clr-canvas);
          color: var(--clr-body);
        }
        .pf * { font-family: inherit; }
        .pf h1, .pf h2, .pf h3, .pf h4 { letter-spacing: normal; }
        .pf .btn-primary { background-color: var(--clr-primary); color: #fff; border-radius: 8px; font-weight: 600; }
        .pf .btn-primary:hover { background-color: var(--clr-primary-light); }
        .pf .btn-secondary { background-color: transparent; color: var(--clr-ink); border: 1px solid var(--clr-hairline); border-radius: 8px; font-weight: 500; }
        .pf .card { background-color: var(--clr-card); border: 1px solid var(--clr-hairline); border-radius: 16px; }
      `}</style>

      {/* ─── Structured Data ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Personify Chat Assistant",
            applicationCategory: "BrowserApplication",
            operatingSystem: "Chrome",
            url: "https://adeelatta.dev/personify-chat-assistant",
            description:
              "AI-powered real-time messaging suggestions across WhatsApp Web and LinkedIn. Chrome extension built with Llama 3.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            author: { "@type": "Person", name: "Adeel Atta", url: "https://adeelatta.dev" },
          }),
        }}
      />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--clr-primary-soft) 0%, #ede9fe 50%, var(--clr-primary-soft) 100%)" }}>
        <div className="relative mx-auto max-w-[1200px] px-8 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[1px]" style={{ backgroundColor: "var(--clr-primary)", color: "#fff" }}>
              <Sparkles className="size-3.5" />
              AI Chat Assistant — Chrome Extension
            </div>
            <h1 className="text-[36px] font-bold leading-[1.15] tracking-[-1px] md:text-[52px]" style={{ color: "var(--clr-ink)" }}>
              <span style={{ color: "var(--clr-primary)" }}>Personify</span> Chat Assistant
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.65]" style={{ color: "var(--clr-body)" }}>
              AI-powered real-time messaging suggestions across WhatsApp Web and LinkedIn.
              Built with Llama 3 to help you craft better responses in seconds.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-[14px] leading-none transition-all">
                <Globe className="size-4" />
                Install Extension
                <ArrowRight className="size-4" />
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 text-[14px] leading-none transition-all">
                <Github className="size-4" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Platforms ─── */}
      <section className="border-y py-12" style={{ borderColor: "var(--clr-hairline)" }}>
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { icon: MessageSquare, label: "WhatsApp Web", sub: "Real-time suggestions", color: "var(--clr-whatsapp)" },
              { icon: Linkedin, label: "LinkedIn", sub: "Professional replies", color: "var(--clr-linkedin)" },
              { icon: Brain, label: "Llama 3", sub: "AI-powered responses", color: "var(--clr-primary)" },
            ].map((p) => {
              const Icon = p.icon
              return (
                <div key={p.label} className="flex items-center gap-3">
                  <Icon className="size-8" style={{ color: p.color }} />
                  <div>
                    <p className="text-[15px] font-semibold" style={{ color: "var(--clr-ink)" }}>{p.label}</p>
                    <p className="text-[13px]" style={{ color: "var(--clr-muted)" }}>{p.sub}</p>
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
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-primary)" }}>
                About the Project
              </p>
              <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
                Smarter messaging, powered by AI
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65]" style={{ color: "var(--clr-body)" }}>
                Personify is a Chrome extension that integrates directly into WhatsApp Web and
                LinkedIn to provide AI-generated message suggestions in real time. Built during
                the Llama 3 Hackathon on lablab.ai, it uses the Llama 3 model to understand
                conversation context and suggest relevant, natural responses.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Real-time AI suggestions as you type",
                  "Context-aware response generation",
                  "Works across WhatsApp Web and LinkedIn",
                  "Built with Llama 3 for natural language understanding",
                  "Seamless Chrome extension integration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px]">
                    <span className="mt-1.5 block size-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--clr-primary)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-8">
              <div className="mb-4 flex items-center gap-3">
                <MessageSquare className="size-5" style={{ color: "var(--clr-whatsapp)" }} />
                <span className="text-[13px] font-semibold" style={{ color: "var(--clr-ink)" }}>How it works</span>
              </div>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Open WhatsApp Web or LinkedIn", desc: "Navigate to any conversation." },
                  { step: "2", title: "Type your message", desc: "Personify analyzes the conversation context." },
                  { step: "3", title: "Get AI suggestions", desc: "Llama 3 generates relevant response options." },
                  { step: "4", title: "One-click reply", desc: "Select the best suggestion and send." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-3">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold" style={{ backgroundColor: "var(--clr-primary-soft)", color: "var(--clr-primary)" }}>
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
      <section style={{ backgroundColor: "var(--clr-surface)" }} className="py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-primary)" }}>
              Features
            </p>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
              What Personify does
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Zap, title: "Real-Time Suggestions", desc: "Get AI-generated message suggestions instantly as you type or respond." },
              { icon: Brain, title: "Context-Aware AI", desc: "Llama 3 understands conversation history and suggests relevant replies." },
              { icon: Shield, title: "Privacy First", desc: "Runs locally in your browser. Your conversations stay private." },
            ].map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="card p-8 text-center">
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-[10px]" style={{ backgroundColor: "var(--clr-primary-soft)" }}>
                    <Icon className="size-6" style={{ color: "var(--clr-primary)" }} />
                  </div>
                  <h3 className="text-[16px] font-semibold" style={{ color: "var(--clr-ink)" }}>{f.title}</h3>
                  <p className="mt-2 text-[13px]" style={{ color: "var(--clr-body)" }}>{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Built For ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-primary)" }}>
              Hackathon
            </p>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
              Built for Llama 3 Hackathon
            </h2>
            <p className="mt-4 text-[15px]" style={{ color: "var(--clr-body)" }}>
              Developed as part of the Llama 3 Hackathon on lablab.ai, Personify demonstrates
              the power of open-source LLMs for real-world communication assistance.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="https://lablab.ai/u/@AdeelAtta/cm0fh22ag007me7ihgfyrouj7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-[13px] leading-none"
            >
              <Globe className="size-3.5" />
              View on lablab.ai
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[20px] px-8 py-16 text-center" style={{ backgroundColor: "var(--clr-primary)", color: "#fff" }}>
            <Sparkles className="mx-auto mb-4 size-10 opacity-90" />
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[36px]">
              Explore the source code
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] opacity-80">
              Full source code, extension build instructions, and Llama 3 integration details on GitHub.
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-[8px] px-6 py-3.5 text-[14px] font-semibold leading-none transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#fff", color: "var(--clr-primary)" }}
            >
              <Github className="size-4" />
              View on GitHub
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
              Built with <span style={{ color: "var(--clr-primary)" }}>Llama 3</span> by{" "}
              <a href="/" className="transition-opacity hover:opacity-80" style={{ color: "var(--clr-ink)" }}>
                Adeel Atta
              </a>
            </p>
            <div className="flex gap-5">
              <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                Chrome Web Store
              </a>
              <span style={{ color: "var(--clr-muted)" }}>/</span>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                <Github className="size-3.5" />
                Source Code
              </a>
              <span style={{ color: "var(--clr-muted)" }}>/</span>
              <a href="https://llama.meta.com" target="_blank" rel="noopener noreferrer" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                Llama 3
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
