import { Mail, Github, Linkedin, Phone, MapPin, Globe } from "lucide-react"
import Image from "next/image"

export function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Photo */}
      <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[#e5e7eb] mx-auto md:mx-0">
        <Image
          src="/images/design-mode/profile.webp"
          alt="Adeel Atta"
          fill
          className="object-cover"
        />
      </div>

      {/* Name & Title */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">Adeel Atta</h1>
        <p className="text-sm text-accent font-medium mt-1">Software Engineer</p>
      </div>

      {/* Contact */}
      <div className="space-y-2 text-xs text-[#6b7280] text-center md:text-left">
        <a href="mailto:adeelatta2000@gmail.com" className="flex items-center gap-2 hover:text-[#1a1a2e] transition-colors justify-center md:justify-start">
          <Mail className="w-3.5 h-3.5" aria-hidden="true" />
          adeelatta2000@gmail.com
        </a>
        <a href="tel:+923032727095" className="flex items-center gap-2 hover:text-[#1a1a2e] transition-colors justify-center md:justify-start">
          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
          +92-303-2727095
        </a>
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
          Sindh, Pakistan
        </div>
        <div className="space-y-1 pt-1">
          <a href="https://adeelatta.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#1a1a2e] transition-colors justify-center md:justify-start">
            <Globe className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="text-xs">portfolio: adeelatta.dev</span>
          </a>
          <a href="https://www.linkedin.com/in/adeel-atta/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#1a1a2e] transition-colors justify-center md:justify-start">
            <Linkedin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="text-xs">linkedin: /in/adeel-atta</span>
          </a>
          <a href="https://github.com/AdeelAtta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#1a1a2e] transition-colors justify-center md:justify-start">
            <Github className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="text-xs">github: /AdeelAtta</span>
          </a>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="border-t border-[#e5e7eb] pt-4 text-center md:text-left">
        <h3 className="text-xs font-semibold text-[#1a1a2e] uppercase tracking-wider mb-2">Quick Facts</h3>
        <div className="space-y-1.5 text-xs text-[#6b7280]">
          <div className="flex justify-between md:justify-start md:gap-4">
            <span className="text-[#1a1a2e] font-medium">CGPA</span>
            <span>3.71 / 4.00</span>
          </div>
          <div className="flex justify-between md:justify-start md:gap-4">
            <span className="text-[#1a1a2e] font-medium">Awards</span>
            <span>Gold + Silver Medal</span>
          </div>
          <div className="flex justify-between md:justify-start md:gap-4">
            <span className="text-[#1a1a2e] font-medium">Hackathons</span>
            <span>7+ participated</span>
          </div>
          <div className="flex justify-between md:justify-start md:gap-4">
            <span className="text-[#1a1a2e] font-medium">Teaching</span>
            <span>Stanford SL · ICodeGuru</span>
          </div>
        </div>
      </div>

      {/* Download CV */}
      {/* <div className="pt-2 text-center md:text-left">
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent border border-accent rounded-md px-4 py-2 hover:bg-accent hover:text-white transition-colors"
        >
          Download CV (PDF)
        </a>
      </div> */}
    </aside>
  )
}
