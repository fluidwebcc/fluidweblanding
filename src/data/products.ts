export type PortfolioProduct = {
  name: string;
  location: string;
  slug?: string;
};

export const portfolioProducts: PortfolioProduct[] = [
  { name: "Floor Nexus", location: "Florida, USA", slug: "floor-nexus" },
  { name: "Treply", location: "Illinois, USA", slug: "treply" },
  { name: "PPV.MY", location: "Malaysia", slug: "ppv-my" },
  { name: "clinicOS", location: "Australia", slug: "clinicos" },
  { name: "SmartFaktura", location: "Norway · Rwanda", slug: "smartfaktura" },
  { name: "Voxtell AI", location: "Florida, USA", slug: "voxtell" },
  { name: "Otteri AI", location: "Illinois, USA", slug: "otteri" },
  { name: "Rank.ai", location: "California, USA" },
  { name: "Radar", location: "United States" },
  { name: "Practice Pro", location: "Australia" },
  { name: "GoodOff", location: "Illinois, USA" },
  { name: "Pikcel", location: "Illinois, USA" },
  { name: "Snap.Photo", location: "Illinois, USA" },
  { name: "Plenor", location: "Chile" },
  { name: "Jarik", location: "France" },
  { name: "Dealwey", location: "France" },
];

export const additionalProducts = portfolioProducts.filter((p) => !p.slug);
