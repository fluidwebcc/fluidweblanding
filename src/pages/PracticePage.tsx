import { Link, useParams } from "react-router-dom";
import { getCaseStudy } from "../data/caseStudies";
import {
  engagements,
  getPracticeEntry,
  services,
  type PracticeEntry,
} from "../data/practice";
import { BOOKING_URL } from "../data/site";
import NotFoundPage from "./NotFoundPage";

export default function PracticePage({ kind }: { kind: PracticeEntry["kind"] }) {
  const { slug } = useParams();
  const entry = slug ? getPracticeEntry(kind, slug) : undefined;

  if (!entry) {
    return <NotFoundPage />;
  }

  const basePath = kind === "service" ? "services" : "engage";
  const siblings = (kind === "service" ? services : engagements).filter(
    (item) => item.slug !== entry.slug,
  );
  const proof = entry.proof
    .map((studySlug) => getCaseStudy(studySlug))
    .filter((study) => study !== undefined);

  return (
    <article className="bg-[#010233] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-5 pb-12 pt-4 sm:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/72 transition hover:text-white"
          >
            ← Back home
          </Link>

          <p
            className="mt-8 text-xs font-medium tracking-[0.18em] uppercase"
            style={{ color: entry.accent }}
          >
            {kind === "service" ? "Services" : "Engage"}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            {entry.label}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/75 md:text-xl">
            {entry.tagline}
          </p>

          <div className="mt-8 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
            {entry.quickFacts.map((fact) => (
              <div key={fact.label}>
                <div className="text-[10px] font-semibold tracking-[0.16em] text-white/55 uppercase">
                  {fact.label}
                </div>
                <div className="mt-1.5 font-semibold text-white">{fact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 pb-16 sm:px-8">
        <div className="space-y-5 py-10 text-[15px] leading-relaxed text-white/80 md:text-base">
          {entry.intro.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-white/80">
              {paragraph}
            </p>
          ))}
        </div>

        <section className="rounded-2xl border border-white/12 bg-white/5 px-6 py-7">
          <h2 className="text-lg font-semibold text-white md:text-xl">
            You probably need this if
          </h2>
          <ul className="mt-4 space-y-2.5">
            {entry.signals.map((signal) => (
              <li
                key={signal}
                className="flex gap-3 text-[15px] leading-relaxed text-white/78"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: entry.accent }}
                />
                {signal}
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-12 py-12 text-[15px] leading-relaxed text-white/80 md:text-base">
          {entry.sections.map((section) => (
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
                    <li key={bullet} className="text-white/75">
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section className="border-t border-white/10 pt-10">
          <h2 className="text-xl font-semibold md:text-2xl">How the work runs</h2>
          <div className="mt-6 space-y-6">
            {entry.process.map((step, index) => (
              <div key={step.title} className="flex gap-5">
                <div
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold"
                  style={{ borderColor: entry.accent, color: entry.accent }}
                >
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/75">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-2">
          <section>
            <h2 className="text-lg font-semibold text-white md:text-xl">
              What you get
            </h2>
            <ul className="mt-4 space-y-2.5">
              {entry.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] leading-relaxed text-white/78"
                >
                  <span className="text-white/30">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white md:text-xl">
              What we will not do
            </h2>
            <ul className="mt-4 space-y-2.5">
              {entry.boundaries.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] leading-relaxed text-white/72"
                >
                  <span className="text-white/30">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {proof.length > 0 ? (
          <div className="mt-12 border-t border-white/10 pt-10">
            <h2 className="text-xl font-semibold md:text-2xl">
              Where we have done this
            </h2>
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
                    <div className="truncate text-sm text-white/62">
                      {study.tagline}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <section className="mt-12 border-t border-white/10 pt-10">
          <h2 className="text-xl font-semibold md:text-2xl">Common questions</h2>
          <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {entry.faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/75">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/faq"
            className="mt-5 inline-flex text-sm text-white/62 transition hover:text-white"
          >
            More founder questions →
          </Link>
        </section>

        <div className="mt-12 rounded-2xl border border-white/12 bg-white/5 px-6 py-7">
          <h2 className="text-xl font-semibold">Need this on your product?</h2>
          <p className="mt-2 max-w-xl text-sm text-white/72 md:text-base">
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

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs font-medium tracking-[0.18em] text-white/55 uppercase">
            {kind === "service" ? "Other services" : "Other ways to engage"}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {siblings.map((item) => (
              <Link
                key={item.slug}
                to={`/${basePath}/${item.slug}`}
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
