const techGroups = [
  {
    label: "Product",
    items: ["React", "Next.js", "TypeScript", "Node", "tRPC", "React Native"],
  },
  {
    label: "Data & cloud",
    items: ["PostgreSQL", "Supabase", "AWS", "Vercel", "Python"],
  },
  {
    label: "Money & media",
    items: ["Stripe", "Twilio", "Mux", "Live streaming"],
  },
  {
    label: "AI layer",
    items: ["LLMs", "Vapi", "Voice agents", "Document AI", "Multi-model"],
  },
] as const;

type TechTile = {
  name: string;
  src?: string;
  mark?: "stream" | "llm" | "voice" | "doc" | "multi" | "vapi";
  tint: string;
  className: string;
};

const tiles: TechTile[] = [
  {
    name: "React",
    src: "/tech/react.svg",
    tint: "rgba(97, 218, 251, 0.16)",
    className: "top-[3%] left-[3%] w-[7.2rem] -rotate-[14deg] sm:w-36 md:w-[9.5rem]",
  },
  {
    name: "Next.js",
    src: "/tech/nextdotjs.svg",
    tint: "rgba(255,255,255,0.08)",
    className: "top-[2%] left-[40%] w-24 rotate-[8deg] sm:w-[6.5rem] md:left-[42%]",
  },
  {
    name: "AWS",
    src: "/tech/aws.svg",
    tint: "rgba(255, 153, 0, 0.16)",
    className: "top-[3%] right-[3%] w-32 rotate-[12deg] sm:w-40 md:w-44",
  },
  {
    name: "TypeScript",
    src: "/tech/typescript.svg",
    tint: "rgba(49, 120, 198, 0.22)",
    className: "top-[30%] left-[1.5%] w-[6.4rem] -rotate-[8deg] sm:w-28",
  },
  {
    name: "Stripe",
    src: "/tech/stripe.svg",
    tint: "rgba(99, 91, 255, 0.2)",
    className: "top-[28%] right-[1.5%] w-[6.4rem] rotate-[9deg] sm:w-[7.2rem]",
  },
  {
    name: "Node",
    src: "/tech/nodedotjs.svg",
    tint: "rgba(51, 153, 51, 0.16)",
    className: "top-[54%] left-[2%] w-[5.6rem] -rotate-[11deg] sm:w-[6.4rem]",
  },
  {
    name: "Vercel",
    src: "/tech/vercel.svg",
    tint: "rgba(255,255,255,0.08)",
    className: "top-[52%] right-[2%] w-[5.4rem] rotate-[7deg] sm:w-24",
  },
  {
    name: "Python",
    src: "/tech/python.svg",
    tint: "rgba(55, 118, 171, 0.2)",
    className: "bottom-[3%] left-[3%] w-32 -rotate-[16deg] sm:w-40",
  },
  {
    name: "PostgreSQL",
    src: "/tech/postgresql.svg",
    tint: "rgba(65, 105, 225, 0.18)",
    className: "bottom-[2%] left-[38%] w-[6.4rem] rotate-[4deg] sm:w-32 md:left-[41%]",
  },
  {
    name: "Twilio",
    src: "/tech/twilio.svg",
    tint: "rgba(242, 47, 70, 0.18)",
    className: "bottom-[3%] right-[3%] w-[7.2rem] rotate-[11deg] sm:w-36",
  },
  {
    name: "Supabase",
    src: "/tech/supabase.svg",
    tint: "rgba(62, 207, 142, 0.16)",
    className: "top-[7%] left-[22%] w-[5.2rem] rotate-[6deg] hidden lg:flex",
  },
  {
    name: "React Native",
    src: "/tech/reactnative.svg",
    tint: "rgba(97, 218, 251, 0.12)",
    className: "top-[7%] right-[21%] w-[6.2rem] -rotate-[8deg] hidden lg:flex",
  },
  {
    name: "tRPC",
    src: "/tech/trpc.svg",
    tint: "rgba(37, 150, 190, 0.16)",
    className: "bottom-[16%] left-[16%] w-[4.8rem] -rotate-[5deg] hidden xl:flex",
  },
  {
    name: "Mux",
    src: "/tech/mux.svg",
    tint: "rgba(255, 62, 181, 0.14)",
    className: "bottom-[16%] right-[16%] w-[4.8rem] rotate-[8deg] hidden xl:flex",
  },
  {
    name: "Live streaming",
    mark: "stream",
    tint: "rgba(110, 231, 183, 0.14)",
    className: "top-[40%] right-[12%] w-[6.4rem] rotate-[13deg] hidden xl:flex",
  },
  {
    name: "LLMs",
    mark: "llm",
    tint: "rgba(192, 132, 252, 0.16)",
    className: "top-[40%] left-[12%] w-[5.2rem] -rotate-[9deg] hidden xl:flex",
  },
  {
    name: "Voice agents",
    mark: "voice",
    tint: "rgba(56, 189, 248, 0.16)",
    className: "bottom-[22%] left-[6%] w-[6rem] rotate-[5deg] hidden xl:flex",
  },
  {
    name: "Document AI",
    mark: "doc",
    tint: "rgba(251, 191, 36, 0.14)",
    className: "bottom-[22%] right-[6%] w-[6rem] -rotate-[6deg] hidden xl:flex",
  },
  {
    name: "Multi-model",
    mark: "multi",
    tint: "rgba(167, 139, 250, 0.16)",
    className: "top-[22%] left-[12%] w-[5.4rem] rotate-[10deg] hidden xl:flex",
  },
  {
    name: "Vapi",
    mark: "vapi",
    tint: "rgba(45, 212, 191, 0.14)",
    className: "top-[22%] right-[12%] w-[5rem] -rotate-[4deg] hidden xl:flex",
  },
];

