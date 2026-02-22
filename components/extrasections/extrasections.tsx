"use client";

import { useState } from "react";
import {
  Mail,
  ArrowUpRight,
  CheckCircle2,
  Star,
  Quote,
  Layers,
  Zap,
  Users,
  Globe,
  Code2,
  Cpu,
  ClipboardList,
  Paintbrush,
  FlaskConical,
  Rocket,
  MessageSquare,
  HeartHandshake,
} from "lucide-react";
import AnimatedGrid from "../animatedgrid/animatedgrid";

/* ══════════════════════════════════════════════════════════
   1. SUBSCRIPTION SECTION
══════════════════════════════════════════════════════════ */
export function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: "#f8faff",
      }}
    >
      <AnimatedGrid color='rgba(15,23,42,0.025)' size={48} speed={14} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .sub-wrap {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 30px 24px 50px;
        }

        .sub-card {
          position: relative;
          background: linear-gradient(135deg,#6366f1 0%,#4f46e5 40%,#0284c7 100%);
          border-radius: 28px;
          padding: 72px 64px;
          overflow: hidden;
          text-align: center;
        }

        /* Decorative circles inside card */
        .sub-card::before {
          content: '';
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          top: -160px; left: -120px;
          pointer-events: none;
        }
        .sub-card::after {
          content: '';
          position: absolute;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          bottom: -100px; right: -80px;
          pointer-events: none;
        }

        .sub-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 24px;
        }
        .sub-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #fff;
          animation: sub-pulse 2s ease-in-out infinite;
        }
        @keyframes sub-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.5); }
        }

        .sub-title {
          font-size: clamp(28px, 3.5vw, 46px);
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          letter-spacing: -1px;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .sub-desc {
          font-size: 16px;
          color: rgba(255,255,255,0.72);
          line-height: 1.7;
          max-width: 480px;
          margin: 0 auto 40px;
          position: relative;
          z-index: 1;
        }

        .sub-form {
          display: flex;
          align-items: center;
          gap: 0;
          max-width: 520px;
          margin: 0 auto 20px;
          background: #fff;
          border-radius: 100px;
          padding: 6px 6px 6px 22px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.18);
          position: relative;
          z-index: 1;
        }

        .sub-form input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14.5px;
          color: #0f172a;
          min-width: 0;
        }
        .sub-form input::placeholder { color: #94a3b8; }

        .sub-form button {
          flex-shrink: 0;
          background: linear-gradient(135deg,#6366f1,#4f46e5);
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          padding: 12px 26px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 7px;
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .sub-form button:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 20px rgba(99,102,241,0.5);
        }

        .sub-perks {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }
        .sub-perk {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          color: rgba(255,255,255,0.7);
          font-weight: 500;
        }

        .sub-success {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          color: #fff;
          font-size: 14.5px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 100px;
          max-width: 320px;
          margin: 0 auto 20px;
          animation: sub-pop 0.3s ease;
          position: relative;
          z-index: 1;
        }
        @keyframes sub-pop {
          from { opacity:0; transform:scale(0.9); }
          to   { opacity:1; transform:scale(1); }
        }

        @media (max-width: 640px) {
          .sub-card { padding: 48px 24px; }
          .sub-form { flex-direction: column; border-radius: 16px; padding: 16px; gap: 10px; }
          .sub-form input { width: 100%; }
          .sub-form button { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className='sub-wrap'>
        <div className='sub-card'>
          <div>
            <span className='sub-eyebrow'>Stay Updated</span>
          </div>
          <h2 className='sub-title'>
            Get the latest from
            <br />
            our team
          </h2>
          <p className='sub-desc'>
            Tutorials, product updates, developer tips and industry insights —
            delivered straight to your inbox. No spam, ever.
          </p>

          {sent ? (
            <div className='sub-success'>
              <CheckCircle2 size={18} /> You&apos;re subscribed! Welcome aboard
              🎉
            </div>
          ) : (
            <div className='sub-form'>
              <input
                type='email'
                placeholder='Enter your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              />
              <button onClick={handleSubmit}>
                Subscribe <ArrowUpRight size={15} />
              </button>
            </div>
          )}

          <div className='sub-perks'>
            {["No spam", "Unsubscribe anytime", "2,000+ readers"].map((p) => (
              <span key={p} className='sub-perk'>
                <CheckCircle2 size={13} /> {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   2. TESTIMONIALS SECTION
══════════════════════════════════════════════════════════ */
const TESTIMONIALS = [
  {
    quote:
      "Dokan completely transformed our eCommerce business. Setting up our marketplace took days, not months. The support team is world-class.",
    name: "Sarah Mitchell",
    role: "Founder, ShopHub",
    rating: 5,
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    initials: "SM",
  },
  {
    quote:
      "Their MERN development team delivered our SaaS MVP on time and under budget. The code quality is exceptional and the architecture is rock-solid.",
    name: "James Okafor",
    role: "CTO, LaunchPad Inc.",
    rating: 5,
    gradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
    initials: "JO",
  },
  {
    quote:
      "Happy Addons saved us weeks of design work. The widgets are polished, performant and the team ships updates remarkably fast.",
    name: "Priya Sharma",
    role: "Lead Designer, CreativeWave",
    rating: 5,
    gradient: "linear-gradient(135deg,#ec4899,#a855f7)",
    initials: "PS",
  },
];

export function TestimonialsSection() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: "#f8faff",
      }}
    >
      <AnimatedGrid color='rgba(15,23,42,0.025)' size={48} speed={14} />

      <style>{`
        .testi-wrap {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 30px 24px 50px;
        }
        .testi-header { text-align: center; margin-bottom: 52px; }
        .testi-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6366f1;
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.2);
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 18px;
        }
        .testi-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #6366f1;
          animation: testi-pulse 2s ease-in-out infinite;
        }
        @keyframes testi-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.5); }
        }
        .testi-title {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -1px;
          margin-bottom: 12px;
        }
        .testi-title span {
          background: linear-gradient(90deg,#6366f1,#ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .testi-sub {
          font-size: 15px;
          color: #64748b;
          max-width: 400px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .testi-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
        }

        .testi-card {
          background: #f8faff;
          border: 1.5px solid #eef0f6;
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          animation: testi-up 0.5s ease both;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          cursor: default;
        }
        .testi-card:hover {
          border-color: #c7d2fe;
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(99,102,241,0.1);
        }
        @keyframes testi-up {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .testi-quote-icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg,#6366f1,#818cf8);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .testi-stars {
          display: flex;
          gap: 3px;
        }

        .testi-text {
          font-size: 14.5px;
          color: #334155;
          line-height: 1.75;
          font-style: italic;
          flex: 1;
        }

        .testi-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid #eef0f6;
        }
        .testi-avatar {
          width: 44px; height: 44px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 800; color: #fff;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.13);
        }
        .testi-name {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 2px;
        }
        .testi-role {
          font-size: 12px;
          color: #94a3b8;
          font-weight: 500;
        }

        @media (max-width: 900px) { .testi-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) { .testi-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className='testi-wrap'>
        <div className='testi-header'>
          <div>
            <span className='testi-eyebrow'>Testimonials</span>
          </div>
          <h2 className='testi-title'>
            Loved by <span>thousands</span> of teams
          </h2>
          <p className='testi-sub'>
            Don&apos;t take our word for it — hear from the businesses
            we&apos;ve helped grow.
          </p>
        </div>

        <div className='testi-grid'>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className='testi-card'
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className='testi-quote-icon'>
                  <Quote size={16} color='#fff' strokeWidth={1.6} />
                </div>
                <div className='testi-stars'>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={13} fill='#f59e0b' color='#f59e0b' />
                  ))}
                </div>
              </div>
              <p className='testi-text'>&ldquo;{t.quote}&rdquo;</p>
              <div className='testi-author'>
                <div
                  className='testi-avatar'
                  style={{ background: t.gradient }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className='testi-name'>{t.name}</div>
                  <div className='testi-role'>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   3. HOW WE WORK (PROCESS) SECTION
══════════════════════════════════════════════════════════ */
const STEPS = [
  {
    num: "01",
    icon: MessageSquare,
    label: "Discovery",
    desc: "We listen deeply to understand your goals, users and constraints before writing a single line of code.",
    gradient: "linear-gradient(135deg,#6366f1,#818cf8)",
  },
  {
    num: "02",
    icon: Paintbrush,
    label: "Design",
    desc: "Our designers craft pixel-perfect wireframes and prototypes, validated with real user feedback.",
    gradient: "linear-gradient(135deg,#ec4899,#a855f7)",
  },
  {
    num: "03",
    icon: Code2,
    label: "Build",
    desc: "Engineers build with clean, tested, scalable code — using the right stack for your product.",
    gradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
  },
  {
    num: "04",
    icon: FlaskConical,
    label: "Test & QA",
    desc: "Rigorous automated and manual testing ensures every release is stable, secure and performant.",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
  },
  {
    num: "05",
    icon: Rocket,
    label: "Launch",
    desc: "We handle deployment, CI/CD pipelines and go-live — so your launch day is smooth and confident.",
    gradient: "linear-gradient(135deg,#34d399,#059669)",
  },
  {
    num: "06",
    icon: HeartHandshake,
    label: "Grow & Support",
    desc: "Post-launch, we monitor, iterate and support — ensuring your product keeps improving over time.",
    gradient: "linear-gradient(135deg,#a78bfa,#6366f1)",
  },
];

export function ProcessSection() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: "#f8faff",
      }}
    >
      <AnimatedGrid color='rgba(15,23,42,0.025)' size={48} speed={14} />

      <style>{`
        .proc-wrap {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 50px 24px 50px;
        }
        .proc-header { text-align: center; margin-bottom: 60px; }
        .proc-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #6366f1;
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.2);
          padding: 6px 16px; border-radius: 100px; margin-bottom: 18px;
        }
        .proc-eyebrow::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: #6366f1; animation: proc-pulse 2s ease-in-out infinite;
        }
        @keyframes proc-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.5); }
        }
        .proc-title {
          font-size: clamp(28px,3.5vw,44px); font-weight: 800;
          color: #0f172a; line-height: 1.15; letter-spacing: -1px; margin-bottom: 12px;
        }
        .proc-title span {
          background: linear-gradient(90deg,#6366f1,#34d399);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .proc-sub { font-size: 15px; color: #64748b; max-width: 420px; margin: 0 auto; line-height: 1.7; }

        .proc-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
        }

        .proc-card {
          background: #fff;
          border: 1.5px solid #eef0f6;
          border-radius: 20px;
          padding: 28px 24px;
          position: relative;
          overflow: hidden;
          animation: proc-up 0.5s ease both;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          cursor: default;
        }
        .proc-card:hover {
          border-color: #c7d2fe;
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(99,102,241,0.1);
        }
        @keyframes proc-up {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .proc-num {
          font-size: 52px;
          font-weight: 800;
          color: #f1f5f9;
          letter-spacing: -2px;
          line-height: 1;
          position: absolute;
          top: 16px; right: 20px;
        }

        .proc-icon {
          width: 50px; height: 50px;
          border-radius: 15px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
        }

        .proc-label {
          font-size: 17px; font-weight: 800; color: #0f172a; margin-bottom: 8px;
        }
        .proc-desc {
          font-size: 13.5px; color: #64748b; line-height: 1.7;
        }

        @media (max-width: 900px) { .proc-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px) { .proc-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className='proc-wrap'>
        <div className='proc-header'>
          <div>
            <span className='proc-eyebrow'>How We Work</span>
          </div>
          <h2 className='proc-title'>
            A process built for
            <br />
            <span>outcomes, not output</span>
          </h2>
          <p className='proc-sub'>
            Six clear steps from idea to a live, growing product — with you at
            every stage.
          </p>
        </div>
        <div className='proc-grid'>
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className='proc-card'
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className='proc-num'>{s.num}</div>
                <div className='proc-icon' style={{ background: s.gradient }}>
                  <Icon size={22} color='#fff' strokeWidth={1.6} />
                </div>
                <div className='proc-label'>{s.label}</div>
                <p className='proc-desc'>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   4. TECH STACK SECTION
══════════════════════════════════════════════════════════ */
const TECHS = [
  { name: "React", category: "Frontend", color: "#61dafb", bg: "#ecfeff" },
  { name: "Next.js", category: "Frontend", color: "#0f172a", bg: "#f8fafc" },
  { name: "TypeScript", category: "Language", color: "#3178c6", bg: "#eff6ff" },
  { name: "Node.js", category: "Backend", color: "#68a063", bg: "#f0fdf4" },
  { name: "Express", category: "Backend", color: "#374151", bg: "#f9fafb" },
  { name: "MongoDB", category: "Database", color: "#00ed64", bg: "#f0fdf4" },
  { name: "PHP 8", category: "Language", color: "#7c3aed", bg: "#f5f3ff" },
  { name: "Laravel", category: "Backend", color: "#ef4444", bg: "#fef2f2" },
  { name: "WordPress", category: "CMS", color: "#2563eb", bg: "#eff6ff" },
  { name: "MySQL", category: "Database", color: "#0891b2", bg: "#ecfeff" },
  { name: "Docker", category: "DevOps", color: "#0284c7", bg: "#f0f9ff" },
  { name: "AWS", category: "Cloud", color: "#f59e0b", bg: "#fffbeb" },
  { name: "Tailwind", category: "Frontend", color: "#06b6d4", bg: "#ecfeff" },
  { name: "Redis", category: "Database", color: "#dc2626", bg: "#fef2f2" },
  { name: "GraphQL", category: "API", color: "#e535ab", bg: "#fdf4ff" },
  { name: "Figma", category: "Design", color: "#a855f7", bg: "#faf5ff" },
];

export function TechStackSection() {
  const [active, setActive] = useState("All");
  const cats = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "DevOps",
    "Cloud",
    "Design",
  ];
  const filtered =
    active === "All" ? TECHS : TECHS.filter((t) => t.category === active);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: "#f8faff",
      }}
    >
      <AnimatedGrid color='rgba(15,23,42,0.025)' size={48} speed={14} />

      <style>{`
        .tech-wrap {
          position: relative; z-index: 1;
          max-width: 1180px; margin: 0 auto;
          padding: 50px 24px 50px;
        }
        .tech-header { text-align: center; margin-bottom: 48px; }
        .tech-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #6366f1;
          background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.2);
          padding: 6px 16px; border-radius: 100px; margin-bottom: 18px;
        }
        .tech-eyebrow::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: #6366f1; animation: tech-pulse 2s ease-in-out infinite;
        }
        @keyframes tech-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.5); }
        }
        .tech-title {
          font-size: clamp(28px,3.5vw,44px); font-weight: 800;
          color: #0f172a; line-height: 1.15; letter-spacing: -1px; margin-bottom: 12px;
        }
        .tech-title span {
          background: linear-gradient(90deg,#6366f1,#f97316);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .tech-sub { font-size: 15px; color: #64748b; max-width: 400px; margin: 0 auto; line-height: 1.7; }

        .tech-tabs {
          display: flex; justify-content: center; gap: 8px;
          flex-wrap: wrap; margin-bottom: 40px;
        }
        .tech-tab {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; font-weight: 600; padding: 8px 18px;
          border-radius: 100px; border: 1.5px solid #e2e8f0;
          background: #fff; color: #64748b; cursor: pointer; transition: all 0.2s;
        }
        .tech-tab:hover { border-color: #c7d2fe; color: #4f46e5; background: #eef2ff; }
        .tech-tab--active {
          background: linear-gradient(135deg,#6366f1,#818cf8) !important;
          border-color: transparent !important; color: #fff !important;
          box-shadow: 0 4px 14px rgba(99,102,241,0.3);
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 12px;
        }

        .tech-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          border-radius: 14px;
          border: 1.5px solid #eef0f6;
          background: #fff;
          cursor: default;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          animation: tech-up 0.4s ease both;
        }
        .tech-chip:hover {
          border-color: #c7d2fe;
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(99,102,241,0.08);
        }
        @keyframes tech-up {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .tech-dot {
          width: 10px; height: 10px;
          border-radius: 50%; flex-shrink: 0;
        }
        .tech-chip-name {
          font-size: 14px; font-weight: 700; color: #0f172a; flex: 1;
        }
        .tech-chip-cat {
          font-size: 10.5px; font-weight: 600; color: #94a3b8;
          text-transform: uppercase; letter-spacing: 0.06em;
        }

        @media (max-width: 900px) { .tech-grid { grid-template-columns: repeat(3,1fr); } }
        @media (max-width: 600px) { .tech-grid { grid-template-columns: repeat(2,1fr); } }
      `}</style>

      <div className='tech-wrap'>
        <div className='tech-header'>
          <div>
            <span className='tech-eyebrow'>Tech Stack</span>
          </div>
          <h2 className='tech-title'>
            Built with the
            <br />
            <span>right tools</span>
          </h2>
          <p className='tech-sub'>
            We choose technologies that are proven, scalable and the best fit
            for your product — not the trendiest.
          </p>
        </div>

        <div className='tech-tabs'>
          {cats.map((c) => (
            <button
              key={c}
              className={`tech-tab${active === c ? " tech-tab--active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className='tech-grid'>
          {filtered.map((t, i) => (
            <div
              key={t.name}
              className='tech-chip'
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div
                className='tech-dot'
                style={{
                  background: t.color,
                  boxShadow: `0 0 8px ${t.color}55`,
                }}
              />
              <span className='tech-chip-name'>{t.name}</span>
              <span
                className='tech-chip-cat'
                style={{
                  background: t.bg,
                  color: t.color,
                  padding: "2px 8px",
                  borderRadius: 20,
                }}
              >
                {t.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
