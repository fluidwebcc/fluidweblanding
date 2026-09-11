/** Senior / mid team — Notionists (adult, male-leaning: beard + short hair pool). */
const avatar = (seed: string) => {
  const params = new URLSearchParams({
    seed,
    backgroundColor: "16194e",
    beardProbability: "90",
    gestureProbability: "0",
    glassesProbability: "25",
  });
  // Short / cropped hair variants only — avoids long "feminine" styles
  for (const h of [
    "variant01",
    "variant02",
    "variant03",
    "variant05",
    "variant08",
    "variant11",
    "variant14",
    "variant18",
    "variant22",
    "variant28",
    "variant35",
    "hat",
  ]) {
    params.append("hair", h);
  }
  return `https://api.dicebear.com/9.x/notionists/svg?${params.toString()}`;
};

export const teamMembers = [
  {
    name: "Noor",
    role: "Founder",
    image: avatar("NoorFluidFounder92"),
  },
  {
    name: "Muhammad Azhar",
    role: "Senior Full Stack Developer",
    image: avatar("AzharSeniorDev441"),
  },
  {
    name: "Abdul Basit",
    role: "Full Stack Developer",
    image: avatar("BasitFullStack773"),
  },
  {
    name: "Hussnain Anjum",
    role: "Project Manager",
    image: avatar("HussnainAnjumPM88"),
  },
  {
    name: "Abisha Iqbal",
    role: "Project Manager",
    image: avatar("AbishaIqbalPMMale01"),
  },
  {
    name: "Muhammad Jawad Asghar",
    role: "App Lead",
    image: avatar("JawadAsgharAppLead55"),
  },
  {
    name: "Usama Ahmed",
    role: "Full Stack Developer",
    image: avatar("UsamaAhmedDev229"),
  },
  {
    name: "Muhammad Taaha",
    role: "Full Stack Developer",
    image: avatar("TaahaDevMale604"),
  },
  {
    name: "Enayat Ur Rehman",
    role: "Full Stack Developer",
    image: avatar("EnayatRehmanDev18"),
  },
  {
    name: "Abdullah Azhar",
    role: "Full Stack Developer",
    image: avatar("AbdullahAzharMale77"),
  },
  {
    name: "Abdullah Saleem",
    role: "Quality Assurance Engineer",
    image: avatar("AbdullahSaleemQA33"),
  },
] as const;

export const TEAM_SIZE_LABEL = "30+";
