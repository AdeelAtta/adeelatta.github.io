import type { Metadata } from "next"
import TermsOfService from "@/components/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service — Adeel Atta",
  description: "Terms of service for Adeel Atta's portfolio website.",
  openGraph: {
    title: "Terms of Service — Adeel Atta",
    description: "Terms of service for Adeel Atta's portfolio website.",
    url: "https://adeelatta.dev/terms-of-service",
    images: [{ url: "https://adeelatta.dev/images/design-mode/profile.webp", width: 400, height: 400, alt: "Adeel Atta profile photo" }],
  },
}

export default function TermsOfServicePage() {
  return <TermsOfService />;
}
