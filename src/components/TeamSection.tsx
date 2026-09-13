import { Link } from "react-router-dom";
import {
  TEAM_SIZE_LABEL,
  featuredTeamMembers,
  sectionPeeks,
} from "../data/team";
import { PeekGroup } from "./PeekPortrait";
import { TeamMemberCard } from "./TeamMemberCard";

const fillerPeople = [
  {
    image: "/team/filler/fluid-bench-01.svg",
    name: "Omar Khalid",
    role: "Full Stack Developer",
  },
  {
    image: "/team/filler/fluid-bench-02.svg",
    name: "Daniel Park",
    role: "Mobile Engineer",
  },
  {
    image: "/team/filler/fluid-bench-03.svg",
    name: "Yusuf Rahman",
    role: "Backend Engineer",
  },
  {
    image: "/team/filler/fluid-bench-04.svg",
    name: "Leo Martins",
    role: "Product Engineer",
  },
  {
    image: "/team/filler/fluid-bench-05.svg",
    name: "Samir Qureshi",
    role: "QA Lead",
  },
  {
    image: "/team/filler/fluid-bench-06.svg",
    name: "Noah Blake",
    role: "DevOps",
  },
] as const;

/** Fast dissolve — already ghosted (~20%), then gone. */
const fadeForIndex = (i: number) => {
  if (i < 3) {
    return {
      face: "opacity-20 blur-sm",
      name: "opacity-15 blur-md",
      card: "opacity-45",
    };
  }
  return {
    face: "opacity-0 blur-lg",
    name: "opacity-0 blur-xl",
    card: "opacity-15",
  };
};

function FillerCard({
  person,
  index,
}: {
  person: (typeof fillerPeople)[number];
  index: number;
}) {
  const fade = fadeForIndex(index);
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-white/3 ${fade.card}`}
    >
      <div className="aspect-square bg-[#16194E]/80">
        <img
          src={person.image}
          alt=""
          className={`h-full w-full object-cover object-top ${fade.face}`}
          loading="lazy"
          draggable={false}
        />
      </div>
      <div className={`px-4 py-4 ${fade.name}`}>
        <div className="font-semibold">{person.name}</div>
        <div className="mt-0.5 text-sm text-white/50">{person.role}</div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-visible bg-[#010233] px-5 pt-20 pb-6 text-white sm:px-10 md:px-16 md:pt-28 md:pb-8"
    >
      <div className="relative mx-auto max-w-6xl">
        <PeekGroup slots={sectionPeeks.team} id="team" />
        <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.18em] text-white/45 uppercase">
              Team
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              A team of {TEAM_SIZE_LABEL} strong
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">
              Senior builders who embed with startups and product teams — pick up
              the pace and get the work shipped.
            </p>
          </div>
          <Link
            to="/team"
            className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#16194E] px-5 py-2.5 text-sm font-semibold shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_15px_rgba(0,0,0,0.4)] transition hover:shadow-[0_0_20px_rgba(120,130,255,0.55)]"
          >
            View the full team
          </Link>
        </div>

        <div className="relative z-10 mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {featuredTeamMembers.map((person) => (
            <TeamMemberCard key={person.name} person={person} />
          ))}
        </div>

        <div className="relative z-10 mt-4">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
              {fillerPeople.slice(0, 3).map((person, i) => (
                <FillerCard key={person.name} person={person} index={i} />
              ))}
            </div>

            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
              <Link
                to="/team"
                className="pointer-events-auto max-w-md rounded-2xl bg-[#010233]/55 px-6 py-5 text-center backdrop-blur-[2px] transition hover:bg-[#010233]/70"
              >
                <p className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  And a deep bench behind them
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
                  {TEAM_SIZE_LABEL} across engineering, delivery, and QA — named
                  faces lead the work; the rest of the roster shows up when you
                  need more pace.
                </p>
                <p className="mt-4 text-sm font-semibold text-white">
                  See everyone →
                </p>
              </Link>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3" aria-hidden>
            {fillerPeople.slice(3, 6).map((person, i) => (
              <FillerCard key={person.name} person={person} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
