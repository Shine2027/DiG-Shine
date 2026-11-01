import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d().\-\s]{7,50}$/;
const SERVICE_OPTIONS = new Set([
  "AI Services & Copilots",
  "Automation & Workflows",
  "Digital Marketing",
  "Performance Marketing",
  "SEO | AEO | GEO",
  "Brand Growth & Design",
  "Paid Omnichannel Ads",
  "Analytics & Retention",
]);
const BUDGET_OPTIONS = new Set([
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+ Enterprise",
]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readOptionalString(value: unknown): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed || null;
}

async function sendLeadNotification(lead: {
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  services: string[];
  budget: string | null;
  message: string;
}) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM;

  if (!host || !Number.isInteger(port) || port < 1 || port > 65535 || !user || !password || !from) {
    throw new Error("SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, and SMTP_FROM must be configured.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass: password },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 10000,
  });

  await transporter.sendMail({
    from,
    to: "hello@digshine.com",
    replyTo: lead.email,
    subject: `New DiG Shine lead: ${lead.name.replace(/[\r\n]/g, " ")}`,
    text: [
      `Submitted: ${new Date().toISOString()}`,
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Phone: ${lead.phone || "Not provided"}`,
      `Company: ${lead.company || "Not provided"}`,
      `Services: ${lead.services.join(", ") || "Not specified"}`,
      `Budget: ${lead.budget || "Not specified"}`,
      "",
      "Message:",
      lead.message,
    ].join("\n"),
  });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json({ error: "Content-Type must be application/json." }, { status: 415 });
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 16_384) {
      return NextResponse.json({ error: "Request payload is too large." }, { status: 413 });
    }
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON request payload." }, { status: 400 });
  }

  if (!isRecord(body)) {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const name = readOptionalString(body.name);
  const email = readOptionalString(body.email)?.toLowerCase() ?? null;
  const phone = readOptionalString(body.phone);
  const company = readOptionalString(body.company);
  const budget = readOptionalString(body.budget);
  const message = readOptionalString(body.message);

  for (const [field, value] of [
    ["phone", body.phone],
    ["company", body.company],
    ["budget", body.budget],
  ] as const) {
    if (value !== undefined && value !== null && typeof value !== "string") {
      return NextResponse.json({ error: `${field} must be a string.` }, { status: 400 });
    }
  }

  if (!name) {
    return NextResponse.json({ error: "Full name is required." }, { status: 400 });
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }
  if (phone && !PHONE_REGEX.test(phone)) {
    return NextResponse.json({ error: "Enter a valid phone number." }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: "Project goals or bottlenecks message is required." }, { status: 400 });
  }
  if (
    Array.from(name).length > 100 ||
    (email?.length ?? 0) > 254 ||
    (phone?.length ?? 0) > 50 ||
    (company?.length ?? 0) > 120 ||
    (budget?.length ?? 0) > 50 ||
    Array.from(message).length > 4000
  ) {
    return NextResponse.json({ error: "One or more fields exceed the allowed length." }, { status: 400 });
  }
  if (budget && !BUDGET_OPTIONS.has(budget)) {
    return NextResponse.json({ error: "Select a valid budget tier." }, { status: 400 });
  }
  if (
    body.services !== undefined &&
    (!Array.isArray(body.services) ||
      body.services.length > SERVICE_OPTIONS.size ||
      body.services.some((service) => typeof service !== "string" || !SERVICE_OPTIONS.has(service)))
  ) {
    return NextResponse.json({ error: "Select valid services." }, { status: 400 });
  }

  try {
    await sendLeadNotification({
      name,
      email,
      phone,
      company,
      services: Array.isArray(body.services) ? body.services : [],
      budget,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your consultation request has been sent to our team.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Lead email delivery failed.", error instanceof Error ? error.message : "Unknown email error");
    return NextResponse.json(
      { error: "We could not send your request. Please try again or email hello@digshine.com." },
      { status: 503 },
    );
  }
}
