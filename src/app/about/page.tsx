import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Shield, Sparkles, Cpu, Award, Target, Zap } from "lucide-react";
import { AGENCY_INFO } from "@/data/cms";

export const metadata: Metadata = {
  title: "About Us | Leadership & Philosophy",
  description:
    "Meet Karan Verma (CEO & Founder) and Manoj (Co-Founder), the architects behind DiG Shine. Learn how we engineer autonomous growth systems.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00C8FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="badge-glow mb-4">OUR DNA &amp; LEADERSHIP</span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            We Build Growth Engines That Run on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981]">
              Intelligence, Not Manual Grind.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-6 leading-relaxed">
            Founded with an uncompromising belief that modern companies should scale with autonomous AI and workflow engineering, DiG Shine bridges elite Silicon Valley technology with direct response performance marketing.
          </p>
        </div>

        {/* Agency Pillars Matrix */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <div className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-[#00C8FF]/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#00C8FF]/15 border border-[#00C8FF]/30 flex items-center justify-center text-[#00C8FF] mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Automate</h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              We eliminate friction. Repetitive manual tasks, disconnected CRMs, and slow lead follow-ups are replaced with zero-latency autonomous workflows.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-[#10B981]/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Innovate</h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              We stay 18 months ahead of the curve. From Generative Engine Optimization (GEO) to private enterprise RAG copilots, we build systems your competitors can&apos;t easily replicate.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-[#007BFF]/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#007BFF]/15 border border-[#007BFF]/30 flex items-center justify-center text-[#007BFF] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Elevate</h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              We transform brand perception and pipeline economics. Our partners don&apos;t just get traffic; they achieve category authority, higher prices, and compounding customer lifetime value.
            </p>
          </div>
        </div>

        {/* Leadership Profiles */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-glow mb-3">EXECUTIVE STEWARDSHIP</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Meet the Founders
            </h2>
            <p className="text-sm text-[#94A3B8] mt-3">
              Direct involvement from experienced builders at every phase of your growth trajectory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder 1: Karan Verma */}
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#00C8FF]/50 transition-all duration-300 relative group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C8FF] to-[#007BFF] p-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-[#050505] rounded-[14px] flex items-center justify-center text-white font-display font-extrabold text-2xl">
                    KV
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00C8FF] transition-colors">
                    {AGENCY_INFO.founders.ceo.name}
                  </h3>
                  <p className="text-xs font-mono text-[#00C8FF] tracking-wider uppercase">
                    {AGENCY_INFO.founders.ceo.role}
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    AI Systems Architect &amp; Performance Director
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-6">
                {AGENCY_INFO.founders.ceo.bio} Karan oversees AI model fine-tuning, multi-agent frameworks, algorithmic performance marketing, and creative brand direction.
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#94A3B8]">
                <span>Specialization: Generative AI &amp; Paid Scaling</span>
                <span className="text-[#00C8FF] font-mono">hello@digshine.com</span>
              </div>
            </div>

            {/* Founder 2: Manoj */}
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#10B981]/50 transition-all duration-300 relative group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#00C8FF] p-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-[#050505] rounded-[14px] flex items-center justify-center text-white font-display font-extrabold text-2xl">
                    M
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#10B981] transition-colors">
                    {AGENCY_INFO.founders.coFounder.name}
                  </h3>
                  <p className="text-xs font-mono text-[#10B981] tracking-wider uppercase">
                    {AGENCY_INFO.founders.coFounder.role}
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Head of Operations &amp; Enterprise Automations
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-6">
                {AGENCY_INFO.founders.coFounder.bio} Manoj drives enterprise workflow engineering, n8n/Make orchestration, operational excellence, and strategic partnership scaling.
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#94A3B8]">
                <span>Specialization: Enterprise Workflows &amp; CRM</span>
                <span className="text-[#10B981] font-mono">hello@digshine.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="glass-card rounded-3xl p-10 sm:p-14 border border-[#00C8FF]/20 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
            Ready to Partner with DiG Shine?
          </h3>
          <p className="text-xs sm:text-sm text-[#94A3B8] max-w-lg mx-auto mb-6">
            Schedule a confidential 30-minute discovery call directly with Karan Verma or Manoj to review your architecture.
          </p>
          <Link href="/contact" className="btn-primary !py-3.5 !px-8 text-xs uppercase tracking-wider">
            Schedule Discovery Call
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
