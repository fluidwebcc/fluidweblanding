import { Link } from "react-router-dom";
import { companyProof, featuredCaseStudies } from "../data/caseStudies";
import { PeekGroup } from "./PeekPortrait";
import { sectionPeeks } from "../data/team";

export default function WorkPreview() {
  return (
    <section
      id="work"
      className="relative w-full overflow-visible px-5 py-20 text-white sm:px-10 md:px-16 md:py-28"
    >
      <PeekGroup slots={sectionPeeks.work} id="work" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="relative max-w-xl">
            <p className="text-xs font-medium tracking-[0.18em] text-white/45 uppercase">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Case studies</h2>
            <p className="mt-3 text-base text-white/60">
              What we did, what moved, and how fast — from{" "}
              {companyProof.productsShipped} products we&apos;ve shipped with
              founders and operators.
            </p>
          </div>
          <Link
            to="/work"
            className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#16194E] px-5 py-2.5 text-sm font-semibold shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)] transition hover:shadow-[0_0_20px_rgba(120,130,255,0.55)]"
          >
            View all work
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCaseStudies.map((study) => (
            <Link
              key={study.slug}
              to={`/work/${study.slug}`}
              className="glow-card group flex flex-col rounded-2xl border border-white/10 bg-white/3 p-5 transition hover:border-white/25 hover:bg-white/6"
            >
              <div className="flex h-16 items-center">
                <img
                  src={study.logo}
                  alt={`${study.name} logo`}
                  className="max-h-10 max-w-[140px] object-contain object-left"
                />
              </div>
              <div className="mt-4 text-xs text-white/40">{study.location}</div>
              <h3 className="mt-1 text-xl font-bold group-hover:underline">
                {study.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                {study.tagline}
              </p>
              {study.stats[0] ? (
                <div className="mt-5 border-t border-white/10 pt-4">
                  <div
                    className="text-lg font-bold"
                    style={{ color: study.accent }}
                  >
                    {study.stats[0].value}
                  </div>
                  <div className="text-xs text-white/40">{study.stats[0].label}</div>
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
