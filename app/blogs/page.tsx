"use client";

import { useState, useMemo } from "react";
import {
  ArrowUpRight,
  Clock,
  User,
  Tag,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Flame,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import AnimatedGrid from "@/components/shared/animatedgrid/animatedgrid";

/* ═══════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════ */
const BLOGS = [
  {
    tag: "WordPress",
    tagGradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    title: "How to Build a Multi-Vendor Marketplace with Dokan",
    excerpt:
      "Learn step-by-step how to set up a fully functional marketplace on WordPress using Dokan Multivendor — from vendor onboarding to payment splits.",
    author: "Rahim Uddin",
    date: "Feb 18, 2026",
    readTime: "6 min read",
    coverGradient: "linear-gradient(135deg,#f0f0ff 0%,#ddd6fe 100%)",
    accentColor: "#6366f1",
    featured: true,
  },
  {
    tag: "MERN Stack",
    tagGradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
    title: "Building Scalable REST APIs with Node.js and Express",
    excerpt:
      "A practical guide to designing robust, scalable APIs using Express.js, MongoDB, and best practices for authentication, rate limiting, and error handling.",
    author: "Karim Hossain",
    date: "Feb 14, 2026",
    readTime: "8 min read",
    coverGradient: "linear-gradient(135deg,#ecfeff 0%,#bae6fd 100%)",
    accentColor: "#0284c7",
    featured: true,
  },
  {
    tag: "PHP",
    tagGradient: "linear-gradient(135deg,#a855f7,#7c3aed)",
    title: "Laravel vs Symfony: Which PHP Framework to Choose in 2026",
    excerpt:
      "We compare two of the most popular PHP frameworks across performance, developer experience, ecosystem, and real-world use cases to help you decide.",
    author: "Nadia Islam",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    coverGradient: "linear-gradient(135deg,#faf5ff 0%,#e9d5ff 100%)",
    accentColor: "#7c3aed",
    featured: false,
  },
  {
    tag: "WordPress",
    tagGradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    title: "WooCommerce Performance Optimization: The Complete 2026 Guide",
    excerpt:
      "Speed up your WooCommerce store with caching strategies, image optimization, database tuning, and CDN configuration for lightning-fast checkout.",
    author: "Rahim Uddin",
    date: "Feb 07, 2026",
    readTime: "10 min read",
    coverGradient: "linear-gradient(135deg,#f0f0ff 0%,#c7d2fe 100%)",
    accentColor: "#6366f1",
    featured: false,
  },
  {
    tag: "MERN Stack",
    tagGradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
    title: "State Management in 2026: Zustand vs Redux Toolkit vs Jotai",
    excerpt:
      "An honest, in-depth comparison of modern React state management libraries with real benchmarks, bundle sizes and developer experience scores.",
    author: "Tahmid Hasan",
    date: "Feb 04, 2026",
    readTime: "7 min read",
    coverGradient: "linear-gradient(135deg,#ecfeff 0%,#a5f3fc 100%)",
    accentColor: "#0284c7",
    featured: false,
  },
  {
    tag: "DevOps",
    tagGradient: "linear-gradient(135deg,#34d399,#059669)",
    title: "CI/CD Pipelines for WordPress Plugins: A Practical Walkthrough",
    excerpt:
      "Automate your WordPress plugin testing and deployment with GitHub Actions, automated changelogs, and one-click releases to the WP.org repository.",
    author: "Fahim Ahamed",
    date: "Jan 29, 2026",
    readTime: "9 min read",
    coverGradient: "linear-gradient(135deg,#f0fdf4 0%,#a7f3d0 100%)",
    accentColor: "#059669",
    featured: false,
  },
  {
    tag: "PHP",
    tagGradient: "linear-gradient(135deg,#a855f7,#7c3aed)",
    title: "PHP 8.4 New Features: What Every Developer Should Know",
    excerpt:
      "Explore property hooks, asymmetric visibility, lazy objects and the other headline features of PHP 8.4 with real-world code examples.",
    author: "Nadia Islam",
    date: "Jan 25, 2026",
    readTime: "6 min read",
    coverGradient: "linear-gradient(135deg,#faf5ff 0%,#d8b4fe 100%)",
    accentColor: "#7c3aed",
    featured: false,
  },
  {
    tag: "Design",
    tagGradient: "linear-gradient(135deg,#ec4899,#a855f7)",
    title: "Designing for Accessibility: WCAG 2.2 Compliance in 2026",
    excerpt:
      "A hands-on guide to building inclusive web products — covering colour contrast, keyboard navigation, ARIA roles, and automated accessibility testing.",
    author: "Sadia Rahman",
    date: "Jan 20, 2026",
    readTime: "8 min read",
    coverGradient: "linear-gradient(135deg,#fdf2f8 0%,#fbcfe8 100%)",
    accentColor: "#ec4899",
    featured: false,
  },
  {
    tag: "MERN Stack",
    tagGradient: "linear-gradient(135deg,#38bdf8,#0284c7)",
    title: "Next.js 15 App Router: Patterns for Production-Ready Apps",
    excerpt:
      "Deep dive into server components, streaming, parallel routes and advanced caching patterns that make Next.js 15 apps blazing fast and maintainable.",
    author: "Karim Hossain",
    date: "Jan 15, 2026",
    readTime: "12 min read",
    coverGradient: "linear-gradient(135deg,#f0f9ff 0%,#7dd3fc 100%)",
    accentColor: "#0284c7",
    featured: false,
  },
  {
    tag: "WordPress",
    tagGradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    title: "Building a SaaS on Top of WordPress: Architecture Deep Dive",
    excerpt:
      "How weDevs architects multi-tenant SaaS products on WordPress — from custom user roles and licensing to billing integration and sub-site isolation.",
    author: "Rafiqul Islam",
    date: "Jan 10, 2026",
    readTime: "11 min read",
    coverGradient: "linear-gradient(135deg,#eef2ff 0%,#a5b4fc 100%)",
    accentColor: "#6366f1",
    featured: false,
  },
  {
    tag: "DevOps",
    tagGradient: "linear-gradient(135deg,#34d399,#059669)",
    title: "Self-Hosting WordPress on AWS: Cost Optimisation Strategies",
    excerpt:
      "Cut your cloud bill by 60% while keeping WordPress blazing fast — with auto-scaling, reserved instances, S3 media offloading and CloudFront caching.",
    author: "Fahim Ahamed",
    date: "Jan 05, 2026",
    readTime: "9 min read",
    coverGradient: "linear-gradient(135deg,#ecfdf5 0%,#6ee7b7 100%)",
    accentColor: "#059669",
    featured: false,
  },
  {
    tag: "Design",
    tagGradient: "linear-gradient(135deg,#ec4899,#a855f7)",
    title: "Micro-Interactions That Delight: A Frontend Motion Guide",
    excerpt:
      "Learn how to implement tasteful, performant animations using CSS and Framer Motion that guide users and make your product feel alive and polished.",
    author: "Sadia Rahman",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    coverGradient: "linear-gradient(135deg,#fff1f2 0%,#fda4af 100%)",
    accentColor: "#ec4899",
    featured: false,
  },
];

const ALL_TAGS = ["All", ...Array.from(new Set(BLOGS.map((b) => b.tag)))];
const PER_PAGE = 6;

/* ═══════════════════════════════════════════════════
   HERO FEATURED CARD (large, top of page)
═══════════════════════════════════════════════════ */
function FeaturedCard({ blog }: { blog: (typeof BLOGS)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className='bp-featured'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cover */}
      <div
        className='bp-featured__cover'
        style={{ background: blog.coverGradient }}
      >
        <div
          className='bp-featured__circle bp-featured__circle--lg'
          style={{ background: blog.accentColor }}
        />
        <div
          className='bp-featured__circle bp-featured__circle--sm'
          style={{ background: blog.accentColor }}
        />
        <span className='bp-featured__flame'>
          <Flame size={13} /> Featured
        </span>
        <span
          className='bp-card__tag'
          style={{
            background: blog.tagGradient,
            position: "absolute",
            top: 52,
            left: 16,
          }}
        >
          <Tag size={10} /> {blog.tag}
        </span>
        <div
          className='bp-featured__arrow'
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered
              ? "translate(0,0) scale(1)"
              : "translate(-4px,4px) scale(0.85)",
          }}
        >
          <ArrowUpRight size={20} />
        </div>
      </div>

      {/* Body */}
      <div className='bp-featured__body'>
        <h2
          className='bp-featured__title'
          style={{ color: hovered ? blog.accentColor : "#0f172a" }}
        >
          {blog.title}
        </h2>
        <p className='bp-featured__excerpt'>{blog.excerpt}</p>
        <div className='bp-card__footer'>
          <div className='bp-card__meta'>
            <span className='bp-card__meta-item'>
              <User size={12} /> {blog.author}
            </span>
            <span className='bp-card__meta-item'>
              <Clock size={12} /> {blog.readTime}
            </span>
          </div>
          <span className='bp-card__date'>{blog.date}</span>
        </div>
      </div>
      <div
        className='bp-card__line'
        style={{
          background: blog.tagGradient,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </article>
  );
}

