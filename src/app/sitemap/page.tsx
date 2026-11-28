import type { Metadata } from "next";
import Link from "next/link";
import { AGENCY_INFO, BLOG_POSTS, CASE_STUDIES, SERVICES_DATA } from "@/data/cms";
import { openGraphForPage } from "@/lib/metadata";

const mainPages = [
  { label: "Home", href: "/" },
  { label: "About DiG Shine", href: "/about" },
  { label: "All Services", href: "/services" },
  { label: "Frequently Asked Questions", href: "/faq" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const pageDescription =
  "Browse DiG Shine's main pages, services, case studies, blog articles, and contact information.";

export const metadata: Metadata = {
  title: "HTML Sitemap | DiG Shine",
  description: pageDescription,
  alternates: { canonical: "/sitemap" },
  openGraph: openGraphForPage("/sitemap", "HTML Sitemap | DiG Shine", pageDescription),
};

function SitemapLinks({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-sm text-[#CBD5E1] transition-colors hover:text-[#00C8FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF] rounded-sm"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function HtmlSitemapPage() {
  return (
    <div className="bg-[#050505] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mb-12 max-w-3xl sm:mb-16">
          <span className="badge-glow mb-4">SITE DIRECTORY</span>
          <h1 className="text-4xl font-display font-extrabold tracking-tight text-white sm:text-6xl">
            DiG Shine Sitemap
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            Browse the main pages, services, case studies, and articles on the DiG Shine website.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <section
            aria-labelledby="main-pages-heading"
            className="glass-panel rounded-3xl border border-white/10 p-7 sm:p-9"
          >
            <h2 id="main-pages-heading" className="mb-5 text-xl font-bold text-white">
              Main Pages
            </h2>
            <SitemapLinks links={mainPages} />
          </section>

          <section
            aria-labelledby="services-heading"
            className="glass-panel rounded-3xl border border-white/10 p-7 sm:p-9"
          >
            <h2 id="services-heading" className="mb-5 text-xl font-bold text-white">
              Services
            </h2>
            <SitemapLinks
              links={SERVICES_DATA.map((service) => ({
                label: service.title,
                href: `/services/${service.slug}`,
              }))}
            />
          </section>

          <section
            aria-labelledby="case-studies-heading"
            className="glass-panel rounded-3xl border border-white/10 p-7 sm:p-9"
          >
            <h2 id="case-studies-heading" className="mb-5 text-xl font-bold text-white">
              Case Studies
            </h2>
            <SitemapLinks
              links={[
                { label: "All Case Studies", href: "/case-studies" },
                ...CASE_STUDIES.map((study) => ({
                  label: study.title,
                  href: `/case-studies/${study.slug}`,
                })),
              ]}
            />
          </section>

          <section
            aria-labelledby="blog-heading"
            className="glass-panel rounded-3xl border border-white/10 p-7 sm:p-9"
          >
            <h2 id="blog-heading" className="mb-5 text-xl font-bold text-white">
              Blog
            </h2>
            <SitemapLinks
              links={[
                { label: "All Articles", href: "/blog" },
                ...BLOG_POSTS.map((post) => ({
                  label: post.title,
                  href: `/blog/${post.slug}`,
                })),
              ]}
            />
          </section>

          <section
            aria-labelledby="contact-heading"
            className="glass-panel rounded-3xl border border-white/10 p-7 sm:p-9 md:col-span-2"
          >
            <h2 id="contact-heading" className="mb-5 text-xl font-bold text-white">
              Contact
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[#CBD5E1] transition-colors hover:text-[#00C8FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF] rounded-sm"
                >
                  Contact DiG Shine
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="text-sm text-[#CBD5E1] transition-colors hover:text-[#00C8FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF] rounded-sm"
                >
                  {AGENCY_INFO.email}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
