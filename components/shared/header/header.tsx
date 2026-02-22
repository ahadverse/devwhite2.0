"use client";

import { useState, useRef, useEffect } from "react";
import {
  Video,
  Users,
  Mic,
  BookOpen,
  Layout,
  ChevronDown,
  Play,
  BarChart2,
  Globe,
  Layers,
  ShoppingBag,
  GraduationCap,
  ShoppingCart,
  Settings,
  CreditCard,
  ArrowRight,
  Upload,
  MonitorPlay,
  User,
  Menu,
  X,
} from "lucide-react";

const MENUS = {
  Features: {
    heading: "Features",
    viewAll: "See all features",
    cols: 2,
    featured: false,
    panelWidth: 560,
    items: [
      { label: "Video hosting", icon: Play, isNew: false },
      { label: "Team collaboration", icon: Users, isNew: false },
      { label: "Live streaming", icon: MonitorPlay, isNew: true },
      { label: "Analytics", icon: BarChart2, isNew: false },
      { label: "Localization", icon: Globe, isNew: true },
      { label: "Integrations", icon: Layers, isNew: false },
    ],
  },
  "Use cases": {
    heading: "Vimeo for",
    viewAll: "See all use cases",
    cols: 2,
    featured: true,
    panelWidth: 860,
    items: [
      { label: "Video pros", icon: Video, isNew: false },
      { label: "Small businesses", icon: ShoppingBag, isNew: false },
      { label: "Marketing teams", icon: BarChart2, isNew: false },
      { label: "Educators", icon: GraduationCap, isNew: false },
      { label: "Communications teams", icon: Mic, isNew: false },
      { label: "Retail", icon: ShoppingCart, isNew: false },
      { label: "L&D leaders", icon: BookOpen, isNew: false },
      { label: "Tech / SaaS", icon: Settings, isNew: false },
      { label: "Content businesses", icon: Layout, isNew: false },
      { label: "Financial services", icon: CreditCard, isNew: false },
    ],
  },
  Learn: {
    heading: "Resources",
    viewAll: "Explore resources",
    cols: 1,
    featured: false,
    panelWidth: 280,
    items: [
      { label: "Blog", icon: BookOpen, isNew: false },
      { label: "Video School", icon: GraduationCap, isNew: false },
      { label: "Help Center", icon: Users, isNew: false },
      { label: "Community", icon: Globe, isNew: false },
    ],
  },
} as const;

type MenuKey = keyof typeof MENUS;

function FeaturedCard() {
  return (
    <div style={{ width: 220, minWidth: 220, flexShrink: 0 }}>
      <div
        style={{
          borderRadius: 12,
          background: "linear-gradient(135deg,#e8f4fd 0%,#fce7db 100%)",
          position: "relative",
          height: 160,
          marginBottom: 12,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(255,200,100,0.45)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            background: "#fff",
            borderRadius: 8,
            padding: "7px 9px",
            fontSize: 10,
            lineHeight: 1.55,
            color: "#666",
            boxShadow: "0 2px 10px rgba(0,0,0,.14)",
            width: 140,
          }}
        >
          <div style={{ fontWeight: 700, color: "#111", marginBottom: 2 }}>
            Translate audio and captions
          </div>
          <div>Choose: #12</div>
          <div>Dutch – Nederlands</div>
          <div>German – Deutsch</div>
        </div>
      </div>
      <a
        href='#'
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          fontWeight: 700,
          fontSize: 13.5,
          color: "#111",
          textDecoration: "none",
          marginBottom: 5,
        }}
      >
        Translate audio and captions <ArrowRight size={13} />
      </a>
      <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6, margin: 0 }}>
        Save time and money on localization with AI-powered video translation.
        Adapt audio and captions into dozens of languages fast.
      </p>
    </div>
  );
}

interface PanelProps {
  menuKey: MenuKey;
  anchorRect: DOMRect | null;
}

