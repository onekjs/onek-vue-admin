import VueRouter from "unplugin-vue-router/vite";

export function configAutoRouterPlugin() {
  return VueRouter({
    routesFolder: "src/views",
    extensions: [".vue"],
  });
}
