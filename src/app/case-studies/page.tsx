import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/cms";
import { ArrowUpRight, CheckCircle2, TrendingUp, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Work | Measurable Client Transformations",
  description:
    "Explore how DiG Shine scaled client revenues by 340%, automated operations with n8n, and achieved 4.8x blended ROAS through AI and performance marketing.",
};

export default function CaseStudiesPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="badge-glow mb-4">PORTFOLIO OF IMPACT</span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Proof, Grounded in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981]">
              Measurable Revenue Lift.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-6 leading-relaxed">
            We don&apos;t celebrate vanity traffic or superficial metrics. Every case study below documents real bottom-line pipeline generation, CAC reduction, and operational automation.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#00C8FF]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#00C8FF] px-3 py-1 rounded-full bg-[#00C8FF]/10 border border-[#00C8FF]/20">
                    {cs.category}
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">{cs.industry}</span>
                </div>

                <h2 className="text-2xl font-bold text-white group-hover:text-[#00C8FF] transition-colors mb-3">
                  {cs.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {cs.summary}
                </p>

                {/* Metrics Matrix */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 mb-6">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-lg font-bold font-display text-white group-hover:text-[#10B981] transition-colors">
                        {m.value}
                      </div>
                      <p className="text-[10px] text-[#94A3B8] mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {cs.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.03] text-[#CBD5E1] border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/case-studies/${cs.slug}`}
                className="btn-primary !py-3 !px-6 text-xs uppercase tracking-wider flex items-center justify-center gap-2 group/btn"
              >
                <span>Read Full Technical Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
