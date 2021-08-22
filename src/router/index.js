import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import Portfolio from "@/views/Portfolio.vue";
import Resume from "@/views/Resume.vue";
import AboutMe from "@/views/AboutMe.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },

  {
    path: "/aboutme",
    name: "AboutMe",
    component: AboutMe,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;