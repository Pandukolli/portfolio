"use client";

import { motion } from "framer-motion";

export function PageBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">

      {/* === Fine Grid Lines === */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#8B6914" strokeWidth="0.6" />
          </pattern>
          <pattern id="smallgrid" width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M 12 0 L 0 0 0 12" fill="none" stroke="#8B6914" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#smallgrid)" />
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* === Noise / Grain Texture === */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* === Large Soft Gold Orb — Top Right === */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0.05) 50%, transparent 70%)" }}
      />

      {/* === Soft Warm Orb — Bottom Left === */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-60 -left-40 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(233,230,224,0.1) 50%, transparent 70%)" }}
      />

      {/* === Mid-page subtle orb === */}
      <motion.div
        animate={{ y: [-20, 20, -20], opacity: [0.06, 0.12, 0.06] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut", delay: 6 }}
        className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
      />

      {/* === Decorative Geometric Ring — Top Left === */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        className="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full border border-brand-primary/10"
        style={{ borderStyle: "dashed" }}
      />
      <div className="absolute -top-12 -left-12 w-[280px] h-[280px] rounded-full border border-brand-primary/8" />

      {/* === Decorative Geometric Ring — Bottom Right === */}
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full border border-foreground/[0.04]"
        style={{ borderStyle: "dashed" }}
      />
      <div className="absolute -bottom-16 -right-16 w-[360px] h-[360px] rounded-full border border-brand-primary/[0.06]" />

      {/* === Floating Gold Dot Constellation === */}
      {[
        { top: "15%", left: "8%", size: 2, delay: 0 },
        { top: "28%", left: "92%", size: 3, delay: 1.5 },
        { top: "55%", left: "5%", size: 2, delay: 3 },
        { top: "70%", left: "88%", size: 2.5, delay: 2 },
        { top: "82%", left: "15%", size: 2, delay: 4 },
        { top: "40%", left: "95%", size: 2, delay: 0.8 },
        { top: "10%", left: "50%", size: 1.5, delay: 2.5 },
        { top: "90%", left: "60%", size: 2, delay: 1 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 4 + i * 0.7, ease: "easeInOut", delay: dot.delay }}
          className="absolute rounded-full bg-brand-primary"
          style={{
            top: dot.top,
            left: dot.left,
            width: `${dot.size * 2}px`,
            height: `${dot.size * 2}px`,
          }}
        />
      ))}

      {/* === Diagonal Accent Lines === */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="40%" x2="30%" y2="0" stroke="#D4AF37" strokeWidth="1" />
        <line x1="0" y1="75%" x2="20%" y2="30%" stroke="#D4AF37" strokeWidth="0.7" />
        <line x1="80%" y1="100%" x2="100%" y2="65%" stroke="#D4AF37" strokeWidth="1" />
        <line x1="70%" y1="100%" x2="100%" y2="50%" stroke="#D4AF37" strokeWidth="0.7" />
      </svg>

      {/* === Horizontal Rule Accent Lines === */}
      <div className="absolute top-[33vh] left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.08), transparent)" }} />
      <div className="absolute top-[66vh] left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.08), transparent)" }} />

    </div>
  );
}
