import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { investments, statusConfig } from "@/data/investments";
import { illustrations } from "@/components/InvestmentIllustrations";
import StatusRoadmap from "@/components/StatusRoadmap";
import BottomCTA from "@/components/BottomCTA";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return investments.map((inv) => ({ id: inv.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const inv = investments.find((i) => i.id === id);
  if (!inv) return {};
  return {
    title: `${inv.company} — Wahl Citadel`,
    description: inv.description[0],
  };
}

export default async function InvestmentPage({ params }: Props) {
  const { id } = await params;
  const inv = investments.find((i) => i.id === id);
  if (!inv) notFound();

  const status = statusConfig[inv.status];
  const Illustration = illustrations[inv.id];

  return (
    <main className="flex flex-col gap-3">
      <PageHero
        eyebrow="Portfolio"
        heading={inv.company}
        subtext={inv.description[0]}
      />

      <section className="bg-dark py-24">
        <div className="mx-auto max-w-[1152px] px-5 md:px-10">
          {/* Illustration */}
          {Illustration && (
            <div className="mb-12">
              <Illustration className="w-48 h-auto" />
            </div>
          )}

          {/* Status badge */}
          <div className="flex items-center gap-3 mb-10">
            <span
              className="size-2.5 rounded-full shrink-0"
              style={{ backgroundColor: status.color }}
            />
            <span className="text-cream/60 text-sm font-light">
              {status.label}
            </span>
          </div>

          {/* Full description */}
          <div className="flex flex-col gap-6 max-w-[680px]">
            {inv.description.map((para, i) => (
              <p
                key={i}
                className="text-cream/70 text-base font-light leading-[1.85] m-0"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Status roadmap */}
          <StatusRoadmap status={inv.status} />

        </div>
      </section>

      <BottomCTA
        heading="Interested in this opportunity?"
        subtext="Get in touch with our team to learn more about this investment and how to participate."
        secondaryLabel="View All Investments"
        secondaryHref="/funds"
      />
    </main>
  );
}
