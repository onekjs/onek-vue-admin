import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from 'unplugin-vue-components/vite'

import {
  ArcoResolver
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@views":  path.resolve(__dirname, "src/views"),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      /* options */
      include: [
        /\.[tj]sx?$/, 
        /\.vue$/, 
        /\.vue\?vue/, 
        /\.md$/,
      ],
      imports: [
        // 插件预设支持导入的api
        'vue',
        'vue-router',
        'pinia'
        // 自定义导入的api
      ],
      dts: './auto-imports.d.ts',
    }),
    Components({
      resolvers:[
        ArcoResolver()
      ]
    })
  ],
});
