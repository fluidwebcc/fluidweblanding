/** Senior / mid team showcase — no juniors or interns. Male illustrations only. */
const avatar = (seed: string) =>
  `https://api.dicebear.com/9.x/personas/svg?seed=${encodeURIComponent(seed)}&gender=male&backgroundColor=16194e`;

export const teamMembers = [
  {
    name: "Noor",
    role: "Founder",
    image: avatar("noor-fluidweb-founder"),
  },
  {
    name: "Muhammad Azhar",
    role: "Senior Full Stack Developer",
    image: avatar("muhammad-azhar-dev"),
  },
  {
    name: "Abdul Basit",
    role: "Full Stack Developer",
    image: avatar("abdul-basit-dev"),
  },
  {
    name: "Hussnain Anjum",
    role: "Project Manager",
    image: avatar("hussnain-anjum-pm"),
  },
  {
    name: "Abisha Iqbal",
    role: "Project Manager",
    image: avatar("abisha-iqbal-pm"),
  },
  {
    name: "Muhammad Jawad Asghar",
    role: "App Lead",
    image: avatar("jawad-asghar-applead"),
  },
  {
    name: "Usama Ahmed",
    role: "Full Stack Developer",
    image: avatar("usama-ahmed-dev"),
  },
  {
    name: "Muhammad Taaha",
    role: "Full Stack Developer",
    image: avatar("muhammad-taaha-dev"),
  },
  {
    name: "Enayat Ur Rehman",
    role: "Full Stack Developer",
    image: avatar("enayat-rehman-dev"),
  },
  {
    name: "Abdullah Azhar",
    role: "Full Stack Developer",
    image: avatar("abdullah-azhar-male"),
  },
  {
    name: "Abdullah Saleem",
    role: "Quality Assurance Engineer",
    image: avatar("abdullah-saleem-qa"),
  },
] as const;

export const TEAM_SIZE_LABEL = "30+";
