import { Link, Navigate, useParams } from "react-router-dom";
import { getCaseStudy } from "../data/caseStudies";
import {
  engagements,
  getPracticeEntry,
  services,
  type PracticeEntry,
} from "../data/practice";

export default function PracticePage({ kind }: { kind: PracticeEntry["kind"] }) {
  const { slug } = useParams();
  const entry = slug ? getPracticeEntry(kind, slug) : undefined;

  if (!entry) {
    return <Navigate to="/" replace />;
  }

  const siblings = (kind === "service" ? services : engagements).filter(
    (item) => item.slug !== entry.slug,
  );
  const proof = entry.proof
    .map((studySlug) => getCaseStudy(studySlug))
    .filter((study) => study !== undefined);

  return (
    <article className="bg-[#010233] text-white">
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-4 sm:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
        >
          ← Back home
        </Link>

        <header className="mt-8 border-b border-white/10 pb-8">
          <p
            className="text-xs font-medium tracking-[0.18em] uppercase"
            style={{ color: entry.accent }}
          >
            {kind === "service" ? "Services" : "Engage"}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            {entry.label}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/65 md:text-lg">
            {entry.tagline}
          </p>
        </header>

        <div className="space-y-10 py-10 text-[15px] leading-relaxed text-white/75 md:text-base">
          <p className="text-lg text-white/80 md:text-xl">{entry.intro}</p>

          {entry.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold text-white md:text-xl">
                {section.heading}
              </h2>
              <p className="mt-3">{section.body}</p>
              {section.bullets ? (
                <ul className="mt-4 space-y-2 border-l border-white/15 pl-4">
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

        {proof.length > 0 ? (
          <div className="border-t border-white/10 pt-10">
            <h2 className="text-xl font-semibold">Where we have done this</h2>
            <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {proof.map((study) => (
                <Link
                  key={study.slug}
                  to={`/work/${study.slug}`}
                  className="flex items-center gap-4 py-5 transition hover:bg-white/2"
                >
                  <img
                    src={study.logo}
                    alt=""
                    className="h-8 w-8 shrink-0 rounded object-contain"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold">{study.name}</div>
                    <div className="truncate text-sm text-white/50">
                      {study.tagline}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-12 rounded-2xl border border-white/12 bg-white/5 px-6 py-7">
          <h2 className="text-xl font-semibold">Need this on your product?</h2>
          <p className="mt-2 max-w-xl text-sm text-white/60 md:text-base">
            Tell us where delivery is stuck. We will give you an honest read on
            scope and shape before anyone talks contracts.
          </p>
          <a
            href="mailto:hello@fluidweb.cc"
            className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#010233] transition hover:bg-white/85"
          >
            Book a technical review
          </a>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs font-medium tracking-[0.18em] text-white/40 uppercase">
            {kind === "service" ? "Other services" : "Other ways to engage"}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {siblings.map((item) => (
              <Link
                key={item.slug}
                to={`/${kind === "service" ? "services" : "engage"}/${item.slug}`}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/9 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
