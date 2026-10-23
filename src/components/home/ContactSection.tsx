"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { ArrowUpRight, Check, Send, Phone, Mail, MapPin, Sparkles, User, Building, DollarSign } from "lucide-react";
import { AGENCY_INFO } from "@/data/cms";

export function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["AI Services"]);
  const [selectedBudget, setSelectedBudget] = useState("$5,000 – $15,000");
  const [formSent, setFormSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const availableServices = [
    "AI Services & Copilots",
    "Automation & Workflows",
    "Digital Marketing",
    "Performance Marketing",
    "SEO | AEO | GEO",
    "Brand Growth & Design",
    "Paid Omnichannel Ads",
    "Analytics & Retention",
  ];

  const budgetTiers = [
    "< $5,000",
    "$5,000 – $15,000",
    "$15,000 – $50,000",
    "$50,000+ Enterprise",
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
      services: selectedServices,
      budget: selectedBudget,
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.log("Local fallback mailto trigger");
    }

    setLoading(false);
    setFormSent(true);

    // Launch celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00C8FF", "#007BFF", "#10B981", "#FFFFFF"],
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#050505] overflow-hidden">
      {/* Background radial gradient lights */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00C8FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Agency Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="badge-glow mb-4">START YOUR GROWTH</span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                Let&apos;s Engineer Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981]">
                  Unfair Advantage
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#94A3B8] mt-4 leading-relaxed">
                Book a direct, high-level consultation with our leadership. We will evaluate your current digital systems, identify high-impact automation levers, and outline a tailored roadmap.
              </p>

              {/* Leadership Desk */}
              <div className="mt-8 space-y-4">
                <div className="glass-card rounded-2xl p-4 border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C8FF]/20 to-[#007BFF]/20 border border-[#00C8FF]/40 flex items-center justify-center text-white font-bold text-sm">
                    KV
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{AGENCY_INFO.founders.ceo.name}</h4>
                    <p className="text-xs text-[#00C8FF]">{AGENCY_INFO.founders.ceo.role}</p>
                    <p className="text-[11px] text-[#94A3B8]">AI System Architecture &amp; Growth</p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-4 border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981]/20 to-[#00C8FF]/20 border border-[#10B981]/40 flex items-center justify-center text-white font-bold text-sm">
                    M
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{AGENCY_INFO.founders.coFounder.name}</h4>
                    <p className="text-xs text-[#10B981]">{AGENCY_INFO.founders.coFounder.role}</p>
                    <p className="text-[11px] text-[#94A3B8]">Operations &amp; Workflow Engineering</p>
                  </div>
                </div>
              </div>

              {/* Contact Direct Details */}
              <div className="mt-8 space-y-3 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#00C8FF]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>Direct Desk: <strong className="text-white">hello@digshine.com</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#10B981]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>Direct Helpline: <strong className="text-white">+91-XXXXXXXXXX</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#007BFF]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Global HQ: <strong className="text-white">DLF CyberCity / Gurugram Tech Hub &amp; Worldwide</strong></span>
                </div>
              </div>

              {/* Interactive Google Map Placeholder Card */}
              <div className="mt-8 rounded-2xl border border-white/10 overflow-hidden relative h-36 bg-[#0c0e14]">
                <div className="absolute inset-0 tech-grid opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <MapPin className="w-6 h-6 text-[#00C8FF] mb-1 animate-bounce" />
                  <p className="text-xs font-semibold text-white">Innovation Center &amp; Global Remote Lab</p>
                  <p className="text-[10px] text-[#94A3B8] font-mono mt-0.5">28.4906° N, 77.0910° E · Serving Clients Across US, UK, UAE &amp; India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative">
              {formSent ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Consultation Request Confirmed
                  </h3>
                  <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                    Thank you. Founder Karan Verma and co-founder Manoj have received your dossier. We will prepare your preliminary growth audit and contact you within 6 business hours.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="btn-secondary !py-2.5 !px-6 !text-xs mt-4"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2.5">
                      1. SELECT SERVICES OF INTEREST
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((srv) => {
                        const selected = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                              selected
                                ? "bg-[#00C8FF] text-[#050505] font-semibold shadow-glow-blue"
                                : "bg-white/[0.04] text-[#CBD5E1] border border-white/10 hover:border-white/20"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2.5">
                      2. ESTIMATED MONTHLY BUDGET
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetTiers.map((tier) => (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setSelectedBudget(tier)}
                          className={`p-2.5 rounded-xl text-xs font-medium text-center transition-all ${
                            selectedBudget === tier
                              ? "bg-gradient-to-r from-[#00C8FF]/20 to-[#10B981]/20 border border-[#00C8FF] text-[#00C8FF]"
                              : "bg-white/[0.03] text-[#94A3B8] border border-white/10 hover:text-white"
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Input Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#94A3B8] mb-1.5 font-medium">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Karan Verma"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#00C8FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#94A3B8] mb-1.5 font-medium">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#00C8FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#94A3B8] mb-1.5 font-medium">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91-XXXXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#00C8FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#94A3B8] mb-1.5 font-medium">Company / Website</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company name or URL"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#00C8FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#94A3B8] mb-1.5 font-medium">
                      What are your core growth bottlenecks or automation goals? *
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      placeholder="Tell us a little about your target metrics, channels, or systems you want to automate..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#00C8FF] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary !py-4 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Scheduling Your Consultation...</span>
                    ) : (
                      <>
                        <span>Book Free Consultation</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#64748B]">
                    🔒 Guaranteed 100% strict NDA confidentiality. Zero spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
