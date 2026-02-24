"use client";

import AnimatedGrid from "../../shared/animatedgrid/animatedgrid";

const phpLines = [
  {
    ln: 1,
    code: (
      <>
        <span className='kw'>namespace </span>
        <span className='fn'>App\Http\Controllers</span>
        <span className='pl'>;</span>
      </>
    ),
  },
  { ln: 2, code: <span className='cm'>{"// Laravel Controller"}</span> },
  {
    ln: 3,
    code: (
      <>
        <span className='kw'>class </span>
        <span className='fn'>UserController</span>
        <span className='pl'> extends </span>
        <span className='fn'>Controller</span>
      </>
    ),
  },
  { ln: 4, code: <span className='pl'>{"{"}</span> },
  {
    ln: 5,
    code: (
      <>
        <span className='pl'>{"  "}</span>
        <span className='kw'>public function </span>
        <span className='fn'>index</span>
        <span className='pl'>(): </span>
        <span className='vr'>JsonResponse</span>
      </>
    ),
  },
  {
    ln: 6,
    code: (
      <>
        <span className='pl'>{"  { return "}</span>
        <span className='fn'>response</span>
        <span className='pl'>()-&gt;</span>
        <span className='fn'>json</span>
        <span className='pl'>{"($users); }"}</span>
      </>
    ),
  },
  { ln: 7, code: <span className='pl'>{"}"}</span> },
];

const mernLines = [
  {
    ln: 1,
    code: (
      <>
        <span className='kw'>import </span>
        <span className='pl'>{"{ "}</span>
        <span className='fn'>useQuery</span>
        <span className='pl'>{" } "}</span>
        <span className='kw'>from </span>
        <span className='st'>&apos;@tanstack/react-query&apos;</span>
      </>
    ),
  },
  {
    ln: 2,
    code: <span className='cm'>{"// Fetch users from Express API"}</span>,
  },
  {
    ln: 3,
    code: (
      <>
        <span className='kw'>const </span>
        <span className='fn'>useUsers</span>
        <span className='pl'>{" = () => "}</span>
        <span className='fn'>useQuery</span>
        <span className='pl'>{"({"}</span>
      </>
    ),
  },
  {
    ln: 4,
    code: (
      <>
        <span className='pl'>{"  queryKey: ["}</span>
        <span className='st'>&apos;users&apos;</span>
        <span className='pl'>{"],"}</span>
      </>
    ),
  },
  {
    ln: 5,
    code: (
      <>
        <span className='pl'>{"  queryFn: () => "}</span>
        <span className='fn'>fetch</span>
        <span className='pl'>{"("}</span>
        <span className='st'>&apos;/api/users&apos;</span>
        <span className='pl'>{")"}</span>
      </>
    ),
  },
  {
    ln: 6,
    code: (
      <>
        <span className='pl'>{"    .then(r => r."}</span>
        <span className='fn'>json</span>
        <span className='pl'>{"())"}</span>
      </>
    ),
  },
  { ln: 7, code: <span className='pl'>{"})"} </span> },
];

const phpPills = [
  { label: "Laravel", color: "#ef4444", bg: "#fef2f2" },
  { label: "WordPress", color: "#6366f1", bg: "#eef2ff" },
  { label: "Composer", color: "#7c3aed", bg: "#f5f3ff" },
  { label: "MySQL", color: "#0891b2", bg: "#ecfeff" },
];

const mernPills = [
  { label: "MongoDB", color: "#16a34a", bg: "#f0fdf4" },
  { label: "Express", color: "#374151", bg: "#f9fafb" },
  { label: "React", color: "#0284c7", bg: "#f0f9ff" },
  { label: "Node.js", color: "#15803d", bg: "#f0fdf4" },
];

