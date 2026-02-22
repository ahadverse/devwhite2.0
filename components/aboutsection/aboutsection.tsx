"use client";

import { useState } from "react";
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
} from "lucide-react";
import AnimatedGrid from "../animatedgrid/animatedgrid";

/* ── Stats ─────────────────────────────────────────────── */
const STATS = [
  {
    value: "6M+",
    label: "Active Users",
    icon: Users,
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
  },
  {
    value: "12+",
    label: "Products Built",
    icon: Code2,
    gradient: "linear-gradient(135deg,#f97316,#ef4444)",
  },
  {
    value: "150+",
    label: "Countries Reached",
    icon: Globe,
    gradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    icon: Heart,
    gradient: "linear-gradient(135deg,#ec4899,#a855f7)",
  },
];

/* ── Core values ────────────────────────────────────────── */
const VALUES = [
  {
    icon: Zap,
    label: "Speed",
    desc: "We ship fast without compromising quality.",
  },
  {
    icon: Shield,
    label: "Trust",
    desc: "Transparent, honest and reliable at every step.",
  },
  {
    icon: Heart,
    label: "Empathy",
    desc: "We build products people genuinely love.",
  },
  {
    icon: Award,
    label: "Excellence",
    desc: "Obsessed with craft, detail and continuous improvement.",
  },
];

/* ── Team highlights ────────────────────────────────────── */
const TEAM = [
  {
    name: "DevWhite Team",
    role: "Product & Engineering",
    initials: "WT",
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
  },
  {
    name: "Design Studio",
    role: "UI/UX & Brand",
    initials: "DS",
    gradient: "linear-gradient(135deg,#ec4899,#f97316)",
  },
  {
    name: "Growth Division",
    role: "Marketing & Analytics",
    initials: "GD",
    gradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
  },
  {
    name: "Support Squad",
    role: "24/7 Customer Success",
    initials: "SS",
    gradient: "linear-gradient(135deg,#34d399,#059669)",
  },
];

