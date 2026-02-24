"use client";

import { useState } from "react";
import { ArrowUpRight, Clock, User, Tag } from "lucide-react";
import AnimatedGrid from "../../shared/animatedgrid/animatedgrid";

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
  },
];

function BlogCard({ blog, index }: { blog: (typeof BLOGS)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className='blog-card'
      style={{ animationDelay: `${index * 100}ms`, background: "#fff" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cover area */}
      <div
        className='blog-card__cover'
        style={{ background: blog.coverGradient }}
      >
        {/* Decorative circles */}
        <div
          className='blog-card__circle blog-card__circle--lg'
          style={{ background: blog.accentColor }}
        />
        <div
          className='blog-card__circle blog-card__circle--sm'
          style={{ background: blog.accentColor }}
        />

        {/* Tag pill */}
        <span
          className='blog-card__tag'
          style={{ background: blog.tagGradient }}
        >
          <Tag size={10} />
          {blog.tag}
        </span>

        {/* Arrow */}
        <div
          className='blog-card__arrow'
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

      {/* Body */}
      <div className='blog-card__body'>
        <h3
          className='blog-card__title'
          style={{ color: hovered ? blog.accentColor : "#0f172a" }}
        >
          {blog.title}
        </h3>
        <p className='blog-card__excerpt'>{blog.excerpt}</p>

        {/* Footer */}
        <div className='blog-card__footer'>
          <div className='blog-card__meta'>
            <span className='blog-card__meta-item'>
              <User size={12} /> {blog.author}
            </span>
            <span className='blog-card__meta-item'>
              <Clock size={12} /> {blog.readTime}
            </span>
          </div>
          <span className='blog-card__date'>{blog.date}</span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className='blog-card__line'
        style={{
          background: blog.tagGradient,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </article>
  );
}

export default function BlogSection() {
  return (
    <section
      style={{
        background: "#f8faff",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <AnimatedGrid />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .blog-root * { box-sizing: border-box; margin: 0; padding: 0; }

        .blog-inner {
          position: relative;
          max-width: 1180px;
          margin: 0 auto;
          padding: 50px 24px 42px;
          z-index: 1;
        }

        /* ── Header ── */
        .blog-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .blog-header__left {}

        .blog-eyebrow {
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
          margin-bottom: 16px;
        }
        .blog-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #6366f1;
          animation: blog-pulse 2s ease-in-out infinite;
        }
        @keyframes blog-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.5); }
        }

        .blog-title {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -1px;
        }
        .blog-title span {
          background: linear-gradient(90deg,#6366f1,#38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* View all link */
        .blog-view-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #6366f1;
          background: rgba(99,102,241,0.08);
          border: 1.5px solid rgba(99,102,241,0.2);
          padding: 10px 22px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .blog-view-all:hover {
          background: linear-gradient(135deg,#6366f1,#818cf8);
          border-color: transparent;
          color: #fff;
          box-shadow: 0 6px 20px rgba(99,102,241,0.3);
          transform: translateY(-2px);
        }
        .blog-view-all svg {
          transition: transform 0.2s ease;
        }
        .blog-view-all:hover svg {
          transform: translate(3px,-3px);
        }

        /* ── Grid ── */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
        }

        /* ── Card ── */
        .blog-card {
          position: relative;
          border-radius: 20px;
          border: 1.5px solid #e8edf5;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          animation: blog-fadeUp 0.5s ease both;
          display: flex;
          flex-direction: column;
        }
        .blog-card:hover {
          border-color: #c7d2fe;
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(99,102,241,0.12);
        }

        @keyframes blog-fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* Cover */
        .blog-card__cover {
          position: relative;
          height: 180px;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* Decorative circles in cover */
        .blog-card__circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
        }
        .blog-card__circle--lg {
          width: 200px; height: 200px;
          bottom: -80px; right: -60px;
        }
        .blog-card__circle--sm {
          width: 80px; height: 80px;
          top: -30px; left: 20px;
          opacity: 0.1;
        }

        .blog-card__tag {
          position: absolute;
          top: 16px; left: 16px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #fff;
          padding: 5px 12px;
          border-radius: 100px;
        }

        .blog-card__arrow {
          position: absolute;
          top: 16px; right: 16px;
          width: 34px; height: 34px;
          background: #fff;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #6366f1;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: opacity 0.25s, transform 0.25s;
        }

        /* Body */
        .blog-card__body {
          padding: 22px 22px 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .blog-card__title {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 10px;
          transition: color 0.25s ease;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-card__excerpt {
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.65;
          margin-bottom: 18px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Footer */
        .blog-card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
        }

        .blog-card__meta {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .blog-card__meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11.5px;
          color: #94a3b8;
          font-weight: 500;
        }

        .blog-card__date {
          font-size: 11.5px;
          color: #cbd5e1;
          font-weight: 500;
        }

        /* Accent line */
        .blog-card__line {
          position: absolute;
          bottom: 0; left: 0;
          height: 3px; width: 100%;
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2,1fr); }
          .blog-grid .blog-card:last-child { display: none; }
        }
        @media (max-width: 560px) {
          .blog-grid { grid-template-columns: 1fr; }
          .blog-grid .blog-card:last-child { display: flex; }
          .blog-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className='blog-inner'>
        {/* Header */}
        <div className='blog-header'>
          <div className='blog-header__left'>
            <div>
              <span className='blog-eyebrow'>Our Blog</span>
            </div>
            <h2 className='blog-title'>
              Insights, guides &<br />
              <span>developer stories</span>
            </h2>
          </div>

          <a href='/blog' className='blog-view-all'>
            View all blogs <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Cards */}
        <div className='blog-grid'>
          {BLOGS.map((blog, i) => (
            <BlogCard key={blog.title} blog={blog} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
