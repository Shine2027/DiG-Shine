import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | DiG Shine",
  description: "Get in touch with DiG Shine.",
};

export default function ContactPage() {
  return (
    <div className="min-h-[60vh] bg-[#050505] px-5 py-20 sm:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-mono uppercase tracking-[0.24em] text-[#00C8FF] mb-4">Contact</p>
        <h1 className="text-3xl font-display font-bold text-white sm:text-5xl">Let&apos;s talk.</h1>
        <p className="mt-4 text-sm text-[#94A3B8] sm:text-base">
          Reach us directly at hello@digshine.com or use the details in our main communication channels.
        </p>
      </div>
    </div>
  );
}
