"use client";

import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved as "dark" | "light";
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  return (
    <button
      aria-label='Toggle theme'
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: 8,
        border: "1px solid rgba(0,0,0,0.08)",
        background: "transparent",
        cursor: "pointer",
        color: "inherit",
      }}
    >
      {theme === "dark" ? <BsSun size={18} /> : <BsMoon size={18} />}
    </button>
  );
}
