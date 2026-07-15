import type { ComponentType } from "react"
import { BioWidget } from "./BioWidget"
import { EducationWidget } from "./EducationWidget"
import { AwardsWidget } from "./AwardsWidget"
import { CompetitionsWidget } from "./CompetitionsWidget"
import { TeachingWidget } from "./TeachingWidget"
import { ExperienceWidget } from "./ExperienceWidget"
import { SkillsWidget } from "./SkillsWidget"
import { ProjectsWidget } from "./ProjectsWidget"
import { ProfileCardWidget } from "./ProfileCardWidget"
import { StatsWidget } from "./StatsWidget"
import { User, GraduationCap, Award, Trophy, BookOpen, Briefcase, Wrench, FolderKanban, UserCircle, BarChart3 } from "lucide-react"

export type WidgetId =
  | "profile-card"
  | "bio"
  | "education"
  | "awards"
  | "competitions"
  | "teaching"
  | "experience"
  | "skills"
  | "projects"
  | "stats"

export type WidgetDefinition = {
  id: WidgetId
  title: string
  icon: ComponentType<{ className?: string }>
  component: ComponentType
  defaultSize: { w: number; h: number }
  minSize: { w: number; h: number }
}

export const widgetDefinitions: WidgetDefinition[] = [
  { id: "profile-card", title: "Profile Card", icon: UserCircle, component: ProfileCardWidget, defaultSize: { w: 6, h: 7 }, minSize: { w: 4, h: 6 } },
  { id: "bio", title: "Bio", icon: User, component: BioWidget, defaultSize: { w: 18, h: 2 }, minSize: { w: 8, h: 2 } },
  { id: "education", title: "Education", icon: GraduationCap, component: EducationWidget, defaultSize: { w: 9, h: 4 }, minSize: { w: 4, h: 3 } },
  { id: "awards", title: "Awards & Honors", icon: Award, component: AwardsWidget, defaultSize: { w: 9, h: 4 }, minSize: { w: 4, h: 3 } },
  { id: "experience", title: "Professional Experience", icon: Briefcase, component: ExperienceWidget, defaultSize: { w: 12, h: 5 }, minSize: { w: 6, h: 3 } },
  { id: "stats", title: "Stats", icon: BarChart3, component: StatsWidget, defaultSize: { w: 3, h: 3 }, minSize: { w: 2, h: 2 } },
  { id: "teaching", title: "Volunteer Experience", icon: BookOpen, component: TeachingWidget, defaultSize: { w: 9, h: 5 }, minSize: { w: 4, h: 4 } },
  { id: "competitions", title: "Competitions & Hackathons", icon: Trophy, component: CompetitionsWidget, defaultSize: { w: 12, h: 16 }, minSize: { w: 6, h: 4 } },
  { id: "projects", title: "Projects", icon: FolderKanban, component: ProjectsWidget, defaultSize: { w: 12, h: 8 }, minSize: { w: 6, h: 4 } },
  { id: "skills", title: "Technical Skills", icon: Wrench, component: SkillsWidget, defaultSize: { w: 12, h: 5 }, minSize: { w: 6, h: 5 } },
]

export const widgetMap = Object.fromEntries(
  widgetDefinitions.map((w) => [w.id, w]),
) as Record<WidgetId, WidgetDefinition>

export const allWidgetIds: WidgetId[] = widgetDefinitions.map((w) => w.id)

export function getDefaultLayout() {
  return [
    { i: "profile-card", x: 0,  y: 0,  w: 6,  h: 7,  minW: 4, minH: 6 },
    { i: "bio",          x: 6,  y: 0,  w: 18, h: 2,  minW: 8, minH: 2 },
    { i: "teaching",     x: 6,  y: 2,  w: 9,  h: 5,  minW: 4, minH: 4 },
    { i: "education",    x: 15, y: 2,  w: 9,  h: 4,  minW: 4, minH: 3 },
    { i: "awards",       x: 15, y: 6,  w: 9,  h: 4,  minW: 4, minH: 3 },
    { i: "competitions", x: 0,  y: 7,  w: 12, h: 16, minW: 6, minH: 4 },
    { i: "stats",        x: 12, y: 7,  w: 3,  h: 3,  minW: 2, minH: 2 },
    { i: "experience",   x: 12, y: 10, w: 12, h: 5,  minW: 6, minH: 3 },
    { i: "projects",     x: 12, y: 15, w: 12, h: 8,  minW: 6, minH: 4 },
    { i: "skills",       x: 12, y: 19, w: 12, h: 5,  minW: 6, minH: 5 },
  ]
}
