import { caseStudies } from "../data/caseStudies";
import { engagements, services } from "../data/practice";

export function getPrerenderPaths() {
  return [
    "/",
    "/work",
    "/team",
    "/faq",
    ...caseStudies.map((study) => `/work/${study.slug}`),
    ...services.map((entry) => `/services/${entry.slug}`),
    ...engagements.map((entry) => `/engage/${entry.slug}`),
  ];
}
