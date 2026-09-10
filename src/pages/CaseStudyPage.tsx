import type { ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { BackToWork } from "../components/SiteLayout";
import CaseCover from "../components/CaseCover";
import { allCaseStudiesSorted, getCaseStudy } from "../data/caseStudies";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
      {children}
    </h2>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  const accent = study.accent;
  const related = allCaseStudiesSorted
    .filter((c) => c.slug !== study.slug)
    .slice(0, 4);

  return (
    <article className="bg-[#010233] text-white">
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto w-full max-w-[90rem] px-5 pt-4 sm:px-10 lg:px-16">
          <BackToWork />
          <CaseCover
            accent={accent}
            name={study.name}
            className="mt-8 aspect-[21/9] rounded-b-3xl md:mt-10 lg:aspect-[2.4/1]"
          />
        </div>

        <div className="relative mx-auto w-full max-w-[90rem] px-5 pb-16 pt-10 sm:px-10 md:pb-24 lg:px-16">
          <motion.div
            className="max-w-5xl"
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium tracking-[0.2em] text-white/45 uppercase">
              {study.sector}
              <span className="mx-3 text-white/25">·</span>
              {study.location}
            </p>
            <h1
              className="mt-6 text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl"
              style={{ textWrap: "balance" }}
            >
              {study.name}
            </h1>
            <p className="mt-8 max-w-3xl text-2xl leading-relaxed text-white/70 md:text-3xl md:leading-snug">
              {study.tagline}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={study.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-lg font-semibold transition"
                style={{ color: accent }}
              >
                Visit live product
                <span
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                >
                  ↗
                </span>
              </a>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <span className="text-sm text-white/50">{study.engagementLabel}</span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <span className="text-sm text-white/50">
                {study.contactLabel} · {study.contactNote}
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Stats strip */}
      {study.stats.length > 0 ? (
        <motion.section
          className="border-b border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-10 lg:px-16">
            <div className="grid divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
              {study.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-center py-10 md:px-8 md:py-14 lg:px-10"
                >
                  <div
                    className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
                    style={{ color: accent }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-3 text-base font-medium text-white/80 md:text-lg">
                    {stat.label}
                  </div>
                  {stat.note ? (
                    <div className="mt-1 text-sm text-white/40">{stat.note}</div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      ) : null}

      {/* Body */}
      <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-10 lg:px-16">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-20 xl:gap-28">
          <motion.div
            className="min-w-0 py-16 md:py-20 lg:py-24"
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <section className="border-b border-white/10 pb-16 md:pb-20">
              <SectionHeading>Summary</SectionHeading>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/75 md:text-2xl md:leading-relaxed">
                {study.summary}
              </p>
            </section>

            <section className="border-b border-white/10 py-16 md:py-20">
              <SectionHeading>Role</SectionHeading>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
                {study.role}
              </p>
            </section>

            <section className="border-b border-white/10 py-16 md:py-20">
              <SectionHeading>The problem</SectionHeading>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
                {study.problem}
              </p>
            </section>

            <section className="border-b border-white/10 py-16 md:py-20">
              <SectionHeading>What we did</SectionHeading>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
                {study.approach}
              </p>
              <ul className="mt-10 space-y-4 border-l border-white/15 pl-6">
                {study.whatWeBuilt.map((item) => (
                  <li
                    key={item}
                    className="text-base leading-relaxed text-white/65 md:text-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="py-16 md:py-20">
              <SectionHeading>Outcome</SectionHeading>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
                {study.outcome}
              </p>
            </section>
          </motion.div>

          {/* Sticky meta sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-10 py-24">
              <div>
                <div className="text-xs font-medium tracking-[0.15em] text-white/35 uppercase">
                  Engagement
                </div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  {study.engagementLabel}
                </div>
              </div>
              <div>
                <div className="text-xs font-medium tracking-[0.15em] text-white/35 uppercase">
                  Contact
                </div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  {study.contactLabel}
                  <span className="block mt-1 text-white/45">{study.contactNote}</span>
                </div>
              </div>
              <div>
                <div className="text-xs font-medium tracking-[0.15em] text-white/35 uppercase">
                  Stack & surfaces
                </div>
                <ul className="mt-3 space-y-2">
                  {study.stack.map((item) => (
                    <li key={item} className="text-sm text-white/60">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={study.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/25 hover:bg-white/[0.08]"
              >
                Live product ↗
              </a>
            </div>
          </aside>
        </div>

        {/* Mobile stack meta */}
        <div className="border-t border-white/10 py-12 lg:hidden">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="text-xs font-medium tracking-[0.15em] text-white/35 uppercase">
                Contact
              </div>
              <div className="mt-2 text-sm text-white/70">
                {study.contactLabel} — {study.contactNote}
              </div>
            </div>
            <div>
              <div className="text-xs font-medium tracking-[0.15em] text-white/35 uppercase">
                Stack
              </div>
              <div className="mt-2 text-sm text-white/60">
                {study.stack.join(" · ")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related work */}
      <section className="border-t border-white/10 bg-[#010233]">
        <div className="mx-auto w-full max-w-[90rem] px-5 py-20 sm:px-10 md:py-28 lg:px-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">More work</h2>
            <Link
              to="/work"
              className="text-sm font-medium text-white/50 transition hover:text-white"
            >
              View all case studies →
            </Link>
          </div>

          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/work/${item.slug}`}
                className="group flex min-h-[7rem] flex-col justify-center py-10 transition md:min-h-[9rem] md:py-12"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-3xl">
                    <div className="text-xs tracking-wide text-white/40 uppercase">
                      {item.sector}
                      <span className="mx-2">·</span>
                      {item.location}
                    </div>
                    <div className="mt-2 text-3xl font-bold text-white transition group-hover:text-white/90 md:text-4xl">
                      {item.name}
                    </div>
                    <p className="mt-2 text-base text-white/55 md:text-lg">
                      {item.tagline}
                    </p>
                  </div>
                  {item.stats[0] ? (
                    <div className="shrink-0 text-right">
                      <div
                        className="text-2xl font-bold md:text-3xl"
                        style={{ color: item.accent }}
                      >
                        {item.stats[0].value}
                      </div>
                      <div className="mt-1 text-xs text-white/40">{item.stats[0].label}</div>
                    </div>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
