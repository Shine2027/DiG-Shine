"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight, Github, Linkedin, Twitter, Youtube, Send, ShieldCheck, Heart } from "lucide-react";
import { SERVICES_DATA, AGENCY_INFO } from "@/data/cms";

export function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-[#00C8FF]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Section: CTA Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#00C8FF]/25 shadow-glow-blue mb-16 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#00C8FF]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="badge-glow mb-4">READY TO SCALE?</span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Let&apos;s build an autonomous growth system for your business.
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] mt-3 max-w-lg">
                Join forward-thinking companies scaling with AI agents, automated operations, and algorithmic performance marketing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/contact" className="btn-primary !py-3.5 !px-8 text-center text-sm uppercase tracking-wider">
                Book Free Consultation
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/pricing" className="btn-secondary !py-3.5 !px-8 text-center text-sm uppercase tracking-wider">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col">
            <Logo size="lg" showTagline={true} />
            <p className="text-sm text-[#94A3B8] mt-5 max-w-sm leading-relaxed">
              DiG Shine is a premier AI, intelligent automation, and performance marketing agency. We engineer enterprise-grade systems that accelerate revenue and automate business operations.
            </p>
            
            {/* Founders Note */}
            <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10 max-w-sm">
              <p className="text-xs text-[#94A3B8]">
                Stewarded by <strong className="text-white">Karan Verma</strong> (CEO & Founder) &amp; <strong className="text-white">Manoj</strong> (Co-Founder).
              </p>
              <p className="text-[11px] font-mono text-[#00C8FF] mt-1">
                hello@digshine.com · DLF CyberCity, Tech Hub
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/Shine2027/DiG-Shine", label: "GitHub" },
                { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#00C8FF] hover:border-[#00C8FF]/40 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF]" />
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#00C8FF] transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Agency</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">All Capabilities</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies &amp; Work</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing &amp; Calculator</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Insights &amp; Articles</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers (Hiring)</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ &amp; Knowledge</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Leadership</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & System Status */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF]" />
              Stay Ahead
            </h4>
            <p className="text-xs text-[#94A3B8] mb-3 leading-relaxed">
              Subscribe to our bi-weekly executive dispatch on autonomous AI, GEO, and revenue engineering.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to DiG Shine insights!");
              }}
              className="space-y-2"
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="executive@company.com"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#00C8FF]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#00C8FF] text-[#050505] hover:bg-[#00F0FF] transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* System Status Indicator */}
            <div className="mt-6 p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5 text-[11px] text-[#94A3B8]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span>All Systems Operational (99.98% Uptime)</span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <span>© 2026 {AGENCY_INFO.name}. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#94A3B8]">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by DiG Shine
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
            <span className="flex items-center gap-1 text-[#10B981]">
              <ShieldCheck className="w-3.5 h-3.5" /> Enterprise Grade
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
