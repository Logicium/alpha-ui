import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => Contact,
    },
  ],
})

export default router
