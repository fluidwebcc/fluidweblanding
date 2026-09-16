import type { Route } from "./+types/services.$slug";
import { getPracticeEntry } from "../data/practice";
import PracticePage from "../pages/PracticePage";
import { buildMeta } from "../lib/seo";

export function loader({ params }: Route.LoaderArgs) {
  const entry = getPracticeEntry("service", params.slug!);
  if (!entry) {
    throw new Response(null, { status: 404, statusText: "Not Found" });
  }
  return { entry };
}

export function meta({ data }: Route.MetaArgs) {
  return buildMeta({
    title: data.entry.label,
    description: data.entry.tagline,
    path: `/services/${data.entry.slug}`,
  });
}

export default function ServiceRoute({ loaderData }: Route.ComponentProps) {
  return <PracticePage entry={loaderData.entry} />;
}
