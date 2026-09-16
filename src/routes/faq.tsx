import { companyProof } from "../data/caseStudies";
import FaqPage from "../pages/FaqPage";
import { buildMeta } from "../lib/seo";

export function meta() {
  return buildMeta({
    title: "Founder FAQ",
    description: `The questions founders ask before they bring us in — answered straight. ${companyProof.productsShipped} products shipped across ${companyProof.continents} continents.`,
    path: "/faq",
  });
}

export default function FaqRoute() {
  return <FaqPage />;
}
