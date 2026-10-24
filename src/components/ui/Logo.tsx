import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showTagline = false, size = "md" }: LogoProps) {
  const sizeMap = {
    sm: {
      boxClass: "w-9 h-7",
      imgWidth: 44,
      imgHeight: 30,
      titleClass: "text-lg",
      tagClass: "text-[9px]",
    },
    md: {
      boxClass: "w-12 h-9 sm:w-14 sm:h-10",
      imgWidth: 56,
      imgHeight: 38,
      titleClass: "text-xl sm:text-2xl",
      tagClass: "text-[10px]",
    },
    lg: {
      boxClass: "w-16 h-12 sm:w-20 sm:h-14",
      imgWidth: 80,
      imgHeight: 54,
      titleClass: "text-2xl sm:text-3xl",
      tagClass: "text-xs",
    },
  };

  const current = sizeMap[size];

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* High-res official brand emblem with illuminated cyan-emerald aura */}
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        {/* Ambient atmospheric glow */}
        <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#00F0FF]/40 via-[#007BFF]/25 to-[#10B981]/35 blur-md opacity-75 group-hover:opacity-100 group-hover:blur-lg transition-all duration-300" />
        
        {/* Emblem Badge Container with glass depth and illuminated border */}
        <div className={`relative ${current.boxClass} rounded-xl overflow-hidden border border-[#00F0FF]/40 bg-gradient-to-br from-[#0f172a] via-[#090d18] to-[#04060b] p-1 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] group-hover:border-[#00F0FF]/70 transition-all`}>
          <Image
            src="/logo-mark.png"
            alt="DiG Shine Emblem"
            width={current.imgWidth}
            height={current.imgHeight}
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]"
            priority
          />
        </div>
      </div>

      {/* Brand typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 font-display font-black tracking-wider leading-none">
          <span className="text-white font-black tracking-widest drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            DIG
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#00C8FF] to-[#10B981] font-black tracking-widest drop-shadow-[0_0_18px_rgba(0,240,255,0.65)]">
            SHINE
          </span>
        </div>
        {showTagline && (
          <span className={`${current.tagClass} text-slate-300 font-semibold tracking-[0.2em] uppercase flex items-center gap-1.5 mt-1`}>
            <span>AUTOMATE</span>
            <span className="w-1 h-1 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]" />
            <span>INNOVATE</span>
            <span className="w-1 h-1 rounded-full bg-[#10B981] shadow-[0_0_6px_#10B981]" />
            <span>ELEVATE</span>
          </span>
        )}
      </div>
    </Link>
  );
}
