"use client";

import { useState, useEffect, useRef } from "react";
import {
  Users,
  Globe,
  Award,
  TrendingUp,
  Heart,
  Code2,
  Zap,
  Shield,
  ArrowUpRight,
  CheckCircle2,
  Download,
  Star,
  GitBranch,
  Coffee,
  Rocket,
  Lightbulb,
  Target,
  MapPin,
  Calendar,
  ChevronDown,
} from "lucide-react";
import AnimatedGrid from "@/components/shared/animatedgrid/animatedgrid";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const STATS = [
  {
    value: "6M+",
    label: "Active Users",
    icon: Users,
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    end: 6,
  },
  {
    value: "12+",
    label: "Products Built",
    icon: Code2,
    gradient: "linear-gradient(135deg,#f97316,#ef4444)",
    end: 12,
  },
  {
    value: "150+",
    label: "Countries Reached",
    icon: Globe,
    gradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
    end: 150,
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    icon: Heart,
    gradient: "linear-gradient(135deg,#ec4899,#a855f7)",
    end: 99,
  },
];

const VALUES = [
  {
    icon: Zap,
    label: "Speed",
    desc: "We ship fast without compromising quality.",
    gradient: "linear-gradient(135deg,#f97316,#ef4444)",
  },
  {
    icon: Shield,
    label: "Trust",
    desc: "Transparent, honest and reliable at every step.",
    gradient: "linear-gradient(135deg,#6366f1,#818cf8)",
  },
  {
    icon: Heart,
    label: "Empathy",
    desc: "We build products people genuinely love.",
    gradient: "linear-gradient(135deg,#ec4899,#a855f7)",
  },
  {
    icon: Award,
    label: "Excellence",
    desc: "Obsessed with craft, detail and continuous improvement.",
    gradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
  },
];

const TEAM = [
  {
    name: "Engineering",
    role: "Product & Full-Stack Dev",
    initials: "ENG",
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    count: "12 members",
  },
  {
    name: "Design",
    role: "UI/UX & Brand Identity",
    initials: "DES",
    gradient: "linear-gradient(135deg,#ec4899,#f97316)",
    count: "5 members",
  },
  {
    name: "Growth",
    role: "Marketing & Analytics",
    initials: "GRW",
    gradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
    count: "4 members",
  },
  {
    name: "Support",
    role: "24/7 Customer Success",
    initials: "SUP",
    gradient: "linear-gradient(135deg,#34d399,#059669)",
    count: "8 members",
  },
];

/* ── TIMELINE ── */
const TIMELINE = [
  {
    year: "2013",
    label: "Founded",
    desc: "DevWhite was born in a small Dhaka office with 3 engineers and one big idea — make WordPress truly powerful.",
    icon: Rocket,
    color: "#6366f1",
  },
  {
    year: "2015",
    label: "First Product",
    desc: "Launched our flagship WordPress plugin, crossing 10,000 active installs within 60 days of launch.",
    icon: Star,
    color: "#f97316",
  },
  {
    year: "2017",
    label: "6-Figure MRR",
    desc: "Hit our first major revenue milestone. Expanded the team to 20 and opened a second office.",
    icon: TrendingUp,
    color: "#0284c7",
  },
  {
    year: "2019",
    label: "Global Reach",
    desc: "Products now used in 80+ countries. Launched enterprise tier and onboarded Fortune 500 clients.",
    icon: Globe,
    color: "#059669",
  },
  {
    year: "2021",
    label: "MERN Division",
    desc: "Expanded beyond WordPress into full-stack MERN development and launched our SaaS consulting arm.",
    icon: Code2,
    color: "#a855f7",
  },
  {
    year: "2023",
    label: "6M Users",
    desc: "Crossed 6 million active users across all products. Recognised as a top-10 WordPress product company.",
    icon: Users,
    color: "#ec4899",
  },
  {
    year: "2026",
    label: "What's Next",
    desc: "AI-powered developer tools, deeper integrations, and a new product line launching Q3 2026.",
    icon: Lightbulb,
    color: "#f59e0b",
  },
];

