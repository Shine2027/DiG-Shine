import type { Metadata } from "next";
import { Mail, Phone, UserRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | DiG Shine",
  description: "Get in touch with DiG Shine.",
};

export default function ContactPage() {
  const contacts = [
    { name: "Karan Verma", phone: "+91 92891 77164", href: "tel:+919289177164" },
    { name: "Manoj", phone: "+91 70828 28940", href: "tel:+917082828940" },
    { name: "Shreyansh", phone: "+91 8595366845", href: "tel:+918595366845" },
  ];

  return (
    <main className="min-h-[60vh] bg-[#050505] px-5 py-24 sm:px-8 sm:py-28">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs font-mono uppercase tracking-[0.24em] text-[#00C8FF] mb-4">Contact</p>
        <h1 className="text-3xl font-display font-bold text-white sm:text-5xl">Let&apos;s talk.</h1>
        <p className="mt-4 text-sm text-[#94A3B8] sm:text-base">
          Reach us directly by email or phone. Our team is ready to help.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.phone}
              href={contact.href}
              className="glass-panel group rounded-2xl border border-white/10 p-5 text-left transition-all duration-300 hover:border-[#00C8FF]/50 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#00C8FF]/30 bg-[#00C8FF]/10 text-[#00C8FF]">
                  <UserRound className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]">Contact Person</p>
                  <h2 className="mt-1 text-base font-semibold text-white">{contact.name}</h2>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-sm font-medium text-[#00C8FF]">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{contact.phone}</span>
              </div>
            </a>
          ))}
        </div>

        <a
          href="mailto:hellodigshine@gmail.com"
          className="glass-panel mt-5 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 px-5 py-5 text-white transition-all duration-300 hover:border-[#10B981]/50"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981]">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="text-left">
            <p className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]">Mail Us</p>
            <p className="mt-1 font-semibold text-[#10B981]">hellodigshine@gmail.com</p>
          </div>
        </a>
      </div>
    </main>
  );
}
