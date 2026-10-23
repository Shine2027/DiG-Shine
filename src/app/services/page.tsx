import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Globe, Cpu, Workflow, Sparkles, TrendingUp, BarChart3, Target, Search } from "lucide-react";
import { SERVICES_DATA } from "@/data/cms";

export const metadata: Metadata = {
  title: "Services & Capabilities | Autonomous AI & Performance Marketing",
  description:
    "Explore DiG Shine's 8 core capabilities: AI Services, Business Automation, Performance Marketing, SEO/GEO, Brand Growth, Paid Advertising, and Analytics.",
};

export default function ServicesPage() {
  const serviceIcons = [Globe, Cpu, Workflow, Sparkles, TrendingUp, BarChart3, Target, Search];

  return (
    <div className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="badge-glow mb-4">SERVICE ARCHITECTURE</span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Eight Integrated Pillars for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981]">
              Total Market Dominance
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-6 leading-relaxed">
            We operate at the intersection of deep AI engineering, intelligent operational workflows, and aggressive performance marketing. Select a capability below to explore deep technical specifications and deliverables.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length] || Globe;

            return (
              <div
                key={service.slug}
                className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#00C8FF]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00C8FF]/15 to-[#007BFF]/15 border border-[#00C8FF]/30 flex items-center justify-center text-[#00C8FF] group-hover:scale-110 group-hover:shadow-glow-blue transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-mono text-[#00C8FF] px-3 py-1 rounded-full bg-[#00C8FF]/10 border border-[#00C8FF]/20">
                      SERVICE {service.number}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white group-hover:text-[#00C8FF] transition-colors mb-3">
                    {service.title}
                  </h2>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Sub-services breakdown */}
                  <div className="space-y-2 mb-8">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#64748B]">
                      INCLUDED CAPABILITIES:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.subServices.map((sub) => (
                        <div key={sub} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                          <Check className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Highlight */}
                  <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/[0.03] border border-white/5 mb-8">
                    {service.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-lg font-bold font-display text-white group-hover:text-[#10B981] transition-colors">
                          {m.value}
                        </div>
                        <p className="text-[10px] text-[#94A3B8]">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="btn-primary !py-3 !px-6 text-xs uppercase tracking-wider flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore {service.title} In-Depth</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