/* ── OPEN SOURCE LIVE COUNTERS ── */
const OS_STATS = [
  {
    icon: Download,
    label: "Total Downloads",
    value: 48_320_441,
    suffix: "",
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    speed: 13,
  },
  {
    icon: Star,
    label: "GitHub Stars",
    value: 12_847,
    suffix: "",
    gradient: "linear-gradient(135deg,#f59e0b,#f97316)",
    speed: 4,
  },
  {
    icon: GitBranch,
    label: "Forks",
    value: 3_214,
    suffix: "",
    gradient: "linear-gradient(135deg,#34d399,#0284c7)",
    speed: 1,
  },
  {
    icon: Coffee,
    label: "Commits This Year",
    value: 9_830,
    suffix: "",
    gradient: "linear-gradient(135deg,#ec4899,#a855f7)",
    speed: 3,
  },
];

/* ══════════════════════════════════════════
   ANIMATED COUNTER HOOK
══════════════════════════════════════════ */
function useCountUp(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  const ref = useRef(false);
  useEffect(() => {
    if (ref.current) return;
    ref.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(ease * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);
  return val;
}

/* ══════════════════════════════════════════
   STAT CARD
══════════════════════════════════════════ */
function StatCard({ stat, index }: { stat: (typeof STATS)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = stat.icon;
  return (
    <div
      className='ap-stat'
      style={{ animationDelay: `${index * 80}ms`, background: "#fff" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className='ap-stat__icon'
        style={{
          background: stat.gradient,
          transform: hovered ? "scale(1.1) rotate(-5deg)" : "scale(1)",
        }}
      >
        <Icon size={20} color='#fff' strokeWidth={1.6} />
      </div>
      <div
        className='ap-stat__value'
        style={{
          background: stat.gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {stat.value}
      </div>
      <div className='ap-stat__label'>{stat.label}</div>
      <div
        className='ap-stat__bar'
        style={{
          background: stat.gradient,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </div>
  );
}

/* ══════════════════════════════════════════
   LIVE OS COUNTER CARD
══════════════════════════════════════════ */
function OsCard({
  stat,
  index,
}: {
  stat: (typeof OS_STATS)[0];
  index: number;
}) {
  const [started, setStarted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);
  const count = useCountUp(started ? stat.value : 0, 2200);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 },
    );
    if (elRef.current) obs.observe(elRef.current);
    return () => obs.disconnect();
  }, []);

  // live ticker: increment by speed every second
  const [live, setLive] = useState(0);
  useEffect(() => {
    if (!started) return;
    const id = setInterval(() => setLive((p) => p + stat.speed), 1000);
    return () => clearInterval(id);
  }, [started, stat.speed]);

  const Icon = stat.icon;
  const display = (count + live).toLocaleString();

  return (
    <div
      ref={elRef}
      className='ap-os-card'
      style={{ animationDelay: `${index * 90}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='ap-os-card__top'>
        <div
          className='ap-os-icon'
          style={{
            background: stat.gradient,
            transform: hovered ? "scale(1.1) rotate(-6deg)" : "scale(1)",
          }}
        >
          <Icon size={20} color='#fff' strokeWidth={1.6} />
        </div>
        <span className='ap-os-live'>
          <span className='ap-os-dot' />
          LIVE
        </span>
      </div>
      <div
        className='ap-os-value'
        style={{
          background: stat.gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {display}
      </div>
      <div className='ap-os-label'>{stat.label}</div>
      <div
        className='ap-os-bar'
        style={{
          background: stat.gradient,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </div>
  );
}

/* ══════════════════════════════════════════
   TIMELINE ITEM
══════════════════════════════════════════ */
function TimelineItem({
  item,
  index,
  total,
}: {
  item: (typeof TIMELINE)[0];
  index: number;
  total: number;
}) {
  const [open, setOpen] = useState(index === 0);
  const Icon = item.icon;
  const isLast = index === total - 1;
  return (
    <div
      className={`ap-tl-item${isLast ? " ap-tl-item--future" : ""}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Spine line */}
      {!isLast && (
        <div
          className='ap-tl-spine'
          style={{
            background: `linear-gradient(180deg, ${item.color}44, transparent)`,
          }}
        />
      )}

      {/* Dot */}
      <div
        className='ap-tl-dot'
        style={{
          background: item.color,
          boxShadow: `0 0 0 4px ${item.color}22`,
        }}
      >
        <Icon size={14} color='#fff' strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className='ap-tl-content' onClick={() => setOpen((o) => !o)}>
        <div className='ap-tl-head'>
          <div>
            <span className='ap-tl-year' style={{ color: item.color }}>
              {item.year}
            </span>
            <div className='ap-tl-label'>{item.label}</div>
          </div>
          <ChevronDown
            size={16}
            color='#94a3b8'
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
              flexShrink: 0,
            }}
          />
        </div>
        {open && <p className='ap-tl-desc'>{item.desc}</p>}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════ */
export default function AboutPage() {
  return (
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
        .ap-hero {
          position: relative; z-index: 1;
          max-width: 1180px; margin: 0 auto;
          padding: 80px 24px 60px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: center;
        }
        .ap-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11.5px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
          color: #6366f1; background: rgba(99,102,241,.08); border: 1px solid rgba(99,102,241,.2);
          padding: 6px 16px; border-radius: 100px; margin-bottom: 22px;
        }
        .ap-eyebrow::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%; background: #6366f1;
          animation: ap-pulse 2s ease-in-out infinite;
        }
        @keyframes ap-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.5)} }
        .ap-title { font-size: clamp(32px,4vw,52px); font-weight: 800; color: #0f172a; line-height: 1.13; letter-spacing: -1.2px; margin-bottom: 20px; }
        .ap-title span { background: linear-gradient(90deg,#6366f1,#38bdf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ap-desc { font-size: 15.5px; color: #64748b; line-height: 1.8; margin-bottom: 32px; }
        .ap-checks { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 36px; }
        .ap-checks li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: #334155; font-weight: 500; line-height: 1.5; }
        .ap-checks li svg { flex-shrink: 0; margin-top: 2px; color: #6366f1; }
        .ap-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg,#6366f1,#818cf8); color: #fff;
          font-family: 'Plus Jakarta Sans',sans-serif; font-size: 14px; font-weight: 700;
          padding: 13px 28px; border-radius: 100px; border: none; cursor: pointer;
          box-shadow: 0 6px 20px rgba(99,102,241,.3);
          transition: transform .2s, box-shadow .2s; text-decoration: none;
        }
        .ap-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(99,102,241,.4); }

        /* Right card */
        .ap-visual { position: relative; height: 420px; }
        .ap-card-main {
          position: absolute; top: 0; left: 0; right: 40px;
          background: #fff; border-radius: 24px; border: 1.5px solid #e8edf5;
          padding: 28px; box-shadow: 0 12px 40px rgba(0,0,0,.07);
        }
        .ap-card-main__label { font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #94a3b8; margin-bottom: 16px; }
        .ap-card-main__title { font-size: 20px; font-weight: 800; color: #0f172a; margin-bottom: 8px; }
        .ap-card-main__sub { font-size: 13px; color: #64748b; line-height: 1.6; margin-bottom: 20px; }
        .ap-avatars { display: flex; align-items: center; gap: 0; margin-bottom: 14px; }
        .ap-avatar { width: 36px; height: 36px; border-radius: 50%; border: 2.5px solid #fff; margin-left: -10px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; color: #fff; box-shadow: 0 2px 8px rgba(0,0,0,.12); flex-shrink: 0; }
        .ap-avatar:first-child { margin-left: 0; }
        .ap-avatar-label { font-size: 12px; color: #64748b; margin-left: 12px; font-weight: 500; }
        .ap-bar-row { display: flex; flex-direction: column; gap: 10px; }
        .ap-bar-meta { display: flex; justify-content: space-between; font-size: 12px; font-weight: 600; color: #475569; margin-bottom: 5px; }
        .ap-bar-track { height: 6px; background: #f1f5f9; border-radius: 100px; overflow: hidden; }
        .ap-bar-fill { height: 100%; border-radius: 100px; animation: ap-bar-grow 1.2s ease both; transform-origin: left; }
        @keyframes ap-bar-grow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        .ap-badge {
          position: absolute; bottom: 24px; right: 0;
          background: #fff; border: 1.5px solid #e8edf5; border-radius: 16px;
          padding: 16px 20px; box-shadow: 0 12px 32px rgba(0,0,0,.1);
          display: flex; align-items: center; gap: 12px;
          animation: ap-float 3.5s ease-in-out infinite; z-index: 2;
        }
        @keyframes ap-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .ap-badge__icon { width: 40px; height: 40px; border-radius: 12px; background: linear-gradient(135deg,#f97316,#ef4444); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ap-badge__value { font-size: 18px; font-weight: 800; color: #0f172a; line-height: 1; }
        .ap-badge__label { font-size: 11px; color: #94a3b8; font-weight: 500; }

        /* ── STATS STRIP ── */
        .ap-stats-wrap { position: relative; z-index: 1; background: #fff; border-top: 1px solid #eef0f6; border-bottom: 1px solid #eef0f6; padding: 56px 24px; }
        .ap-stats-inner { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .ap-stat { position: relative; border: 1.5px solid #eef0f6; border-radius: 18px; padding: 24px 20px; text-align: center; overflow: hidden; cursor: default; transition: border-color .25s, transform .25s, box-shadow .25s; animation: ap-fadeUp .5s ease both; }
        .ap-stat:hover { border-color: #c7d2fe; transform: translateY(-5px); box-shadow: 0 16px 40px rgba(99,102,241,.1); }
        .ap-stat__icon { width: 46px; height: 46px; border-radius: 13px; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; box-shadow: 0 4px 14px rgba(0,0,0,.13); transition: transform .3s; flex-shrink: 0; }
        .ap-stat__value { font-size: 36px; font-weight: 800; letter-spacing: -1px; line-height: 1; margin-bottom: 6px; }
        .ap-stat__label { font-size: 13px; color: #64748b; font-weight: 500; }
        .ap-stat__bar { position: absolute; bottom: 0; left: 0; height: 3px; width: 100%; transform-origin: left; transition: transform .35s ease; }

        /* ── SECTION COMMON ── */
        .ap-section { position: relative; z-index: 1; max-width: 1180px; margin: 0 auto; padding: 80px 24px; }
        .ap-section-header { text-align: center; margin-bottom: 52px; }
        .ap-sh-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 11.5px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: #6366f1; background: rgba(99,102,241,.08); border: 1px solid rgba(99,102,241,.2); padding: 6px 16px; border-radius: 100px; margin-bottom: 16px; }
        .ap-sh-eyebrow::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #6366f1; animation: ap-pulse 2s ease-in-out infinite; }
        .ap-sh-title { font-size: clamp(26px,3vw,40px); font-weight: 800; color: #0f172a; letter-spacing: -.8px; margin-bottom: 12px; line-height: 1.2; }
        .ap-sh-title span { background: linear-gradient(90deg,#6366f1,#ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ap-sh-sub { font-size: 15px; color: #64748b; line-height: 1.7; max-width: 440px; margin: 0 auto; }

        /* ── VALUES ── */
        .ap-values-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .ap-value-card { background: #fff; border: 1.5px solid #eef0f6; border-radius: 18px; padding: 28px 22px; text-align: center; cursor: default; transition: border-color .25s, transform .25s, box-shadow .25s; animation: ap-fadeUp .5s ease both; }
        .ap-value-card:hover { border-color: #ddd6fe; transform: translateY(-5px); box-shadow: 0 14px 36px rgba(99,102,241,.1); }
        .ap-value-icon { width: 52px; height: 52px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; box-shadow: 0 6px 18px rgba(0,0,0,.12); }
        .ap-value-label { font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
        .ap-value-desc { font-size: 13px; color: #94a3b8; line-height: 1.6; }

        /* ── TEAM ── */
        .ap-team-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .ap-team-card { background: #fff; border: 1.5px solid #eef0f6; border-radius: 18px; padding: 28px 20px; text-align: center; cursor: default; transition: border-color .25s, transform .25s, box-shadow .25s; animation: ap-fadeUp .5s ease both; }
        .ap-team-card:hover { border-color: #c7d2fe; transform: translateY(-5px); box-shadow: 0 14px 36px rgba(99,102,241,.1); }
        .ap-team-avatar { width: 64px; height: 64px; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 800; color: #fff; margin: 0 auto 14px; box-shadow: 0 8px 24px rgba(0,0,0,.14); }
        .ap-team-name { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
        .ap-team-role { font-size: 12.5px; color: #94a3b8; font-weight: 500; margin-bottom: 8px; }
        .ap-team-count { font-size: 11.5px; font-weight: 700; color: #6366f1; background: rgba(99,102,241,.08); border: 1px solid rgba(99,102,241,.18); padding: 3px 10px; border-radius: 100px; display: inline-block; }

        /* ══════════════════════════════════
           UNIQUE FEATURE 1: TIMELINE
        ══════════════════════════════════ */
        .ap-tl-wrap { position: relative; z-index: 1; background: #fff; border-top: 1px solid #eef0f6; border-bottom: 1px solid #eef0f6; padding: 80px 0; }
        .ap-tl-inner { max-width: 720px; margin: 0 auto; padding: 0 24px; }
        .ap-tl-item {
          position: relative;
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 20px;
          padding-bottom: 32px;
          animation: ap-fadeUp .5s ease both;
        }
        .ap-tl-item--future .ap-tl-content { opacity: .65; }
        .ap-tl-spine {
          position: absolute;
          left: 23px; top: 48px;
          width: 2px; bottom: 0;
          pointer-events: none;
        }
        .ap-tl-dot {
          width: 48px; height: 48px; border-radius: 15px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 20px rgba(0,0,0,.12);
          position: relative; z-index: 1;
          transition: transform .2s;
        }
        .ap-tl-item:hover .ap-tl-dot { transform: scale(1.1) rotate(-6deg); }
        .ap-tl-content {
          background: #f8faff; border: 1.5px solid #eef0f6; border-radius: 16px;
          padding: 18px 20px; cursor: pointer;
          transition: border-color .2s, box-shadow .2s;
        }
        .ap-tl-content:hover { border-color: #c7d2fe; box-shadow: 0 8px 24px rgba(99,102,241,.08); }
        .ap-tl-head { display: flex; justify-content: space-between; align-items: flex-start; }
        .ap-tl-year { font-size: 11px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 3px; display: block; }
        .ap-tl-label { font-size: 16px; font-weight: 800; color: #0f172a; }
        .ap-tl-desc { font-size: 13.5px; color: #64748b; line-height: 1.7; margin-top: 12px; padding-top: 12px; border-top: 1px solid #eef0f6; }

        /* ══════════════════════════════════
           UNIQUE FEATURE 2: LIVE OS STATS
        ══════════════════════════════════ */
        .ap-os-wrap { position: relative; z-index: 1; }
        .ap-os-banner {
          background: linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f172a 100%);
          position: relative; overflow: hidden; padding: 72px 24px;
        }
        .ap-os-banner::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 20% 50%, rgba(99,102,241,.2), transparent 60%),
                      radial-gradient(ellipse at 80% 50%, rgba(236,72,153,.15), transparent 60%);
          pointer-events: none;
        }
        .ap-os-inner { position: relative; z-index: 1; max-width: 1180px; margin: 0 auto; }
        .ap-os-header { text-align: center; margin-bottom: 48px; }
        .ap-os-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11.5px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
          color: rgba(255,255,255,.7); background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.15);
          padding: 6px 16px; border-radius: 100px; margin-bottom: 16px;
        }
        .ap-os-eyebrow::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #34d399; animation: ap-pulse 2s ease-in-out infinite; }
        .ap-os-title { font-size: clamp(26px,3vw,40px); font-weight: 800; color: #fff; letter-spacing: -.8px; line-height: 1.2; margin-bottom: 10px; }
        .ap-os-sub { font-size: 15px; color: rgba(255,255,255,.55); line-height: 1.7; max-width: 400px; margin: 0 auto; }

        .ap-os-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .ap-os-card {
          background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.12);
          border-radius: 20px; padding: 24px 20px; position: relative; overflow: hidden;
          cursor: default; transition: background .25s, transform .25s, border-color .25s;
          animation: ap-fadeUp .5s ease both;
        }
        .ap-os-card:hover { background: rgba(255,255,255,.12); border-color: rgba(255,255,255,.22); transform: translateY(-4px); }
        .ap-os-card__top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
        .ap-os-icon { width: 44px; height: 44px; border-radius: 13px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(0,0,0,.2); transition: transform .3s; flex-shrink: 0; }
        .ap-os-live { display: inline-flex; align-items: center; gap: 5px; font-size: 10px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: #34d399; background: rgba(52,211,153,.12); border: 1px solid rgba(52,211,153,.25); padding: 3px 10px; border-radius: 100px; }
        .ap-os-dot { width: 6px; height: 6px; border-radius: 50%; background: #34d399; animation: ap-pulse 1.5s ease-in-out infinite; }
        .ap-os-value { font-size: 30px; font-weight: 800; letter-spacing: -1px; line-height: 1; margin-bottom: 6px; font-variant-numeric: tabular-nums; }
        .ap-os-label { font-size: 12.5px; color: rgba(255,255,255,.5); font-weight: 500; }
        .ap-os-bar { position: absolute; bottom: 0; left: 0; height: 2px; width: 100%; transform-origin: left; transition: transform .35s ease; }

        /* ── MISSION BAND ── */
        .ap-mission { position: relative; z-index: 1; }
        .ap-mission-inner {
          max-width: 1180px; margin: 0 auto; padding: 80px 24px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
        }
        .ap-mission-text {}
        .ap-mission-quote {
          font-size: clamp(20px,2.5vw,28px); font-weight: 800; color: #0f172a;
          line-height: 1.4; letter-spacing: -.5px; margin-bottom: 24px;
          position: relative; padding-left: 24px;
        }
        .ap-mission-quote::before {
          content: ''; position: absolute; left: 0; top: 4px; bottom: 4px;
          width: 4px; border-radius: 4px;
          background: linear-gradient(180deg,#6366f1,#ec4899);
        }
        .ap-mission-sub { font-size: 15px; color: #64748b; line-height: 1.8; margin-bottom: 28px; }
        .ap-mission-loc { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: #64748b; }
        .ap-mission-loc svg { color: #6366f1; }

        .ap-mission-cards { display: flex; flex-direction: column; gap: 14px; }
        .ap-mission-card {
          background: #fff; border: 1.5px solid #eef0f6; border-radius: 16px;
          padding: 20px 22px; display: flex; align-items: flex-start; gap: 14px;
          transition: border-color .2s, transform .2s, box-shadow .2s; cursor: default;
        }
        .ap-mission-card:hover { border-color: #c7d2fe; transform: translateX(4px); box-shadow: 0 8px 24px rgba(99,102,241,.08); }
        .ap-mc-icon { width: 42px; height: 42px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,.1); }
        .ap-mc-label { font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 3px; }
        .ap-mc-desc { font-size: 12.5px; color: #94a3b8; line-height: 1.5; }

        /* ── ANIMATIONS ── */
        @keyframes ap-fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .ap-hero { grid-template-columns: 1fr; }
          .ap-visual { height: 360px; }
          .ap-stats-inner, .ap-values-grid, .ap-team-grid, .ap-os-grid { grid-template-columns: repeat(2,1fr); }
          .ap-mission-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .ap-stats-inner, .ap-values-grid, .ap-team-grid, .ap-os-grid { grid-template-columns: 1fr; }
          .ap-visual { height: auto; min-height: 340px; }
        }
      `}</style>

      {/* ════ HERO ════ */}
      <div className='ap-hero'>
        <div>
          <div>
            <span className='ap-eyebrow'>About DevWhite</span>
          </div>
          <h1 className='ap-title'>
            We build products
            <br />
            <span>the world relies on</span>
          </h1>
          <p className='ap-desc'>
            DevWhite is a dedicated WordPress product company helping businesses
            grow with powerful plugins, SaaS tools, and full-stack development
            services — from PHP to the modern MERN stack.
          </p>
          <ul className='ap-checks'>
            {[
              "12+ battle-tested WordPress products",
              "Expert PHP & MERN full-stack teams",
              "Trusted by 6M+ users across 150+ countries",
              "Continuous support, updates & innovation",
            ].map((item) => (
              <li key={item}>
                <CheckCircle2 size={17} />
                {item}
              </li>
            ))}
          </ul>
          <a href='#' className='ap-cta'>
            Our Story <ArrowUpRight size={16} />
          </a>
        </div>

        <div className='ap-visual'>
          <div className='ap-card-main'>
            <div className='ap-card-main__label'>Our Expertise</div>
            <div className='ap-card-main__title'>
              Trusted by millions worldwide
            </div>
            <div className='ap-card-main__sub'>
              From solo developers to enterprise teams, our products power
              businesses globally.
            </div>
            <div className='ap-avatars'>
              {[
                { init: "WD", grad: "linear-gradient(135deg,#6366f1,#8b5cf6)" },
                { init: "MJ", grad: "linear-gradient(135deg,#f97316,#ef4444)" },
                { init: "AS", grad: "linear-gradient(135deg,#38bdf8,#0284c7)" },
                { init: "RK", grad: "linear-gradient(135deg,#34d399,#059669)" },
              ].map((a) => (
                <div
                  key={a.init}
                  className='ap-avatar'
                  style={{ background: a.grad }}
                >
                  {a.init}
                </div>
              ))}
              <span className='ap-avatar-label'>+6M more users</span>
            </div>
            <div className='ap-bar-row'>
              {[
                {
                  label: "WordPress",
                  pct: 92,
                  grad: "linear-gradient(90deg,#6366f1,#818cf8)",
                  delay: "0.1s",
                },
                {
                  label: "MERN Stack",
                  pct: 85,
                  grad: "linear-gradient(90deg,#38bdf8,#0284c7)",
                  delay: "0.25s",
                },
                {
                  label: "PHP / Laravel",
                  pct: 88,
                  grad: "linear-gradient(90deg,#a855f7,#7c3aed)",
                  delay: "0.4s",
                },
              ].map((b) => (
                <div key={b.label}>
                  <div className='ap-bar-meta'>
                    <span>{b.label}</span>
                    <span>{b.pct}%</span>
                  </div>
                  <div className='ap-bar-track'>
                    <div
                      className='ap-bar-fill'
                      style={{
                        width: `${b.pct}%`,
                        background: b.grad,
                        animationDelay: b.delay,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='ap-badge'>
            <div className='ap-badge__icon'>
              <TrendingUp size={20} color='#fff' strokeWidth={1.6} />
            </div>
            <div>
              <div className='ap-badge__value'>6M+</div>
              <div className='ap-badge__label'>Active users globally</div>
            </div>
          </div>
        </div>
      </div>

      {/* ════ STATS ════ */}
      <div className='ap-stats-wrap'>
        <div className='ap-stats-inner'>
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>

      {/* ════ MISSION ════ */}
      <div className='ap-mission'>
        <div className='ap-mission-inner'>
          <div className='ap-mission-text'>
            <div>
              <span className='ap-eyebrow'>Our Mission</span>
            </div>
            <p className='ap-mission-quote'>
              "To build software that empowers entrepreneurs, developers and
              businesses to do more — without the complexity."
            </p>
            <p className='ap-mission-sub'>
              Since 2013, we have obsessed over making powerful software
              accessible. Every product we ship is designed to save time,
              eliminate friction and unlock growth for the people who use it
              every day.
            </p>
            <div className='ap-mission-loc'>
              <MapPin size={15} /> Headquartered in Dhaka, Bangladesh ·
              Remote-first team
            </div>
          </div>
          <div className='ap-mission-cards'>
            {[
              {
                icon: Target,
                grad: "linear-gradient(135deg,#6366f1,#818cf8)",
                label: "User-First",
                desc: "Every feature is validated with real users before it ships.",
              },
              {
                icon: Rocket,
                grad: "linear-gradient(135deg,#f97316,#ef4444)",
                label: "Built to Scale",
                desc: "Architecture that grows from startup to enterprise without rewrites.",
              },
              {
                icon: Calendar,
                grad: "linear-gradient(135deg,#34d399,#059669)",
                label: "Long-Term Support",
                desc: "We maintain and update every product — some for 10+ years.",
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className='ap-mission-card'>
                  <div className='ap-mc-icon' style={{ background: c.grad }}>
                    <Icon size={20} color='#fff' strokeWidth={1.6} />
                  </div>
                  <div>
                    <div className='ap-mc-label'>{c.label}</div>
                    <div className='ap-mc-desc'>{c.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ════ UNIQUE #1: LIVE OPEN SOURCE COUNTERS ════ */}
      <div className='ap-os-wrap'>
        <div className='ap-os-banner'>
          <div className='ap-os-inner'>
            <div className='ap-os-header'>
              <div>
                <span className='ap-os-eyebrow'>Open Source Impact</span>
              </div>
              <h2 className='ap-os-title'>
                Numbers that grow
                <br />
                while you read this
              </h2>
              <p className='ap-os-sub'>
                Our open-source contributions update in real time — every
                second, someone downloads a DevWhite product.
              </p>
            </div>
            <div className='ap-os-grid'>
              {OS_STATS.map((s, i) => (
                <OsCard key={s.label} stat={s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════ VALUES ════ */}
      <div className='ap-section'>
        <div className='ap-section-header'>
          <div>
            <span className='ap-sh-eyebrow'>Core Values</span>
          </div>
          <h2 className='ap-sh-title'>
            What <span>drives us</span>
          </h2>
          <p className='ap-sh-sub'>
            Our values shape every product, every line of code, and every
            customer interaction.
          </p>
        </div>
        <div className='ap-values-grid'>
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.label}
                className='ap-value-card'
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div
                  className='ap-value-icon'
                  style={{ background: v.gradient }}
                >
                  <Icon size={22} color='#fff' strokeWidth={1.6} />
                </div>
                <div className='ap-value-label'>{v.label}</div>
                <div className='ap-value-desc'>{v.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ════ UNIQUE #2: INTERACTIVE TIMELINE ════ */}
      <div className='ap-tl-wrap'>
        <div className='ap-tl-inner'>
          <div
            className='ap-section-header'
            style={{ textAlign: "center", marginBottom: 52 }}
          >
            <div>
              <span className='ap-sh-eyebrow'>Our Journey</span>
            </div>
            <h2 className='ap-sh-title'>
              From a small office
              <br />
              to <span>6 million users</span>
            </h2>
            <p className='ap-sh-sub'>
              Click any milestone to expand the story behind it.
            </p>
          </div>
          {TIMELINE.map((item, i) => (
            <TimelineItem
              key={item.year}
              item={item}
              index={i}
              total={TIMELINE.length}
            />
          ))}
        </div>
      </div>

      {/* ════ TEAM ════ */}
      <div
        className='ap-section'
        style={{ paddingTop: 80, paddingBottom: 100 }}
      >
        <div className='ap-section-header'>
          <div>
            <span className='ap-sh-eyebrow'>The Team</span>
          </div>
          <h2 className='ap-sh-title'>
            Meet the <span>divisions</span>
          </h2>
          <p className='ap-sh-sub'>
            Specialized teams working in harmony to deliver excellence at every
            touchpoint.
          </p>
        </div>
        <div className='ap-team-grid'>
          {TEAM.map((t, i) => (
            <div
              key={t.name}
              className='ap-team-card'
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div
                className='ap-team-avatar'
                style={{ background: t.gradient }}
              >
                {t.initials}
              </div>
              <div className='ap-team-name'>{t.name}</div>
              <div className='ap-team-role'>{t.role}</div>
              <span className='ap-team-count'>{t.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
