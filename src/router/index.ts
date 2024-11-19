import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../pages/Homepage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
