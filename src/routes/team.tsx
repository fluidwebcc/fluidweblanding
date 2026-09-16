import { TEAM_SIZE_LABEL } from "../data/team";
import TeamPage from "../pages/TeamPage";
import { buildMeta } from "../lib/seo";

export function meta() {
  return buildMeta({
    title: "Team",
    description: `A team of ${TEAM_SIZE_LABEL} senior builders who embed with startups and product teams — pick up the pace and get the work shipped.`,
    path: "/team",
  });
}

export default function TeamRoute() {
  return <TeamPage />;
}
