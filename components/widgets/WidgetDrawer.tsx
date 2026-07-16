"use client"

import { X } from "lucide-react"
import { widgetDefinitions, type WidgetId } from "./registry"

type WidgetDrawerProps = {
  open: boolean
  onClose: () => void
  enabledWidgets: WidgetId[]
  onToggleWidget: (id: WidgetId) => void
}

export function WidgetDrawer({ open, onClose, enabledWidgets, onToggleWidget }: WidgetDrawerProps) {
  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 bg-text-primary/8 backdrop-blur-[1px] z-40" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-80 bg-bg-card border-l border-border z-50 shadow-xl flex flex-col rounded-l-lg">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border-light">
          <div>
            <h2 className="text-sm font-semibold text-text-primary font-sans tracking-tight">Widgets</h2>
            <p className="text-[11px] text-text-muted mt-0.5 font-sans">Show or hide dashboard sections</p>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-text-primary transition-colors duration-200 p-1" title="Close">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-0.5">
          {widgetDefinitions.map((w) => {
            const Icon = w.icon
            const isEnabled = enabledWidgets.includes(w.id)
            return (
              <button
                key={w.id}
                onClick={() => onToggleWidget(w.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 text-left transition-all duration-200 ${
                  isEnabled ? "text-text-primary" : "text-text-muted hover:text-text-secondary"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 transition-colors duration-200 ${isEnabled ? "text-accent" : ""}`} />
                <span className="flex-1 text-sm font-medium font-sans">{w.title}</span>
                <div className={`w-9 h-[18px] rounded-full transition-colors duration-200 relative shrink-0 ${isEnabled ? "bg-accent" : "bg-border"}`}>
                  <div className={`absolute top-0.5 w-3.5 h-3.5 rounded-full bg-bg-card transition-all duration-200 shadow-sm ${isEnabled ? "left-[18px]" : "left-0.5"}`} />
                </div>
              </button>
            )
          })}
        </div>
        <div className="px-5 py-3 border-t border-border-light">
          <p className="text-[10px] text-text-muted text-center font-sans">{enabledWidgets.length} of {widgetDefinitions.length} visible</p>
        </div>
      </div>
    </>
  )
}
