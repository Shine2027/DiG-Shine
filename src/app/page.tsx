import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2, Shield, Zap, TrendingUp, Layers, Cpu, Globe, Workflow, BarChart3, Target, Search } from "lucide-react";
import { HeroCanvas } from "@/components/home/HeroCanvas";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PricingCalculator } from "@/components/home/PricingCalculator";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { TechMarquee } from "@/components/home/TechMarquee";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { ContactSection } from "@/components/home/ContactSection";
import { SERVICES_DATA, CASE_STUDIES, INDUSTRIES_SERVED, AGENCY_INFO } from "@/data/cms";

export default function HomePage() {
  const serviceIcons = [Globe, Cpu, Workflow, Sparkles, TrendingUp, BarChart3, Target, Search];

  return (
    <div className="relative overflow-hidden bg-[#050505]">
      {/* =========================================================================
          HERO SECTION
      ========================================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 lg:py-20 border-b border-white/10 tech-grid">
        {/* Ambient Hero Gradient Auras */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#00C8FF]/15 via-[#007BFF]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#10B981]/12 via-[#00F0FF]/08 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Copy & Calls to Action */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Eyebrow badge */}
              <div className="badge-glow mb-6 animate-pulse-glow">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                <span>AI · AUTOMATION · PERFORMANCE MARKETING</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Scale Your Business with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981] drop-shadow-[0_0_25px_rgba(0,200,255,0.4)]">
                  AI, Automation
                </span>{" "}
                &amp; Performance Marketing
              </h1>

              {/* Subheading Description */}
              <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed mb-8">
                We help ambitious businesses grow faster through bespoke AI solutions, intelligent workflow automations, digital marketing, SEO, paid advertising, and high-converting growth strategies.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="btn-primary !py-4 !px-8 text-xs sm:text-sm uppercase tracking-wider font-bold shadow-glow-blue flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  href="/services"
                  className="btn-secondary !py-4 !px-8 text-xs sm:text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Micro-proof indicators */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Verified 4.8x Blended ROAS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#00C8FF]" />
                  <span>Enterprise Security &amp; NDA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#00F0FF]" />
                  <span>14-Day Deployment Velocity</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Three.js Interactive Floating Core */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center">
              <HeroCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ANIMATED STATS COUNTER
      ========================================================================== */}
      <StatsCounter />

      {/* =========================================================================
          WHY CHOOSE DIG SHINE (PHILOSOPHY & DIFFERENTIATORS)
      ========================================================================== */}
      <section className="py-24 sm:py-32 relative bg-[#050505] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="badge-glow mb-4">THE UNFAIR ADVANTAGE</span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                Why Industry Leaders Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#10B981]">
                  DiG Shine
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] mt-5 leading-relaxed">
                Traditional agencies sell disconnected tactics that keep you trapped in manual work. DiG Shine builds autonomous growth systems that scale exponentially with zero headcount bloat.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Link href="/about" className="btn-secondary !py-3 !px-6 text-xs uppercase tracking-wider">
                  Read Our Full Story →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                {
                  num: "01",
                  title: "AI Powered Solutions",
                  desc: "Proprietary LLMs, autonomous support agents, and vector knowledge bases that run 24/7.",
                  border: "hover:border-[#00C8FF]/50",
                },
                {
                  num: "02",
                  title: "Growth Driven Strategy",
                  desc: "Obsessive focus on CAC reduction, pipeline velocity, and measurable closed-won revenue.",
                  border: "hover:border-[#10B981]/50",
                },
                {
                  num: "03",
                  title: "Connected Operations",
                  desc: "Zero-touch n8n, Make, and CRM automations that eliminate 40+ hours of repetitive work per week.",
                  border: "hover:border-[#007BFF]/50",
                },
                {
                  num: "04",
                  title: "Direct Founder Stewardship",
                  desc: "Direct access to Karan Verma and Manoj. No junior account managers or games of telephone.",
                  border: "hover:border-[#00F0FF]/50",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className={`glass-card rounded-2xl p-6 border border-white/[0.08] ${item.border} transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-display font-extrabold text-[#00C8FF]">
                      {item.num}
                    </span>
                    <Sparkles className="w-4 h-4 text-white/30 group-hover:text-[#10B981] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#00C8FF] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES SECTION (ALL 8 CORE PILLARS)
      ========================================================================== */}
      <section id="services" className="py-24 sm:py-32 relative bg-[#050505] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="badge-glow mb-3">WORLD-CLASS CAPABILITIES</span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Comprehensive Growth Systems, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981]">
                  Engineered from Every Angle
                </span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#94A3B8] max-w-md">
              From autonomous AI copilots to hyper-targeted performance marketing, explore our 8 integrated pillars designed for market dominance.
            </p>
          </div>

          {/* 8 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, idx) => {
              const Icon = serviceIcons[idx % serviceIcons.length] || Globe;

              return (
                <div
                  key={service.slug}
                  className="glass-card rounded-3xl p-7 border border-white/[0.08] hover:border-[#00C8FF]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Subtle top light bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00C8FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00C8FF]/15 to-[#007BFF]/15 border border-[#00C8FF]/30 flex items-center justify-center text-[#00C8FF] group-hover:scale-110 group-hover:shadow-glow-blue transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-[#94A3B8]">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#00C8FF] transition-colors mb-2.5">
                      {service.title}
                    </h3>

                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Sub-services Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {service.subServices.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-[#CBD5E1] border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Action Button */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white group-hover:text-[#00C8FF] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE 6-STEP PROCESS
      ========================================================================== */}
      <ProcessSection />

      {/* =========================================================================
          FEATURED WORK & CASE STUDIES
      ========================================================================== */}
      <section id="work" className="py-24 sm:py-32 relative bg-[#050505] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="badge-glow mb-3">DOCUMENTED IMPACT</span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Featured Case Studies &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981]">
                  High-Impact Transformations
                </span>
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="btn-secondary !py-3 !px-6 text-xs uppercase tracking-wider"
            >
              View All 8 Case Studies →
            </Link>
          </div>

          {/* Featured Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.slice(0, 4).map((cs) => (
              <div
                key={cs.id}
                className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#00C8FF]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#00C8FF] px-2.5 py-1 rounded-lg bg-[#00C8FF]/10 border border-[#00C8FF]/20">
                      {cs.category}
                    </span>
                    <span className="text-xs text-[#94A3B8] font-mono">{cs.industry}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00C8FF] transition-colors mb-3">
                    {cs.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {cs.summary}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 mb-6">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-base sm:text-lg font-bold font-display text-white group-hover:text-[#10B981] transition-colors">
                          {m.value}
                        </div>
                        <p className="text-[10px] text-[#94A3B8] leading-tight mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00C8FF] hover:underline"
                >
                  <span>Read Full Architecture Breakdown</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRICING & INTERACTIVE CALCULATOR
      ========================================================================== */}
      <PricingCalculator />

      {/* =========================================================================
          TESTIMONIALS SLIDER
      ========================================================================== */}
      <TestimonialSlider />

      {/* =========================================================================
          INDUSTRIES WE SERVE
      ========================================================================== */}
      <section className="py-24 sm:py-32 relative bg-[#050505] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-glow mb-4">GLOBAL VERSATILITY</span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Industries We Accelerate with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981]">
                Autonomous Systems
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-4">
              Our proven growth frameworks adapt across high-leverage sectors where speed, precision, and automation create immense competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {INDUSTRIES_SERVED.map((ind) => (
              <div
                key={ind.name}
                className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-[#00C8FF]/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <h4 className="text-sm font-bold text-white group-hover:text-[#00C8FF] transition-colors">
                    {ind.name}
                  </h4>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TECHNOLOGY ARSENAL
      ========================================================================== */}
      <TechMarquee />

      {/* =========================================================================
          FAQ ACCORDION WITH INSTANT SEARCH
      ========================================================================== */}
      <FaqAccordion />

      {/* =========================================================================
          CONSULTATION BOOKING & CONTACT SECTION
      ========================================================================== */}
      <ContactSection />
    </div>
  );
}
