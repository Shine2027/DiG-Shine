import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, Cpu, Zap, Globe, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Culture | Join DiG Shine",
  description:
    "Join the elite team building autonomous AI systems, intelligent workflow engineering, and category-defining brand experiences at DiG Shine.",
};

export default function CareersPage() {
  const roles = [
    {
      title: "Senior AI & RAG Systems Engineer",
      type: "Full-Time · Remote / Hybrid",
      location: "India / Global Remote",
      stack: ["Python", "LangChain", "Claude 3.7", "Pinecone", "Next.js"],
      desc: "Architect autonomous agent swarms, vector retrieval pipelines, and private enterprise LLM fine-tuning for global clients.",
    },
    {
      title: "Performance Marketing & Growth Lead",
      type: "Full-Time · Remote",
      location: "Global Remote",
      stack: ["Google Ads", "Meta Ads", "Triple Whale", "CAPI", "CRO"],
      desc: "Manage and scale multi-million-dollar omnichannel ad budgets with algorithmic testing, relentless CAC reduction, and high ROAS.",
    },
    {
      title: "Enterprise Automation Architect",
      type: "Full-Time · Remote",
      location: "Global Remote",
      stack: ["n8n", "Make.com", "Zapier", "REST APIs", "PostgreSQL"],
      desc: "Build mission-critical CRM, billing, and operational automation flows connecting disparate enterprise software systems.",
    },
    {
      title: "Lead UI/UX & Motion Designer",
      type: "Full-Time · Remote",
      location: "Global Remote",
      stack: ["Figma", "Three.js", "Framer Motion", "Tailwind CSS"],
      desc: "Create $50k+ agency caliber digital experiences, luxury dark themes, kinetic typography, and Apple-grade micro-interactions.",
    },
  ];

  const benefits = [
    "100% Flexible Remote Culture with Worldwide Teammates",
    "Competitive Base Salary + Performance Profit Sharing",
    "Top-of-the-Line Hardware (MacBook Pro M3/M4 Max)",
    "Annual Learning & AI API Budget ($3,000/year)",
    "Comprehensive Health & Wellness Coverage",
    "Direct Mentorship with Founders Karan Verma & Manoj",
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="badge-glow mb-4">JOIN THE FORWARD-THINKERS</span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Build the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981]">
              Autonomous Growth
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-6 leading-relaxed">
            We don&apos;t do bureaucratic red tape or pointless meetings. We hire exceptional craftsmen, give them complete autonomy, and deploy systems that solve real problems.
          </p>
        </div>

        {/* Perks & Culture Grid */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 mb-20">
          <h2 className="text-2xl font-bold text-white mb-6">Why High Performers Choose DiG Shine</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#CBD5E1]">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions List */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8">
            Open Positions ({roles.length})
          </h2>

          <div className="space-y-4">
            {roles.map((role) => (
              <div
                key={role.title}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#00C8FF]/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-[#00C8FF] px-2.5 py-0.5 rounded-full bg-[#00C8FF]/10">
                      {role.type}
                    </span>
                    <span className="text-xs text-[#94A3B8] font-mono">{role.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#00C8FF] transition-colors mb-2">
                    {role.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
                    {role.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {role.stack.map((s) => (
                      <span key={s} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-[#CBD5E1]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={`mailto:hello@digshine.com?subject=${encodeURIComponent(
                      `Career Application: ${role.title}`
                    )}`}
                    className="btn-primary !py-3 !px-6 text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
