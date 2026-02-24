"use client";

import { useState, useRef, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowUpRight,
  Clock,
  MessageSquare,
  Headphones,
  Code2,
  Zap,
  ChevronDown,
  Globe,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";
import AnimatedGrid from "@/components/shared/animatedgrid/animatedgrid";
import Footer from "@/components/shared/footer/footer";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const CHANNELS = [
  {
    icon: MessageSquare,
    label: "General Enquiry",
    desc: "Questions about our company, partnerships or press.",
    response: "~4 hours",
    gradient: "linear-gradient(135deg,#6366f1,#818cf8)",
    email: "hello@devwhite.com",
  },
  {
    icon: Code2,
    label: "Technical Support",
    desc: "Help with our products, bugs, or integrations.",
    response: "~2 hours",
    gradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
    email: "support@devwhite.com",
  },
  {
    icon: Headphones,
    label: "Sales & Licensing",
    desc: "Custom plans, enterprise pricing or agency deals.",
    response: "~1 hour",
    gradient: "linear-gradient(135deg,#ec4899,#a855f7)",
    email: "sales@devwhite.com",
  },
  {
    icon: Zap,
    label: "Hire Our Team",
    desc: "Looking to build something? Let's talk.",
    response: "~3 hours",
    gradient: "linear-gradient(135deg,#f97316,#ef4444)",
    email: "work@devwhite.com",
  },
];

const OFFICES = [
  {
    city: "Dhaka",
    country: "Bangladesh",
    address: "House 42, Road 11, Banani, Dhaka-1213",
    flag: "🇧🇩",
    primary: true,
    tz: "GMT+6",
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "128 City Road, London, EC1V 2NX",
    flag: "🇬🇧",
    primary: false,
    tz: "GMT+1",
  },
];

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Small projects take 2–4 weeks. Mid-size products take 2–3 months. We always give a detailed timeline after the discovery call.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes — all our retainer plans include post-launch support, monitoring and regular updates. We don't disappear after delivery.",
  },
  {
    q: "Can I get a free consultation?",
    a: "Absolutely. Book a 30-minute discovery call from the form on this page. No commitment required.",
  },
  {
    q: "What tech stacks do you work with?",
    a: "We specialise in WordPress, PHP/Laravel, and the full MERN stack (MongoDB, Express, React, Node.js). We also work with Next.js, TypeScript and DevOps tooling.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — we have clients in 150+ countries. We work asynchronously across time zones and schedule calls to fit your schedule.",
  },
];

/* ══════════════════════════════════════════
   UNIQUE FEATURE: LIVE CLOCK PER OFFICE
══════════════════════════════════════════ */
function LiveClock({ tz }: { tz: string }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-US", {
        timeZone: tz === "GMT+6" ? "Asia/Dhaka" : "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tz]);
  return <span className='cp-clock'>{time}</span>;
}

