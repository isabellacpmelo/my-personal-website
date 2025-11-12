import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "~pages";

const routes = setupLayouts(generatedRoutes).map((route, index) => {
  route.meta = generatedRoutes[index].meta || {};

  return route;
});

routes.push({
  path: "/:pathMatch(.*)*",
  name: "NotFound",
  component: () => import("../pages/404.vue"),
  meta: {
    title: "404 - Página não encontrada",
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
