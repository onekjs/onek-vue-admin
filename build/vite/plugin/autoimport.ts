import AutoImport from "unplugin-auto-import/vite";

export function configAutoImportPlugin() {
  return AutoImport({
    /* options */
    include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
    imports: [
      // 插件预设支持导入的api
      "vue",
      "vue-router",
      "pinia",
      // 自定义导入的api
    ],
    dts: "./auto-imports.d.ts",
  });
}
