"use client";

import Link from "next/link";

const cols = [
  {
    heading: "MENU",
    links: [
      { label: "About us", href: "/about" },
      { label: "Team",     href: "/team" },
      { label: "Funds",    href: "/funds" },
      { label: "Reviews",  href: "/reviews" },
    ],
  },
  {
    heading: "INVESTMENTS",
    links: [
      { label: "Silica Resources Australia", href: "/funds" },
      { label: "Montem",                     href: "/funds" },
      { label: "AVP",                         href: "/contact" },
    ],
  },
  {
    heading: "CONTACT",
    links: [
      { label: "Get Started", href: "/contact" },
      { label: "Contact",     href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1e1e1e", overflow: "hidden" }}>

      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "72px 40px 56px" }}>
        <div className="grid-footer">

          {/* Left: contact info + social icons */}
          <div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "32px" }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="btn-icon btn-icon-light" aria-label="LinkedIn">
                <span className="icon" style={{ fontSize: "18px" }}>link</span>
              </a>
              <a href="mailto:info@wahlcitadel.com"
                className="btn-icon btn-icon-light" aria-label="Email">
                <span className="icon" style={{ fontSize: "18px" }}>mail</span>
              </a>
            </div>
            <p style={{ color: "#fffef2", opacity: 0.45, fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.7, marginBottom: "16px" }}>
              Level 30, South Tower<br />Rialto Building<br />525 Collins Street<br />Melbourne VIC 3000
            </p>
            <a href="mailto:info@wahlcitadel.com"
              className="footer-link"
              style={{ display: "block", color: "#fffef2", opacity: 0.45, fontSize: "0.8rem", fontWeight: 300, marginBottom: "6px" }}>
              info@wahlcitadel.com
            </a>
            <a href="tel:+61000000000"
              className="footer-link"
              style={{ display: "block", color: "#fffef2", opacity: 0.45, fontSize: "0.8rem", fontWeight: 300 }}>
              (+61) 000 000 000
            </a>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p style={{ color: "#fffef2", opacity: 0.2, fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "20px" }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}
                      className="footer-link"
                      style={{ color: "#fffef2", opacity: 0.55, fontSize: "0.875rem", fontWeight: 300 }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider + CTA */}
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(255,254,242,0.08)" }} />
          <Link href="/contact" className="btn btn-cream"
            style={{ padding: "9px 24px", fontSize: "0.8rem" }}>
            Get Started
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "20px 40px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ color: "#fffef2", opacity: 0.2, fontSize: "0.72rem", fontWeight: 300, margin: 0 }}>
            © {new Date().getFullYear()} Wahl Citadel Pty Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "32px" }}>
            <a href="mailto:info@wahlcitadel.com?subject=Terms and Conditions"
              className="footer-link"
              style={{ color: "#fffef2", opacity: 0.2, fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Terms &amp; Conditions
            </a>
            <a href="mailto:info@wahlcitadel.com?subject=Privacy Policy"
              className="footer-link"
              style={{ color: "#fffef2", opacity: 0.2, fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Oversized brand */}
      <div style={{ overflow: "hidden", lineHeight: 0.85, userSelect: "none", pointerEvents: "none" }}>
        <p style={{ fontFamily: "var(--font-season)", fontSize: "clamp(80px, 16vw, 220px)", color: "rgba(255,254,242,0.04)", margin: 0, padding: "0 24px", whiteSpace: "nowrap", letterSpacing: "-0.03em" }}>
          Wahl Citadel.
        </p>
      </div>
    </footer>
  );
}
