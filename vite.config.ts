// import { loadEnv } from "vite";
import { createVitePlugins } from "./build";
import path from "path";

// https://vitejs.dev/config/
export default () => {
  // const isBuild = command === "build";
  // const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@views": path.resolve(__dirname, "src/views"),
      },
    },
    plugins: [createVitePlugins()],
  };
};
