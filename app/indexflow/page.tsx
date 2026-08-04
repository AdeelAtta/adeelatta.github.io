import type { Metadata } from "next"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Globe,
  List,
  MousePointerClick,
  Settings,
  Upload,
  Youtube,
} from "lucide-react"
import IndexFlowFAQ from "@/components/indexflow-faq"

export const metadata: Metadata = {
  title: "IndexFlow – Brave Search Indexer | Bulk Submit URLs to Brave",
  description:
    "Automate URL submission to Brave Search. Upload XML sitemaps, fetch sitemap URLs, or paste links. IndexFlow submits each URL one by one for faster indexing.",
  metadataBase: new URL("https://adeelatta.dev"),
  authors: [{ name: "Adeel Atta" }],
  keywords: [
    "Brave Search indexer",
    "Brave Search URL submit",
    "submit sitemap to Brave",
    "Brave Search indexing tool",
    "bulk URL submit Brave",
    "Brave Search SEO",
    "sitemap submission Brave",
    "IndexFlow extension",
    "Chrome extension Brave indexer",
    "Brave Search API alternative",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://adeelatta.dev/indexflow" },
  openGraph: {
    title: "IndexFlow – Brave Search Indexer",
    description:
      "Automate URL submission to Brave Search. Upload XML sitemaps, fetch sitemap URLs, or paste links. Submit hundreds of URLs in minutes.",
    url: "https://adeelatta.dev/indexflow",
    siteName: "IndexFlow by Adeel Atta",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://adeelatta.dev/indexflow/promo.png", width: 1200, height: 630, alt: "IndexFlow – Brave Search Indexer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IndexFlow – Brave Search Indexer",
    description: "Automate URL submission to Brave Search. Submit hundreds of URLs in minutes.",
    images: ["https://adeelatta.dev/indexflow/promo.png"],
  },
}

const CWS_URL =
  "https://chromewebstore.google.com/detail/fnbkmgoajgklgkmoiccdmfbdpnmmhgod"

const features = [
  {
    icon: Upload,
    title: "Three Input Methods",
    description:
      "Upload XML files, fetch sitemaps from any URL, or paste URLs manually. IndexFlow handles all formats.",
  },
  {
    icon: MousePointerClick,
    title: "Automated Submission",
    description:
      "Each URL is submitted one by one with automatic retry if Brave returns a 'Try Again' response.",
  },
  {
    icon: Clock,
    title: "Live Progress Tracking",
    description:
      "Real-time progress bar, percentage complete, and per-URL status indicators keep you informed.",
  },
  {
    icon: List,
    title: "Session History",
    description:
      "Every indexing session is saved locally with search, filters, and detailed results for future reference.",
  },
  {
    icon: Settings,
    title: "Customizable Settings",
    description:
      "Adjust delay between submissions, retry count, toggle desktop notifications, or enable auto-close.",
  },
  {
    icon: CheckCircle,
    title: "No Account Needed",
    description:
      "No login, no sign-up, no data collection. IndexFlow runs entirely in your browser with zero telemetry.",
  },
]

const howItWorks = [
  { step: 1, title: "Choose Your Input", description: "Select your input method: Upload XML, Sitemap URL, or Paste URLs." },
  { step: 2, title: "Parse & Start", description: "Click 'Parse & Start' to extract all URLs from your sitemap or list." },
  { step: 3, title: "Automated Submission", description: "IndexFlow opens Brave Search's submission page for each URL, fills the form, and submits." },
  { step: 4, title: "Automatic Retry", description: "If Brave returns 'Try Again', IndexFlow automatically retries the submission." },
  { step: 5, title: "Completion & Summary", description: "A summary screen and desktop notification appear with full results." },
]

const faqs = [
  { q: "What is IndexFlow?", a: "A Chrome extension that automates submitting URLs to Brave Search. Instead of manually copying URLs one by one, IndexFlow handles the entire process automatically." },
  { q: "Is IndexFlow free?", a: "Yes, completely free. No hidden charges, premium tiers, or usage limits." },
  { q: "What input formats are supported?", a: "Three methods: upload an XML sitemap file, fetch a sitemap from any URL, or paste a list of URLs manually." },
  { q: "Does IndexFlow store my data?", a: "No. It runs entirely in your browser. No data is sent to any server except Brave Search's official submission endpoint." },
  { q: "How many URLs can I submit at once?", a: "No hard limit. IndexFlow handles sitemaps with hundreds or thousands of URLs." },
  { q: "What happens if a submission fails?", a: "IndexFlow automatically retries based on your configured retry count. Failed URLs are marked in session history." },
  { q: "Does it work with other search engines?", a: "Currently designed specifically for Brave Search's official URL submission endpoint." },
  { q: "How do I install it?", a: "Visit the Chrome Web Store page and click 'Add to Chrome'. No account or configuration required." },
]

const changelog = [
  { version: "1.0.0", date: "July 29, 2026", changes: ["Initial release", "Support for XML upload, sitemap URL, and paste input", "Automated URL submission with retry logic", "Live progress tracking with status indicators", "Session history with search and filters", "Customizable delay and retry settings", "Desktop notifications on completion"] },
]

export default function IndexFlowPage() {
  return (
    <div className="idx" style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>
      <style>{`
        .idx {
          --clr-green: #00ed64;
          --clr-green-dark: #00684a;
          --clr-green-soft: #c3f0d2;
          --clr-teal-deep: #001e2b;
          --clr-teal: #003d4f;
          --clr-teal-mid: #00684a;
          --clr-canvas: #ffffff;
          --clr-surface: #f9fbfa;
          --clr-surface-soft: #f4f7f6;
          --clr-surface-feature: #e3fcef;
          --clr-hairline: #e1e5e8;
          --clr-hairline-soft: #eceff1;
          --clr-ink: #001e2b;
          --clr-charcoal: #1c2d38;
          --clr-slate: #3d4f5b;
          --clr-steel: #5c6c7a;
          --clr-stone: #7c8c9a;
          --clr-muted: #a8b3bc;
          --clr-on-dark: #ffffff;
          --clr-on-dark-muted: #a8b3bc;
          font-family: Inter, system-ui, -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.55;
        }
        .idx * { font-family: inherit; }
        .idx h1, .idx h2, .idx h3, .idx h4, .idx h5, .idx h6 { letter-spacing: normal; }
        @media (prefers-reduced-motion: no-preference) {
          .idx .float { animation: float 6s ease-in-out infinite; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .idx .btn-primary { background-color: var(--clr-green); color: var(--clr-teal-deep); }
        .idx .btn-primary:hover { background-color: #008c34; }
        .idx .btn-secondary-outline { border-color: var(--clr-on-dark-muted); color: var(--clr-on-dark); }
        .idx .btn-secondary-outline:hover { border-color: #fff; color: #fff; }
        .idx .card-hover { background-color: var(--clr-canvas); border-color: var(--clr-hairline); }
        .idx .card-hover:hover { box-shadow: rgba(0, 30, 43, 0.08) 0px 4px 12px 0px; }
        .idx .link-muted { color: var(--clr-on-dark-muted); }
        .idx .link-muted:hover { color: var(--clr-on-dark); }
      `}</style>

      {/* ─── Structured Data ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "IndexFlow – Brave Search Indexer",
            applicationCategory: "BrowserApplication",
            operatingSystem: "Chrome",
            url: "https://adeelatta.dev/indexflow",
            description:
              "Chrome extension that automates bulk URL submission to Brave Search. Upload XML sitemaps, fetch sitemap URLs, or paste links.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            author: { "@type": "Person", name: "Adeel Atta", url: "https://adeelatta.dev" },
          }),
        }}
      />

      {/* ─── Hero ─── */}
      <section style={{ backgroundColor: "var(--clr-teal-deep)" }} className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-8 py-30 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mx-auto max-w-xl text-center lg:text-left">
              <img src="/indexflow/icon128.png" alt="IndexFlow" className="rounded-sm mx-auto mb-6 size-12 lg:mx-0" />
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-green)" }}>
                <Globe className="mr-1.5 inline-block size-3.5" />
                Brave Search Indexing Tool
              </p>
              <h1 className="text-[40px] font-medium leading-[1.10] tracking-[-1.5px] md:text-[56px] lg:text-[72px]" style={{ color: "var(--clr-on-dark)" }}>
                Submit URLs to{" "}
                <span style={{ color: "var(--clr-green)" }}>Brave Search</span> in Bulk
              </h1>
              <p className="mt-5  text-lg leading-normal tracking-[-0.5px]" style={{ color: "var(--clr-on-dark-muted)" }}>
                Upload XML sitemaps, fetch sitemap URLs, or paste links — IndexFlow submits each URL
                to Brave Search automatically.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href={CWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-5.5 py-2.5  text-[14px] font-semibold leading-[1.30] transition-colors"
                >
                  Add to Chrome
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#how-it-works"
                  className="btn-secondary-outline inline-flex items-center gap-2 rounded-full border px-5.5 py-2.5  text-[14px] font-semibold leading-[1.30] transition-colors"
                >
                  Learn More
                </a>
              </div>
              <p className="mt-4  text-sm" style={{ color: "var(--clr-on-dark-muted)" }}>
                No account required &middot; 36KB &middot; Free
              </p>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-lg float">
                <img
                  src="/indexflow/promo.png"
                  alt="IndexFlow extension popup showing URL submission interface"
                  className="w-full rounded-lg"
                  style={{ boxShadow: "rgba(0, 30, 43, 0.12) 0px 12px 24px -4px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4  text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-steel)" }}>
              Features
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.5px] md:text-4xl lg:text-[36px]" style={{ color: "var(--clr-ink)" }}>
              Everything you need to index on Brave Search
            </h2>
            <p className="mt-4  text-base leading-[1.55]" style={{ color: "var(--clr-slate)" }}>
              IndexFlow provides all the tools to submit your URLs to Brave Search efficiently.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="card-hover rounded-lg border p-8 transition-shadow"
                >
                  <div className="mb-4 flex size-11 items-center justify-center rounded-full" style={{ backgroundColor: "var(--clr-green-soft)" }}>
                    <Icon className="size-5" style={{ color: "var(--clr-green-dark)" }} />
                  </div>
                  <h3 className="text-lg font-semibold leading-[1.40]" style={{ color: "var(--clr-ink)" }}>
                    {feature.title}
                  </h3>
                  <p className="mt-2  text-sm leading-normal" style={{ color: "var(--clr-slate)" }}>
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Screenshots ─── */}
      <section style={{ backgroundColor: "var(--clr-surface-soft)" }} className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4  text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-steel)" }}>
              Screenshots
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.5px] md:text-4xl lg:text-[36px]" style={{ color: "var(--clr-ink)" }}>
              See IndexFlow in action
            </h2>
            <p className="mt-4  text-base leading-[1.55]" style={{ color: "var(--clr-slate)" }}>
              A quick look at the extension interface and workflow.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { src: "/indexflow/screenshot1.jpg", alt: "IndexFlow main popup showing input methods: Upload XML, Sitemap URL, or Paste URLs", label: "Input Methods" },
              { src: "/indexflow/screenshot2.jpg", alt: "IndexFlow progress tracking showing real-time submission status and progress bar", label: "Progress Tracking" },
              { src: "/indexflow/screenshot3.jpg", alt: "IndexFlow session history with search, filters, and detailed submission results", label: "Session History" },
            ].map((s) => (
              <div key={s.label}>
                <div className="overflow-hidden rounded-lg" style={{ boxShadow: "rgba(0, 30, 43, 0.08) 0px 4px 12px 0px" }}>
                  <img src={s.src} alt={s.alt} className="w-full" />
                </div>
                <p className="mt-3  text-base font-medium leading-[1.55]" style={{ color: "var(--clr-ink)" }}>{s.label}</p>
                <p className="text-sm leading-normal" style={{ color: "var(--clr-slate)" }}>{s.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4  text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-steel)" }}>
              How It Works
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.5px] md:text-4xl lg:text-[36px]" style={{ color: "var(--clr-ink)" }}>
              Get started in seconds
            </h2>
            <p className="mt-4  text-base leading-[1.55]" style={{ color: "var(--clr-slate)" }}>
              No complicated setup. Install, choose your input, and let IndexFlow do the work.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative text-center">
                <div
                  className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full  text-lg font-semibold leading-none"
                  style={{ backgroundColor: "var(--clr-green)", color: "var(--clr-teal-deep)" }}
                >
                  {item.step}
                </div>
                <h3 className="text-base font-semibold leading-[1.40]" style={{ color: "var(--clr-ink)" }}>
                  {item.title}
                </h3>
                <p className="mt-1.5  text-sm leading-normal" style={{ color: "var(--clr-slate)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Installation ─── */}
      <section style={{ backgroundColor: "var(--clr-surface)" }} className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4  text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-steel)" }}>
              Installation
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.5px] md:text-4xl lg:text-[36px]" style={{ color: "var(--clr-ink)" }}>
              Install IndexFlow in one click
            </h2>
            <p className="mt-4  text-base leading-[1.55]" style={{ color: "var(--clr-slate)" }}>
              Getting started takes less than 30 seconds.
            </p>
          </div>
          <div className="mx-auto mt-14 max-w-2xl space-y-6">
            {[
              { step: 1, title: "Visit the Chrome Web Store", desc: "Go to the IndexFlow page on the Chrome Web Store." },
              { step: 2, title: 'Click "Add to Chrome"', desc: "A single click installs the extension. No permissions to review." },
              { step: 3, title: "Click the IndexFlow icon", desc: "Find the IndexFlow icon in your Chrome toolbar and open the popup." },
              { step: 4, title: "Start submitting URLs", desc: "Upload an XML sitemap, provide a sitemap URL, or paste links and click Parse & Start." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div
                  className="flex size-9 shrink-0 items-center justify-center rounded-full  text-sm font-semibold"
                  style={{ backgroundColor: "var(--clr-green)", color: "var(--clr-teal-deep)" }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-[1.40]" style={{ color: "var(--clr-ink)" }}>{item.title}</h3>
                  <p className="text-sm leading-normal" style={{ color: "var(--clr-slate)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="pt-4 text-center">
              <a
                href={CWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-5.5 py-2.5  text-[14px] font-semibold leading-[1.30] transition-colors"
              >
                Add to Chrome
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Demo ─── */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4  text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-steel)" }}>
              Demo
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.5px] md:text-4xl lg:text-[36px]" style={{ color: "var(--clr-ink)" }}>
              Watch IndexFlow in action
            </h2>
            <p className="mt-4  text-base leading-[1.55]" style={{ color: "var(--clr-slate)" }}>
              See how IndexFlow automates URL submission to Brave Search from start to finish.
            </p>
          </div>
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="aspect-video flex items-center justify-center rounded-lg" style={{ backgroundColor: "var(--clr-surface)", border: "1px solid var(--clr-hairline)" }}>
              <div className="flex flex-col items-center gap-4">
                <Youtube className="size-12" style={{ color: "var(--clr-muted)" }} />
                <p className="text-sm" style={{ color: "var(--clr-muted)" }}>Demo video coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ backgroundColor: "var(--clr-surface)" }} className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4  text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-steel)" }}>
              FAQ
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.5px] md:text-4xl lg:text-[36px]" style={{ color: "var(--clr-ink)" }}>
              Frequently Asked Questions
            </h2>
            <p className="mt-4  text-base leading-[1.55]" style={{ color: "var(--clr-slate)" }}>
              Everything you need to know about IndexFlow.
            </p>
          </div>
          <div className="mx-auto mt-14 max-w-2xl">
            <IndexFlowFAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ─── Changelog ─── */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4  text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-steel)" }}>
              Changelog
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.5px] md:text-4xl lg:text-[36px]" style={{ color: "var(--clr-ink)" }}>
              Release History
            </h2>
            <p className="mt-4  text-base leading-[1.55]" style={{ color: "var(--clr-slate)" }}>
              Track updates and improvements to IndexFlow.
            </p>
          </div>
          <div className="mx-auto mt-14 max-w-2xl space-y-6">
            {changelog.map((release) => (
              <div
                key={release.version}
                className="rounded-lg border p-8"
                style={{ backgroundColor: "var(--clr-canvas)", borderColor: "var(--clr-hairline)" }}
              >
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-2xl font-medium leading-tight" style={{ color: "var(--clr-ink)" }}>v{release.version}</h3>
                  <span className="text-sm" style={{ color: "var(--clr-steel)" }}>{release.date}</span>
                </div>
                <ul className="space-y-2">
                  {release.changes.map((change) => (
                    <li key={change} className="flex items-start gap-2.5  text-base leading-[1.55]" style={{ color: "var(--clr-slate)" }}>
                      <span className="mt-2 block size-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--clr-green)" }} />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section style={{ backgroundColor: "var(--clr-teal-deep)" }} className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.5px] md:text-4xl lg:text-[36px]" style={{ color: "var(--clr-on-dark)" }}>
              Ready to speed up your Brave Search indexing?
            </h2>
            <p className="mt-4  text-lg leading-normal" style={{ color: "var(--clr-on-dark-muted)" }}>
              Install IndexFlow for free and start submitting URLs in bulk today.
            </p>
            <a
              href={CWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex items-center gap-2 rounded-full px-5.5 py-2.5  text-[14px] font-semibold leading-[1.30] transition-colors"
            >
              Add to Chrome &mdash; It&apos;s Free
              <ArrowRight className="size-4" />
            </a>
            <p className="mt-4  text-sm" style={{ color: "var(--clr-on-dark-muted)" }}>
              No account required &middot; 36KB &middot; Zero data collection
            </p>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="px-8 py-16 md:px-8 md:py-16" style={{ backgroundColor: "var(--clr-teal-deep)" }}>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm leading-normal" style={{ color: "var(--clr-on-dark-muted)" }}>
              <img src="/indexflow/icon128.png" alt="" className="mr-2 inline-block size-5 align-middle" />
              &copy; {new Date().getFullYear()} IndexFlow by{" "}
              <a
                href="/"
                className="transition-opacity hover:opacity-80"
                style={{ color: "var(--clr-on-dark)" }}
              >
                Adeel Atta
              </a>
            </p>
            <div className="flex gap-5">
              <a
                href="/indexflow/privacy-policy"
                className="link-muted  text-sm leading-normal transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href={CWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-muted  text-sm leading-normal transition-colors"
              >
                Chrome Web Store
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
