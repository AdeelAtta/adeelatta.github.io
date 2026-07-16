import { Mail, Github, Linkedin, Phone, MapPin, Globe } from "lucide-react"
import Image from "next/image"

export function ProfileCardWidget() {
  return (
    <div className="px-5 py-5 space-y-5">
      <div className="relative w-24 h-24 mx-auto">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border-light">
          <Image src="/images/design-mode/profile.webp" alt="Adeel Atta" width={96} height={96} className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-bold text-text-primary font-sans tracking-tight">Adeel Atta</h2>
        <p className="text-xs text-accent font-medium font-sans mt-0.5">Software Engineer</p>
      </div>
<div className="flex min-[680px]:flex-col justify-between">
          <div className="space-y-2.5 text-xs">
        <a href="mailto:adeelatta2000@gmail.com" className="flex items-center gap-2.5 text-text-secondary hover:text-text-primary transition-colors duration-200 group">
          <Mail className="w-3.5 h-3.5 text-accent shrink-0 group-hover:text-accent-hover" /> adeelatta2000@gmail.com
        </a>
        <a href="tel:+923032727095" className="flex items-center gap-2.5 text-text-secondary hover:text-text-primary transition-colors duration-200 group">
          <Phone className="w-3.5 h-3.5 text-accent shrink-0 group-hover:text-accent-hover" /> +92-303-2727095
        </a>
        <div className="flex items-center gap-2.5 text-text-secondary">
          <MapPin className="w-3.5 h-3.5 text-accent shrink-0" /> Sindh, Pakistan
        </div>
      </div>
      <div className="space-y-2">
        <a href="https://adeelatta.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-text-secondary hover:text-text-primary transition-colors duration-200 group">
          <Globe className="w-3.5 h-3.5 text-accent shrink-0" /> adeelatta.dev
        </a>
        <a href="https://www.linkedin.com/in/adeel-atta/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-text-secondary hover:text-text-primary transition-colors duration-200 group">
          <Linkedin className="w-3.5 h-3.5 text-accent shrink-0" /> linkedin.com/in/adeel-atta
        </a>
        <a href="https://github.com/AdeelAtta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-text-secondary hover:text-text-primary transition-colors duration-200 group">
          <Github className="w-3.5 h-3.5 text-accent shrink-0" /> github.com/AdeelAtta
        </a>
      </div>
        </div>
      <div className="border-t border-border-light pt-4">
        <h3 className="section-label mb-3">Quick Facts</h3>
        <div className="space-y-2">
          {[
            { label: "CGPA", value: "3.71 / 4.00" },
            { label: "Awards", value: "Gold + Silver Medal" },
            { label: "Hackathons", value: "7+ participated" },
            { label: "Teaching", value: "Stanford SL \u00b7 ICodeGuru" },
          ].map((fact, i) => (
            <div key={i} className="flex justify-between text-xs">
              <span className="text-text-primary font-medium font-sans">{fact.label}</span>
              <span className="text-text-muted">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  )
}
