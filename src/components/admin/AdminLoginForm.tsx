"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";

export function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not sign in.");
      router.replace("/admin/leads");
      router.refresh();
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : "Could not sign in.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-5 py-16">
      <section className="glass-panel w-full max-w-md rounded-3xl p-8 sm:p-10">
        <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00C8FF]/30 bg-[#00C8FF]/10 text-[#00C8FF]">
          <LockKeyhole aria-hidden="true" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00C8FF]">DiG Shine</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Admin sign in</h1>
        <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
          Enter your admin password to access lead management.
        </p>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="admin-password" className="block text-sm font-medium text-slate-200">
            Admin password
          </label>
          <input
            id="admin-password"
            autoComplete="current-password"
            type="password"
            required
            maxLength={1024}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-[#00C8FF]"
          />
          {error && <p role="alert" className="text-sm text-rose-300">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </section>
    </main>
  );
}
