import { Link } from "react-router-dom";
import { allCaseStudiesSorted, companyProof } from "../data/caseStudies";
import { PeekGroup } from "./PeekPortrait";
import { sectionPeeks } from "../data/team";

export default function CtaSection() {
  const names = allCaseStudiesSorted.map((c) => c.name);
  const doubled = [...names, ...names];

  return (
    <section className="bg-[#010233] px-5 py-20 text-white sm:px-10 md:px-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-visible rounded-3xl border border-white/15 bg-gradient-to-br from-[#16194E] to-[#010233] px-6 py-12 md:px-12 md:py-16">
          <PeekGroup slots={sectionPeeks.cta} id="cta" />
          <h2 className="relative z-10 max-w-2xl text-3xl font-bold md:text-5xl">
            Stuck shipping? We&apos;ll pick up the pace.
          </h2>
          <p className="relative z-10 mt-4 max-w-xl text-base text-white/65 md:text-lg">
            {companyProof.productsShipped} products. {companyProof.continents}{" "}
            continents. Squads or solo. Tell us what&apos;s stuck — we&apos;ll get
            it done.
          </p>
          <div className="relative z-10 mt-8 flex flex-wrap gap-3">
            <a
              href="https://calendar.app.google/q12BZhXT8aWccdjY9"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-[#010233] transition hover:bg-white/90"
            >
              Book a meeting
            </a>
            <Link
              to="/work"
              className="rounded-2xl border border-white/25 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Browse case studies
            </Link>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <div className="flex w-max gap-16 animate-go-left py-2">
            {doubled.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap text-3xl font-bold text-white/25 md:text-4xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
