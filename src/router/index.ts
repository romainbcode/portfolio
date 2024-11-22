import Homepage from "@/pages/Homepage.vue";
import ProjectDetail from "@/pages/ProjectDetail.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
  },
  {
    path: "/project/:id",
    name: "ProjectDetail",
    component: ProjectDetail,
  },
];

const router = createRouter({
  history: createWebHistory('/portfolio/'),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
