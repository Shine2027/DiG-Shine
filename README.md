# DiG Shine — World-Class AI, Automation & Performance Agency

> **Automate • Innovate • Elevate**  
> *Since 2026*  
> Founded by **Karan Verma** (CEO & Founder) and **Manoj** (Co-Founder)

---

## 🌟 Overview

**DiG Shine** is an enterprise-grade digital growth agency engineering autonomous AI agent systems, intelligent business workflows, and performance marketing engines. This repository contains the complete production Next.js 15 App Router website built with a luxury dark aesthetic ($50,000+ agency standard), Three.js 3D interactive holographic canvas, fluid Lenis smooth scrolling, and complete SEO schema coverage.

---

## 🎨 Brand Identity & Design System

Designed around the official **DiG Shine** emblem:
- **Primary Color:** Electric Blue (`#00C8FF`)
- **Secondary Color:** Royal Blue (`#007BFF`)
- **Accent:** Neon Cyan (`#00F0FF`)
- **Success / Vitality:** Leaf Green (`#10B981` / `#22C55E` inspired by the leaf in the logo)
- **Background:** Pure Black (`#050505`) & Surface Cards (`#0D0F14`)
- **Borders:** Subtle Glassmorphism `rgba(255, 255, 255, 0.08)` & Active Glow `rgba(0, 200, 255, 0.35)`

---

## ⚡ Technology Stack

- **Framework:** Next.js 15 (App Router, Server Components & SSG)
- **Runtime:** Node.js 26+
- **Language:** TypeScript 5.7+
- **Styling:** Tailwind CSS + PostCSS + Glassmorphic Design System
- **3D Graphics:** Three.js (Interactive neural core & particle constellation)
- **Motion & Kinetic UI:** Framer Motion + Custom Keyframes
- **Smooth Scrolling:** Studio Freight Lenis
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti
- **Contact API:** `/api/contact` validates and emails inquiries directly

---

## 🗺️ Complete Route Architecture

| Route | Description | Rendering |
|---|---|---|
| `/` | Landing page (Hero 3D, Stats, 8 Services, 6-Step Protocol, Industries, FAQ, Booking Form) | Static (SSG) |
| `/about` | Agency philosophy, Karan Verma & Manoj executive bios, agency DNA | Static (SSG) |
| `/services` | Comprehensive services hub with all 8 core pillars | Static (SSG) |
| `/services/[slug]` | Individual deep-dive service pages (deliverables, architecture, tech stack, FAQs) | SSG (Dynamic) |
| `/case-studies` | Documented client transformations, ROI metrics, and tech stacks | Static (SSG) |
| `/case-studies/[slug]` | Detailed case study breakdown (challenge, solution, results) | SSG (Dynamic) |
| `/blog` | CMS-ready articles, GEO guides, and AI agent frameworks | Static (SSG) |
| `/blog/[slug]` | Full-length article reader with author profiles and share links | SSG (Dynamic) |
| `/contact` | High-converting consultation dossier booking with multi-select services and budget tiers | Static (SSG) |
| `/careers` | High-performance culture, benefits, and open engineering roles | Static (SSG) |
| `/faq` | Instant live-search FAQ with categorization | Static (SSG) |
| `/privacy` | Enterprise AI zero-retention data policy and IP ownership | Static (SSG) |
| `/terms` | Sprint frameworks, SLA benchmarks, and terms of service | Static (SSG) |
| `/not-found` | Futuristic quantum node 404 page | Static (SSG) |
| `/sitemap.xml` | Dynamic SEO sitemap with priority weighting | Metadata API |
| `/robots.txt` | Crawler instructions and sitemap links | Metadata API |
| `/api/contact` | Validates consultation inquiries and emails the team | API Route |
| `/api/leads` | Validates chatbot lead details and appends them to Google Sheets | API Route |

---

## 🚀 Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Launch production server:**
   ```bash
   npm run start
   ```

## 📇 Contact Form Setup

Configure SMTP credentials (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, and `SMTP_FROM`) in the local environment and hosting provider. Contact submissions are sent directly to `hello@digshine.com`; they are not stored by the website, so successful form delivery depends on the SMTP provider being configured and available.

## 💬 Chatbot & Google Sheets Setup

The site-wide guided chatbot sends a visitor's name, phone number, email, requirement, and server-generated submission date to the Apps Script web app configured in `src/app/api/leads/route.ts`. The spreadsheet ID and Apps Script deployment URL have already been added there. No Google service-account credentials or environment variables are required.

The deployed Apps Script must:

1. Be available to the public web app endpoint (for example, deploy it to execute as the script owner and allow access to anyone).
2. Accept an `application/x-www-form-urlencoded` `POST` with the fields `spreadsheetId`, `name`, `number`, `email`, `requirement`, and `date`, then append the lead to the intended sheet.
3. Return a success response (`{"success":true}` as JSON, or plain text beginning with `success`, `ok`, `saved`, or `added`) only after the row is saved.

The API validates all submitted fields and requires contact consent before forwarding the lead. It does not send the chat transcript or consent value to the spreadsheet. If you replace the Apps Script deployment or spreadsheet, update both constants in `src/app/api/leads/route.ts` and redeploy the website.

---

## ☁️ Deployment (Vercel)

This project is configured out-of-the-box for **1-click Vercel deployment**:
1. Push your repository to GitHub (`main` branch).
2. Import the project into the [Vercel Dashboard](https://vercel.com).
3. Configure the SMTP environment variables above if you want the contact form to send inquiries.
4. Framework Preset: **Next.js** (auto-detected). The build runs `next build` and does not require a database.
5. Click **Deploy**.

---

## 🔒 Confidentiality & Stewardship

- **CEO & Founder:** Karan Verma
- **Co-Founder:** Manoj
- **Inquiries:** `hellodigshine@gmail.com`
- **Contact:** '+91 8595366845, +91 7082828940'
- **Copyright:** © 2026 DiG Shine. All rights reserved.
