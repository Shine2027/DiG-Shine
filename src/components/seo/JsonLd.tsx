import { AGENCY_INFO, SERVICES_DATA, FAQ_DATA } from "@/data/cms";

export function JsonLd() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://digshine.com/#organization",
        name: AGENCY_INFO.name,
        url: "https://digshine.com",
        logo: "https://digshine.com/logo.png",
        slogan: AGENCY_INFO.tagline,
        description:
          "World-class AI, intelligent automation, and performance marketing agency positioning brands for exponential growth.",
        founder: [
          {
            "@type": "Person",
            name: AGENCY_INFO.founders.ceo.name,
            jobTitle: AGENCY_INFO.founders.ceo.role,
          },
          {
            "@type": "Person",
            name: AGENCY_INFO.founders.coFounder.name,
            jobTitle: AGENCY_INFO.founders.coFounder.role,
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: AGENCY_INFO.phone,
          contactType: "customer service",
          email: AGENCY_INFO.email,
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://digshine.com/#localbusiness",
        name: AGENCY_INFO.name,
        image: "https://digshine.com/logo.png",
        telephone: AGENCY_INFO.phone,
        email: AGENCY_INFO.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "DLF CyberCity, Phase II",
          addressLocality: "Gurugram",
          addressRegion: "Haryana",
          postalCode: "122002",
          addressCountry: "IN",
        },
        priceRange: "$$$$",
      },
      {
        "@type": "WebSite",
        "@id": "https://digshine.com/#website",
        url: "https://digshine.com",
        name: AGENCY_INFO.name,
        publisher: { "@id": "https://digshine.com/#organization" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://digshine.com/#faq",
        mainEntity: FAQ_DATA.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
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
