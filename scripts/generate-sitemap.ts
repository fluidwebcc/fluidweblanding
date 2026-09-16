import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { getPrerenderPaths } from "../src/lib/prerender-routes";

const siteUrl = "https://www.fluidweb.cc";
const paths = getPrerenderPaths();
const lastmod = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path === "/" ? "" : path}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(process.cwd(), "build/client/sitemap.xml"), xml);
console.log(`Generated sitemap with ${paths.length} URLs`);
