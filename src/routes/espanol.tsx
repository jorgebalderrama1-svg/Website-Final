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
  Plus,
  Minus,
  Wine,
  Home,
  DollarSign,
  Warehouse,
  Hammer,
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

export const Route = createFileRoute("/espanol")({
  head: () => ({
    meta: [
      { title: "SA Tax & Audit Consultants LLC — Defensa y Asesoria de Impuesto sobre Ventas en Texas" },
      {
        name: "description",
        content:
          "Ex auditores de la Contraloria de Texas defendiendo a empresas en auditorias de impuesto sobre ventas, apelaciones, revisiones de cumplimiento y reduccion de responsabilidad en todo Texas.",
      },
      {
        property: "og:title",
        content: "SA Tax & Audit Consultants LLC — Defensa y Asesoria de Impuesto sobre Ventas en Texas",
      },
      {
        property: "og:description",
        content:
          "Ex auditores de la Contraloria de Texas defendiendo a empresas en auditorias de impuesto sobre ventas, apelaciones, revisiones de cumplimiento y reduccion de responsabilidad en todo Texas.",
      },
      { property: "og:url", content: "/espanol" },
    ],
    links: [{ rel: "canonical", href: "/espanol" }],
  }),
  component: SpanishLanding,
});

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
    { href: "#services", label: "Servicios" },
    { href: "#industries", label: "Industrias" },
    { href: "#about", label: "Nosotros" },
    { href: "#faq", label: "Preguntas" },
    { href: "#contact", label: "Contacto" },
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
            SA Tax & Audit Consultants LLC
          </span>
          <span className={`text-[10px] tracking-[0.18em] uppercase transition-colors ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
            Asesores de impuesto sobre ventas en Texas
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
            href="tel:+12108603614"
            aria-label="Llamar a SA Tax & Audit Consultants LLC"
            className="inline-flex items-center gap-2 rounded-sm bg-emerald-600 px-3 py-2.5 text-sm text-white hover:bg-emerald-700 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Llamar
          </a>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-sm bg-navy px-4 py-2.5 text-sm text-primary-foreground hover:bg-navy-deep transition-colors"
          >
            Solicitar consulta
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
              Solicitar consulta <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-navy-deep">
      <img
        src={heroSkyline}
        alt="Horizonte de Texas al anochecer"
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
              alt="SA Tax & Audit Consultants LLC — emblema de escudo del Alamo"
              width={900}
              height={900}
              className="mx-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[520px] h-auto drop-shadow-[0_20px_60px_rgba(96,165,250,0.25)]"
            />
          </div>

          <div className="reveal reveal-delay-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-light animate-pulse" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/80">
              Dirigido por ex auditores de la Contraloria de Texas
            </span>
          </div>

          <h1 className="reveal reveal-delay-2 mt-8 text-[42px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px] text-white">
            Impuesto sobre ventas en Texas,
            <br />
            <span className="italic text-gradient-blue">defendido con precision.</span>
          </h1>

          <p className="reveal reveal-delay-3 mt-8 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
            SA Tax & Audit Consultants LLC representa a empresas de Texas en auditorias,
            apelaciones y revisiones de cumplimiento. Nuestro equipo de ex auditores y
            supervisores de impuesto sobre ventas de la Contraloria conoce el proceso desde
            adentro, y usa esa experiencia para reducir su responsabilidad y proteger sus
            operaciones.
          </p>

          <div className="mt-4 text-white font-semibold">
            Con orgullo en San Antonio: representacion fiscal local y accesible con apoyo
            rapido en sitio para empresas de Texas. Obtenga representacion local de un equipo
            familiarizado con la comunidad y los procedimientos de auditoria de San Antonio.
          </div>
        </div>

        <div className="max-w-3xl">
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-sm bg-white px-6 py-3.5 text-sm font-medium text-navy-deep hover:bg-brand-blue-light transition-colors"
            >
              Programar una consulta inicial gratuita
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-2 py-3.5 text-sm text-white/90 hover:text-white transition-colors border-b border-white/30 hover:border-white"
            >
              Explorar nuestra practica
            </a>
          </div>

          <div className="reveal reveal-delay-4 mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 border-t border-white/10 pt-10 max-w-3xl">
            {[
              { k: "40+", v: "Anos combinados de experiencia en la Contraloria" },
              { k: "Texas", v: "Representacion en todo el estado" },
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

const services = [
  {
    icon: Shield,
    title: "Defensa de auditorias",
    desc: "Representacion integral desde la conferencia inicial hasta la determinacion final. Gestionamos documentos, negociamos la metodologia de muestreo y cuestionamos hallazgos por sus meritos.",
    points: ["Gestion de documentos", "Negociacion de muestreo", "Revision de determinaciones"],
  },
  {
    icon: TrendingDown,
    title: "Reduccion de responsabilidad",
    desc: "Revision profunda de determinaciones propuestas para identificar impuestos sobreestimados, transacciones mal clasificadas y exenciones aplicables que reduzcan su responsabilidad final.",
    points: ["Revision de transacciones", "Analisis de exenciones", "Identificacion de reembolsos"],
  },
  {
    icon: ScrollText,
    title: "Revisiones de cumplimiento",
    desc: "Revision proactiva de sus sistemas, registros y decisiones de tributacion antes de que el estado toque a su puerta. Identifique exposicion y corrjala en sus propios terminos.",
    points: ["Analisis de nexus", "Matriz de tributacion", "Remediacion de procesos"],
  },
  {
    icon: Gavel,
    title: "Apelaciones administrativas",
    desc: "Audiencias de redeterminacion, preparacion de fundamentos y negociacion con abogados de audiencias de la Contraloria para resolver disputas antes de litigio.",
    points: ["Representacion en audiencias", "Preparacion de fundamentos", "Negociacion de acuerdos"],
  },
  {
    icon: DollarSign,
    title: "Auditorias de impuesto sobre ventas",
    desc: "Defensa integral para auditorias estandar de impuesto sobre ventas en todo tipo de empresas. Hemos ayudado a cientos de negocios de Texas a navegar auditorias de la Contraloria y reducir determinaciones.",
    points: ["Representacion completa", "Defensa de posiciones fiscales", "Manejo de apelaciones"],
  },
  {
    icon: Wine,
    title: "Impuesto de bebidas mixtas",
    desc: "Auditorias y apelaciones especializadas para operaciones sujetas al impuesto sobre ingresos brutos de bebidas mixtas. Entendemos los temas unicos de nexus, clasificacion y exenciones.",
    points: ["Clasificacion de bebidas", "Defensa de ventas exentas", "Impugnacion de determinaciones"],
  },
  {
    icon: Home,
    title: "Impuesto hotelero y de hospedaje",
    desc: "Defensa para negocios de hospitalidad frente a auditorias del impuesto de ocupacion hotelera. Desde cuestiones de nexus hasta determinacion de ocupacion, protegemos sus ingresos.",
    points: ["Determinacion de ocupacion", "Analisis de exenciones", "Defensa de recaudacion"],
  },
  {
    icon: Warehouse,
    title: "Beneficios de zonas empresariales",
    desc: "Asesoria estrategica y defensa de auditoria para empresas que utilizan incentivos fiscales de Enterprise Zone. Asegure documentacion adecuada y la preservacion de beneficios.",
    points: ["Revision de certificacion", "Documentacion de beneficios", "Representacion en auditoria"],
  },
  {
    icon: ShoppingBag,
    title: "Auditorias de tiendas de conveniencia",
    desc: "Experiencia especifica para cadenas y operadores independientes. Navegamos los temas complejos de tributacion propios de ventas de combustible y mercancia.",
    points: ["Combustible vs. mercancia", "Clasificacion de empaques", "Nexus multiubicacion"],
  },
  {
    icon: Wrench,
    title: "Impuestos de servicios petroleros y gas",
    desc: "Auditorias especializadas y apoyo de cumplimiento para empresas de servicios petroleros. Atendemos preguntas particulares de clasificacion fiscal y exenciones en industrias energeticas.",
    points: ["Clasificacion de servicios", "Documentacion de exenciones", "Negociacion de auditorias"],
  },
  {
    icon: Factory,
    title: "Defensa fiscal para manufactura",
    desc: "Defensa para fabricantes frente a auditorias de impuesto sobre ventas. Desde origen de componentes hasta clasificacion de equipo, impugnamos determinaciones complejas.",
    points: ["Analisis de impuestos de insumos", "Exenciones de equipo", "Clasificacion de materiales"],
  },
  {
    icon: Hammer,
    title: "Auditorias de construccion y contratistas",
    desc: "Representacion integral para contratistas, subcontratistas y empresas de construccion. Defendemos auditorias que cuestionan clasificaciones de mano de obra, materiales y servicios.",
    points: ["Mano de obra vs. materiales", "Exenciones por reventa", "Temas de subcontratistas"],
  },
  {
    icon: TrendingDown,
    title: "Reembolsos y creditos",
    desc: "Identificacion y recuperacion proactiva de impuestos pagados en exceso mediante declaraciones enmendadas y reclamaciones de reembolso. Hemos recuperado millones para clientes.",
    points: ["Recuperacion de pagos en exceso", "Declaraciones enmendadas", "Documentacion de reembolsos"],
  },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-background">
      <div className="container-x">
        <SectionEyebrow number="01" label="Areas de practica" />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 lg:gap-24 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Una practica integral de impuesto sobre ventas, creada para Texas.
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde auditorias estandar hasta asuntos especializados en hospitalidad,
              energia, comercio minorista y construccion, cubrimos todo el espectro.
              Nuestra experiencia abarca bebidas mixtas, ocupacion hotelera, beneficios
              de zonas empresariales y recuperacion de reembolsos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {services.map((s, i) => {
            const Icon = s.icon;
            return <ServiceCard key={s.title} service={s} index={i} Icon={Icon} />;
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
                Nuestra firma
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Ex auditores estatales.
              <br />
              <span className="italic text-gradient-blue">Ahora de su lado.</span>
            </h2>
          </div>
          <div className="space-y-6 text-white/75 leading-relaxed text-lg">
            <p>
              SA Tax & Audit Consultants LLC fue fundada por veteranos de la Contraloria de
              Cuentas Publicas de Texas: auditores y supervisores de impuesto sobre ventas que
              pasaron decadas aplicando la ley que hoy ayudan a sus clientes a navegar.
            </p>
            <p>
              Entendemos como se seleccionan las auditorias, como se construyen los muestreos,
              como se calculan las determinaciones y donde los argumentos del estado son mas
              fuertes y mas debiles. Ese conocimiento institucional es la base de cada caso.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              {[
                { k: "Confidencial", v: "Cada asunto, protegido." },
                { k: "Contingencia", v: "Estructuras de honorarios disponibles." },
                { k: "Estatal", v: "Los 254 condados de Texas." },
                { k: "Respuesta", v: "Acceso directo a socios." },
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

const industries = [
  { icon: Building2, name: "Construccion y contratistas" },
  { icon: Factory, name: "Manufactura y fabricacion" },
  { icon: Truck, name: "Transporte y logistica" },
  { icon: Utensils, name: "Restaurantes y hospitalidad" },
  { icon: Wrench, name: "Servicios petroleros y energia" },
  { icon: ShoppingBag, name: "Comercio minorista y e-commerce" },
];

function Industries() {
  return (
    <section id="industries" className="py-24 md:py-36 bg-background">
      <div className="container-x">
        <SectionEyebrow number="03" label="Industrias atendidas" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Experiencia especifica por sector en toda la economia de Texas.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed self-end">
            La exposicion al impuesto sobre ventas es diferente en cada industria. Aportamos
            experiencia enfocada a los sectores auditados con mayor frecuencia por la Contraloria.
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

const faqs = [
  {
    q: "Cuando debo contactar a un consultor de impuesto sobre ventas?",
    a: "El mejor momento es antes de que inicie una auditoria. Una revision proactiva de cumplimiento puede identificar y corregir exposicion en sus propios terminos. Si ya recibio un aviso de auditoria, contactenos de inmediato.",
  },
  {
    q: "En que se diferencia su firma de un CPA o abogado fiscal?",
    a: "Nuestro equipo trabajo dentro de la Contraloria de Cuentas Publicas de Texas como auditores y supervisores de impuesto sobre ventas. El impuesto sobre ventas es nuestro unico enfoque, no una linea de servicio entre muchas.",
  },
  {
    q: "Atienden auditorias en todo el estado?",
    a: "Si. Representamos clientes en los 254 condados de Texas, incluidas auditorias administradas desde Austin, Houston, Dallas, San Antonio y oficinas regionales de la Contraloria.",
  },
  {
    q: "Cuanto suele costar un caso?",
    a: "La estructura de honorarios depende del asunto. Las consultas iniciales son gratuitas y totalmente confidenciales. Tambien podemos reunirnos en su lugar de negocio.",
  },
  {
    q: "Pueden ayudar despues de que se emita una determinacion?",
    a: "Absolutamente. Presentamos solicitudes de redeterminacion, preparamos fundamentos y representamos clientes en el proceso administrativo de audiencias de la Contraloria, incluso en negociaciones de acuerdo.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-36 bg-background">
      <div className="container-x">
        <SectionEyebrow number="05" label="Preguntas frecuentes" />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-12 lg:gap-24">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Respuestas antes de que las necesite.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Preguntas comunes de propietarios, CFOs y controllers ante un asunto de
              impuesto sobre ventas en Texas.
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

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const ref = useReveal<HTMLDivElement>();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mbdnpjzz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const payload = await response.json().catch(() => ({} as object));

      if (response.ok) {
        form.reset();
        toast.success("Mensaje recibido", {
          description: "Un socio se comunicara con usted dentro de un dia habil.",
        });
        const next =
          payload && typeof payload === "object" && "next" in payload
            ? payload.next
            : "/thanks";
        window.location.href = next === "/thanks" ? "/thanks" : "/thanks";
      } else {
        toast.error("No se pudo enviar el mensaje", {
          description: "Intente de nuevo o comuniquese directamente con nosotros.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("No se pudo enviar el mensaje", {
        description: "Intente de nuevo o comuniquese directamente con nosotros.",
      });
    } finally {
      setSubmitting(false);
    }
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
                Solicitar consulta
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Comience con una conversacion confidencial.
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed max-w-md">
              Cada consulta es revisada por un socio. Todas las comunicaciones estan
              protegidas y son confidenciales.
            </p>

            <div className="mt-12 space-y-6 border-t border-white/10 pt-10">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-brand-blue-light mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">Correo</div>
                  <a href="mailto:info@sataxdefense.com" className="text-white hover:text-brand-blue-light transition-colors">
                    info@sataxdefense.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-brand-blue-light mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">Telefono</div>
                  <a href="tel:+12108603614" className="text-white hover:text-brand-blue-light transition-colors">
                    (210) 860-3614
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-brand-blue-light mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">Oficina</div>
                  <div className="text-white">San Antonio, Texas · Representacion estatal</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-sm p-6 md:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Nombre completo" name="name" required />
              <Field label="Empresa" name="company" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Correo electronico" name="email" type="email" required />
              <Field label="Telefono" name="phone" type="tel" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
                Tipo de asunto
              </label>
              <select
                name="matter"
                required
                defaultValue=""
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-brand-blue-light transition-colors [&>option]:bg-navy-deep [&>option]:text-white"
              >
                <option value="" disabled>Seleccione un area de practica…</option>
                <option>Defensa de auditoria activa</option>
                <option>Apelacion administrativa / audiencia</option>
                <option>Revision de cumplimiento</option>
                <option>Analisis de reembolso</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
                Descripcion breve
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-blue-light transition-colors resize-none"
                placeholder="Cuentenos sobre su situacion…"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-3 rounded-sm bg-white px-6 py-4 text-sm font-medium text-navy-deep hover:bg-brand-blue-light transition-colors disabled:opacity-60"
            >
              {submitting ? "Enviando…" : "Enviar consulta confidencial"}
              {!submitting && <ArrowRight className="h-4 w-4" />}
            </button>
            <p className="text-xs text-white/50 text-center">
              Su informacion se mantiene estrictamente confidencial.
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

function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 sm:flex sm:justify-between">
        <div className="text-sm text-muted-foreground truncate">
          © {new Date().getFullYear()} SA Tax & Audit Consultants LLC · Todos los derechos reservados.
        </div>
        <div className="text-xs text-muted-foreground tracking-wider uppercase shrink-0">
          San Antonio · Texas
        </div>
      </div>

      <div className="container-x mt-6">
        <p className="text-[11px] text-muted-foreground leading-snug">
          El consultor no garantiza ningun resultado de auditoria, determinacion, acuerdo,
          reembolso ni reduccion de multas o intereses; las opiniones expresadas son juicios
          profesionales y no garantias. Los resultados dependen de la exactitud de los
          registros del cliente, de las determinaciones de la Contraloria y de las horas
          financiadas.
        </p>
      </div>
    </footer>
  );
}

function SpanishLanding() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Services />
      <About />
      <Industries />
      <FAQ />
      <Contact />
      <Footer />
      <Toaster position="top-center" />
    </main>
  );
}
