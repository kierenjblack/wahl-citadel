"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    title: "Rare Opportunities Lead to Extraordinary Outcomes",
    description:
      "They agreed to sift through as many opportunities as necessary to secure rare opportunities with asymmetric risk/reward. Well managed risk was to be an essential ingredient to enable the engineering of exceptional returns.",
  },
  {
    title: "Success is Engineered",
    description:
      "Exceptional returns don\u2019t happen by chance; they are the result of strategy, expertise and relentless execution.",
  },
  {
    title: "Smart Risk. Big Rewards. Engineered Success",
    description:
      "Our funds were not set up to be just other investments. They were to embrace risk, knowing that bold decisions create the greatest wealth. Risk is to be our friend\u2026 Reckless risk shall not be tolerated.",
  },
  {
    title: "Performance is the Currency of Trust",
    description:
      "Trust was to be a currency, a metric demanding accumulation. It would be earned deal by deal, return by return. A foundation of this was to be alignment\u2026 the first money into any fund is the founding partners\u2026 the last money out is to be the partners. This founding principle has built the most powerful asset of all\u2026 Trust.",
  },
  {
    title: "Investors\u2019 Interests Aligned",
    description:
      "Investors\u2019 success IS Wahl Citadel\u2019s success. Investors\u2019 returns are aligned with the returns to ourselves and other stakeholders.",
  },
];

const stats = [
  { value: "4", label: "Investment Funds" },
  { value: "30+", label: "Years Combined Experience" },
  { value: "Melbourne", label: "Headquartered" },
  { value: "ASX", label: "Listed Company Experience" },
];

export default function AboutFull() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const philRef = useRef(null);
  const philInView = useInView(philRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Narrative + pillars */}
      <section ref={ref} className="bg-dark pt-24 pb-24">
        <div className="mx-auto max-w-[1152px] px-5 md:px-10">

          {/* Two-column intro text */}
          <div className="grid-2col mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="m-0 text-base font-light leading-[1.8] text-cream/75"
            >
              The founders of Wahl Citadel came together to develop and offer a new class of investing. Precision Equity was born. They agreed on principles that would guide strategy, ensure capital meets precision, risk meets reward and ambition transforms into wealth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="flex flex-col gap-5"
            >
              <p className="m-0 text-base font-light leading-[1.8] text-cream/75">
                Our purpose is to turn ambition into wealth, by transforming rare opportunities into exceptional returns.
              </p>
              <p className="m-0 text-base font-light leading-[1.8] text-cream/75">
                Based at Level 30, Rialto Building, we operate from the heart of Melbourne&apos;s financial district, a different way to invest.
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-14 h-px origin-left bg-cream/[0.08]"
          />

          {/* 5 founding principles */}
          <div className="grid-3col">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="flex h-full flex-col rounded-lg border border-cream/[0.08] bg-cream/[0.04] px-7 py-8"
              >
                <span className="mb-4 font-[var(--font-public-sans)] text-[0.7rem] font-semibold tracking-[0.1em] text-gold">
                  0{i + 1}
                </span>
                <h3 className="mb-3.5 font-season text-xl font-normal text-cream">
                  {p.title}
                </h3>
                <p className="m-0 text-sm font-light leading-[1.7] text-cream/60">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section ref={statsRef} className="bg-gold py-16">
        <div className="mx-auto max-w-[1152px] px-5 md:px-10">
          <div className="grid-stats">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <p className="mb-2 font-season text-[clamp(2rem,4vw,48px)] leading-none text-dark">
                  {stat.value}
                </p>
                <p className="m-0 text-xs font-normal uppercase tracking-[0.08em] text-dark/65">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section ref={philRef} className="bg-cream py-28">
        <div className="mx-auto max-w-[1152px] px-5 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={philInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-gold"
          >
            Our philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={philInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-7 font-season text-[clamp(1.8rem,3.5vw,42px)] leading-[1.1] tracking-tight text-dark"
          >
            Precision Equity, a new class of investing.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={philInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="flex max-w-[640px] flex-col gap-5"
          >
            <p className="m-0 text-base font-light leading-[1.75] text-dark/75">
              Welcome to Precision Equity, a new class of investing. Smart risk. Big rewards. A different way to invest!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={philInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="/contact"
              className="inline-block rounded-sm bg-gold px-8 py-3.5 text-sm font-medium tracking-[0.04em] text-dark no-underline"
            >
              Looking to Invest?
            </a>
            <a
              href="/contact"
              className="inline-block rounded-sm border border-dark/20 bg-transparent px-8 py-3.5 text-sm font-medium tracking-[0.04em] text-dark no-underline"
            >
              Looking for Capital?
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
