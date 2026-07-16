"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { ResponsiveGridLayout, type Layout, type LayoutItem } from "react-grid-layout"
import "react-grid-layout/css/styles.css"

import { WidgetDrawer } from "@/components/widgets/WidgetDrawer"
import { widgetMap, getDefaultLayouts, breakpoints, cols, allWidgetIds, type WidgetId } from "@/components/widgets/registry"
import { LayoutGrid, RotateCcw, Pencil, Lock, Sun, Moon } from "lucide-react"

const STORAGE_KEY = "adeel-dashboard-data"

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as { layouts: Record<string, LayoutItem[]>; enabledWidgets: WidgetId[] }
  } catch { return null }
}

function saveToStorage(data: { layouts: Record<string, LayoutItem[]>; enabledWidgets: WidgetId[] }) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)) } catch { }
}

export default function Home() {
  const [allLayouts, setAllLayouts] = useState<Record<string, LayoutItem[]>>(() => {
    return loadFromStorage()?.layouts ?? getDefaultLayouts()
  })
  const [enabledWidgets, setEnabledWidgets] = useState<WidgetId[]>(() => {
    return loadFromStorage()?.enabledWidgets ?? allWidgetIds.filter((id) => id !== "skills")
  })
  const [isEditing, setIsEditing] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [containerWidth, setContainerWidth] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const enabledWidgetsRef = useRef(enabledWidgets)
  const [isDark, setIsDark] = useState(false)
  const [shutterOpen, setShutterOpen] = useState(false)
  const [initialReveal, setInitialReveal] = useState(true)

  useEffect(() => { enabledWidgetsRef.current = enabledWidgets }, [enabledWidgets])

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
    const t = setTimeout(() => setInitialReveal(false), 350)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentBoxSize?.[0]?.inlineSize ?? entry.contentRect.width
      setContainerWidth(w)
    })
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  const scheduleSave = useCallback((layouts: Record<string, LayoutItem[]>, widgets: WidgetId[]) => {
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    saveTimerRef.current = setTimeout(() => saveToStorage({ layouts, enabledWidgets: widgets }), 400)
  }, [])

  function toggleTheme() {
    if (shutterOpen) return
    setShutterOpen(true)
    setTimeout(() => {
      const next = !isDark
      setIsDark(next)
      document.documentElement.classList.toggle("dark", next)
      try { localStorage.setItem("adeel-theme", next ? "dark" : "light") } catch { }
      setShutterOpen(false)
    }, 450)
  }

  const handleLayoutChange = useCallback((_layout: Layout, layouts: Record<string, Layout | undefined>) => {
    const currentEnabled = enabledWidgetsRef.current
    const cleaned: Record<string, LayoutItem[]> = {}
    for (const [bp, l] of Object.entries(layouts)) {
      if (l) cleaned[bp] = Array.from(l).map((item) => ({
        i: item.i, x: item.x, y: item.y, w: item.w, h: item.h,
        minW: widgetMap[item.i as WidgetId]?.minSize.w ?? 1,
        minH: widgetMap[item.i as WidgetId]?.minSize.h ?? 2,
      }))
    }
    if (Object.keys(cleaned).length > 0) {
      setAllLayouts(cleaned)
      scheduleSave(cleaned, currentEnabled)
    }
  }, [scheduleSave])

  function handleToggleWidget(id: WidgetId) {
    const isEnabled = enabledWidgets.includes(id)
    const def = widgetMap[id]

    if (isEnabled) {
      const newWidgets = enabledWidgets.filter((w) => w !== id)
      const newLayouts: Record<string, LayoutItem[]> = {}
      for (const [bp, layout] of Object.entries(allLayouts)) {
        newLayouts[bp] = layout.filter((item) => item.i !== id)
      }
      setEnabledWidgets(newWidgets)
      setAllLayouts(newLayouts)
      scheduleSave(newLayouts, newWidgets)
    } else {
      const newWidgets = [...enabledWidgets, id]
      const newLayouts: Record<string, LayoutItem[]> = {}
      for (const [bp, layout] of Object.entries(allLayouts)) {
        const already = layout.find((item) => item.i === id)
        if (already) {
          newLayouts[bp] = [...layout]
        } else {
          const maxY = layout.reduce((max, item) => Math.max(max, item.y + item.h), 0)
          newLayouts[bp] = [...layout, {
            i: id, x: 0, y: maxY,
            w: def.defaultSize.w, h: def.defaultSize.h,
            minW: def.minSize.w, minH: def.minSize.h,
          }]
        }
      }
      setEnabledWidgets(newWidgets)
      setAllLayouts(newLayouts)
      scheduleSave(newLayouts, newWidgets)
    }
  }

  function handleReset() {
    const defaults = getDefaultLayouts()
    setAllLayouts(defaults)
    const defaultWidgets = allWidgetIds.filter((id) => id !== "skills")
    setEnabledWidgets(defaultWidgets)
    saveToStorage({ layouts: defaults, enabledWidgets: defaultWidgets })
  }

  const enabledIds = new Set(enabledWidgets)
  const filteredLayouts: Record<string, LayoutItem[]> = {}
  for (const [bp, layout] of Object.entries(allLayouts)) {
    filteredLayouts[bp] = layout.filter((item) => enabledIds.has(item.i as WidgetId))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between gap-4 mb-10 bg-bg-card border border-border-light px-5 py-3 w-full shadow-sm rounded-lg">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-md">
            <span className="text-bg-primary font-bold text-sm tracking-tight font-sans">A</span>
          </div>
          <div className="h-5 w-px bg-border" />
          <div>
            <span className="text-sm font-semibold text-text-primary hidden sm:inline tracking-tight font-sans">Adeel Atta</span>
            <span className="text-[10px] text-text-muted ml-3 font-sans uppercase tracking-[0.15em] hidden sm:inline">Portfolio</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-1.5 text-xs font-medium py-2 px-3 transition-all duration-200 font-sans rounded-md ${
              isEditing ? "bg-text-primary text-bg-primary shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"
            }`}
            title={isEditing ? "Lock dashboard" : "Customize layout"}
          >
            {isEditing ? <Lock className="w-3.5 h-3.5" /> : <Pencil className="w-3.5 h-3.5" />}
            <span className="hidden xs:inline">{isEditing ? "Lock" : "Edit"}</span>
          </button>

          <div className="w-px h-5 bg-border-light mx-1" />
          <button onClick={toggleTheme}
            className="flex items-center gap-1.5 text-xs font-medium py-2 px-3 text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all duration-200 font-sans rounded-md"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
          </button>

          {isEditing && (
            <div className="flex items-center gap-1">
              <div className="w-px h-5 bg-border-light mx-0.5" />
              <button onClick={() => setDrawerOpen(true)}
                className="flex items-center gap-1.5 text-xs font-medium py-2 px-3 text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all duration-200 font-sans rounded-md"
                title="Show or hide widgets">
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Widgets</span>
              </button>
              <button onClick={handleReset}
                className="flex items-center gap-1.5 text-xs font-medium py-2 px-3 text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all duration-200 font-sans rounded-md"
                title="Reset to default layout">
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Editable hint */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isEditing ? "max-h-12 opacity-100 mb-8" : "max-h-0 opacity-0 mb-0"}`}>
        <div className="text-xs text-text-muted text-center font-sans">
          Drag <span className="text-text-primary font-medium">⠿</span> to rearrange &middot; Resize
          <span className="hidden sm:inline"> from the bottom-right corner</span>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div ref={containerRef}>
        {containerWidth !== null && (
          <ResponsiveGridLayout
            width={containerWidth}
            breakpoints={breakpoints}
            cols={cols}
            layouts={filteredLayouts}
            rowHeight={80}
            margin={[12, 16]}
            dragConfig={{ enabled: isEditing, handle: ".drag-handle" }}
            resizeConfig={{ enabled: isEditing, handles: ["se"] }}
            onLayoutChange={handleLayoutChange}
            autoSize
          >
            {enabledWidgets.map((id) => {
              const def = widgetMap[id]
              if (!def) return null
              const WidgetComp = def.component
              const Icon = def.icon
              return (
                <div key={id}
                  className={`bg-bg-card overflow-hidden flex flex-col h-full transition-all duration-200 rounded-lg ${
                    isEditing ? "shadow-lg ring-1 ring-border" : "shadow-md ring-1 ring-border-light"
                  }`}
                >
                  <div className={`flex items-center gap-2.5 px-5 py-3 border-b select-none transition-all duration-200 ${
                    isEditing
                      ? "drag-handle cursor-grab active:cursor-grabbing bg-bg-elevated border-border"
                      : "bg-bg-card border-border-light"
                  }`}>
                    {isEditing && <span className="text-text-muted text-sm leading-none font-sans">⠿</span>}
                    <Icon className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span className="text-[10px] font-semibold text-text-secondary font-sans uppercase tracking-[0.12em]">{def.title}</span>
                  </div>
                  <WidgetComp />
                </div>
              )
            })}
          </ResponsiveGridLayout>
        )}
      </div>

      <WidgetDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} enabledWidgets={enabledWidgets} onToggleWidget={handleToggleWidget} />

      {/* Shutter animation overlay — top curtain */}
      <div className="fixed left-0 right-0 top-0 h-1/2 z-100 pointer-events-none transition-transform duration-[450ms] ease-in-out"
        style={{
          transform: shutterOpen || initialReveal ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'top',
          background: 'var(--text-primary)',
        }}
      />
      {/* Shutter animation overlay — bottom curtain */}
      <div className="fixed left-0 right-0 bottom-0 h-1/2 z-100 pointer-events-none transition-transform duration-[450ms] ease-in-out"
        style={{
          transform: shutterOpen || initialReveal ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'bottom',
          background: 'var(--text-primary)',
        }}
      />

      <footer className="border-t border-border-light mt-14 pt-6 pb-6 text-center">
        <div className="space-x-6 mb-2">
          <a href="/privacy-policy" className="text-xs text-text-muted hover:text-text-secondary transition-colors duration-200 font-sans">Privacy</a>
          <a href="/terms-of-service" className="text-xs text-text-muted hover:text-text-secondary transition-colors duration-200 font-sans">Terms</a>
        </div>
        <p className="text-[11px] text-text-muted/60 font-sans">&copy; {new Date().getFullYear()} Adeel Atta</p>
      </footer>
    </div>
  )
}
