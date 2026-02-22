"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          borderTop: "1px solid #e8edf2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          height: 0,
        }}
      >
        <button
          onClick={scrollToTop}
          aria-label='Scroll to top'
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "#fff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 16px rgba(100,120,180,0.13)",
            transition: "box-shadow .2s, transform .2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 6px 24px rgba(100,120,180,0.22)";
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translate(-50%, -50%) scale(1.08)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 2px 16px rgba(100,120,180,0.13)";
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translate(-50%, -50%) scale(1)";
          }}
        >
          <ChevronUp
            size={22}
            color='#7b93c4'
            strokeWidth={2.5}
            style={{ animation: "bounceUp 1.4s ease-in-out infinite" }}
          />
        </button>
      </div>

      <style>{`
        @keyframes bounceUp {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50%       { transform: translateY(-4px); opacity: 0.7; }
        }
      `}</style>
    </>
  );
}
