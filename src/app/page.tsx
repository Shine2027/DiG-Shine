import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2, Shield, Zap, TrendingUp, Layers, Cpu, Globe, Workflow, BarChart3, Target, Search } from "lucide-react";
import { HeroCanvas } from "@/components/home/HeroCanvas";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { ContactSection } from "@/components/home/ContactSection";
import { SERVICES_DATA, INDUSTRIES_SERVED, AGENCY_INFO } from "@/data/cms";

export default function HomePage() {
  const serviceIcons = [Globe, Cpu, Workflow, Sparkles, TrendingUp, BarChart3, Target, Search];

  const pillarThemes = [
    {
      iconGrad: "from-[#00F0FF]/25 to-[#007BFF]/20",
      iconBorder: "border-[#00F0FF]/40",
      iconText: "text-[#00F0FF]",
      hoverBorder: "hover:border-[#00F0FF]/60",
      hoverShadow: "hover:shadow-[0_20px_50px_-10px_rgba(0,240,255,0.25)]",
      lightBar: "via-[#00F0FF]",
      numBadge: "text-[#00F0FF] border-[#00F0FF]/30 bg-[#00F0FF]/10",
      tagHover: "hover:border-[#00F0FF]/40 hover:text-[#00F0FF]",
    },
    {
      iconGrad: "from-[#10B981]/25 to-[#00F0FF]/20",
      iconBorder: "border-[#10B981]/40",
      iconText: "text-[#10B981]",
      hoverBorder: "hover:border-[#10B981]/60",
      hoverShadow: "hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.25)]",
      lightBar: "via-[#10B981]",
      numBadge: "text-[#10B981] border-[#10B981]/30 bg-[#10B981]/10",
      tagHover: "hover:border-[#10B981]/40 hover:text-[#10B981]",
    },
    {
      iconGrad: "from-[#007BFF]/25 to-[#8B5CF6]/20",
      iconBorder: "border-[#007BFF]/40",
      iconText: "text-[#00C8FF]",
      hoverBorder: "hover:border-[#007BFF]/60",
      hoverShadow: "hover:shadow-[0_20px_50px_-10px_rgba(0,123,255,0.25)]",
      lightBar: "via-[#007BFF]",
      numBadge: "text-[#00C8FF] border-[#007BFF]/30 bg-[#007BFF]/10",
      tagHover: "hover:border-[#007BFF]/40 hover:text-[#00C8FF]",
    },
    {
      iconGrad: "from-[#8B5CF6]/25 to-[#EC4899]/20",
      iconBorder: "border-[#8B5CF6]/40",
      iconText: "text-[#A78BFA]",
      hoverBorder: "hover:border-[#8B5CF6]/60",
      hoverShadow: "hover:shadow-[0_20px_50px_-10px_rgba(139,92,246,0.25)]",
      lightBar: "via-[#8B5CF6]",
      numBadge: "text-[#A78BFA] border-[#8B5CF6]/30 bg-[#8B5CF6]/10",
      tagHover: "hover:border-[#8B5CF6]/40 hover:text-[#A78BFA]",
    },
    {
      iconGrad: "from-[#F59E0B]/25 to-[#10B981]/20",
      iconBorder: "border-[#F59E0B]/40",
      iconText: "text-[#FBBF24]",
      hoverBorder: "hover:border-[#F59E0B]/60",
      hoverShadow: "hover:shadow-[0_20px_50px_-10px_rgba(245,158,11,0.25)]",
      lightBar: "via-[#F59E0B]",
      numBadge: "text-[#FBBF24] border-[#F59E0B]/30 bg-[#F59E0B]/10",
      tagHover: "hover:border-[#F59E0B]/40 hover:text-[#FBBF24]",
    },
    {
      iconGrad: "from-[#00F0FF]/25 to-[#10B981]/20",
      iconBorder: "border-[#00F0FF]/40",
      iconText: "text-[#00F0FF]",
      hoverBorder: "hover:border-[#00F0FF]/60",
      hoverShadow: "hover:shadow-[0_20px_50px_-10px_rgba(0,240,255,0.25)]",
      lightBar: "via-[#00F0FF]",
      numBadge: "text-[#00F0FF] border-[#00F0FF]/30 bg-[#00F0FF]/10",
      tagHover: "hover:border-[#00F0FF]/40 hover:text-[#00F0FF]",
    },
    {
      iconGrad: "from-[#EC4899]/25 to-[#8B5CF6]/20",
      iconBorder: "border-[#EC4899]/40",
      iconText: "text-[#F472B6]",
      hoverBorder: "hover:border-[#EC4899]/60",
      hoverShadow: "hover:shadow-[0_20px_50px_-10px_rgba(236,72,153,0.25)]",
      lightBar: "via-[#EC4899]",
      numBadge: "text-[#F472B6] border-[#EC4899]/30 bg-[#EC4899]/10",
      tagHover: "hover:border-[#EC4899]/40 hover:text-[#F472B6]",
    },
    {
      iconGrad: "from-[#10B981]/25 to-[#007BFF]/20",
      iconBorder: "border-[#10B981]/40",
      iconText: "text-[#34D399]",
      hoverBorder: "hover:border-[#10B981]/60",
      hoverShadow: "hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.25)]",
      lightBar: "via-[#10B981]",
      numBadge: "text-[#34D399] border-[#10B981]/30 bg-[#10B981]/10",
      tagHover: "hover:border-[#10B981]/40 hover:text-[#34D399]",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#06080e]">
      {/* =========================================================================
          HERO SECTION
      ========================================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 lg:py-20 border-b border-white/10 tech-grid">
        {/* Ambient Hero Gradient Auras */}
        <div className="absolute top-0 left-1/4 w-[650px] h-[650px] bg-gradient-to-br from-[#00F0FF]/18 via-[#007BFF]/12 to-transparent rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-gradient-to-br from-[#10B981]/15 via-[#00F0FF]/10 to-transparent rounded-full blur-[130px] pointer-events-none" />

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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#00C8FF] to-[#10B981] drop-shadow-[0_0_30px_rgba(0,240,255,0.45)]">
                  AI, Automation
                </span>{" "}
                &amp; Performance Marketing
              </h1>

              {/* Subheading Description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
                We help ambitious businesses grow faster through bespoke AI solutions, intelligent workflow automations, digital marketing, SEO, paid advertising, and high-converting growth strategies.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="btn-primary !py-4 !px-8 text-xs sm:text-sm uppercase tracking-wider font-bold shadow-[0_0_25px_rgba(0,240,255,0.5)] flex items-center justify-center gap-2 group w-full sm:w-auto"
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
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Verified 4.8x Blended ROAS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#00F0FF]" />
                  <span>Enterprise Security &amp; NDA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#34D399]" />
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
      <section className="py-24 sm:py-32 relative bg-[#06080e] border-b border-white/10 overflow-hidden">
        {/* Subtle ambient spotlight */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00F0FF]/08 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="badge-glow mb-4">THE UNFAIR ADVANTAGE</span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                Why Industry Leaders Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#00C8FF] to-[#10B981]">
                  DiG Shine
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-5 leading-relaxed">
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
                  border: "hover:border-[#00F0FF]/60",
                  numColor: "text-[#00F0FF]",
                },
                {
                  num: "02",
                  title: "Growth Driven Strategy",
                  desc: "Obsessive focus on CAC reduction, pipeline velocity, and measurable closed-won revenue.",
                  border: "hover:border-[#10B981]/60",
                  numColor: "text-[#10B981]",
                },
                {
                  num: "03",
                  title: "Connected Operations",
                  desc: "Zero-touch n8n, Make, and CRM automations that eliminate 40+ hours of repetitive work per week.",
                  border: "hover:border-[#007BFF]/60",
                  numColor: "text-[#00C8FF]",
                },
                {
                  num: "04",
                  title: "Direct Founder Stewardship",
                  desc: "Direct access to Karan Verma and Manoj. No junior account managers or games of telephone.",
                  border: "hover:border-[#8B5CF6]/60",
                  numColor: "text-[#A78BFA]",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className={`glass-card rounded-2xl p-6 border border-white/[0.08] ${item.border} transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xl font-display font-black ${item.numColor}`}>
                      {item.num}
                    </span>
                    <Sparkles className="w-4 h-4 text-white/30 group-hover:text-[#10B981] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#00F0FF] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
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
      <section id="services" className="py-24 sm:py-32 relative bg-[#06080e] border-b border-white/10 overflow-hidden">
        {/* Dynamic ambient background glow meshes */}
        <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-[#00F0FF]/10 via-[#007BFF]/05 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-[550px] h-[550px] bg-gradient-to-br from-[#10B981]/10 via-[#00C8FF]/05 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="badge-glow mb-3">WORLD-CLASS CAPABILITIES</span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Comprehensive Growth Systems, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#00C8FF] to-[#10B981]">
                  Engineered from Every Angle
                </span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-300 max-w-md">
              From autonomous AI copilots to hyper-targeted performance marketing, explore our 8 integrated pillars designed for market dominance.
            </p>
          </div>

          {/* 8 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, idx) => {
              const Icon = serviceIcons[idx % serviceIcons.length] || Globe;
              const theme = pillarThemes[idx % pillarThemes.length];

              return (
                <div
                  key={service.slug}
                  className={`glass-card rounded-3xl p-7 border border-white/[0.08] ${theme.hoverBorder} ${theme.hoverShadow} transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden`}
                >
                  {/* Subtle top light bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent ${theme.lightBar} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${theme.iconGrad} border ${theme.iconBorder} flex items-center justify-center ${theme.iconText} group-hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.4)] transition-all`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${theme.numBadge}`}>
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#00F0FF] transition-colors mb-2.5">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Sub-services Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {service.subServices.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] px-2.5 py-1 rounded-lg bg-[#0e1628]/85 text-slate-300 border border-white/10 ${theme.tagHover} transition-colors`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Action Button */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-[#00F0FF] transition-colors"
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
