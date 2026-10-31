"use client";

import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/data/cms";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";

export function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    // Disable auto-advance if reduced motion is preferred or if paused by user hover/focus
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = setInterval(() => {
      nextTestimonial();
    }, 7000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const current = TESTIMONIALS[activeIndex] || TESTIMONIALS[0]!;

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative bg-[#050505] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C8FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="badge-glow mb-3">EXECUTIVE ENDORSEMENTS</span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Trusted by Ambitious <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981]">
                Founders &amp; Global Leaders
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-[#00C8FF] hover:border-[#00C8FF]/40 focus:outline-none focus:ring-1 focus:ring-[#00C8FF] transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-[#00C8FF] hover:border-[#00C8FF]/40 focus:outline-none focus:ring-1 focus:ring-[#00C8FF] transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Big Testimonial Feature Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          className="glass-panel rounded-3xl p-8 sm:p-14 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden transition-all duration-500"
        >
          <Quote className="absolute top-8 right-8 w-24 h-24 text-white/[0.03] pointer-events-none" />

          {/* Star Rating */}
          <div className="flex items-center gap-1.5 mb-8">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#00C8FF] fill-[#00C8FF]" />
            ))}
            <span className="ml-3 text-xs font-mono text-[#10B981] flex items-center gap-1 bg-[#10B981]/10 px-2.5 py-0.5 rounded-full border border-[#10B981]/30">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified Client
            </span>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-white leading-relaxed max-w-4xl">
            &ldquo;{current.text}&rdquo;
          </blockquote>

          {/* Author Details */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00C8FF]/20 to-[#007BFF]/20 border border-[#00C8FF]/40 flex items-center justify-center text-white font-display font-bold text-lg">
                {current.avatar}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{current.name}</h4>
                <p className="text-xs text-[#94A3B8]">
                  {current.role} · <span className="text-[#00C8FF]">{current.company}</span>
                </p>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2" role="group" aria-label="Testimonial navigation dots">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#00C8FF] ${
                    activeIndex === idx ? "w-8 bg-[#00C8FF]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={activeIndex === idx ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
