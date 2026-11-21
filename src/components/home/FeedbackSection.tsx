"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { signInAnonymously } from "firebase/auth";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  type Firestore,
} from "firebase/firestore";
import { AlertCircle, CheckCircle2, LoaderCircle, Send, ShieldCheck, Star } from "lucide-react";
import { getFirebaseClient } from "@/lib/firebase";

interface FeedbackReview {
  id: string;
  name: string;
  rating: number;
  message: string;
  createdAt: Date | null;
}

type ConnectionState = "loading" | "ready" | "unconfigured" | "error";

const REVIEW_COOLDOWN_MS = 30_000;
const REVIEW_COOLDOWN_KEY = "digshine-feedback-last-submission";

function formatReviewDate(date: Date | null) {
  if (!date) return "Just now";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(date);
}

function StarRating({
  value,
  onChange,
  label,
}: {
  value: number;
  onChange?: (rating: number) => void;
  label?: string;
}) {
  return (
    <div className="flex items-center gap-1" role={onChange ? "group" : "img"} aria-label={label ?? `${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) =>
        onChange ? (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className="rounded-sm p-1 text-[#00C8FF] transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
            aria-label={`${star} ${star === 1 ? "star" : "stars"}`}
            aria-pressed={value === star}
          >
            <Star className={`h-6 w-6 ${star <= value ? "fill-current" : "fill-transparent text-white/25"}`} />
          </button>
        ) : (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= value ? "fill-current text-[#00C8FF]" : "fill-transparent text-white/20"}`}
          />
        ),
      )}
    </div>
  );
}

