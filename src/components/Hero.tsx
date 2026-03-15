"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

// Layered travelling sine waves — amplitude scales with isMobile
function getWaveOffset(i: number, n: number, t: number, mobile: boolean): number {
  const pos = i / n;
  const amp = mobile ? 1.6 : 1.0;
  const w1 =  0.18 * amp * Math.sin(pos * Math.PI * 4 - t * 1.1);
  const w2 =  0.10 * amp * Math.sin(pos * Math.PI * 7 + t * 1.7);
  const w3 =  0.08 * amp * Math.sin(pos * Math.PI * 2.5 - t * 0.6);
  return w1 + w2 + w3;
}

function buildBaseHeights(n: number): number[] {
  return Array.from({ length: n }, (_, i) =>
    0.38 + 0.18 * Math.abs(Math.sin(i * 0.47 + 1.2))
  );
}

function getBarHeights(
  mouseXNorm: number | null,
  t: number,
  base: number[],
  mobile: boolean
): number[] {
  const n = base.length;
  return base.map((b, i) => {
    const wave = getWaveOffset(i, n, t, mobile);
    if (mouseXNorm === null) return Math.max(0.04, Math.min(0.96, b + wave));

    const barCenter = (i + 0.5) / n;
    const dist = Math.abs(barCenter - mouseXNorm);
    const σDip  = 0.09;
    const σRise = 0.26;
    const dip   = Math.exp(-(dist * dist) / (2 * σDip  * σDip));
    const rise  = Math.exp(-(dist * dist) / (2 * σRise * σRise));
    // More exaggerated effect on mobile virtual cursor
    const strength = mobile ? 1.6 : 1.0;
    const mouseEffect = strength * (-0.40 * dip + 0.22 * rise);

    return Math.max(0.04, Math.min(0.96, b + wave + mouseEffect));
  });
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const targetX    = useRef<number | null>(null);
  const currentX   = useRef<number | null>(null);
  const rafRef     = useRef<number>(0);
  const startTime  = useRef<number>(performance.now());

  const [mobile, setMobile]   = useState(false);
  const [numBars, setNumBars] = useState(64);
  const [heights, setHeights] = useState<number[]>(() => buildBaseHeights(64));

  // Detect mobile and set bar count
  useEffect(() => {
    const check = () => {
      const isMob = window.innerWidth < 640;
      setMobile(isMob);
      const n = isMob ? 14 : 64;
      setNumBars(n);
      setHeights(buildBaseHeights(n));
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // RAF loop
  useEffect(() => {
    const base = buildBaseHeights(numBars);

    function loop() {
      const t = (performance.now() - startTime.current) / 1000;

      // On mobile: oscillating virtual cursor sweeps across the hero
      if (mobile) {
        currentX.current = 0.5 + 0.44 * Math.sin(t * 0.38);
      } else {
        if (targetX.current !== null) {
          if (currentX.current === null) currentX.current = targetX.current;
          else currentX.current += (targetX.current - currentX.current) * 0.09;
        } else {
          currentX.current = null;
        }
      }

      setHeights(getBarHeights(currentX.current, t, base, mobile));
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [numBars, mobile]);

  const onMouseMove = useCallback((e: MouseEvent) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    targetX.current = (e.clientX - rect.left) / rect.width;
  }, []);

  const onMouseLeave = useCallback(() => {
    targetX.current = null;
  }, []);

  useEffect(() => {
    if (mobile) return; // no mouse on mobile
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);
    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [mobile, onMouseMove, onMouseLeave]);

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#fffef2",
        cursor: "default",
      }}
    >
      {/* ─── Bar graph ─────────────────────────────────────────────────── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: mobile ? "45%" : "100%",
          top: mobile ? "auto" : 0,
          display: "flex",
          alignItems: "flex-end",
          gap: mobile ? "5px" : "3px",
          padding: mobile ? "0 5px" : "0 3px",
          pointerEvents: "none",
          zIndex: 0,
          WebkitMaskImage: "linear-gradient(to top, black 0%, black 40%, transparent 72%)",
          maskImage: "linear-gradient(to top, black 0%, black 40%, transparent 72%)",
        }}
      >
        {heights.map((h, i) => {
          const topStop = Math.round(h * 100);
          return (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h * 100}%`,
                borderRadius: "2px 2px 0 0",
                background: `linear-gradient(
                  to top,
                  #fcb835 0%,
                  #fcb835 ${Math.max(0, topStop - 40)}%,
                  rgba(252,184,53,0.45) ${topStop}%,
                  transparent 100%
                )`,
                opacity: 0.28 + h * 0.30,
                willChange: "height",
              }}
            />
          );
        })}
      </div>

      {/* ─── Hero content ──────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "860px",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-season)",
            fontSize: "clamp(3.2rem, 8vw, 96px)",
            color: "#292929",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            marginBottom: "2rem",
          }}
        >
          Enhance Your Returns
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          style={{
            color: "#292929",
            opacity: 0.65,
            fontFamily: "var(--font-public-sans)",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: "520px",
            margin: "0 auto 2.5rem",
          }}
        >
          Welcome to Wahl Citadel, where financial possibilities meet a proven
          track record. Our expert team and extensive network empower businesses
          to secure essential growth funding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a href="/funds" className="btn btn-dark">Explore Our Funds</a>
          <a href="/contact" className="btn btn-outline">Raise Growth Capital</a>
        </motion.div>
      </div>
    </section>
  );
}
