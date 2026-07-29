import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy – IndexFlow for Brave Search",
  description:
    "IndexFlow Chrome extension privacy policy. No data collection, no analytics, no tracking. Your sitemaps and URLs stay in your browser.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://adeelatta.dev/indexflow/privacy-policy" },
  openGraph: {
    title: "Privacy Policy – IndexFlow for Brave Search",
    description: "IndexFlow does not collect, store, or share any personal data. Everything runs in your browser.",
    url: "https://adeelatta.dev/indexflow/privacy-policy",
    siteName: "IndexFlow by Adeel Atta",
    locale: "en_US",
    type: "website",
  },
}

export default function IndexFlowPrivacyPage() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>
      <style>{`
        .ipp {
          --clr-teal-deep: #001e2b;
          --clr-ink: #001e2b;
          --clr-slate: #3d4f5b;
          --clr-steel: #5c6c7a;
          --clr-hairline: #e1e5e8;
          --clr-green: #00ed64;
          --clr-green-dark: #00684a;
          --clr-on-dark-muted: #a8b3bc;
          font-family: Inter, system-ui, -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.55;
        }
        .ipp * { font-family: inherit; }
        .ipp h1, .ipp h2, .ipp h3 { letter-spacing: normal; }
      `}</style>
      <div className="ipp mx-auto max-w-3xl px-8 py-20 md:py-28">
        <h1 className=" text-[36px] font-medium leading-[1.25] tracking-[-0.5px] text-[var(--clr-ink)]">
          Privacy Policy
        </h1>
        <p className="mt-2  text-sm text-[var(--clr-steel)]">
          Last updated: July 29, 2026
        </p>

        <div className="mt-10 space-y-8  text-base leading-[1.55] text-[var(--clr-slate)]">
          <section>
            <h2 className="mb-3 text-[22px] font-medium leading-[1.35] text-[var(--clr-ink)]">
              Introduction
            </h2>
            <p>
              IndexFlow (&quot;the Extension&quot;) is a Chrome browser extension developed by Adeel Atta.
              This privacy policy explains how the Extension handles your data. IndexFlow is designed
              with your privacy as a fundamental priority — it collects no personal information,
              uses no analytics, and operates entirely within your browser.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[22px] font-medium leading-[1.35] text-[var(--clr-ink)]">
              Data Collection
            </h2>
            <p className="mb-3">IndexFlow does <strong>not</strong> collect, store, or transmit:</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Personal information (name, email, address, etc.)</li>
              <li>Browsing history or navigation data</li>
              <li>Authentication credentials or login information</li>
              <li>Device information or IP addresses</li>
              <li>Analytics or usage telemetry</li>
              <li>Cookies or tracking identifiers</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-[22px] font-medium leading-[1.35] text-[var(--clr-ink)]">
              How the Extension Works
            </h2>
            <p>
              The Extension automates the submission of URLs to Brave Search&apos;s official URL
              submission page. When you use IndexFlow, the following happens entirely within your
              browser:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>Your sitemap XML file or URL list is read locally</li>
              <li>Each URL is opened in Brave Search&apos;s submission page</li>
              <li>The submission form is filled and submitted automatically</li>
              <li>Session history and progress data are stored locally using Chrome&apos;s storage API</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-[22px] font-medium leading-[1.35] text-[var(--clr-ink)]">
              Data Storage
            </h2>
            <p>
              Session history (list of submitted URLs, timestamps, and status) is stored locally in
              your browser using Chrome&apos;s <code className="rounded bg-[var(--clr-hairline)] px-1.5 py-0.5 text-sm">chrome.storage.local</code> API.
              This data never leaves your browser. You can clear it at any time through the
              Extension&apos;s interface or by clearing your browser data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[22px] font-medium leading-[1.35] text-[var(--clr-ink)]">
              Third-Party Services
            </h2>
            <p>
              The only external service the Extension interacts with is Brave Search&apos;s official
              URL submission endpoint (<code className="rounded bg-[var(--clr-hairline)] px-1.5 py-0.5 text-sm">search.brave.com</code>).
              URLs from your sitemap are submitted to this endpoint exactly as you would submit them
              manually. No data is sent to any other third party.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[22px] font-medium leading-[1.35] text-[var(--clr-ink)]">
              Permissions
            </h2>
            <p>The Extension requires the following Chrome permissions:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                <strong>Storage</strong> — Used to save your session history locally so you can
                reference past submissions.
              </li>
              <li>
                <strong>Notifications</strong> — Used to alert you when all URL submissions are
                complete (optional and configurable).
              </li>
              <li>
                <strong>Tabs</strong> — Used to open Brave Search&apos;s submission page for each
                URL in your list.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-[22px] font-medium leading-[1.35] text-[var(--clr-ink)]">
              Children&apos;s Privacy
            </h2>
            <p>
              The Extension does not collect any personal information from any person, including
              children under the age of 13.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[22px] font-medium leading-[1.35] text-[var(--clr-ink)]">
              Changes to This Policy
            </h2>
            <p>
              This privacy policy may be updated occasionally. Changes will be reflected on this
              page with an updated &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="border-t pt-8" style={{ borderColor: "var(--clr-hairline)" }}>
            <h2 className="mb-3 text-[22px] font-medium leading-[1.35] text-[var(--clr-ink)]">
              Contact
            </h2>
            <p>
              If you have questions about this privacy policy or IndexFlow&apos;s data practices,
              please contact:
            </p>
            <p className="mt-3">
              <strong className="text-[var(--clr-ink)]">Adeel Atta</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:adeelatta2000@gmail.com"
                className="font-medium underline underline-offset-2 transition-colors"
                style={{ color: "var(--clr-green-dark)" }}
              >
                adeelatta2000@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 text-center" style={{ borderTop: "1px solid var(--clr-hairline)" }}>
          <a
            href="/indexflow"
            className=" text-sm font-medium underline underline-offset-2 transition-colors"
            style={{ color: "var(--clr-green-dark)" }}
          >
            &larr; Back to IndexFlow
          </a>
        </div>
      </div>
    </div>
  )
}
