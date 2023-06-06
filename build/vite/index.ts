import type { Plugin } from "vite";
import { configAutoImportPlugin } from './plugin/autoimport';
import { configComponentsPlugin } from './plugin/components';
import { configPagesPlugin } from './plugin/pages';
import vue from "@vitejs/plugin-vue";


export function createVitePlugins(isBuild: boolean, env) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
  ];
  // 自动导入
  vitePlugins.push(configAutoImportPlugin());
  // vue组件导入
  vitePlugins.push(configComponentsPlugin());
  // 路由页面导入
  vitePlugins.push(configPagesPlugin());

  return vitePlugins;
}
