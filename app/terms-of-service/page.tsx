import type { Metadata } from "next"
import TermsOfService from "@/components/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service - Adeel Atta",
  description: "Terms of service for Adeel Atta's portfolio website.",
  alternates: { canonical: "https://adeelatta.dev/terms-of-service" },
  openGraph: {
    title: "Terms of Service - Adeel Atta",
    description: "Terms of service for Adeel Atta's portfolio website.",
    url: "https://adeelatta.dev/terms-of-service",
    images: [{ url: "https://adeelatta.dev/images/design-mode/profile.webp", width: 400, height: 400, alt: "Adeel Atta profile photo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Adeel Atta",
    description: "Terms of service for Adeel Atta's portfolio website.",
    images: ["https://adeelatta.dev/images/design-mode/profile.webp"],
  },
}

export default function TermsOfServicePage() {
  return <TermsOfService />;
}
