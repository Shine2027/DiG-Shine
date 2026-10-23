"use client";

import { useState } from "react";
import Link from "next/link";
import { PRICING_PLANS } from "@/data/cms";
import { Check, Sparkles, ArrowUpRight, Calculator, ShieldCheck } from "lucide-react";

export function PricingCalculator() {
  const [annualBilling, setAnnualBilling] = useState(false);
  const [currentRevenue, setCurrentRevenue] = useState(50000); // $50k/mo
  const [growthTarget, setGrowthTarget] = useState(30); // 30% lift

  const estimatedLift = Math.round(currentRevenue * (growthTarget / 100));
  const estimatedAnnualImpact = estimatedLift * 12;
  const estimatedRoiRatio = Math.round((estimatedAnnualImpact / (4990 * 12)) * 10) / 10;

  return (
    <section id="pricing" className="py-24 sm:py-32 relative bg-[#050505]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-r from-[#00C8FF]/10 via-[#007BFF]/10 to-[#10B981]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-glow mb-4">TRANSPARENT VALUE ARCHITECTURE</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Investment Plans Built for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981]">
              Predictable, Compounding Returns
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-4 leading-relaxed">
            No bloated agency retainers with zero accountability. Choose a sprint-based partnership model with clear deliverables and transparent milestones.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                !annualBilling
                  ? "bg-[#00C8FF] text-[#050505] shadow-glow-blue"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Monthly Sprints
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                annualBilling
                  ? "bg-gradient-to-r from-[#00C8FF] to-[#10B981] text-[#050505] shadow-glow-cyan"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              <span>Annual Partnership</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-[#10B981] font-mono">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {PRICING_PLANS.map((plan) => {
            const price = annualBilling ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.recommended
                    ? "glass-panel border-2 border-[#00C8FF] shadow-[0_0_50px_rgba(0,200,255,0.25)] -translate-y-2 lg:-translate-y-4"
                    : "glass-card border border-white/10 hover:border-white/20"
                }`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-[#00C8FF] to-[#10B981] text-[#050505] shadow-glow-blue flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" /> MOST POPULAR PARTNERSHIP
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.05] text-[#00C8FF] border border-white/10">
                      {plan.tierBadge}
                    </span>
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                    <span className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                      ${price.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#94A3B8] font-mono">/ month</span>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] font-mono uppercase tracking-widest text-[#64748B]">
                      WHAT&apos;S INCLUDED:
                    </p>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                        <div className="w-4 h-4 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href={`/contact?plan=${plan.id}`}
                    className={`w-full ${
                      plan.recommended ? "btn-primary" : "btn-secondary"
                    } !py-3.5 !text-xs uppercase tracking-wider flex items-center justify-center gap-2 group`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <p className="text-[11px] text-center text-[#64748B] mt-3">
                    {plan.idealFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive ROI & Pipeline Impact Estimator */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#00C8FF]/20 shadow-glow-card relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00C8FF]/15 border border-[#00C8FF]/30 flex items-center justify-center text-[#00C8FF]">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Interactive Pipeline ROI Estimator</h3>
                <p className="text-xs text-[#94A3B8]">
                  Simulate your projected return on investment from AI &amp; growth systems.
                </p>
              </div>
            </div>
            <span className="badge-glow !text-[#10B981] !border-[#10B981]/30">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Based on 100+ Client Data
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Sliders */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#94A3B8]">CURRENT MONTHLY REVENUE</span>
                  <span className="text-[#00C8FF] font-bold text-sm">
                    ${currentRevenue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={currentRevenue}
                  onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00C8FF]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#94A3B8]">EXPECTED EFFICIENCY &amp; CONVERSION LIFT</span>
                  <span className="text-[#10B981] font-bold text-sm">{growthTarget}%</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="60"
                  step="5"
                  value={growthTarget}
                  onChange={(e) => setGrowthTarget(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                />
              </div>
            </div>

            {/* Results Display */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 grid grid-cols-2 gap-4">
              <div>
                <p className="text-[11px] font-mono text-[#94A3B8] uppercase">ADDITIONAL REVENUE / MO</p>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#00C8FF] mt-1">
                  +${estimatedLift.toLocaleString()}
                </div>
              </div>
              <div>
                <p className="text-[11px] font-mono text-[#94A3B8] uppercase">ANNUAL REVENUE IMPACT</p>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#10B981] mt-1">
                  +${estimatedAnnualImpact.toLocaleString()}
                </div>
              </div>
              <div className="col-span-2 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#94A3B8]">Est. Growth Engine Multiple:</span>
                <span className="text-sm font-mono font-bold text-white bg-[#00C8FF]/10 border border-[#00C8FF]/30 px-3 py-1 rounded-lg">
                  {estimatedRoiRatio}x Annual Return
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
