"use client";

import { useEffect, useRef } from "react";

const gold = "#fcb835";
const sw = 1;
const common = { fill: "none", stroke: gold, strokeWidth: sw, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function useDrawAnimation(svgRef: React.RefObject<SVGSVGElement | null>) {
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll<SVGElement>("line, polyline, polygon, path, rect, circle");
    paths.forEach((el) => {
      const len =
        "getTotalLength" in el
          ? (el as SVGGeometryElement).getTotalLength()
          : 200;
      (el as SVGElement).style.strokeDasharray = `${len}`;
      (el as SVGElement).style.strokeDashoffset = `${len}`;
      (el as SVGElement).style.animation = "none";
    });

    // Trigger reflow then animate
    void svg.getBoundingClientRect();

    paths.forEach((el, i) => {
      const len =
        "getTotalLength" in el
          ? (el as SVGGeometryElement).getTotalLength()
          : 200;
      (el as SVGElement).style.strokeDasharray = `${len}`;
      (el as SVGElement).style.strokeDashoffset = `${len}`;
      (el as SVGElement).style.transition = `stroke-dashoffset ${0.6 + i * 0.12}s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.08}s`;
      (el as SVGElement).style.strokeDashoffset = "0";
    });
  }, [svgRef]);
}

/** Silica / mining — mountains and crystal */
export function SRAIllustration({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  useDrawAnimation(ref);
  return (
    <svg ref={ref} viewBox="0 0 120 80" className={className} aria-hidden>
      <polyline points="4,68 20,32 32,52 44,24 56,52 68,36 80,56 96,20 116,68" {...common} />
      <polygon points="50,58 54,44 60,40 66,44 70,58" {...common} />
      <line x1="60" y1="40" x2="60" y2="58" {...common} opacity={0.5} />
      <line x1="4" y1="68" x2="116" y2="68" {...common} opacity={0.35} />
      <circle cx="30" cy="48" r="1" fill={gold} opacity={0.4} stroke="none" />
      <circle cx="82" cy="44" r="1" fill={gold} opacity={0.4} stroke="none" />
      <circle cx="60" cy="32" r="0.8" fill={gold} opacity={0.3} stroke="none" />
    </svg>
  );
}

/** Litigation / legal — scales of justice */
export function MontemIllustration({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  useDrawAnimation(ref);
  return (
    <svg ref={ref} viewBox="0 0 120 80" className={className} aria-hidden>
      <line x1="60" y1="14" x2="60" y2="68" {...common} />
      <line x1="44" y1="68" x2="76" y2="68" {...common} />
      <line x1="50" y1="72" x2="70" y2="72" {...common} opacity={0.5} />
      <line x1="20" y1="24" x2="100" y2="24" {...common} />
      <circle cx="60" cy="14" r="3" {...common} />
      <line x1="20" y1="24" x2="12" y2="44" {...common} />
      <line x1="20" y1="24" x2="28" y2="44" {...common} />
      <path d="M12,44 Q20,52 28,44" {...common} />
      <line x1="100" y1="24" x2="92" y2="44" {...common} />
      <line x1="100" y1="24" x2="108" y2="44" {...common} />
      <path d="M92,44 Q100,52 108,44" {...common} />
      <line x1="16" y1="38" x2="24" y2="38" {...common} opacity={0.35} />
      <line x1="96" y1="38" x2="104" y2="38" {...common} opacity={0.35} />
    </svg>
  );
}

/** Property development — buildings, crane, growth */
export function AVPIllustration({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  useDrawAnimation(ref);
  return (
    <svg ref={ref} viewBox="0 0 120 80" className={className} aria-hidden>
      <line x1="4" y1="68" x2="116" y2="68" {...common} opacity={0.35} />
      <rect x="16" y="28" width="18" height="40" rx="1" {...common} />
      <line x1="22" y1="34" x2="22" y2="38" {...common} opacity={0.5} />
      <line x1="28" y1="34" x2="28" y2="38" {...common} opacity={0.5} />
      <line x1="22" y1="44" x2="22" y2="48" {...common} opacity={0.5} />
      <line x1="28" y1="44" x2="28" y2="48" {...common} opacity={0.5} />
      <line x1="22" y1="54" x2="28" y2="54" {...common} opacity={0.5} />
      <rect x="40" y="38" width="20" height="30" rx="1" {...common} />
      <line x1="46" y1="44" x2="46" y2="48" {...common} opacity={0.5} />
      <line x1="54" y1="44" x2="54" y2="48" {...common} opacity={0.5} />
      <line x1="46" y1="54" x2="54" y2="54" {...common} opacity={0.5} />
      <line x1="80" y1="12" x2="80" y2="68" {...common} />
      <line x1="80" y1="12" x2="108" y2="12" {...common} />
      <line x1="80" y1="12" x2="68" y2="12" {...common} />
      <line x1="108" y1="12" x2="108" y2="24" {...common} strokeDasharray="2 2" />
      <line x1="80" y1="28" x2="68" y2="12" {...common} opacity={0.5} />
      <rect x="96" y="50" width="14" height="18" rx="1" {...common} />
      <line x1="100" y1="56" x2="106" y2="56" {...common} opacity={0.5} />
      <polyline points="86,58 90,48 94,52 100,40" {...common} opacity={0.6} />
      <polyline points="97,40 100,40 100,43" {...common} opacity={0.6} />
    </svg>
  );
}

export const illustrations: Record<string, React.FC<{ className?: string }>> = {
  sra: SRAIllustration,
  montem: MontemIllustration,
  avp: AVPIllustration,
};
