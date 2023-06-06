import AutoImport from "unplugin-auto-import/vite";
import { VueRouterAutoImports } from 'unplugin-vue-router';

export function configAutoImportPlugin() {
  return AutoImport({
    /* options */
    include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
    imports: [
      // 插件预设支持导入的api
      "vue",
      VueRouterAutoImports,
      "pinia",
      // 自定义导入的api
    ],
    dts: "./auto-imports.d.ts",
  });
}
