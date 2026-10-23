import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-5 relative overflow-hidden bg-[#050505] tech-grid">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00C8FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full glass-panel rounded-3xl p-8 sm:p-12 text-center border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative z-10">
        <span className="badge-glow mb-6">SIGNAL LOSS 404</span>

        <div className="text-7xl sm:text-8xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981] mb-4">
          404
        </div>

        <h2 className="text-xl font-bold text-white mb-2">
          Quantum Node Not Found
        </h2>

        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-8">
          The requested coordinate or asset does not exist on this vector. Return to main command center to explore our capabilities.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="btn-primary !py-3 !px-6 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/services"
            className="btn-secondary !py-3 !px-6 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
