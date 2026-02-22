"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Package, Download, Smile, Globe } from "lucide-react";
import AnimatedGrid from "../animatedgrid/animatedgrid";

/* ── Count-up hook ── */
function useCountUp(target: number, duration = 1800, started = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return val;
}

/* ── Intersection observer hook ── */
function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

/* ── Single stat card ── */
interface StatProps {
  icon: React.ReactNode;
  iconBg: string;
  value: number;
  suffix: string;
  label: string;
  delay: number;
  started: boolean;
}

function StatCard({
  icon,
  iconBg,
  value,
  suffix,
  label,
  delay,
  started,
}: StatProps) {
  const count = useCountUp(value, 1600, started);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        padding: "32px 20px",
        background: "#fff",
        borderRadius: 20,
        border: "1px solid rgba(15,23,42,0.07)",
        boxShadow: "0 2px 24px rgba(15,23,42,0.05)",
        flex: "1 1 160px",
        minWidth: 140,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms, box-shadow .25s`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 40px rgba(37,99,235,0.12)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 2px 24px rgba(15,23,42,0.05)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
        }}
      >
        {icon}
      </div>

      {/* Number */}
      <div
        style={{
          fontFamily: "'Syne', system-ui, sans-serif",
          fontSize: "clamp(38px, 4vw, 32px)",
          fontWeight: 800,
          color: "#0f172a",
          letterSpacing: "-1.5px",
          lineHeight: 1,
        }}
      >
        {count}
        {suffix}
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: 13,
          color: "#94a3b8",
          fontWeight: 500,
          textAlign: "center",
          lineHeight: 1.4,
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ── Main Section ── */
const STATS = [
  {
    icon: <Users size={26} color='#f97316' />,
    iconBg: "rgba(249,115,22,0.10)",
    value: 98,
    suffix: "+",
    label: "Team Members",
  },
  {
    icon: <Package size={26} color='#8b5cf6' />,
    iconBg: "rgba(139,92,246,0.10)",
    value: 20,
    suffix: "+",
    label: "Amazing Products",
  },
  {
    icon: <Download size={26} color='#10b981' />,
    iconBg: "rgba(16,185,129,0.10)",
    value: 85,
    suffix: "M+",
    label: "Free Downloads",
  },
  {
    icon: <Smile size={26} color='#3b82f6' />,
    iconBg: "rgba(59,130,246,0.10)",
    value: 424,
    suffix: "k+",
    label: "Happy Customers",
  },
  {
    icon: <Globe size={26} color='#06b6d4' />,
    iconBg: "rgba(6,182,212,0.10)",
    value: 160,
    suffix: "+",
    label: "Countries Worldwide",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null!);
  const inView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "100px 24px",
        background: "#f8fafc",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>

      {/* stats */}
      <AnimatedGrid />

      {/* White card container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 960,
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: 24,
          border: "1px solid rgba(15,23,42,0.07)",
          boxShadow: "0 4px 60px rgba(15,23,42,0.06)",
          padding: "56px 48px",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 52,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity .6s ease, transform .6s ease",
          }}
        >
          <h2
            style={{
              fontFamily: "'Syne', system-ui, sans-serif",
              fontSize: "clamp(22px, 3.5vw, 36px)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.5px",
              margin: 0,
            }}
          >
            <span
              style={{
                background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Company
            </span>{" "}
            at a Glance
          </h2>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 48,
            height: 3,
            background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
            borderRadius: 99,
            margin: "-32px auto 48px",
            opacity: inView ? 1 : 0,
            transition: "opacity .6s ease .15s",
          }}
        />

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {STATS.map((s, i) => (
            <StatCard
              key={s.label}
              icon={s.icon}
              iconBg={s.iconBg}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              delay={i * 80}
              started={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
