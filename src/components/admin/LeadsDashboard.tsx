"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Download, ExternalLink, LogOut, Search, X } from "lucide-react";

const LEAD_STATUSES = ["NEW", "CONTACTED", "QUALIFIED", "CLOSED", "LOST"] as const;
type LeadStatus = (typeof LEAD_STATUSES)[number];
type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  services: string[];
  budget: string | null;
  message: string;
  status: LeadStatus;
  notificationSent: boolean;
  createdAt: string;
};

function statusLabel(status: LeadStatus) {
  return status.charAt(0) + status.slice(1).toLowerCase();
}

function statusColor(status: LeadStatus) {
  switch (status) {
    case "NEW": return "border-cyan-400/30 bg-cyan-400/10 text-cyan-200";
    case "CONTACTED": return "border-blue-400/30 bg-blue-400/10 text-blue-200";
    case "QUALIFIED": return "border-emerald-400/30 bg-emerald-400/10 text-emerald-200";
    case "CLOSED": return "border-violet-400/30 bg-violet-400/10 text-violet-200";
    case "LOST": return "border-rose-400/30 bg-rose-400/10 text-rose-200";
  }
}

function dateLabel(date: string) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}

export function LeadsDashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);
  const pageSize = 25;

  const loadLeads = useCallback(async () => {
    setLoading(true);
    setError("");
    const params = new URLSearchParams({ page: String(page) });
    if (search.trim()) params.set("search", search.trim());
    if (statusFilter) params.set("status", statusFilter);
    try {
      const response = await fetch(`/api/admin/leads?${params}`, { cache: "no-store" });
      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not load leads.");
      setLeads(result.leads);
      setTotal(result.total);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Could not load leads.");
    } finally {
      setLoading(false);
    }
  }, [page, router, search, statusFilter]);

  useEffect(() => {
    const timer = window.setTimeout(() => void loadLeads(), 250);
    return () => window.clearTimeout(timer);
  }, [loadLeads]);

  async function updateStatus(lead: Lead, status: LeadStatus) {
    setUpdating(true);
    setError("");
    try {
      const response = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: lead.id, status }),
      });
      const result = await response.json();
      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }
      if (!response.ok) throw new Error(result.error || "Could not update lead.");
      setLeads((current) => current.map((item) => item.id === lead.id ? result.lead : item));
      setSelectedLead((current) => current?.id === lead.id ? result.lead : current);
    } catch (updateError) {
      setError(updateError instanceof Error ? updateError.message : "Could not update lead.");
    } finally {
      setUpdating(false);
    }
  }

  async function exportCsv() {
    setError("");
    try {
      const params = new URLSearchParams({ format: "csv" });
      if (search.trim()) params.set("search", search.trim());
      if (statusFilter) params.set("status", statusFilter);
      const response = await fetch(`/api/admin/leads?${params}`, { cache: "no-store" });
      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }
      if (!response.ok) throw new Error("Could not export leads.");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "dig-shine-leads.csv";
      link.click();
      URL.revokeObjectURL(url);
    } catch (exportError) {
      setError(exportError instanceof Error ? exportError.message : "Could not export leads.");
    }
  }

  async function signOut() {
    try {
      const response = await fetch("/api/admin/logout", { method: "POST" });
      if (!response.ok) throw new Error("Could not sign out. Please try again.");
      router.replace("/admin/login");
      router.refresh();
    } catch (logoutError) {
      setError(logoutError instanceof Error ? logoutError.message : "Could not sign out.");
    }
  }

  const pages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <main className="mx-auto min-h-[calc(100vh-10rem)] w-full max-w-7xl px-5 py-10 sm:px-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00C8FF]">DiG Shine / Admin</p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Lead management</h1>
          <p className="mt-2 text-sm text-[#94A3B8]">{total} {total === 1 ? "lead" : "leads"} matching your filters</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => void exportCsv()} className="btn-secondary !px-4 !py-2.5 text-sm">
            <Download className="h-4 w-4" aria-hidden="true" /> Export CSV
          </button>
          <button onClick={() => void signOut()} className="btn-secondary !px-4 !py-2.5 text-sm">
            <LogOut className="h-4 w-4" aria-hidden="true" /> Sign out
          </button>
        </div>
      </div>

      <div className="glass-panel mt-8 rounded-2xl p-4 sm:p-5">
        <div className="flex flex-col gap-3 md:flex-row">
          <label className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
            <span className="sr-only">Search leads</span>
            <input
              type="search"
              placeholder="Search name, email, phone, company or message"
              value={search}
              onChange={(event) => { setSearch(event.target.value); setPage(1); }}
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white outline-none focus:border-[#00C8FF]"
            />
          </label>
          <label>
            <span className="sr-only">Filter by lead status</span>
            <select
              value={statusFilter}
              onChange={(event) => { setStatusFilter(event.target.value); setPage(1); }}
              className="w-full rounded-xl border border-white/10 bg-[#0d1424] px-4 py-3 text-sm text-white outline-none focus:border-[#00C8FF] md:w-48"
            >
              <option value="">All statuses</option>
              {LEAD_STATUSES.map((status) => <option key={status} value={status}>{statusLabel(status)}</option>)}
            </select>
          </label>
        </div>
      </div>

      {error && <p role="alert" className="mt-4 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">{error}</p>}

      <div className="glass-panel mt-5 overflow-hidden rounded-2xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="border-b border-white/10 bg-white/[0.025] text-xs uppercase tracking-wider text-slate-400">
              <tr>
                <th scope="col" className="px-5 py-4 font-medium">Lead</th>
                <th scope="col" className="px-5 py-4 font-medium">Company</th>
                <th scope="col" className="px-5 py-4 font-medium">Services</th>
                <th scope="col" className="px-5 py-4 font-medium">Submitted</th>
                <th scope="col" className="px-5 py-4 font-medium">Status</th>
                <th scope="col" className="px-5 py-4 font-medium"><span className="sr-only">Details</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {loading ? (
                <tr><td colSpan={6} className="px-5 py-12 text-center text-slate-400">Loading leads...</td></tr>
              ) : leads.length === 0 ? (
                <tr><td colSpan={6} className="px-5 py-12 text-center text-slate-400">No leads found.</td></tr>
              ) : leads.map((lead) => (
                <tr key={lead.id} className="transition hover:bg-white/[0.025]">
                  <td className="px-5 py-4">
                    <button onClick={() => setSelectedLead(lead)} className="text-left">
                      <span className="block font-semibold text-white hover:text-[#00C8FF]">{lead.name}</span>
                      <span className="mt-1 block text-xs text-slate-400">{lead.email}</span>
                    </button>
                  </td>
                  <td className="px-5 py-4 text-slate-300">{lead.company || "—"}</td>
                  <td className="max-w-56 truncate px-5 py-4 text-slate-300" title={lead.services.join(", ")}>
                    {lead.services.join(", ") || "—"}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-slate-400">{dateLabel(lead.createdAt)}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${statusColor(lead.status)}`}>
                      {statusLabel(lead.status)}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => setSelectedLead(lead)}
                      aria-label={`View ${lead.name}'s lead`}
                      className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-white/[0.07] px-5 py-4 text-sm text-slate-400">
          <span>Page {page} of {pages}</span>
          <div className="flex gap-2">
            <button disabled={page <= 1 || loading} onClick={() => setPage((current) => current - 1)} className="btn-secondary !px-3 !py-1.5 text-xs disabled:opacity-40">Previous</button>
            <button disabled={page >= pages || loading} onClick={() => setPage((current) => current + 1)} className="btn-secondary !px-3 !py-1.5 text-xs disabled:opacity-40">Next</button>
          </div>
        </div>
      </div>

      {selectedLead && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedLead(null); }}
        >
          <section role="dialog" aria-modal="true" aria-labelledby="lead-details-title" className="glass-panel max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00C8FF]">Lead details</p>
                <h2 id="lead-details-title" className="mt-2 text-2xl font-bold text-white">{selectedLead.name}</h2>
                <p className="mt-1 text-sm text-slate-400">{dateLabel(selectedLead.createdAt)}</p>
              </div>
              <button onClick={() => setSelectedLead(null)} aria-label="Close lead details" className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Detail label="Email" value={selectedLead.email} />
              <Detail label="Phone" value={selectedLead.phone || "Not provided"} />
              <Detail label="Company" value={selectedLead.company || "Not provided"} />
              <Detail label="Budget" value={selectedLead.budget || "Not specified"} />
              <Detail label="Services" value={selectedLead.services.join(", ") || "Not specified"} />
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Email notification</p>
                <p className={`mt-1 text-sm ${selectedLead.notificationSent ? "text-emerald-300" : "text-amber-300"}`}>
                  {selectedLead.notificationSent ? "Sent" : "Not delivered"}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-slate-500">Message</p>
              <p className="mt-2 whitespace-pre-wrap break-words rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 text-sm leading-6 text-slate-200">{selectedLead.message}</p>
            </div>
            <label className="mt-6 block">
              <span className="text-xs uppercase tracking-wider text-slate-500">Lead status</span>
              <select
                value={selectedLead.status}
                disabled={updating}
                onChange={(event) => void updateStatus(selectedLead, event.target.value as LeadStatus)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0d1424] px-4 py-3 text-sm text-white outline-none focus:border-[#00C8FF] disabled:opacity-60 sm:max-w-xs"
              >
                {LEAD_STATUSES.map((status) => <option key={status} value={status}>{statusLabel(status)}</option>)}
              </select>
            </label>
          </section>
        </div>
      )}
    </main>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 break-words text-sm text-slate-200">{value}</p>
    </div>
  );
}
