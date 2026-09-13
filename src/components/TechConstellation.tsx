const ASSET_V = "brand2";

type TechTile = {
  name: string;
  src?: string;
  mark?: "stream" | "llm" | "voice" | "doc" | "multi" | "vapi";
  markColor?: string;
  tint: string;
  className: string;
  x: string;
  y: string;
  tilt: number;
  delay: string;
  duration: string;
};

const tiles: TechTile[] = [
  {
    name: "React",
    src: `/tech/react.svg?${ASSET_V}`,
    tint: "rgba(97, 218, 251, 0.18)",
    className: "w-[7.2rem] sm:w-36 md:w-[9.5rem]",
    x: "8.5%",
    y: "8.5%",
    tilt: -14,
    delay: "0s",
    duration: "7.2s",
  },
  {
    name: "Next.js",
    src: `/tech/nextdotjs.svg?${ASSET_V}`,
    tint: "rgba(255,255,255,0.08)",
    className: "w-24 sm:w-[6.5rem]",
    x: "50%",
    y: "6.5%",
    tilt: 8,
    delay: "0.35s",
    duration: "6.4s",
  },
  {
    name: "AWS",
    src: `/tech/aws-smile.svg?${ASSET_V}`,
    tint: "rgba(255, 153, 0, 0.2)",
    className: "w-32 sm:w-40 md:w-44",
    x: "91%",
    y: "9%",
    tilt: 12,
    delay: "0.7s",
    duration: "7.8s",
  },
  {
    name: "TypeScript",
    src: `/tech/typescript.svg?${ASSET_V}`,
    tint: "rgba(49, 120, 198, 0.22)",
    className: "w-[6.4rem] sm:w-28",
    x: "7.5%",
    y: "32%",
    tilt: -8,
    delay: "0.15s",
    duration: "6.9s",
  },
  {
    name: "Stripe",
    src: `/tech/stripe.svg?${ASSET_V}`,
    tint: "rgba(99, 91, 255, 0.22)",
    className: "w-[6.4rem] sm:w-[7.2rem]",
    x: "93.5%",
    y: "28%",
    tilt: 9,
    delay: "0.9s",
    duration: "7.1s",
  },
  {
    name: "Node",
    src: `/tech/nodedotjs.svg?${ASSET_V}`,
    tint: "rgba(95, 160, 78, 0.2)",
    className: "w-[5.6rem] sm:w-[6.4rem]",
    x: "6.5%",
    y: "61%",
    tilt: -11,
    delay: "1.1s",
    duration: "6.6s",
  },
  {
    name: "Vercel",
    src: `/tech/vercel.svg?${ASSET_V}`,
    tint: "rgba(255,255,255,0.08)",
    className: "w-[5.4rem] sm:w-24",
    x: "93%",
    y: "54%",
    tilt: 7,
    delay: "0.45s",
    duration: "8s",
  },
  {
    name: "Python",
    src: `/tech/python.svg?${ASSET_V}`,
    tint: "rgba(55, 118, 171, 0.22)",
    className: "w-32 sm:w-40",
    x: "9%",
    y: "90%",
    tilt: -16,
    delay: "0.25s",
    duration: "7.5s",
  },
  {
    name: "PostgreSQL",
    src: `/tech/postgresql.svg?${ASSET_V}`,
    tint: "rgba(65, 105, 225, 0.2)",
    className: "w-[6.4rem] sm:w-32",
    x: "50%",
    y: "93.5%",
    tilt: 4,
    delay: "0.8s",
    duration: "6.7s",
  },
  {
    name: "Twilio",
    src: `/tech/twilio.svg?${ASSET_V}`,
    tint: "rgba(242, 47, 70, 0.18)",
    className: "w-[7.2rem] sm:w-36",
    x: "90%",
    y: "90%",
    tilt: 11,
    delay: "0.55s",
    duration: "7.4s",
  },
  {
    name: "Supabase",
    src: `/tech/supabase.svg?${ASSET_V}`,
    tint: "rgba(62, 207, 142, 0.18)",
    className: "hidden w-[5.2rem] lg:block",
    x: "61.5%",
    y: "14.5%",
    tilt: 6,
    delay: "1.3s",
    duration: "6.3s",
  },
  {
    name: "React Native",
    src: `/tech/reactnative.svg?${ASSET_V}`,
    tint: "rgba(97, 218, 251, 0.14)",
    className: "hidden w-[6.2rem] lg:block",
    x: "80%",
    y: "25%",
    tilt: -8,
    delay: "0.2s",
    duration: "7.6s",
  },
  {
    name: "tRPC",
    src: `/tech/trpc.svg?${ASSET_V}`,
    tint: "rgba(37, 150, 190, 0.18)",
    className: "hidden w-[4.8rem] lg:block",
    x: "22.5%",
    y: "73%",
    tilt: -5,
    delay: "1s",
    duration: "6.5s",
  },
  {
    name: "Mux",
    src: `/tech/mux.svg?${ASSET_V}`,
    tint: "rgba(255, 62, 181, 0.16)",
    className: "hidden w-[4.8rem] lg:block",
    x: "63%",
    y: "87%",
    tilt: 8,
    delay: "0.4s",
    duration: "7.9s",
  },
  {
    name: "Live streaming",
    mark: "stream",
    markColor: "#6EE7B7",
    tint: "rgba(110, 231, 183, 0.16)",
    className: "hidden w-[6.4rem] lg:block",
    x: "80%",
    y: "74%",
    tilt: 13,
    delay: "0.65s",
    duration: "7s",
  },
  {
    name: "LLMs",
    mark: "llm",
    markColor: "#C084FC",
    tint: "rgba(192, 132, 252, 0.18)",
    className: "hidden w-[5.2rem] lg:block",
    x: "19.5%",
    y: "25%",
    tilt: -9,
    delay: "1.15s",
    duration: "6.8s",
  },
  {
    name: "Voice agents",
    mark: "voice",
    markColor: "#38BDF8",
    tint: "rgba(56, 189, 248, 0.16)",
    className: "hidden w-[6rem] lg:block",
    x: "15.5%",
    y: "45%",
    tilt: 5,
    delay: "0.3s",
    duration: "7.3s",
  },
  {
    name: "Document AI",
    mark: "doc",
    markColor: "#FBBF24",
    tint: "rgba(251, 191, 36, 0.16)",
    className: "hidden w-[6rem] lg:block",
    x: "37%",
    y: "89%",
    tilt: -6,
    delay: "0.95s",
    duration: "6.2s",
  },
  {
    name: "Multi-model",
    mark: "multi",
    markColor: "#A78BFA",
    tint: "rgba(167, 139, 250, 0.18)",
    className: "hidden w-[5.4rem] lg:block",
    x: "38.5%",
    y: "13.5%",
    tilt: 10,
    delay: "0.5s",
    duration: "7.7s",
  },
  {
    name: "Vapi",
    mark: "vapi",
    markColor: "#2DD4BF",
    tint: "rgba(45, 212, 191, 0.16)",
    className: "hidden w-[5rem] lg:block",
    x: "83%",
    y: "42%",
    tilt: -4,
    delay: "1.25s",
    duration: "6.4s",
  },
  {
    name: "GitHub",
    src: `/tech/github.svg?${ASSET_V}`,
    tint: "rgba(255,255,255,0.1)",
    className: "hidden w-[4.6rem] lg:block",
    x: "36%",
    y: "25%",
    tilt: -7,
    delay: "0.6s",
    duration: "6.9s",
  },
  {
    name: "Tailwind",
    src: `/tech/tailwindcss.svg?${ASSET_V}`,
    tint: "rgba(6, 182, 212, 0.18)",
    className: "hidden w-[4.8rem] lg:block",
    x: "75%",
    y: "38%",
    tilt: 8,
    delay: "0.85s",
    duration: "7.2s",
  },
  {
    name: "Docker",
    src: `/tech/docker.svg?${ASSET_V}`,
    tint: "rgba(36, 150, 237, 0.18)",
    className: "hidden w-[4.8rem] lg:block",
    x: "26%",
    y: "39%",
    tilt: 6,
    delay: "0.4s",
    duration: "6.5s",
  },
  {
    name: "GraphQL",
    src: `/tech/graphql.svg?${ASSET_V}`,
    tint: "rgba(225, 0, 152, 0.16)",
    className: "hidden w-[4.8rem] lg:block",
    x: "76%",
    y: "54%",
    tilt: -10,
    delay: "1.05s",
    duration: "7.6s",
  },
  {
    name: "Figma",
    src: `/tech/figma.svg?${ASSET_V}`,
    tint: "rgba(242, 78, 30, 0.16)",
    className: "hidden w-[4.4rem] lg:block",
    x: "50%",
    y: "21%",
    tilt: 5,
    delay: "0.2s",
    duration: "6.8s",
  },
  {
    name: "Cloudflare",
    src: `/tech/cloudflare.svg?${ASSET_V}`,
    tint: "rgba(243, 128, 32, 0.18)",
    className: "hidden w-[5rem] lg:block",
    x: "64.5%",
    y: "26.5%",
    tilt: -6,
    delay: "1.2s",
    duration: "7.1s",
  },
  {
    name: "Redis",
    src: `/tech/redis.svg?${ASSET_V}`,
    tint: "rgba(255, 68, 56, 0.16)",
    className: "hidden w-[4.6rem] lg:block",
    x: "22%",
    y: "55.5%",
    tilt: 9,
    delay: "0.75s",
    duration: "6.4s",
  },
  {
    name: "Prisma",
    src: `/tech/prisma.svg?${ASSET_V}`,
    tint: "rgba(255,255,255,0.1)",
    className: "hidden w-[4.6rem] lg:block",
    x: "70%",
    y: "69%",
    tilt: -5,
    delay: "0.5s",
    duration: "7.8s",
  },
  {
    name: "Git",
    src: `/tech/git.svg?${ASSET_V}`,
    tint: "rgba(240, 80, 50, 0.18)",
    className: "hidden w-[4.4rem] lg:block",
    x: "41.5%",
    y: "79%",
    tilt: 7,
    delay: "1.15s",
    duration: "6.7s",
  },
  {
    name: "Firebase",
    src: `/tech/firebase.svg?${ASSET_V}`,
    tint: "rgba(255, 202, 40, 0.16)",
    className: "hidden w-[4.6rem] lg:block",
    x: "32%",
    y: "67%",
    tilt: -8,
    delay: "0.35s",
    duration: "7.3s",
  },
  {
    name: "MongoDB",
    src: `/tech/mongodb.svg?${ASSET_V}`,
    tint: "rgba(71, 162, 72, 0.18)",
    className: "hidden w-[4.8rem] lg:block",
    x: "57%",
    y: "76%",
    tilt: 4,
    delay: "0.95s",
    duration: "7s",
  },
];

