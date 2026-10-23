import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/cms";
import { ArrowLeft, Clock, ArrowUpRight, Share2, Sparkles } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | DiG Shine Insights`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#00C8FF] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ALL DISPATCHES</span>
        </Link>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge-glow">{post.category}</span>
            <span className="text-xs text-[#94A3B8] font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="text-xs text-[#64748B]">•</span>
            <span className="text-xs text-[#94A3B8] font-mono">{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Author Block */}
          <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C8FF] to-[#007BFF] flex items-center justify-center text-white font-bold text-sm">
              {post.author.avatar}
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">{post.author.name}</h3>
              <p className="text-xs text-[#00C8FF] font-mono">{post.author.role} · DiG Shine</p>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 space-y-6 text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-12">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </article>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-16">
          <span className="text-xs font-mono text-[#64748B] mr-2">TOPICS:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#94A3B8]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="glass-card rounded-3xl p-10 text-center border border-[#00C8FF]/30 shadow-glow-card">
          <h3 className="text-2xl font-bold text-white mb-2">
            Implement These Systems Inside Your Company
          </h3>
          <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
            Book a complimentary strategy consultation with Karan Verma &amp; Manoj to evaluate your architecture.
          </p>
          <Link href="/contact" className="btn-primary !py-3.5 !px-8 text-xs uppercase tracking-wider">
            Schedule Strategy Call
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
