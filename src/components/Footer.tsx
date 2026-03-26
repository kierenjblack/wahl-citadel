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
    <footer className="overflow-hidden bg-dark-deep">

      <div className="mx-auto max-w-[1152px] px-5 md:px-10 pt-[72px] pb-14">
        <div className="grid-footer">

          {/* Left: contact info + social icons */}
          <div>
            <div className="mb-8 flex gap-2.5">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="btn-icon btn-icon-light" aria-label="LinkedIn">
                <span className="icon text-[18px]">link</span>
              </a>
              <a href="mailto:info@wahlcitadel.com"
                className="btn-icon btn-icon-light" aria-label="Email">
                <span className="icon text-[18px]">mail</span>
              </a>
            </div>
            <p className="mb-4 text-[0.8rem] font-light leading-[1.7] text-cream opacity-45">
              Level 30, South Tower<br />Rialto Building<br />525 Collins Street<br />Melbourne VIC 3000
            </p>
            <a href="mailto:info@wahlcitadel.com"
              className="footer-link mb-1.5 block text-[0.8rem] font-light text-cream opacity-45">
              info@wahlcitadel.com
            </a>
            <a href="tel:+61000000000"
              className="footer-link block text-[0.8rem] font-light text-cream opacity-45">
              (+61) 000 000 000
            </a>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="mb-5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-cream opacity-20">
                {col.heading}
              </p>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}
                      className="footer-link text-sm font-light text-cream opacity-55">
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
      <div className="mx-auto max-w-[1152px] px-5 md:px-10">
        <div className="flex items-center gap-6">
          <div className="h-px flex-1 bg-cream/[0.08]" />
          <Link href="/contact" className="btn btn-cream px-6 py-[9px] text-[0.8rem]">
            Get Started
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1152px] px-5 md:px-10 pt-5 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="m-0 text-[0.72rem] font-light text-cream opacity-20">
            &copy; {new Date().getFullYear()} Wahl Citadel Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="mailto:info@wahlcitadel.com?subject=Terms and Conditions"
              className="footer-link text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-cream opacity-20">
              Terms &amp; Conditions
            </a>
            <a href="mailto:info@wahlcitadel.com?subject=Privacy Policy"
              className="footer-link text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-cream opacity-20">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Oversized brand */}
      <div className="overflow-hidden leading-[0.85] select-none pointer-events-none">
        <p className="m-0 whitespace-nowrap px-6 font-season tracking-[-0.03em]" style={{ fontSize: "clamp(80px, 16vw, 220px)", color: "rgba(255,254,242,0.04)" }}>
          Wahl Citadel.
        </p>
      </div>
    </footer>
  );
}
