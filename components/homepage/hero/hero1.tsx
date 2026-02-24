// "use client";

// import {
//   useEffect,
//   useRef,
//   useState,
//   type CSSProperties,
//   type ReactNode,
// } from "react";
// import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";

// /* ── Mouse parallax hook ─────────────────────────────────── */
// function useMouse() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   useEffect(() => {
//     const fn = (e: MouseEvent) => {
//       setPos({
//         x: (e.clientX / window.innerWidth - 0.5) * 2,
//         y: (e.clientY / window.innerHeight - 0.5) * 2,
//       });
//     };
//     window.addEventListener("mousemove", fn);
//     return () => window.removeEventListener("mousemove", fn);
//   }, []);
//   return pos;
// }

// /* ── Particle canvas ─────────────────────────────────────── */
// function ParticleCanvas() {
//   const ref = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = ref.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;
//     let raf: number;

//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const particles = Array.from({ length: 120 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       r: Math.random() * 1.5 + 0.3,
//       dx: (Math.random() - 0.5) * 0.35,
//       dy: (Math.random() - 0.5) * 0.35,
//       opacity: Math.random() * 0.6 + 0.1,
//     }));

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 100) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(96,165,250,${(1 - dist / 100) * 0.15})`;
//             ctx.lineWidth = 0.5;
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//       particles.forEach((p) => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(148,163,184,${p.opacity})`;
//         ctx.fill();
//         p.x += p.dx;
//         p.y += p.dy;
//         if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
//       });
//       raf = requestAnimationFrame(draw);
//     };
//     draw();

//     return () => {
//       cancelAnimationFrame(raf);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={ref}
//       style={{
//         position: "absolute",
//         inset: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: 0,
//       }}
//     />
//   );
// }

// /* ── Floating 3D card ────────────────────────────────────── */
// interface CardProps {
//   icon: ReactNode;
//   title: string;
//   value: string;
//   color: string;
//   glowColor: string;
//   x: number;
//   y: number;
//   depth: number;
//   mouse: { x: number; y: number };
//   delay: string;
// }

// function FloatingCard({
//   icon,
//   title,
//   value,
//   color,
//   glowColor,
//   x,
//   y,
//   depth,
//   mouse,
//   delay,
// }: CardProps) {
//   const tx = mouse.x * depth * 28;
//   const ty = mouse.y * depth * 18;
//   const rx = -mouse.y * 12;
//   const ry = mouse.x * 12;

//   return (
//     <div
//       className='hero-floating-card'
//       style={{
//         position: "absolute",
//         left: `${x}%`,
//         top: `${y}%`,
//         transform: `translate(${tx}px, ${ty}px) perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`,
//         transition: "transform 0.08s linear",
//         animation: `floatCard 4s ease-in-out infinite ${delay}`,
//         zIndex: 2,
//       }}
//     >
//       <div
//         style={{
//           background: "rgba(15,23,42,0.75)",
//           backdropFilter: "blur(16px)",
//           border: `1px solid ${color}33`,
//           borderRadius: 16,
//           padding: "16px 20px",
//           minWidth: 160,
//           boxShadow: `0 8px 40px ${glowColor}22, inset 0 1px 0 rgba(255,255,255,0.06)`,
//         }}
//       >
//         <div
//           style={{
//             width: 40,
//             height: 40,
//             borderRadius: 10,
//             background: `${color}18`,
//             border: `1px solid ${color}44`,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             marginBottom: 10,
//             color,
//           }}
//         >
//           {icon}
//         </div>
//         <div
//           style={{
//             fontSize: 11,
//             color: "#64748b",
//             fontWeight: 600,
//             letterSpacing: "0.08em",
//             textTransform: "uppercase" as const,
//             marginBottom: 4,
//           }}
//         >
//           {title}
//         </div>
//         <div
//           style={{
//             fontSize: 20,
//             fontWeight: 800,
//             color: "#f1f5f9",
//             letterSpacing: -0.5,
//           }}
//         >
//           {value}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ── Wireframe cube ──────────────────────────────────────── */
// interface CubeProps {
//   mouse: { x: number; y: number };
//   extraStyle?: CSSProperties;
// }

