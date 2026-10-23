import type { Metadata } from "next";
import { PricingCalculator } from "@/components/home/PricingCalculator";
import { Check, X, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing Plans & ROI Estimator | Transparent Sprint Retainers",
  description:
    "Explore DiG Shine's investment tiers: Starter ($2,490/mo), Growth Engine ($4,990/mo), and Enterprise Dominance ($9,990/mo). Interactive ROI calculator included.",
};

export default function PricingPage() {
  const comparisonRows = [
    { feature: "Dedicated Slack / WhatsApp Channel", starter: true, growth: true, enterprise: true },
    { feature: "Autonomous AI Copilot / RAG System", starter: "1 Basic", growth: "Up to 3 Custom", enterprise: "Unlimited & Private LLM" },
    { feature: "n8n / Make Workflow Automations", starter: "1 Core Flow", growth: "Full Operations Hub", enterprise: "Enterprise Zero-Touch" },
    { feature: "Omnichannel Paid Media Management", starter: "1 Channel", growth: "Google + Meta + LinkedIn", enterprise: "Unlimited + Programmatic" },
    { feature: "Generative Engine Optimization (GEO & AEO)", starter: false, growth: true, enterprise: true },
    { feature: "High-Converting Landing Page Design", starter: "1 Page", growth: "Continuous CRO Testing", enterprise: "Full Custom Design System" },
    { feature: "Guaranteed Incident SLA", starter: "< 24 Hours", growth: "< 4 Hours Priority", enterprise: "< 1 Hour VIP 24/7" },
    { feature: "Direct Stewardship by Karan Verma & Manoj", starter: "Weekly", growth: "Bi-Weekly Strategy Sprints", enterprise: "Direct Executive Advisory" },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <PricingCalculator />

        {/* Detailed Feature Comparison Matrix */}
        <div className="mt-16 pt-16 border-t border-white/10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-glow mb-3">TIER COMPARISON</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
              Detailed Feature Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-2">
              Compare architectural scope across our three core partnership models.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white font-mono uppercase text-[11px]">
                  <th className="pb-4 font-bold">Capabilities</th>
                  <th className="pb-4 font-bold text-center">Starter</th>
                  <th className="pb-4 font-bold text-center text-[#00C8FF]">Growth Engine</th>
                  <th className="pb-4 font-bold text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 text-[#CBD5E1] font-medium pr-4">{row.feature}</td>
                    <td className="py-4 text-center text-[#94A3B8]">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check className="w-4 h-4 text-[#10B981] mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-white/20 mx-auto" />
                        )
                      ) : (
                        row.starter
                      )}
                    </td>
                    <td className="py-4 text-center text-white font-semibold bg-[#00C8FF]/05">
                      {typeof row.growth === "boolean" ? (
                        row.growth ? (
                          <Check className="w-4 h-4 text-[#00C8FF] mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-white/20 mx-auto" />
                        )
                      ) : (
                        row.growth
                      )}
                    </td>
                    <td className="py-4 text-center text-[#CBD5E1]">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="w-4 h-4 text-[#10B981] mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-white/20 mx-auto" />
                        )
                      ) : (
                        row.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
