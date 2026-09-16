import { companyProof } from "../data/caseStudies";
import WorkIndexPage from "../pages/WorkIndexPage";
import { buildMeta } from "../lib/seo";

export function meta() {
  return buildMeta({
    title: "Case studies",
    description: `${companyProof.productsShipped} products shipped across ${companyProof.continents} continents. Case studies from startups and teams we helped move faster.`,
    path: "/work",
  });
}

export default function WorkRoute() {
  return <WorkIndexPage />;
}
