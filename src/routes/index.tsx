import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Shield,
  ScrollText,
  TrendingDown,
  Gavel,
  ArrowRight,
  Check,
  Menu,
  X,
  Building2,
  Factory,
  Truck,
  Utensils,
  Wrench,
  ShoppingBag,
  Mail,
  Phone,
  MapPin,
  Quote,
  Plus,
  Minus,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import heroSkyline from "@/assets/hero-skyline.jpg";
import logoHero from "@/assets/sa-tax-logo-hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SA Tax Consulting LLC — Texas Sales Tax Audit Defense & Advisory" },
      {
        name: "description",
        content:
          "Former Texas Comptroller auditors defending businesses in sales tax audits, appeals, compliance reviews, and liability reduction across Texas.",
      },
      {
        property: "og:title",
        content: "SA Tax Consulting LLC — Texas Sales Tax Audit Defense & Advisory",
      },
      {
        property: "og:description",
        content:
          "Former Texas Comptroller auditors defending businesses in sales tax audits, appeals, compliance reviews, and liability reduction across Texas.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

/* ---------------------- Reveal on scroll ---------------------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ---------------------- NAV ---------------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/70"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex flex-col leading-tight min-w-0">
          <span className={`font-display text-[15px] md:text-base truncate transition-colors ${scrolled ? "text-ink" : "text-white"}`}>
            SA Tax Consulting
          </span>
          <span className={`text-[10px] tracking-[0.18em] uppercase transition-colors ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
            Texas Sales Tax Advisors
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink/80 hover:text-brand-blue transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand-blue after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-sm bg-navy px-4 py-2.5 text-sm text-primary-foreground hover:bg-navy-deep transition-colors"
          >
            Request consultation
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-sm border border-border"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x flex flex-col py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-ink border-b border-border/60 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-navy px-4 py-3 text-sm text-primary-foreground"
            >
              Request consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------------- HERO ---------------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-navy-deep">
      <img
        src={heroSkyline}
        alt="Texas skyline at dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.15_0.055_258/0.85)] via-[oklch(0.19_0.055_258/0.75)] to-[oklch(0.13_0.05_258/0.95)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.5_0.17_255/0.25),transparent_60%)]" />

      <Nav />

      <div className="container-x relative z-10 flex min-h-screen flex-col justify-center pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="reveal mb-10">
            <img
              src={logoHero}
              alt="SA Tax Consultants LLC — Alamo shield emblem"
              width={900}
              height={900}
              className="mx-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[520px] h-auto drop-shadow-[0_20px_60px_rgba(96,165,250,0.25)]"
            />
          </div>

          <div className="reveal reveal-delay-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-light animate-pulse" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/80">
              Led by former Texas Comptroller auditors
            </span>
          </div>

          <h1 className="reveal reveal-delay-2 mt-8 text-[42px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px] text-white">
            Texas sales tax,
            <br />
            <span className="italic text-gradient-blue">defended with precision.</span>
          </h1>

          <p className="reveal reveal-delay-3 mt-8 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
            SA Tax Consulting represents Texas businesses through audits, appeals, and compliance
            reviews. Our team of former Comptroller sales tax auditors and supervisors knows the
            process from the inside — and we use that experience to reduce your liability and
            protect your operations.
          </p>
        </div>

        <div className="max-w-3xl">

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-sm bg-white px-6 py-3.5 text-sm font-medium text-navy-deep hover:bg-brand-blue-light transition-colors"
            >
              Schedule a confidential review
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-2 py-3.5 text-sm text-white/90 hover:text-white transition-colors border-b border-white/30 hover:border-white"
            >
              Explore our practice
            </a>
          </div>

          <div className="reveal reveal-delay-4 mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 border-t border-white/10 pt-10 max-w-3xl">
            {[
              { k: "40+", v: "Years combined Comptroller experience" },
              { k: "$50M+", v: "Client liability reduced" },
              { k: "500+", v: "Audits defended" },
              { k: "Texas", v: "Statewide representation" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl md:text-4xl text-white">{s.k}</div>
                <div className="mt-2 text-xs md:text-[13px] text-white/60 leading-snug">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}

/* ---------------------- SECTION HEADER ---------------------- */
function SectionEyebrow({ number, label }: { number: string; label: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="flex items-center gap-4 mb-6">
      <span className="font-display text-xl text-brand-blue">{number}</span>
      <span className="h-px flex-1 max-w-16 bg-border" />
      <span className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

/* ---------------------- SERVICES ---------------------- */
const services = [
  {
    icon: Shield,
    title: "Audit Defense",
    desc: "End-to-end representation from opening conference through final assessment. We manage records, negotiate sampling methodology, and challenge findings on the merits.",
    points: ["Records management", "Sampling negotiation", "Assessment review"],
  },
  {
    icon: TrendingDown,
    title: "Liability Reduction",
    desc: "Deep review of proposed assessments to identify overstated tax, misclassified transactions, and applicable exemptions that reduce your final liability.",
    points: ["Transaction review", "Exemption analysis", "Refund identification"],
  },
  {
    icon: ScrollText,
    title: "Compliance Reviews",
    desc: "Proactive review of your systems, records, and taxability decisions before the state ever knocks. Identify exposure and fix it on your terms.",
    points: ["Nexus analysis", "Taxability matrix", "Process remediation"],
  },
  {
    icon: Gavel,
    title: "Administrative Appeals",
    desc: "Redetermination hearings, statement of grounds preparation, and negotiation with Comptroller hearings attorneys to resolve disputes before litigation.",
    points: ["Hearings representation", "Statement of grounds", "Settlement negotiation"],
  },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-background">
      <div className="container-x">
        <SectionEyebrow number="01" label="Practice Areas" />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 lg:gap-24 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              A full-spectrum sales tax practice, built for Texas.
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every engagement is led by professionals who have sat on the auditor's side of the
              table. That perspective shapes how we prepare records, frame arguments, and resolve
              disputes — quietly, and in your favor.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <ServiceCard key={s.title} service={s} index={i} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  Icon,
}: {
  service: (typeof services)[number];
  index: number;
  Icon: (typeof services)[number]["icon"];
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group relative bg-background p-8 md:p-12 transition-colors hover:bg-surface-alt reveal-delay-${(index % 4) + 1}`}
    >
      <div className="flex items-start justify-between mb-8">
        <div className="grid h-14 w-14 place-items-center rounded-sm border border-border bg-surface-alt group-hover:bg-navy group-hover:border-navy transition-colors">
          <Icon className="h-6 w-6 text-navy group-hover:text-primary-foreground transition-colors" />
        </div>
        <span className="font-display text-xl text-muted-foreground/50">
          0{index + 1}
        </span>
      </div>
      <h3 className="text-2xl md:text-[28px] text-ink mb-4">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
      <ul className="space-y-2">
        {service.points.map((p) => (
          <li key={p} className="flex items-center gap-3 text-sm text-ink/80">
            <Check className="h-4 w-4 text-brand-blue shrink-0" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------------- ABOUT ---------------------- */
function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24 md:py-36 bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.5_0.17_255/0.15),transparent_60%)]" />
      <div className="container-x relative">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-16 lg:gap-24 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-xl text-brand-blue-light">02</span>
              <span className="h-px flex-1 max-w-16 bg-white/20" />
              <span className="text-[11px] tracking-[0.24em] uppercase text-white/60">
                Our Firm
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Former state auditors.
              <br />
              <span className="italic text-gradient-blue">Now on your side.</span>
            </h2>
          </div>
          <div className="space-y-6 text-white/75 leading-relaxed text-lg">
            <p>
              SA Tax Consulting was founded by veterans of the Texas Comptroller of Public
              Accounts — sales tax auditors and supervisors who spent decades enforcing the
              statute they now help clients navigate.
            </p>
            <p>
              We understand how audits are selected, how sampling is constructed, how
              assessments are calculated, and where the state's arguments are strongest — and
              weakest. That institutional knowledge is the foundation of every engagement.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              {[
                { k: "Confidential", v: "Every engagement, protected." },
                { k: "Contingency", v: "Fee structures available." },
                { k: "Statewide", v: "All 254 Texas counties." },
                { k: "Responsive", v: "Direct partner access." },
              ].map((b) => (
                <div key={b.k}>
                  <div className="text-sm font-medium text-white">{b.k}</div>
                  <div className="text-sm text-white/60 mt-1">{b.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- INDUSTRIES ---------------------- */
const industries = [
  { icon: Building2, name: "Construction & Contractors" },
  { icon: Factory, name: "Manufacturing & Fabrication" },
  { icon: Truck, name: "Transportation & Logistics" },
  { icon: Utensils, name: "Restaurants & Hospitality" },
  { icon: Wrench, name: "Oilfield & Energy Services" },
  { icon: ShoppingBag, name: "Retail & E-Commerce" },
];

function Industries() {
  return (
    <section id="industries" className="py-24 md:py-36 bg-background">
      <div className="container-x">
        <SectionEyebrow number="03" label="Industries Served" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Sector-specific expertise across the Texas economy.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed self-end">
            Sales tax exposure is industry-specific. We bring focused expertise to the sectors
            most frequently audited by the Comptroller.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.name} name={ind.name} Icon={ind.icon} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({
  name,
  Icon,
  index,
}: {
  name: string;
  Icon: (typeof industries)[number]["icon"];
  index: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="group relative bg-background p-8 md:p-10 min-h-[180px] flex flex-col justify-between transition-all hover:bg-navy-deep cursor-default"
    >
      <Icon className="h-8 w-8 text-brand-blue group-hover:text-brand-blue-light transition-colors" />
      <div className="flex items-end justify-between mt-8">
        <h3 className="text-xl md:text-2xl text-ink group-hover:text-white transition-colors max-w-[70%]">
          {name}
        </h3>
        <span className="font-display text-sm text-muted-foreground group-hover:text-white/50 transition-colors">
          0{index + 1}
        </span>
      </div>
    </div>
  );
}

/* ---------------------- TESTIMONIALS ---------------------- */
const testimonials = [
  {
    quote:
      "They reduced our proposed assessment by more than 70%. The team's understanding of Comptroller sampling methodology was the difference.",
    author: "CFO",
    company: "Texas manufacturing group",
  },
  {
    quote:
      "SA Tax Consulting managed the entire audit while we ran the business. Professional, discreet, and exceptionally effective.",
    author: "Owner",
    company: "Multi-location restaurant operator",
  },
  {
    quote:
      "Their pre-audit compliance review saved us from a seven-figure exposure. Best money we've ever spent on tax advisory.",
    author: "Controller",
    company: "Oilfield services company",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-36 bg-surface-alt">
      <div className="container-x">
        <SectionEyebrow number="04" label="Client Voices" />
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-12 lg:gap-24 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl text-ink leading-[1.05]">
              Trusted by Texas businesses under pressure.
            </h2>
            <div className="mt-10 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-1 transition-all ${
                    active === i ? "w-12 bg-navy" : "w-6 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="relative min-h-[280px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  active === i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
              >
                <Quote className="h-10 w-10 text-brand-blue/40 mb-6" />
                <p className="font-display text-2xl md:text-3xl lg:text-4xl text-ink leading-[1.25]">
                  "{t.quote}"
                </p>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-sm font-medium text-ink">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- FAQ ---------------------- */
const faqs = [
  {
    q: "When should I contact a sales tax consultant?",
    a: "The best time is before an audit begins — a proactive compliance review can identify and remediate exposure on your terms. If you've already received an audit notice, contact us immediately so we can attend the opening conference and manage records requests from day one.",
  },
  {
    q: "How is your firm different from a CPA or tax attorney?",
    a: "Our team has worked inside the Texas Comptroller of Public Accounts as sales tax auditors and supervisors. Sales tax is our sole focus — not one service line among many. That specialization, combined with insider procedural knowledge, produces materially different outcomes.",
  },
  {
    q: "Do you handle audits statewide?",
    a: "Yes. We represent clients across all 254 Texas counties, including audits managed out of Austin, Houston, Dallas, San Antonio, and Comptroller field offices statewide.",
  },
  {
    q: "What does an engagement typically cost?",
    a: "Fee structures depend on the engagement. We offer hourly, fixed-fee, and contingency arrangements. Initial consultations are complimentary and fully confidential.",
  },
  {
    q: "Can you help after an assessment has been issued?",
    a: "Absolutely. We routinely file requests for redetermination, prepare statements of grounds, and represent clients through the Comptroller's administrative hearings process — up to and including settlement negotiations with hearings attorneys.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-36 bg-background">
      <div className="container-x">
        <SectionEyebrow number="05" label="Frequently Asked" />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-12 lg:gap-24">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Answers before you need them.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Common questions from business owners, CFOs, and controllers facing a Texas sales
              tax matter.
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="border-t border-border"
          >
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border group"
              >
                <AccordionTrigger className="py-6 text-left hover:no-underline [&>svg]:hidden">
                  <span className="flex items-start gap-6 w-full">
                    <span className="font-display text-sm text-brand-blue mt-1.5 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-lg md:text-xl text-ink flex-1">{f.q}</span>
                    <span className="shrink-0 mt-1 grid h-8 w-8 place-items-center rounded-full border border-border group-data-[state=open]:bg-navy group-data-[state=open]:border-navy transition-colors">
                      <Plus className="h-4 w-4 group-data-[state=open]:hidden" />
                      <Minus className="h-4 w-4 hidden group-data-[state=open]:block text-primary-foreground" />
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-10 pr-14 text-muted-foreground leading-relaxed text-[15px]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- CONTACT ---------------------- */
function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const ref = useReveal<HTMLDivElement>();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    (e.currentTarget as HTMLFormElement).reset();
    toast.success("Message received", {
      description: "A partner will contact you within one business day.",
    });
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.5_0.17_255/0.2),transparent_60%)]" />
      <div className="container-x relative">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-16 lg:gap-24">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-xl text-brand-blue-light">06</span>
              <span className="h-px flex-1 max-w-16 bg-white/20" />
              <span className="text-[11px] tracking-[0.24em] uppercase text-white/60">
                Request Consultation
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Start with a confidential conversation.
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed max-w-md">
              Every inquiry is reviewed by a partner. All communications are protected and
              privileged.
            </p>

            <div className="mt-12 space-y-6 border-t border-white/10 pt-10">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-brand-blue-light mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">Email</div>
                  <a href="mailto:info@sataxconsulting.com" className="text-white hover:text-brand-blue-light transition-colors">
                    info@sataxconsulting.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-brand-blue-light mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">Phone</div>
                  <a href="tel:+15125550100" className="text-white hover:text-brand-blue-light transition-colors">
                    (512) 555-0100
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-brand-blue-light mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">Office</div>
                  <div className="text-white">Austin, Texas · Statewide representation</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-sm p-6 md:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Full name" name="name" required />
              <Field label="Company" name="company" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
                Matter type
              </label>
              <select
                name="matter"
                required
                defaultValue=""
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-brand-blue-light transition-colors [&>option]:bg-navy-deep [&>option]:text-white"
              >
                <option value="" disabled>Select a practice area…</option>
                <option>Active audit defense</option>
                <option>Administrative appeal / hearing</option>
                <option>Compliance review</option>
                <option>Refund analysis</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
                Brief description
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-blue-light transition-colors resize-none"
                placeholder="Tell us about your situation…"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-3 rounded-sm bg-white px-6 py-4 text-sm font-medium text-navy-deep hover:bg-brand-blue-light transition-colors disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send confidential inquiry"}
              {!submitting && <ArrowRight className="h-4 w-4" />}
            </button>
            <p className="text-xs text-white/50 text-center">
              Your information is kept strictly confidential.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
        {label}
        {required && <span className="text-brand-blue-light"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-brand-blue-light transition-colors"
      />
    </div>
  );
}

/* ---------------------- FOOTER ---------------------- */
function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 sm:flex sm:justify-between">
        <div className="text-sm text-muted-foreground truncate">
          © {new Date().getFullYear()} SA Tax Consulting LLC · All rights reserved.
        </div>
        <div className="text-xs text-muted-foreground tracking-wider uppercase shrink-0">
          Austin · Texas
        </div>
      </div>
    </footer>
  );
}

/* ---------------------- PAGE ---------------------- */
function Landing() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Services />
      <About />
      <Industries />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <Toaster position="top-center" />
    </main>
  );
}
