"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  ArrowRight,
  ShoppingCart,
  Mail,
  FileText,
  Zap,
  Send,
  BarChart2,
  BookOpen,
  Package,
  Menu,
  X,
  ShoppingBag,
  User,
  Globe,
  Code,
  Smartphone,
  Cloud,
  Shield,
  Headphones,
  PenTool,
  TrendingUp,
  Database,
  Layers,
  Settings,
  Monitor,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */
interface MenuItem {
  label: string;
  description: string;
  isNew?: boolean;
  gradient: string;
  icon: React.ElementType;
}

/* ─── Products Data ──────────────────────────────────────── */
const PRODUCTS: MenuItem[] = [
  {
    label: "Dokan Multivendor",
    description: "Build your dream multi vendor marketplace",
    gradient: "linear-gradient(135deg,#f97316,#ef4444)",
    icon: ShoppingCart,
  },
  {
    label: "WP User Frontend Pro",
    description: "Ultimate Frontend Solution for WordPress",
    gradient: "linear-gradient(135deg,#22c55e,#16a34a)",
    icon: User,
  },
  {
    label: "Happy Addons",
    description: "Powerful elementor widgets to create websites",
    gradient: "linear-gradient(135deg,#a855f7,#7c3aed)",
    icon: Zap,
  },
  {
    label: "WP Project Manager Pro",
    description: "Project Management tool for your team",
    gradient: "linear-gradient(135deg,#6366f1,#4f46e5)",
    icon: BarChart2,
  },
  {
    label: "weMail",
    description: "Make Email Marketing simplified with WordPress",
    gradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
    icon: Mail,
  },
  {
    label: "WP ERP",
    description: "Automate your business or company operation",
    gradient: "linear-gradient(135deg,#34d399,#059669)",
    icon: Package,
  },
  {
    label: "Appsero",
    description: "WP Analytics, Licensing & Deployment Tool",
    gradient: "linear-gradient(135deg,#818cf8,#6366f1)",
    icon: BarChart2,
  },
  {
    label: "wePOS",
    description: "Fastest POS System for WooCommerce",
    gradient: "linear-gradient(135deg,#fb7185,#e11d48)",
    icon: ShoppingBag,
  },
  {
    label: "weDocs",
    description: "Create great-looking documentation for your products",
    isNew: true,
    gradient: "linear-gradient(135deg,#60a5fa,#2563eb)",
    icon: FileText,
  },
  {
    label: "FlyWP",
    description: "Deploy WordPress sites on your own server in minutes",
    isNew: true,
    gradient: "linear-gradient(135deg,#38bdf8,#7c3aed)",
    icon: Send,
  },
  {
    label: "InboxWP",
    description:
      "Ensure all your mission-critical emails are delivered on time",
    isNew: true,
    gradient: "linear-gradient(135deg,#fb923c,#dc2626)",
    icon: Mail,
  },
  {
    label: "Klasio",
    description: "Get your online course business up and running instantly",
    isNew: true,
    gradient: "linear-gradient(135deg,#2dd4bf,#0891b2)",
    icon: BookOpen,
  },
];

