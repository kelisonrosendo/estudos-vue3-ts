import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/characters'
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('@/views/Characters.vue')
    }
  ]
})

export default router
