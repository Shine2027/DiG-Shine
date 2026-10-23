import type { Metadata } from "next";
import { FaqAccordion } from "@/components/home/FaqAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Everything You Need to Know",
  description:
    "Find clear answers about DiG Shine's engagement models, AI systems, n8n automations, performance marketing timelines, and pricing.",
};

export default function FaqPage() {
  return (
    <div className="py-8 bg-[#050505]">
      <FaqAccordion />
    </div>
  );
}
