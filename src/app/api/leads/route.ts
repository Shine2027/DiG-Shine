import { createSign } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d().\-\s]{7,30}$/;
const LEAD_FIELDS = ["name", "number", "email", "requirement", "website", "consent"];
const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : null;
}

function base64Url(value: string) {
  return Buffer.from(value).toString("base64url");
}

function createServiceAccountAssertion(email: string, privateKey: string) {
  const now = Math.floor(Date.now() / 1000);
  const encodedHeader = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const encodedClaims = base64Url(
    JSON.stringify({
      iss: email,
      scope: GOOGLE_SHEETS_SCOPE,
      aud: GOOGLE_TOKEN_URL,
      iat: now,
      exp: now + 3600,
    }),
  );
  const unsignedAssertion = `${encodedHeader}.${encodedClaims}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsignedAssertion);
  signer.end();
  return `${unsignedAssertion}.${signer.sign(privateKey.replace(/\\n/g, "\n")).toString("base64url")}`;
}

async function getGoogleAccessToken(email: string, privateKey: string) {
  const assertion = createServiceAccountAssertion(email, privateKey);
  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });

  const result: unknown = await response.json().catch(() => null);
  if (!response.ok || !isRecord(result) || typeof result.access_token !== "string") {
    console.error("Google service-account authentication failed.", response.status);
    throw new Error("Could not authenticate with Google Sheets.");
  }

  return result.access_token;
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

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!spreadsheetId || !serviceAccountEmail || !privateKey) {
    return NextResponse.json(
      { error: "Lead capture is not configured yet. Please contact us through the Contact page." },
      { status: 503 },
    );
  }
  if (!/^[\w-]+$/.test(spreadsheetId) || !EMAIL_REGEX.test(serviceAccountEmail)) {
    console.error("Google Sheets environment configuration is invalid.");
    return NextResponse.json(
      { error: "Lead capture is temporarily unavailable. Please use the Contact page." },
      { status: 503 },
    );
  }

  try {
    const accessToken = await getGoogleAccessToken(serviceAccountEmail, privateKey);
    const spreadsheetUrl = new URL(
      `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent("Leads!A:E")}:append`,
    );
    spreadsheetUrl.searchParams.set("valueInputOption", "RAW");
    spreadsheetUrl.searchParams.set("insertDataOption", "INSERT_ROWS");

    const sheetResponse = await fetch(spreadsheetUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[name, number, email, requirement, new Date().toISOString()]],
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!sheetResponse.ok) {
      console.error("Google Sheets rejected a lead row.", sheetResponse.status);
      return NextResponse.json(
        { error: "We couldn’t save your details right now. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Lead storage failed.", error instanceof Error ? error.message : "Unknown Google Sheets error");
    return NextResponse.json(
      { error: "We couldn’t save your details right now. Please try again later." },
      { status: 503 },
    );
  }
}
