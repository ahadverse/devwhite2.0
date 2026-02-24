"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedGrid from "../../shared/animatedgrid/animatedgrid";

const TESTIMONIALS = [
  {
    quote:
      "Dokan completely transformed our eCommerce business. Setting up our marketplace took days, not months. The support team is world-class.",
    name: "Sarah Mitchell",
    role: "Founder, ShopHub",
    rating: 5,
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    initials: "SM",
    tag: "eCommerce",
  },
  {
    quote:
      "Their MERN development team delivered our SaaS MVP on time and under budget. The code quality is exceptional and the architecture is rock-solid.",
    name: "James Okafor",
    role: "CTO, LaunchPad Inc.",
    rating: 5,
    gradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
    initials: "JO",
    tag: "SaaS",
  },
  {
    quote:
      "Happy Addons saved us weeks of design work. The widgets are polished, performant and the team ships updates remarkably fast.",
    name: "Priya Sharma",
    role: "Lead Designer, CreativeWave",
    rating: 5,
    gradient: "linear-gradient(135deg,#ec4899,#a855f7)",
    initials: "PS",
    tag: "Design",
  },
  {
    quote:
      "WP ERP automated our entire HR and accounting workflow. We saved 20+ hours every week. Genuinely one of the best investments we have made.",
    name: "Ahmed Al-Rashid",
    role: "CEO, Nexus Group",
    rating: 5,
    gradient: "linear-gradient(135deg,#34d399,#059669)",
    initials: "AA",
    tag: "Enterprise",
  },
  {
    quote:
      "FlyWP made server management a breeze for our agency. We deploy client sites in minutes now instead of hours. Absolutely love the product.",
    name: "Laura Chen",
    role: "Agency Owner, PixelForge",
    rating: 5,
    gradient: "linear-gradient(135deg,#f97316,#ef4444)",
    initials: "LC",
    tag: "Agency",
  },
  {
    quote:
      "weMail is the most seamless email marketing tool we have used with WordPress. The automation flows are powerful and the UI is a joy to use.",
    name: "David Muller",
    role: "Marketing Head, GrowthBase",
    rating: 5,
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    initials: "DM",
    tag: "Marketing",
  },
  {
    quote:
      "The PHP and Laravel expertise of the weDevs team is unmatched. They rebuilt our legacy system cleanly, the performance improvement was night and day.",
    name: "Oliver Barnes",
    role: "CTO, DataBridge Solutions",
    rating: 5,
    gradient: "linear-gradient(135deg,#7c3aed,#4f46e5)",
    initials: "OB",
    tag: "PHP",
  },
  {
    quote:
      "weDocs helped us create beautiful documentation that our customers actually read. Our support tickets dropped by 40% in the first month.",
    name: "Rena Kobayashi",
    role: "Product Manager, Syncraft",
    rating: 5,
    gradient: "linear-gradient(135deg,#60a5fa,#2563eb)",
    initials: "RK",
    tag: "Documentation",
  },
  {
    quote:
      "The UI/UX team redesigned our entire dashboard. User engagement jumped 60% and churn dropped significantly. Incredible attention to detail.",
    name: "Marcus Webb",
    role: "Head of Product, Vaultly",
    rating: 5,
    gradient: "linear-gradient(135deg,#ec4899,#f97316)",
    initials: "MW",
    tag: "UI/UX",
  },
  {
    quote:
      "Klasio got our online academy live in record time. The LMS features are rock-solid and our students love the seamless learning experience.",
    name: "Sofia Andersen",
    role: "Founder, EduVerse",
    rating: 5,
    gradient: "linear-gradient(135deg,#2dd4bf,#0891b2)",
    initials: "SA",
    tag: "EdTech",
  },
  {
    quote:
      "Appsero simplified our WordPress plugin licensing completely. Deployment, analytics and updates in one place — it is a game changer for plugin authors.",
    name: "Carlos Mendez",
    role: "Plugin Developer, WPSphere",
    rating: 5,
    gradient: "linear-gradient(135deg,#818cf8,#6366f1)",
    initials: "CM",
    tag: "WordPress",
  },
  {
    quote:
      "wePOS transformed our retail checkout experience. It is blazing fast with WooCommerce and the offline mode saved us during connectivity issues.",
    name: "Fatima Al-Zahra",
    role: "Operations Director, RetailHub",
    rating: 5,
    gradient: "linear-gradient(135deg,#fb7185,#e11d48)",
    initials: "FZ",
    tag: "Retail",
  },
];

