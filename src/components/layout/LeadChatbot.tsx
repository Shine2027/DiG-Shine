"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { AlertCircle, Bot, CheckCircle2, ChevronLeft, LoaderCircle, MessageCircle, Send, ShieldCheck, X } from "lucide-react";

type StepKey = "name" | "number" | "email" | "requirement";

const STEPS: {
  key: StepKey;
  prompt: string;
  label: string;
  placeholder: string;
  type: "text" | "tel" | "email" | "textarea";
  autoComplete?: string;
}[] = [
  {
    key: "name",
    prompt: "What should we call you?",
    label: "Your name",
    placeholder: "Full name",
    type: "text",
    autoComplete: "name",
  },
  {
    key: "number",
    prompt: "What phone number can our team reach you on?",
    label: "Phone number",
    placeholder: "+91 98765 43210",
    type: "tel",
    autoComplete: "tel",
  },
  {
    key: "email",
    prompt: "And what’s the best email address to reach you?",
    label: "Email address",
    placeholder: "you@company.com",
    type: "email",
    autoComplete: "email",
  },
  {
    key: "requirement",
    prompt: "Finally, what would you like help with?",
    label: "Your requirement",
    placeholder: "Tell us a little about your goals or challenge…",
    type: "textarea",
  },
];

type LeadDetails = Record<StepKey, string>;
type ChatMessage = { id: number; text: string };

const EMPTY_LEAD: LeadDetails = {
  name: "",
  number: "",
  email: "",
  requirement: "",
};

function validateAnswer(key: StepKey, value: string) {
  if (key === "name" && (Array.from(value).length < 2 || Array.from(value).length > 80)) {
    return "Please enter a name between 2 and 80 characters.";
  }
  if (key === "number") {
    const digits = value.replace(/\D/g, "").length;
    if (!/^[+\d().\-\s]{7,30}$/.test(value) || digits < 7 || digits > 15) {
      return "Enter a valid phone number, including its country code if possible.";
    }
  }
  if (key === "email" && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || value.length > 254)) {
    return "Enter a valid email address.";
  }
  if (key === "requirement" && (Array.from(value).length < 10 || Array.from(value).length > 2000)) {
    return "Please share a little more detail (10–2,000 characters).";
  }
  return "";
}

