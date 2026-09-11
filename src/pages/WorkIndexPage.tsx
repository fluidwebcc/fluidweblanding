import { Link } from "react-router-dom";
import {
  allCaseStudiesSorted,
  companyProof,
  geographyHighlights,
} from "../data/caseStudies";
import { additionalProducts } from "../data/products";

export default function WorkIndexPage() {
  return (
    <div className="bg-[#010233] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 md:py-16">
          <p className="text-xs font-medium tracking-[0.18em] text-white/60 uppercase">
            Work
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Case studies
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/72 md:text-lg">
            {companyProof.productsShipped} products. Engineers deployed across{" "}
            {companyProof.continents} continents — teams and solo. Here&apos;s what we
            improved for clients who needed to move faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            {geographyHighlights.map((place) => (
              <span key={place} className="font-medium text-white/80">
                {place}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="divide-y divide-white/10">
          {allCaseStudiesSorted.map((study) => (
            <Link
              key={study.slug}
              to={`/work/${study.slug}`}
              className="group flex flex-col gap-4 py-8 transition hover:bg-white/2 sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="flex h-16 w-28 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4 px-3">
                <img
                  src={study.logo}
                  alt={`${study.name} logo`}
                  className="max-h-10 max-w-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs tracking-wide text-white/55 uppercase">
                  {study.location}
                  <span className="mx-2">·</span>
                  {study.sector}
                </div>
                <h2 className="mt-1 text-2xl font-bold md:text-3xl">{study.name}</h2>
                <p className="mt-1 text-sm text-white/72 md:text-base">{study.tagline}</p>
              </div>
              {study.stats[0] ? (
                <div className="shrink-0 sm:text-right">
                  <div
                    className="text-xl font-bold"
                    style={{ color: study.accent }}
                  >
                    {study.stats[0].value}
                  </div>
                  <div className="text-xs text-white/55">{study.stats[0].label}</div>
                </div>
              ) : null}
            </Link>
          ))}
        </div>

        <section className="border-t border-white/10 py-12">
          <h2 className="text-xl font-semibold">Also shipped</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/55 md:text-base">
            Products where we owned a defined slice rather than the whole build
            — frontend delivery, dashboards, design-to-code, or a single
            product surface. No case study, but the work is real.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {additionalProducts.map((product) => (
              <span
                key={product.name}
                className="rounded-xl border border-white/12 bg-white/5 px-4 py-2.5 text-sm text-white/75"
              >
                <span className="font-medium text-white">{product.name}</span>
                <span className="ml-2 text-xs text-white/40">
                  {product.location}
                </span>
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
