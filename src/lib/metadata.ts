import type { Metadata } from "next";

export function openGraphForPage(
  path: string,
  title: string,
  description: string,
): NonNullable<Metadata["openGraph"]> {
  return {
    type: "website",
    locale: "en_US",
    url: path === "/" ? "https://digshine.in" : `https://digshine.in${path}`,
    title,
    description,
    siteName: "DiG Shine",
    images: [
      {
        url: "https://digshine.in/logo.png",
        width: 1200,
        height: 1200,
        alt: "DiG Shine — Automate • Innovate • Elevate",
      },
    ],
  };
}