const VISIBLE = 3;
const total = TESTIMONIALS.length;

// Clone last VISIBLE at front, first VISIBLE at back for infinite loop
const cloned = [
  ...TESTIMONIALS.slice(total - VISIBLE),
  ...TESTIMONIALS,
  ...TESTIMONIALS.slice(0, VISIBLE),
];
const START = VISIBLE; // real index 0 sits at position VISIBLE in cloned array

export default function TestimonialsSection() {
  const [pos, setPos] = useState(START); // position in cloned array
  const [animated, setAnimated] = useState(true);
  const isJumping = useRef(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // real dot index (0 – total-1)
  const dotIndex = (((pos - START) % total) + total) % total;

  /* ── Auto-play ── */
  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setAnimated(true);
      setPos((p) => p + 1);
    }, 4500);
  }, []);

  useEffect(() => {
    startAuto();
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [startAuto]);

  /* ── Infinite jump after transition ── */
  const onTransitionEnd = useCallback(() => {
    if (isJumping.current) return;

    let jump: number | null = null;
    if (pos >= START + total) jump = pos - total; // went past end clone → jump to real start
    if (pos < START) jump = pos + total; // went before front clone → jump to real end

    if (jump !== null) {
      isJumping.current = true;
      setAnimated(false);
      setPos(jump);
      // re-enable animation after one rAF pair so the DOM has painted
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimated(true);
          isJumping.current = false;
        }),
      );
    }
  }, [pos]);

  /* ── Controls ── */
  const go = (delta: number) => {
    setAnimated(true);
    setPos((p) => p + delta);
    startAuto();
  };

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        background: "#f8faff",
      }}
    >
      <AnimatedGrid />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .ts-wrap { position:relative; z-index:1; max-width:1180px; margin:0 auto; padding:96px 24px 112px; }

        /* Header */
        .ts-header { display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:52px; flex-wrap:wrap; gap:24px; }
        .ts-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          font-size:11.5px; font-weight:700; letter-spacing:.12em; text-transform:uppercase;
          color:#6366f1; background:rgba(99,102,241,.08); border:1px solid rgba(99,102,241,.2);
          padding:6px 16px; border-radius:100px; margin-bottom:16px;
        }
        .ts-eyebrow::before {
          content:''; width:6px; height:6px; border-radius:50%; background:#6366f1;
          animation:ts-pulse 2s ease-in-out infinite;
        }
        @keyframes ts-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.5)} }
        .ts-title { font-size:clamp(28px,3.5vw,44px); font-weight:800; color:#0f172a; line-height:1.15; letter-spacing:-1px; margin-bottom:10px; }
        .ts-title span { background:linear-gradient(90deg,#6366f1,#ec4899); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .ts-sub { font-size:15px; color:#64748b; line-height:1.7; max-width:360px; }

        /* Controls */
        .ts-controls { display:flex; align-items:center; gap:10px; flex-shrink:0; }
        .ts-counter { font-size:13px; font-weight:700; color:#94a3b8; min-width:52px; text-align:center; letter-spacing:.04em; }
        .ts-btn {
          width:48px; height:48px; border-radius:50%; border:1.5px solid #e2e8f0; background:#fff;
          display:flex; align-items:center; justify-content:center; cursor:pointer; color:#64748b;
          transition:all .22s ease; flex-shrink:0; box-shadow:0 2px 8px rgba(0,0,0,.06);
        }
        .ts-btn:hover { background:linear-gradient(135deg,#6366f1,#818cf8); border-color:transparent; color:#fff; transform:scale(1.08); box-shadow:0 8px 22px rgba(99,102,241,.32); }
        .ts-btn:active { transform:scale(.96); }

        /* Slider */
        .ts-outer { overflow:hidden; }
        .ts-track { display:flex; will-change:transform; }
        .ts-slide { flex-shrink:0; width:calc(100% / 3); padding:0 10px 6px; }

        /* Card */
        .ts-card {
          background:#fff; border:1.5px solid #eef0f6; border-radius:22px; padding:28px 24px;
          display:flex; flex-direction:column; gap:14px; cursor:default; height:100%;
          transition:border-color .25s, transform .25s, box-shadow .25s; position:relative; overflow:hidden;
        }
        .ts-card:hover { border-color:#c7d2fe; transform:translateY(-5px); box-shadow:0 20px 48px rgba(99,102,241,.11); }
        .ts-accent { position:absolute; top:0; left:0; right:0; height:3px; border-radius:22px 22px 0 0; }
        .ts-top { display:flex; align-items:center; justify-content:space-between; }
        .ts-qicon { width:38px; height:38px; border-radius:11px; background:linear-gradient(135deg,#6366f1,#818cf8); display:flex; align-items:center; justify-content:center; flex-shrink:0; box-shadow:0 4px 12px rgba(99,102,241,.25); }
        .ts-stars { display:flex; gap:3px; }
        .ts-tag { font-size:10.5px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:#6366f1; background:rgba(99,102,241,.08); border:1px solid rgba(99,102,241,.18); padding:3px 10px; border-radius:100px; align-self:flex-start; }
        .ts-text { font-size:14px; color:#334155; line-height:1.78; font-style:italic; flex:1; }
        .ts-author { display:flex; align-items:center; gap:12px; padding-top:14px; border-top:1px solid #f1f5f9; }
        .ts-avatar { width:44px; height:44px; border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:800; color:#fff; flex-shrink:0; box-shadow:0 4px 14px rgba(0,0,0,.13); }
        .ts-name { font-size:14px; font-weight:700; color:#0f172a; margin-bottom:3px; }
        .ts-role { font-size:12px; color:#94a3b8; font-weight:500; }

        /* Dots */
        .ts-dots { display:flex; justify-content:center; align-items:center; gap:8px; margin-top:40px; }
        .ts-dot { height:8px; border-radius:100px; border:none; cursor:pointer; background:#e2e8f0; transition:all .3s ease; padding:0; }
        .ts-dot--active { background:linear-gradient(90deg,#6366f1,#818cf8); box-shadow:0 2px 10px rgba(99,102,241,.35); }

        @media (max-width:900px)  { .ts-slide { width:50% !important; } }
        @media (max-width:560px)  { .ts-slide { width:100% !important; padding:0 0 6px; } .ts-header { flex-direction:column; align-items:flex-start; } }
      `}</style>

      <div className='ts-wrap'>
        {/* Header */}
        <div className='ts-header'>
          <div>
            <div>
              <span className='ts-eyebrow'>Testimonials</span>
            </div>
            <h2 className='ts-title'>
              Loved by <span>thousands</span>
              <br />
              of teams
            </h2>
            <p className='ts-sub'>
              Don&apos;t take our word for it — hear directly from the
              businesses we&apos;ve helped grow.
            </p>
          </div>
          <div className='ts-controls'>
            <span className='ts-counter'>
              {String(dotIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <button
              className='ts-btn'
              onClick={() => go(-1)}
              aria-label='Previous'
            >
              <ChevronLeft size={20} strokeWidth={2.2} />
            </button>
            <button className='ts-btn' onClick={() => go(1)} aria-label='Next'>
              <ChevronRight size={20} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className='ts-outer'>
          <div
            className='ts-track'
            style={{
              transform: `translateX(-${(pos / VISIBLE) * 100}%)`,
              transition: animated
                ? "transform 0.58s cubic-bezier(0.4,0,0.2,1)"
                : "none",
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {cloned.map((t, i) => (
              <div key={i} className='ts-slide'>
                <div className='ts-card'>
                  <div
                    className='ts-accent'
                    style={{ background: t.gradient }}
                  />
                  <div className='ts-top'>
                    <div className='ts-qicon'>
                      <Quote size={16} color='#fff' strokeWidth={1.6} />
                    </div>
                    <div className='ts-stars'>
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star
                          key={s}
                          size={13}
                          fill='#f59e0b'
                          color='#f59e0b'
                        />
                      ))}
                    </div>
                  </div>
                  <span className='ts-tag'>{t.tag}</span>
                  <p className='ts-text'>&ldquo;{t.quote}&rdquo;</p>
                  <div className='ts-author'>
                    <div
                      className='ts-avatar'
                      style={{ background: t.gradient }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className='ts-name'>{t.name}</div>
                      <div className='ts-role'>{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className='ts-dots'>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`ts-dot${i === dotIndex ? " ts-dot--active" : ""}`}
              style={{ width: i === dotIndex ? 28 : 8 }}
              onClick={() => {
                setAnimated(true);
                setPos(START + i);
                startAuto();
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
