"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const mouseRef = useRef({ x: -999, y: -999 });
  const ringRef = useRef({ x: -999, y: -999 });
  const [dot, setDot] = useState({ x: -999, y: -999 });
  const [ring, setRing] = useState({ x: -999, y: -999 });
  const [mode, setMode] = useState<"default" | "hover" | "link">("default");
  const rafRef = useRef<number>(0);

  /* ── inject cursor:none globally ── */
  useEffect(() => {
    const id = "custom-cursor-global";
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id;
      s.textContent = `html, html *, html *::before, html *::after { cursor: none !important; }`;
      document.head.appendChild(s);
    }
  }, []);

  /* ── raw mouse → dot (instant) ── */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setDot({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  /* ── lerp ring ── */
  useEffect(() => {
    const tick = () => {
      ringRef.current.x += (mouseRef.current.x - ringRef.current.x) * 0.12;
      ringRef.current.y += (mouseRef.current.y - ringRef.current.y) * 0.12;
      setRing({ x: ringRef.current.x, y: ringRef.current.y });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ── hover detection ── */
  useEffect(() => {
    const SEL =
      "a, button, input, select, textarea, label, [data-cursor], [role='button']";

    const enter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      setMode(el.tagName === "A" ? "link" : "hover");
    };
    const leave = () => setMode("default");

    const bind = () => {
      document.querySelectorAll<HTMLElement>(SEL).forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    };

    bind();
    const obs = new MutationObserver(bind);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  /* ── magnetic text ── */
  useEffect(() => {
    const init = () => {
      document
        .querySelectorAll<HTMLElement>("[data-magnetic]")
        .forEach((el) => {
          if (el.dataset.magneticInit) return;
          el.dataset.magneticInit = "1";

          el.innerHTML = el.innerHTML.replace(
            /(<[^>]+>)|([^ \n])/g,
            (_, tag, ch) =>
              tag ??
              `<span class="__ml" style="display:inline-block;will-change:transform">${ch}</span>`,
          );

          const spans = Array.from(el.querySelectorAll<HTMLElement>(".__ml"));
          const offsets = spans.map(() => ({ x: 0, y: 0 }));

          window.addEventListener("mousemove", (e: MouseEvent) => {
            spans.forEach((s, i) => {
              const r = s.getBoundingClientRect();
              const cx = r.left + r.width / 2;
              const cy = r.top + r.height / 2;
              const dx = e.clientX - cx;
              const dy = e.clientY - cy;
              const d = Math.sqrt(dx * dx + dy * dy);
              const R = 85;
              if (d < R && d > 0)
                offsets[i] = {
                  x: (dx / d) * 14 * (1 - d / R),
                  y: (dy / d) * 14 * (1 - d / R),
                };
            });
          });

          (function spring() {
            spans.forEach((s, i) => {
              offsets[i].x *= 0.78;
              offsets[i].y *= 0.78;
              s.style.transform = `translate(${offsets[i].x}px,${offsets[i].y}px)`;
            });
            requestAnimationFrame(spring);
          })();
        });
    };

    init();
    const obs = new MutationObserver(init);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  /*
   * ── SIZES ──
   * default : 36px — small ring + dot visible
   * hover   : 52px — medium ring, dot hidden
   * link    : 44px — slightly larger than default (NOT huge)
   */
  const ringSize = mode === "hover" ? 52 : mode === "link" ? 52 : 36;

  /*
   * ── NEGATIVE / INVERT EFFECT ──
   * mix-blend-mode: "difference" makes the ring invert
   * whatever color is behind it — exactly like AIUB.
   * background must be a solid color for difference to work.
   * We use white (#fff) so it inverts to black on white bg,
   * and inverts to white on dark elements — perfect negative.
   */
  const isInverted = true; // সবসময় negative/invert effect

  return (
    <>
      {/* Glow blob — stays normal, behind everything */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 999970,
          left: ring.x,
          top: ring.y,
          width: 380,
          height: 380,
          borderRadius: "50%",
          transform: "translate(-50%,-50%)",
          background:
            "radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 65%)",
          willChange: "left,top",
        }}
      />

      {/* Outer ring — mix-blend-mode: difference = negative invert */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 999995,
          left: ring.x,
          top: ring.y,
          width: ringSize,
          height: ringSize,
          borderRadius: "50%",
          transform: "translate(-50%,-50%)",
          /* invert mode: solid white fill + difference blend */
          background: "#ffffff",
          border: "none",
          mixBlendMode: "difference",
          transition:
            "width .22s cubic-bezier(.4,0,.2,1)," +
            "height .22s cubic-bezier(.4,0,.2,1)," +
            "background .18s, border .18s",
          willChange: "left,top,width,height",
        }}
      />

      {/* Inner dot — instant, hides when hovering */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 999999,
          left: dot.x,
          top: dot.y,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#2563eb",
          transform: `translate(-50%,-50%) scale(${mode === "default" ? 1 : 0})`,
          transition: "transform .15s cubic-bezier(.4,0,.2,1)",
        }}
      />
    </>
  );
}