// type FaceKey = "front" | "back" | "left" | "right" | "top" | "bottom";

// const FACES: FaceKey[] = ["front", "back", "left", "right", "top", "bottom"];

// const faceTransforms: Record<FaceKey, string> = {
//   front: "translateZ(40px)",
//   back: "rotateY(180deg) translateZ(40px)",
//   left: "rotateY(-90deg) translateZ(40px)",
//   right: "rotateY(90deg) translateZ(40px)",
//   top: "rotateX(90deg) translateZ(40px)",
//   bottom: "rotateX(-90deg) translateZ(40px)",
// };

// function WireframeCube({ mouse, extraStyle }: CubeProps) {
//   const ry = mouse.x * 40;
//   const rx = -mouse.y * 25;

//   return (
//     <div
//       className='hero-cube'
//       style={{
//         width: 80,
//         height: 80,
//         transformStyle: "preserve-3d" as const,
//         transform: `perspective(400px) rotateX(${rx}deg) rotateY(${ry}deg)`,
//         transition: "transform 0.12s linear",
//         position: "absolute",
//         ...extraStyle,
//       }}
//     >
//       {FACES.map((face) => (
//         <div
//           key={face}
//           style={{
//             position: "absolute",
//             width: 80,
//             height: 80,
//             border: "1px solid rgba(96,165,250,0.25)",
//             background: "rgba(96,165,250,0.02)",
//             transform: faceTransforms[face],
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// /* ── Main Hero ───────────────────────────────────────────── */
// export default function HeroSection() {
//   const mouse = useMouse();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 100);
//     return () => clearTimeout(t);
//   }, []);

//   const headingX = mouse.x * -8;
//   const headingY = mouse.y * -5;

//   const slideUp = (delay: string): CSSProperties => ({
//     animation: mounted ? `slideUp 0.8s ease both ${delay}` : "none",
//     opacity: mounted ? 1 : 0,
//   });

//   return (
//     <section
//       style={{
//         position: "relative",
//         minHeight: "100vh",
//         background:
//           "radial-gradient(ellipse 80% 60% at 50% 0%, #0f1d35 0%, #060b14 60%, #020408 100%)",
//         overflow: "hidden",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontFamily: "'Syne', system-ui, sans-serif",
//         padding: "60px 16px 60px",
//         boxSizing: "border-box" as const,
//       }}
//     >
//       {/* Fonts + animations */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

