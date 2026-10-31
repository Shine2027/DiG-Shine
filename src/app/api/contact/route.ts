import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function maskEmail(email: string): string {
  const parts = email.split("@");
  if (parts.length !== 2) return "***@***";
  const [user, domain] = parts;
  const maskedUser = user.length > 2 ? `${user[0]}***${user[user.length - 1]}` : `${user[0]}***`;
  return `${maskedUser}@${domain}`;
}

function maskPhone(phone: string): string {
  if (!phone || phone.length < 4) return "***";
  return `***-***-${phone.slice(-4)}`;
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type must be application/json." },
        { status: 415 }
      );
    }

    const body = await req.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { name, email, phone, company, message, services, budget } = body;

    // Type and existence validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Full name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid corporate or work email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Project goals or bottlenecks message is required." },
        { status: 400 }
      );
    }

    // Length limit validation (mitigate memory abuse / payload attacks)
    const trimmedName = name.trim().slice(0, 100);
    const trimmedEmail = email.trim().slice(0, 120);
    const trimmedMessage = message.trim().slice(0, 4000);
    const cleanPhone = typeof phone === "string" ? phone.trim().slice(0, 50) : "";
    const cleanCompany = typeof company === "string" ? company.trim().slice(0, 120) : "";
    const cleanBudget = typeof budget === "string" ? budget.trim().slice(0, 50) : "Not specified";
    const cleanServices = Array.isArray(services)
      ? services.filter((s): s is string => typeof s === "string").slice(0, 10)
      : [];

    // Privacy-safe audit log (PII masked for compliance with GDPR & SOC 2 standards)
    console.log("=== NEW DIG SHINE CONSULTATION DOSSIER (METRICS LOGGED) ===");
    console.log({
      timestamp: new Date().toISOString(),
      nameLength: trimmedName.length,
      maskedEmail: maskEmail(trimmedEmail),
      maskedPhone: cleanPhone ? maskPhone(cleanPhone) : "Not provided",
      companyLength: cleanCompany.length,
      budget: cleanBudget,
      servicesCount: cleanServices.length,
      messageLength: trimmedMessage.length,
    });
    console.log("==========================================================");

    return NextResponse.json({
      success: true,
      message: "Consultation dossier received. Founder Karan Verma and co-founder Manoj will contact you within 6 business hours.",
    });
  } catch (error) {
    console.error("Contact API processing error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "Internal server processing error. Please try again or reach hello@digshine.com directly." },
      { status: 500 }
    );
  }
}