/* ─── Services Data ──────────────────────────────────────── */
const SERVICES: MenuItem[] = [
  {
    label: "Web Development",
    description: "Custom websites & web apps built for scale and performance",
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    icon: Code,
  },
  {
    label: "Mobile App Development",
    description: "Native & cross-platform iOS and Android applications",
    gradient: "linear-gradient(135deg,#f97316,#ef4444)",
    icon: Smartphone,
  },
  {
    label: "UI/UX Design",
    description: "Pixel-perfect interfaces that users love to interact with",
    gradient: "linear-gradient(135deg,#ec4899,#a855f7)",
    icon: PenTool,
  },
  {
    label: "Cloud & DevOps",
    description: "Scalable cloud infrastructure, CI/CD pipelines & automation",
    gradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
    icon: Cloud,
  },
  {
    label: "WordPress Development",
    description: "Themes, plugins & full WordPress solutions for any business",
    gradient: "linear-gradient(135deg,#22c55e,#059669)",
    icon: Globe,
  },
  {
    label: "SaaS Development",
    description: "End-to-end SaaS product development from idea to launch",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    icon: Layers,
  },
  {
    label: "API & Backend",
    description: "Robust REST & GraphQL APIs powering modern applications",
    gradient: "linear-gradient(135deg,#14b8a6,#0891b2)",
    icon: Database,
  },
  {
    label: "Digital Marketing",
    description: "SEO, content & growth strategies that drive real results",
    gradient: "linear-gradient(135deg,#fb7185,#f97316)",
    icon: TrendingUp,
  },
  {
    label: "Security & QA",
    description: "Penetration testing, audits & quality assurance services",
    gradient: "linear-gradient(135deg,#64748b,#334155)",
    icon: Shield,
  },
  {
    label: "Maintenance & Support",
    description: "24/7 ongoing support, updates & performance monitoring",
    gradient: "linear-gradient(135deg,#a78bfa,#6366f1)",
    icon: Headphones,
  },
  {
    label: "IT Consulting",
    description: "Strategic technology guidance to accelerate your business",
    gradient: "linear-gradient(135deg,#34d399,#0d9488)",
    icon: Settings,
    isNew: true,
  },
  {
    label: "Custom Software",
    description: "Fully tailored software solutions built around your workflow",
    gradient: "linear-gradient(135deg,#60a5fa,#2563eb)",
    icon: Monitor,
    isNew: true,
  },
];

/* ─── Shared Mega Panel ──────────────────────────────────── */
interface PanelProps {
  items: MenuItem[];
  viewAllLabel: string;
  anchorRect: DOMRect | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function MegaPanel({
  items,
  viewAllLabel,
  anchorRect,
  onMouseEnter,
  onMouseLeave,
}: PanelProps) {
  const PANEL_WIDTH = 1060;
  const viewportW = typeof window !== "undefined" ? window.innerWidth : 1280;
  const left = Math.max(16, (viewportW - PANEL_WIDTH) / 2);
  const top = anchorRect ? anchorRect.bottom + 8 : 72;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: "fixed",
        top,
        left,
        width: PANEL_WIDTH,
        zIndex: 99999,
        backgroundColor: "#fff",
        borderRadius: 16,
        boxShadow: "0 24px 64px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
        border: "1px solid #f0f0f0",
        padding: "32px 32px 24px",
        boxSizing: "border-box",
      }}
    >
      {/* 4-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "8px 16px",
          marginBottom: 28,
        }}
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href='#'
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 14,
                padding: "14px 12px",
                borderRadius: 12,
                textDecoration: "none",
                color: "inherit",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f8f9ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {/* Circular gradient icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  minWidth: 48,
                  borderRadius: "50%",
                  background: item.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                <Icon size={22} color='#fff' strokeWidth={1.8} />
              </div>

              {/* Text */}
              <div style={{ minWidth: 0, paddingTop: 1 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 4,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: 14.5,
                      fontWeight: 700,
                      color: "#111",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.label}
                  </span>
                  {item.isNew && (
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#fff",
                        background: "linear-gradient(90deg,#f97316,#ef4444)",
                        borderRadius: 20,
                        padding: "2px 8px",
                        lineHeight: 1.5,
                        flexShrink: 0,
                      }}
                    >
                      New
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: 12.5,
                    color: "#777",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #f0f0f0",
          paddingTop: 20,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <a
          href='#'
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 24px",
            background: "#f0f7ff",
            color: "#2563eb",
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 700,
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#dbeafe")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#f0f7ff")}
        >
          {viewAllLabel} <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}

/* ─── Header ─────────────────────────────────────────────── */

type ActiveMenu = "products" | "services" | null;
const NAV_LINKS = ["Blog", "About", "Docs", "Contact Us"];

