export const teamMembers = [
  {
    name: "Noor",
    role: "Founder / CEO",
    image: "/team/noor.png",
  },
  {
    name: "Marij Ahmed",
    role: "Principal Backend Engineer",
    image: "/team/marij-ahmed.png",
  },
  {
    name: "Muhammad Azhar",
    role: "Team Lead",
    image: "/team/azhar.png",
  },
  {
    name: "Jawad Asghar",
    role: "Lead Web and Mobile Engineer",
    image: "/team/jawad-asghar.png",
  },
  {
    name: "Ramzan Nasir",
    role: "Product/UI Lead",
    image: "/team/ramzan-nasir.png",
  },
  {
    name: "Abdul Basit",
    role: "Full Stack Developer",
    image: "/team/basit.png",
  },
  {
    name: "Hussnain Anjum",
    role: "Project Manager",
    image: "/team/hussnain.png",
  },
  {
    name: "Abisha Gill",
    role: "Project Manager",
    image: "/team/abisha.png",
  },
  {
    name: "Usama Ahmed",
    role: "Full Stack Developer",
    image: "/team/usama.png",
  },
  {
    name: "Muhammad Taaha",
    role: "Full Stack Developer",
    image: "/team/taaha.png",
  },
  {
    name: "Enayat Ur Rehman",
    role: "Full Stack Developer",
    image: "/team/enayat.png",
  },
  {
    name: "Abdullah Azhar",
    role: "Full Stack Developer",
    image: "/team/abdullah-azhar.png",
  },
  {
    name: "Muzammil Bukhari",
    role: "Mobile App Developer",
    image: "/team/muzammil.png",
  },
  {
    name: "Abdul Wahab",
    role: "Full Stack Developer",
    image: "/team/abdul-wahab.png",
  },
  {
    name: "Ahmad Yousaf",
    role: "QA Engineer",
    image: "/team/ahmad-yousaf.png",
  },
  {
    name: "Noman Ahmed Khan",
    role: "Full Stack Developer",
    image: "/team/noman-ahmed-khan.png",
  },
] as const;

export const TEAM_SIZE_LABEL = "30+";

export const featuredTeamMembers = teamMembers.slice(0, 6);

export type TeamMember = (typeof teamMembers)[number];

export type PeekLayout = {
  className: string;
  rotate?: number;
  size?: "sm" | "md" | "lg";
  delay?: number;
};

export type PeekSlot = PeekLayout & { person: TeamMember };

/**
 * Position-only slots. Faces are picked at runtime so the roster
 * shuffles on each visit and cycles while you stay on the page.
 *
 * Coordinates stay on distinct corners (or far-apart inset spots on
 * the horizontal map panels) so portraits never sit on top of each other.
 */