function Mark({
  kind,
  color,
}: {
  kind: NonNullable<TechTile["mark"]>;
  color: string;
}) {
  const common = "h-8 w-8";
  if (kind === "stream") {
    return (
      <svg viewBox="0 0 32 32" className={common} fill={color} aria-hidden>
        <circle cx="8" cy="16" r="3" />
        <path
          d="M14 10c6 2 6 10 0 12M20 7c8 4 8 14 0 18"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "llm") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden>
        <rect x="6" y="8" width="20" height="16" rx="3" fill="none" stroke={color} strokeWidth="2" />
        <path d="M10 14h12M10 18h8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "voice") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden>
        <rect x="13" y="6" width="6" height="12" rx="3" fill={color} />
        <path
          d="M9 16a7 7 0 0 0 14 0M16 23v4"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "doc") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden>
        <path d="M9 5h10l6 6v16H9V5Z" fill="none" stroke={color} strokeWidth="2" />
        <path d="M19 5v6h6M12 16h8M12 20h6" stroke={color} strokeWidth="2" />
      </svg>
    );
  }
  if (kind === "multi") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden>
        <circle cx="11" cy="14" r="5" fill="none" stroke={color} strokeWidth="2" />
        <circle cx="21" cy="14" r="5" fill="none" stroke={color} strokeWidth="2" />
        <circle cx="16" cy="21" r="5" fill="none" stroke={color} strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className={common} aria-hidden>
      <path
        d="M8 20c4-10 12-10 16 0"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="12" r="3" fill={color} />
    </svg>
  );
}

