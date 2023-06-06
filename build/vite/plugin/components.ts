import Components from "unplugin-vue-components/vite";

import { ArcoResolver } from "unplugin-vue-components/resolvers";

export function configComponentsPlugin() {
  return Components({
    resolvers: [ArcoResolver()],
  });
}
