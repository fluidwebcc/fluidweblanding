import { useState } from "react";
import { Link } from "react-router-dom";
import { allCaseStudiesSorted } from "../data/caseStudies";

const productNames = allCaseStudiesSorted.map((c) => c.name);

function ProductMarquee() {
  const [paused, setPaused] = useState(false);
  const doubled = [...productNames, ...productNames];

  return (
    <div className="w-full overflow-hidden py-16 mt-4">
      <div
        className="flex gap-24 w-max animate-go-left"
        style={{ animationPlayState: paused ? "paused" : "running" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="cursor-default select-none whitespace-nowrap text-4xl font-bold text-white/40 transition-colors hover:text-white/80"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ThirdLast() {
  return (
    <>
      <div className="bg-[#010233] md:min-h-screen">
        <div className="flex min-h-[40%] flex-col-reverse justify-center">
          <h1 className="mt-40 text-center text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Get your product shipping.
          </h1>
        </div>
        <div className="flex min-h-[60%] flex-col items-center justify-center gap-6 px-6 py-16 md:flex-row md:px-20">
          <div className="flex w-full max-w-xl flex-col rounded-2xl border border-white/20 bg-white/10 px-8 py-7 shadow-lg backdrop-blur-md">
            <h2 className="text-center text-2xl font-semibold text-white md:text-left md:text-4xl">
              Ready to talk scope, team, and delivery?
            </h2>
            <a
              href="mailto:hello@fluidweb.cc"
              className="mt-8 w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-center font-medium text-white shadow-lg backdrop-blur-md transition hover:bg-white/20"
            >
              Book a consultancy meeting
            </a>
          </div>
          <div className="flex w-full max-w-xl flex-col rounded-2xl border border-white/20 bg-white/10 px-8 py-7 shadow-lg backdrop-blur-md">
            <h2 className="text-center text-2xl font-semibold text-white md:text-left md:text-3xl">
              Our past projects {">_"}
            </h2>
            <p className="mt-2 text-center text-lg font-medium text-white/80 md:text-left">
              Case studies, plans, and results from live products.
            </p>
            <Link
              to="/work"
              className="mt-6 w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 font-medium text-white shadow-lg backdrop-blur-md transition hover:bg-white/20"
            >
              Case studies
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-[#010233] py-24">
        <h2 className="max-w-3xl px-6 text-center text-4xl font-semibold text-white md:text-5xl">
          Products we shipped
        </h2>
        <p className="mt-4 max-w-2xl px-6 text-center text-lg text-white/65 leading-relaxed">
          Live products across the US, Australia, Malaysia, and Norway.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 px-6">
          <Link
            to="/work"
            className="rounded-2xl bg-[#16194E] px-5 py-3 font-semibold text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)] transition hover:shadow-[0_0_20px_rgba(120,130,255,0.6)]"
          >
            Read case studies
          </Link>
        </div>
        <ProductMarquee />
      </div>
    </>
  );
}
