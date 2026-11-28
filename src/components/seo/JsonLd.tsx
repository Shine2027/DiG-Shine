import { AGENCY_INFO } from "@/data/cms";

export function JsonLd() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://digshine.in/#organization",
        name: AGENCY_INFO.name,
        url: "https://digshine.in",
        logo: "https://digshine.in/logo.png",
        slogan: AGENCY_INFO.tagline,
        description:
          "DiG Shine is a digital growth agency providing AI services, business workflow automation, digital marketing, performance marketing, and SEO, AEO, and GEO services.",
        email: AGENCY_INFO.email,
        foundingDate: AGENCY_INFO.est,
        founder: [
          { "@id": "https://digshine.in/about#karan-verma" },
          { "@id": "https://digshine.in/about#manoj" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "business inquiries",
          email: AGENCY_INFO.email,
        },
        knowsAbout: [
          "Artificial intelligence",
          "Business workflow automation",
          "Digital marketing",
          "Performance marketing",
          "Search engine optimization",
          "Answer Engine Optimization",
          "Generative Engine Optimization",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://digshine.in/about#karan-verma",
        name: AGENCY_INFO.founders.ceo.name,
        jobTitle: AGENCY_INFO.founders.ceo.role,
        worksFor: { "@id": "https://digshine.in/#organization" },
      },
      {
        "@type": "Person",
        "@id": "https://digshine.in/about#manoj",
        name: AGENCY_INFO.founders.coFounder.name,
        jobTitle: AGENCY_INFO.founders.coFounder.role,
        worksFor: { "@id": "https://digshine.in/#organization" },
      },
      {
        "@type": "WebSite",
        "@id": "https://digshine.in/#website",
        url: "https://digshine.in",
        name: AGENCY_INFO.name,
        inLanguage: "en",
        publisher: { "@id": "https://digshine.in/#organization" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
    />
  );
}
