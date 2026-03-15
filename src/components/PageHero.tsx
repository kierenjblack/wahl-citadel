interface PageHeroProps {
  eyebrow: string;
  heading: string;
  subtext: string;
}

export default function PageHero({ eyebrow, heading, subtext }: PageHeroProps) {
  return (
    <section style={{ backgroundColor: "#292929", paddingTop: "144px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 40px" }}>
        <p style={{ color: "#fcb835", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
          {eyebrow}
        </p>
        <h1 style={{
          fontFamily: "var(--font-season)",
          fontSize: "clamp(2.5rem, 5vw, 64px)",
          color: "#fffef2",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          marginBottom: "24px",
          maxWidth: "760px",
        }}>
          {heading}
        </h1>
        <p style={{
          color: "#fffef2",
          opacity: 0.6,
          fontWeight: 300,
          fontSize: "1rem",
          lineHeight: 1.75,
          maxWidth: "600px",
        }}>
          {subtext}
        </p>
      </div>
    </section>
  );
}
