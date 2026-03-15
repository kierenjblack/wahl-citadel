import Link from "next/link";
import { investments, statusConfig } from "@/data/investments";

// Find the first CTA across all investments to render below the grid
const globalCta = investments.find((i) => i.cta)?.cta;

export default function InvestmentCards() {
  return (
    <section style={{ backgroundColor: "#292929", padding: "96px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>

        {/* Heading row */}
        <div style={{ marginBottom: "48px" }}>
          <p style={{ color: "#fcb835", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
            Portfolio
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "var(--font-season)", fontSize: "clamp(2rem, 4vw, 52px)", color: "#fffef2", lineHeight: 1.1, letterSpacing: "-0.01em", margin: 0 }}>
              Current Investments
            </h2>

            {/* Status legend */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", paddingBottom: "4px" }}>
              {(Object.entries(statusConfig) as [keyof typeof statusConfig, { color: string; label: string }][]).map(([key, cfg]) => (
                <div key={key} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: cfg.color, flexShrink: 0 }} />
                  <span style={{ color: "#fffef2", opacity: 0.55, fontSize: "0.75rem", fontWeight: 300 }}>{cfg.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards — no fund label, no per-card CTA */}
        <div className="investment-grid">
          {investments.map((inv) => {
            const status = statusConfig[inv.status];
            return (
              <div key={inv.id} style={{
                backgroundColor: "#fffef2",
                borderRadius: "12px",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}>
                {/* Monogram circle */}
                <div style={{
                  width: "80px", height: "80px", borderRadius: "50%",
                  backgroundColor: "#f2f1ec", border: "1px solid rgba(41,41,41,0.1)",
                  marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ color: "#292929", opacity: 0.25, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {inv.company.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                  </span>
                </div>

                {/* Status dot */}
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: status.color, display: "block", marginBottom: "16px" }} />

                {/* Company name */}
                <h3 style={{ fontFamily: "var(--font-season)", fontSize: "1.25rem", color: "#292929", marginBottom: "16px", fontWeight: 400, lineHeight: 1.2 }}>
                  {inv.company}
                </h3>

                {/* Description */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {inv.description.map((para, i) => (
                    <p key={i} style={{ color: "#292929", opacity: 0.65, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA below the grid — applies to all investments, not just one */}
        {globalCta && (
          <div style={{ marginTop: "48px", display: "flex", justifyContent: "center" }}>
            <Link href={globalCta.href} className="btn btn-primary">
              {globalCta.label}
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
