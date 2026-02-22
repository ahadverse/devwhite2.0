"use client";

import { useState } from "react";
import {
  ShoppingCart,
  User,
  Zap,
  BarChart2,
  Mail,
  Package,
  ShoppingBag,
  FileText,
  Send,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import AnimatedGrid from "../animatedgrid/animatedgrid";

interface Product {
  label: string;
  description: string;
  gradient: string;
  icon: React.ElementType;
  isNew?: boolean;
  category: string;
}

const PRODUCTS: Product[] = [
  {
    label: "Dokan Multivendor",
    description: "Build your dream multi vendor marketplace",
    gradient: "linear-gradient(135deg,#f97316,#ef4444)",
    icon: ShoppingCart,
    category: "eCommerce",
  },
  {
    label: "WP User Frontend Pro",
    description: "Ultimate Frontend Solution for WordPress",
    gradient: "linear-gradient(135deg,#22c55e,#16a34a)",
    icon: User,
    category: "WordPress",
  },
  {
    label: "Happy Addons",
    description: "Powerful elementor widgets to create websites",
    gradient: "linear-gradient(135deg,#a855f7,#7c3aed)",
    icon: Zap,
    category: "WordPress",
  },
  {
    label: "WP Project Manager Pro",
    description: "Project Management tool for your team",
    gradient: "linear-gradient(135deg,#6366f1,#4f46e5)",
    icon: BarChart2,
    category: "Productivity",
  },
  {
    label: "weMail",
    description: "Make Email Marketing simplified with WordPress",
    gradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
    icon: Mail,
    category: "Marketing",
  },
  {
    label: "WP ERP",
    description: "Automate your business or company operation",
    gradient: "linear-gradient(135deg,#34d399,#059669)",
    icon: Package,
    category: "Productivity",
  },
  {
    label: "Appsero",
    description: "WP Analytics, Licensing & Deployment Tool",
    gradient: "linear-gradient(135deg,#818cf8,#6366f1)",
    icon: BarChart2,
    category: "WordPress",
  },
  {
    label: "wePOS",
    description: "Fastest POS System for WooCommerce",
    gradient: "linear-gradient(135deg,#fb7185,#e11d48)",
    icon: ShoppingBag,
    category: "eCommerce",
  },
  {
    label: "weDocs",
    description: "Create great-looking documentation for your products",
    gradient: "linear-gradient(135deg,#60a5fa,#2563eb)",
    icon: FileText,
    category: "Productivity",
    isNew: true,
  },
  {
    label: "FlyWP",
    description: "Deploy WordPress sites on your own server in minutes",
    gradient: "linear-gradient(135deg,#38bdf8,#7c3aed)",
    icon: Send,
    category: "WordPress",
    isNew: true,
  },
  {
    label: "InboxWP",
    description: "Ensure all your mission-critical emails are delivered",
    gradient: "linear-gradient(135deg,#fb923c,#dc2626)",
    icon: Mail,
    category: "Marketing",
    isNew: true,
  },
  {
    label: "Klasio",
    description: "Get your online course business up and running instantly",
    gradient: "linear-gradient(135deg,#2dd4bf,#0891b2)",
    icon: BookOpen,
    category: "eCommerce",
    isNew: true,
  },
];

const CATEGORIES = [
  "All",
  "eCommerce",
  "WordPress",
  "Productivity",
  "Marketing",
];

function ProductCard({
  product,
  index,
  featured = false,
}: {
  product: Product;
  index: number;
  featured?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = product.icon;

  if (featured) {
    return (
      <div
        className='sol-card sol-card--featured'
        style={{ animationDelay: `${index * 55}ms`, background: "#ffffff" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className='sol-card__blob'
          style={{
            background: product.gradient,
            opacity: hovered ? 0.13 : 0.07,
          }}
        />
        <div className='sol-card__top'>
          <div
            className='sol-icon sol-icon--lg'
            style={{
              background: product.gradient,
              transform: hovered ? "scale(1.08) rotate(-4deg)" : "scale(1)",
            }}
          >
            <Icon size={28} color='#fff' strokeWidth={1.6} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {product.isNew && <span className='badge-new'>New</span>}
            <div
              className='sol-arrow'
              style={{
                opacity: hovered ? 1 : 0.3,
                transform: hovered ? "translate(3px,-3px)" : "translate(0,0)",
              }}
            >
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
        <div className='sol-card__content'>
          <h3 className='sol-card__title sol-card__title--lg'>
            {product.label}
          </h3>
          <p className='sol-card__desc sol-card__desc--lg'>
            {product.description}
          </p>
        </div>
        <div
          className='sol-card__bar'
          style={{
            background: product.gradient,
            transform: hovered ? "scaleX(1)" : "scaleX(0.2)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className='sol-card'
      style={{ animationDelay: `${index * 55}ms`, background: "#ffffff" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='sol-card__header'>
        <div
          className='sol-icon'
          style={{
            background: product.gradient,
            transform: hovered ? "scale(1.1) rotate(-5deg)" : "scale(1)",
          }}
        >
          <Icon size={20} color='#fff' strokeWidth={1.6} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {product.isNew && <span className='badge-new'>New</span>}
          <div
            className='sol-arrow'
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translate(3px,-3px)" : "translate(0,0)",
            }}
          >
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
      <h3 className='sol-card__title'>{product.label}</h3>
      <p className='sol-card__desc'>{product.description}</p>
      <div
        className='sol-card__bar'
        style={{
          background: product.gradient,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </div>
  );
}

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("All");
  const filtered =
    activeTab === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section
      className='sol-root'
      style={{
        background: "#f8faff",
        position: "relative",
        padding: "50px 24px 50px",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <AnimatedGrid />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .sol-root {
          position: relative;
          background: #f8faff;
          padding: 96px 24px 112px;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .sol-root::before {
          content: '';
          position: absolute;
          top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 720px; height: 360px;
          
          pointer-events: none;
        }

        .sol-inner {
          position: relative;
          max-width: 1180px;
          margin: 0 auto;
          z-index: 1;
        }

        /* Header */
        .sol-header { text-align: center; margin-bottom: 48px; }

        .sol-eyebrow {
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
          margin-bottom: 20px;
        }
        .sol-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #6366f1;
          animation: sol-pulse 2s ease-in-out infinite;
        }
        @keyframes sol-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.5); }
        }

        .sol-title {
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -1px;
          margin-bottom: 14px;
        }
        .sol-title span {
          background: linear-gradient(90deg,#6366f1,#38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sol-subtitle {
          font-size: 15.5px;
          color: #64748b;
          line-height: 1.7;
          max-width: 440px;
          margin: 0 auto;
        }

        /* Tabs */
        .sol-tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 44px;
        }
        .sol-tab {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 20px;
          border-radius: 100px;
          
          background: #fff;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .sol-tab:hover { border-color: #c7d2fe; color: #4f46e5; background: #eef2ff; }
        .sol-tab--active {
          background: linear-gradient(135deg,#6366f1,#818cf8) !important;
          border-color: transparent !important;
          color: #fff !important;
          box-shadow: 0 4px 14px rgba(99,102,241,0.3);
        }

        /* Grid */
        .sol-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 16px;
        }

        /* Card */
        .sol-card {
          position: relative;
          background: #ffffff;
          border: 1.5px solid #e8edf5;
          border-radius: 18px;
          padding: 22px;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          animation: sol-fadeUp 0.45s ease both;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .sol-card:hover {
          border-color: #c7d2fe;
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(99,102,241,0.1);
        }
        .sol-card--featured {
          grid-column: span 2;
          grid-row: span 2;
          padding: 32px;
          gap: 0;
          justify-content: space-between;
        }

        @keyframes sol-fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* Icon */
        .sol-icon {
          width: 46px; height: 46px;
          border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(0,0,0,0.14);
          transition: transform 0.3s ease;
        }
        .sol-icon--lg { width: 62px; height: 62px; border-radius: 18px; }

        .sol-card__blob {
          position: absolute;
          top: -50px; right: -50px;
          width: 200px; height: 200px;
          border-radius: 50%;
          filter: blur(50px);
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .sol-card__top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .sol-card__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sol-card__content { flex: 1; }

        .sol-card__title {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
          margin-top: 12px;
          margin-bottom: 5px;
        }
        .sol-card__title--lg {
          font-size: 24px;
          letter-spacing: -0.4px;
          margin-top: 0;
          margin-bottom: 10px;
        }
        .sol-card__desc {
          font-size: 12.5px;
          color: #94a3b8;
          line-height: 1.6;
        }
        .sol-card__desc--lg {
          font-size: 15px;
          color: #64748b;
          max-width: 300px;
          line-height: 1.7;
        }
        .sol-card__bar {
          position: absolute;
          bottom: 0; left: 0;
          height: 3px; width: 100%;
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .sol-arrow {
          color: #94a3b8;
          transition: transform 0.25s, opacity 0.25s;
          flex-shrink: 0;
        }

        .badge-new {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #fff;
          background: linear-gradient(90deg,#f97316,#ef4444);
          padding: 3px 9px;
          border-radius: 100px;
        }

        .sol-count {
          text-align: center;
          margin-top: 36px;
          font-size: 13.5px;
          color: #94a3b8;
        }
        .sol-count strong { color: #6366f1; }

        @media (max-width: 900px) {
          .sol-grid { grid-template-columns: repeat(2,1fr); }
          .sol-card--featured { grid-column: span 2; grid-row: span 1; }
        }
        @media (max-width: 560px) {
          .sol-grid { grid-template-columns: 1fr; }
          .sol-card--featured { grid-column: span 1; }
        }
      `}</style>

      <div className='sol-inner'>
        <div className='sol-header'>
          <div>
            <span className='sol-eyebrow'>Our Solutions</span>
          </div>
          <h2 className='sol-title'>
            Everything you need to
            <br />
            <span>build &amp; grow online</span>
          </h2>
          <p className='sol-subtitle'>
            Handcrafted WordPress plugins &amp; SaaS products trusted by
            thousands of businesses worldwide.
          </p>
        </div>

        <div className='sol-tabs'>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`sol-tab${activeTab === cat ? " sol-tab--active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className='sol-grid'>
          {filtered.map((product, i) => (
            <ProductCard
              key={product.label}
              product={product}
              index={i}
              featured={i === 0}
            />
          ))}
        </div>

        <p className='sol-count'>
          Showing <strong>{filtered.length}</strong> of{" "}
          <strong>{PRODUCTS.length}</strong> products
        </p>
      </div>
    </section>
  );
}
