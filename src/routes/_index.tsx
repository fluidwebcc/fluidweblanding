import { companyProof } from "../data/caseStudies";
import HomePage from "../pages/HomePage";
import { buildMeta } from "../lib/seo";

export function meta() {
  return buildMeta({
    title: "Case studies & product engineering",
    description: companyProof.mission,
    path: "/",
  });
}

export default function HomeRoute() {
  return <HomePage />;
}
