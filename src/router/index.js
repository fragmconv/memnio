import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Articoli from "../views/Articoli.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/articoli",
    name: "Articoli",
    component: Articoli,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;