function StatCard({ stat, index }: { stat: (typeof STATS)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = stat.icon;
  return (
    <div
      className='about-stat'
      style={{ animationDelay: `${index * 80}ms`, background: "#fff" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className='about-stat__icon'
        style={{
          background: stat.gradient,
          transform: hovered ? "scale(1.1) rotate(-5deg)" : "scale(1)",
        }}
      >
        <Icon size={20} color='#fff' strokeWidth={1.6} />
      </div>
      <div
        className='about-stat__value'
        style={{
          background: stat.gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {stat.value}
      </div>
      <div className='about-stat__label'>{stat.label}</div>
      <div
        className='about-stat__bar'
        style={{
          background: stat.gradient,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      style={{
        background: "#f8faff",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <AnimatedGrid color='rgba(15,23,42,0.028)' size={48} speed={14} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .about-root * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ─── HERO BAND ─────────────────────────────── */
        .about-hero {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 50px 24px 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* Left text */
        .about-eyebrow {
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
          margin-bottom: 22px;
        }
        .about-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #6366f1;
          animation: about-pulse 2s ease-in-out infinite;
        }
        @keyframes about-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.5); }
        }

        .about-title {
          font-size: clamp(32px, 4vw, 50px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -1px;
          margin-bottom: 20px;
        }
        .about-title span {
          background: linear-gradient(90deg,#6366f1,#38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-desc {
          font-size: 15.5px;
          color: #64748b;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .about-checks {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 36px;
        }
        .about-checks li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14.5px;
          color: #334155;
          font-weight: 500;
          line-height: 1.5;
        }
        .about-checks li svg { flex-shrink: 0; margin-top: 2px; color: #6366f1; }

        .about-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg,#6366f1,#818cf8);
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          padding: 13px 28px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(99,102,241,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .about-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(99,102,241,0.4);
        }

        /* Right visual card */
        .about-visual {
          position: relative;
          height: 420px;
        }

        .about-card-main {
          position: absolute;
          top: 0; left: 0; right: 40px;
          background: #fff;
          border-radius: 24px;
          border: 1.5px solid #e8edf5;
          padding: 28px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.07);
        }
        .about-card-main__label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 16px;
        }
        .about-card-main__title {
          font-size: 20px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .about-card-main__sub {
          font-size: 13px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* Mini team avatars */
        .about-avatars {
          display: flex;
          align-items: center;
          gap: 0;
          margin-bottom: 14px;
        }
        .about-avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 2.5px solid #fff;
          margin-left: -10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 800; color: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          flex-shrink: 0;
        }
        .about-avatar:first-child { margin-left: 0; }

        .about-avatar-label {
          font-size: 12px;
          color: #64748b;
          margin-left: 12px;
          font-weight: 500;
        }

        /* Progress bars */
        .about-bar-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .about-bar-item {}
        .about-bar-meta {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          margin-bottom: 5px;
        }
        .about-bar-track {
          height: 6px;
          background: #f1f5f9;
          border-radius: 100px;
          overflow: hidden;
        }
        .about-bar-fill {
          height: 100%;
          border-radius: 100px;
          animation: about-bar-grow 1.2s ease both;
          transform-origin: left;
        }
        @keyframes about-bar-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        /* Floating badge card */
        .about-badge {
          position: absolute;
          bottom: 24px;
          right: 0;
          background: #fff;
          border: 1.5px solid #e8edf5;
          border-radius: 16px;
          padding: 16px 20px;
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 12px;
          animation: about-float 3.5s ease-in-out infinite;
          z-index: 2;
        }
        @keyframes about-float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        .about-badge__icon {
          width: 40px; height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg,#f97316,#ef4444);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .about-badge__value {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1;
        }
        .about-badge__label {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 500;
        }

        /* ─── STATS ROW ─────────────────────────────── */
        .about-stats-wrap {
          position: relative;
          z-index: 1;
          background: #fff;
          border-top: 1px solid #eef0f6;
          border-bottom: 1px solid #eef0f6;
          padding: 56px 24px;
        }
        .about-stats-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 16px;
        }
        .about-stat {
          position: relative;
          border: 1.5px solid #eef0f6;
          border-radius: 18px;
          padding: 24px 20px;
          text-align: center;
          overflow: hidden;
          cursor: default;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          animation: about-fadeUp 0.5s ease both;
        }
        .about-stat:hover {
          border-color: #c7d2fe;
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(99,102,241,0.1);
        }
        .about-stat__icon {
          width: 46px; height: 46px;
          border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 14px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.13);
          transition: transform 0.3s;
          flex-shrink: 0;
        }
        .about-stat__value {
          font-size: 36px;
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1;
          margin-bottom: 6px;
        }
        .about-stat__label {
          font-size: 13px;
          color: #64748b;
          font-weight: 500;
        }
        .about-stat__bar {
          position: absolute;
          bottom: 0; left: 0;
          height: 3px; width: 100%;
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        /* ─── VALUES ────────────────────────────────── */
        .about-values-wrap {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 80px 24px 100px;
        }
        .about-section-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .about-section-title {
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.8px;
          margin-bottom: 12px;
        }
        .about-section-sub {
          font-size: 15px;
          color: #64748b;
          line-height: 1.7;
          max-width: 420px;
          margin: 0 auto;
        }
        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 16px;
          margin-bottom: 64px;
        }
        .about-value-card {
          background: #fff;
          border: 1.5px solid #eef0f6;
          border-radius: 18px;
          padding: 28px 22px;
          text-align: center;
          cursor: default;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          animation: about-fadeUp 0.5s ease both;
        }
        .about-value-card:hover {
          border-color: #ddd6fe;
          transform: translateY(-5px);
          box-shadow: 0 14px 36px rgba(99,102,241,0.1);
        }
        .about-value-icon {
          width: 52px; height: 52px;
          border-radius: 16px;
          background: linear-gradient(135deg,#6366f1,#818cf8);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
          box-shadow: 0 6px 18px rgba(99,102,241,0.25);
        }
        .about-value-label {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .about-value-desc {
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.6;
        }

        /* ─── TEAM ──────────────────────────────────── */
        .about-team-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 16px;
        }
        .about-team-card {
          background: #fff;
          border: 1.5px solid #eef0f6;
          border-radius: 18px;
          padding: 28px 20px;
          text-align: center;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          animation: about-fadeUp 0.5s ease both;
          cursor: default;
        }
        .about-team-card:hover {
          border-color: #c7d2fe;
          transform: translateY(-5px);
          box-shadow: 0 14px 36px rgba(99,102,241,0.1);
        }
        .about-team-avatar {
          width: 64px; height: 64px;
          border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; font-weight: 800; color: #fff;
          margin: 0 auto 14px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.14);
        }
        .about-team-name {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 5px;
        }
        .about-team-role {
          font-size: 12.5px;
          color: #94a3b8;
          font-weight: 500;
        }

        @keyframes about-fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* ─── Responsive ─────────────────────────── */
        @media (max-width: 1024px) {
          .about-hero { grid-template-columns: 1fr; }
          .about-visual { height: 360px; }
          .about-stats-inner,
          .about-values-grid,
          .about-team-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 560px) {
          .about-stats-inner,
          .about-values-grid,
          .about-team-grid { grid-template-columns: 1fr; }
          .about-visual { height: auto; min-height: 340px; }
        }
      `}</style>

      {/* ════ HERO ════ */}
      <div className='about-hero'>
        {/* Left */}
        <div>
          <div>
            <span className='about-eyebrow'>About Us</span>
          </div>
          <h2 className='about-title'>
            We build products
            <br />
            <span>the world relies on</span>
          </h2>
          <p className='about-desc'>
            DevWhite is a dedicated WordPress product company helping businesses
            grow with powerful plugins, SaaS tools, and full-stack development
            services — from PHP to the modern MERN stack.
          </p>
          <ul className='about-checks'>
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
          <a href='#' className='about-cta'>
            Our Story <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Right visual */}
        <div className='about-visual'>
          <div className='about-card-main'>
            <div className='about-card-main__label'>Our Expertise</div>
            <div className='about-card-main__title'>
              Trusted by millions worldwide
            </div>
            <div className='about-card-main__sub'>
              From solo developers to enterprise teams, our products power
              businesses globally.
            </div>

            {/* Avatar row */}
            <div className='about-avatars'>
              {[
                { init: "WD", grad: "linear-gradient(135deg,#6366f1,#8b5cf6)" },
                { init: "MJ", grad: "linear-gradient(135deg,#f97316,#ef4444)" },
                { init: "AS", grad: "linear-gradient(135deg,#38bdf8,#0284c7)" },
                { init: "RK", grad: "linear-gradient(135deg,#34d399,#059669)" },
              ].map((a) => (
                <div
                  key={a.init}
                  className='about-avatar'
                  style={{ background: a.grad }}
                >
                  {a.init}
                </div>
              ))}
              <span className='about-avatar-label'>+6M more users</span>
            </div>

            {/* Progress bars */}
            <div className='about-bar-row'>
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
                <div key={b.label} className='about-bar-item'>
                  <div className='about-bar-meta'>
                    <span>{b.label}</span>
                    <span>{b.pct}%</span>
                  </div>
                  <div className='about-bar-track'>
                    <div
                      className='about-bar-fill'
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

          {/* Floating badge */}
          <div className='about-badge'>
            <div className='about-badge__icon'>
              <TrendingUp size={20} color='#fff' strokeWidth={1.6} />
            </div>
            <div>
              <div className='about-badge__value'>6M+</div>
              <div className='about-badge__label'>Active users globally</div>
            </div>
          </div>
        </div>
      </div>

      {/* ════ STATS ════ */}
      <div className='about-stats-wrap'>
        <div className='about-stats-inner'>
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>

      {/* ════ VALUES + TEAM ════ */}
      <div className='about-values-wrap'>
        {/* Values */}
        <div className='about-section-header'>
          <h3 className='about-section-title'>What drives us</h3>
          <p className='about-section-sub'>
            Our core values shape every product, every line of code, and every
            customer interaction.
          </p>
        </div>
        <div className='about-values-grid'>
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.label}
                className='about-value-card'
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className='about-value-icon'>
                  <Icon size={22} color='#fff' strokeWidth={1.6} />
                </div>
                <div className='about-value-label'>{v.label}</div>
                <div className='about-value-desc'>{v.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Team */}
        <div className='about-section-header' style={{ marginBottom: 36 }}>
          <h3 className='about-section-title'>Meet the divisions</h3>
          <p className='about-section-sub'>
            Specialized teams working in harmony to deliver excellence at every
            touchpoint.
          </p>
        </div>
        <div className='about-team-grid'>
          {TEAM.map((t, i) => (
            <div
              key={t.name}
              className='about-team-card'
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div
                className='about-team-avatar'
                style={{ background: t.gradient }}
              >
                {t.initials}
              </div>
              <div className='about-team-name'>{t.name}</div>
              <div className='about-team-role'>{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
