import { companyProof } from "../data/caseStudies";
import PeekPortrait from "./PeekPortrait";
import { useCyclingPeekPeople } from "../hooks/useCyclingPeekPeople";
import { sectionPeeks } from "../data/team";

const points = [
  {
    title: "We work with stuck teams",
    body: companyProof.whoWeHelp,
  },
  {
    title: "Old methods don't scale",
    body: "Waterfall agency theater and pre-AI development habits burn months. We ship with modern tooling and AI in the loop — faster cycles, less rework, real product in market.",
  },
  {
    title: `${companyProof.productsShipped} products shipped`,
    body: `We've worked across ${companyProof.productsShipped} products with founders and operators who needed results — not slide decks. Squads when you need horsepower, solo when you need a killer who owns the build.`,
  },
  {
    title: `${companyProof.continents} continents, teams & solo`,
    body: `Our engineers have deployed across ${companyProof.continents} continents — North America, South America, Oceania, Asia, Europe, and Africa — embedded with clients or shipping alone when that's what the job needs.`,
  },
] as const;

export default function Cards() {
  const peeks = sectionPeeks.why;
  const people = useCyclingPeekPeople(peeks.length);

  return (
    <section className="relative z-10 overflow-visible bg-[#010233] px-5 py-20 text-white sm:px-10 md:px-16 md:py-28">
      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Why Fluid<span className="font-semibold">Web</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-white/60 md:text-lg">
          {companyProof.mission}
        </p>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-8 md:gap-10">
          {points.map((point, i) => {
            const layout = peeks[i];
            const person = people[i];
            return (
              <div key={point.title} className="relative">
                <div className="relative rounded-2xl border border-white/15 bg-white/6 px-6 py-7 transition hover:border-white/25 hover:bg-white/9">
                  <h3 className="text-xl font-semibold">{point.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-white/70">
                    {point.body}
                  </p>
                </div>
                {layout && person ? (
                  <PeekPortrait
                    person={person}
                    {...layout}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
