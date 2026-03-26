"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface BottomCTAProps {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function BottomCTA({
  heading = "Ready to explore what's possible?",
  subtext = "Whether you are seeking growth capital, exploring our funds, or looking to partner, our team is ready to help.",
  primaryLabel = "Get in Touch",
  primaryHref = "/contact",
  secondaryLabel = "View Our Funds",
  secondaryHref = "/funds",
}: BottomCTAProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-dark py-28">
      <div className="mx-auto max-w-[1152px] px-5 md:px-10">
        <div className="border-t border-cream/10 pt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-season text-cream leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 42px)" }}
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-cream/50 font-light text-[0.95rem] leading-[1.75] mb-10 max-w-[520px]"
          >
            {subtext}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 flex-wrap"
          >
            <Link href={primaryHref} className="btn btn-primary">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="btn btn-outline-light">
              {secondaryLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
