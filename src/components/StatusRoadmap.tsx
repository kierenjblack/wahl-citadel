"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { InvestmentStatus } from "@/data/investments";
import { statusConfig } from "@/data/investments";

const stages: InvestmentStatus[] = ["green", "amber", "red"];

function stageIndex(status: InvestmentStatus): number {
  return stages.indexOf(status);
}

export default function StatusRoadmap({ status }: { status: InvestmentStatus }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const activeIdx = stageIndex(status);

  return (
    <div ref={ref} className="mt-14 max-w-[680px]">
      <p className="text-gold text-xs font-medium tracking-[0.12em] uppercase mb-8">
        Investment Stage
      </p>

      <div className="relative">
        {/* Background track */}
        <div className="absolute top-[11px] left-[11px] right-[11px] h-px bg-cream/10" />

        {/* Animated progress line */}
        <motion.div
          className="absolute top-[11px] left-[11px] h-px origin-left"
          style={{ backgroundColor: statusConfig[status].color }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          // Width spans from first dot to current stage dot
          {...(activeIdx === 0 && { style: { width: 0, backgroundColor: statusConfig[status].color } })}
          {...(activeIdx === 1 && { style: { width: "50%", backgroundColor: statusConfig[status].color } })}
          {...(activeIdx === 2 && { style: { width: "calc(100% - 22px)", backgroundColor: statusConfig[status].color } })}
        />

        {/* Stage dots and labels */}
        <div className="relative flex justify-between">
          {stages.map((stage, i) => {
            const cfg = statusConfig[stage];
            const isActive = i <= activeIdx;
            const isCurrent = i === activeIdx;

            return (
              <motion.div
                key={stage}
                className="flex flex-col items-center"
                style={{ width: i === 0 ? "auto" : i === 2 ? "auto" : undefined }}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              >
                {/* Dot */}
                <div className="relative mb-4">
                  {isCurrent && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: cfg.color }}
                      initial={{ scale: 1, opacity: 0.3 }}
                      animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                  <div
                    className="relative size-[22px] rounded-full border-2 flex items-center justify-center transition-colors duration-500"
                    style={{
                      borderColor: isActive ? cfg.color : "rgba(255,254,242,0.12)",
                      backgroundColor: isActive ? cfg.color : "transparent",
                    }}
                  >
                    {isActive && i < activeIdx && (
                      <svg viewBox="0 0 12 12" className="size-3">
                        <path d="M2 6l3 3 5-5" fill="none" stroke="#292929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Label */}
                <p
                  className="text-center text-[0.65rem] sm:text-[0.72rem] font-light leading-[1.4] max-w-[90px] sm:max-w-[140px] m-0 transition-colors duration-500"
                  style={{ color: isActive ? "rgba(255,254,242,0.7)" : "rgba(255,254,242,0.25)" }}
                >
                  {cfg.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
