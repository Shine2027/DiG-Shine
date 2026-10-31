"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQ_DATA } from "@/data/cms";
import { Search, ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";

export function FaqAccordion() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ["All", "General", "Services", "Pricing & ROI", "Timeline", "SEO & AI"];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-glow mb-4">CLARITY FIRST</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981]">
              Questions &amp; Insights
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-4 leading-relaxed">
            Everything you need to know about partnering with DiG Shine, our technical standards, and delivery velocity.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
            <input
              id="faq-search-input"
              type="text"
              aria-label="Search frequently asked questions and answers"
              placeholder="Search answers (e.g., pricing, AI models, n8n, timeline)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#00C8FF] focus:shadow-glow-blue transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div
            role="tablist"
            aria-label="FAQ Categories"
            className="flex flex-wrap items-center justify-center gap-2 mt-6"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all focus:outline-none focus:ring-1 focus:ring-[#00C8FF] ${
                  selectedCategory === cat
                    ? "bg-[#00C8FF]/15 text-[#00C8FF] border border-[#00C8FF]/40 shadow-glow-blue"
                    : "bg-white/[0.02] text-[#94A3B8] border border-white/5 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "glass-panel border-[#00C8FF]/40 shadow-glow-card"
                      : "glass-card border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    id={`faq-trigger-${idx}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    onClick={() => toggleItem(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[#00C8FF]"
                  >
                    <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#00C8FF] flex-shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#94A3B8] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-[#00C8FF]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${idx}`}
                      className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-white/5"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 glass-panel rounded-2xl p-8 border border-white/10">
              <p className="text-sm text-[#94A3B8]">
                No questions found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#00C8FF] hover:underline"
              >
                Ask our founders directly <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
