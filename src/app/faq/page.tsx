import type { Metadata } from "next";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { FAQ_DATA } from "@/data/cms";
import { openGraphForPage } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Everything You Need to Know",
  description:
    "Find clear answers about DiG Shine's engagement models, AI systems, n8n automations, performance marketing timelines, and pricing.",
  openGraph: openGraphForPage(
    "/faq",
    "Frequently Asked Questions | Everything You Need to Know",
    "Find clear answers about DiG Shine's engagement models, AI systems, n8n automations, performance marketing timelines, and pricing.",
  ),
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://digshine.in/faq#faq",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="py-8 bg-[#050505]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqAccordion />
    </div>
  );
}
