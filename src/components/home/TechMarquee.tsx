import { TECH_STACK } from "@/data/cms";
import { Terminal, Cpu, Database, Cloud } from "lucide-react";

export function TechMarquee() {
  return (
    <section className="py-20 relative bg-[#050505] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="badge-glow mb-3">ENGINEERING EXCELLENCE</span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Our Battle-Tested <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981]">
              Technology Arsenal
            </span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md">
          We don&apos;t build fragile no-code toys. We engineer production-ready, enterprise-grade architectures that scale securely to millions of requests.
        </p>
      </div>

      {/* Tech Grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="glass-card rounded-2xl p-4 border border-white/[0.08] hover:border-[#00C8FF]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-2 h-2 rounded-full bg-[#00C8FF] opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#00C8FF] transition-all" />
                <span className="text-[10px] font-mono text-[#64748B] group-hover:text-[#10B981] transition-colors">
                  Production
                </span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-[#00C8FF] transition-colors">
                {tech.name}
              </h4>
              <p className="text-[10px] text-[#94A3B8] mt-1 line-clamp-1">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
