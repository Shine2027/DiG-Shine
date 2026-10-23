"use client";

import { PROCESS_STEPS } from "@/data/cms";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 relative bg-[#050505] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00C8FF]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <span className="badge-glow mb-3">THE GROWTH PROTOCOL</span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Our 6-Step Engineered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981]">
                Path to Market Dominance
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-md leading-relaxed">
            Every breakthrough follows an exact protocol. We eliminate guesswork with a systematic, sprint-driven pipeline from day one to 10x scale.
          </p>
        </div>

        {/* Process Flow Grid */}
        <div className="relative">
          {/* Animated Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-[#00C8FF] via-[#007BFF] to-[#10B981] opacity-30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="glass-card rounded-2xl p-6 border border-white/[0.08] hover:border-[#00C8FF]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative"
              >
                {/* Step Marker */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00C8FF]/15 to-[#007BFF]/15 border border-[#00C8FF]/30 flex items-center justify-center font-display font-bold text-lg text-white group-hover:scale-110 group-hover:shadow-glow-blue transition-all">
                    {step.step}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[#00C8FF]">
                    {step.badge}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#00C8FF] transition-colors mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#64748B] group-hover:text-[#10B981] transition-colors">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Phase {idx + 1}
                  </span>
                  {idx < 5 && (
                    <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
