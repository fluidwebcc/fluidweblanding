import { Link, Navigate, useParams } from "react-router-dom";
import { BackToWork } from "../components/SiteLayout";
import { allCaseStudiesSorted, getCaseStudy } from "../data/caseStudies";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  const related = allCaseStudiesSorted
    .filter((c) => c.slug !== study.slug)
    .slice(0, 3);

  return (
    <article className="bg-[#010233] text-white">
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
              className="font-medium text-white/80 underline-offset-4 hover:underline"
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

        <div className="space-y-10 py-10 text-[15px] leading-relaxed text-white/75 md:text-base">
          <section>
            <h2 className="text-lg font-semibold text-white md:text-xl">Overview</h2>
            <p className="mt-3">{study.summary}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white md:text-xl">Challenge</h2>
            <p className="mt-3">{study.problem}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white md:text-xl">Solution</h2>
            <p className="mt-3">{study.approach}</p>
            <ul className="mt-4 space-y-2 border-l border-white/15 pl-4">
              {study.whatWeBuilt.map((item) => (
                <li key={item} className="text-white/65">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white md:text-xl">Results</h2>
            <p className="mt-3">{study.outcome}</p>
          </section>
        </div>

        <div className="border-t border-white/10 pt-10">
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
                  <div className="truncate text-sm text-white/50">{item.tagline}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
