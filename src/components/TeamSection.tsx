import { TEAM_SIZE_LABEL, teamMembers } from "../data/team";

export default function TeamSection() {
  return (
    <section id="team" className="bg-[#010233] px-5 py-20 text-white sm:px-10 md:px-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-white/45 uppercase">
            Team
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            A team of {TEAM_SIZE_LABEL} strong
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">
            Senior builders across engineering, delivery, and QA — the people who
            lead client work day to day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-3">
          {teamMembers.map((person) => (
            <div
              key={person.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="aspect-square bg-[#16194E]/80">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="px-4 py-4">
                <div className="font-semibold">{person.name}</div>
                <div className="mt-0.5 text-sm text-white/50">{person.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