//         @keyframes floatCard {
//           0%,100% { translate: 0 0px; }
//           50%      { translate: 0 -10px; }
//         }
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(40px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes glowPulse {
//           0%,100% { opacity: 0.5; transform: scale(1); }
//           50%      { opacity: 0.9; transform: scale(1.08); }
//         }
//         @keyframes gridMove {
//           from { background-position: 0 0; }
//           to   { background-position: 48px 48px; }
//         }
//         @keyframes dotBlink {
//           0%,100% { opacity:1; box-shadow: 0 0 8px #60a5fa; }
//           50%      { opacity:.4; box-shadow: none; }
//         }
//         @media (max-width: 768px) {
//           .hero-floating-card { display: none !important; }
//           .hero-cube { display: none !important; }
//           .hero-buttons { flex-direction: column !important; align-items: center !important; }
//           .hero-buttons a { width: 100% !important; justify-content: center !important; max-width: 300px; }
//           .hero-stats { gap: 24px !important; }
//         }
//       `}</style>

//       {/* Animated grid */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           zIndex: 0,
//           backgroundImage: `
//           linear-gradient(rgba(96,165,250,0.04) 1px, transparent 1px),
//           linear-gradient(90deg, rgba(96,165,250,0.04) 1px, transparent 1px)
//         `,
//           backgroundSize: "48px 48px",
//           animation: "gridMove 8s linear infinite",
//         }}
//       />

//       {/* Particles */}
//       <ParticleCanvas />

//       {/* Glow orbs */}
//       <div
//         style={{
//           position: "absolute",
//           top: "10%",
//           left: "20%",
//           width: 500,
//           height: 500,
//           background:
//             "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
//           borderRadius: "50%",
//           animation: "glowPulse 6s ease-in-out infinite",
//           zIndex: 0,
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           bottom: "10%",
//           right: "15%",
//           width: 400,
//           height: 400,
//           background:
//             "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)",
//           borderRadius: "50%",
//           animation: "glowPulse 8s ease-in-out infinite 2s",
//           zIndex: 0,
//         }}
//       />

//       {/* Wireframe cubes */}
//       <WireframeCube
//         mouse={mouse}
//         extraStyle={{ top: "15%", left: "8%", opacity: 0.6 }}
//       />
//       <WireframeCube
//         mouse={mouse}
//         extraStyle={{
//           bottom: "20%",
//           right: "8%",
//           opacity: 0.4,
//           width: 50,
//           height: 50,
//         }}
//       />

//       {/* Floating cards */}
//       <FloatingCard
//         mouse={mouse}
//         depth={0.4}
//         delay='0s'
//         icon={<Code size={18} />}
//         title='Projects Done'
//         value='500+'
//         color='#60a5fa'
//         glowColor='#3b82f6'
//         x={4}
//         y={22}
//       />
//       <FloatingCard
//         mouse={mouse}
//         depth={0.6}
//         delay='0.8s'
//         icon={<Smartphone size={18} />}
//         title='Mobile Apps'
//         value='120+'
//         color='#34d399'
//         glowColor='#10b981'
//         x={72}
//         y={15}
//       />
//       <FloatingCard
//         mouse={mouse}
//         depth={0.3}
//         delay='1.6s'
//         icon={<Globe size={18} />}
//         title='Countries'
//         value='30+'
//         color='#f472b6'
//         glowColor='#ec4899'
//         x={76}
//         y={62}
//       />

//       {/* Center content */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 3,
//           textAlign: "center",
//           maxWidth: 820,
//           width: "100%",
//           padding: "0 16px",
//           transform: `translate(${headingX}px, ${headingY}px)`,
//           transition: "transform 0.1s linear",
//         }}
//       >
//         {/* Badge */}
//         <div
//           style={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: 8,
//             background: "rgba(37,99,235,0.12)",
//             border: "1px solid rgba(96,165,250,0.25)",
//             borderRadius: 999,
//             padding: "6px 16px",
//             marginBottom: 32,
//             ...slideUp("0.1s"),
//           }}
//         >
//           <span
//             style={{
//               width: 6,
//               height: 6,
//               borderRadius: "50%",
//               background: "#60a5fa",
//               display: "inline-block",
//               animation: "dotBlink 1.5s ease-in-out infinite",
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: 600,
//               color: "#93c5fd",
//               letterSpacing: "0.1em",
//               textTransform: "uppercase" as const,
//             }}
//           >
//             Software Development Company
//           </span>
//         </div>

//         {/* Heading */}
//         <h1
//           style={{
//             fontFamily: "'Syne', system-ui, sans-serif",
//             fontSize: "clamp(32px, 7vw, 84px)",
//             fontWeight: 800,
//             lineHeight: 1.05,
//             letterSpacing: "-2px",
//             color: "#f8fafc",
//             margin: "0 0 24px",
//             ...slideUp("0.25s"),
//           }}
//         >
//           We Build{" "}
//           <span
//             style={{
//               background:
//                 "linear-gradient(90deg, #60a5fa 0%, #34d399 50%, #818cf8 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Digital
//           </span>
//           <br />
//           Products That{" "}
//           <span
//             style={{
//               background: "linear-gradient(90deg, #f472b6, #fb923c)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Matter
//           </span>
//         </h1>

//         {/* Subtitle */}
//         <p
//           style={{
//             fontFamily: "'DM Sans', system-ui, sans-serif",
//             fontSize: "clamp(15px, 2vw, 18px)",
//             color: "#94a3b8",
//             lineHeight: 1.7,
//             maxWidth: 560,
//             margin: "0 auto 40px",
//             width: "100%",
//             fontWeight: 300,
//             ...slideUp("0.4s"),
//           }}
//         >
//           From concept to launch — we craft scalable web apps, mobile solutions,
//           and SaaS products that drive real business growth.
//         </p>

//         {/* CTA buttons */}
//         <div
//           className='hero-buttons'
//           style={{
//             display: "flex",
//             gap: 14,
//             justifyContent: "center",
//             flexWrap: "wrap",
//             ...slideUp("0.55s"),
//           }}
//         >
//           <a
//             href='#'
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 8,
//               padding: "14px 32px",
//               background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
//               color: "#fff",
//               borderRadius: 12,
//               fontSize: 15,
//               fontWeight: 700,
//               textDecoration: "none",
//               boxShadow: "0 8px 32px rgba(37,99,235,0.4)",
//               transition: "transform .2s, box-shadow .2s",
//               fontFamily: "'DM Sans', sans-serif",
//             }}
//             // onMouseEnter={(e) => {
//             //   e.currentTarget.style.transform = "translateY(-2px)";
//             //   e.currentTarget.style.boxShadow =
//             //     "0 12px 40px rgba(37,99,235,0.55)";
//             // }}
//             // onMouseLeave={(e) => {
//             //   e.currentTarget.style.transform = "translateY(0)";
//             //   e.currentTarget.style.boxShadow =
//             //     "0 8px 32px rgba(37,99,235,0.4)";
//             // }}
//           >
//             Get Started <ArrowRight size={16} />
//           </a>
//           <a
//             href='#'
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 8,
//               padding: "14px 32px",
//               background: "rgba(255,255,255,0.05)",
//               color: "#e2e8f0",
//               border: "1px solid rgba(255,255,255,0.12)",
//               borderRadius: 12,
//               fontSize: 15,
//               fontWeight: 600,
//               textDecoration: "none",
//               backdropFilter: "blur(8px)",
//               transition: "background .2s, border-color .2s",
//               fontFamily: "'DM Sans', sans-serif",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = "rgba(255,255,255,0.09)";
//               e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = "rgba(255,255,255,0.05)";
//               e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
//             }}
//           >
//             View Our Work
//           </a>
//         </div>

//         {/* Stats */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "clamp(20px, 5vw, 40px)",
//             marginTop: 60,
//             flexWrap: "wrap",
//             ...slideUp("0.7s"),
//           }}
//         >
//           {(
//             [
//               { num: "500+", label: "Projects Delivered" },
//               { num: "10+", label: "Years Experience" },
//               { num: "98%", label: "Client Satisfaction" },
//             ] as const
//           ).map(({ num, label }) => (
//             <div key={label} style={{ textAlign: "center" }}>
//               <div
//                 style={{
//                   fontFamily: "'Syne', sans-serif",
//                   fontSize: 32,
//                   fontWeight: 800,
//                   color: "#f1f5f9",
//                   letterSpacing: -1,
//                 }}
//               >
//                 {num}
//               </div>
//               <div
//                 style={{
//                   fontFamily: "'DM Sans', sans-serif",
//                   fontSize: 12,
//                   color: "#64748b",
//                   fontWeight: 500,
//                   letterSpacing: "0.06em",
//                   textTransform: "uppercase" as const,
//                 }}
//               >
//                 {label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom fade */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           right: 0,
//           height: 120,
//           background: "linear-gradient(to top, #020408, transparent)",
//           zIndex: 2,
//         }}
//       />
//     </section>
//   );
// }
"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";
import AnimatedGrid from "../../shared/animatedgrid/animatedgrid";

/* ── Mouse parallax hook ─────────────────────────────────── */
function useMouse() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return pos;
}

/* ── Particle canvas ─────────────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.4 + 0.08,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59,130,246,${(1 - dist / 100) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100,116,139,${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}

/* ── Floating 3D card ────────────────────────────────────── */
interface CardProps {
  icon: ReactNode;
  title: string;
  value: string;
  color: string;
  glowColor: string;
  x: number;
  y: number;
  depth: number;
  mouse: { x: number; y: number };
  delay: string;
}

function FloatingCard({
  icon,
  title,
  value,
  color,
  glowColor,
  x,
  y,
  depth,
  mouse,
  delay,
}: CardProps) {
  const tx = mouse.x * depth * 28;
  const ty = mouse.y * depth * 18;
  const rx = -mouse.y * 12;
  const ry = mouse.x * 12;

  return (
    <div
      className='hero-floating-card'
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(${tx}px, ${ty}px) perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`,
        transition: "transform 0.08s linear",
        animation: `floatCard 4s ease-in-out infinite ${delay}`,
        zIndex: 2,
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${color}22`,
          borderRadius: 16,
          padding: "16px 20px",
          minWidth: 160,
          boxShadow: `0 8px 40px ${glowColor}18, 0 1px 3px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)`,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: `${color}12`,
            border: `1px solid ${color}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            color,
          }}
        >
          {icon}
        </div>
        <div
          style={{
            fontSize: 11,
            color: "#94a3b8",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            marginBottom: 4,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: "#0f172a",
            letterSpacing: -0.5,
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

/* ── Wireframe cube ──────────────────────────────────────── */
interface CubeProps {
  mouse: { x: number; y: number };
  extraStyle?: CSSProperties;
}

type FaceKey = "front" | "back" | "left" | "right" | "top" | "bottom";

const FACES: FaceKey[] = ["front", "back", "left", "right", "top", "bottom"];

const faceTransforms: Record<FaceKey, string> = {
  front: "translateZ(40px)",
  back: "rotateY(180deg) translateZ(40px)",
  left: "rotateY(-90deg) translateZ(40px)",
  right: "rotateY(90deg) translateZ(40px)",
  top: "rotateX(90deg) translateZ(40px)",
  bottom: "rotateX(-90deg) translateZ(40px)",
};

function WireframeCube({ mouse, extraStyle }: CubeProps) {
  const ry = mouse.x * 40;
  const rx = -mouse.y * 25;

  return (
    <div
      className='hero-cube'
      style={{
        width: 80,
        height: 80,
        transformStyle: "preserve-3d" as const,
        transform: `perspective(400px) rotateX(${rx}deg) rotateY(${ry}deg)`,
        transition: "transform 0.12s linear",
        position: "absolute",
        ...extraStyle,
      }}
    >
      {FACES.map((face) => (
        <div
          key={face}
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            border: "1px solid rgba(59,130,246,0.18)",
            background: "rgba(59,130,246,0.02)",
            transform: faceTransforms[face],
          }}
        />
      ))}
    </div>
  );
}

/* ── Main Hero ───────────────────────────────────────────── */
export default function HeroSection() {
  const mouse = useMouse();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const headingX = mouse.x * -8;
  const headingY = mouse.y * -5;

  const slideUp = (delay: string): CSSProperties => ({
    animation: mounted ? `slideUp 0.8s ease both ${delay}` : "none",
    opacity: mounted ? 1 : 0,
  });

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#f8fafc ",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Syne', system-ui, sans-serif",
        padding: "40px 16px 60px",
        boxSizing: "border-box" as const,
      }}
    >
      {/* Fonts + animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes floatCard {
          0%,100% { translate: 0 0px; }
          50%      { translate: 0 -10px; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%,100% { opacity: 0.4; transform: scale(1); }
          50%      { opacity: 0.75; transform: scale(1.08); }
        }
        @keyframes gridMove {
          from { background-position: 0 0; }
          to   { background-position: 48px 48px; }
        }
        @keyframes dotBlink {
          0%,100% { opacity:1; box-shadow: 0 0 8px #3b82f6; }
          50%      { opacity:.4; box-shadow: none; }
        }
        @media (max-width: 768px) {
          .hero-floating-card { display: none !important; }
          .hero-cube { display: none !important; }
          .hero-buttons { flex-direction: column !important; align-items: center !important; }
          .hero-buttons a { width: 100% !important; justify-content: center !important; max-width: 300px; }
          .hero-stats { gap: 24px !important; }
        }
      `}</style>

      {/* Animated grid */}
      <AnimatedGrid />
      {/* Particles */}
      <ParticleCanvas />

      {/* Wireframe cubes */}
      <WireframeCube
        mouse={mouse}
        extraStyle={{ top: "15%", left: "8%", opacity: 0.45 }}
      />
      <WireframeCube
        mouse={mouse}
        extraStyle={{
          bottom: "20%",
          right: "8%",
          opacity: 0.3,
          width: 50,
          height: 50,
        }}
      />

      {/* Floating cards */}
      <FloatingCard
        mouse={mouse}
        depth={0.4}
        delay='0s'
        icon={<Code size={18} />}
        title='Projects Done'
        value='500+'
        color='#3b82f6'
        glowColor='#2563eb'
        x={4}
        y={22}
      />
      <FloatingCard
        mouse={mouse}
        depth={0.6}
        delay='0.8s'
        icon={<Smartphone size={18} />}
        title='Mobile Apps'
        value='120+'
        color='#10b981'
        glowColor='#059669'
        x={72}
        y={15}
      />
      <FloatingCard
        mouse={mouse}
        depth={0.3}
        delay='1.6s'
        icon={<Globe size={18} />}
        title='Countries'
        value='30+'
        color='#ec4899'
        glowColor='#db2777'
        x={76}
        y={62}
      />

      {/* Center content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          maxWidth: 820,
          width: "100%",
          padding: "0 16px",
          transform: `translate(${headingX}px, ${headingY}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "transparent",
            border: "1px solid rgba(15,23,42,0.12)",
            borderRadius: 999,
            padding: "6px 16px",
            marginBottom: 32,
            ...slideUp("0.1s"),
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#3b82f6",
              display: "inline-block",
              animation: "dotBlink 1.5s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#2563eb",
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
            }}
          >
            Software Development Company
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "'Syne', system-ui, sans-serif",
            fontSize: "clamp(32px, 7vw, 84px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            color: "#0f172a",
            margin: "0 0 24px",
            ...slideUp("0.25s"),
          }}
        >
          We Build{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Digital
          </span>
          <br />
          Products That{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #ec4899, #f97316)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Matter
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "#64748b",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto 40px",
            width: "100%",
            fontWeight: 300,
            ...slideUp("0.4s"),
          }}
        >
          From concept to launch — we craft scalable web apps, mobile solutions,
          and SaaS products that drive real business growth.
        </p>

        {/* CTA buttons */}
        <div
          className='hero-buttons'
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            ...slideUp("0.55s"),
          }}
        >
          <a
            href='#'
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
              color: "#fff",
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(37,99,235,0.3)",
              transition: "transform .2s, box-shadow .2s",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 40px rgba(37,99,235,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(37,99,235,0.3)";
            }}
          >
            Get Started <ArrowRight size={16} />
          </a>
          <a
            href='#'
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              background: "rgba(15,23,42,0.05)",
              color: "#1e293b",
              border: "1px solid rgba(15,23,42,0.12)",
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              backdropFilter: "blur(8px)",
              transition: "background .2s, border-color .2s",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(15,23,42,0.09)";
              e.currentTarget.style.borderColor = "rgba(15,23,42,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(15,23,42,0.05)";
              e.currentTarget.style.borderColor = "rgba(15,23,42,0.12)";
            }}
          >
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(20px, 5vw, 40px)",
            marginTop: 60,
            flexWrap: "wrap",
            ...slideUp("0.7s"),
          }}
        >
          {(
            [
              { num: "500+", label: "Projects Delivered" },
              { num: "10+", label: "Years Experience" },
              { num: "98%", label: "Client Satisfaction" },
            ] as const
          ).map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: 32,
                  fontWeight: 800,
                  color: "#0f172a",
                  letterSpacing: -1,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontFamily: "",
                  fontSize: 12,
                  color: "#94a3b8",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          // background: "linear-gradient(to top, #f8fafc , transparent)",
          zIndex: 2,
        }}
      />
    </section>
  );
}
