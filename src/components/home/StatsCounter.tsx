"use client";

import { useEffect, useState } from "react";
import { AGENCY_INFO } from "@/data/cms";
import { Trophy, CheckCircle, Clock, TrendingUp, Zap } from "lucide-react";

export function StatsCounter() {
  const icons = [Trophy, CheckCircle, Clock, TrendingUp, Zap];

  return (
    <div className="relative py-12 border-y border-white/10 bg-[#050505]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {AGENCY_INFO.stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length] || Zap;
            return (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-5 border border-white/[0.07] hover:border-[#00C8FF]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00C8FF]/10 border border-[#00C8FF]/20 flex items-center justify-center text-[#00C8FF] group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#94A3B8]">0{idx + 1}</span>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight group-hover:text-[#00C8FF] transition-colors">
                    {stat.value}
                  </div>
                  <p className="text-xs text-[#94A3B8] mt-1 font-medium leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