export function LeadChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [lead, setLead] = useState<LeadDetails>(EMPTY_LEAD);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState<ChatMessage[]>([]);
  const [honeypot, setHoneypot] = useState("");
  const [consent, setConsent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentStep = STEPS[stepIndex] ?? STEPS[STEPS.length - 1]!;

  function goBack() {
    const previousStepIndex = stepIndex - 1;
    const previousStep = STEPS[previousStepIndex];
    if (!previousStep) return;

    setStepIndex(previousStepIndex);
    setInput(lead[previousStep.key]);
    setAnswers((current) => current.slice(0, previousStepIndex));
    setConsent(false);
    setErrorMessage("");
  }

  function resetChat() {
    setStepIndex(0);
    setLead(EMPTY_LEAD);
    setInput("");
    setAnswers([]);
    setHoneypot("");
    setConsent(false);
    setErrorMessage("");
    setIsComplete(false);
  }

  async function submitAnswer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const value = input.trim();
    const validationMessage = validateAnswer(currentStep.key, value);
    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    const nextLead = { ...lead, [currentStep.key]: value };
    if (currentStep.key === "requirement" && !consent) {
      setErrorMessage("Please agree to be contacted about your inquiry.");
      return;
    }

    setLead(nextLead);
    setAnswers((current) => [...current.slice(0, stepIndex), { id: Date.now(), text: value }]);

    if (currentStep.key !== "requirement") {
      setStepIndex((current) => current + 1);
      setInput("");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...nextLead, website: honeypot, consent }),
      });
      const result: unknown = await response.json().catch(() => null);
      const responseError =
        typeof result === "object" && result !== null && "error" in result && typeof result.error === "string"
          ? result.error
          : "We couldn’t send your details. Please try again.";
      const succeeded =
        typeof result === "object" && result !== null && "success" in result && result.success === true;

      if (!response.ok || !succeeded) {
        setErrorMessage(responseError);
        return;
      }

      setIsComplete(true);
      setInput("");
    } catch (error) {
      console.error("Lead chatbot request failed.", error);
      setErrorMessage("We couldn’t connect just now. Please try again or use our contact page.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[70] sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          id="lead-chat-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="lead-chat-title"
          className="mb-4 flex max-h-[80vh] w-[calc(100vw-2.5rem)] max-w-[25rem] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#080d18] shadow-[0_24px_80px_rgba(0,0,0,0.7),0_0_35px_rgba(0,200,255,0.12)]"
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#00C8FF]/10 to-[#10B981]/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00C8FF]/30 bg-[#00C8FF]/10 text-[#00C8FF]">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h2 id="lead-chat-title" className="text-sm font-bold text-white">DiG Shine Assistant</h2>
                <p className="flex items-center gap-1.5 text-xs text-[#6ee7b7]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" /> Here to help
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-5 sm:px-5">
            <div className="mb-3 max-w-[88%] self-start rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.05] px-4 py-3 text-sm leading-relaxed text-slate-200">
              Hi! I can help our team learn what you need. This short chat collects your contact details and requirement—no chat transcript is saved.
            </div>

            <div className="space-y-3" aria-live="polite" aria-relevant="additions text">
              {answers.map((answer) => (
                <p
                  key={answer.id}
                  className="ml-auto max-w-[88%] break-words rounded-2xl rounded-tr-sm border border-[#00C8FF]/20 bg-[#00C8FF]/10 px-4 py-3 text-sm text-white"
                >
                  {answer.text}
                </p>
              ))}

              {!isComplete && (
                <p className="max-w-[88%] self-start rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.05] px-4 py-3 text-sm leading-relaxed text-slate-200">
                  {isSubmitting ? "Thanks. I’m sending your details securely…" : currentStep.prompt}
                </p>
              )}

              {isComplete && (
                <p className="flex max-w-[88%] items-start gap-2 rounded-2xl rounded-tl-sm border border-[#10B981]/20 bg-[#10B981]/[0.08] px-4 py-3 text-sm leading-relaxed text-[#a7f3d0]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  Thanks for reaching out. Our team will be in touch soon.
                </p>
              )}
            </div>

            {errorMessage && (
              <p className="mt-3 flex items-start gap-2 rounded-xl border border-amber-300/15 bg-amber-300/[0.06] px-3 py-2.5 text-xs leading-relaxed text-amber-200" role="alert">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                {errorMessage}
              </p>
            )}
          </div>

          {isComplete ? (
            <div className="border-t border-white/10 p-4">
              <button
                type="button"
                onClick={resetChat}
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-[#00C8FF]/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
              >
                Start another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={submitAnswer} className="border-t border-white/10 bg-black/10 p-4 sm:p-5" noValidate>
              <label htmlFor="lead-chat-answer" className="mb-2 block text-xs font-semibold text-slate-300">
                {currentStep.label}
              </label>
              {currentStep.type === "textarea" ? (
                <textarea
                  id="lead-chat-answer"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  rows={3}
                  maxLength={2000}
                  disabled={isSubmitting}
                  placeholder={currentStep.placeholder}
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#050912] px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-[#00C8FF]/50 focus:ring-2 focus:ring-[#00C8FF]/15 disabled:opacity-60"
                />
              ) : (
                <input
                  id="lead-chat-answer"
                  type={currentStep.type}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  maxLength={currentStep.key === "email" ? 254 : currentStep.key === "number" ? 30 : 80}
                  autoComplete={currentStep.autoComplete}
                  disabled={isSubmitting}
                  placeholder={currentStep.placeholder}
                  className="w-full rounded-xl border border-white/10 bg-[#050912] px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-[#00C8FF]/50 focus:ring-2 focus:ring-[#00C8FF]/15 disabled:opacity-60"
                />
              )}

              {currentStep.key === "requirement" && (
                <div className="mt-3 flex items-start gap-2.5">
                  <input
                    id="lead-chat-consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(event) => setConsent(event.target.checked)}
                    disabled={isSubmitting}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#00C8FF]"
                  />
                  <label htmlFor="lead-chat-consent" className="text-xs leading-relaxed text-slate-300">
                    I agree to be contacted about this inquiry. See our{" "}
                    <Link href="/privacy" className="text-[#00C8FF] underline underline-offset-2 hover:text-[#6ee7b7]">
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>
              )}

              <div aria-hidden="true" className="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
                <label htmlFor="lead-chat-website">Leave this field empty</label>
                <input
                  id="lead-chat-website"
                  name="website"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <div>
                  {stepIndex > 0 && (
                    <button
                      type="button"
                      onClick={goBack}
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-1 rounded-lg px-2 py-2 text-xs font-semibold text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] disabled:opacity-50"
                    >
                      <ChevronLeft className="h-4 w-4" /> Back
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00C8FF] to-[#007BFF] px-4 py-2.5 text-sm font-bold text-[#03101a] shadow-[0_8px_24px_rgba(0,200,255,0.2)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] disabled:cursor-wait disabled:opacity-60"
                >
                  {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {isSubmitting ? "Sending" : currentStep.key === "requirement" ? "Send details" : "Continue"}
                </button>
              </div>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-400">
                <ShieldCheck className="h-3.5 w-3.5 text-[#10B981]" />
                Only your contact details, requirement, and submission date are saved.
              </p>
            </form>
          )}
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close DiG Shine chat" : "Open DiG Shine chat"}
        aria-expanded={isOpen}
        aria-controls="lead-chat-panel"
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#00F0FF]/50 bg-gradient-to-br from-[#00C8FF] to-[#007BFF] text-[#04111c] shadow-[0_10px_35px_rgba(0,200,255,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_42px_rgba(0,200,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#06080e]"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6 transition-transform group-hover:scale-110" />}
      </button>
    </div>
  );
}
