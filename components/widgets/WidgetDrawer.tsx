"use client"

import { useRef, useEffect, useState } from "react"
import { X } from "lucide-react"
import { widgetDefinitions, type WidgetId } from "./registry"

type WidgetDrawerProps = {
  open: boolean
  onClose: () => void
  enabledWidgets: WidgetId[]
  onToggleWidget: (id: WidgetId) => void
}

export function WidgetDrawer({ open, onClose, enabledWidgets, onToggleWidget }: WidgetDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) {
      setMounted(true)
      requestAnimationFrame(() => setVisible(true))
    } else {
      setVisible(false)
      const timer = setTimeout(() => setMounted(false), 300)
      return () => clearTimeout(timer)
    }
  }, [open])

  useEffect(() => {
    if (!mounted) return
    if (visible) closeBtnRef.current?.focus()

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") { onClose(); return }

      if (e.key === "Tab") {
        const panel = drawerRef.current
        if (!panel) return
        const focusable = panel.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [mounted, visible, onClose])

  if (!mounted) return null

  return (
    <>
      <div
        className={`fixed inset-0 bg-text-primary/8 backdrop-blur-[1px] z-40 transition-all duration-300 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        role="presentation"
      />
      <div
        id="widget-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="widget-drawer-title"
        className={`fixed top-0 right-0 h-full w-80 bg-bg-card border-l border-border z-50 shadow-xl flex flex-col rounded-l-lg transition-transform duration-300 ease-in-out ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border-light">
          <div>
            <h2 id="widget-drawer-title" className="text-sm font-semibold text-text-primary font-sans tracking-tight">Widgets</h2>
            <p className="text-[11px] text-text-muted mt-0.5 font-sans">Show or hide dashboard sections</p>
          </div>
          <button ref={closeBtnRef} onClick={onClose} className="text-text-muted hover:text-text-primary transition-colors duration-200 p-1" title="Close" aria-label="Close drawer">
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
                role="switch"
                aria-checked={isEnabled}
                className={`w-full flex items-center gap-3 px-3 py-3 text-left transition-all duration-200 ${
                  isEnabled ? "text-text-primary" : "text-text-muted hover:text-text-secondary"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 transition-colors duration-200 ${isEnabled ? "text-accent" : ""}`} aria-hidden="true" />
                <span className="flex-1 text-sm font-medium font-sans">{w.title}</span>
                <div className={`w-9 h-[18px] rounded-full transition-colors duration-200 relative shrink-0 ${isEnabled ? "bg-accent" : "bg-border"}`} aria-hidden="true">
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
