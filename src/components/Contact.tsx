"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  mobile: string;
  email: string;
  message: string;
};

function FloatingLogo() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Large W mark — slowly drifting */}
      <svg
        viewBox="0 0 123 142"
        className="absolute -right-8 -bottom-8 w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] opacity-[0.04] animate-[drift_20s_ease-in-out_infinite]"
      >
        <path d="M61.6672 10.5963L0.335938 76.3174V142.02L61.6672 76.3174V10.5963Z" fill="currentColor" />
        <path d="M61.668 76.3174V142.02L122.999 76.3174V10.5962L61.668 76.3174Z" fill="currentColor" />
      </svg>
      {/* Smaller W mark — counter-drift */}
      <svg
        viewBox="0 0 123 142"
        className="absolute -left-4 top-8 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] opacity-[0.03] animate-[drift-reverse_25s_ease-in-out_infinite]"
      >
        <path d="M61.6672 10.5963L0.335938 76.3174V142.02L61.6672 76.3174V10.5963Z" fill="currentColor" />
        <path d="M61.668 76.3174V142.02L122.999 76.3174V10.5962L61.668 76.3174Z" fill="currentColor" />
      </svg>
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const subject = encodeURIComponent(`Enquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nMobile: ${data.mobile}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:info@wahlcitadel.com?subject=${subject}&body=${body}`;
    reset();
  };

  const inputClasses =
    "w-full rounded-full border border-cream/20 bg-transparent px-5 py-3 text-sm font-light text-cream font-[family-name:var(--font-public-sans)] outline-none transition-[border-color] duration-200";
  const inputErrorClasses =
    "w-full rounded-full border border-red-500 bg-transparent px-5 py-3 text-sm font-light text-cream font-[family-name:var(--font-public-sans)] outline-none transition-[border-color] duration-200";
  const textareaClasses =
    "w-full rounded-xl border border-cream/20 bg-transparent px-5 py-3 text-sm font-light text-cream font-[family-name:var(--font-public-sans)] outline-none resize-none transition-[border-color] duration-200";
  const textareaErrorClasses =
    "w-full rounded-xl border border-red-500 bg-transparent px-5 py-3 text-sm font-light text-cream font-[family-name:var(--font-public-sans)] outline-none resize-none transition-[border-color] duration-200";

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-dark py-24"
    >
      <div className="mx-auto max-w-[1152px] px-5 md:px-10">
        {/* Card wrapper */}
        <div className="relative overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.04] p-5 sm:p-8 md:p-12 text-cream">
          <FloatingLogo />

          <div className="relative z-10 grid-2col">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="mb-5 font-season leading-[1.15] tracking-[-0.01em] text-cream"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 44px)" }}
              >
                The earlier you invest the quicker you get to your best.
              </h2>
              <p className="mb-10 text-sm font-light leading-[1.7] text-cream opacity-55">
                Please fill out the form and our dedicated team will respond to
                your inquiries as soon as possible.
              </p>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[0.8rem] font-light leading-[1.6] text-cream opacity-50">
                    Level 30, South Tower<br />
                    Rialto Building<br />
                    525 Collins Street<br />
                    Melbourne VIC 3000 Australia
                  </p>
                </div>
                <div className="flex gap-6">
                  <a href="tel:+61000000000" className="inline-flex items-center gap-1.5 text-sm font-normal text-gold no-underline">
                    <span className="icon text-[18px]">call</span>
                    Call
                  </a>
                  <a href="mailto:info@wahlcitadel.com" className="inline-flex items-center gap-1.5 text-sm font-normal text-gold no-underline">
                    <span className="icon text-[18px]">mail</span>
                    Email
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className={errors.name ? inputErrorClasses : inputClasses}
                    {...register("name", { required: true })}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Mobile"
                    className={errors.mobile ? inputErrorClasses : inputClasses}
                    {...register("mobile", { required: true })}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className={errors.email ? inputErrorClasses : inputClasses}
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className={errors.message ? textareaErrorClasses : textareaClasses}
                    {...register("message", { required: true })}
                  />
                </div>

                {(errors.name || errors.email || errors.mobile || errors.message) && (
                  <p className="m-0 text-xs text-red-500">
                    Please fill in all fields.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                  style={{ opacity: isSubmitting ? 0.5 : 1 }}
                >
                  {isSubmitting ? "Sending\u2026" : "Submit"}
                </button>

                {isSubmitSuccessful && (
                  <p className="m-0 text-center text-sm text-cream opacity-60">
                    Thank you, we&apos;ll be in touch soon.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
