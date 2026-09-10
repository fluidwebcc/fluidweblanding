const team = [
  {
    name: "Noor",
    role: "Founder · Engineering",
    image: "/team/noor.svg",
  },
  {
    name: "Aisha",
    role: "Delivery lead",
    image: "/team/aisha.svg",
  },
  {
    name: "Marcus",
    role: "Senior engineer",
    image: "/team/marcus.svg",
  },
  {
    name: "Sofia",
    role: "Product design",
    image: "/team/sofia.svg",
  },
  {
    name: "Rayan",
    role: "Mobile",
    image: "/team/rayan.svg",
  },
  {
    name: "Elena",
    role: "Platform",
    image: "/team/elena.svg",
  },
  {
    name: "Jamal",
    role: "Client success",
    image: "/team/jamal.svg",
  },
  {
    name: "Mira",
    role: "Quality & release",
    image: "/team/mira.svg",
  },
] as const;

export default function TeamSection() {
  return (
    <section id="team" className="bg-[#010233] px-5 py-20 text-white sm:px-10 md:px-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-white/45 uppercase">
            Team
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            The people shipping with you
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">
            A compact crew across product, mobile, design, and delivery — built to
            embed with founders and move fast.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {team.map((person) => (
            <div
              key={person.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="aspect-square bg-[#16194E]/80">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
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
