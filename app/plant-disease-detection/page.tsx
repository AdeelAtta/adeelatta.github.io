import type { Metadata } from "next"
import { ArrowRight, ExternalLink, Github, Leaf, Microscope, Brain, Image, BarChart3, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "Plant Disease Detection & Classification | Deep Learning with PyTorch",
  description:
    "Deep learning computer vision architectures using PyTorch for automated plant disease identification from leaf images.",
  metadataBase: new URL("https://adeelatta.dev"),
  authors: [{ name: "Adeel Atta" }],
  keywords: [
    "plant disease detection", "deep learning", "PyTorch", "computer vision",
    "CNN", "leaf disease classification", "agriculture AI", "plant pathology",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://adeelatta.dev/plant-disease-detection" },
  openGraph: {
    title: "Plant Disease Detection & Classification",
    description: "Deep learning computer vision architectures using PyTorch for automated plant disease identification.",
    url: "https://adeelatta.dev/plant-disease-detection",
    siteName: "Projects by Adeel Atta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plant Disease Detection & Classification",
    description: "Deep learning computer vision architectures using PyTorch for automated plant disease identification.",
  },
}

const GITHUB_URL = "https://github.com/AdeelAtta/FE-plant-disease-detection"

export default function PlantDiseasePage() {
  return (
    <div className="pd">
      <style>{`
        .pd {
          --clr-green: #2e7d32;
          --clr-green-light: #4caf50;
          --clr-green-soft: #e8f5e9;
          --clr-leaf: #66bb6a;
          --clr-canvas: #fafdf6;
          --clr-surface: #f1f8e9;
          --clr-card: #ffffff;
          --clr-ink: #1b2e1b;
          --clr-body: #3e4e3e;
          --clr-muted: #6b7f6b;
          --clr-hairline: #c8e6c9;
          --clr-accent: #1b5e20;
          font-family: "Inter", system-ui, -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.55;
          background-color: var(--clr-canvas);
          color: var(--clr-body);
        }
        .pd * { font-family: inherit; }
        .pd h1, .pd h2, .pd h3, .pd h4 { letter-spacing: normal; }
        .pd .btn-primary { background-color: var(--clr-green); color: #fff; border-radius: 8px; font-weight: 600; }
        .pd .btn-primary:hover { background-color: var(--clr-accent); }
        .pd .btn-secondary { background-color: transparent; color: var(--clr-ink); border: 1px solid var(--clr-hairline); border-radius: 8px; font-weight: 500; }
        .pd .btn-secondary:hover { background-color: var(--clr-surface); }
      `}</style>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--clr-green-soft) 0%, #f1f8e9 50%, #e8f5e9 100%)" }}>
        <div className="relative mx-auto max-w-[1200px] px-8 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[1px]" style={{ backgroundColor: "var(--clr-green)", color: "#fff" }}>
              <Leaf className="size-3.5" />
              Deep Learning — Computer Vision
            </div>
            <h1 className="text-[36px] font-bold leading-[1.15] tracking-[-1px] md:text-[52px]" style={{ color: "var(--clr-ink)" }}>
              Plant Disease Detection<br />
              <span style={{ color: "var(--clr-green)" }}>& Classification</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.65]" style={{ color: "var(--clr-body)" }}>
              Deep learning computer vision architectures built with PyTorch for automated
              identification of plant diseases from leaf images. Enabling early detection
              for better crop management.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-[14px] leading-none transition-all">
                <Github className="size-4" />
                View on GitHub
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tech Stack ─── */}
      <section className="border-y py-12" style={{ borderColor: "var(--clr-hairline)" }}>
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: Brain, label: "PyTorch", sub: "Deep Learning Framework" },
              { icon: Image, label: "CNN Architectures", sub: "ResNet, VGG, Custom" },
              { icon: BarChart3, label: "Transfer Learning", sub: "Pre-trained Models" },
              { icon: Layers, label: "Image Processing", sub: "OpenCV & Augmentation" },
            ].map((s) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="flex items-center gap-3">
                  <Icon className="size-8" style={{ color: "var(--clr-leaf)" }} />
                  <div>
                    <p className="text-[15px] font-semibold" style={{ color: "var(--clr-ink)" }}>{s.label}</p>
                    <p className="text-[13px]" style={{ color: "var(--clr-muted)" }}>{s.sub}</p>
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
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-leaf)" }}>
                About the Project
              </p>
              <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
                AI-powered plant pathology
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65]" style={{ color: "var(--clr-body)" }}>
                This project implements multiple deep learning architectures to classify plant diseases
                from leaf images. Using PyTorch, it explores various CNN architectures including
                custom designs, ResNet, and VGG with transfer learning to achieve accurate disease
                identification across multiple plant species.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Multi-architecture CNN implementations in PyTorch",
                  "Transfer learning with pre-trained models",
                  "Image preprocessing and augmentation pipeline",
                  "Classification across multiple disease categories",
                  "Performance benchmarking and visualization",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px]">
                    <span className="mt-1.5 block size-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--clr-leaf)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[16px] border p-8" style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-card)" }}>
              <div className="mb-4 flex items-center gap-3">
                <Microscope className="size-5" style={{ color: "var(--clr-leaf)" }} />
                <span className="text-[13px] font-semibold" style={{ color: "var(--clr-ink)" }}>Model Architecture</span>
              </div>
              <pre className="text-[13px] leading-[1.7]" style={{ color: "var(--clr-body)" }}>
                <span style={{ color: "var(--clr-muted)" }}># Custom CNN Classifier</span>{"\n"}
                <span style={{ color: "var(--clr-leaf)" }}>class</span> PlantDiseaseCNN(<span style={{ color: "var(--clr-leaf)" }}>nn.Module</span>):{"\n"}
                &nbsp;&nbsp;<span style={{ color: "var(--clr-leaf)" }}>def</span> <span style={{ color: "#1565c0" }}>__init__</span>(self, num_classes):{"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;super().__init__(){"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;self.conv1 = nn.Conv2d(3, 32, 3, padding=1){"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;self.conv2 = nn.Conv2d(32, 64, 3, padding=1){"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;self.conv3 = nn.Conv2d(64, 128, 3, padding=1){"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;self.pool = nn.MaxPool2d(2, 2){"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;self.fc1 = nn.Linear(128 * 28 * 28, 256){"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;self.fc2 = nn.Linear(256, num_classes){"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;self.dropout = nn.Dropout(0.3){"\n"}
                {"\n"}
                &nbsp;&nbsp;<span style={{ color: "var(--clr-leaf)" }}>def</span> <span style={{ color: "#1565c0" }}>forward</span>(self, x):{"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;x = self.pool(F.relu(self.conv1(x))){"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;x = self.pool(F.relu(self.conv2(x))){"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;x = self.pool(F.relu(self.conv3(x))){"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;x = x.view(-1, 128 * 28 * 28){"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;x = F.relu(self.fc1(x)){"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;x = self.dropout(x){"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;x = self.fc2(x){"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "var(--clr-leaf)" }}>return</span> x
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section style={{ backgroundColor: "var(--clr-surface)" }} className="py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-leaf)" }}>
              Capabilities
            </p>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
              What the model can do
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Image, title: "Multi-Class Classification", desc: "Identify diseases across multiple plant species and disease categories from leaf images." },
              { icon: Layers, title: "Multiple Architectures", desc: "Compare performance across custom CNNs, ResNet, VGG, and other architectures." },
              { icon: BarChart3, title: "Performance Metrics", desc: "Detailed accuracy, precision, recall, and F1-score reporting for model evaluation." },
            ].map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="rounded-[16px] border p-8 text-center" style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-card)" }}>
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-[10px]" style={{ backgroundColor: "var(--clr-green-soft)" }}>
                    <Icon className="size-6" style={{ color: "var(--clr-green)" }} />
                  </div>
                  <h3 className="text-[16px] font-semibold" style={{ color: "var(--clr-ink)" }}>{f.title}</h3>
                  <p className="mt-2 text-[13px]" style={{ color: "var(--clr-body)" }}>{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Architectures ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "var(--clr-leaf)" }}>
              Architectures
            </p>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[40px]" style={{ color: "var(--clr-ink)" }}>
              Explored architectures
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Custom CNN", desc: "Designed from scratch with convolutional blocks, pooling, and dropout layers." },
              { title: "ResNet", desc: "Deep residual learning with skip connections for training deeper networks." },
              { title: "VGG", desc: "Very deep convolutional networks with small receptive fields." },
              { title: "Transfer Learning", desc: "Fine-tuned pre-trained models for domain-specific disease classification." },
            ].map((a) => (
              <div key={a.title} className="rounded-[12px] border p-6 text-center" style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-card)" }}>
                <h3 className="text-[15px] font-semibold" style={{ color: "var(--clr-ink)" }}>{a.title}</h3>
                <p className="mt-2 text-[13px]" style={{ color: "var(--clr-body)" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[20px] border px-8 py-16 text-center" style={{ borderColor: "var(--clr-hairline)", backgroundColor: "var(--clr-card)" }}>
            <Leaf className="mx-auto mb-4 size-10" style={{ color: "var(--clr-leaf)" }} />
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.5px] md:text-[36px]" style={{ color: "var(--clr-ink)" }}>
              Explore the code
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px]" style={{ color: "var(--clr-body)" }}>
              Full source code, model architectures, and training pipelines available on GitHub.
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex items-center gap-2 px-6 py-3.5 text-[14px] leading-none"
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
              Built with <span style={{ color: "var(--clr-leaf)" }}>PyTorch</span> by{" "}
              <a href="https://adeelatta.dev" className="transition-opacity hover:opacity-80" style={{ color: "var(--clr-ink)" }}>
                Adeel Atta
              </a>
            </p>
            <div className="flex gap-5">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                <Github className="size-3.5" />
                Source Code
              </a>
              <span style={{ color: "var(--clr-muted)" }}>/</span>
              <a href="https://pytorch.org" target="_blank" rel="noopener noreferrer" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--clr-muted)" }}>
                PyTorch
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
