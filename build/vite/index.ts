import type { Plugin } from "vite";
import { configAutoImportPlugin } from './plugin/autoimport';
import { configComponentsPlugin } from './plugin/components';
import { configAutoRouterPlugin } from './plugin/autorouter';
import { configUnocssPlugin } from './plugin/unocss';
import vue from "@vitejs/plugin-vue";


export function createVitePlugins() {
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
  ];
  // 自动导入
  vitePlugins.push(configAutoImportPlugin());
  // vue组件导入
  vitePlugins.push(configComponentsPlugin());
  // 文件路由
  vitePlugins.push(configAutoRouterPlugin());
  // unocss
  vitePlugins.push(configUnocssPlugin());

  return vitePlugins;
}