function Mark({ kind }: { kind: NonNullable<TechTile["mark"]> }) {
  const common = "h-8 w-8 text-white/90";
  if (kind === "stream") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden>
        <circle cx="8" cy="16" r="3" fill="currentColor" />
        <path
          d="M14 10c6 2 6 10 0 12M20 7c8 4 8 14 0 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "llm") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden>
        <rect x="6" y="8" width="20" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10 14h12M10 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "voice") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden>
        <rect x="13" y="6" width="6" height="12" rx="3" fill="currentColor" />
        <path
          d="M9 16a7 7 0 0 0 14 0M16 23v4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "doc") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden>
        <path d="M9 5h10l6 6v16H9V5Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M19 5v6h6M12 16h8M12 20h6" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (kind === "multi") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden>
        <circle cx="11" cy="14" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="21" cy="14" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="21" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className={common} aria-hidden>
      <path
        d="M8 20c4-10 12-10 16 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

function TechTileCard({ tile }: { tile: TechTile }) {
  return (
    <figure
      className={`absolute z-[2] flex flex-col items-center rounded-2xl border border-white/14 px-3 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:rounded-3xl sm:px-4 sm:py-4 ${tile.className}`}
      style={{ background: `linear-gradient(180deg, ${tile.tint}, rgba(8,12,48,0.88))` }}
    >
      {tile.src ? (
        <img
          src={tile.src}
          alt=""
          className="h-9 w-9 object-contain sm:h-11 sm:w-11 md:h-12 md:w-12"
        />
      ) : tile.mark ? (
        <Mark kind={tile.mark} />
      ) : null}
      <figcaption className="mt-2 text-center text-[10px] font-semibold tracking-wide whitespace-nowrap text-white/80 sm:text-[11px]">
        {tile.name}
      </figcaption>
    </figure>
  );
}

export default function TechConstellation() {
  return (
    <div className="relative z-30 flex h-full w-full items-center justify-center">
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {tiles.map((tile) => (
          <TechTileCard key={tile.name} tile={tile} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-lg px-6 text-center sm:px-8">
        <div className="pointer-events-none absolute inset-[-2.5rem] -z-10 rounded-[2.5rem] bg-[#0c1454]/80 blur-xl" />
        <p className="text-xs font-medium tracking-[0.2em] text-white/45 uppercase">
          Stack
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
          Technologies we work with
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/55 md:text-base">
          Modern tooling with AI in the loop — old waterfall stacks don&apos;t
          scale here.
        </p>

        <div className="mt-7 grid gap-4 text-left sm:grid-cols-2">
          {techGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-white/40 uppercase">
                {group.label}
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/75">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { techGroups };
