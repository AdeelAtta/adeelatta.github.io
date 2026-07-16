import { Trophy, FolderKanban, Award } from "lucide-react"

export function StatsWidget() {
  return (
    <div className="flex flex-wrap items-center  justify-center h-full py-2 gap-2.5 px-2">
      <div className="flex flex-1 min-w-20 flex-col items-center">
        <Trophy className="w-4 h-4 text-accent" />
        <p className="text-sm font-bold text-text-primary font-sans leading-none mt-1">7+</p>
        <p className="text-[9px] text-text-muted font-sans mt-0.5 text-center leading-tight">Hackathons</p>
      </div>
      <div className="flex flex-1 min-w-20  flex-col items-center">
        <FolderKanban className="w-4 h-4 text-accent" />
        <p className="text-sm font-bold text-text-primary font-sans leading-none mt-1">7</p>
        <p className="text-[9px] text-text-muted font-sans mt-0.5 text-center leading-tight">Projects</p>
      </div>
      <div className="flex flex-1 min-w-20 flex-col items-center">
        <Award className="w-4 h-4 text-accent" />
        <p className="text-sm font-bold text-text-primary font-sans leading-none mt-1">3</p>
        <p className="text-[9px] text-text-muted font-sans mt-0.5 text-center leading-tight">Awards</p>
      </div>
    </div>
  )
}
