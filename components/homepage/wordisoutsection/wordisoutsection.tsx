"use client";

import AnimatedGrid from "../../shared/animatedgrid/animatedgrid";

const BUBBLES = [
  {
    name: "MongoDB",
    top: "4%",
    left: "0%",
    size: 130,
    delay: "0s",
    gradient: "linear-gradient(135deg,#00ed64,#00684a)",
    icon: (
      <svg width='36' height='36' viewBox='0 0 32 32' fill='none'>
        <path
          d='M16 2C16 2 9 11.5 9 18.5C9 22.6 12.1 26 16 26C19.9 26 23 22.6 23 18.5C23 11.5 16 2 16 2Z'
          fill='#00ED64'
        />
        <path
          d='M16 26V30'
          stroke='#00ED64'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <ellipse cx='16' cy='18' rx='3' ry='4' fill='#005a38' />
      </svg>
    ),
  },
  {
    name: "Express",
    top: "2%",
    left: "52%",
    size: 122,
    delay: "0.4s",
    gradient: "linear-gradient(135deg,#374151,#111827)",
    icon: (
      <svg width='44' height='22' viewBox='0 0 120 40' fill='none'>
        <text
          x='0'
          y='30'
          fontFamily='monospace'
          fontSize='30'
          fontWeight='800'
          fill='#f9fafb'
        >
          Ex
        </text>
      </svg>
    ),
  },
  {
    name: "React",
    top: "36%",
    left: "25%",
    size: 158,
    delay: "0.2s",
    gradient: "linear-gradient(135deg,#61dafb,#0284c7)",
    icon: (
      <svg width='48' height='48' viewBox='0 0 24 24' fill='none'>
        <circle cx='12' cy='12' r='2.8' fill='#61dafb' />
        <ellipse
          cx='12'
          cy='12'
          rx='10'
          ry='4'
          stroke='#61dafb'
          strokeWidth='1.5'
          fill='none'
        />
        <ellipse
          cx='12'
          cy='12'
          rx='10'
          ry='4'
          stroke='#61dafb'
          strokeWidth='1.5'
          fill='none'
          transform='rotate(60 12 12)'
        />
        <ellipse
          cx='12'
          cy='12'
          rx='10'
          ry='4'
          stroke='#61dafb'
          strokeWidth='1.5'
          fill='none'
          transform='rotate(120 12 12)'
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    top: "66%",
    left: "0%",
    size: 132,
    delay: "0.6s",
    gradient: "linear-gradient(135deg,#68a063,#215732)",
    icon: (
      <svg width='38' height='38' viewBox='0 0 32 32' fill='none'>
        <path
          d='M16 2L28 9V23L16 30L4 23V9L16 2Z'
          fill='#68a063'
          stroke='#215732'
          strokeWidth='1'
        />
        <path
          d='M11 20.5C11 21.5 11.8 22 13 22C14.5 22 15 21.2 15 20V13H13.5V20C13.5 20.4 13.3 20.6 13 20.6C12.7 20.6 12.5 20.4 12.5 20L11 20.5Z'
          fill='#fff'
        />
        <path
          d='M16.5 13V20.2C16.5 21.7 17.5 22.1 19 22C20.3 21.9 21 21.1 21 19.8V19H19.5V19.8C19.5 20.3 19.3 20.6 19 20.6C18.6 20.6 18.5 20.3 18.5 19.8V13H16.5Z'
          fill='#fff'
        />
      </svg>
    ),
  },
  {
    name: "PHP",
    top: "64%",
    left: "50%",
    size: 136,
    delay: "0.3s",
    gradient: "linear-gradient(135deg,#7c3aed,#4f46e5)",
    icon: (
      <svg width='52' height='28' viewBox='0 0 120 50' fill='none'>
        <rect
          x='0'
          y='0'
          width='120'
          height='50'
          rx='25'
          fill='rgba(255,255,255,0.15)'
        />
        <text
          x='14'
          y='36'
          fontFamily='monospace'
          fontSize='34'
          fontWeight='900'
          fill='#fff'
        >
          PHP
        </text>
      </svg>
    ),
  },
];

function LogoBubble({
  name,
  top,
  left,
  size,
  delay,
  gradient,
  icon,
}: {
  name: string;
  top: string;
  left: string;
  size: number;
  delay: string;
  gradient: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className='wow-bubble'
      style={{ top, left, width: size, height: size, animationDelay: delay }}
    >
      {/* Soft gradient ring */}
      <div className='wow-bubble__ring' style={{ background: gradient }} />
      <div className='wow-bubble__inner'>
        <div className='wow-bubble__icon'>{icon}</div>
        <span className='wow-bubble__name'>{name}</span>
      </div>
    </div>
  );
}

export default function WordIsOutSection() {
  return (
    <section
      className='wow-root'
      style={{
        background: "#f8faff",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <AnimatedGrid />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .wow-root * { box-sizing: border-box; margin: 0; padding: 0; }

        .wow-inner {
          position: relative;
          max-width: 1180px;
          margin: 0 auto;
          padding: 9px 24px 50px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 48px;
          z-index: 1;
        }

        /* ── Left: Text ── */
        .wow-left { position: relative; }

        .wow-eyebrow {
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
          margin-bottom: 24px;
        }
        .wow-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #6366f1;
          animation: wow-pulse 2s ease-in-out infinite;
        }
        @keyframes wow-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.5); }
        }

        .wow-title {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -1.2px;
          margin-bottom: 20px;
        }

        .wow-desc {
          font-size: 16px;
          color: #64748b;
          line-height: 1.75;
          max-width: 380px;
          margin-bottom: 36px;
        }

        .wow-stat {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 10px;
        }
        .wow-stat__num {
          font-size: 42px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -1.5px;
          line-height: 1;
        }
        .wow-stat__unit {
          font-size: 20px;
          font-weight: 700;
          color: #6366f1;
        }
        .wow-stat__label {
          font-size: 14px;
          color: #94a3b8;
          margin-left: 2px;
        }

        /* Decorative blobs on left */
        .wow-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        /* ── Right: Bubbles ── */
        .wow-right {
          position: relative;
          height: 420px;
        }

        .wow-bubble {
          position: absolute;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: wow-float 4s ease-in-out infinite;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          border: 1.5px solid #eef0f6;
        }
        .wow-bubble:hover {
          transform: translateY(-10px) scale(1.07) !important;
          box-shadow: 0 24px 56px rgba(99,102,241,0.16);
          border-color: #c7d2fe;
          z-index: 10;
        }

        /* Gradient ring behind bubble */
        .wow-bubble__ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          opacity: 0.15;
          pointer-events: none;
          transition: opacity 0.3s;
        }
        .wow-bubble:hover .wow-bubble__ring { opacity: 0.3; }

        @keyframes wow-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }

        .wow-bubble__inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 14px;
          text-align: center;
        }

        .wow-bubble__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .wow-bubble__name {
          font-size: 11.5px;
          font-weight: 700;
          color: #334155;
          letter-spacing: 0.02em;
          line-height: 1.3;
        }

        /* Decorative dots */
        .wow-dot {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .wow-inner {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .wow-right { height: 360px; }
        }
      `}</style>

      <div className='wow-inner'>
        {/* ── Left ── */}
        <div className='wow-left'>
          {/* Decorative blobs */}
          <div
            className='wow-blob'
            style={{
              width: 180,
              height: 180,
              background: "rgba(236,72,153,0.07)",
              bottom: -40,
              left: 60,
              filter: "blur(40px)",
            }}
          />

          <div>
            <span className='wow-eyebrow'>In the Press</span>
          </div>

          <h2 className='wow-title'>
            Full Stack.
            <br />
            Your Way.
          </h2>

          <p className='wow-desc'>
            We deliver expert solutions across the full stack — from PHP &amp;
            WordPress to modern MERN applications. Trusted by over 6 million
            businesses worldwide.
          </p>

          <div className='wow-stat'>
            <span className='wow-stat__num'>6M</span>
            <span className='wow-stat__unit'>+</span>
            <span className='wow-stat__label'>businesses trust us</span>
          </div>
        </div>

        {/* ── Right: Floating bubbles ── */}
        <div className='wow-right'>
          {/* Decorative dots */}
          <div
            className='wow-dot'
            style={{
              width: 10,
              height: 10,
              background: "#10b981",
              top: "8%",
              left: "0%",
              opacity: 0.6,
            }}
          />
          <div
            className='wow-dot'
            style={{
              width: 12,
              height: 12,
              background: "#f59e0b",
              top: "4%",
              right: "4%",
              opacity: 0.6,
            }}
          />
          <div
            className='wow-dot'
            style={{
              width: 9,
              height: 9,
              background: "#818cf8",
              bottom: "20%",
              left: "44%",
              opacity: 0.5,
            }}
          />

          {/* Bubbles */}
          {BUBBLES.map((b) => (
            <LogoBubble key={b.name} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
