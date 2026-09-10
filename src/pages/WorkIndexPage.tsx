import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { allCaseStudiesSorted, geographyHighlights } from "../data/caseStudies";
import CaseCover from "../components/CaseCover";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function WorkIndexPage() {
  const [lead, ...rest] = allCaseStudiesSorted;

  return (
    <div className="bg-[#010233] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto w-full max-w-[90rem] px-5 py-16 sm:px-10 md:py-24 lg:px-16">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium tracking-[0.2em] text-white/45 uppercase">
              Work
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              Case studies
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
              Selected products Fluid Web engineered — from vertical SaaS to live media
              and healthcare ops.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="overflow-x-auto border-b border-white/10">
        <div className="mx-auto flex w-full max-w-[90rem] gap-0 px-5 sm:px-10 lg:px-16">
          {geographyHighlights.map((g, i) => (
            <div
              key={g.place}
              className={`shrink-0 py-6 pr-10 md:py-8 md:pr-14 ${
                i > 0 ? "border-l border-white/10 pl-10 md:pl-14" : ""
              }`}
            >
              <div className="whitespace-nowrap text-sm font-semibold text-white/90">
                {g.place}
              </div>
              <div className="mt-1 max-w-xs text-xs leading-relaxed text-white/40">
                {g.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {lead ? (
        <motion.section
          className="border-b border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link
            to={`/work/${lead.slug}`}
            className="group mx-auto grid w-full max-w-[90rem] lg:grid-cols-12"
          >
            <CaseCover
              accent={lead.accent}
              name={lead.name}
              className="aspect-[4/3] transition duration-500 group-hover:scale-[1.01] lg:col-span-7 lg:aspect-auto lg:min-h-[60vh]"
            />
            <div className="flex flex-col justify-end px-5 py-14 sm:px-10 lg:col-span-5 lg:px-12 lg:py-20">
              <p className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                Featured
                <span className="mx-3 text-white/20">·</span>
                {lead.sector}
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                {lead.name}
              </h2>
              <p className="mt-5 text-xl leading-relaxed text-white/65 md:text-2xl">
                {lead.tagline}
              </p>
              {lead.stats.length > 0 ? (
                <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-8">
                  {lead.stats.slice(0, 3).map((stat) => (
                    <div key={stat.label}>
                      <div
                        className="text-2xl font-bold md:text-3xl"
                        style={{ color: lead.accent }}
                      >
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm text-white/45">{stat.label}</div>
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="mt-8 text-sm font-semibold text-white/70 transition group-hover:text-white">
                Read case study →
              </div>
            </div>
          </Link>
        </motion.section>
      ) : null}

      <section>
        <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-10 lg:px-16">
          <div className="divide-y divide-white/10 border-b border-white/10">
            {rest.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <Link
                  to={`/work/${study.slug}`}
                  className="group grid items-center gap-6 py-12 md:grid-cols-12 md:gap-10 md:py-16"
                >
                  <CaseCover
                    accent={study.accent}
                    name={study.name}
                    className="aspect-video rounded-2xl md:col-span-4"
                  />
                  <div className="md:col-span-5">
                    <div className="flex flex-wrap gap-x-3 text-xs tracking-wide text-white/40 uppercase">
                      <span>{study.engagementLabel}</span>
                      <span aria-hidden>·</span>
                      <span>{study.location}</span>
                    </div>
                    <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                      {study.name}
                    </h2>
                    <p className="mt-3 text-lg text-white/60 md:text-xl">{study.tagline}</p>
                    <p className="mt-2 text-sm text-white/40">
                      {study.contactLabel} — {study.contactNote}
                    </p>
                  </div>
                  {study.stats.length > 0 ? (
                    <div className="flex gap-8 md:col-span-3 md:justify-end">
                      {study.stats.slice(0, 2).map((stat) => (
                        <div key={stat.label} className="text-left md:text-right">
                          <div
                            className="text-2xl font-bold md:text-3xl"
                            style={{ color: study.accent }}
                          >
                            {stat.value}
                          </div>
                          <div className="mt-1 text-xs text-white/40">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
