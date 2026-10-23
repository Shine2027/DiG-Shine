"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { SERVICES_DATA } from "@/data/cms";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Process", href: "/#process" },
    { name: "Projects", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <Logo size="md" showTagline={false} />

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <Link
                    href={link.href}
                    className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors duration-200 rounded-full flex items-center gap-1 ${
                      isActive || pathname.startsWith("/services")
                        ? "text-[#00C8FF] bg-white/[0.06]"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Mega Dropdown */}
                  {servicesDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] glass-panel rounded-2xl p-4 border border-[#00C8FF]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] grid grid-cols-2 gap-2 animate-in fade-in zoom-in-95 duration-200">
                      {SERVICES_DATA.slice(0, 6).map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="p-2.5 rounded-xl hover:bg-white/[0.05] transition-all group/item flex items-start gap-2.5"
                        >
                          <span className="text-[11px] font-mono text-[#00C8FF] mt-0.5">
                            {service.number}
                          </span>
                          <div>
                            <h4 className="text-xs font-semibold text-white group-hover/item:text-[#00C8FF] transition-colors flex items-center gap-1">
                              {service.title}
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </h4>
                            <p className="text-[10px] text-[#94A3B8] line-clamp-1 mt-0.5">
                              {service.shortDesc}
                            </p>
                          </div>
                        </Link>
                      ))}
                      <div className="col-span-2 pt-2 border-t border-white/5 flex items-center justify-between px-2">
                        <span className="text-[11px] text-[#94A3B8] flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#10B981]" /> All 8 capabilities ready
                        </span>
                        <Link
                          href="/services"
                          className="text-[11px] font-semibold text-[#00C8FF] hover:underline flex items-center gap-1"
                        >
                          View all services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors duration-200 rounded-full ${
                  isActive
                    ? "text-[#00C8FF] bg-white/[0.06]"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-primary !py-2.5 !px-5 !text-xs uppercase tracking-wider group"
          >
            <span>Book a Free Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:text-[#00C8FF] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-panel border-b border-white/10 px-6 py-6 mt-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                  pathname === link.href
                    ? "bg-[#00C8FF]/10 text-[#00C8FF] border border-[#00C8FF]/20"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full text-center justify-center !py-3 !text-sm"
              >
                <span>Book a Free Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="text-center">
                <p className="text-xs text-[#94A3B8]">
                  Direct Founder Desk:{" "}
                  <span className="text-white font-mono">hello@digshine.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
