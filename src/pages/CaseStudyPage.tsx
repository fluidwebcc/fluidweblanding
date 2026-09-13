import { BOOKING_URL } from "../data/site";
import { Link, useParams } from "react-router-dom";
import { BackToWork } from "../components/SiteLayout";
import { allCaseStudiesSorted, getCaseStudy } from "../data/caseStudies";
import NotFoundPage from "./NotFoundPage";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) {
    return <NotFoundPage />;
  }

  const related = allCaseStudiesSorted
    .filter((c) => c.slug !== study.slug)
    .slice(0, 3);

  return (
    <article className="text-white">
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-4 sm:px-8">
        <BackToWork />

        <header className="mt-8 border-b border-white/10 pb-8">
          <img
            src={study.logo}
            alt={`${study.name} logo`}
            className="mb-6 h-10 w-auto max-w-[220px] object-contain object-left"
          />
          <p className="text-xs font-medium tracking-[0.18em] text-white/45 uppercase">
            {study.sector}
            <span className="mx-2 text-white/20">·</span>
            {study.location}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            {study.name}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/65 md:text-lg">
            {study.tagline}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/50">
            <span>{study.engagementLabel}</span>
            <a
              href={study.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline-offset-4 hover:underline"
              style={{ color: study.accent }}
            >
              Visit live product ↗
            </a>
          </div>
        </header>

        {study.stats.length > 0 ? (
          <div className="grid grid-cols-2 gap-6 border-b border-white/10 py-8 md:grid-cols-4">
            {study.stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold md:text-3xl"
                  style={{ color: study.accent }}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="py-10 text-[15px] leading-relaxed text-white/75 md:text-base">
          <p className="text-lg leading-relaxed text-white/80 md:text-xl">
            {study.summary}
          </p>
        </div>

        <section className="border-t border-white/10 pt-10">
          <h2 className="text-xl font-semibold md:text-2xl">
            What we walked into
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-white/75 md:text-base">
            {study.situation.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold md:text-2xl">The problem</h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-white/75 md:text-base">
            {study.problem.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <div className="mt-12 space-y-12 border-t border-white/10 pt-10 text-[15px] leading-relaxed text-white/75 md:text-base">
          {study.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-white md:text-2xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-5 space-y-2 border-l border-white/15 pl-4">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="text-white/65">
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-12 border-t border-white/10 pt-10">
          <h2 className="text-xl font-semibold md:text-2xl">
            The hard parts
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {study.hardParts.map((part) => (
              <div
                key={part.title}
                className="glow-card rounded-2xl border border-white/12 bg-white/5 px-5 py-5"
              >
                <h3 className="font-semibold text-white">{part.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {part.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-white/10 pt-10">
          <h2 className="text-xl font-semibold md:text-2xl">How it ran</h2>
          <div className="mt-6 space-y-6">
            {study.timeline.map((step, index) => (
              <div key={step.title} className="flex gap-5">
                <div
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold"
                  style={{ borderColor: study.accent, color: study.accent }}
                >
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/65">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-white/10 pt-10">
          <h2 className="text-xl font-semibold md:text-2xl">Results</h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-white/75 md:text-base">
            {study.outcome.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-2">
          <section>
            <h2 className="text-lg font-semibold text-white md:text-xl">
              Built with
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-white/15 bg-white/6 px-3.5 py-2 text-sm font-medium text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white md:text-xl">
              Scope of our work
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              {study.scopeNote}
            </p>
          </section>
        </div>

        <div className="glow-card mt-12 rounded-2xl border border-white/12 bg-white/5 px-6 py-7">
          <h2 className="text-xl font-semibold">Got something similar?</h2>
          <p className="mt-2 max-w-xl text-sm text-white/60 md:text-base">
            Tell us where delivery is stuck. We will give you an honest read on
            scope and shape before anyone talks contracts.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#010233] transition hover:bg-white/85"
          >
            Book a technical review
          </a>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold">More work</h2>
            <Link to="/work" className="text-sm text-white/50 hover:text-white">
              All case studies →
            </Link>
          </div>
          <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/work/${item.slug}`}
                className="flex items-center gap-4 py-5 transition hover:bg-white/2"
              >
                <img
                  src={item.logo}
                  alt=""
                  className="h-8 w-8 shrink-0 rounded object-contain"
                />
                <div className="min-w-0 flex-1">
                  <div className="font-semibold">{item.name}</div>
                  <div className="truncate text-sm text-white/50">
                    {item.tagline}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
