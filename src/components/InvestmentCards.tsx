import Link from "next/link";
import { investments, statusConfig } from "@/data/investments";
import { illustrations } from "@/components/InvestmentIllustrations";

// Find the first CTA across all investments to render below the grid
const globalCta = investments.find((i) => i.cta)?.cta;

export default function InvestmentCards() {
  return (
    <section className="bg-dark py-24">
      <div className="mx-auto max-w-[1152px] px-5 md:px-10">

        {/* Heading row */}
        <div className="mb-12">
          <p className="text-gold text-xs font-medium tracking-[0.12em] uppercase mb-3">
            Portfolio
          </p>
          <h2 className="font-season text-cream leading-[1.1] tracking-tight m-0" style={{ fontSize: "clamp(2rem, 4vw, 52px)" }}>
            Current Investments
          </h2>
        </div>

        {/* Cards — no fund label, no per-card CTA */}
        <div className="investment-grid">
          {investments.map((inv) => {
            const status = statusConfig[inv.status];
            const Illustration = illustrations[inv.id];
            return (
              <Link key={inv.id} href={`/investments/${inv.id}`} className="rounded-xl px-5 py-6 sm:px-8 sm:py-8 flex flex-col text-left border border-cream/15 backdrop-blur-xl bg-cream/[0.06] transition-all duration-300 hover:border-gold/50 hover:bg-cream/[0.1] no-underline">
                {/* Status chip */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-medium tracking-wide px-2.5 py-1 rounded-full" style={{ backgroundColor: `${status.color}15`, color: status.color }}>
                    <span className="size-1.5 rounded-full shrink-0" style={{ backgroundColor: status.color }} />
                    {status.label}
                  </span>
                </div>

                {/* Company name */}
                <h3 className="font-season text-xl text-cream mb-5 font-normal leading-[1.2]">
                  {inv.company}
                </h3>

                {/* Sectioned description */}
                <div className="flex flex-col gap-4">
                  {inv.sections.map((section, i) => (
                    <div key={i}>
                      <p className="text-gold text-[0.68rem] font-medium tracking-[0.08em] uppercase mb-1.5">
                        {section.heading}
                      </p>
                      <p className="text-cream/60 text-[0.82rem] font-light leading-[1.7] m-0">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA below the grid — applies to all investments, not just one */}
        {globalCta && (
          <div className="mt-12 flex justify-center">
            <Link href={globalCta.href} className="btn btn-primary">
              {globalCta.label}
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
