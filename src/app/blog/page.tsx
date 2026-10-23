import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/cms";
import { ArrowUpRight, Clock, User, Sparkles, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Strategy | AI, GEO & Revenue Engineering Dispatch",
  description:
    "Explore cutting-edge frameworks on Generative Engine Optimization (GEO), autonomous AI agents with n8n, and $50k+ agency design architecture.",
};

export default function BlogPage() {
  const featured = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0]!;
  const restPosts = BLOG_POSTS.filter((p) => p.id !== featured.id);

  return (
    <div className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="badge-glow mb-4">EXECUTIVE DISPATCH</span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Insights on AI, GEO &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] via-[#00F0FF] to-[#10B981]">
              Autonomous Growth Systems
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-6 leading-relaxed">
            Deep-dive operational playbooks written by practitioners. No fluff, no regurgitated theory—only battle-tested methodologies.
          </p>
        </div>

        {/* Featured Article */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#00C8FF]/30 shadow-glow-card mb-16 relative overflow-hidden group">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-[#00C8FF] px-3 py-1 rounded-full bg-[#00C8FF]/10 border border-[#00C8FF]/20">
                  {featured.category}
                </span>
                <span className="text-xs text-[#94A3B8] flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                </span>
                <span className="text-xs text-[#64748B]">•</span>
                <span className="text-xs text-[#94A3B8] font-mono">{featured.date}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white group-hover:text-[#00C8FF] transition-colors leading-tight mb-4">
                {featured.title}
              </h2>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6 max-w-2xl">
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00C8FF] to-[#007BFF] flex items-center justify-center text-white font-bold text-xs">
                  {featured.author.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{featured.author.name}</h4>
                  <p className="text-[11px] text-[#94A3B8]">{featured.author.role}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <Link
                href={`/blog/${featured.slug}`}
                className="btn-primary !py-4 !px-8 text-xs uppercase tracking-wider flex items-center gap-2 group/btn"
              >
                <span>Read Full Analysis</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {restPosts.map((post) => (
            <div
              key={post.id}
              className="glass-card rounded-3xl p-7 border border-white/10 hover:border-[#00C8FF]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#00C8FF] px-2.5 py-1 rounded-lg bg-[#00C8FF]/10">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#94A3B8] font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#00C8FF] transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10 mb-4">
                  <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                    {post.author.avatar}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">{post.author.name}</h4>
                    <p className="text-[10px] text-[#94A3B8]">{post.date}</p>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-[#00C8FF] hover:underline flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