function TileFace({
  tile,
  floating,
}: {
  tile: TechTile;
  floating?: boolean;
}) {
  return (
    <figure
      className={`flex flex-col items-center rounded-2xl border border-white/14 px-3 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:rounded-3xl sm:px-4 sm:py-4 ${
        floating ? "tech-float w-full" : "w-[5.6rem]"
      }`}
      style={{
        background: `linear-gradient(180deg, ${tile.tint}, rgba(8,12,48,0.88))`,
        ...(floating
          ? {
              ["--tech-tilt" as string]: `${tile.tilt}deg`,
              ["--tech-dur" as string]: tile.duration,
              animationDelay: tile.delay,
            }
          : undefined),
      }}
    >
      {tile.src ? (
        <img
          src={tile.src}
          alt=""
          className="h-9 w-9 object-contain sm:h-11 sm:w-11 md:h-12 md:w-12"
        />
      ) : tile.mark ? (
        <Mark kind={tile.mark} color={tile.markColor ?? "#fff"} />
      ) : null}
      <figcaption className="mt-2 text-center text-xs font-semibold tracking-wide text-nowrap text-white/85">
        {tile.name}
      </figcaption>
    </figure>
  );
}

export default function TechConstellation() {
  return (
    <div className="relative z-30 flex h-full w-full flex-col items-center justify-center">
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {tiles.map((tile) => (
          <div
            key={tile.name}
            className={`absolute z-[2] ${tile.className}`}
            style={{
              left: tile.x,
              top: tile.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <TileFace tile={tile} floating />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-lg px-6 text-center sm:px-8">
        <div className="pointer-events-none absolute inset-[-2.5rem] -z-10 rounded-[2.5rem] bg-[#0c1454]/80 blur-xl" />
        <p className="text-xs font-medium tracking-[0.22em] text-white/55 uppercase">
          Stack
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
          Technologies we work with
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/72 md:text-lg">
          The stack we ship on every week — web, mobile, cloud, payments,
          messaging, and AI in production. Not a slide-deck toolchain.
        </p>
      </div>

      <div className="relative z-10 mt-10 flex max-w-lg flex-wrap justify-center gap-3 px-5 sm:hidden">
        {tiles.map((tile) => (
          <TileFace key={tile.name} tile={tile} />
        ))}
      </div>
    </div>
  );
}
