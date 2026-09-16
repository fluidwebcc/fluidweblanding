import type { Route } from "./+types/work.$slug";
import { getCaseStudy } from "../data/caseStudies";
import CaseStudyPage from "../pages/CaseStudyPage";
import { buildMeta } from "../lib/seo";

export function loader({ params }: Route.LoaderArgs) {
  const study = getCaseStudy(params.slug!);
  if (!study) {
    throw new Response(null, { status: 404, statusText: "Not Found" });
  }
  return { study };
}

export function meta({ data }: Route.MetaArgs) {
  return buildMeta({
    title: `${data.study.name} case study`,
    description: data.study.summary,
    path: `/work/${data.study.slug}`,
    image: data.study.logo,
    type: "article",
  });
}

export default function WorkSlugRoute({ loaderData }: Route.ComponentProps) {
  return <CaseStudyPage study={loaderData.study} />;
}
