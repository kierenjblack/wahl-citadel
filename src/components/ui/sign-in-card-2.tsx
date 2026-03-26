'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { User, Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export function Component() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Enquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:info@wahlcitadel.com?subject=${subject}&body=${body}`;
      setIsLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-sm relative z-10"
      style={{ perspective: 1500 }}
    >
      <motion.div
        className="relative"
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ z: 10 }}
      >
        <div className="relative group">
          {/* Card glow effect */}
          <motion.div
            className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"
            animate={{
              boxShadow: [
                "0 0 10px 2px rgba(252,184,53,0.03)",
                "0 0 15px 5px rgba(252,184,53,0.05)",
                "0 0 10px 2px rgba(252,184,53,0.03)"
              ],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
          />

          {/* Traveling light beam effect */}
          <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-[3px] w-[50%] bg-gradient-to-r from-transparent via-gold to-transparent opacity-70"
              initial={{ filter: "blur(2px)" }}
              animate={{ left: ["-50%", "100%"], opacity: [0.3, 0.7, 0.3], filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"] }}
              transition={{ left: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror" }, filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror" } }}
            />
            <motion.div
              className="absolute top-0 right-0 h-[50%] w-[3px] bg-gradient-to-b from-transparent via-gold to-transparent opacity-70"
              initial={{ filter: "blur(2px)" }}
              animate={{ top: ["-50%", "100%"], opacity: [0.3, 0.7, 0.3], filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"] }}
              transition={{ top: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1, delay: 0.6 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror", delay: 0.6 }, filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: 0.6 } }}
            />
            <motion.div
              className="absolute bottom-0 right-0 h-[3px] w-[50%] bg-gradient-to-r from-transparent via-gold to-transparent opacity-70"
              initial={{ filter: "blur(2px)" }}
              animate={{ right: ["-50%", "100%"], opacity: [0.3, 0.7, 0.3], filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"] }}
              transition={{ right: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1, delay: 1.2 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror", delay: 1.2 }, filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: 1.2 } }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-[50%] w-[3px] bg-gradient-to-b from-transparent via-gold to-transparent opacity-70"
              initial={{ filter: "blur(2px)" }}
              animate={{ bottom: ["-50%", "100%"], opacity: [0.3, 0.7, 0.3], filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"] }}
              transition={{ bottom: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1, delay: 1.8 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror", delay: 1.8 }, filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: 1.8 } }}
            />

            {/* Corner glow spots */}
            <motion.div className="absolute top-0 left-0 h-[5px] w-[5px] rounded-full bg-gold/40 blur-[1px]" animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }} />
            <motion.div className="absolute top-0 right-0 h-[8px] w-[8px] rounded-full bg-gold/60 blur-[2px]" animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 2.4, repeat: Infinity, repeatType: "mirror", delay: 0.5 }} />
            <motion.div className="absolute bottom-0 right-0 h-[8px] w-[8px] rounded-full bg-gold/60 blur-[2px]" animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 2.2, repeat: Infinity, repeatType: "mirror", delay: 1 }} />
            <motion.div className="absolute bottom-0 left-0 h-[5px] w-[5px] rounded-full bg-gold/40 blur-[1px]" animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 2.3, repeat: Infinity, repeatType: "mirror", delay: 1.5 }} />
          </div>

          {/* Card border glow */}
          <div className="absolute -inset-[0.5px] rounded-2xl bg-gradient-to-r from-cream/[0.03] via-cream/[0.07] to-cream/[0.03] opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

          {/* Glass card background */}
          <div className="relative bg-dark/80 backdrop-blur-xl rounded-2xl p-6 border border-cream/[0.05] shadow-2xl overflow-hidden">
            {/* Subtle card inner patterns */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(135deg, white 0.5px, transparent 0.5px), linear-gradient(45deg, white 0.5px, transparent 0.5px)`,
                backgroundSize: '30px 30px'
              }}
            />

            {/* Logo and header */}
            <div className="text-center space-y-1 mb-5">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="mx-auto w-10 h-10 flex items-center justify-center relative overflow-hidden"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" width="32" height="32">
                  <path d="M 14.949 0 L 0 15.394 L 0 30.783 L 14.949 15.394 Z" fill="#fcb835"/>
                  <path d="M 14.949 15.394 L 14.949 30.783 L 29.894 15.394 L 29.894 0 Z" fill="#fcb835"/>
                </svg>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-cream to-cream/80"
              >
                Get in Touch
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-cream/60 text-xs"
              >
                Our team responds to all enquiries promptly
              </motion.p>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div className="space-y-3">
                {/* Name input */}
                <motion.div
                  className={`relative ${focusedInput === "name" ? 'z-10' : ''}`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="relative flex items-center overflow-hidden rounded-lg">
                    <User className={`absolute left-3 w-4 h-4 transition-all duration-300 ${focusedInput === "name" ? 'text-gold' : 'text-cream/40'}`} />
                    <Input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setFocusedInput("name")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      className="w-full bg-cream/5 border-transparent focus:border-gold/30 text-cream placeholder:text-cream/30 h-10 transition-all duration-300 pl-10 pr-3 focus:bg-cream/10 focus-visible:ring-gold/30 focus-visible:border-gold/30"
                    />
                    {focusedInput === "name" && (
                      <motion.div layoutId="input-highlight" className="absolute inset-0 bg-cream/5 -z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} />
                    )}
                  </div>
                </motion.div>

                {/* Mobile input */}
                <motion.div
                  className={`relative ${focusedInput === "mobile" ? 'z-10' : ''}`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="relative flex items-center overflow-hidden rounded-lg">
                    <Phone className={`absolute left-3 w-4 h-4 transition-all duration-300 ${focusedInput === "mobile" ? 'text-gold' : 'text-cream/40'}`} />
                    <Input
                      type="tel"
                      placeholder="Mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      onFocus={() => setFocusedInput("mobile")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      className="w-full bg-cream/5 border-transparent focus:border-gold/30 text-cream placeholder:text-cream/30 h-10 transition-all duration-300 pl-10 pr-3 focus:bg-cream/10 focus-visible:ring-gold/30 focus-visible:border-gold/30"
                    />
                    {focusedInput === "mobile" && (
                      <motion.div layoutId="input-highlight" className="absolute inset-0 bg-cream/5 -z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} />
                    )}
                  </div>
                </motion.div>

                {/* Email input */}
                <motion.div
                  className={`relative ${focusedInput === "email" ? 'z-10' : ''}`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="relative flex items-center overflow-hidden rounded-lg">
                    <Mail className={`absolute left-3 w-4 h-4 transition-all duration-300 ${focusedInput === "email" ? 'text-gold' : 'text-cream/40'}`} />
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedInput("email")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      className="w-full bg-cream/5 border-transparent focus:border-gold/30 text-cream placeholder:text-cream/30 h-10 transition-all duration-300 pl-10 pr-3 focus:bg-cream/10 focus-visible:ring-gold/30 focus-visible:border-gold/30"
                    />
                    {focusedInput === "email" && (
                      <motion.div layoutId="input-highlight" className="absolute inset-0 bg-cream/5 -z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} />
                    )}
                  </div>
                </motion.div>

                {/* Message textarea */}
                <motion.div
                  className={`relative ${focusedInput === "message" ? 'z-10' : ''}`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="relative flex overflow-hidden rounded-lg">
                    <MessageSquare className={`absolute left-3 top-3 w-4 h-4 transition-all duration-300 ${focusedInput === "message" ? 'text-gold' : 'text-cream/40'}`} />
                    <textarea
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => setFocusedInput("message")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      rows={4}
                      className="w-full bg-cream/5 border border-transparent focus:border-gold/30 text-cream placeholder:text-cream/30 transition-all duration-300 pl-10 pr-3 py-3 focus:bg-cream/10 rounded-lg outline-none text-sm resize-none focus-visible:ring-[3px] focus-visible:ring-gold/30"
                    />
                    {focusedInput === "message" && (
                      <motion.div layoutId="input-highlight" className="absolute inset-0 bg-cream/5 -z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} />
                    )}
                  </div>
                </motion.div>
              </motion.div>

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full relative group/button mt-2"
              >
                <div className="absolute inset-0 bg-gold/10 rounded-lg blur-lg opacity-0 group-hover/button:opacity-70 transition-opacity duration-300" />

                <div className="relative overflow-hidden bg-gold text-dark font-medium h-10 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold/0 via-cream/30 to-gold/0 -z-10"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                    style={{ opacity: isLoading ? 1 : 0, transition: 'opacity 0.3s ease' }}
                  />

                  <AnimatePresence mode="wait">
                    {isLoading ? (
                      <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-dark/70 border-t-transparent rounded-full animate-spin" />
                      </motion.div>
                    ) : isSubmitted ? (
                      <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm font-medium">
                        Thank you, we&apos;ll be in touch
                      </motion.span>
                    ) : (
                      <motion.span key="button-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-1 text-sm font-medium">
                        Submit Enquiry
                        <ArrowRight className="w-3 h-3 group-hover/button:translate-x-1 transition-transform duration-300" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>

              {/* Contact details */}
              <motion.div
                className="text-center pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-cream/40 text-xs">
                  or reach us directly at{' '}
                  <a href="mailto:info@wahlcitadel.com" className="text-gold hover:text-gold/80 transition-colors duration-200">
                    info@wahlcitadel.com
                  </a>
                </p>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
