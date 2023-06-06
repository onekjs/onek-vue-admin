import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import generatedRoutes from '~pages'
const routes: Array<RouteRecordRaw> = generatedRoutes


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes
});

export default router;
