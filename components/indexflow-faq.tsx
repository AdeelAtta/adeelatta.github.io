"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  q: string
  a: string
}

export default function IndexFlowFAQ({ faqs }: { faqs: FAQItem[] }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {faqs.map((faq, i) => (
        <Accordion.Item
          key={i}
          value={`faq-${i}`}
          className="overflow-hidden rounded-lg border"
          style={{ backgroundColor: "#ffffff", borderColor: "#e1e5e8" }}
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-5 font-sans text-base font-semibold leading-[1.40] text-left transition-colors [&[data-state=open]>svg]:rotate-180"
              style={{ color: "#001e2b" }}
              onMouseEnter={(e) => { try { e.currentTarget.style.backgroundColor = "#f4f7f6" } catch {} }}
              onMouseLeave={(e) => { try { e.currentTarget.style.backgroundColor = "transparent" } catch {} }}
            >
              {faq.q}
              <ChevronDown className="size-4 shrink-0 transition-transform duration-200" style={{ color: "#5c6c7a" }} />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="px-6 pb-5 font-sans text-base leading-[1.55]" style={{ color: "#3d4f5b" }}>
              {faq.a}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