export const sectionPeeks = {
  hero: [
    {
      className: "bottom-[12%] left-[4%] hidden sm:block",
      rotate: -9,
      size: "lg",
    },
    {
      className: "top-[18%] right-[4%] hidden md:block",
      rotate: 7,
      size: "md",
      delay: 0.12,
    },
    {
      className: "bottom-[12%] right-[4%] hidden lg:block",
      rotate: 11,
      size: "sm",
      delay: 0.2,
    },
    {
      className: "top-[18%] left-[4%] hidden md:block",
      rotate: -6,
      size: "md",
      delay: 0.16,
    },
  ] satisfies PeekLayout[],

  why: [
    {
      className: "-top-7 -right-4 md:-right-6",
      rotate: 8,
      size: "md",
    },
    {
      className: "-bottom-6 -left-4 md:-left-6",
      rotate: -7,
      size: "md",
      delay: 0.08,
    },
    {
      className: "-top-6 left-8 md:left-12",
      rotate: -5,
      size: "sm",
      delay: 0.14,
    },
    {
      className: "-bottom-7 right-6 md:right-10",
      rotate: 6,
      size: "md",
      delay: 0.2,
    },
  ] satisfies PeekLayout[],

  // Horizontal panels sit edge-to-edge — keep peeks inset from left/right
  // so they cannot collide across the seam with the neighbouring panel.
  build: [
    {
      className: "top-12 left-[18%] hidden md:block",
      rotate: -8,
      size: "lg",
    },
    {
      className: "bottom-16 left-[16%] hidden sm:block",
      rotate: 7,
      size: "md",
      delay: 0.12,
    },
    {
      className: "bottom-14 left-[58%] hidden md:block",
      rotate: -9,
      size: "sm",
      delay: 0.2,
    },
    {
      className: "top-12 left-[58%] hidden lg:block",
      rotate: 8,
      size: "md",
      delay: 0.16,
    },
  ] satisfies PeekLayout[],

  tech: [
    {
      className: "top-4 right-4 hidden lg:block",
      rotate: 10,
      size: "sm",
    },
    {
      className: "bottom-4 left-4 hidden lg:block",
      rotate: -6,
      size: "sm",
      delay: 0.1,
    },
  ] satisfies PeekLayout[],

  engage: [
    {
      className: "top-6 right-4 hidden md:block md:right-8",
      rotate: -9,
      size: "md",
    },
    {
      className: "bottom-6 left-4 hidden sm:block",
      rotate: 8,
      size: "lg",
      delay: 0.12,
    },
    {
      className: "top-8 left-4 hidden lg:block",
      rotate: 7,
      size: "md",
      delay: 0.18,
    },
  ] satisfies PeekLayout[],

  pace: [
    {
      className: "top-6 right-4 hidden md:block md:right-8",
      rotate: 6,
      size: "sm",
    },
    {
      className: "bottom-6 left-4 hidden sm:block",
      rotate: 11,
      size: "md",
      delay: 0.15,
    },
    {
      className: "top-8 left-4 hidden lg:block",
      rotate: -7,
      size: "md",
      delay: 0.2,
    },
    {
      className: "bottom-6 right-6 hidden md:block",
      rotate: 9,
      size: "sm",
      delay: 0.18,
    },
  ] satisfies PeekLayout[],

  work: [
    {
      className: "top-6 left-4 sm:left-6",
      rotate: 7,
      size: "sm",
    },
    {
      className: "top-6 right-4 hidden sm:block md:right-8",
      rotate: -10,
      size: "lg",
      delay: 0.1,
    },
    {
      className: "bottom-6 left-6 hidden lg:block",
      rotate: 5,
      size: "sm",
      delay: 0.18,
    },
    {
      className: "bottom-6 right-6 hidden md:block",
      rotate: -8,
      size: "md",
      delay: 0.22,
    },
  ] satisfies PeekLayout[],

  team: [
    {
      className: "top-2 right-2 hidden sm:block md:right-8",
      rotate: 8,
      size: "md",
    },
    {
      className: "top-28 left-0 hidden md:block",
      rotate: -7,
      size: "sm",
      delay: 0.12,
    },
    {
      className: "bottom-4 right-4 hidden sm:block md:right-10",
      rotate: 6,
      size: "md",
      delay: 0.2,
    },
    {
      className: "bottom-4 left-2 hidden md:block",
      rotate: -5,
      size: "sm",
      delay: 0.16,
    },
  ] satisfies PeekLayout[],

  cta: [
    {
      className: "-top-5 right-4 md:-top-7 md:right-10",
      rotate: 9,
      size: "lg",
    },
    {
      className: "-top-4 left-4 hidden md:block md:-top-6 md:left-8",
      rotate: 6,
      size: "sm",
      delay: 0.12,
    },
    {
      className: "-bottom-4 left-4 hidden sm:block md:left-8",
      rotate: -8,
      size: "md",
      delay: 0.1,
    },
    {
      className: "-bottom-4 right-4 hidden md:block md:right-10",
      rotate: -5,
      size: "sm",
      delay: 0.18,
    },
  ] satisfies PeekLayout[],
} as const;
