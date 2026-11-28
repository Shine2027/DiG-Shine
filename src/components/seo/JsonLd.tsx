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
          "DiG Shine provides AI services, intelligent automation, and performance marketing.",
        email: AGENCY_INFO.email,
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
      },
      {
        "@type": "WebSite",
        "@id": "https://digshine.in/#website",
        url: "https://digshine.in",
        name: AGENCY_INFO.name,
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
