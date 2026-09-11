export type PortfolioProduct = {
  name: string;
  location: string;
  logo: string;
  slug?: string;
};

export const portfolioProducts: PortfolioProduct[] = [
  {
    name: "Floor Nexus",
    location: "Florida, USA",
    logo: "/logos/floor-nexus.png",
    slug: "floor-nexus",
  },
  {
    name: "Treply",
    location: "Illinois, USA",
    logo: "/logos/treply.svg",
    slug: "treply",
  },
  {
    name: "PPV.MY",
    location: "Malaysia",
    logo: "/logos/ppv-my.svg",
    slug: "ppv-my",
  },
  {
    name: "clinicOS",
    location: "Australia",
    logo: "/logos/clinicos.svg",
    slug: "clinicos",
  },
  {
    name: "SmartFaktura",
    location: "Norway · Rwanda",
    logo: "/logos/smartfaktura.png",
    slug: "smartfaktura",
  },
  {
    name: "Voxtell AI",
    location: "Florida, USA",
    logo: "/logos/voxtell.png",
    slug: "voxtell",
  },
  {
    name: "Otteri AI",
    location: "Illinois, USA",
    logo: "/logos/otteri.png",
    slug: "otteri",
  },
  { name: "Rank.ai", location: "California, USA", logo: "/logos/rank-ai.svg" },
  { name: "Radar", location: "United States", logo: "/logos/radar.svg" },
  {
    name: "Practice Pro",
    location: "Australia",
    logo: "/logos/practice-pro.png",
  },
  { name: "GoodOff", location: "Illinois, USA", logo: "/logos/goodoff.png" },
  { name: "Pikcel", location: "Illinois, USA", logo: "/logos/pikcel.png" },
  {
    name: "Snap.Photo",
    location: "Illinois, USA",
    logo: "/logos/snap-photo.png",
  },
  { name: "Plenor", location: "Chile", logo: "/logos/plenor.svg" },
  { name: "Jarik", location: "France", logo: "/logos/jarik.svg" },
  { name: "Dealwey", location: "France", logo: "/logos/dealwey.png" },
];

export const additionalProducts = portfolioProducts.filter((p) => !p.slug);
