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

  const inputBase: React.CSSProperties = {
    width: "100%",
    borderRadius: "40px",
    border: "1px solid rgba(255,254,242,0.2)",
    backgroundColor: "transparent",
    color: "#fffef2",
    padding: "12px 20px",
    fontSize: "0.875rem",
    fontWeight: 300,
    fontFamily: "var(--font-public-sans)",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const inputError: React.CSSProperties = {
    ...inputBase,
    borderColor: "#ef4444",
  };

  const textareaBase: React.CSSProperties = {
    ...inputBase,
    borderRadius: "12px",
    resize: "none",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ backgroundColor: "#292929", padding: "96px 0" }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>
        <div
          className="grid-2col"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-season)",
                fontSize: "clamp(1.8rem, 3.5vw, 44px)",
                color: "#fffef2",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                marginBottom: "20px",
              }}
            >
              The earlier you invest the quicker you get to your best.
            </h2>
            <p style={{ color: "#fffef2", opacity: 0.55, fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "40px" }}>
              Please fill out the form and our dedicated team will respond to
              your inquiries as soon as possible.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <p style={{ color: "#fffef2", opacity: 0.5, fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.6 }}>
                  Level 30, South Tower<br />
                  Rialto Building<br />
                  525 Collins Street<br />
                  Melbourne VIC 3000 Australia
                </p>
              </div>
              <div style={{ display: "flex", gap: "24px" }}>
                <a href="tel:+61000000000" style={{ color: "#fcb835", fontSize: "0.875rem", fontWeight: 400, textDecoration: "none" }}>
                  Call
                </a>
                <a href="mailto:info@wahlcitadel.com" style={{ color: "#fcb835", fontSize: "0.875rem", fontWeight: 400, textDecoration: "none" }}>
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
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  style={errors.name ? inputError : inputBase}
                  {...register("name", { required: true })}
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Mobile"
                  style={errors.mobile ? inputError : inputBase}
                  {...register("mobile", { required: true })}
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  style={errors.email ? inputError : inputBase}
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  rows={5}
                  style={errors.message ? { ...textareaBase, borderColor: "#ef4444" } : textareaBase}
                  {...register("message", { required: true })}
                />
              </div>

              {(errors.name || errors.email || errors.mobile || errors.message) && (
                <p style={{ color: "#ef4444", fontSize: "0.75rem", margin: 0 }}>
                  Please fill in all fields.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: "100%", opacity: isSubmitting ? 0.5 : 1 }}
              >
                {isSubmitting ? "Sending…" : "Submit"}
              </button>

              {isSubmitSuccessful && (
                <p style={{ color: "#fffef2", opacity: 0.6, fontSize: "0.875rem", textAlign: "center", margin: 0 }}>
                  Thank you — we&apos;ll be in touch soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
