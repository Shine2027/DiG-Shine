import { LeadStatus, Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { isAdminAuthenticated, isSameOriginRequest } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const STATUSES = Object.values(LeadStatus);

function isLeadStatus(value: string): value is LeadStatus {
  return STATUSES.includes(value as LeadStatus);
}

function makeWhere(search: string, status: string): Prisma.LeadWhereInput {
  const conditions: Prisma.LeadWhereInput[] = [];
  if (status && isLeadStatus(status)) conditions.push({ status: status as LeadStatus });
  if (search) {
    conditions.push({
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { phone: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
        { message: { contains: search, mode: "insensitive" } },
        { services: { has: search } },
      ],
    });
  }
  return conditions.length ? { AND: conditions } : {};
}

function csvCell(value: string | null): string {
  const safeValue = (value ?? "").replace(/^[\s]*[=+\-@\t\r]/, (match) => `'${match}`);
  return `"${safeValue.replace(/"/g, '""')}"`;
}

export async function GET(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  const url = new URL(request.url);
  const search = (url.searchParams.get("search") ?? "").trim().slice(0, 100);
  const status = (url.searchParams.get("status") ?? "").toUpperCase();
  if (status && !isLeadStatus(status)) {
    return NextResponse.json({ error: "Invalid lead status." }, { status: 400 });
  }
  const where = makeWhere(search, status);

  try {
    if (url.searchParams.get("format") === "csv") {
      const leads = await prisma.lead.findMany({ where, orderBy: { createdAt: "desc" } });
      const rows = [
        ["Name", "Email", "Phone", "Company", "Services", "Budget", "Message", "Date & Time", "Lead Status"],
        ...leads.map((lead) => [
          lead.name,
          lead.email,
          lead.phone ?? "",
          lead.company ?? "",
          lead.services.join("; "),
          lead.budget ?? "",
          lead.message,
          lead.createdAt.toISOString(),
          lead.status,
        ]),
      ];
      const csv = `\uFEFF${rows.map((row) => row.map(csvCell).join(",")).join("\r\n")}`;
      return new NextResponse(csv, {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": 'attachment; filename="dig-shine-leads.csv"',
          "Cache-Control": "no-store",
        },
      });
    }

    const page = Math.max(1, Number.parseInt(url.searchParams.get("page") ?? "1", 10) || 1);
    const pageSize = 25;
    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.lead.count({ where }),
    ]);

    return NextResponse.json(
      { leads, total, page, pageSize },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("Admin lead retrieval failed.", error instanceof Error ? error.message : "Unknown database error");
    return NextResponse.json({ error: "Could not load leads." }, { status: 503 });
  }
}

export async function PATCH(request: Request) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ error: "Request origin could not be verified." }, { status: 403 });
  }
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
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
    typeof (payload as { id?: unknown }).id !== "string" ||
    typeof (payload as { status?: unknown }).status !== "string"
  ) {
    return NextResponse.json({ error: "Lead ID and status are required." }, { status: 400 });
  }

  const { id, status } = payload as { id: string; status: string };
  if (!isLeadStatus(status)) {
    return NextResponse.json({ error: "Invalid lead status." }, { status: 400 });
  }

  try {
    const lead = await prisma.lead.update({
      where: { id },
      data: { status },
    });
    return NextResponse.json({ lead });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ error: "Lead not found." }, { status: 404 });
    }
    console.error("Lead status update failed.", error instanceof Error ? error.message : "Unknown database error");
    return NextResponse.json({ error: "Could not update lead status." }, { status: 503 });
  }
}
