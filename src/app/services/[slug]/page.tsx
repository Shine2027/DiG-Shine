import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/cms";
import { ArrowUpRight, ArrowLeft, Check, Sparkles, Shield, Cpu, HelpCircle } from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | DiG Shine Agency`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00C8FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Breadcrumb / Back link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#00C8FF] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ALL SERVICES</span>
        </Link>

        {/* Hero */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8">
            <span className="badge-glow mb-4">CAPABILITY {service.number}</span>
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-[#00C8FF] font-medium mt-4">
              {service.heroBenefit}
            </p>
            <p className="text-base sm:text-lg text-[#94A3B8] mt-6 leading-relaxed">
              {service.fullDesc}
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-6 mt-8 p-6 rounded-2xl glass-panel border border-white/10">
              {service.metrics.map((m) => (
                <div key={m.label} className="min-w-[120px]">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {m.value}
                  </div>
                  <p className="text-xs text-[#10B981] font-mono mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick CTA Box */}
          <div className="lg:col-span-4 glass-panel rounded-3xl p-8 border border-[#00C8FF]/30 shadow-glow-card">
            <h3 className="text-lg font-bold text-white mb-2">Deploy {service.title}</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
              Launch this capability in an agile 2-week sprint with dedicated engineering stewardship.
            </p>
            <Link
              href={`/contact?service=${service.slug}`}
              className="w-full btn-primary !py-3.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 mb-3"
            >
              <span>Book Discovery Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <p className="text-[11px] text-center text-[#64748B]">
              Includes 30-day post-launch optimization SLA.
            </p>
          </div>
        </div>

        {/* Deliverables & Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Sub-services & Features */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#00C8FF]" />
              Core Capabilities &amp; Architecture
            </h3>
            <div className="space-y-4">
              {service.features.map((feat) => (
                <div key={feat} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00C8FF]/15 text-[#00C8FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-[#CBD5E1]">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Concrete Deliverables */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#10B981]" />
              Tangible Sprint Deliverables
            </h3>
            <div className="space-y-4">
              {service.deliverables.map((del) => (
                <div key={del} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-[#CBD5E1]">{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="glass-card rounded-3xl p-8 border border-white/10 mb-20">
          <p className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] mb-4">
            INTEGRATED TECHNOLOGIES &amp; PROTOCOLS
          </p>
          <div className="flex flex-wrap gap-2.5">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-white hover:border-[#00C8FF]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="max-w-3xl mx-auto mb-20">
            <h3 className="text-2xl font-display font-bold text-white text-center mb-8">
              Frequently Asked Questions About {service.title}
            </h3>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <div key={faq.q} className="glass-panel rounded-2xl p-6 border border-white/10">
                  <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#00C8FF]" />
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
