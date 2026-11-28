import { MetadataRoute } from "next";
import { SERVICES_DATA, CASE_STUDIES, BLOG_POSTS } from "@/data/cms";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://digshine.in";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/blog",
    "/contact",
    "/careers",
    "/faq",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Service dynamic routes
  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Case study routes
  const caseStudyRoutes = CASE_STUDIES.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog post routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes, ...blogRoutes];
}
