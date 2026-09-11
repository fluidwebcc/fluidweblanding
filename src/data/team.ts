export const teamMembers = [
  {
    name: "Noor",
    role: "Founder / CEO",
    image: "/team/noor.png",
  },
  {
    name: "Muhammad Azhar",
    role: "Senior Full Stack Developer",
    image: "/team/azhar.png",
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
] as const;

export const TEAM_SIZE_LABEL = "30+";

export type PeekSlot = {
  person: (typeof teamMembers)[number];
  className: string;
  rotate?: number;
  size?: "sm" | "md" | "lg";
  delay?: number;
};

/**
 * 1–4 peeks per homepage section. Repeats are allowed only when
 * separated by other sections (same face never in adjacent sections).
 */
export const sectionPeeks = {
  hero: [
    {
      person: teamMembers[0],
      className: "bottom-[18%] left-[6%] hidden sm:block",
      rotate: -9,
      size: "lg",
    },
    {
      person: teamMembers[4],
      className: "top-[22%] right-[8%] hidden md:block",
      rotate: 7,
      size: "md",
      delay: 0.12,
    },
    {
      person: teamMembers[8],
      className: "bottom-[12%] right-[14%] hidden lg:block",
      rotate: 11,
      size: "sm",
      delay: 0.2,
    },
    {
      person: teamMembers[9],
      className: "top-[32%] left-[5%] hidden md:block",
      rotate: -6,
      size: "md",
      delay: 0.16,
    },
  ] satisfies PeekSlot[],

  why: [
    {
      person: teamMembers[1],
      className: "-top-7 -right-4 md:-right-6",
      rotate: 8,
      size: "md",
    },
    {
      person: teamMembers[2],
      className: "-bottom-6 -left-4 md:-left-6",
      rotate: -7,
      size: "md",
      delay: 0.08,
    },
    {
      person: teamMembers[5],
      className: "-top-6 left-8 md:left-12",
      rotate: -5,
      size: "sm",
      delay: 0.14,
    },
    {
      person: teamMembers[6],
      className: "-bottom-7 right-6 md:right-10",
      rotate: 6,
      size: "md",
      delay: 0.2,
    },
  ] satisfies PeekSlot[],

  build: [
    {
      person: teamMembers[4],
      className: "top-16 right-10 hidden md:block lg:right-28",
      rotate: -8,
      size: "lg",
    },
    {
      person: teamMembers[8],
      className: "bottom-24 left-10 hidden sm:block",
      rotate: 7,
      size: "md",
      delay: 0.12,
    },
  ] satisfies PeekSlot[],

  tech: [
    {
      person: teamMembers[1],
      className: "top-20 right-12 hidden md:block",
      rotate: 10,
      size: "md",
    },
    {
      person: teamMembers[2],
      className: "bottom-28 left-8 hidden lg:block",
      rotate: -6,
      size: "sm",
      delay: 0.1,
    },
    {
      person: teamMembers[9],
      className: "bottom-16 right-20 hidden sm:block",
      rotate: 8,
      size: "lg",
      delay: 0.18,
    },
  ] satisfies PeekSlot[],

  engage: [
    {
      person: teamMembers[5],
      className: "top-24 right-16 hidden md:block",
      rotate: -9,
      size: "md",
    },
    {
      person: teamMembers[6],
      className: "bottom-20 left-12 hidden sm:block",
      rotate: 8,
      size: "lg",
      delay: 0.12,
    },
  ] satisfies PeekSlot[],

  pace: [
    {
      person: teamMembers[3],
      className: "top-16 right-10 hidden md:block",
      rotate: 6,
      size: "sm",
    },
    {
      person: teamMembers[7],
      className: "bottom-20 right-8 hidden sm:block md:right-20",
      rotate: 11,
      size: "md",
      delay: 0.15,
    },
  ] satisfies PeekSlot[],

  work: [
    {
      person: teamMembers[0],
      className: "-left-2 -top-8 sm:-left-6",
      rotate: 7,
      size: "sm",
    },
    {
      person: teamMembers[1],
      className: "top-10 right-4 hidden sm:block md:right-10 lg:right-16",
      rotate: -10,
      size: "lg",
      delay: 0.1,
    },
    {
      person: teamMembers[8],
      className: "bottom-8 left-[42%] hidden lg:block",
      rotate: 5,
      size: "sm",
      delay: 0.18,
    },
    {
      person: teamMembers[9],
      className: "bottom-10 right-6 hidden md:block lg:right-12",
      rotate: -8,
      size: "md",
      delay: 0.22,
    },
  ] satisfies PeekSlot[],

  team: [
    {
      person: teamMembers[2],
      className: "-top-2 right-0 hidden sm:block md:right-8",
      rotate: 8,
      size: "md",
    },
    {
      person: teamMembers[5],
      className: "top-32 -left-3 hidden md:block",
      rotate: -7,
      size: "sm",
      delay: 0.12,
    },
  ] satisfies PeekSlot[],

  cta: [
    {
      person: teamMembers[3],
      className: "-top-6 right-6 md:-top-8 md:right-12",
      rotate: 9,
      size: "lg",
    },
    {
      person: teamMembers[4],
      className: "-bottom-5 left-8 hidden sm:block",
      rotate: -8,
      size: "md",
      delay: 0.1,
    },
    {
      person: teamMembers[7],
      className: "top-1/2 -right-3 hidden lg:block",
      rotate: 6,
      size: "sm",
      delay: 0.18,
    },
    {
      person: teamMembers[9],
      className: "bottom-8 left-[42%] hidden md:block",
      rotate: -5,
      size: "sm",
      delay: 0.14,
    },
  ] satisfies PeekSlot[],
} as const;