export default function DeveloperSection() {
  return (
    <section className='relative' style={{ background: "#f9faff" }}>
      <AnimatedGrid />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Fira+Code:wght@400;500&display=swap');

        .dev-section * { box-sizing: border-box; margin: 0; padding: 0; }

        .dev-section {
          font-family: 'Nunito', sans-serif;
          background: transparent;
          padding: 50px 24px 50px;
          text-align: center;
          position: relative;
          overflow: visible;
          z-index: 1;
        }

        .dev-heading {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          color: #1a202c;
          line-height: 1.25;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .dev-subheading {
          font-size: 15px;
          color: #718096;
          line-height: 1.7;
          max-width: 400px;
          margin: 0 auto 64px;
        }

        .dev-cards {
          display: flex;
          justify-content: center;
          gap: 36px;
          flex-wrap: wrap;
          max-width: 960px;
          margin: 0 auto;
        }

        .dev-card {
          width: 420px;
          background: #fff;
          border-radius: 20px;
          border: 1px solid #e8ecf4;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: left;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .dev-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(99,102,241,0.13);
        }

        .dev-card-illus {
          position: relative;
          height: 224px;
          overflow: hidden;
          padding: 48px 20px 0;
        }

        .badge-float {
          position: absolute;
          top: 14px;
          right: 16px;
          display: flex;
          align-items: center;
          gap: 7px;
          background: #fff;
          border-radius: 12px;
          padding: 7px 13px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.11);
          font-size: 12px;
          font-weight: 700;
          color: #1a202c;
          border: 1px solid #f0f0f0;
          z-index: 5;
          animation: floatBob 3s ease-in-out infinite;
        }

        @keyframes floatBob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-5px); }
        }

        .editor-wrap { border-radius: 10px; overflow: hidden; }

        .editor-chrome {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #1e2433;
          padding: 9px 14px;
        }
        .chrome-dot { width: 10px; height: 10px; border-radius: 50%; }
        .chrome-tab {
          margin-left: 8px;
          font-family: 'Fira Code', monospace;
          font-size: 11px;
          color: #8892b0;
          background: #2d3655;
          padding: 3px 11px;
          border-radius: 5px 5px 0 0;
        }
        .chrome-tab.active { color: #cdd6f4; background: #252d3f; }

        .editor-body {
          background: #252d3f;
          padding: 12px 14px;
          font-family: 'Fira Code', monospace;
          font-size: 11.5px;
          line-height: 1.85;
        }
        .code-row { display: flex; gap: 12px; }
        .ln  { color: #3d4f7c; min-width: 14px; text-align: right; user-select: none; }
        .kw  { color: #c792ea; }
        .fn  { color: #82aaff; }
        .st  { color: #c3e88d; }
        .cm  { color: #546e7a; font-style: italic; }
        .vr  { color: #f07178; }
        .pl  { color: #a6accd; }

        .dev-card-body { padding: 18px 22px 22px; }

        .card-label {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 11px;
          border-radius: 20px;
          margin-bottom: 9px;
        }

        .card-title {
          font-size: 19px;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 7px;
          letter-spacing: -0.3px;
        }

        .card-desc {
          font-size: 13px;
          color: #718096;
          line-height: 1.6;
          margin-bottom: 14px;
        }

        .stack-pills { display: flex; flex-wrap: wrap; gap: 7px; }
        .pill {
          font-size: 11.5px;
          font-weight: 700;
          padding: 4px 11px;
          border-radius: 20px;
          border: 1.5px solid;
        }
      `}</style>

      <section className='dev-section'>
        <h2 className='dev-heading'>
          Dedicated Product Company
          <br />
          For Developers
        </h2>
        <p className='dev-subheading'>
          We build powerful tools and products to enhance
          <br />
          your development experience.
        </p>

        <div className='dev-cards'>
          {/* ── PHP Card ── */}
          <div className='dev-card'>
            <div
              className='dev-card-illus'
              style={{ background: "linear-gradient(160deg,#f0f0ff,#e8ecff)" }}
            >
              <div className='badge-float'>
                <span style={{ fontSize: 17 }}>🐘</span>
                <span>PHP 8.3</span>
              </div>
              <div className='editor-wrap'>
                <div className='editor-chrome'>
                  <span
                    className='chrome-dot'
                    style={{ background: "#ff5f57" }}
                  />
                  <span
                    className='chrome-dot'
                    style={{ background: "#febc2e" }}
                  />
                  <span
                    className='chrome-dot'
                    style={{ background: "#28c840" }}
                  />
                  <span className='chrome-tab active'>Controller.php</span>
                  <span className='chrome-tab'>Model.php</span>
                </div>
                <div className='editor-body'>
                  {phpLines.map(({ ln, code }) => (
                    <div key={ln} className='code-row'>
                      <span className='ln'>{ln}</span>
                      <span>{code}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='dev-card-body'>
              <span
                className='card-label'
                style={{ background: "#ede9fe", color: "#6d28d9" }}
              >
                ⚡ Backend
              </span>
              <h3 className='card-title'>For PHP Developers</h3>
              <p className='card-desc'>
                Build scalable backends, REST APIs &amp; CMS solutions with the
                modern PHP ecosystem.
              </p>
              <div className='stack-pills'>
                {phpPills.map((p) => (
                  <span
                    key={p.label}
                    className='pill'
                    style={{
                      color: p.color,
                      borderColor: p.color + "33",
                      background: p.bg,
                    }}
                  >
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── MERN Card ── */}
          <div className='dev-card'>
            <div
              className='dev-card-illus'
              style={{ background: "linear-gradient(160deg,#fff7ed,#ffedd5)" }}
            >
              <div className='badge-float' style={{ animationDelay: "0.6s" }}>
                <svg width='17' height='17' viewBox='0 0 24 24' fill='none'>
                  <circle cx='12' cy='12' r='2.5' fill='#61dafb' />
                  <ellipse
                    cx='12'
                    cy='12'
                    rx='10'
                    ry='4'
                    stroke='#61dafb'
                    strokeWidth='1.8'
                    fill='none'
                  />
                  <ellipse
                    cx='12'
                    cy='12'
                    rx='10'
                    ry='4'
                    stroke='#61dafb'
                    strokeWidth='1.8'
                    fill='none'
                    transform='rotate(60 12 12)'
                  />
                  <ellipse
                    cx='12'
                    cy='12'
                    rx='10'
                    ry='4'
                    stroke='#61dafb'
                    strokeWidth='1.8'
                    fill='none'
                    transform='rotate(120 12 12)'
                  />
                </svg>
                <span>React 19</span>
              </div>
              <div className='editor-wrap'>
                <div className='editor-chrome'>
                  <span
                    className='chrome-dot'
                    style={{ background: "#ff5f57" }}
                  />
                  <span
                    className='chrome-dot'
                    style={{ background: "#febc2e" }}
                  />
                  <span
                    className='chrome-dot'
                    style={{ background: "#28c840" }}
                  />
                  <span className='chrome-tab active'>api.ts</span>
                  <span className='chrome-tab'>App.tsx</span>
                </div>
                <div className='editor-body'>
                  {mernLines.map(({ ln, code }) => (
                    <div key={ln} className='code-row'>
                      <span className='ln'>{ln}</span>
                      <span>{code}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='dev-card-body'>
              <span
                className='card-label'
                style={{ background: "#fff7ed", color: "#c2410c" }}
              >
                🚀 Fullstack
              </span>
              <h3 className='card-title'>For MERN Developers</h3>
              <p className='card-desc'>
                Build modern full-stack apps with JavaScript end-to-end — from
                database to UI.
              </p>
              <div className='stack-pills'>
                {mernPills.map((p) => (
                  <span
                    key={p.label}
                    className='pill'
                    style={{
                      color: p.color,
                      borderColor: p.color + "33",
                      background: p.bg,
                    }}
                  >
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
