export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  heroBenefit: string;
  iconName: string;
  subServices: string[];
  features: string[];
  technologies: string[];
  deliverables: string[];
  metrics: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  metrics: { label: string; value: string }[];
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  image: string;
  featured: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tierBadge?: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  recommended: boolean;
  features: string[];
  idealFor: string;
  ctaText: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  featured?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  bio: string;
  focus: string[];
  avatar: string;
}

export const AGENCY_INFO = {
  name: "DiG Shine",
  tagline: "Automate • Innovate • Elevate",
  est: "2026",
  email: "hello@digshine.com",
  phone: "+91-9876543210",
  location: "DLF CyberCity, Gurugram / Tech Hub India & Global",
  founders: {
    ceo: {
      name: "Karan Verma",
      role: "CEO & Founder",
      bio: "Visionary brand strategist, AI system architect, and full-stack technologist driving modern automation and performance growth.",
    },
    coFounder: {
      name: "Manoj",
      role: "Co-Founder",
      bio: "Operations leader, enterprise workflow specialist, and strategic expansion architect orchestrating scalable client solutions.",
    },
  },
  stats: [
    { label: "Client Projects Delivered", value: "100+", suffix: "" },
    { label: "Client Satisfaction Rate", value: "95%", suffix: "" },
    { label: "Intelligent Systems Support", value: "24/7", suffix: "" },
    { label: "Revenue Accelerated", value: "$14.8M+", suffix: "" },
    { label: "Average Client ROI", value: "4.8x", suffix: "" },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "1",
    slug: "digital-marketing",
    number: "01",
    title: "Digital Marketing",
    shortDesc: "Full-funnel digital marketing strategies that turn targeted traffic into high-converting revenue pipelines.",
    fullDesc: "We don't do vanity metrics. Our digital marketing architecture combines predictive audience modeling, cross-channel engagement, hyper-personalized email journeys, and omni-channel acquisition to drive sustainable market dominance.",
    heroBenefit: "Dominate search, social, and email with unified digital growth systems.",
    iconName: "Globe",
    subServices: [
      "Search Engine Optimization (SEO)",
      "High-Conversion Social Media",
      "Authority Content Marketing",
      "Automated Email Sequences",
      "B2B & D2C Lead Generation",
    ],
    features: [
      "Audience Intent Research & Cohort Analysis",
      "Dynamic Content Calendar with Automated Distribution",
      "Omnichannel Retargeting & Nurturing Workflows",
      "Conversion Rate Optimization (CRO) Audits",
      "Transparent Real-time Attribution Dashboard",
    ],
    technologies: ["HubSpot", "Klaviyo", "Semrush", "Ahrefs", "Google Analytics 4", "Mixpanel"],
    deliverables: [
      "Monthly Growth Sprint Architecture",
      "Content Asset Production & Copywriting",
      "Lead Magnet Funnel Setup",
      "Bi-Weekly Executive Performance Briefs",
    ],
    metrics: [
      { label: "Average Lead Lift", value: "+280%" },
      { label: "Cost Per Acquisition", value: "-42%" },
    ],
    faqs: [
      {
        q: "How soon do we see results from digital marketing sprints?",
        a: "Paid channels and email flows yield measurable pipeline within 14–21 days. Organic channels compound exponentially over 60–90 days.",
      },
      {
        q: "Do you handle creative and copywriting?",
        a: "Yes. Our team produces full ad creative, long-form articles, landing pages, and email copy tailored to your brand voice.",
      },
    ],
  },
  {
    id: "2",
    slug: "ai-services",
    number: "02",
    title: "AI Services & Agents",
    shortDesc: "Autonomous AI agents, enterprise LLM fine-tuning, and RAG systems tailored to your business knowledge.",
    fullDesc: "We deploy custom generative AI solutions and autonomous agent swarms that take real work off your team's plate. From smart customer-facing copilots to private internal RAG knowledge bases, we turn AI into a genuine competitive moat.",
    heroBenefit: "Deploy proprietary AI models and autonomous agents that work 24/7 with zero downtime.",
    iconName: "Cpu",
    subServices: [
      "Custom AI Chatbots & Support Copilots",
      "Autonomous Multi-Agent Workflows",
      "Generative AI Content & Media Pipelines",
      "LLM Integration & Fine-Tuning",
      "Retrieval-Augmented Generation (RAG) Systems",
    ],
    features: [
      "Enterprise Data Privacy & Local Vector Embeddings",
      "Context-Aware Document Retrieval & Vector Databases",
      "Self-Correcting Multi-Agent Decision Chains",
      "Seamless Integration with Slack, Teams, WhatsApp & CRM",
      "Hallucination Guardrails & Audit Logging",
    ],
    technologies: ["OpenAI GPT-4o", "Anthropic Claude 3.7", "Google Gemini", "LangChain", "LlamaIndex", "Pinecone", "Qdrant"],
    deliverables: [
      "Custom Trained Knowledge Base Agent",
      "API Integrations & Webhook Connectors",
      "Interactive Playground & Admin Dashboard",
      "Prompt Optimization & Guardrail Architecture",
    ],
    metrics: [
      { label: "Support Query Resolution", value: "82% Auto" },
      { label: "Internal Time Saved", value: "35 hrs/wk" },
    ],
    faqs: [
      {
        q: "Is our proprietary data kept private?",
        a: "Strictly yes. We implement zero-retention enterprise API endpoints and private vector stores ensuring your confidential data never trains public models.",
      },
      {
        q: "What systems can your AI assistants connect with?",
        a: "Any system with an API or webhook, including Salesforce, HubSpot, Zendesk, Notion, Google Drive, PostgreSQL, and custom databases.",
      },
    ],
  },
  {
    id: "3",
    slug: "automation-workflow",
    number: "03",
    title: "Automation & Workflow",
    shortDesc: "End-to-end business process automation connecting CRM, sales, marketing, and operations flawlessly.",
    fullDesc: "Stop paying high-salary team members to copy-paste between fragmented tools. We build intelligent automation architectures using n8n, Make, Zapier, and custom serverless functions that run flawlessly 24 hours a day.",
    heroBenefit: "Eliminate repetitive manual tasks and accelerate operations at machine speed.",
    iconName: "Workflow",
    subServices: [
      "CRM Pipeline & Lifecycle Automation",
      "Zapier, Make & n8n Enterprise Workflows",
      "Autonomous AI Agent Triggers",
      "Invoicing & Billing Automation",
      "Cross-Platform Data Synchronization",
    ],
    features: [
      "Multi-Branch Logic with Instant Error Recovery",
      "Self-Hosted n8n Infrastructure for Maximum Security",
      "Real-Time Slack/WhatsApp Lead Notifications",
      "Automated Contract Generation & E-Sign Flow",
      "Live Health Monitoring & Webhook Fallbacks",
    ],
    technologies: ["n8n", "Make.com", "Zapier", "Node.js", "PostgreSQL", "Stripe", "DocuSign"],
    deliverables: [
      "Complete Workflow Blueprint Diagram",
      "Configured Automated Scenarios & Webhooks",
      "Team Onboarding & Operational Runbooks",
      "Quarterly Workflow Maintenance & Enhancements",
    ],
    metrics: [
      { label: "Manual Effort Cut", value: "70%" },
      { label: "Lead Response Time", value: "< 45 sec" },
    ],
    faqs: [
      {
        q: "Do we need to migrate our current tools?",
        a: "No. We integrate into your existing stack (Slack, HubSpot, Notion, Google Workspace, etc.) without disrupting current operations.",
      },
    ],
  },
  {
    id: "4",
    slug: "brand-growth",
    number: "04",
    title: "Brand Growth & Positioning",
    shortDesc: "Category-defining brand identity, strategic positioning, and luxury design systems that establish leadership.",
    fullDesc: "A premium look transforms perceived value. We craft bespoke visual identities, magnetic messaging frameworks, and high-conversion design systems that place you leagues ahead of competitors.",
    heroBenefit: "Look like the undisputed market leader and justify premium price points.",
    iconName: "Sparkles",
    subServices: [
      "Strategic Market Positioning",
      "Brand Identity & Logo Systems",
      "Narrative & Messaging Architecture",
      "Creative Direction & Design Systems",
      "Long-Term Growth Planning",
    ],
    features: [
      "Competitor Landscape & Whitespace Analysis",
      "Comprehensive Digital Brand Styleguide",
      "Custom Motion Guidelines & Micro-Interactions",
      "Executive Pitch Deck & Sales Collateral",
      "High-Fidelity Typography & Color Palettes",
    ],
    technologies: ["Figma", "Adobe Creative Cloud", "Blender", "Framer", "Cinema 4D"],
    deliverables: [
      "Complete Vector Brand Identity Kit",
      "Component-Driven UI/UX Design System",
      "Tone of Voice & Messaging Bible",
      "Social Media & Presentation Templates",
    ],
    metrics: [
      { label: "Conversion Rate Increase", value: "+140%" },
      { label: "Perceived Value Metric", value: "3.5x" },
    ],
    faqs: [
      {
        q: "How does brand design directly affect revenue?",
        a: "Premium branding reduces sales friction, boosts demo conversion rates, and commands higher pricing by instilling immediate trust.",
      },
    ],
  },
  {
    id: "5",
    slug: "performance-marketing",
    number: "05",
    title: "Performance Marketing",
    shortDesc: "Aggressive, data-governed ad engines across Google, Meta, and LinkedIn built for maximum blended ROAS.",
    fullDesc: "We treat performance marketing like algorithmic trading. With rigorous creative iteration, audience tiering, server-side conversion tracking, and relentless CAC reduction, our media buying unlocks compounding returns.",
    heroBenefit: "Turn ad spend into a predictable, high-yield revenue machine.",
    iconName: "TrendingUp",
    subServices: [
      "Google Search & Performance Max Campaigns",
      "Meta (Facebook & Instagram) Direct Response",
      "LinkedIn B2B Account-Based Marketing (ABM)",
      "Conversion Rate Optimization (CRO)",
      "Omnichannel Retargeting Sequences",
    ],
    features: [
      "Conversions API (CAPI) & Server-Side Tracking",
      "High-Velocity Ad Creative Testing Matrix",
      "Negative Keyword & Fraud Click Protection",
      "Dedicated Landing Page Variant Splits",
      "Dynamic Attribution Modeling",
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "LinkedIn Ads", "Triple Whale", "Hotjar", "VWO"],
    deliverables: [
      "Custom Campaign Architecture Setup",
      "Weekly High-Converting Video & Image Ad Sets",
      "Daily Bidding & Audience Calibration",
      "Real-Time Client Performance Dashboard",
    ],
    metrics: [
      { label: "Blended ROAS Average", value: "4.4x" },
      { label: "CAC Reduction", value: "-38%" },
    ],
    faqs: [
      {
        q: "What is your recommended monthly ad spend?",
        a: "We work with budgets ranging from $3,000/month for focused test markets up to $100,000+/month for enterprise scale.",
      },
    ],
  },
  {
    id: "6",
    slug: "brand-success",
    number: "06",
    title: "Brand Success & Analytics",
    shortDesc: "Retention engineering, customer lifetime value expansion, and clear attribution intelligence.",
    fullDesc: "Acquisition is only half the battle. We build customer journey retention loops, proactive churn alerts, referral engines, and multi-touch attribution dashboards that multiply your customer lifetime value (LTV).",
    heroBenefit: "Protect your customer base, extend LTV, and eliminate blind spots in your data.",
    iconName: "BarChart3",
    subServices: [
      "Full-Funnel Customer Journey Mapping",
      "Predictive Churn Detection & Mitigation",
      "Retention & Re-Activation Loops",
      "Cross-Platform Executive Analytics Dashboards",
      "Lifetime Value (LTV) Optimization",
    ],
    features: [
      "Cohort Retention & Net Revenue Retention (NRR) Tracking",
      "Automated Milestone & Loyalty Triggers",
      "Customer Health Scoring Algorithms",
      "Integrated Data Warehousing with BigQuery/PostgreSQL",
      "Automated Board-Level KPI Reporting",
    ],
    technologies: ["Tableau", "Looker Studio", "Segment", "PostHog", "Mixpanel", "PostgreSQL"],
    deliverables: [
      "Custom Live KPI Command Center",
      "Automated Churn Prevention Playbooks",
      "Monthly Executive Retention Reviews",
      "Customer Segmentation Matrix",
    ],
    metrics: [
      { label: "Customer LTV Boost", value: "+65%" },
      { label: "Churn Rate Decrease", value: "-31%" },
    ],
    faqs: [
      {
        q: "Can this integrate with our custom CRM or database?",
        a: "Yes. We ingest data from any SQL/NoSQL database, Stripe, custom APIs, or standard CRMs into unified reporting.",
      },
    ],
  },
  {
    id: "7",
    slug: "paid-advertising",
    number: "07",
    title: "Paid Advertising (Omnichannel)",
    shortDesc: "Hyper-targeted campaigns across Facebook, Instagram, Google, YouTube, and LinkedIn that convert on first touch.",
    fullDesc: "We eliminate ad fatigue with dynamic creative systems, algorithmic audience clustering, and relentless messaging alignment between ad hook and landing page destination.",
    heroBenefit: "Capture demand wherever your customers spend their digital attention.",
    iconName: "Target",
    subServices: [
      "Facebook & Instagram Performance Ads",
      "Google Search & Display Network",
      "YouTube In-Stream Video Advertising",
      "LinkedIn Executive B2B Advertising",
      "Programmatic Ad Network Retargeting",
    ],
    features: [
      "AI-Assisted Hook & Creative Variation Generation",
      "Geo-Targeted Hyper-Local & Global Deployments",
      "Deep Audience Exclusion & Lookalike Modeling",
      "Real-Time Budget Shifting to Top Performers",
      "Strict Brand Safety & Compliance Safeguards",
    ],
    technologies: ["Meta Ads", "Google Ads", "YouTube Studio", "LinkedIn Campaign Manager", "AppsFlyer"],
    deliverables: [
      "Custom Ad Creatives (Motion & Static)",
      "High-Impact Headline & Copy Variations",
      "Campaign Setup, Pixel Calibration & Testing",
      "Transparent Weekly Spending Reports",
    ],
    metrics: [
      { label: "CTR Improvement", value: "+190%" },
      { label: "Cost Per Qualified Lead", value: "-45%" },
    ],
    faqs: [
      {
        q: "Who owns the ad accounts and creative assets?",
        a: "You 100% own all ad accounts, pixels, audiences, and creative deliverables. You maintain total administrative control at all times.",
      },
    ],
  },
  {
    id: "8",
    slug: "seo-aeo-geo",
    number: "08",
    title: "SEO | AEO | GEO",
    shortDesc: "Next-gen search dominance engineered for Google, ChatGPT, Perplexity, and AI Answer Engines.",
    fullDesc: "Traditional SEO is no longer enough. We optimize your brand not just for classical 10-blue-links Google search, but for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) so AI models like ChatGPT, Claude, and Perplexity cite and recommend your business as the definitive authority.",
    heroBenefit: "Be the #1 answer when prospective customers ask Google, Perplexity, or ChatGPT.",
    iconName: "Search",
    subServices: [
      "Technical Core Web Vitals Optimization",
      "Generative Engine Optimization (GEO) for AI Citations",
      "Answer Engine Optimization (AEO) Schema Architecture",
      "High-Authority Backlink Acquisition",
      "Localized & Voice Search Domination",
    ],
    features: [
      "Comprehensive Entity-First Schema Markup Architecture",
      "Knowledge Graph Injection & Brand Citations",
      "Direct AI LLM Prompt Testing & Citation Audits",
      "Speed Optimization for 95+ Google Lighthouse Scores",
      "Programmatic Long-Tail Keyword Content Hubs",
    ],
    technologies: ["Ahrefs", "Semrush", "Screaming Frog", "Google Search Console", "Perplexity API"],
    deliverables: [
      "Technical SEO & Core Web Vitals Audit Report",
      "AEO Schema Implementation (JSON-LD)",
      "Targeted Pillar Content Roadmap",
      "Monthly LLM Citation & Organic Rankings Tracking",
    ],
    metrics: [
      { label: "AI Answer Citations", value: "+340%" },
      { label: "Organic Search Growth", value: "+215%" },
    ],
    faqs: [
      {
        q: "What is the difference between SEO and GEO?",
        a: "SEO optimizes for web crawlers ranking pages on SERPs. GEO (Generative Engine Optimization) structures information in semantic entities so LLMs like ChatGPT and Perplexity synthesize your brand into their answers.",
      },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "We analyze your existing workflows, customer journeys, tech stack, and competitors to unearth high-leverage growth opportunities.",
    badge: "Days 1–5",
  },
  {
    step: "02",
    title: "Strategy & Blueprint",
    desc: "We engineer a bespoke growth and automation architecture with clear milestones, ROI targets, and technical specifications.",
    badge: "Days 6–10",
  },
  {
    step: "03",
    title: "Agile Execution",
    desc: "Our senior developers, AI engineers, and media buyers build, code, and deploy your custom systems in focused sprints.",
    badge: "Sprint Phase",
  },
  {
    step: "04",
    title: "Optimization & CRO",
    desc: "We run algorithmic A/B tests, calibrate attribution pipelines, and optimize conversion rates to maximize throughput.",
    badge: "Iterative",
  },
  {
    step: "05",
    title: "Intelligent Automation",
    desc: "We connect autonomous AI triggers and self-healing webhooks to turn repeatable wins into hands-off operations.",
    badge: "Zero-Touch",
  },
  {
    step: "06",
    title: "Exponential Scale",
    desc: "With verified unit economics in place, we scale ad budgets, expand channels, and accelerate market leadership.",
    badge: "Scale 10x",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    slug: "nexus-ai-support",
    title: "Nexus AI — 24/7 Autonomous Customer Support Copilot",
    client: "Nexus Global Tech",
    industry: "SaaS / Enterprise",
    category: "AI Automation",
    metrics: [
      { label: "Ticket Resolution", value: "84% Auto" },
      { label: "First Response Time", value: "< 12 sec" },
      { label: "CSAT Improvement", value: "+38%" },
    ],
    summary: "Built an enterprise RAG copilot grounded in 40,000+ support documents, handling tier-1 customer inquiries instantaneously.",
    challenge: "Nexus was struggling with a 6-hour support backlog across 14 time zones, causing customer churn and overburdening engineers.",
    solution: "Engineered a private vector search architecture with Claude 3.7 and LangChain, connected directly to Zendesk and Slack.",
    results: [
      "Resolved 84% of incoming tier-1 tickets without human intervention",
      "Reduced average response time from 6.2 hours to under 12 seconds",
      "Saved 65 engineer support hours each month",
    ],
    techStack: ["Next.js", "Python", "LangChain", "Pinecone", "Claude 3.7", "Zendesk API"],
    image: "/assets/support-copilot.jpg",
    featured: true,
  },
  {
    id: "cs-2",
    slug: "aurafin-pipeline-automation",
    title: "AuraFin — Zero-Friction B2B Pipeline & CRM Engine",
    client: "AuraFin Capital",
    industry: "Finance & Wealth",
    category: "CRM & Automation",
    metrics: [
      { label: "Pipeline Velocity", value: "+320%" },
      { label: "Hours Saved / Wk", value: "42 hrs" },
      { label: "New Pipeline Created", value: "$2.4M" },
    ],
    summary: "Created an automated lead qualification and onboarding infrastructure connecting Meta ads, n8n, HubSpot, and WhatsApp.",
    challenge: "High-ticket financial leads were taking 48 hours to be contacted by sales reps, resulting in an 80% drop-off rate.",
    solution: "Deployed self-hosted n8n workflows that instantly enriched lead data, scored intent via AI, and triggered personal WhatsApp calendar invites within 60 seconds.",
    results: [
      "Immediate 60-second contact speed raised call booking rates by 320%",
      "Eliminated 42 hours per week of manual data entry for the sales team",
      "Generated $2.4M in closed-won revenue in the first 90 days",
    ],
    techStack: ["n8n", "HubSpot CRM", "WhatsApp Cloud API", "OpenAI", "PostgreSQL"],
    image: "/assets/growth-pipeline.jpg",
    featured: true,
  },
  {
    id: "cs-3",
    slug: "velox-performance-growth",
    title: "Velox Commerce — Omnichannel Paid Acquisition Scaling",
    client: "Velox Lifestyle",
    industry: "E-Commerce",
    category: "Performance Marketing",
    metrics: [
      { label: "Blended ROAS", value: "4.8x" },
      { label: "YoY Revenue Growth", value: "+210%" },
      { label: "Customer Acquisition Cost", value: "-34%" },
    ],
    summary: "Scaled direct-to-consumer lifestyle brand from $40k to $250k monthly ad spend while improving bottom-line profitability.",
    challenge: "Ad fatigue and iOS privacy changes caused Velox's Meta ROAS to plummet below break-even (1.4x).",
    solution: "Built a high-velocity UGC creative pipeline paired with server-side CAPI tracking and Google Performance Max omnichannel scaling.",
    results: [
      "Achieved a consistent 4.8x blended ROAS at 6x previous ad spend volume",
      "Cut blended CAC by 34% through rapid creative testing",
      "Reached top 1% Shopify store status in their vertical",
    ],
    techStack: ["Meta Ads", "Google Ads", "Triple Whale", "Shopify Plus", "Klaviyo"],
    image: "/assets/growth-pipeline.jpg",
    featured: true,
  },
  {
    id: "cs-4",
    slug: "apex-health-aeo-geo",
    title: "Apex Health — #1 Authority in ChatGPT & Perplexity Search",
    client: "Apex Health Clinics",
    industry: "Healthcare",
    category: "SEO | AEO | GEO",
    metrics: [
      { label: "LLM Citations", value: "+450%" },
      { label: "Organic Consultations", value: "+180%" },
      { label: "Lighthouse Performance", value: "98/100" },
    ],
    summary: "Engineered comprehensive Generative Engine Optimization (GEO) and technical schema markup, capturing dominant visibility in AI search.",
    challenge: "Apex was losing organic patients to aggregator directories and was completely absent from AI search queries.",
    solution: "Implemented entity-based schema structures, medical authority clusters, and fast headless Next.js web architecture.",
    results: [
      "Ranked as the #1 recommended clinic in regional ChatGPT and Perplexity queries",
      "Organic consultations increased by 180% year-over-year",
      "Achieved a 98/100 Google Lighthouse Core Web Vitals rating",
    ],
    techStack: ["Next.js", "JSON-LD Schema", "Vercel", "Tailwind CSS", "Ahrefs"],
    image: "/assets/support-copilot.jpg",
    featured: false,
  },
  {
    id: "cs-5",
    slug: "hyperscale-brand-transformation",
    title: "HyperScale — Category-Defining Rebrand & Positioning",
    client: "HyperScale Cloud",
    industry: "Startups & SaaS",
    category: "Brand Growth",
    metrics: [
      { label: "Demo Conversion Rate", value: "3.2x" },
      { label: "Series A Capital Raised", value: "$8.5M" },
      { label: "Inbound Pipeline", value: "+240%" },
    ],
    summary: "Re-architected the visual identity, brand positioning, and enterprise digital presence for a fast-growing cloud infrastructure firm.",
    challenge: "HyperScale had brilliant technology but looked like an amateur student project, causing enterprise prospects to question their security.",
    solution: "Designed a luxury dark-mode design system with Apple/Linear grade micro-interactions, clear value propositions, and investor pitch materials.",
    results: [
      "Tripled inbound enterprise demo conversion rate within 30 days of launch",
      "Successfully closed an $8.5M Series A funding round with lead investors",
      "Positioned the company as a Tier-1 competitor against legacy providers",
    ],
    techStack: ["Figma", "Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
    image: "/assets/growth-pipeline.jpg",
    featured: true,
  },
  {
    id: "cs-6",
    slug: "omnilead-real-estate-ai",
    title: "OmniLead — Real Estate AI Lead Qualifier & Booking Agent",
    client: "Prestige Estates Group",
    industry: "Real Estate",
    category: "AI & Lead Generation",
    metrics: [
      { label: "Instant Qualification", value: "91%" },
      { label: "Showroom Appointments", value: "+145%" },
      { label: "Ad Conversion Rate", value: "4.9%" },
    ],
    summary: "Automated real estate lead intake and booking via an intelligent conversational AI agent across WhatsApp and web portals.",
    challenge: "Real estate agents took hours to answer property queries, while unqualified buyers clogged calendars.",
    solution: "Created an intelligent conversational AI agent that collected budget, location preferences, and mortgage pre-approval before booking.",
    results: [
      "Qualified 91% of inbound leads automatically within seconds",
      "Boosted qualified weekend showroom visits by 145%",
      "Increased property sales velocity by 40%",
    ],
    techStack: ["WhatsApp API", "OpenAI GPT-4o", "Next.js", "Zapier", "PostgreSQL"],
    image: "/assets/support-copilot.jpg",
    featured: false,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Sprint",
    tierBadge: "Rapid Deployment",
    monthlyPrice: 2490,
    annualPrice: 1990,
    description: "Ideal for ambitious startups and businesses ready to implement intelligent automation or launch high-ROAS paid ads.",
    recommended: false,
    idealFor: "Startups & Emerging Businesses",
    ctaText: "Start with Starter",
    features: [
      "1 Core Growth Channel (Paid Ads or SEO/GEO)",
      "1 Custom AI Assistant or n8n Automation Workflow",
      "Dedicated Slack / WhatsApp Communication Channel",
      "Weekly Performance Reporting & Optimization",
      "Standard Response Time (< 24 hours)",
      "Complete Source Code & Workflow Ownership",
    ],
  },
  {
    id: "growth",
    name: "Growth Engine",
    tierBadge: "Most Popular / Recommended",
    monthlyPrice: 4990,
    annualPrice: 3990,
    description: "Our flagship comprehensive package. Full-funnel digital marketing, multi-agent AI systems, and aggressive scaling.",
    recommended: true,
    idealFor: "Scaling Businesses ($1M–$10M Revenue)",
    ctaText: "Accelerate Growth",
    features: [
      "Omnichannel Paid Ads (Google, Meta & LinkedIn)",
      "Up to 3 Autonomous AI Agents & Custom RAG Knowledge Base",
      "Full CRM & Operations Automation (Make / n8n / Zapier)",
      "Generative Engine Optimization (GEO & AEO) for Search & AI",
      "High-Converting Landing Pages & Creative Asset Production",
      "Bi-Weekly Executive Strategy & Roadmap Sprints",
      "Priority SLA Support (< 4 hours) & Dedicated Project Lead",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Dominance",
    tierBadge: "Full-Stack Partner",
    monthlyPrice: 9990,
    annualPrice: 7990,
    description: "A complete dedicated growth, AI engineering, and creative department embedded seamlessly into your enterprise.",
    recommended: false,
    idealFor: "Enterprises, Funded SaaS & Market Leaders",
    ctaText: "Talk to Leadership",
    features: [
      "Dedicated Full-Stack Growth Team (AI Engineers, Media Buyers, Designers)",
      "Custom Private LLM Deployment & Self-Hosted Vector Infrastructure",
      "Unlimited Automation Workflows & Continuous Pipeline Optimization",
      "Full Brand Identity Evolution & High-Fidelity Design System",
      "Executive Dashboard & Data Warehousing (BigQuery / Looker)",
      "24/7 Guaranteed VIP Incident SLA (< 1 hour)",
      "Direct Strategic Access to CEO Karan Verma & Co-Founder Manoj",
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: "t-1",
    name: "Vikram Malhotra",
    role: "Founder & CEO",
    company: "Nexus Global Cloud",
    rating: 5,
    text: "DiG Shine transformed our entire growth engine. Within 60 days of deploying their AI agents and paid ads architecture, our pipeline exploded by 340%. The website and systems look and feel like an elite Silicon Valley tech giant.",
    avatar: "VM",
  },
  {
    id: "t-2",
    name: "Sarah Jenkins",
    role: "Chief Marketing Officer",
    company: "AuraFin International",
    rating: 5,
    text: "Karan Verma and the DiG Shine team operate with unmatched precision. Their deep grasp of modern AI, workflow automation, and performance marketing saved us over 40 hours a week while accelerating our closed deals.",
    avatar: "SJ",
  },
  {
    id: "t-3",
    name: "Rahul Singhania",
    role: "Managing Director",
    company: "Prestige Real Estate Holdings",
    rating: 5,
    text: "The lead qualification system DiG Shine built for us completely revolutionized our sales floor. We went from chasing unresponsive leads to closing pre-qualified property buyers on auto-pilot. Worth every single penny.",
    avatar: "RS",
  },
  {
    id: "t-4",
    name: "Elena Rostova",
    role: "Head of Growth",
    company: "Velox Direct",
    rating: 5,
    text: "We tested four different agencies before finding DiG Shine. None of them came close to the aesthetic standards, technical capability, and sheer ROAS results that Karan and Manoj deliver. Truly world-class.",
    avatar: "ER",
  },
];

export const INDUSTRIES_SERVED = [
  { name: "SaaS & Cloud", icon: "Cloud", desc: "Product-led growth, churn reduction & enterprise demo pipelines" },
  { name: "Healthcare & Clinics", icon: "Activity", desc: "AEO authority, patient acquisition & automated triage" },
  { name: "E-Commerce & D2C", icon: "ShoppingBag", desc: "Omnichannel paid ads, high ROAS & retention email loops" },
  { name: "Real Estate", icon: "Building", desc: "Hyper-local lead gen & 24/7 AI WhatsApp qualifying agents" },
  { name: "Finance & Wealth", icon: "DollarSign", desc: "High-net-worth client acquisition & compliance-first funnels" },
  { name: "Manufacturing", icon: "Factory", desc: "B2B supply chain automation, distributor portals & quotes" },
  { name: "Startups & Tech", icon: "Rocket", desc: "0-to-1 brand positioning, launch velocity & pitch design" },
  { name: "Education & EdTech", icon: "GraduationCap", desc: "Student enrollment funnels & conversational course copilots" },
  { name: "Local Businesses", icon: "MapPin", desc: "Google Map domination, review automation & booking" },
  { name: "Hospitality & Travel", icon: "Compass", desc: "Direct reservation engines & VIP guest automated journeys" },
  { name: "Fitness & Wellness", icon: "HeartPulse", desc: "Membership acquisition & community engagement automation" },
  { name: "Technology & AI", icon: "Cpu", desc: "Category-defining brand authority & developer ecosystem growth" },
];

export const FAQ_DATA = [
  {
    category: "General",
    q: "What makes DiG Shine fundamentally different from traditional marketing agencies?",
    a: "Traditional agencies run isolated ad campaigns and charge for reports. DiG Shine builds connected digital growth ecosystems. We combine custom AI agents, automated operations (n8n/Make), and algorithmic performance marketing under one unified architecture so your revenue scales without linear headcount increases.",
  },
  {
    category: "Services",
    q: "Can DiG Shine work with our existing tools and CRM?",
    a: "Absolutely. We specialize in non-disruptive integration. Whether your stack uses HubSpot, Salesforce, Notion, Google Workspace, Slack, or custom internal APIs, we build bi-directional automations that elevate what you already use.",
  },
  {
    category: "Pricing & ROI",
    q: "How does pricing and engagement work?",
    a: "We offer transparent monthly sprints starting at $2,490/mo for focused projects up to $9,990/mo for full-stack enterprise partnerships. There are no lock-in hostage contracts; we earn your business each month through measurable pipeline results.",
  },
  {
    category: "Timeline",
    q: "How quickly can we launch our first AI or growth campaign?",
    a: "We operate in agile 2-week sprints. Initial AI copilots, CRM automations, or ad campaigns are typically deployed live within 10 to 14 business days from kickoff.",
  },
  {
    category: "Leadership",
    q: "Who directly oversees our project?",
    a: "Every engagement is directly stewarded by founder Karan Verma (AI & Growth Strategy) and co-founder Manoj (Operations & Workflow Execution). You have direct Slack/WhatsApp access to decision makers, not junior account managers.",
  },
  {
    category: "SEO & AI",
    q: "What is Generative Engine Optimization (GEO) and why do I need it?",
    a: "As prospective buyers increasingly use ChatGPT, Claude, and Perplexity instead of traditional Google search, your business must be recognized as an authoritative entity by AI models. Our GEO service ensures your brand is indexed, cited, and recommended in AI-generated answers.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "generative-engine-optimization-guide-2026",
    title: "The 2026 Guide to GEO: How to Rank in ChatGPT, Perplexity, and Gemini",
    excerpt: "Traditional SEO is no longer enough. Learn how entity-based semantic optimization and AI citations are dictating the future of digital discovery.",
    category: "SEO & AI Discovery",
    readTime: "7 min read",
    date: "Oct 20, 2026",
    author: {
      name: "Karan Verma",
      role: "CEO & Founder",
      avatar: "KV",
    },
    tags: ["GEO", "AI Search", "AEO", "Growth Strategy"],
    featured: true,
    content: [
      "The paradigm of search has officially shifted. For over two decades, digital visibility was defined by Google's PageRank and blue links on a desktop screen. Today, high-intent prospective buyers are directly asking conversational LLMs like ChatGPT, Perplexity, Claude, and Gemini for recommendations.",
      "Generative Engine Optimization (GEO) is the discipline of structuring your company's data, brand mentions, technical schemas, and digital authority so that AI synthesis models naturally incorporate your brand into their answers.",
      "Key strategies to implement today include: 1) Comprehensive JSON-LD entity schema linking, 2) High-density factual answers answering user intent, 3) Brand co-citation alongside known category leaders, and 4) Ultra-fast headless performance.",
    ],
  },
  {
    id: "blog-2",
    slug: "autonomous-ai-agents-n8n-langchain",
    title: "Building Autonomous AI Agents with LangChain and n8n: Practical Enterprise Guide",
    excerpt: "Move beyond simple chatbots. Discover how autonomous multi-agent systems are handling lead enrichment, customer support, and invoicing hands-free.",
    category: "AI & Automation",
    readTime: "9 min read",
    date: "Oct 12, 2026",
    author: {
      name: "Manoj",
      role: "Co-Founder",
      avatar: "M",
    },
    tags: ["n8n", "LangChain", "Autonomous Agents", "Workflow"],
    featured: true,
    content: [
      "Most businesses only scratch the surface of AI by asking an LLM for copy ideas. The real enterprise leverage happens when you give language models the tools to take action autonomously.",
      "By pairing LangChain's reasoning capabilities with n8n's robust webhook and execution infrastructure, we create multi-agent systems that can research a lead on LinkedIn, score their intent against your ideal customer profile, create a CRM deal in HubSpot, and draft a personalized outreach email in under 30 seconds.",
      "In this guide, we break down the self-healing architecture and safety guardrails required to run agents reliably at scale.",
    ],
  },
  {
    id: "blog-3",
    slug: "why-50k-agency-design-converts-3x-higher",
    title: "Why $50k+ Agency Design Aesthetic Converts 3x Higher for B2B Tech",
    excerpt: "Perceived quality dictates pricing power. An inside look at how luxury dark UI, micro-interactions, and 3D design build immediate enterprise trust.",
    category: "Brand Strategy",
    readTime: "6 min read",
    date: "Sep 28, 2026",
    author: {
      name: "Karan Verma",
      role: "CEO & Founder",
      avatar: "KV",
    },
    tags: ["UI/UX", "Brand Positioning", "Conversion Rate", "Design"],
    featured: false,
    content: [
      "In B2B tech and high-ticket consulting, your website is your digital flagship store. When enterprise decision-makers land on a cookie-cutter template, they subconsciously assume your service or software is equally generic.",
      "Investing in custom kinetic typography, high-performance dark themes, glassmorphism, and responsive 3D WebGL elements sends an unmistakable signal: this team executes at the highest echelon of craftsmanship.",
    ],
  },
];
