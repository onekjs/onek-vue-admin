import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@views/login/index.vue";
import Home from "@views/home/index.vue";

const routes: Array<RouteRecordRaw> = [{ path: "/", component: Home }, { path: "/login", component: Login }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes,
});

export default router;
