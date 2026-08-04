import type { Metadata } from "next"
import { ArrowRight, Crosshair, Gamepad2, Globe, Headset, Target, Trophy, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "VR Shooting Gallery – Meta Quest 3 Game | Carnival-Style VR Shooting Range",
  description:
    "A carnival-style VR shooting range built for Meta Quest 3. Shoot moving targets, build combos, unlock guns and skins across five themed ranges.",
  metadataBase: new URL("https://adeelatta.dev"),
  authors: [{ name: "Adeel Atta" }],
  keywords: [
    "VR shooting game", "Meta Quest 3", "Quest 3S game", "VR shooting gallery",
    "WebXR game", "virtual reality game", "shooting range VR", "Meta Quest game",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://adeelatta.dev/gun-shooting" },
  openGraph: {
    title: "VR Shooting Gallery – Meta Quest 3 Game",
    description: "Carnival-style VR shooting range. Shoot moving targets, build combos, unlock guns and skins across five themed ranges.",
    url: "https://adeelatta.dev/gun-shooting",
    siteName: "Games by Adeel Atta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Shooting Gallery – Meta Quest 3 Game",
    description: "Carnival-style VR shooting range with combos, unlockable guns, and five themed ranges.",
  },
}

const GAME_URL = "https://gun-shooting.vercel.app/"

export default function GunShootingPage() {
  return (
    <div className="gs">
      <style>{`
        .gs {
          --clr-bg: #0b1020;
          --clr-bg-light: #111830;
          --clr-card: #1a2340;
          --clr-card-hover: #222d52;
          --clr-accent: #38bdf8;
          --clr-laser: #f43f5e;
          --clr-amber: #fbbf24;
          --clr-emerald: #34d399;
          --clr-ink: #f1f5f9;
          --clr-body: #a5b4cb;
          --clr-muted: #5b6b8c;
          --clr-hairline: #263152;
          font-family: "Inter", system-ui, -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.55;
          background-color: var(--clr-bg);
          color: var(--clr-body);
        }
        .gs * { font-family: inherit; }
        .gs h1, .gs h2, .gs h3, .gs h4 { letter-spacing: normal; }
        .gs .btn-primary { background: linear-gradient(135deg, var(--clr-accent), #2563eb); color: #0b1020; border-radius: 8px; font-weight: 700; }
        .gs .btn-primary:hover { opacity: 0.9; }
        .gs .glow { box-shadow: 0 0 45px rgba(56, 189, 248, 0.15); }
        .gs .laser-text { background: linear-gradient(135deg, var(--clr-accent), var(--clr-laser)); -webkit-background-clip: text; background-clip: text; color: transparent; }
        @media (prefers-reduced-motion: no-preference) {
          .gs .float { animation: gsfloat 6s ease-in-out infinite; }
        }
        @keyframes gsfloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, #38bdf8 0%, transparent 50%), radial-gradient(circle at 70% 60%, #f43f5e 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-[1200px] px-8 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[1px]" style={{ borderColor: "var(--clr-hairline)", color: "var(--clr-accent)" }}>
              <Headset className="size-3.5" />
              Built for Meta Quest 3
            </div>
            <h1 className="text-[34px] font-bold leading-[1.1] tracking-[-1px] md:text-[52px] lg:text-[60px]" style={{ color: "var(--clr-ink)" }}>
              VR Shooting <span className="laser-text">Gallery</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.6]" style={{ color: "var(--clr-body)" }}>
              A carnival-style VR shooting range. Shoot moving targets, build combos, unlock guns and skins
              across five themed ranges — playable directly in your browser on Meta Quest 3.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={GAME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-[14px] leading-none transition-all"
              >
                <Gamepad2 className="size-4" />
                Play the Game
                <ArrowRight className="size-4" />
              </a>
              <a
                href="https://www.meta.com/quest/quest-3/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[8px] border px-6 py-3.5 text-[14px] font-medium leading-none transition-colors hover:opacity-80"
                style={{ borderColor: "var(--clr-hairline)", color: "var(--clr-ink)" }}
              >
                <Headset className="size-4" />
                Meta Quest 3
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
              { icon: Target, value: "5", label: "Themed Ranges" },
              { icon: Zap, value: "Combos", label: "Score Multipliers" },
              { icon: Crosshair, value: "Unlockable", label: "Guns & Skins" },
              { icon: Globe, value: "WebXR", label: "Browser-Based" },
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
                About the Game
              </p>
              <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
                A carnival arcade classic, in VR
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65]" style={{ color: "var(--clr-body)" }}>
                Developed for Meta Quest 3 and Quest 3S, this game brings the classic carnival shooting range into
                virtual reality. Duck, aim, and fire at moving targets while chaining hits into combo multipliers to
                climb the leaderboard.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Motion-tracked controllers for realistic aiming and recoil",
                  "Five distinct themed ranges with unique target mechanics",
                  "Combo system that rewards accuracy with score multipliers",
                  "Progression system with unlockable guns and skins",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px]">
                    <span className="mt-1 block size-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--clr-emerald)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glow rounded-[16px] border p-8 text-center" style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-card)" }}>
              <Trophy className="float mx-auto mb-5 size-16" style={{ color: "var(--clr-amber)" }} />
              <p className="text-[15px] font-semibold" style={{ color: "var(--clr-ink)" }}>Highest combo wins the range</p>
              <p className="mx-auto mt-3 max-w-sm text-[13px]" style={{ color: "var(--clr-body)" }}>
                Every target you hit builds your combo. Miss and the chain resets. Chain perfect shots to multiply
                your score and unlock the next range.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section style={{ backgroundColor: "var(--clr-bg-light)" }} className="py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-accent)" }}>
              Gameplay
            </p>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
              What makes it fun
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: Crosshair, title: "Precision Aiming", desc: "Full motion-tracked controller support with realistic recoil for an immersive shooting experience." },
              { icon: Target, title: "Five Themed Ranges", desc: "Each range introduces new target patterns, speeds, and hazards to keep the challenge fresh." },
              { icon: Zap, title: "Combo Scoring", desc: "Chain consecutive hits to multiply your score and set new personal records." },
            ].map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="glow rounded-[16px] border p-8 text-center" style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-card)" }}>
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-[10px]" style={{ backgroundColor: "rgba(56, 189, 248, 0.15)" }}>
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
              Modern web VR engineering
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "WebXR", desc: "Runs natively in the Meta Quest browser — no app store install required." },
              { title: "Three.js", desc: "High-performance 3D rendering for realistic scenes and smooth framerates." },
              { title: "React", desc: "Component-driven UI for menus, HUD, and game state management." },
              { title: "Vercel", desc: "Instant global delivery of the game build via static hosting." },
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
          <div className="glow rounded-[20px] border px-8 py-16 text-center" style={{ borderColor: "rgba(56, 189, 248, 0.2)", backgroundColor: "var(--clr-card)" }}>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[36px]" style={{ color: "var(--clr-ink)" }}>
              Grab your headset and play
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px]" style={{ color: "var(--clr-body)" }}>
              Open the game in your Meta Quest 3 browser and step into the range. No downloads, no installs — just aim and fire.
            </p>
            <div className="mt-8">
              <a
                href={GAME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-[14px] leading-none"
              >
                <Gamepad2 className="size-4" />
                Play the Game
                <ArrowRight className="size-4" />
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
              Created for{" "}
              <span className="font-semibold" style={{ color: "var(--clr-ink)" }}>Meta Quest 3</span>
              {" "}by{" "}
              <a href="/" className="transition-opacity hover:opacity-80" style={{ color: "var(--clr-accent)" }}>
                Adeel Atta
              </a>
            </p>
            <div className="flex gap-5">
              <a href={GAME_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                Play
              </a>
              <span style={{ color: "var(--clr-muted)" }}>/</span>
              <a href="https://www.meta.com/quest/quest-3/" target="_blank" rel="noopener noreferrer" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                Quest 3
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}