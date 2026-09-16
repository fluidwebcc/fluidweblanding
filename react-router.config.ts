import type { Config } from "@react-router/dev/config";
import { getPrerenderPaths } from "./src/lib/prerender-routes";

export default {
  appDirectory: "src",
  ssr: false,
  async prerender() {
    return getPrerenderPaths();
  },
} satisfies Config;
