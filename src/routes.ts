import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/_index.tsx"),
    route("work", "routes/work.tsx"),
    route("work/:slug", "routes/work.$slug.tsx"),
    route("services/:slug", "routes/services.$slug.tsx"),
    route("engage/:slug", "routes/engage.$slug.tsx"),
    route("team", "routes/team.tsx"),
    route("faq", "routes/faq.tsx"),
    route("*", "routes/$.tsx"),
  ]),
] satisfies RouteConfig;
