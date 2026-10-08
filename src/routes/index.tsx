import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Command, Layers3, Menu, Network, Orbit, Search, Sparkles, Workflow, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import copilotImage from "@/assets/support-copilot.jpg";
import pipelineImage from "@/assets/growth-pipeline.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DiG Shine — Automate · Innovate · Elevate" },
      { name: "description", content: "DiG Shine helps ambitious businesses grow with intelligent automation, AI solutions, digital marketing, SEO, and performance strategy." },
      { property: "og:title", content: "DiG Shine — Automate · Innovate · Elevate" },
      { property: "og:description", content: "AI, automation and digital growth systems built around your business." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Orbit, number: "01", title: "AI services", text: "Useful AI, grounded in your business. From customer-facing assistants to custom models and knowledge systems.", tags: ["AI assistants", "Chatbots", "RAG systems", "LLM integration"] },
  { icon: Workflow, number: "02", title: "Automation & workflows", text: "Give repetitive work a reliable path. Connect your tools, teams, and data with thoughtful automation.", tags: ["CRM automation", "AI agents", "n8n · Make · Zapier", "Business workflows"] },
  { icon: Network, number: "03", title: "Performance marketing", text: "Reach the right people and improve what happens next, across paid media, creative, and conversion.", tags: ["Google & Meta Ads", "Paid social", "Lead generation", "CRO"] },
  { icon: Search, number: "04", title: "SEO · AEO · GEO", text: "Make your business easier to find in search, answers, and the next generation of AI discovery.", tags: ["Technical SEO", "Local SEO", "Answer engines", "AI search"] },
  { icon: Layers3, number: "05", title: "Brand & growth", text: "Build a clear position in the market, then turn that clarity into a lasting customer relationship.", tags: ["Brand strategy", "Identity", "Content", "Retention"] },
  { icon: Command, number: "06", title: "Data & analytics", text: "Know what is moving the business. Unite your signals into reporting your team can act on.", tags: ["Dashboards", "Attribution", "Customer journey", "Growth planning"] },
];
const process = [
  ["01", "Discovery", "Get close to your goals, current tools, and the work that matters."],
  ["02", "Strategy", "Find the best opportunities and map a clear path from here to there."],
  ["03", "Execution", "Build and launch with your team, one focused milestone at a time."],
  ["04", "Optimization", "Learn from real performance and improve the whole system."],
  ["05", "Automation", "Make repeatable wins run smoothly, with the right human checks."],
  ["06", "Scale", "Extend what works into the next channel, workflow, or market."],
];
const faqItems = [
  ["What can DiG Shine help us with?", "We work across AI solutions, business automation, digital marketing, paid acquisition, SEO, analytics, and brand growth. The right starting point depends on your goals and current setup."],
  ["How do you choose what to work on first?", "We begin with your business priorities and identify the highest-value opportunity, considering its likely impact, effort, and fit with your existing tools."],
  ["Do we need to replace our existing software?", "Not necessarily. We look at what you already use and aim to connect and improve it where that makes sense."],
  ["How does pricing work?", "Scope and budget depend on the goals, channels, and complexity involved. Share a little about your project and we can discuss a suitable approach."],
  ["Who will we work with?", "DiG Shine was founded by Karan Verma, with Manoj as co-founder. We’ll discuss the people and expertise needed for your project during an initial conversation."],
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState("");
  const navItems = [["Services", "services"], ["Process", "process"], ["Work", "work"], ["About", "about"], ["FAQ", "faq"]];

  function submitLead(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setFormError("Please complete your name, email, and project details.");
      return;
    }
    const subject = encodeURIComponent(`Consultation request from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${String(data.get("company") ?? "Not provided")}\n\nProject details:\n${message}`);
    setFormError("");
    setFormSent(true);
    window.location.href = `mailto:hello@digshine.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="site-shell min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-nav sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 md:px-10">
          <a href="#home" aria-label="DiG Shine home" className="brand-lockup flex items-center gap-3">
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span className="text-[17px] font-semibold">DiG Shine</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
          </nav>
          <Button asChild variant="brand" size="default" className="hidden md:inline-flex"><a href="#contact">Book a free call <ArrowUpRight aria-hidden="true" /></a></Button>
          <Button type="button" variant="outline" size="icon" className="md:hidden" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="mobile-nav grid gap-1 border-t border-border px-5 py-4 md:hidden" aria-label="Mobile navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight aria-hidden="true" /></a>)}<a href="#contact" onClick={() => setMenuOpen(false)}>Book a free call<ArrowUpRight aria-hidden="true" /></a></nav>}
      </header>

      <section id="home" className="hero-section relative border-b border-border">
        <div className="hero-aura hero-aura-blue" aria-hidden="true" /><div className="hero-aura hero-aura-green" aria-hidden="true" />
        <div className="hero-inner relative mx-auto max-w-[1280px] px-5 pb-14 pt-16 md:px-10 md:pb-20 md:pt-24">
          <div className="hero-copy mx-auto max-w-[850px] text-center">
            <div className="eyebrow inline-flex items-center gap-2"><span className="status-dot" /> AI · AUTOMATION · DIGITAL GROWTH</div>
            <h1 className="hero-title mt-7">Automate. Innovate.<br /><span>Elevate.</span></h1>
            <p className="hero-description mx-auto mt-6 max-w-[650px]">Scale your business with AI, automation, and performance marketing. We build growth systems that bring the right tools and strategy together.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="brand" size="lg"><a href="#contact">Book free consultation <ArrowUpRight aria-hidden="true" /></a></Button>
              <Button asChild variant="quiet" size="lg"><a href="#services">Explore services <ArrowDownRight aria-hidden="true" /></a></Button>
            </div>
          </div>
          <div className="hero-system glass-panel mx-auto mt-14 max-w-[1000px]" aria-label="Connected growth system visualization">
            <div className="system-topline"><span className="system-label"><span className="status-dot" /> THE GROWTH SYSTEM</span><span className="system-index">DS / 001</span></div>
            <div className="system-flow">
              <div className="system-origin"><span className="flow-icon"><Search /></span><div><span>Discover</span><small>Find your audience</small></div></div>
              <span className="system-connector" aria-hidden="true" />
              <div className="system-node"><span className="flow-icon"><Sparkles /></span><div><span>Engage</span><small>Earn attention</small></div></div>
              <span className="system-connector" aria-hidden="true" />
              <div className="system-node"><span className="flow-icon"><Workflow /></span><div><span>Automate</span><small>Connect the work</small></div></div>
              <span className="system-connector" aria-hidden="true" />
              <div className="system-destination"><span className="flow-icon"><ArrowUpRight /></span><div><span>Grow</span><small>Keep momentum</small></div></div>
            </div>
            <div className="system-bottom"><span>AI-POWERED WORKFLOWS</span><span className="system-pulse"><i /> SYSTEMS THAT MOVE WITH YOU</span><span>BUILT FOR WHAT’S NEXT</span></div>
          </div>
          <div className="capability-rail mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {[["01", "AI solutions"], ["02", "Automation"], ["03", "Paid growth"], ["04", "SEO · AEO · GEO"], ["05", "Brand strategy"], ["06", "Analytics"]].map(([n, label]) => <div className="capability-item glass-panel" key={n}><span>{n}</span><p>{label}</p><ArrowUpRight aria-hidden="true" /></div>)}
          </div>
        </div>
      </section>

      <section id="services" className="section-band border-b border-border">
        <div className="section-wrap mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-28">
          <div className="section-heading flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="section-kicker">What we do <span>— 01 / 06</span></p><h2 className="section-title">Growth, built <span>from every angle.</span></h2></div><p className="section-intro">One team for the strategy, technology, and acquisition systems that help your business move forward.</p></div>
          <div className="services-grid mt-11 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, number, title, text, tags }) => <article className="service-card glass-panel" key={number}><div className="service-top"><span className="service-icon"><Icon aria-hidden="true" /></span><span className="service-number">{number}</span></div><h3>{title}</h3><p className="service-description">{text}</p><div className="service-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="service-link" href="#contact">Explore this service <ArrowUpRight aria-hidden="true" /></a></article>)}
          </div>
        </div>
      </section>

      <section id="about" className="proof-band border-b border-border">
        <div className="proof-inner mx-auto grid max-w-[1280px] gap-12 px-5 py-16 md:grid-cols-[.9fr_1.1fr] md:items-center md:px-10 md:py-20">
          <div><p className="section-kicker">Why DiG Shine <span>— OUR APPROACH</span></p><h2 className="section-title">Clarity first.<br /><span>Progress you can see.</span></h2><p className="section-intro mt-5">No off-the-shelf playbook. We bring strategy, implementation, and iteration into one practical partnership.</p></div>
          <div className="principles-grid"><div className="principle"><span>01</span><h3>Strategy with purpose</h3><p>Focus on the business outcome before choosing the tool.</p></div><div className="principle"><span>02</span><h3>Built around your team</h3><p>Practical systems that fit the people and processes you have.</p></div><div className="principle"><span>03</span><h3>Always improving</h3><p>Measure what matters and keep improving the work.</p></div><div className="principle"><span>04</span><h3>Ready for what’s next</h3><p>Build a strong foundation that can grow with the business.</p></div></div>
        </div>
      </section>

      <section id="process" className="section-band section-alt border-b border-border">
        <div className="section-wrap mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-28">
          <div className="section-heading"><div><p className="section-kicker">A clear way forward <span>— 02 / 06</span></p><h2 className="section-title">From first question<br />to <span>next-level growth.</span></h2></div><p className="section-intro mt-5">A considered process keeps every step connected to the outcome—and leaves room to learn along the way.</p></div>
          <ol className="process-grid mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">{process.map(([number, title, text]) => <li className="process-item" key={number}><span className="process-number">{number}<i /></span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
        </div>
      </section>

      <section id="work" className="section-band border-b border-border">
        <div className="section-wrap mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-28">
          <div className="section-heading flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="section-kicker">Ideas in action <span>— 03 / 06</span></p><h2 className="section-title">Systems that make<br /><span>good work go further.</span></h2></div><p className="section-intro">A glimpse of the kinds of systems that bring AI, automation, and growth together.</p></div>
          <div className="work-grid mt-11 grid gap-4 md:grid-cols-2">
            <article className="work-card glass-panel"><div className="work-image"><img src={copilotImage} alt="AI assistant connected to customer support and analytics tools" loading="lazy" width={1280} height={720} /><span className="work-image-index">CONCEPT / 001</span></div><div className="work-copy"><div><span className="work-category">AI · CUSTOMER EXPERIENCE</span><h3>Support, with a smarter first response.</h3><p>A grounded assistant that helps teams answer faster and route the moments that need a human.</p></div><a href="#contact" aria-label="Discuss an AI support assistant"><ArrowUpRight /></a></div></article>
            <article className="work-card glass-panel"><div className="work-image"><img src={pipelineImage} alt="Connected marketing, CRM, messaging and analytics growth workflow" loading="lazy" width={1280} height={720} /><span className="work-image-index">CONCEPT / 002</span></div><div className="work-copy"><div><span className="work-category">GROWTH · AUTOMATION</span><h3>From first signal to next step.</h3><p>A connected flow for lead capture, follow-up, measurement, and the next meaningful conversation.</p></div><a href="#contact" aria-label="Discuss a connected growth workflow"><ArrowUpRight /></a></div></article>
          </div>
          <p className="concept-note">Illustrative concepts, not client case studies or performance claims.</p>
        </div>
      </section>

      <section id="engagement" className="section-band section-alt border-b border-border">
        <div className="section-wrap mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-24">
          <div className="section-heading flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="section-kicker">Ways to partner <span>— 04 / 06</span></p><h2 className="section-title">Flexible by design.</h2></div><p className="section-intro">A partnership shaped around your goals, your team, and the work ahead. Project scope and pricing are discussed together.</p></div>
          <div className="engagement-grid mt-10 grid gap-3 lg:grid-cols-3">{[["01", "Focused sprint", "Move one important idea from opportunity to working system."], ["02", "Growth partner", "A connected team for strategy, execution, and continued progress."], ["03", "Ongoing support", "Keep improving your systems, campaigns, and customer experience."]].map(([n,title,text]) => <article className="engagement-item glass-panel" key={n}><div><span>{n} / ENGAGEMENT</span><ArrowUpRight aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p><a href="#contact">Talk through this option <ArrowRight aria-hidden="true" /></a></article>)}</div>
        </div>
      </section>

      <section id="industries" className="industry-band border-b border-border">
        <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-10"><div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><p className="section-kicker">Built for ambitious teams</p><h2 className="text-xl font-semibold">Growth opportunities cross industries.</h2></div><div className="industry-list">{["SaaS", "Healthcare", "Education", "E-commerce", "Real estate", "Finance", "Manufacturing", "Local business", "Hospitality", "Technology"].map(item => <span key={item}>{item}</span>)}</div></div></div>
      </section>

      <section id="faq" className="section-band border-b border-border">
        <div className="faq-wrap mx-auto grid max-w-[1280px] gap-10 px-5 py-20 md:grid-cols-[.8fr_1.2fr] md:px-10 md:py-28"><div><p className="section-kicker">A few useful answers <span>— 05 / 06</span></p><h2 className="section-title">Good to know<br /><span>before we begin.</span></h2><p className="section-intro mt-5">Still have a question? Send us a note and we’ll take it from there.</p><a href="#contact" className="inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary">Ask us directly <ArrowUpRight aria-hidden="true" /></a></div><div className="faq-list">{faqItems.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}<ChevronDown aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div>
      </section>

      <section id="contact" className="contact-section relative overflow-hidden">
        <div className="contact-aura" aria-hidden="true" />
        <div className="contact-inner relative mx-auto grid max-w-[1280px] gap-10 px-5 py-20 md:grid-cols-[.9fr_1.1fr] md:items-start md:px-10 md:py-28">
          <div><p className="section-kicker">Let’s talk <span>— 06 / 06</span></p><h2 className="contact-title mt-4">Make your next move <span>count.</span></h2><p className="section-intro mt-5">Tell us what you’re working towards. We’ll start with a real conversation about where AI, automation, or growth could help.</p><div className="founder-note mt-9"><span className="founder-line" /><p><strong>Karan Verma</strong><br />Founder <span className="founder-separator">·</span> <strong>Manoj</strong><br />Co-founder</p></div></div>
          <form className="contact-form glass-panel" onSubmit={submitLead}>
            {formSent ? <div className="form-success" role="status"><span><Check aria-hidden="true" /></span><h3>Your email draft is ready.</h3><p>Review the message in your email app and send it to DiG Shine to complete your request.</p></div> : <>
              <div className="form-head"><span>START A CONVERSATION</span><ArrowUpRight aria-hidden="true" /></div>
              <div className="form-fields"><label>Your name<input name="name" autoComplete="name" placeholder="Name" required /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label><label className="form-full">Company <span className="optional-label">OPTIONAL</span><input name="company" autoComplete="organization" placeholder="Company name" /></label><label className="form-full">What would you like to work on?<textarea name="message" rows={4} placeholder="A little about the opportunity or challenge..." required /></label></div>
              {formError && <p className="form-error" role="alert">{formError}</p>}
              <Button type="submit" variant="brand" size="lg" className="form-submit">Request a free consultation <ArrowUpRight aria-hidden="true" /></Button>
              <p className="form-note">Opens your email app with a message addressed to hello@digshine.com.</p>
            </>}
          </form>
        </div>
      </section>

      <footer className="site-footer border-t border-border"><div className="mx-auto max-w-[1280px] px-5 py-10 md:px-10"><div className="footer-main flex flex-col gap-8 md:flex-row md:items-center md:justify-between"><a href="#home" className="brand-lockup flex items-center gap-3"><span className="brand-mark" aria-hidden="true"><span /></span><span className="text-[17px] font-semibold">DiG Shine</span></a><p>Automate <span>·</span> Innovate <span>·</span> Elevate</p><div className="footer-links"><a href="#services">Services</a><a href="#process">Process</a><a href="#contact">Contact</a></div></div><div className="footer-bottom mt-9 flex flex-col gap-3 border-t border-border pt-5 md:flex-row md:items-center md:justify-between"><span>© 2026 DiG Shine</span><span>AI · Automation · Digital Growth</span><a href="#home">Back to top <ArrowUpRight aria-hidden="true" /></a></div></div></footer>
    </main>
  );
}
