"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  ChevronUp,
} from "lucide-react";
import AnimatedGrid from "@/components/shared/animatedgrid/animatedgrid";

const PRODUCTS = [
  { label: "Dokan Multivendor", href: "/products/dokan-multivendor" },
  { label: "WP User Frontend Pro", href: "/products/wp-user-frontend-pro" },
  { label: "Happy Addons", href: "/products/happy-addons" },
  { label: "WP Project Manager Pro", href: "/products/wp-project-manager-pro" },
  { label: "weMail", href: "/products/wemail" },
  { label: "WP ERP", href: "/products/wp-erp" },
  { label: "Appsero", href: "/products/appsero" },
  { label: "wePOS", href: "/products/wepos" },
];

const SERVICES = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile App Development", href: "/services/app-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Cloud & DevOps", href: "/services/cloud-devops" },
  { label: "WordPress Development", href: "/services/wordpress-development" },
  { label: "SaaS Development", href: "/services/saas-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "IT Consulting", href: "/services/it-consulting" },
];

const LIGHTS = [
  { x: 28, y: 64, c: "#ffe066", d: "0s" },
  { x: 32, y: 70, c: "#fff", d: "0.4s" },
  { x: 58, y: 54, c: "#ffe066", d: "0.8s" },
  { x: 64, y: 62, c: "#a5b4fc", d: "1.2s" },
  { x: 83, y: 68, c: "#fff", d: "0.3s" },
  { x: 90, y: 75, c: "#ffe066", d: "1.5s" },
  { x: 96, y: 68, c: "#fff", d: "0.6s" },
  { x: 100, y: 76, c: "#a5b4fc", d: "2s" },
  { x: 133, y: 73, c: "#ffe066", d: "0.9s" },
  { x: 140, y: 80, c: "#fff", d: "1.7s" },
  { x: 168, y: 58, c: "#ffe066", d: "0.2s" },
  { x: 174, y: 66, c: "#a5b4fc", d: "1.1s" },
  { x: 198, y: 75, c: "#fff", d: "0.7s" },
  { x: 208, y: 82, c: "#ffe066", d: "1.4s" },
  { x: 243, y: 63, c: "#ffe066", d: "0.5s" },
  { x: 250, y: 71, c: "#fff", d: "1.8s" },
  { x: 275, y: 54, c: "#a5b4fc", d: "0.3s" },
  { x: 282, y: 62, c: "#ffe066", d: "1.0s" },
  { x: 304, y: 68, c: "#fff", d: "0.6s" },
  { x: 312, y: 76, c: "#ffe066", d: "1.6s" },
  { x: 343, y: 58, c: "#a5b4fc", d: "0.8s" },
  { x: 350, y: 66, c: "#fff", d: "2.1s" },
  { x: 374, y: 51, c: "#ffe066", d: "0.4s" },
  { x: 380, y: 59, c: "#fff", d: "1.3s" },
  { x: 408, y: 71, c: "#ffe066", d: "0.9s" },
  { x: 416, y: 79, c: "#a5b4fc", d: "1.7s" },
  { x: 448, y: 61, c: "#fff", d: "0.2s" },
  { x: 455, y: 69, c: "#ffe066", d: "1.5s" },
  { x: 478, y: 75, c: "#fff", d: "0.7s" },
  { x: 486, y: 83, c: "#a5b4fc", d: "1.0s" },
  { x: 515, y: 55, c: "#ffe066", d: "0.5s" },
  { x: 522, y: 63, c: "#fff", d: "1.2s" },
  { x: 529, y: 71, c: "#ffe066", d: "1.9s" },
  { x: 548, y: 69, c: "#a5b4fc", d: "0.3s" },
  { x: 556, y: 77, c: "#fff", d: "1.4s" },
  { x: 588, y: 59, c: "#ffe066", d: "0.8s" },
  { x: 596, y: 67, c: "#fff", d: "2.2s" },
  { x: 618, y: 51, c: "#a5b4fc", d: "0.6s" },
  { x: 625, y: 59, c: "#ffe066", d: "1.1s" },
  { x: 644, y: 71, c: "#fff", d: "0.4s" },
  { x: 652, y: 79, c: "#ffe066", d: "1.7s" },
  { x: 688, y: 61, c: "#a5b4fc", d: "0.9s" },
  { x: 696, y: 69, c: "#fff", d: "1.5s" },
  { x: 721, y: 75, c: "#ffe066", d: "0.2s" },
  { x: 729, y: 83, c: "#fff", d: "2.0s" },
  { x: 759, y: 53, c: "#ffe066", d: "0.7s" },
  { x: 766, y: 61, c: "#a5b4fc", d: "1.3s" },
  { x: 789, y: 65, c: "#fff", d: "0.5s" },
  { x: 797, y: 73, c: "#ffe066", d: "1.8s" },
  { x: 829, y: 55, c: "#a5b4fc", d: "0.3s" },
  { x: 836, y: 63, c: "#fff", d: "1.0s" },
  { x: 858, y: 73, c: "#ffe066", d: "0.6s" },
  { x: 866, y: 81, c: "#fff", d: "2.3s" },
  { x: 897, y: 63, c: "#a5b4fc", d: "0.9s" },
  { x: 904, y: 71, c: "#ffe066", d: "1.6s" },
  { x: 929, y: 53, c: "#fff", d: "0.4s" },
  { x: 936, y: 61, c: "#ffe066", d: "1.2s" },
  { x: 955, y: 68, c: "#a5b4fc", d: "0.7s" },
  { x: 963, y: 76, c: "#fff", d: "1.9s" },
  { x: 997, y: 58, c: "#ffe066", d: "0.5s" },
  { x: 1004, y: 66, c: "#fff", d: "1.4s" },
  { x: 1027, y: 51, c: "#a5b4fc", d: "0.8s" },
  { x: 1034, y: 59, c: "#ffe066", d: "2.0s" },
  { x: 1062, y: 71, c: "#fff", d: "0.3s" },
  { x: 1070, y: 79, c: "#ffe066", d: "1.7s" },
  { x: 1102, y: 61, c: "#a5b4fc", d: "0.6s" },
  { x: 1110, y: 69, c: "#fff", d: "1.1s" },
  { x: 1130, y: 75, c: "#ffe066", d: "0.4s" },
  { x: 1138, y: 83, c: "#fff", d: "2.4s" },
  { x: 1168, y: 55, c: "#ffe066", d: "0.9s" },
  { x: 1176, y: 63, c: "#a5b4fc", d: "1.5s" },
  { x: 1200, y: 69, c: "#fff", d: "0.2s" },
  { x: 1208, y: 77, c: "#ffe066", d: "1.8s" },
  { x: 1243, y: 53, c: "#a5b4fc", d: "0.7s" },
  { x: 1250, y: 61, c: "#fff", d: "1.3s" },
  { x: 1283, y: 79, c: "#ffe066", d: "0.5s" },
  { x: 1313, y: 65, c: "#a5b4fc", d: "0.8s" },
  { x: 1321, y: 73, c: "#ffe066", d: "1.6s" },
  { x: 1343, y: 57, c: "#fff", d: "0.3s" },
  { x: 1351, y: 65, c: "#ffe066", d: "1.0s" },
  { x: 1381, y: 81, c: "#a5b4fc", d: "0.6s" },
  { x: 1411, y: 63, c: "#ffe066", d: "1.4s" },
  { x: 1418, y: 71, c: "#fff", d: "2.2s" },
];

