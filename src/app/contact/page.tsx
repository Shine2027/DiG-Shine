import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Book Free Consultation | Direct Leadership Desk",
  description:
    "Schedule a confidential strategy call with DiG Shine founders Karan Verma and Manoj. We evaluate your digital bottlenecks, AI potential, and growth roadmap.",
};

export default function ContactPage() {
  return (
    <div className="py-8 bg-[#050505]">
      <ContactSection />
    </div>
  );
}
