"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import GridLayout, { type LayoutItem } from "react-grid-layout"
import "react-grid-layout/css/styles.css"

import { WidgetDrawer } from "@/components/widgets/WidgetDrawer"
import { widgetMap, getDefaultLayout, allWidgetIds, type WidgetId } from "@/components/widgets/registry"
import { LayoutGrid, RotateCcw, Pencil, Lock } from "lucide-react"

const STORAGE_LAYOUT_KEY = "adeel-dashboard-layout"
const STORAGE_WIDGETS_KEY = "adeel-dashboard-widgets"

function loadFromStorage() {
  try {
    const layout = localStorage.getItem(STORAGE_LAYOUT_KEY)
    const widgets = localStorage.getItem(STORAGE_WIDGETS_KEY)
    return {
      layout: layout ? JSON.parse(layout) : null,
      enabledWidgets: widgets ? JSON.parse(widgets) : null,
    }
  } catch {
    return { layout: null, enabledWidgets: null }
  }
}

function saveToStorage(layout: unknown, enabledWidgets: unknown) {
  try {
    localStorage.setItem(STORAGE_LAYOUT_KEY, JSON.stringify(layout))
    localStorage.setItem(STORAGE_WIDGETS_KEY, JSON.stringify(enabledWidgets))
  } catch { }
}

type LayoutItemWithMeta = LayoutItem & { minW: number; minH: number }

export default function Home() {
  const [layout, setLayout] = useState<LayoutItemWithMeta[]>(() => {
    const saved = loadFromStorage()
    return saved.layout ?? getDefaultLayout()
  })
  const [enabledWidgets, setEnabledWidgets] = useState<WidgetId[]>(() => {
    const saved = loadFromStorage()
    return saved.enabledWidgets ?? allWidgetIds.filter((id) => id !== "skills")
  })
  const [isEditing, setIsEditing] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [containerWidth, setContainerWidth] = useState(1200)
  const [loaded, setLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const enabledWidgetsRef = useRef(enabledWidgets)

  useEffect(() => { enabledWidgetsRef.current = enabledWidgets }, [enabledWidgets])

  useEffect(() => { setLoaded(true) }, [])

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const scheduleSave = useCallback((l: unknown, w: unknown) => {
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    saveTimerRef.current = setTimeout(() => saveToStorage(l, w), 400)
  }, [])

  const handleLayoutChange = useCallback((newLayout: readonly { i: string; x: number; y: number; w: number; h: number }[]) => {
    const currentEnabled = enabledWidgetsRef.current
    const enabledIds = new Set(currentEnabled)
    setLayout((prev) => {
      const merged: LayoutItemWithMeta[] = [
        ...prev.filter((item) => !enabledIds.has(item.i as WidgetId)),
        ...Array.from(newLayout).map((item) => ({
          i: item.i, x: item.x, y: item.y, w: item.w, h: item.h,
          minW: widgetMap[item.i as WidgetId]?.minSize.w ?? 1,
          minH: widgetMap[item.i as WidgetId]?.minSize.h ?? 2,
        })),
      ]
      scheduleSave(merged, currentEnabled)
      return merged
    })
  }, [scheduleSave])

  function handleToggleWidget(id: WidgetId) {
    const isEnabled = enabledWidgets.includes(id)
    const def = widgetMap[id]
    let newWidgets: WidgetId[]
    let newLayout: LayoutItemWithMeta[]

    if (isEnabled) {
      newWidgets = enabledWidgets.filter((w) => w !== id)
      newLayout = layout.filter((item) => item.i !== id)
    } else {
      newWidgets = [...enabledWidgets, id]
      const already = layout.find((item) => item.i === id)
      if (already) {
        newLayout = [...layout]
      } else {
        const maxY = layout.reduce((max, item) => Math.max(max, item.y + item.h), 0)
        newLayout = [...layout, {
          i: id, x: 0, y: maxY,
          w: def.defaultSize.w, h: def.defaultSize.h,
          minW: def.minSize.w, minH: def.minSize.h,
        }]
      }
    }

    setEnabledWidgets(newWidgets)
    setLayout(newLayout)
    scheduleSave(newLayout, newWidgets)
  }

  function handleReset() {
    const defaultLayout = getDefaultLayout()
    setLayout(defaultLayout)
    const defaultWidgets = allWidgetIds.filter((id) => id !== "skills")
    setEnabledWidgets(defaultWidgets)
    saveToStorage(defaultLayout, defaultWidgets)
  }

  const enabledLayoutItems = layout.filter((item) => enabledWidgets.includes(item.i as WidgetId))

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between gap-4 mb-10 bg-bg-card border border-border-light px-5 py-3 w-full shadow-sm rounded-lg">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-md">
            <span className="text-white font-bold text-sm tracking-tight font-sans">A</span>
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
              isEditing ? "bg-text-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"
            }`}
            title={isEditing ? "Lock dashboard" : "Customize layout"}
          >
            {isEditing ? <Lock className="w-3.5 h-3.5" /> : <Pencil className="w-3.5 h-3.5" />}
            <span className="hidden xs:inline">{isEditing ? "Lock" : "Edit"}</span>
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
      {loaded && (
        <div ref={containerRef}>
          <GridLayout
            width={containerWidth}
            gridConfig={{ cols: 24, rowHeight: 80, margin: [12, 16] }}
            dragConfig={{ enabled: isEditing, handle: ".drag-handle" }}
            resizeConfig={{ enabled: isEditing, handles: ["se"] }}
            layout={enabledLayoutItems}
            onLayoutChange={handleLayoutChange}
            autoSize
          >
            {enabledLayoutItems.map((item) => {
              const id = item.i as WidgetId
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
                  <div className="flex-1 overflow-y-auto"><WidgetComp /></div>
                </div>
              )
            })}
          </GridLayout>
        </div>
      )}

      <WidgetDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} enabledWidgets={enabledWidgets} onToggleWidget={handleToggleWidget} />

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