const ANTENNA_LIGHTS = [
  { x: 62, y: 39, d: "0s" },
  { x: 287, y: 35, d: "0.5s" },
  { x: 374, y: 31, d: "1s" },
  { x: 519, y: 37, d: "0.3s" },
  { x: 621, y: 29, d: "0.8s" },
  { x: 801, y: 33, d: "1.2s" },
  { x: 963, y: 41, d: "0.4s" },
  { x: 1059, y: 29, d: "0.9s" },
  { x: 1247, y: 31, d: "0.6s" },
  { x: 1415, y: 43, d: "1.5s" },
];

function CitySkyline() {
  return (
    <svg
      viewBox='0 0 1440 120'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
      style={{
        display: "block",
        width: "100%",
        height: "clamp(60px, 8vw, 120px)",
      }}
    >
      <defs>
        <style>{`
          @keyframes winBlink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.1; }
          }
          @keyframes antBlink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .win-light { animation: winBlink 3s ease-in-out infinite; }
          .ant-light { animation: antBlink 1.4s ease-in-out infinite; }
        `}</style>
        <filter id='glow'>
          <feGaussianBlur stdDeviation='1.5' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* Back layer */}
      <g fill='#1e293b' opacity='0.6'>
        <rect x='0' y='80' width='30' height='40' />
        <rect x='25' y='60' width='20' height='60' />
        <rect x='55' y='50' width='14' height='70' />
        <rect x='60' y='40' width='6' height='10' />
        <rect x='80' y='65' width='40' height='55' />
        <rect x='95' y='45' width='12' height='20' />
        <rect x='130' y='70' width='25' height='50' />
        <rect x='165' y='55' width='18' height='65' />
        <rect x='173' y='42' width='4' height='13' />
        <rect x='195' y='72' width='35' height='48' />
        <rect x='240' y='60' width='22' height='60' />
        <rect x='272' y='50' width='16' height='70' />
        <rect x='300' y='65' width='30' height='55' />
        <rect x='340' y='55' width='20' height='65' />
        <rect x='370' y='48' width='25' height='72' />
        <rect x='376' y='36' width='5' height='12' />
        <rect x='405' y='68' width='30' height='52' />
        <rect x='445' y='58' width='18' height='62' />
        <rect x='475' y='72' width='28' height='48' />
        <rect x='512' y='52' width='22' height='68' />
        <rect x='518' y='38' width='5' height='14' />
        <rect x='545' y='66' width='30' height='54' />
        <rect x='585' y='56' width='20' height='64' />
        <rect x='615' y='48' width='16' height='72' />
        <rect x='620' y='34' width='4' height='14' />
        <rect x='640' y='68' width='35' height='52' />
        <rect x='685' y='58' width='22' height='62' />
        <rect x='718' y='72' width='28' height='48' />
        <rect x='756' y='50' width='20' height='70' />
        <rect x='786' y='62' width='30' height='58' />
        <rect x='826' y='52' width='18' height='68' />
        <rect x='854' y='38' width='4' height='14' />
        <rect x='856' y='70' width='28' height='50' />
        <rect x='894' y='60' width='22' height='60' />
        <rect x='926' y='50' width='16' height='70' />
        <rect x='952' y='65' width='32' height='55' />
        <rect x='994' y='55' width='20' height='65' />
        <rect x='1024' y='48' width='25' height='72' />
        <rect x='1059' y='68' width='30' height='52' />
        <rect x='1099' y='58' width='18' height='62' />
        <rect x='1127' y='72' width='28' height='48' />
        <rect x='1165' y='52' width='22' height='68' />
        <rect x='1197' y='66' width='30' height='54' />
        <rect x='1237' y='56' width='20' height='64' />
        <rect x='1267' y='48' width='16' height='72' />
        <rect x='1293' y='68' width='35' height='52' />
        <rect x='1338' y='58' width='22' height='62' />
        <rect x='1370' y='72' width='28' height='48' />
        <rect x='1408' y='50' width='32' height='70' />
      </g>

      {/* Front layer */}
      <g fill='#0A0A0A'>
        <rect x='0' y='88' width='22' height='32' />
        <rect x='18' y='72' width='16' height='48' />
        <rect x='40' y='62' width='30' height='58' />
        <rect x='46' y='50' width='8' height='12' />
        <rect x='78' y='78' width='20' height='42' />
        <rect x='105' y='58' width='14' height='62' />
        <rect x='110' y='44' width='4' height='14' />
        <rect x='127' y='82' width='28' height='38' />
        <rect x='162' y='66' width='18' height='54' />
        <rect x='188' y='56' width='24' height='64' />
        <rect x='220' y='78' width='20' height='42' />
        <rect x='248' y='62' width='26' height='58' />
        <rect x='282' y='52' width='14' height='68' />
        <rect x='286' y='36' width='4' height='16' />
        <rect x='303' y='74' width='22' height='46' />
        <rect x='333' y='60' width='18' height='60' />
        <rect x='360' y='50' width='30' height='70' />
        <rect x='373' y='32' width='5' height='18' />
        <rect x='398' y='76' width='24' height='44' />
        <rect x='432' y='64' width='16' height='56' />
        <rect x='456' y='54' width='26' height='66' />
        <rect x='491' y='78' width='20' height='42' />
        <rect x='520' y='60' width='22' height='60' />
        <rect x='526' y='44' width='5' height='16' />
        <rect x='552' y='72' width='28' height='48' />
        <rect x='590' y='58' width='16' height='62' />
        <rect x='614' y='48' width='24' height='72' />
        <rect x='619' y='30' width='5' height='18' />
        <rect x='648' y='76' width='20' height='44' />
        <rect x='677' y='62' width='26' height='58' />
        <rect x='711' y='52' width='14' height='68' />
        <rect x='734' y='74' width='22' height='46' />
        <rect x='764' y='60' width='20' height='60' />
        <rect x='794' y='50' width='28' height='70' />
        <rect x='800' y='34' width='5' height='16' />
        <rect x='832' y='76' width='20' height='44' />
        <rect x='862' y='62' width='18' height='58' />
        <rect x='890' y='54' width='26' height='66' />
        <rect x='925' y='78' width='20' height='42' />
        <rect x='956' y='60' width='22' height='60' />
        <rect x='962' y='42' width='5' height='18' />
        <rect x='988' y='72' width='30' height='48' />
        <rect x='1028' y='58' width='16' height='62' />
        <rect x='1052' y='48' width='26' height='72' />
        <rect x='1058' y='30' width='5' height='18' />
        <rect x='1088' y='76' width='20' height='44' />
        <rect x='1118' y='62' width='26' height='58' />
        <rect x='1154' y='52' width='14' height='68' />
        <rect x='1178' y='74' width='22' height='46' />
        <rect x='1210' y='60' width='20' height='60' />
        <rect x='1240' y='50' width='30' height='70' />
        <rect x='1246' y='32' width='6' height='18' />
        <rect x='1280' y='76' width='20' height='44' />
        <rect x='1310' y='62' width='18' height='58' />
        <rect x='1340' y='54' width='28' height='66' />
        <rect x='1378' y='78' width='20' height='42' />
        <rect x='1408' y='60' width='32' height='60' />
        <rect x='1414' y='44' width='5' height='16' />
      </g>

      {/* Window lights */}
      <g filter='url(#glow)'>
        {LIGHTS.map((l, i) => (
          <rect
            key={i}
            className='win-light'
            x={l.x}
            y={l.y}
            width='3'
            height='3'
            fill={l.c}
            style={{ animationDelay: l.d }}
          />
        ))}
      </g>

      {/* Antenna red lights */}
      <g filter='url(#glow)'>
        {ANTENNA_LIGHTS.map((a, i) => (
          <rect
            key={i}
            className='ant-light'
            x={a.x}
            y={a.y}
            width='2'
            height='2'
            fill='#ff3333'
            style={{ animationDelay: a.d }}
          />
        ))}
      </g>
    </svg>
  );
}

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .ft-root {
          position: relative;
          overflow: hidden;
        }

        /* Skyline — white bg, dark grid inside */
        .ft-skyline-wrap {
          position: relative;
          background: #f8faff;
          line-height: 0;
        }
        .ft-skyline-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .ft-skyline-wrap svg {
          position: relative;
          z-index: 1;
        }

        /* Dark body */
        .ft-grid-holder {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        /* Footer content area */
        .ft-body {
          position: relative;
          z-index: 1;
        }
        .ft-body::before {
          content: '';
          position: absolute;
          top: -120px; left: -100px;
          width: 500px; height: 500px;
          border-radius: 50%;
          // background: radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .ft-body::after {
          content: '';
          position: absolute;
          bottom: 0; right: -80px;
          width: 400px; height: 400px;
          border-radius: 50%;
          // background: radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .ft-inner {
          position: relative; z-index: 1;
          max-width: 1180px; margin: 0 auto;
          padding: 64px 24px 0;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 48px;
        }

        .ft-logo { margin-bottom: 18px; }
        .ft-logo img { max-width: 180px; filter: brightness(10); }
        .ft-tagline {
          font-size: 13.5px; color: rgba(255,255,255,0.55);
          line-height: 1.75; margin-bottom: 24px;
        }
        .ft-socials { display: flex; gap: 10px; }
        .ft-social {
          width: 38px; height: 38px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.6); cursor: pointer;
          transition: all .2s ease; text-decoration: none;
        }
        .ft-social:hover {
          background: linear-gradient(135deg,#6366f1,#818cf8);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(99,102,241,0.35);
        }

        .ft-col-head {
          font-size: 11px; font-weight: 800;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.35); margin-bottom: 20px;
          display: flex; align-items: center; gap: 10px;
        }
        .ft-col-head::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(255,255,255,0.08);
        }

        .ft-link-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .ft-link {
          display: flex; align-items: center; gap: 7px;
          font-size: 13.5px; color: rgba(255,255,255,0.6);
          text-decoration: none; font-weight: 500;
          transition: color .18s, gap .18s;
          width: fit-content;
        }
        .ft-link:hover { color: #fff; gap: 10px; }
        .ft-link svg { opacity: 0.5; transition: opacity .18s; flex-shrink: 0; }
        .ft-link:hover svg { opacity: 1; color: #6366f1; }

        .ft-addr-row {
          display: flex; align-items: flex-start; gap: 10px;
          margin-bottom: 14px;
        }
        .ft-addr-icon {
          width: 30px; height: 30px; border-radius: 8px;
          background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.25);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 2px;
        }
        .ft-addr-text { font-size: 12.5px; color: rgba(255,255,255,0.55); line-height: 1.6; }
        .ft-addr-text a { color: inherit; text-decoration: none; transition: color .18s; }
        .ft-addr-text a:hover { color: #a5b4fc; }

        .ft-bottom {
          position: relative; z-index: 1;
          max-width: 1180px; margin: 0 auto;
          padding: 28px 24px;
          display: flex; align-items: center; justify-content: space-between;
       
          flex-wrap: wrap; gap: 16px;
        }
        .ft-copy { font-size: 12.5px; color: rgba(255,255,255,0.3); }
        .ft-copy a { color: rgba(255,255,255,0.5); text-decoration: none; transition: color .18s; }
        .ft-copy a:hover { color: #a5b4fc; }

        .ft-bottom-links { display: flex; gap: 24px; }
        .ft-bottom-link {
          font-size: 12.5px; color: rgba(255,255,255,0.35);
          text-decoration: none; transition: color .18s;
        }
        .ft-bottom-link:hover { color: rgba(255,255,255,0.7); }

        .ft-scroll-top {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.25);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: rgba(255,255,255,0.6);
          transition: all .2s;
        }
        .ft-scroll-top:hover {
          background: linear-gradient(135deg,#6366f1,#818cf8);
          border-color: transparent; color: #fff;
          box-shadow: 0 4px 14px rgba(99,102,241,0.4);
        }

        @media (max-width: 1024px) { .ft-inner { grid-template-columns: 1fr 1fr; gap: 36px; } }
        @media (max-width: 640px)  { .ft-inner { grid-template-columns: 1fr; gap: 32px; } .ft-bottom { flex-direction: column; align-items: flex-start; } }
      `}</style>

      {/* ── Single root — grid covers skyline + body both ── */}
      <div className='ft-root'>
        {/* Grid as absolute background — covers everything */}
        <div className='ft-grid-holder'>
          <AnimatedGrid />
        </div>

        {/* Skyline — white bg with dark grid */}
        <div className='ft-skyline-wrap'>
          <div className='ft-skyline-grid'>
            <AnimatedGrid />
          </div>
          <CitySkyline />
        </div>

        {/* Footer content */}
        <div className='ft-body'>
          <div className='ft-inner'>
            {/* Brand */}
            <div>
              <div className='ft-logo'>
                <img src='/logo.png' alt='DevWhite' />
              </div>
              <p className='ft-tagline'>
                &ldquo;DevWhite Limited will help you grow your business in any
                case. We have 100+ services that can change your business
                standard well.&rdquo;
              </p>
              <div className='ft-socials'>
                {[
                  { Icon: Facebook, href: "#" },
                  { Icon: Instagram, href: "#" },
                  { Icon: Linkedin, href: "#" },
                  { Icon: Twitter, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className='ft-social'
                    aria-label='Social link'
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Address */}
            <div>
              <div className='ft-col-head'>Address</div>
              <div className='ft-addr-row'>
                <div className='ft-addr-icon'>
                  <MapPin size={14} color='#818cf8' />
                </div>
                <div className='ft-addr-text'>
                  <a
                    href='https://maps.google.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    128 City Road, London,
                    <br />
                    United Kingdom, EC1V 2NX
                  </a>
                </div>
              </div>
              <div className='ft-addr-row'>
                <div className='ft-addr-icon'>
                  <Mail size={14} color='#818cf8' />
                </div>
                <div className='ft-addr-text'>
                  <a href='mailto:support@devwhite.com'>support@devwhite.com</a>
                </div>
              </div>
              <div className='ft-addr-row' style={{ marginTop: 8 }}>
                <div className='ft-addr-icon'>
                  <MapPin size={14} color='#818cf8' />
                </div>
                <div className='ft-addr-text'>
                  <a
                    href='https://maps.google.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    House#752, Road#10, Ecb Chottor,
                    <br />
                    Dhaka Cantonment, Dhaka-1206
                  </a>
                </div>
              </div>
              <div className='ft-addr-row'>
                <div className='ft-addr-icon'>
                  <Mail size={14} color='#818cf8' />
                </div>
                <div className='ft-addr-text'>
                  <a href='mailto:contact@devwhite.com'>contact@devwhite.com</a>
                </div>
              </div>
              <div className='ft-addr-row'>
                <div className='ft-addr-icon'>
                  <Phone size={14} color='#818cf8' />
                </div>
                <div className='ft-addr-text'>
                  <a href='tel:+8801640210124'>+88 01640-210124</a>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <div className='ft-col-head'>Products</div>
              <ul className='ft-link-list'>
                {PRODUCTS.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className='ft-link'>
                      <ArrowRight size={13} /> {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <div className='ft-col-head'>Services</div>
              <ul className='ft-link-list'>
                {SERVICES.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className='ft-link'>
                      <ArrowRight size={13} /> {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className='ft-bottom'>
            <p className='ft-copy'>
              © {new Date().getFullYear()} <a href='/'>DevWhite Limited</a>. All
              rights reserved.
            </p>
            <div className='ft-bottom-links'>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (l) => (
                  <a key={l} href='#' className='ft-bottom-link'>
                    {l}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
