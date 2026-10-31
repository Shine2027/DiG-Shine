import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "digshine_admin_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 8;

function getSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET must contain at least 32 characters.");
  }
  return secret;
}

function signature(expiresAt: string): string {
  return createHmac("sha256", getSessionSecret())
    .update(expiresAt)
    .digest("base64url");
}

function safeEqual(left: string, right: string): boolean {
  const leftHash = createHmac("sha256", "digshine-constant-time").update(left).digest();
  const rightHash = createHmac("sha256", "digshine-constant-time").update(right).digest();
  return timingSafeEqual(leftHash, rightHash);
}

export function verifyAdminPassword(password: string): boolean {
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedPassword || expectedPassword.length < 16) {
    throw new Error("ADMIN_PASSWORD must contain at least 16 characters.");
  }
  return safeEqual(password, expectedPassword);
}

export function isSameOriginRequest(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return false;
  try {
    const originUrl = new URL(origin);
    const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
    const requestProtocol = forwardedProtocol || new URL(request.url).protocol.slice(0, -1);
    return (
      originUrl.host.toLowerCase() === host.toLowerCase() &&
      originUrl.protocol === `${requestProtocol}:`
    );
  } catch {
    return false;
  }
}

export function createAdminSession(): string {
  const expiresAt = String(Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS);
  return `${expiresAt}.${signature(expiresAt)}`;
}

export function isValidAdminSession(value: string | undefined): boolean {
  if (!value) return false;
  const [expiresAt, suppliedSignature, extra] = value.split(".");
  if (!expiresAt || !suppliedSignature || extra || !/^\d+$/.test(expiresAt)) return false;
  if (Number(expiresAt) <= Math.floor(Date.now() / 1000)) return false;
  return safeEqual(suppliedSignature, signature(expiresAt));
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return isValidAdminSession(cookieStore.get(COOKIE_NAME)?.value);
}

export const adminSessionCookie = {
  name: COOKIE_NAME,
  maxAge: SESSION_DURATION_SECONDS,
};
