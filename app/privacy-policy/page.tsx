import type { Metadata } from "next"
import PrivacyPolicy from "@/components/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy — Adeel Atta",
  description: "Privacy policy for Adeel Atta's portfolio website.",
  openGraph: {
    title: "Privacy Policy — Adeel Atta",
    description: "Privacy policy for Adeel Atta's portfolio website.",
    url: "https://adeelatta.dev/privacy-policy",
    images: [{ url: "https://adeelatta.dev/images/design-mode/profile.webp", width: 400, height: 400, alt: "Adeel Atta profile photo" }],
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
