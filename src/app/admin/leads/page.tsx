import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LeadsDashboard } from "@/components/admin/LeadsDashboard";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Lead Management",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  return <LeadsDashboard />;
}
