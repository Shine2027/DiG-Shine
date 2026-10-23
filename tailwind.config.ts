import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#FFFFFF",
        brand: {
          blue: "#00C8FF",
          royal: "#007BFF",
          cyan: "#00F0FF",
          green: "#10B981",
          leaf: "#22C55E",
          dark: "#050505",
          card: "#0D0F14",
          cardHover: "#121721",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(0, 200, 255, 0.35)",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "glow-blue": "0 0 35px -5px rgba(0, 200, 255, 0.35)",
        "glow-cyan": "0 0 35px -5px rgba(0, 240, 255, 0.35)",
        "glow-green": "0 0 30px -5px rgba(34, 197, 94, 0.35)",
        "glow-card": "0 10px 40px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.08)",
        "glow-card-hover": "0 20px 50px -10px rgba(0, 200, 255, 0.15), 0 0 1px 1px rgba(0, 200, 255, 0.4)",
      },
      animation: {
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "border-beam": "borderBeam 6s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        borderBeam: {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 200, 255, 0.18), rgba(0, 123, 255, 0.05), transparent 70%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
