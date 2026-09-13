import { companyProof } from "../data/caseStudies";
import { PeekGroup } from "./PeekPortrait";
import { sectionPeeks, TEAM_SIZE_LABEL } from "../data/team";
import { BOOKING_URL } from "../data/site";

const stats = [
  { value: companyProof.productsShipped, label: "Products shipped" },
  { value: companyProof.continents, label: "Continents" },
  { value: TEAM_SIZE_LABEL, label: "Team strong" },
] as const;

export default function PaceSection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 text-white sm:px-10 md:px-16 md:py-32">
      <PeekGroup slots={sectionPeeks.pace} id="pace" />

      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d6adf]/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="text-xs font-medium tracking-[0.22em] text-white/45 uppercase">
          The mission
        </p>
        <h2 className="mt-5 text-4xl leading-[1.1] font-bold md:text-7xl">
          Ship{" "}
          <span
            style={{ fontFamily: "'Oooh Baby', cursive" }}
            className="text-5xl font-normal md:text-8xl"
          >
            faster
          </span>
          .
          <br />
          Build better.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-xl">
          AI-native engineering for startups and teams that are stuck. Old
          waterfall habits don&apos;t scale — we embed, accelerate, and get the
          product into market.
        </p>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3 sm:flex-row sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glow-card relative flex-1 overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/[0.07] px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute -top-8 left-1/4 h-24 w-1/2 bg-white/20 blur-2xl" />
              <div className="relative text-3xl font-bold md:text-4xl">{stat.value}</div>
              <div className="relative mt-1 text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex rounded-2xl bg-white px-6 py-3 font-semibold text-[#010233] transition hover:bg-white/90"
        >
          Book a meeting
        </a>
      </div>
    </section>
  );
}
