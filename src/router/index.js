import { createRouter, createWebHistory } from "vue-router";
import EventsList from "../views/EventsList.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Events",
    component: EventsList,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
