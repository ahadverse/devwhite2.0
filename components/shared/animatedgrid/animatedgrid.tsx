"use client";

/**
 * AnimatedGrid.tsx
 * ─────────────────────────────────────────────────────
 * Hero section-এর animated square grid background.
 * যেকোনো section-এ use করো:
 *
 *   import AnimatedGrid from "@/components/AnimatedGrid";
 *
 *   <section style={{ position: "relative" }}>
 *     <AnimatedGrid />
 *     ...content...
 *   </section>
 *
 * Props:
 *   color      - grid line color (default: rgba(15,23,42,0.04))
 *   size       - grid cell size in px (default: 48)
 *   speed      - animation duration in seconds (default: 8)
 *   zIndex     - z-index (default: 0)
 *   style      - extra CSSProperties override
 */

import type { CSSProperties } from "react";

interface AnimatedGridProps {
  color?: string;
  size?: number;
  speed?: number;
  zIndex?: number;
  style?: CSSProperties;
}

export default function AnimatedGrid({
  color = "rgba(10, 74, 223, 0.12)",
  size = 48,
  speed = 10,
  zIndex = 0,
  style,
}: AnimatedGridProps) {
  const animName = `gridMove_${size}`;

  return (
    <>
      <style>{`
        @keyframes ${animName} {
          from { background-position: 0 0; }
          to   { background-position: ${size}px ${size}px; }
        }
      `}</style>

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex,
          backgroundImage: `
            linear-gradient(${color} 1px, transparent 1px),
            linear-gradient(90deg, ${color} 1px, transparent 1px)
          `,
          backgroundSize: `${size}px ${size}px`,
          animation: `${animName} ${speed}s linear infinite`,
          pointerEvents: "none",
          ...style,
        }}
      />
    </>
  );
}
