import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DiG Shine Agency",
  description: "DiG Shine privacy policy detailing enterprise data handling, AI zero-retention compliance, and client confidential information safeguarding.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-[#00C8FF] mb-12">
          EFFECTIVE DATE: OCTOBER 2026 · VERSION 2.1
        </p>

        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">1. Executive Overview</h2>
            <p>
              At DiG Shine (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we take enterprise client confidentiality, intellectual property security, and personal data privacy with the highest level of gravity. This policy outlines how information is collected, safeguarded, and processed when interacting with our digital presence or retaining our AI and growth services.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">2. AI Zero-Retention Policy</h2>
            <p>
              When engineering custom LLM solutions, RAG vector systems, or autonomous agents for clients, we exclusively utilize enterprise tier API agreements that strictly enforce zero data retention. Your company documents, internal knowledge bases, and customer interactions are never used to train public foundation models.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">3. Information Collection &amp; Use</h2>
            <p>
              We collect information provided directly through consultation requests (such as your name, corporate email, phone number, and growth goals). We use this information solely to evaluate project scope, execute discovery sessions, and administer agreed-upon client sprints.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">4. Intellectual Property &amp; Code Ownership</h2>
            <p>
              Unless otherwise specified in an enterprise statement of work, all custom code, n8n workflow JSON blueprints, ad creatives, and proprietary software developed during paid client engagements transfer 100% to client ownership upon sprint completion and invoice settlement.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">5. Inquiries &amp; Data Rights</h2>
            <p>
              To request data removal or discuss mutual Non-Disclosure Agreements (NDAs), reach our leadership desk directly at <span className="text-[#00C8FF] font-mono">hello@digshine.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
