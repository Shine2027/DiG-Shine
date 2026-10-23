import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | DiG Shine Agency",
  description: "Terms and conditions governing sprint engagements, SLA deliverables, and agency partnership with DiG Shine.",
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-xs font-mono text-[#00C8FF] mb-12">
          LAST REVISED: OCTOBER 2026 · APPLICABLE WORLDWIDE
        </p>

        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">1. Sprint Partnership Model</h2>
            <p>
              DiG Shine operates on a transparent, milestone-driven sprint framework. Each monthly or annual engagement defines specific capabilities to be engineered, tested, and handed over in scheduled production cycles.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">2. Service Level Agreements (SLA)</h2>
            <p>
              Depending on your selected partnership tier (Starter, Growth Engine, or Enterprise Dominance), DiG Shine provides dedicated communication channels with guaranteed response windows ranging from 24 hours down to 1 hour VIP emergency resolution.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">3. Client Responsibilities</h2>
            <p>
              Timely delivery of sprint milestones requires active collaboration, including access to ad accounts, necessary API keys, CRM credentials, and approval milestones within agreed working timeframes.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">4. Limitation of Liability</h2>
            <p>
              While DiG Shine applies battle-tested algorithms, strict QA benchmarks, and senior architectural oversight, we do not guarantee specific third-party platform actions (such as arbitrary algorithmic penalties or third-party ad network policy updates).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
