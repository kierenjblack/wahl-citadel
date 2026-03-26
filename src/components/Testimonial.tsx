"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    fund: "Wind Fund",
    name: "Rob Tindall",
    role: "Director, LKI",
    company: "Silicon Resources Australia",
    paragraphs: [
      "I am pleased to commend Wahl Citadel for the outstanding partnership we experienced during a crucial phase of our business at Silicon Resources Australia. From the beginning, the Wahl Citadel team demonstrated skillful professionalism, providing strategic insights and transparent communication that greatly contributed to the success of our collaboration.",
      "Their commitment to growth, coupled with their expertise, resulted in tailored solutions to infuse the required capital into our business, making Mark, Jason, Stephen, and James invaluable and trusted partners in our journey.",
      "I wholeheartedly recommend the Wahl team to any business seeking a capital partner. Their dedication to excellence and genuine interest in our success set them apart, making our experience not only financially rewarding but marked by trust and a shared commitment to long-term success.",
    ],
  },
  {
    fund: "Earth Fund",
    name: "Partner Review",
    role: "",
    company: "Coming Soon",
    paragraphs: [
      "Additional partner reviews are being prepared and will be published here shortly.",
    ],
    placeholder: true,
  },
  {
    fund: "Water Fund",
    name: "Partner Review",
    role: "",
    company: "Coming Soon",
    paragraphs: [
      "Additional partner reviews are being prepared and will be published here shortly.",
    ],
    placeholder: true,
  },
];

export default function Testimonial() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [current, setCurrent] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const trackContainerRef = useRef<HTMLDivElement>(null);
  const count = testimonials.length;

  useEffect(() => {
    const el = trackContainerRef.current;
    if (!el) return;
    setContainerWidth(el.offsetWidth);
    const ro = new ResizeObserver(() => setContainerWidth(el.offsetWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const goTo = useCallback((i: number) => {
    setCurrent(Math.max(0, Math.min(count - 1, i)));
  }, [count]);

  const handleDragEnd = useCallback((_: unknown, info: { offset: { x: number } }) => {
    const threshold = containerWidth * 0.18;
    if (info.offset.x < -threshold) goTo(current + 1);
    else if (info.offset.x > threshold) goTo(current - 1);
  }, [containerWidth, current, goTo]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-cream py-24"
    >
      <div className="mx-auto max-w-[1152px] px-5 md:px-10">

        {/* Header row */}
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-gold"
            >
              Partner reviews
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="m-0 font-season leading-[1.1] tracking-[-0.01em] text-dark"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 44px)" }}
            >
              What our partners say
            </motion.h2>
          </div>

          {/* Dot navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2"
          >
            {testimonials.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to review ${i + 1}`}
                className="h-2 cursor-pointer rounded-full border-none p-0 transition-all duration-300 ease-in-out"
                style={{
                  width: i === current ? "24px" : "8px",
                  backgroundColor: i === current ? "#292929" : "rgba(41,41,41,0.2)",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Slider track */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          ref={trackContainerRef}
          className="cursor-grab overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{
              left: -(count - 1) * containerWidth,
              right: 0,
            }}
            dragElastic={0.06}
            onDragEnd={handleDragEnd}
            animate={{ x: -current * containerWidth }}
            transition={{ type: "spring", stiffness: 350, damping: 38 }}
            whileTap={{ cursor: "grabbing" }}
            className="flex will-change-transform"
            style={{
              width: containerWidth ? `${count * containerWidth}px` : "100%",
            }}
          >
            {testimonials.map((slide, i) => (
              <div
                key={i}
                className="shrink-0 select-none"
                style={{
                  width: containerWidth ? `${containerWidth}px` : "100%",
                }}
              >
                {slide.placeholder ? (
                  /* Placeholder slide */
                  <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-dark/15">
                    <div className="text-center">
                      <div className="mx-auto mb-4 h-px w-8 bg-dark/15" />
                      <p className="text-[0.85rem] font-light text-dark opacity-25">
                        Review coming soon
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Real review slide */
                  <div className="grid-split items-start">
                    {/* Attribution */}
                    <div>
                      <p className="mb-1 font-season text-[1.05rem] font-normal text-dark">
                        {slide.name}
                      </p>
                      {slide.role && (
                        <p className="m-0 mb-0.5 text-[0.8rem] font-light text-dark opacity-50">
                          {slide.role}
                        </p>
                      )}
                      <p className="m-0 text-[0.8rem] font-light text-dark opacity-35">
                        {slide.company}
                      </p>
                    </div>

                    {/* Quote */}
                    <div>
                      {slide.paragraphs.map((para, j) => (
                        <p key={j} className={`text-base font-light leading-[1.8] text-dark opacity-75 ${j > 0 ? "mt-[18px]" : "m-0"}`}>
                          {j === 0 && (
                            <span className="mr-0.5 align-baseline font-season text-[1.4rem] leading-none text-gold">
                              &ldquo;
                            </span>
                          )}
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Prev / Next arrows */}
        <div className="mt-12 flex gap-3">
          {[
            { dir: -1, icon: "arrow_back" },
            { dir:  1, icon: "arrow_forward" },
          ].map(({ dir, icon }) => {
            const disabled = dir === -1 ? current === 0 : current === count - 1;
            return (
              <button
                type="button"
                key={dir}
                onClick={() => goTo(current + dir)}
                disabled={disabled}
                aria-label={dir === -1 ? "Previous" : "Next"}
                className="btn-icon-ghost"
              >
                <span className="icon">{icon}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
