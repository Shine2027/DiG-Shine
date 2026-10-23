import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://digshine.com"),
  title: {
    default: "DiG Shine — Scale Your Business with AI, Automation & Performance Marketing",
    template: "%s | DiG Shine Agency",
  },
  description:
    "DiG Shine is a world-class AI, intelligent automation, and performance marketing agency. We build autonomous growth systems, CRM workflows, and high-converting acquisition engines. Automate • Innovate • Elevate.",
  keywords: [
    "AI Agency",
    "Business Automation",
    "Performance Marketing",
    "SEO AEO GEO",
    "Generative AI",
    "n8n Automation",
    "Karan Verma",
    "DiG Shine",
    "Enterprise Growth Systems",
  ],
  authors: [{ name: "Karan Verma", url: "https://digshine.com" }, { name: "Manoj" }],
  creator: "DiG Shine",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digshine.com",
    title: "DiG Shine — Scale Your Business with AI, Automation & Performance Marketing",
    description:
      "Automate • Innovate • Elevate. World-class AI solutions, autonomous workflows, and performance marketing engineered for exponential scale.",
    siteName: "DiG Shine",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "DiG Shine — Automate • Innovate • Elevate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DiG Shine — Automate • Innovate • Elevate",
    description:
      "Scale your business with AI, intelligent automation & performance marketing. Elite agency led by Karan Verma & Manoj.",
    images: ["/logo.png"],
    creator: "@DiGShine",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-[#050505] text-white antialiased min-h-screen flex flex-col font-sans selection:bg-[#00C8FF]/20 selection:text-[#00F0FF]">
        <SmoothScroll>
          <CursorGlow />
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
