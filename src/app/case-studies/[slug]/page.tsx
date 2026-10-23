import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/cms";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield, Cpu, Target, Award } from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((item) => item.slug === slug);
  if (!cs) return { title: "Case Study Not Found" };

  return {
    title: `${cs.title} | DiG Shine Case Study`,
    description: cs.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((item) => item.slug === slug);

  if (!cs) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Back Link */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#00C8FF] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ALL CASE STUDIES</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge-glow">{cs.category}</span>
            <span className="text-xs font-mono text-[#94A3B8]">{cs.industry}</span>
            <span className="text-xs text-[#64748B]">•</span>
            <span className="text-xs font-mono text-white">Client: {cs.client}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            {cs.title}
          </h1>

          <p className="text-base sm:text-lg text-[#CBD5E1] mt-6 leading-relaxed">
            {cs.summary}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 sm:p-8 rounded-3xl glass-panel border border-[#00C8FF]/25 shadow-glow-blue mb-16">
          {cs.metrics.map((m) => (
            <div key={m.label} className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-display font-bold text-white">
                {m.value}
              </div>
              <p className="text-xs text-[#00C8FF] font-mono mt-1">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Deep Dive Breakdown */}
        <div className="space-y-12 mb-16">
          {/* The Challenge */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-red-400" />
              The Challenge &amp; Bottleneck
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              {cs.challenge}
            </p>
          </div>

          {/* The Architectural Solution */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#00C8FF]" />
              The Engineered Solution
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              {cs.solution}
            </p>
          </div>

          {/* Documented Results */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-[#10B981]/25">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#10B981]" />
              Verified Results &amp; Outcomes
            </h2>
            <div className="space-y-3">
              {cs.results.map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white font-medium">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="p-6 rounded-2xl glass-card border border-white/10 mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] mb-3">
            DEPLOYED TECH STACK:
          </p>
          <div className="flex flex-wrap gap-2">
            {cs.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card rounded-3xl p-10 text-center border border-[#00C8FF]/30 shadow-glow-card">
          <h3 className="text-2xl font-bold text-white mb-2">
            Want Similar Results for Your Business?
          </h3>
          <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
            Let&apos;s build an autonomous growth system tailored to your specific metrics and tech stack.
          </p>
          <Link href="/contact" className="btn-primary !py-3.5 !px-8 text-xs uppercase tracking-wider">
            Book Free Consultation
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