/* ═══════════════════════════════════════════════════
   STANDARD BLOG CARD (same as homepage)
═══════════════════════════════════════════════════ */
function BlogCard({ blog, index }: { blog: (typeof BLOGS)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className='bp-card'
      style={{ animationDelay: `${index * 60}ms`, background: "#fff" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className='bp-card__cover'
        style={{ background: blog.coverGradient }}
      >
        <div
          className='bp-card__circle bp-card__circle--lg'
          style={{ background: blog.accentColor }}
        />
        <div
          className='bp-card__circle bp-card__circle--sm'
          style={{ background: blog.accentColor }}
        />
        <span className='bp-card__tag' style={{ background: blog.tagGradient }}>
          <Tag size={10} /> {blog.tag}
        </span>
        <div
          className='bp-card__arrow'
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered
              ? "translate(0,0) scale(1)"
              : "translate(-4px,4px) scale(0.85)",
          }}
        >
          <ArrowUpRight size={18} />
        </div>
      </div>
      <div className='bp-card__body'>
        <h3
          className='bp-card__title'
          style={{ color: hovered ? blog.accentColor : "#0f172a" }}
        >
          {blog.title}
        </h3>
        <p className='bp-card__excerpt'>{blog.excerpt}</p>
        <div className='bp-card__footer'>
          <div className='bp-card__meta'>
            <span className='bp-card__meta-item'>
              <User size={12} /> {blog.author}
            </span>
            <span className='bp-card__meta-item'>
              <Clock size={12} /> {blog.readTime}
            </span>
          </div>
          <span className='bp-card__date'>{blog.date}</span>
        </div>
      </div>
      <div
        className='bp-card__line'
        style={{
          background: blog.tagGradient,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </article>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════ */
export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const featured = BLOGS.filter((b) => b.featured);

  const filtered = useMemo(() => {
    let list = BLOGS;
    if (activeTag !== "All") list = list.filter((b) => b.tag === activeTag);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q),
      );
    }
    return list;
  }, [activeTag, search]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleTag = (t: string) => {
    setActiveTag(t);
    setPage(1);
  };
  const handleSearch = (v: string) => {
    setSearch(v);
    setPage(1);
  };

  return (
    <div
      style={{
        background: "#f8faff",
        minHeight: "100vh",
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AnimatedGrid />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Page Hero ── */
        .bp-hero {
          position: relative;
          overflow: hidden;
          background: transparent;
          border-bottom: 1px solid #eef0f6;
          padding: 72px 24px 64px;
          text-align: center;
        }
        .bp-hero::before {
          content: '';
          position: absolute;
          top: -80px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 360px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .bp-hero-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }

        .bp-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11.5px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
          color: #6366f1; background: rgba(99,102,241,.08); border: 1px solid rgba(99,102,241,.2);
          padding: 6px 16px; border-radius: 100px; margin-bottom: 20px;
        }
        .bp-eyebrow::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%; background: #6366f1;
          animation: bp-pulse 2s ease-in-out infinite;
        }
        @keyframes bp-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.5)} }

        .bp-hero-title {
          font-size: clamp(32px,5vw,56px); font-weight: 800; color: #0f172a;
          line-height: 1.12; letter-spacing: -1.5px; margin-bottom: 16px;
        }
        .bp-hero-title span {
          background: linear-gradient(90deg,#6366f1,#38bdf8);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .bp-hero-sub { font-size: 16px; color: #64748b; line-height: 1.7; margin-bottom: 36px; }

        /* Search bar */
        .bp-searchbar {
          display: flex; align-items: center; gap: 0;
          background: #fff; border: 1.5px solid #e2e8f0; border-radius: 100px;
          padding: 8px 8px 8px 20px; max-width: 480px; margin: 0 auto;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          transition: border-color .2s, box-shadow .2s;
        }
        .bp-searchbar:focus-within { border-color: #a5b4fc; box-shadow: 0 4px 24px rgba(99,102,241,0.14); }
        .bp-searchbar svg { color: #94a3b8; flex-shrink: 0; }
        .bp-searchbar input {
          flex: 1; border: none; outline: none; background: transparent;
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14.5px; color: #0f172a;
          padding: 0 12px;
        }
        .bp-searchbar input::placeholder { color: #94a3b8; }
        .bp-clear-btn {
          width: 32px; height: 32px; border-radius: 50%; border: none;
          background: #f1f5f9; color: #64748b; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: background .2s;
        }
        .bp-clear-btn:hover { background: #e2e8f0; }

        /* Stats strip */
        .bp-stats {
          display: flex; justify-content: center; gap: 32px;
          flex-wrap: wrap; margin-top: 32px;
        }
        .bp-stat-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; color: #64748b; font-weight: 500;
        }
        .bp-stat-item svg { color: #6366f1; }
        .bp-stat-item strong { color: #0f172a; font-weight: 700; }

        /* ── Main content ── */
        .bp-main { max-width: 1180px; margin: 0 auto; padding: 64px 24px 100px; position: relative; z-index: 1; }

        /* Featured strip */
        .bp-featured-title {
          font-size: 13px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
          color: #94a3b8; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;
        }
        .bp-featured-title::after { content: ''; flex: 1; height: 1px; background: #eef0f6; }
        .bp-featured-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; margin-bottom: 56px; }

        /* Featured card */
        .bp-featured {
          position: relative; border-radius: 20px; border: 1.5px solid #e8edf5;
          overflow: hidden; cursor: pointer; background: #fff;
          transition: border-color .25s, transform .25s, box-shadow .25s;
          display: flex; flex-direction: column;
        }
        .bp-featured:hover { border-color: #c7d2fe; transform: translateY(-5px); box-shadow: 0 20px 48px rgba(99,102,241,.12); }
        .bp-featured__cover {
          position: relative; height: 220px; overflow: hidden; flex-shrink: 0;
        }
        .bp-featured__circle { position: absolute; border-radius: 50%; opacity: .15; }
        .bp-featured__circle--lg { width: 260px; height: 260px; bottom: -100px; right: -80px; }
        .bp-featured__circle--sm { width: 100px; height: 100px; top: -40px; left: 20px; opacity: .1; }
        .bp-featured__flame {
          position: absolute; top: 16px; left: 16px;
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 10.5px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
          color: #fff; background: linear-gradient(135deg,#f97316,#ef4444);
          padding: 5px 12px; border-radius: 100px;
        }
        .bp-featured__arrow {
          position: absolute; top: 16px; right: 16px;
          width: 38px; height: 38px; background: #fff; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; color: #6366f1;
          box-shadow: 0 4px 12px rgba(0,0,0,.1); transition: opacity .25s, transform .25s;
        }
        .bp-featured__body { padding: 24px 24px 20px; display: flex; flex-direction: column; flex: 1; }
        .bp-featured__title {
          font-size: 19px; font-weight: 800; line-height: 1.35; margin-bottom: 10px;
          transition: color .25s; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .bp-featured__excerpt { font-size: 13.5px; color: #64748b; line-height: 1.65; margin-bottom: 18px; flex: 1; }

        /* Filter tabs */
        .bp-filters {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px; margin-bottom: 32px;
        }
        .bp-filter-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
        .bp-filter-btn {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; font-weight: 600;
          padding: 8px 18px; border-radius: 100px; border: 1.5px solid #e2e8f0;
          background: #fff; color: #64748b; cursor: pointer; transition: all .2s;
        }
        .bp-filter-btn:hover { border-color: #c7d2fe; color: #4f46e5; background: #eef2ff; }
        .bp-filter-btn--active {
          background: linear-gradient(135deg,#6366f1,#818cf8) !important;
          border-color: transparent !important; color: #fff !important;
          box-shadow: 0 4px 14px rgba(99,102,241,.3);
        }
        .bp-result-count { font-size: 13px; color: #94a3b8; font-weight: 500; }
        .bp-result-count strong { color: #6366f1; }

        /* Grid */
        .bp-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }

        /* Standard card */
        .bp-card {
          position: relative; border-radius: 20px; border: 1.5px solid #e8edf5;
          overflow: hidden; cursor: pointer;
          transition: border-color .25s, transform .25s, box-shadow .25s;
          animation: bp-fadeUp .45s ease both; display: flex; flex-direction: column;
        }
        .bp-card:hover { border-color: #c7d2fe; transform: translateY(-6px); box-shadow: 0 20px 48px rgba(99,102,241,.12); }
        @keyframes bp-fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        .bp-card__cover { position: relative; height: 180px; overflow: hidden; flex-shrink: 0; }
        .bp-card__circle { position: absolute; border-radius: 50%; opacity: .15; }
        .bp-card__circle--lg { width: 200px; height: 200px; bottom: -80px; right: -60px; }
        .bp-card__circle--sm { width: 80px; height: 80px; top: -30px; left: 20px; opacity: .1; }
        .bp-card__tag {
          position: absolute; top: 16px; left: 16px;
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 10.5px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
          color: #fff; padding: 5px 12px; border-radius: 100px;
        }
        .bp-card__arrow {
          position: absolute; top: 16px; right: 16px;
          width: 34px; height: 34px; background: #fff; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; color: #6366f1;
          box-shadow: 0 4px 12px rgba(0,0,0,.1); transition: opacity .25s, transform .25s;
        }
        .bp-card__body { padding: 22px 22px 18px; display: flex; flex-direction: column; flex: 1; }
        .bp-card__title {
          font-size: 16px; font-weight: 700; line-height: 1.4; margin-bottom: 10px;
          transition: color .25s; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .bp-card__excerpt {
          font-size: 13px; color: #94a3b8; line-height: 1.65; margin-bottom: 18px; flex: 1;
          display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
        }
        .bp-card__footer { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 1px solid #f1f5f9; }
        .bp-card__meta { display: flex; align-items: center; gap: 12px; }
        .bp-card__meta-item { display: flex; align-items: center; gap: 4px; font-size: 11.5px; color: #94a3b8; font-weight: 500; }
        .bp-card__date { font-size: 11.5px; color: #cbd5e1; font-weight: 500; }
        .bp-card__line { position: absolute; bottom: 0; left: 0; height: 3px; width: 100%; transform-origin: left; transition: transform .35s ease; }

        /* Empty state */
        .bp-empty {
          text-align: center; padding: 80px 24px; grid-column: 1/-1;
        }
        .bp-empty-icon { font-size: 48px; margin-bottom: 16px; }
        .bp-empty-title { font-size: 20px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
        .bp-empty-desc { font-size: 14px; color: #94a3b8; }

        /* ── Pagination ── */
        .bp-pagination {
          display: flex; justify-content: center; align-items: center;
          gap: 8px; margin-top: 56px; flex-wrap: wrap;
        }
        .bp-page-btn {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13.5px; font-weight: 600;
          min-width: 42px; height: 42px; border-radius: 12px;
          border: 1.5px solid #e2e8f0; background: #fff; color: #64748b;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: all .2s; padding: 0 14px;
        }
        .bp-page-btn:hover { border-color: #c7d2fe; color: #4f46e5; background: #eef2ff; }
        .bp-page-btn--active {
          background: linear-gradient(135deg,#6366f1,#818cf8);
          border-color: transparent; color: #fff;
          box-shadow: 0 4px 14px rgba(99,102,241,.3);
        }
        .bp-page-btn:disabled { opacity: .4; cursor: not-allowed; }
        .bp-page-btn:disabled:hover { border-color: #e2e8f0; color: #64748b; background: #fff; }
        .bp-page-ellipsis { font-size: 14px; color: #94a3b8; padding: 0 4px; }

        /* Responsive */
        @media (max-width: 1024px) { .bp-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 768px)  { .bp-featured-grid { grid-template-columns: 1fr; } .bp-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px)  { .bp-grid { grid-template-columns: 1fr; } .bp-filters { flex-direction: column; align-items: flex-start; } }
      `}</style>

      {/* ── PAGE HERO ── */}
      <div className='bp-hero'>
        <div className='bp-hero-inner'>
          <div>
            <span className='bp-eyebrow'>Our Blog</span>
          </div>
          <h1 className='bp-hero-title'>
            Insights, guides &<br />
            <span>developer stories</span>
          </h1>
          <p className='bp-hero-sub'>
            Tutorials, deep dives and industry perspectives from the weDevs
            engineering team.
          </p>

          {/* Search */}
          <div className='bp-searchbar'>
            <Search size={16} />
            <input
              type='text'
              placeholder='Search articles, topics or authors...'
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {search && (
              <button className='bp-clear-btn' onClick={() => handleSearch("")}>
                <X size={14} />
              </button>
            )}
          </div>

          {/* Stats */}
          <div className='bp-stats'>
            <span className='bp-stat-item'>
              <BookOpen size={15} /> <strong>{BLOGS.length}</strong> articles
            </span>
            <span className='bp-stat-item'>
              <User size={15} /> <strong>5</strong> authors
            </span>
            <span className='bp-stat-item'>
              <TrendingUp size={15} /> <strong>Weekly</strong> updates
            </span>
          </div>
        </div>
      </div>

      {/* ── MAIN ── */}
      <div className='bp-main'>
        {/* Featured section — only show when no filter/search */}
        {activeTag === "All" && !search && (
          <>
            <div className='bp-featured-title'>
              <Flame size={14} /> Featured Articles
            </div>
            <div className='bp-featured-grid'>
              {featured.map((blog) => (
                <FeaturedCard key={blog.title} blog={blog} />
              ))}
            </div>
          </>
        )}

        {/* Filter + count row */}
        <div className='bp-filters'>
          <div className='bp-filter-tabs'>
            {ALL_TAGS.map((t) => (
              <button
                key={t}
                className={`bp-filter-btn${activeTag === t ? " bp-filter-btn--active" : ""}`}
                onClick={() => handleTag(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <span className='bp-result-count'>
            <strong>{filtered.length}</strong> article
            {filtered.length !== 1 ? "s" : ""} found
          </span>
        </div>

        {/* Cards grid */}
        <div className='bp-grid'>
          {paginated.length === 0 ? (
            <div className='bp-empty'>
              <div className='bp-empty-icon'>🔍</div>
              <div className='bp-empty-title'>No articles found</div>
              <div className='bp-empty-desc'>
                Try a different keyword or category filter.
              </div>
            </div>
          ) : (
            paginated.map((blog, i) => (
              <BlogCard key={blog.title} blog={blog} index={i} />
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className='bp-pagination'>
            <button
              className='bp-page-btn'
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 1}
              aria-label='Previous page'
            >
              <ChevronLeft size={16} strokeWidth={2.2} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
              const show =
                p === 1 || p === totalPages || Math.abs(p - page) <= 1;
              const ellipsisBefore = p === page - 2 && page > 3;
              const ellipsisAfter = p === page + 2 && page < totalPages - 2;
              if (!show && !ellipsisBefore && !ellipsisAfter) return null;
              if (ellipsisBefore || ellipsisAfter)
                return (
                  <span key={p} className='bp-page-ellipsis'>
                    …
                  </span>
                );
              return (
                <button
                  key={p}
                  className={`bp-page-btn${p === page ? " bp-page-btn--active" : ""}`}
                  onClick={() => {
                    setPage(p);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {p}
                </button>
              );
            })}

            <button
              className='bp-page-btn'
              onClick={() => setPage((p) => p + 1)}
              disabled={page === totalPages}
              aria-label='Next page'
            >
              <ChevronRight size={16} strokeWidth={2.2} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
