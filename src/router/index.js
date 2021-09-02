import { createRouter, createWebHistory } from "vue-router";

import About from "../views/About.vue";
import EventsList from "../views/EventsList.vue";
import EventDetails from "../views/EventDetails.vue";
import NewEvent from "../views/NewEvent.vue";

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
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails
  },
  {
    path: "/new-event",
    name: 'NewEvent',
    component: NewEvent
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
