import { NextResponse } from "next/server";
import {
  adminSessionCookie,
  createAdminSession,
  isSameOriginRequest,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ error: "Request origin could not be verified." }, { status: 403 });
  }

  let payload: unknown;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 2048) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (
    typeof payload !== "object" ||
    payload === null ||
    Array.isArray(payload) ||
    typeof (payload as { password?: unknown }).password !== "string"
  ) {
    return NextResponse.json({ error: "Enter the admin password." }, { status: 400 });
  }

  try {
    if (!verifyAdminPassword((payload as { password: string }).password)) {
      return NextResponse.json({ error: "Invalid admin password." }, { status: 401 });
    }
    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: adminSessionCookie.name,
      value: createAdminSession(),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: adminSessionCookie.maxAge,
    });
    return response;
  } catch (error) {
    console.error("Admin login configuration error.", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Admin authentication is not configured." }, { status: 503 });
  }
}