/* ══════════════════════════════════════════
   FAQ ITEM
══════════════════════════════════════════ */
function FaqItem({ item, index }: { item: (typeof FAQS)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`cp-faq-item${open ? " cp-faq-item--open" : ""}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <button className='cp-faq-q' onClick={() => setOpen((o) => !o)}>
        <span>{item.q}</span>
        <ChevronDown size={16} className='cp-faq-chevron' />
      </button>
      {open && <div className='cp-faq-a'>{item.a}</div>}
    </div>
  );
}

/* ══════════════════════════════════════════
   UNIQUE FEATURE: CHARACTER-COUNTED TEXTAREA
   WITH REAL-TIME SENTIMENT LABEL
══════════════════════════════════════════ */
function SmartTextarea({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const MAX = 500;
  const pct = Math.min(value.length / MAX, 1);
  const color = pct < 0.6 ? "#6366f1" : pct < 0.85 ? "#f97316" : "#ef4444";

  const label =
    value.length === 0
      ? ""
      : value.length < 40
        ? "💬 Tell us more…"
        : value.length < 120
          ? "✨ Good start"
          : value.length < 250
            ? "👍 Great detail"
            : "🚀 Very detailed — we love it!";

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * (1 - pct);

  return (
    <div className='cp-smart-wrap'>
      <textarea
        className='cp-input cp-textarea'
        placeholder='Tell us about your project, idea or question…'
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, MAX))}
        rows={5}
      />
      <div className='cp-smart-footer'>
        <span className='cp-smart-label'>{label}</span>
        <div className='cp-smart-ring-wrap' title={`${value.length}/${MAX}`}>
          <svg width='44' height='44' viewBox='0 0 44 44'>
            <circle
              cx='22'
              cy='22'
              r={radius}
              fill='none'
              stroke='#f1f5f9'
              strokeWidth='3'
            />
            <circle
              cx='22'
              cy='22'
              r={radius}
              fill='none'
              stroke={color}
              strokeWidth='3'
              strokeDasharray={circumference}
              strokeDashoffset={dash}
              strokeLinecap='round'
              transform='rotate(-90 22 22)'
              style={{
                transition: "stroke-dashoffset .3s ease, stroke .3s ease",
              }}
            />
          </svg>
          <span className='cp-smart-count' style={{ color }}>
            {MAX - value.length}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════ */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    department: "General Enquiry",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [activeOffice, setActiveOffice] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1800);
  };

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div>
      <div
        style={{
          background: "#f8faff",
          minHeight: "100vh",
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <AnimatedGrid />

        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO ── */
        .cp-hero {
          position: relative; z-index: 1;
          text-align: center;
          padding: 88px 24px 72px;
          border-bottom: 1px solid #eef0f6;
        }
        .cp-hero::before {
          content: ''; position: absolute; top: -60px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 400px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .cp-hero-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
        .cp-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11.5px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
          color: #6366f1; background: rgba(99,102,241,.08); border: 1px solid rgba(99,102,241,.2);
          padding: 6px 16px; border-radius: 100px; margin-bottom: 22px;
        }
        .cp-eyebrow::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #6366f1; animation: cp-pulse 2s ease-in-out infinite; }
        @keyframes cp-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.5)} }
        .cp-hero-title { font-size: clamp(32px,5vw,56px); font-weight: 800; color: #0f172a; line-height: 1.12; letter-spacing: -1.5px; margin-bottom: 16px; }
        .cp-hero-title span { background: linear-gradient(90deg,#6366f1,#ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .cp-hero-sub { font-size: 16px; color: #64748b; line-height: 1.7; }

        /* ── CHANNELS ── */
        .cp-channels-wrap { position: relative; z-index: 1; max-width: 1180px; margin: 0 auto; padding: 64px 24px 0; }
        .cp-channels-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .cp-channel {
          background: #fff; border: 1.5px solid #eef0f6; border-radius: 20px;
          padding: 24px 20px; cursor: default; position: relative; overflow: hidden;
          transition: border-color .25s, transform .25s, box-shadow .25s;
          animation: cp-up .5s ease both;
        }
        .cp-channel:hover { border-color: #c7d2fe; transform: translateY(-5px); box-shadow: 0 16px 40px rgba(99,102,241,.1); }
        .cp-ch-icon { width: 46px; height: 46px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; box-shadow: 0 4px 14px rgba(0,0,0,.12); }
        .cp-ch-label { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 6px; }
        .cp-ch-desc { font-size: 12.5px; color: #94a3b8; line-height: 1.55; margin-bottom: 14px; }
        .cp-ch-response { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; color: #059669; background: rgba(5,150,105,.08); border: 1px solid rgba(5,150,105,.2); padding: 3px 10px; border-radius: 100px; }
        .cp-ch-email { display: block; margin-top: 10px; font-size: 12px; color: #6366f1; font-weight: 600; text-decoration: none; }
        .cp-ch-email:hover { text-decoration: underline; }
        .cp-ch-bar { position: absolute; bottom: 0; left: 0; height: 3px; width: 0; transition: width .35s ease; }
        .cp-channel:hover .cp-ch-bar { width: 100%; }

        /* ── MAIN GRID ── */
        .cp-main { max-width: 1180px; margin: 0 auto; padding: 56px 24px 100px; display: grid; grid-template-columns: 1fr 420px; gap: 40px; position: relative; z-index: 1; }

        /* ── FORM ── */
        .cp-form-card {
          background: #fff; border: 1.5px solid #eef0f6; border-radius: 24px;
          padding: 40px 40px 36px; box-shadow: 0 8px 32px rgba(0,0,0,.06);
        }
        .cp-form-title { font-size: 22px; font-weight: 800; color: #0f172a; margin-bottom: 6px; }
        .cp-form-sub { font-size: 13.5px; color: #94a3b8; margin-bottom: 32px; line-height: 1.6; }

        .cp-dept-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 24px; }
        .cp-dept-btn {
          font-family: 'Plus Jakarta Sans',sans-serif; font-size: 12px; font-weight: 600;
          padding: 9px 14px; border-radius: 10px; border: 1.5px solid #e2e8f0;
          background: #fff; color: #64748b; cursor: pointer; transition: all .2s; text-align: left;
          display: flex; align-items: center; gap: 7px;
        }
        .cp-dept-btn:hover { border-color: #c7d2fe; color: #4f46e5; }
        .cp-dept-btn--active { background: linear-gradient(135deg,#6366f1,#818cf8) !important; border-color: transparent !important; color: #fff !important; box-shadow: 0 4px 14px rgba(99,102,241,.28); }
        .cp-dept-btn--active svg { color: #fff !important; }

        .cp-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        .cp-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
        .cp-label { font-size: 12.5px; font-weight: 700; color: #475569; }
        .cp-input {
          font-family: 'Plus Jakarta Sans',sans-serif; font-size: 14px; color: #0f172a;
          background: #f8faff; border: 1.5px solid #e8edf5; border-radius: 12px;
          padding: 12px 16px; outline: none; transition: border-color .2s, box-shadow .2s; width: 100%; resize: none;
        }
        .cp-input:focus { border-color: #a5b4fc; box-shadow: 0 0 0 3px rgba(99,102,241,.1); }
        .cp-input::placeholder { color: #94a3b8; }
        .cp-textarea { min-height: 120px; }

        /* Smart textarea wrapper */
        .cp-smart-wrap { position: relative; }
        .cp-smart-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 8px; }
        .cp-smart-label { font-size: 12px; color: #64748b; font-weight: 500; min-height: 18px; }
        .cp-smart-ring-wrap { position: relative; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .cp-smart-count { position: absolute; font-size: 10px; font-weight: 800; }

        .cp-submit {
          width: 100%; margin-top: 8px;
          background: linear-gradient(135deg,#6366f1,#818cf8); color: #fff;
          font-family: 'Plus Jakarta Sans',sans-serif; font-size: 15px; font-weight: 700;
          padding: 15px 28px; border-radius: 100px; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 6px 20px rgba(99,102,241,.3); transition: transform .2s, box-shadow .2s;
        }
        .cp-submit:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(99,102,241,.4); }
        .cp-submit:disabled { opacity: .6; cursor: not-allowed; transform: none; }

        .cp-success {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 60px 24px; text-align: center; gap: 16px;
        }
        .cp-success-icon { width: 72px; height: 72px; border-radius: 22px; background: linear-gradient(135deg,#34d399,#059669); display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(5,150,105,.3); animation: cp-pop .4s ease; }
        @keyframes cp-pop { from{opacity:0;transform:scale(.7)} to{opacity:1;transform:scale(1)} }
        .cp-success-title { font-size: 22px; font-weight: 800; color: #0f172a; }
        .cp-success-sub { font-size: 14px; color: #64748b; line-height: 1.7; max-width: 300px; }
        .cp-success-reset { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 13px; font-weight: 700; color: #6366f1; background: rgba(99,102,241,.08); border: 1.5px solid rgba(99,102,241,.2); padding: 8px 20px; border-radius: 100px; cursor: pointer; transition: background .2s; }
        .cp-success-reset:hover { background: rgba(99,102,241,.15); }

        /* ── SIDEBAR ── */
        .cp-sidebar { display: flex; flex-direction: column; gap: 20px; }

        /* ── UNIQUE: OFFICE CARD WITH LIVE CLOCK ── */
        .cp-offices { background: #fff; border: 1.5px solid #eef0f6; border-radius: 22px; padding: 28px; box-shadow: 0 4px 20px rgba(0,0,0,.05); }
        .cp-offices-title { font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
        .cp-office-tabs { display: flex; gap: 8px; margin-bottom: 20px; }
        .cp-office-tab {
          flex: 1; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 12.5px; font-weight: 700;
          padding: 8px; border-radius: 10px; border: 1.5px solid #e2e8f0;
          background: #fff; color: #64748b; cursor: pointer; transition: all .2s;
        }
        .cp-office-tab--active { background: linear-gradient(135deg,#6366f1,#818cf8); border-color: transparent; color: #fff; box-shadow: 0 4px 12px rgba(99,102,241,.25); }
        .cp-office-body { animation: cp-up .3s ease; }
        .cp-office-flag { font-size: 36px; margin-bottom: 10px; display: block; }
        .cp-office-city { font-size: 18px; font-weight: 800; color: #0f172a; }
        .cp-office-country { font-size: 13px; color: #94a3b8; margin-bottom: 14px; }
        .cp-office-addr { font-size: 13px; color: #64748b; line-height: 1.6; margin-bottom: 14px; display: flex; align-items: flex-start; gap: 6px; }
        .cp-office-addr svg { flex-shrink: 0; color: #6366f1; margin-top: 2px; }
        .cp-clock-wrap { background: #f8faff; border: 1.5px solid #eef0f6; border-radius: 12px; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; }
        .cp-clock-label { font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: .08em; }
        .cp-clock { font-size: 18px; font-weight: 800; color: #0f172a; font-variant-numeric: tabular-nums; }

        /* ── CONTACT INFO ── */
        .cp-info-card { background: #fff; border: 1.5px solid #eef0f6; border-radius: 22px; padding: 28px; box-shadow: 0 4px 20px rgba(0,0,0,.05); }
        .cp-info-title { font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 20px; }
        .cp-info-row { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
        .cp-info-icon { width: 38px; height: 38px; border-radius: 11px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .cp-info-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: #94a3b8; margin-bottom: 2px; }
        .cp-info-value { font-size: 13.5px; font-weight: 600; color: #0f172a; }
        .cp-info-divider { height: 1px; background: #f1f5f9; margin: 16px 0; }
        .cp-social-row { display: flex; gap: 10px; }
        .cp-social-btn { width: 38px; height: 38px; border-radius: 11px; border: 1.5px solid #e2e8f0; background: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #64748b; transition: all .2s; text-decoration: none; }
        .cp-social-btn:hover { border-color: #c7d2fe; color: #6366f1; background: #eef2ff; transform: translateY(-2px); }

        /* ── FAQ ── */
        .cp-faq-wrap { position: relative; z-index: 1; background: #fff; border-top: 1px solid #eef0f6; padding: 80px 24px 100px; }
        .cp-faq-inner { max-width: 720px; margin: 0 auto; }
        .cp-faq-header { text-align: center; margin-bottom: 48px; }
        .cp-sh-title { font-size: clamp(26px,3vw,38px); font-weight: 800; color: #0f172a; letter-spacing: -.8px; margin-bottom: 12px; line-height: 1.2; }
        .cp-sh-title span { background: linear-gradient(90deg,#6366f1,#38bdf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .cp-sh-sub { font-size: 15px; color: #64748b; line-height: 1.7; }

        .cp-faq-item {
          background: #f8faff; border: 1.5px solid #eef0f6; border-radius: 16px;
          margin-bottom: 10px; overflow: hidden; transition: border-color .2s, box-shadow .2s;
          animation: cp-up .5s ease both;
        }
        .cp-faq-item--open { border-color: #c7d2fe; box-shadow: 0 8px 24px rgba(99,102,241,.08); }
        .cp-faq-q {
          width: 100%; background: transparent; border: none; cursor: pointer;
          font-family: 'Plus Jakarta Sans',sans-serif; font-size: 15px; font-weight: 700; color: #0f172a;
          padding: 20px 22px; display: flex; align-items: center; justify-content: space-between; gap: 12px; text-align: left;
        }
        .cp-faq-chevron { flex-shrink: 0; color: #6366f1; transition: transform .25s ease; }
        .cp-faq-item--open .cp-faq-chevron { transform: rotate(180deg); }
        .cp-faq-a { padding: 0 22px 20px; font-size: 14px; color: #64748b; line-height: 1.75; border-top: 1px solid #eef0f6; padding-top: 14px; }

        /* ── ANIMATIONS ── */
        @keyframes cp-up { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) { .cp-main { grid-template-columns: 1fr; } .cp-channels-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px)  { .cp-channels-grid { grid-template-columns: 1fr; } .cp-row { grid-template-columns: 1fr; } .cp-form-card { padding: 28px 20px; } .cp-dept-row { grid-template-columns: 1fr; } }
      `}</style>

        {/* ── HERO ── */}
        <div className='cp-hero'>
          <div className='cp-hero-inner'>
            <div>
              <span className='cp-eyebrow'>Contact Us</span>
            </div>
            <h1 className='cp-hero-title'>
              Let&apos;s build something
              <br />
              <span>great together</span>
            </h1>
            <p className='cp-hero-sub'>
              Whether you have a project in mind, need support, or just want to
              say hello —<br />
              we respond fast and we actually listen.
            </p>
          </div>
        </div>

        {/* ── CHANNELS ── */}
        <div className='cp-channels-wrap'>
          <div className='cp-channels-grid'>
            {CHANNELS.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className='cp-channel'
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <div
                    className='cp-ch-icon'
                    style={{ background: c.gradient }}
                  >
                    <Icon size={20} color='#fff' strokeWidth={1.6} />
                  </div>
                  <div className='cp-ch-label'>{c.label}</div>
                  <div className='cp-ch-desc'>{c.desc}</div>
                  <div className='cp-ch-response'>
                    <Clock size={11} /> Avg response: {c.response}
                  </div>
                  <a href={`mailto:${c.email}`} className='cp-ch-email'>
                    {c.email}
                  </a>
                  <div
                    className='cp-ch-bar'
                    style={{ background: c.gradient }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── MAIN: FORM + SIDEBAR ── */}
        <div className='cp-main'>
          {/* FORM */}
          <div className='cp-form-card'>
            {sent ? (
              <div className='cp-success'>
                <div className='cp-success-icon'>
                  <CheckCircle2 size={34} color='#fff' />
                </div>
                <div className='cp-success-title'>Message sent! 🎉</div>
                <p className='cp-success-sub'>
                  We got your message and will get back to you within a few
                  hours.
                </p>
                <button
                  className='cp-success-reset'
                  onClick={() => {
                    setSent(false);
                    setForm({
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                      department: "General Enquiry",
                    });
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className='cp-form-title'>Send us a message</div>
                <div className='cp-form-sub'>
                  Choose the right team, then fill in the details. We'll get
                  back to you fast.
                </div>

                {/* Department selector */}
                <div style={{ marginBottom: 24 }}>
                  <div className='cp-label' style={{ marginBottom: 10 }}>
                    Who should we route this to?
                  </div>
                  <div className='cp-dept-row'>
                    {CHANNELS.map((c) => {
                      const Icon = c.icon;
                      return (
                        <button
                          key={c.label}
                          type='button'
                          className={`cp-dept-btn${form.department === c.label ? " cp-dept-btn--active" : ""}`}
                          onClick={() => set("department", c.label)}
                        >
                          <Icon
                            size={13}
                            color={
                              form.department === c.label ? "#fff" : "#6366f1"
                            }
                          />
                          {c.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className='cp-row'>
                  <div className='cp-field'>
                    <label className='cp-label'>Your Name *</label>
                    <input
                      className='cp-input'
                      placeholder='John Smith'
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className='cp-field'>
                    <label className='cp-label'>Email Address *</label>
                    <input
                      className='cp-input'
                      type='email'
                      placeholder='john@company.com'
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className='cp-field'>
                  <label className='cp-label'>Subject</label>
                  <input
                    className='cp-input'
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={(e) => set("subject", e.target.value)}
                  />
                </div>

                <div className='cp-field'>
                  <label className='cp-label'>Message *</label>
                  <SmartTextarea
                    value={form.message}
                    onChange={(v) => set("message", v)}
                  />
                </div>

                <button type='submit' className='cp-submit' disabled={sending}>
                  {sending ? (
                    <>
                      <svg
                        width='18'
                        height='18'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2.5'
                        strokeLinecap='round'
                      >
                        <path d='M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83'>
                          <animateTransform
                            attributeName='transform'
                            type='rotate'
                            from='0 12 12'
                            to='360 12 12'
                            dur='.8s'
                            repeatCount='indefinite'
                          />
                        </path>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* SIDEBAR */}
          <div className='cp-sidebar'>
            {/* UNIQUE: Live office clock */}
            <div className='cp-offices'>
              <div className='cp-offices-title'>
                <Globe size={16} color='#6366f1' /> Our Offices
              </div>
              <div className='cp-office-tabs'>
                {OFFICES.map((o, i) => (
                  <button
                    key={o.city}
                    className={`cp-office-tab${activeOffice === i ? " cp-office-tab--active" : ""}`}
                    onClick={() => setActiveOffice(i)}
                  >
                    {o.flag} {o.city}
                  </button>
                ))}
              </div>
              {(() => {
                const o = OFFICES[activeOffice];
                return (
                  <div className='cp-office-body'>
                    <span className='cp-office-flag'>{o.flag}</span>
                    <div className='cp-office-city'>{o.city}</div>
                    <div className='cp-office-country'>
                      {o.country}{" "}
                      {o.primary && (
                        <span
                          style={{
                            fontSize: 10,
                            background: "rgba(99,102,241,.1)",
                            color: "#6366f1",
                            fontWeight: 700,
                            padding: "2px 8px",
                            borderRadius: 100,
                            marginLeft: 6,
                          }}
                        >
                          HQ
                        </span>
                      )}
                    </div>
                    <div className='cp-office-addr'>
                      <MapPin size={14} />
                      {o.address}
                    </div>
                    <div className='cp-clock-wrap'>
                      <div>
                        <div className='cp-clock-label'>
                          Local time right now
                        </div>
                      </div>
                      <LiveClock tz={o.tz} />
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Contact info */}
            <div className='cp-info-card'>
              <div className='cp-info-title'>Get in touch directly</div>
              {[
                {
                  icon: Mail,
                  grad: "linear-gradient(135deg,#6366f1,#818cf8)",
                  label: "Email",
                  value: "hello@devwhite.com",
                },
                {
                  icon: Phone,
                  grad: "linear-gradient(135deg,#34d399,#059669)",
                  label: "Phone",
                  value: "+880 1700-000000",
                },
                {
                  icon: Clock,
                  grad: "linear-gradient(135deg,#f97316,#ef4444)",
                  label: "Hours",
                  value: "Sun–Thu, 9am–6pm GMT+6",
                },
              ].map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.label} className='cp-info-row'>
                    <div
                      className='cp-info-icon'
                      style={{ background: row.grad }}
                    >
                      <Icon size={18} color='#fff' strokeWidth={1.6} />
                    </div>
                    <div>
                      <div className='cp-info-label'>{row.label}</div>
                      <div className='cp-info-value'>{row.value}</div>
                    </div>
                  </div>
                );
              })}
              <div className='cp-info-divider' />
              <div className='cp-info-label' style={{ marginBottom: 12 }}>
                Follow us
              </div>
              <div className='cp-social-row'>
                {[
                  { icon: Twitter, href: "#" },
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Globe, href: "#" },
                ].map(({ icon: Icon, href }, i) => (
                  <a key={i} href={href} className='cp-social-btn'>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className='cp-faq-wrap'>
          <div className='cp-faq-inner'>
            <div className='cp-faq-header'>
              <div>
                <span className='cp-eyebrow'>FAQ</span>
              </div>
              <h2 className='cp-sh-title'>
                Common <span>questions</span>
              </h2>
              <p className='cp-sh-sub'>
                Can't find what you're looking for? Send us a message above.
              </p>
            </div>
            {FAQS.map((f, i) => (
              <FaqItem key={i} item={f} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