function MegaPanel({ menuKey, anchorRect }: PanelProps) {
  const menu = MENUS[menuKey];
  const panelWidth = menu.panelWidth;
  const rawLeft = anchorRect ? anchorRect.left : 24;
  const viewportW = typeof window !== "undefined" ? window.innerWidth : 1280;
  const left = Math.max(16, Math.min(rawLeft, viewportW - panelWidth - 16));
  const top = anchorRect ? anchorRect.bottom + 6 : 66;

  return (
    <div
      style={{
        position: "fixed",
        top,
        left,
        width: panelWidth,
        zIndex: 99999,
        backgroundColor: "#ffffff",
        borderRadius: 16,
        boxShadow: "0 20px 50px rgba(0,0,0,0.13)",
        border: "1px solid #ebebeb",
        padding: "24px 24px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 24,
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#bbb",
              marginBottom: 14,
            }}
          >
            {menu.heading}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: menu.cols === 2 ? "1fr 1fr" : "1fr",
              gap: "4px",
            }}
          >
            {menu.items.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href='#'
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 10px",
                    borderRadius: 10,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#f6f6f6")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      minWidth: 40,
                      borderRadius: 10,
                      background: "#f2f2f2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#444",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13.5,
                        fontWeight: 600,
                        color: "#111",
                        whiteSpace: "nowrap",
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
                          background: "#f97316",
                          borderRadius: 4,
                          padding: "1px 6px",
                          lineHeight: 1.5,
                          flexShrink: 0,
                        }}
                      >
                        New
                      </span>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {menu.featured && <FeaturedCard />}
      </div>

      <div
        style={{
          marginTop: 18,
          paddingTop: 16,
          borderTop: "1px solid #efefef",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <a
          href='#'
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontSize: 13.5,
            fontWeight: 700,
            color: "#222",
            textDecoration: "none",
          }}
        >
          {menu.viewAll} <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
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

  const openMenu = (key: MenuKey, el: HTMLElement) => {
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

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #efefef",
          height: 62,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            boxSizing: "border-box",
          }}
        >
          <a
            href='#'
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 26,
              fontWeight: 900,
              color: "#1ab7ea",
              letterSpacing: -1,
              textDecoration: "none",
              flexShrink: 0,
              lineHeight: 1,
            }}
          >
            vimeo
          </a>

          {!isMobile && (
            <nav
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 0,
                flex: 1,
              }}
            >
              {(Object.keys(MENUS) as MenuKey[]).map((key) => (
                <button
                  key={key}
                  onMouseEnter={(e) => openMenu(key, e.currentTarget)}
                  onMouseLeave={scheduleClose}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    padding: "6px 12px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: 500,
                    color: activeMenu === key ? "#1ab7ea" : "#222",
                    borderRadius: 8,
                    fontFamily: "inherit",
                    whiteSpace: "nowrap",
                    lineHeight: 1,
                  }}
                >
                  {key}
                  <ChevronDown
                    size={13}
                    style={{
                      transition: "transform .2s",
                      transform:
                        activeMenu === key ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
              ))}
              {["Enterprise", "Pricing"].map((label) => (
                <a
                  key={label}
                  href='#'
                  style={{
                    padding: "6px 12px",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#222",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          )}

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
              <a
                href='#'
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#222",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Contact sales
              </a>
              <a
                href='#'
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 20px",
                  background: "#1ab7ea",
                  color: "#fff",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Join <ArrowRight size={14} />
              </a>
              {[
                <Upload key='u' size={18} />,
                <MonitorPlay key='m' size={18} />,
                <User key='usr' size={18} />,
              ].map((icon, i) => (
                <button
                  key={i}
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    color: "#666",
                    padding: 4,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
          )}

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

      {activeMenu && !isMobile && (
        <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
          <MegaPanel menuKey={activeMenu} anchorRect={anchorRect} />
        </div>
      )}

      {mobileOpen && isMobile && (
        <div
          style={{
            position: "fixed",
            top: 62,
            left: 0,
            right: 0,
            bottom: 0,
            background: "#fff",
            zIndex: 9998,
            overflowY: "auto",
            padding: 16,
          }}
        >
          {[...(Object.keys(MENUS) as string[]), "Enterprise", "Pricing"].map(
            (label) => (
              <a
                key={label}
                href='#'
                style={{
                  display: "block",
                  padding: "12px 14px",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#111",
                  textDecoration: "none",
                  borderRadius: 10,
                }}
              >
                {label}
              </a>
            ),
          )}
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <a
              href='#'
              style={{
                flex: 1,
                textAlign: "center",
                padding: "11px 0",
                border: "1.5px solid #ddd",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                color: "#333",
                textDecoration: "none",
              }}
            >
              Log in
            </a>
            <a
              href='#'
              style={{
                flex: 1,
                textAlign: "center",
                padding: "11px 0",
                background: "#1ab7ea",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Join
            </a>
          </div>
        </div>
      )}
    </>
  );
}
