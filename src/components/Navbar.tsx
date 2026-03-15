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
  const linkColor  = isDark ? "#fffef2" : "#292929";
  const logoFilter = isDark ? "invert(1) brightness(10)" : "none";

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: isDark ? "rgba(41,41,41,0.96)" : "transparent",
      backdropFilter: isDark ? "blur(16px)" : "none",
      transition: "background-color 0.3s ease",
    }}>
      <div style={{
        maxWidth: "1152px", margin: "0 auto", padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "72px",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image src="/logo.svg" alt="Wahl Citadel" width={118} height={32}
            style={{ height: "22px", width: "auto", filter: logoFilter, transition: "filter 0.3s ease" }} />
        </Link>

        {/* Desktop nav — hidden below md via CSS class, NO inline display */}
        <nav className="navbar-desktop" style={{ alignItems: "center", gap: "32px" }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{
              color: linkColor, fontSize: "0.875rem", fontWeight: 300,
              fontFamily: "var(--font-public-sans)", textDecoration: "none",
              opacity: pathname === l.href ? 1 : 0.75,
              borderBottom: pathname === l.href ? "1px solid #fcb835" : "1px solid transparent",
              paddingBottom: "2px", transition: "opacity 0.2s",
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className={isDark ? "btn btn-outline-light" : "btn btn-dark"}
            style={{ padding: "9px 22px", fontSize: "0.8rem" }}>
            Get started
          </Link>
        </nav>

        {/* Hamburger — hidden above md via CSS class, NO inline display */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="navbar-hamburger btn-icon"
          style={{ color: linkColor, borderColor: isDark ? "rgba(255,254,242,0.15)" : "rgba(41,41,41,0.15)" }}
          aria-label="Toggle menu"
        >
          <span className="icon" style={{ fontSize: "22px", color: linkColor }}>
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: "#292929", padding: "16px 40px 24px", borderTop: "1px solid rgba(255,254,242,0.08)" }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", color: "#fffef2", padding: "12px 0",
              fontSize: "0.875rem", fontWeight: 300, textDecoration: "none",
              borderBottom: "1px solid rgba(255,254,242,0.06)",
              opacity: pathname === l.href ? 1 : 0.7,
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
            display: "block", marginTop: "16px", backgroundColor: "#fcb835",
            color: "#292929", borderRadius: "40px", padding: "12px 24px",
            textAlign: "center", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none",
          }}>
            Get started
          </Link>
        </div>
      )}
    </header>
  );
}
