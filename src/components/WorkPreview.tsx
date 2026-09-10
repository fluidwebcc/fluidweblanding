import { Link } from "react-router-dom";
import { featuredCaseStudies, geographyHighlights } from "../data/caseStudies";

export default function WorkPreview() {
  const [lead, ...rest] = featuredCaseStudies;

  return (
    <section id="work" className="w-full bg-[#010233] px-5 py-16 text-white sm:px-10 md:px-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-[0.18em] text-white/45 uppercase">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Case studies</h2>
            <p className="mt-3 text-base text-white/60">
              Products we shipped — role, build, and outcomes.
            </p>
          </div>
          <Link
            to="/work"
            className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#16194E] px-5 py-2.5 text-sm font-semibold shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)] transition hover:shadow-[0_0_20px_rgba(120,130,255,0.6)]"
          >
            View all work
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/45">
          {geographyHighlights.map((g) => (
            <span key={g.place} className="font-medium text-white/70">
              {g.place}
            </span>
          ))}
        </div>

        {lead ? (
          <Link
            to={`/work/${lead.slug}`}
            className="group mt-10 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05] md:grid-cols-[140px_1fr] md:p-8"
          >
            <div className="flex h-24 items-center justify-center rounded-xl border border-white/10 bg-[#010233]/60 px-4 md:h-full">
              <img
                src={lead.logo}
                alt={`${lead.name} logo`}
                className="max-h-14 max-w-full object-contain"
              />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase">
                {lead.location}
                <span className="mx-2">·</span>
                {lead.sector}
              </div>
              <h3 className="mt-2 text-2xl font-bold md:text-4xl">{lead.name}</h3>
              <p className="mt-2 max-w-2xl text-white/65">{lead.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-6">
                {lead.stats.slice(0, 3).map((stat) => (
                  <div key={stat.label}>
                    <div className="text-lg font-bold" style={{ color: lead.accent }}>
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-white/40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ) : null}

        <div className="mt-4 divide-y divide-white/10 border-y border-white/10">
          {rest.map((study) => (
            <Link
              key={study.slug}
              to={`/work/${study.slug}`}
              className="flex items-center gap-4 py-5 transition hover:bg-white/[0.02] md:gap-6"
            >
              <div className="flex h-12 w-20 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-2">
                <img
                  src={study.logo}
                  alt=""
                  className="max-h-8 max-w-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold md:text-lg">{study.name}</div>
                <div className="truncate text-sm text-white/50">{study.tagline}</div>
              </div>
              {study.stats[0] ? (
                <div className="hidden shrink-0 text-right sm:block">
                  <div className="font-bold" style={{ color: study.accent }}>
                    {study.stats[0].value}
                  </div>
                  <div className="text-[11px] text-white/40">{study.stats[0].label}</div>
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
