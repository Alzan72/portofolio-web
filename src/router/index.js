import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
      component: () => import('../views/Home.vue'),
      meta: { requiredAuth: true }
    },
    {
      path: '/home2',
      component: () => import('../views/Home2.vue'),
      meta: { requiredAuth: true }
    },
  ],
})

export default router
