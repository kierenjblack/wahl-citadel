"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { label: "About us", href: "/about" },
  { label: "Team",     href: "/team" },
  { label: "Funds",    href: "/funds" },
  { label: "Reviews",  href: "/reviews" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = !isHome || scrolled || menuOpen;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-[background-color] duration-300 ease-in-out"
      style={{
        backgroundColor: isDark ? "rgba(41,41,41,0.96)" : "transparent",
        backdropFilter: isDark ? "blur(16px)" : "none",
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1152px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={isDark ? "/logo-white.svg" : "/logo.svg"}
            alt="Wahl Citadel"
            width={472}
            height={153}
            className="h-[28px] w-auto"
            priority
          />
        </Link>

        {/* Desktop nav — hidden below md via CSS class, NO inline display */}
        <nav className="navbar-desktop items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link pb-0.5 text-sm font-light font-[family-name:var(--font-public-sans)] no-underline"
              style={{
                color: isDark ? "#fffef2" : "#292929",
                opacity: pathname === l.href ? 1 : 0.75,
                borderBottom: pathname === l.href ? "1px solid #fcb835" : "1px solid transparent",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`${isDark ? "btn btn-outline-light" : "btn btn-dark"} px-5 py-2 text-[0.78rem]`}
          >
            Get started
          </Link>
        </nav>

        {/* Hamburger — hidden above md via CSS class, NO inline display */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="navbar-hamburger btn-icon"
          style={{
            color: isDark ? "#fffef2" : "#292929",
            borderColor: isDark ? "rgba(255,254,242,0.15)" : "rgba(41,41,41,0.15)",
          }}
          aria-label="Toggle menu"
        >
          <span
            className="icon text-[22px]"
            style={{ color: isDark ? "#fffef2" : "#292929" }}
          >
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-cream/[0.08] bg-dark px-5 md:px-10 pt-4 pb-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-cream/[0.06] py-3 text-sm font-light text-cream no-underline"
              style={{ opacity: pathname === l.href ? 1 : 0.7 }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-full bg-gold px-6 py-3 text-center text-sm font-medium text-dark no-underline"
          >
            Get started
          </Link>
        </div>
      )}
    </header>
  );
}