export default function WedevsHeader() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const openMenu = (key: ActiveMenu, el: HTMLElement) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setAnchorRect(el.getBoundingClientRect());
    setActiveMenu(key);
  };

  const scheduleClose = () => {
    leaveTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const cancelClose = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
  };

  const dropdownBtnStyle = (key: ActiveMenu) => ({
    display: "flex",
    flexDirection: "row" as const,
    alignItems: "center",
    gap: 5,
    padding: "6px 14px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 15,
    // fontWeight: 600,
    color: activeMenu === key ? "#2563eb" : "#333",
    borderRadius: 8,
    fontFamily: "inherit",
    whiteSpace: "nowrap" as const,
  });

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#fff",
          borderBottom: "1px solid #f0f0f0",
          height: 64,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            boxSizing: "border-box",
          }}
        >
          {/* Logo */}
          <a
            href='#'
            style={{
              textDecoration: "none",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
            //   style={{
            //     width: 36,
            //     height: 36,
            //     borderRadius: "50%",
            //     background:
            //       "conic-gradient(from 0deg,#ef4444,#f97316,#22c55e,#3b82f6,#8b5cf6,#ef4444)",
            //     flexShrink: 0,
            //   }}
            />
            <img
              src='/logo.png'
              alt='WeDevs'
              style={{ height: 50, color: "#333", fontWeight: 700 }}
            />
          </a>

          {/* Desktop Nav — centered */}
          {!isMobile && (
            <nav
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {/* Products */}
              <button
                onMouseEnter={(e) => openMenu("products", e.currentTarget)}
                onMouseLeave={scheduleClose}
                style={dropdownBtnStyle("products")}
              >
                Products
                <ChevronDown
                  size={14}
                  style={{
                    transition: "transform .2s",
                    transform:
                      activeMenu === "products"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>

              {/* Services */}
              <button
                onMouseEnter={(e) => openMenu("services", e.currentTarget)}
                onMouseLeave={scheduleClose}
                style={dropdownBtnStyle("services")}
              >
                Services
                <ChevronDown
                  size={14}
                  style={{
                    transition: "transform .2s",
                    transform:
                      activeMenu === "services"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>

              {NAV_LINKS.map((label) => (
                <a
                  key={label}
                  href='#'
                  style={{
                    padding: "6px 14px",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#333",
                    textDecoration: "none",
                    borderRadius: 8,
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          )}

          {/* Right icons */}
          {!isMobile && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                flexShrink: 0,
              }}
            >
              <button
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  color: "#555",
                  padding: 4,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ShoppingCart size={20} />
              </button>
              <button
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  color: "#555",
                  padding: 4,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <User size={20} />
              </button>
            </div>
          )}

          {/* Mobile toggle */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen((v) => !v)}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                color: "#222",
                padding: 4,
                display: "flex",
                alignItems: "center",
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </header>

      {/* Products Mega Menu */}
      {activeMenu === "products" && !isMobile && (
        <MegaPanel
          items={PRODUCTS}
          viewAllLabel='View all products'
          anchorRect={anchorRect}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        />
      )}

      {/* Services Mega Menu */}
      {activeMenu === "services" && !isMobile && (
        <MegaPanel
          items={SERVICES}
          viewAllLabel='View all services'
          anchorRect={anchorRect}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        />
      )}

      {/* Mobile Drawer */}
      {mobileOpen && isMobile && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            background: "#fff",
            zIndex: 9998,
            overflowY: "auto",
            padding: 16,
            maxHeight: "calc(100vh - 64px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            borderTop: "1px solid #f0f0f0",
          }}
        >
          {/* Close button */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 8,
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                border: "none",
                background: "#f4f4f5",
                cursor: "pointer",
                color: "#333",
                width: 36,
                height: 36,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={18} />
            </button>
          </div>
          {/* Products */}
          <div style={{ marginBottom: 8 }}>
            <div
              style={{
                fontSize: 11,
                // fontWeight: 700,
                color: "#aaa",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "8px 12px",
              }}
            >
              Products
            </div>
            {PRODUCTS.map((p) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.label}
                  href='#'
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "10px 12px",
                    borderRadius: 10,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: p.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} color='#fff' />
                  </div>
                  <span
                    style={{ fontSize: 14, fontWeight: 600, color: "#111" }}
                  >
                    {p.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Services */}
          <div
            style={{
              marginBottom: 8,
              borderTop: "1px solid #f0f0f0",
              paddingTop: 12,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#aaa",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "8px 12px",
              }}
            >
              Services
            </div>
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href='#'
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "10px 12px",
                    borderRadius: 10,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: s.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} color='#fff' />
                  </div>
                  <span
                    style={{ fontSize: 14, fontWeight: 600, color: "#111" }}
                  >
                    {s.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Plain links */}
          <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 12 }}>
            {NAV_LINKS.map((label) => (
              <a
                key={label}
                href='#'
                style={{
                  display: "block",
                  padding: "12px 12px",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#111",
                  textDecoration: "none",
                  borderRadius: 10,
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
