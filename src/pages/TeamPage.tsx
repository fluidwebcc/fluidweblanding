import { Link } from "react-router-dom";
import { TEAM_SIZE_LABEL, teamMembers } from "../data/team";
import { TeamMemberCard } from "../components/TeamMemberCard";
import { BOOKING_URL } from "../data/site";

export default function TeamPage() {
  return (
    <div className="text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
          <p className="text-xs font-medium tracking-[0.18em] text-white/60 uppercase">
            Team
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            A team of {TEAM_SIZE_LABEL} strong
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/72 md:text-lg">
            Senior builders who embed with startups and product teams — pick up
            the pace and get the work shipped. Here are the named faces; the
            rest of the roster shows up when you need more pace.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {teamMembers.map((person) => (
            <TeamMemberCard key={person.name} person={person} />
          ))}
        </div>

        <div className="glow-card mt-16 rounded-2xl border border-white/12 bg-white/5 px-6 py-7">
          <h2 className="text-xl font-semibold">Want this team on your product?</h2>
          <p className="mt-2 max-w-xl text-sm text-white/72 md:text-base">
            Squads when you need horsepower, solo when you need someone who owns
            the build. Tell us what&apos;s stuck.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#010233] transition hover:bg-white/85"
            >
              Book a technical review
            </a>
            <Link
              to="/work"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/9"
            >
              See case studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
