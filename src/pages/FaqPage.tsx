import { Link } from "react-router-dom";
import { companyProof } from "../data/caseStudies";
import { founderFaqs } from "../data/practice";

export default function FaqPage() {
  return (
    <div className="bg-[#010233] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 md:py-16">
          <p className="text-xs font-medium tracking-[0.18em] text-white/45 uppercase">
            Company
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Founder FAQ
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/60 md:text-lg">
            The questions founders ask before they bring us in — answered
            straight. {companyProof.productsShipped} products shipped across{" "}
            {companyProof.continents} continents.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
        <div className="divide-y divide-white/10 border-y border-white/10">
          {founderFaqs.map((item) => (
            <section key={item.question} className="py-7">
              <h2 className="text-lg font-semibold text-white md:text-xl">
                {item.question}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70 md:text-base">
                {item.answer}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/12 bg-white/5 px-6 py-7">
          <h2 className="text-xl font-semibold">Still deciding?</h2>
          <p className="mt-2 max-w-xl text-sm text-white/60 md:text-base">
            Read what we shipped for teams in the same position, or send us the
            problem directly.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#010233] transition hover:bg-white/85"
            >
              See case studies
            </Link>
            <a
              href="mailto:hello@fluidweb.cc"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/9"
            >
              Book a technical review
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
