import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message, services, budget } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and project goals are required." },
        { status: 400 }
      );
    }

    // In production, integrate Nodemailer or EmailJS
    console.log("=== NEW DIG SHINE CONSULTATION DOSSIER ===");
    console.log({
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: phone || "Not provided",
      company: company || "Not provided",
      budget: budget || "Not specified",
      services: services || [],
      message,
    });
    console.log("==========================================");

    return NextResponse.json({
      success: true,
      message: "Consultation dossier received. Our leadership will contact you shortly.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server processing error." },
      { status: 500 }
    );
  }
}