export function FeedbackSection() {
  const [connection, setConnection] = useState<ConnectionState>("loading");
  const [firestore, setFirestore] = useState<Firestore | null>(null);
  const [reviews, setReviews] = useState<FeedbackReview[]>([]);
  const [connectionMessage, setConnectionMessage] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [honeypot, setHoneypot] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    const firebase = getFirebaseClient();
    if (!firebase) {
      setConnection("unconfigured");
      setConnectionMessage("Feedback is temporarily unavailable. Please check back soon.");
      return;
    }
    const firebaseClient = firebase;

    let active = true;
    let unsubscribe: (() => void) | undefined;

    async function connect() {
      try {
        await signInAnonymously(firebaseClient.auth);
        if (!active) return;

        setFirestore(firebaseClient.db);
        unsubscribe = onSnapshot(
          query(collection(firebaseClient.db, "reviews"), orderBy("createdAt", "desc")),
          (snapshot) => {
            const nextReviews = snapshot.docs.flatMap((reviewDoc) => {
              const data = reviewDoc.data();
              if (
                typeof data.name !== "string" ||
                typeof data.message !== "string" ||
                typeof data.rating !== "number" ||
                !Number.isInteger(data.rating) ||
                data.rating < 1 ||
                data.rating > 5
              ) {
                return [];
              }

              return [{
                id: reviewDoc.id,
                name: data.name,
                rating: data.rating,
                message: data.message,
                createdAt: data.createdAt?.toDate?.() ?? null,
              }];
            });
            setReviews(nextReviews);
            setConnection("ready");
          },
          (error) => {
            console.error("Could not load customer reviews.", error);
            setConnection("error");
            setConnectionMessage("We couldn’t load reviews right now. Please try again later.");
          },
        );
      } catch (error) {
        console.error("Could not connect to customer feedback.", error);
        if (active) {
          setConnection("error");
          setConnectionMessage("We couldn’t connect to feedback right now. Please try again later.");
        }
      }
    }

    void connect();
    return () => {
      active = false;
      unsubscribe?.();
    };
  }, []);

  const averageRating = useMemo(() => {
    if (!reviews.length) return 0;
    return reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;
  }, [reviews]);

  async function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormMessage("");

    if (honeypot) {
      setFormMessage("We couldn’t submit your review. Please try again.");
      return;
    }

    const normalizedName = name.trim();
    const normalizedMessage = message.trim();
    if (normalizedName.length < 2 || normalizedName.length > 60) {
      setFormMessage("Please enter a name between 2 and 60 characters.");
      return;
    }
    if (rating < 1 || rating > 5) {
      setFormMessage("Choose a star rating before submitting.");
      return;
    }
    if (normalizedMessage.length < 10 || normalizedMessage.length > 1000) {
      setFormMessage("Your review should be between 10 and 1,000 characters.");
      return;
    }
    if (!firestore) {
      setFormMessage("Feedback is not connected yet. Please try again later.");
      return;
    }

    const previousSubmission = Number(window.localStorage.getItem(REVIEW_COOLDOWN_KEY) ?? 0);
    if (Date.now() - previousSubmission < REVIEW_COOLDOWN_MS) {
      setFormMessage("Please wait a moment before submitting another review.");
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(firestore, "reviews"), {
        name: normalizedName,
        rating,
        message: normalizedMessage,
        createdAt: serverTimestamp(),
      });
      window.localStorage.setItem(REVIEW_COOLDOWN_KEY, String(Date.now()));
      setName("");
      setMessage("");
      setRating(0);
      setFormMessage("Thanks for sharing your feedback!");
    } catch (error) {
      console.error("Could not submit customer review.", error);
      setFormMessage("Your review couldn’t be submitted. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <section id="feedback" className="relative overflow-hidden border-b border-white/10 bg-[#06080e] py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-36 top-24 h-96 w-96 rounded-full bg-[#00C8FF]/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-36 bottom-0 h-96 w-96 rounded-full bg-[#10B981]/[0.06] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="badge-glow mb-4">THE CLIENT EXPERIENCE</span>
          <h2 className="text-3xl font-display font-extrabold tracking-tight text-white sm:text-5xl">
            Real feedback. <span className="bg-gradient-to-r from-[#00C8FF] to-[#10B981] bg-clip-text text-transparent">Real growth.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Every partnership is built on trust and measurable outcomes. Share your experience or see what clients say about working with DiG Shine.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-9">
            <div className="flex flex-wrap items-end justify-between gap-5 border-b border-white/10 pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">Client satisfaction</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="font-display text-5xl font-bold text-white">
                    {reviews.length ? averageRating.toFixed(1) : "—"}
                  </span>
                  <div>
                    <StarRating value={Math.round(averageRating)} />
                    <p className="mt-1 text-xs text-slate-300">
                      {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#10B981]/25 bg-[#10B981]/[0.08] px-3 py-1.5 text-xs text-[#6ee7b7]">
                <span className={`h-1.5 w-1.5 rounded-full ${connection === "ready" ? "animate-pulse bg-[#10B981]" : "bg-white/35"}`} />
                {connection === "ready" ? "Live updates" : connection === "loading" ? "Connecting" : "Updates paused"}
              </div>
            </div>

            <div id="all-feedback" className="scroll-mt-24 pt-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="font-display text-lg font-bold text-white">Customer reviews</h3>
                {reviews.length > 3 && (
                  <button
                    type="button"
                    onClick={() => setShowAllReviews((show) => !show)}
                    className="text-xs font-semibold text-[#00C8FF] transition-colors hover:text-[#10B981] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
                    aria-expanded={showAllReviews}
                    aria-controls="feedback-review-list"
                  >
                    {showAllReviews ? "Show recent" : `See all ${reviews.length} reviews`}
                  </button>
                )}
              </div>

              {connectionMessage && (
                <p className="mb-4 flex items-center gap-2 text-sm text-amber-200" role="status">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {connectionMessage}
                </p>
              )}

              <div id="feedback-review-list" className="space-y-3">
                {visibleReviews.map((review) => (
                  <article key={review.id} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#00C8FF]/20 bg-gradient-to-br from-[#00C8FF]/15 to-[#10B981]/10 font-display font-bold text-[#9be9ff]">
                          {review.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <h4 className="truncate text-sm font-bold text-white">{review.name}</h4>
                          <p className="text-xs text-slate-300">{formatReviewDate(review.createdAt)}</p>
                        </div>
                      </div>
                      <StarRating value={review.rating} />
                    </div>
                    <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-300">{review.message}</p>
                  </article>
                ))}

                {!reviews.length && connection === "ready" && (
                  <div className="rounded-2xl border border-dashed border-white/10 px-5 py-10 text-center">
                    <Star className="mx-auto h-6 w-6 text-[#00C8FF]" />
                    <p className="mt-3 text-sm font-semibold text-white">Be the first to share your experience.</p>
                    <p className="mt-1 text-xs text-slate-300">Your feedback helps us build better growth systems.</p>
                  </div>
                )}

                {!reviews.length && connection === "loading" && (
                  <div className="flex items-center justify-center gap-2 py-10 text-sm text-slate-300">
                    <LoaderCircle className="h-4 w-4 animate-spin" /> Loading reviews
                  </div>
                )}
              </div>
            </div>
          </div>

          <form onSubmit={submitReview} className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-9" noValidate>
            <div className="mb-7">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00C8FF]">Your voice matters</span>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">Share your experience</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Tell us how we did. Your review goes live as soon as it’s submitted.</p>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="feedback-name" className="mb-2 block text-sm font-semibold text-slate-200">Your name</label>
                <input
                  id="feedback-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  minLength={2}
                  maxLength={60}
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#080d18]/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-300/60 focus:border-[#00C8FF]/60 focus:ring-2 focus:ring-[#00C8FF]/15"
                  placeholder="How should we address you?"
                />
              </div>

              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-slate-200">Your rating</legend>
                <StarRating value={rating} onChange={setRating} label="Choose a rating from 1 to 5 stars" />
                <span className="sr-only" aria-live="polite">{rating ? `${rating} out of 5 stars selected` : "No rating selected"}</span>
              </fieldset>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label htmlFor="feedback-message" className="text-sm font-semibold text-slate-200">Your review</label>
                  <span className="text-xs text-slate-300">{message.length}/1,000</span>
                </div>
                <textarea
                  id="feedback-message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  minLength={10}
                  maxLength={1000}
                  rows={5}
                  required
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#080d18]/80 px-4 py-3 text-sm leading-relaxed text-white outline-none transition placeholder:text-slate-300/60 focus:border-[#00C8FF]/60 focus:ring-2 focus:ring-[#00C8FF]/15"
                  placeholder="What stood out about working with us?"
                />
              </div>

              <div aria-hidden="true" className="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
                <label htmlFor="feedback-website">Leave this field empty</label>
                <input
                  id="feedback-website"
                  name="website"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
            </div>

            {formMessage && (
              <p
                className={`mt-4 flex items-center gap-2 text-sm ${formMessage.startsWith("Thanks") ? "text-[#6ee7b7]" : "text-amber-200"}`}
                role="status"
              >
                {formMessage.startsWith("Thanks") ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
                {formMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting || connection === "loading" || connection === "unconfigured" || connection === "error"}
              className="btn-primary mt-6 w-full !py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:transform-none"
            >
              {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {isSubmitting ? "Submitting review" : "Submit your review"}
            </button>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-[#10B981]" />
              Protected submission · Please leave one review at a time
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
