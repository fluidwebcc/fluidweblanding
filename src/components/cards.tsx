const points = [
  {
    title: "Ship with ownership",
    body: "We embed as your product engineering partner — not ticket-takers on a time sheet.",
  },
  {
    title: "Full-stack delivery",
    body: "Web, mobile, AI pipelines, payments, and ops tooling from one coordinated team.",
  },
  {
    title: "Founder-speed cadence",
    body: "Weekly shipping rhythm, clear scope, and no agency theater between you and the build.",
  },
  {
    title: "Global, production-ready",
    body: "Live products across the US, Australia, Malaysia, Norway, and Rwanda.",
  },
] as const;

export default function Cards() {
  return (
    <section className="bg-[#010233] px-5 py-20 text-white sm:px-10 md:px-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Why Fluid<span className="font-semibold">Web</span>?
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-7 backdrop-blur-md transition hover:border-white/25 hover:bg-white/[0.09]"
            >
              <h3 className="text-xl font-semibold">{point.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
