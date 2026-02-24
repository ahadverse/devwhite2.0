"use client";

import { useState } from "react";
import {
  Code,
  Smartphone,
  PenTool,
  Cloud,
  Globe,
  Layers,
  Database,
  TrendingUp,
  Shield,
  Headphones,
  Settings,
  Monitor,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import AnimatedGrid from "../../shared/animatedgrid/animatedgrid";

interface Service {
  label: string;
  description: string;
  gradient: string;
  icon: React.ElementType;
  isNew?: boolean;
  tag: string;
  features: string[];
}

const SERVICES: Service[] = [
  {
    label: "Web Development",
    description: "Custom websites & web apps built for scale and performance",
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    icon: Code,
    tag: "Development",
    features: ["React / Next.js", "TypeScript", "REST & GraphQL"],
  },
  {
    label: "Mobile App Development",
    description: "Native & cross-platform iOS and Android applications",
    gradient: "linear-gradient(135deg,#f97316,#ef4444)",
    icon: Smartphone,
    tag: "Development",
    features: ["React Native", "Flutter", "App Store Deploy"],
  },
  {
    label: "UI/UX Design",
    description: "Pixel-perfect interfaces that users love to interact with",
    gradient: "linear-gradient(135deg,#ec4899,#a855f7)",
    icon: PenTool,
    tag: "Design",
    features: ["Figma Prototypes", "Design Systems", "User Research"],
  },
  {
    label: "Cloud & DevOps",
    description: "Scalable cloud infrastructure, CI/CD pipelines & automation",
    gradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
    icon: Cloud,
    tag: "Infrastructure",
    features: ["AWS / GCP / Azure", "Docker & K8s", "CI/CD Pipelines"],
  },
  {
    label: "WordPress Development",
    description: "Themes, plugins & full WordPress solutions for any business",
    gradient: "linear-gradient(135deg,#22c55e,#059669)",
    icon: Globe,
    tag: "CMS",
    features: ["Custom Themes", "Plugin Dev", "WooCommerce"],
  },
  {
    label: "SaaS Development",
    description: "End-to-end SaaS product development from idea to launch",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    icon: Layers,
    tag: "Product",
    features: ["MVP Building", "Subscriptions", "Multi-tenancy"],
  },
  {
    label: "API & Backend",
    description: "Robust REST & GraphQL APIs powering modern applications",
    gradient: "linear-gradient(135deg,#14b8a6,#0891b2)",
    icon: Database,
    tag: "Development",
    features: ["Node / Laravel", "Database Design", "API Security"],
  },
  {
    label: "Digital Marketing",
    description: "SEO, content & growth strategies that drive real results",
    gradient: "linear-gradient(135deg,#fb7185,#f97316)",
    icon: TrendingUp,
    tag: "Marketing",
    features: ["SEO & SEM", "Content Strategy", "Analytics"],
  },
  {
    label: "Security & QA",
    description: "Penetration testing, audits & quality assurance services",
    gradient: "linear-gradient(135deg,#64748b,#334155)",
    icon: Shield,
    tag: "Quality",
    features: ["Pen Testing", "Code Audits", "Automated QA"],
  },
  {
    label: "Maintenance & Support",
    description: "24/7 ongoing support, updates & performance monitoring",
    gradient: "linear-gradient(135deg,#a78bfa,#6366f1)",
    icon: Headphones,
    tag: "Support",
    features: ["24/7 Support", "Performance", "Regular Updates"],
  },
  {
    label: "IT Consulting",
    description: "Strategic technology guidance to accelerate your business",
    gradient: "linear-gradient(135deg,#34d399,#0d9488)",
    icon: Settings,
    tag: "Consulting",
    isNew: true,
    features: ["Tech Roadmap", "Stack Review", "Architecture"],
  },
  {
    label: "Custom Software",
    description: "Fully tailored software solutions built around your workflow",
    gradient: "linear-gradient(135deg,#60a5fa,#2563eb)",
    icon: Monitor,
    tag: "Development",
    isNew: true,
    features: ["Requirement Analysis", "Custom Build", "Long-term Support"],
  },
];

const TAGS = [
  "All",
  "Development",
  "Design",
  "Infrastructure",
  "Marketing",
  "Support",
];

/* ── Hero Card (first item, large) ───────────────────────── */
function HeroCard({ service }: { service: Service }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className='svc-hero'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Big gradient background circle */}
      <div
        className='svc-hero__bg'
        style={{
          background: service.gradient,
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      />

      <div className='svc-hero__inner'>
        <div className='svc-hero__top'>
          <div
            className='svc-tag'
            style={{
              background: "rgba(255,255,255,0.18)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            {service.tag}
          </div>
          {service.isNew && <span className='svc-badge-new'>New</span>}
        </div>

        <div
          className='svc-hero__icon'
          style={{
            transform: hovered ? "scale(1.1) rotate(-6deg)" : "scale(1)",
          }}
        >
          <Icon size={36} color='#fff' strokeWidth={1.5} />
        </div>

        <h3 className='svc-hero__title'>{service.label}</h3>
        <p className='svc-hero__desc'>{service.description}</p>

        <ul className='svc-hero__features'>
          {service.features.map((f) => (
            <li key={f}>
              <CheckCircle2 size={13} style={{ flexShrink: 0, marginTop: 1 }} />
              {f}
            </li>
          ))}
        </ul>

        <div
          className='svc-hero__arrow'
          style={{
            transform: hovered ? "translate(4px,-4px)" : "translate(0,0)",
          }}
        >
          <ArrowUpRight size={20} />
          <span>Learn more</span>
        </div>
      </div>
    </div>
  );
}

/* ── Regular Card ─────────────────────────────────────────── */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className='svc-card'
      style={{ animationDelay: `${index * 50}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient shimmer on hover */}
      <div
        className='svc-card__shimmer'
        style={{
          background: service.gradient,
          opacity: hovered ? 0.07 : 0,
        }}
      />

      <div className='svc-card__head'>
        <div
          className='svc-card__icon'
          style={{
            background: service.gradient,
            transform: hovered ? "scale(1.1) rotate(-5deg)" : "scale(1)",
          }}
        >
          <Icon size={20} color='#fff' strokeWidth={1.6} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {service.isNew && <span className='svc-badge-new'>New</span>}
          <div
            className='svc-card__arrow'
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translate(3px,-3px)" : "translate(0,0)",
            }}
          >
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>

      <div className='svc-tag' style={{ marginTop: 12, marginBottom: 6 }}>
        {service.tag}
      </div>
      <h3 className='svc-card__title'>{service.label}</h3>
      <p className='svc-card__desc'>{service.description}</p>

      <ul className='svc-card__features'>
        {service.features.map((f) => (
          <li key={f}>
            <span
              className='svc-card__dot'
              style={{ background: service.gradient }}
            />
            {f}
          </li>
        ))}
      </ul>

      {/* Bottom gradient line */}
      <div
        className='svc-card__line'
        style={{
          background: service.gradient,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </div>
  );
}

/* ── Main Section ─────────────────────────────────────────── */
export default function ServicesSection() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.tag === activeTag);

  const hero = filtered[0];
  const rest = filtered.slice(1);

  return (
    <section
      className='svc-root'
      style={{
        background: "#f8faff",
        position: "relative",
        padding: "50px 24px 50px",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <AnimatedGrid />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .svc-root * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── ambient top glow ── */
        .svc-root::before {
          content: '';
          position: absolute;
          top: -100px; left: 50%;
          transform: translateX(-50%);
          width: 800px; height: 400px;
          
          pointer-events: none;
        }

        .svc-inner {
          position: relative;
          max-width: 1180px;
          margin: 0 auto;
          z-index: 1;
        }

        /* ── Header ── */
        .svc-header { text-align: center; margin-bottom: 52px; }

        .svc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8b5cf6;
          background: rgba(139,92,246,0.08);
          border: 1px solid rgba(139,92,246,0.2);
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .svc-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #8b5cf6;
          animation: svc-pulse 2s ease-in-out infinite;
        }
        @keyframes svc-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.5); }
        }

        .svc-title {
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -1px;
          margin-bottom: 14px;
        }
        .svc-title span {
          background: linear-gradient(90deg,#6366f1,#ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .svc-subtitle {
          font-size: 15.5px;
          color: #64748b;
          line-height: 1.7;
          max-width: 460px;
          margin: 0 auto;
        }

        /* ── Tabs ── */
        .svc-tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .svc-tab {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 20px;
          border-radius: 100px;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .svc-tab:hover { border-color: #ddd6fe; color: #7c3aed; background: #f5f3ff; }
        .svc-tab--active {
          background: linear-gradient(135deg,#6366f1,#8b5cf6) !important;
          border-color: transparent !important;
          color: #fff !important;
          box-shadow: 0 4px 14px rgba(99,102,241,0.3);
        }

        /* ── Layout ── */
        .svc-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 20px;
          align-items: start;
        }

        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        /* ── Hero Card ── */
        .svc-hero {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          min-height: 480px;
          display: flex;
          flex-direction: column;
          animation: svc-fadeUp 0.4s ease both;
        }
        .svc-hero__bg {
          position: absolute;
          inset: 0;
          transition: transform 0.4s ease;
        }
        .svc-hero__inner {
          position: relative;
          z-index: 1;
          padding: 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
          gap: 0;
        }
        .svc-hero__top {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 28px;
        }
        .svc-hero__icon {
          width: 72px; height: 72px;
          border-radius: 20px;
          background: rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .svc-hero__title {
          font-size: 26px;
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 10px;
        }
        .svc-hero__desc {
          font-size: 14.5px;
          color: rgba(255,255,255,0.75);
          line-height: 1.65;
          margin-bottom: 20px;
        }
        .svc-hero__features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 28px;
          flex: 1;
        }
        .svc-hero__features li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          color: rgba(255,255,255,0.85);
          font-weight: 500;
        }
        .svc-hero__arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #fff;
          font-size: 13.5px;
          font-weight: 700;
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.3);
          padding: 9px 18px;
          border-radius: 100px;
          width: fit-content;
          transition: transform 0.25s ease;
          backdrop-filter: blur(4px);
        }

        /* ── Service Card ── */
        .svc-card {
          position: relative;
          background: #fff;
          border: 1.5px solid #eef0f6;
          border-radius: 18px;
          padding: 20px;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: svc-fadeUp 0.45s ease both;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .svc-card:hover {
          border-color: #ddd6fe;
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(99,102,241,0.1);
        }
        .svc-card__shimmer {
          position: absolute;
          inset: 0;
          border-radius: 18px;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .svc-card__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .svc-card__icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.13);
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .svc-card__arrow {
          color: #94a3b8;
          transition: transform 0.25s, opacity 0.25s;
        }
        .svc-card__title {
          font-size: 14.5px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
          margin-bottom: 5px;
        }
        .svc-card__desc {
          font-size: 12px;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 14px;
          flex: 1;
        }
        .svc-card__features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .svc-card__features li {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          color: #64748b;
          font-weight: 500;
        }
        .svc-card__dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .svc-card__line {
          position: absolute;
          bottom: 0; left: 0;
          height: 3px; width: 100%;
          transform-origin: left;
          transition: transform 0.35s ease;
          border-radius: 0 0 18px 18px;
        }

        /* ── Shared ── */
        .svc-tag {
          display: inline-block;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #64748b;
          background: #f1f5f9;
          padding: 3px 10px;
          border-radius: 100px;
          border: 1px solid #e2e8f0;
        }
        .svc-badge-new {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #fff;
          background: linear-gradient(90deg,#f97316,#ef4444);
          padding: 3px 9px;
          border-radius: 100px;
        }

        /* ── Count ── */
        .svc-count {
          text-align: center;
          margin-top: 40px;
          font-size: 13.5px;
          color: #94a3b8;
        }
        .svc-count strong { color: #6366f1; }

        @keyframes svc-fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .svc-layout { grid-template-columns: 1fr; }
          .svc-hero { min-height: 320px; }
          .svc-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 720px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .svc-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className='svc-inner'>
        {/* Header */}
        <div className='svc-header'>
          <div>
            <span className='svc-eyebrow'>What We Offer</span>
          </div>
          <h2 className='svc-title'>
            Expert services to
            <br />
            <span>power your vision</span>
          </h2>
          <p className='svc-subtitle'>
            From design to deployment — our team delivers end-to-end technology
            services that help businesses scale.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className='svc-tabs'>
          {TAGS.map((tag) => (
            <button
              key={tag}
              className={`svc-tab${activeTag === tag ? " svc-tab--active" : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Layout */}
        <div className='svc-layout'>
          {/* Hero card — left */}
          {hero && <HeroCard service={hero} />}

          {/* Grid — right */}
          <div className='svc-grid'>
            {rest.map((service, i) => (
              <ServiceCard
                key={service.label}
                service={service}
                index={i + 1}
              />
            ))}
          </div>
        </div>

        <p className='svc-count'>
          Showing <strong>{filtered.length}</strong> of{" "}
          <strong>{SERVICES.length}</strong> services
        </p>
      </div>
    </section>
  );
}
