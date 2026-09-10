import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { featuredCaseStudies, geographyHighlights } from "../data/caseStudies";
import CaseCover from "./CaseCover";

export default function WorkPreview() {
  const [lead, ...rest] = featuredCaseStudies;

  return (
    <section id="work" className="w-full bg-[#010233] text-white">
      <div className="mx-auto w-full max-w-[90rem] px-5 pt-20 sm:px-10 md:px-16 md:pt-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium tracking-[0.2em] text-white/45 uppercase">
              Selected work
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Case studies from real products
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
              Products we shipped — role, build, and outcomes.
            </p>
          </motion.div>
          <Link
            to="/work"
            className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#16194E] px-6 py-3 font-semibold text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)] transition hover:shadow-[0_0_20px_rgba(120,130,255,0.6)]"
          >
            View all work
          </Link>
        </div>
      </div>

      <div className="mt-12 overflow-x-auto border-y border-white/10">
        <div className="mx-auto flex w-full max-w-[90rem] gap-0 px-5 sm:px-10 md:px-16">
          {geographyHighlights.map((g, i) => (
            <div
              key={g.place}
              className={`shrink-0 py-5 pr-8 md:py-6 md:pr-12 ${
                i > 0 ? "border-l border-white/10 pl-8 md:pl-12" : ""
              }`}
            >
              <div className="whitespace-nowrap text-xs font-semibold text-white/80 md:text-sm">
                {g.place}
              </div>
            </div>
          ))}
        </div>
      </div>

      {lead ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="border-b border-white/10"
        >
          <Link
            to={`/work/${lead.slug}`}
            className="group mx-auto grid w-full max-w-[90rem] overflow-hidden lg:grid-cols-12"
          >
            <CaseCover
              accent={lead.accent}
              name={lead.name}
              className="aspect-[16/10] transition duration-500 group-hover:scale-[1.01] lg:col-span-7 lg:aspect-auto lg:min-h-[70vh]"
            />
            <div className="flex flex-col justify-end border-t border-white/10 bg-white/[0.03] px-5 py-12 sm:px-10 lg:col-span-5 lg:border-t-0 lg:border-l lg:px-12 lg:py-16">
              <p className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                {lead.sector}
                <span className="mx-3 text-white/20">·</span>
                {lead.location}
              </p>
              <h3 className="mt-5 text-4xl font-bold leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
                {lead.name}
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-white/65 md:text-xl">
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
                      <div className="mt-1 text-xs text-white/45">{stat.label}</div>
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="mt-8 text-sm font-semibold text-white/70 transition group-hover:text-white">
                {lead.engagementLabel} →
              </div>
            </div>
          </Link>
        </motion.div>
      ) : null}

      <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-10 md:px-16">
        <div className="divide-y divide-white/10">
          {rest.map((study) => (
            <Link
              key={study.slug}
              to={`/work/${study.slug}`}
              className="group grid items-center gap-6 py-10 transition hover:bg-white/[0.02] md:grid-cols-12 md:gap-10 md:py-14"
            >
              <CaseCover
                accent={study.accent}
                name={study.name}
                className="aspect-[16/10] rounded-2xl md:col-span-4"
              />
              <div className="md:col-span-5">
                <div className="text-xs tracking-wide text-white/40 uppercase">
                  {study.sector}
                  <span className="mx-2">·</span>
                  {study.location}
                </div>
                <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  {study.name}
                </h3>
                <p className="mt-2 text-base text-white/60 md:text-lg">{study.tagline}</p>
              </div>
              {study.stats.length > 0 ? (
                <div className="flex gap-8 md:col-span-3 md:justify-end">
                  {study.stats.slice(0, 2).map((stat) => (
                    <div key={stat.label} className="text-left md:text-right">
                      <div
                        className="text-xl font-bold md:text-2xl"
                        style={{ color: study.accent }}
                      >
                        {stat.value}
                      </div>
                      <div className="mt-0.5 text-[11px] text-white/40">{stat.label}</div>
                    </div>
                  ))}
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </div>

      <div className="h-20 md:h-28" />
    </section>
  );
}
