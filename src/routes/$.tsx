import NotFoundPage from "../pages/NotFoundPage";
import { buildMeta } from "../lib/seo";

export function meta() {
  return buildMeta({
    title: "Page not found",
    description: "The page you requested could not be found.",
    path: "/404",
  });
}

export default function NotFoundRoute() {
  return <NotFoundPage />;
}
