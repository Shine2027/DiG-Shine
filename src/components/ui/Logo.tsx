import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showTagline = false, size = "md" }: LogoProps) {
  const sizeMap = {
    sm: { imgSize: 34, title: "text-lg", tag: "text-[10px]" },
    md: { imgSize: 42, title: "text-xl", tag: "text-[11px]" },
    lg: { imgSize: 58, title: "text-2xl", tag: "text-xs" },
  };

  const current = sizeMap[size];

  return (
    <Link href="/" className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {/* High-res official brand emblem with subtle cyan glow */}
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00C8FF]/20 via-[#007BFF]/20 to-[#10B981]/20 blur-md opacity-75 group-hover:opacity-100 transition duration-300" />
        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#050505] p-0.5">
          <Image
            src="/logo.png"
            alt="DiG Shine Logo"
            width={current.imgSize}
            height={current.imgSize}
            className="rounded-lg object-contain"
            priority
          />
        </div>
      </div>

      {/* Brand typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 font-display font-extrabold tracking-wider">
          <span className="text-white tracking-widest">DIG</span>
          <span className="text-[#00C8FF] tracking-widest drop-shadow-[0_0_12px_rgba(0,200,255,0.6)]">
            SHINE
          </span>
        </div>
        {showTagline && (
          <span className={`${current.tag} text-[#94A3B8] font-medium tracking-widest uppercase flex items-center gap-1 mt-0.5`}>
            <span>AUTOMATE</span>
            <span className="text-[#00C8FF]">•</span>
            <span>INNOVATE</span>
            <span className="text-[#10B981]">•</span>
            <span>ELEVATE</span>
          </span>
        )}
      </div>
    </Link>
  );
}
