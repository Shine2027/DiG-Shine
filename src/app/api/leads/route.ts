import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d().\-\s]{7,30}$/;
const LEAD_FIELDS = ["name", "number", "email", "requirement", "website", "consent"];
const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzqyvuV3xs_N71YDuTV7VqCQMk3zUYxH1JcJHb0PcVo_QJDD1b24QA3oWwJhbrQWwgD/exec";
const GOOGLE_SHEETS_SPREADSHEET_ID = "1yBE1_-CC1G8MRi-A3LIk7iuVhPMXyH6Z1P5hISQDG_g";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : null;
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json({ error: "Content-Type must be application/json." }, { status: 415 });
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 8192) {
      return NextResponse.json({ error: "Request payload is too large." }, { status: 413 });
    }
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON request payload." }, { status: 400 });
  }

  if (!isRecord(body) || Object.keys(body).some((key) => !LEAD_FIELDS.includes(key))) {
    return NextResponse.json({ error: "Invalid lead details." }, { status: 400 });
  }

  const name = readString(body.name);
  const number = readString(body.number);
  const email = readString(body.email)?.toLowerCase() ?? null;
  const requirement = readString(body.requirement);
  const website = body.website;

  if (typeof website !== "string" || website.length > 0) {
    return NextResponse.json({ error: "This submission could not be accepted." }, { status: 400 });
  }
  if (body.consent !== true) {
    return NextResponse.json({ error: "Please agree to be contacted about your inquiry." }, { status: 400 });
  }
  if (!name || Array.from(name).length < 2 || Array.from(name).length > 80) {
    return NextResponse.json({ error: "Enter a name between 2 and 80 characters." }, { status: 400 });
  }
  if (
    !number ||
    !PHONE_REGEX.test(number) ||
    number.replace(/\D/g, "").length < 7 ||
    number.replace(/\D/g, "").length > 15
  ) {
    return NextResponse.json({ error: "Enter a valid phone number." }, { status: 400 });
  }
  if (!email || email.length > 254 || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (!requirement || Array.from(requirement).length < 10 || Array.from(requirement).length > 2000) {
    return NextResponse.json({ error: "Tell us a little more about your requirement (10–2,000 characters)." }, { status: 400 });
  }

  try {
    const appsScriptResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams({
        spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
        name,
        number,
        email,
        requirement,
        date: new Date().toISOString(),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    const responseText = await appsScriptResponse.text();

    let scriptConfirmedSave = /^(success|ok|saved|added)\b/i.test(responseText.trim());
    try {
      const scriptResult: unknown = JSON.parse(responseText);
      if (typeof scriptResult === "string") {
        scriptConfirmedSave = /^(success|ok|saved|added)\b/i.test(scriptResult.trim());
      } else if (isRecord(scriptResult)) {
        scriptConfirmedSave =
          scriptResult.success === true ||
          ["success", "ok", "saved", "added"].includes(
            String(scriptResult.status ?? scriptResult.result ?? "").toLowerCase(),
          );
      }
    } catch {
      // Plain-text success responses are supported for simple Apps Script deployments.
    }

    if (!appsScriptResponse.ok || !scriptConfirmedSave) {
      console.error("Google Apps Script did not confirm saving a lead.", appsScriptResponse.status);
      return NextResponse.json(
        { error: "We couldn’t save your details right now. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Lead storage failed.", error instanceof Error ? error.message : "Unknown Apps Script error");
    return NextResponse.json(
      { error: "We couldn’t save your details right now. Please try again later." },
      { status: 503 },
    );
  }
}
