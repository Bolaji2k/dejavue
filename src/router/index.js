import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import API from '../views/API.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/api',
      name: 'api',
      component: API
    }
  ]
})

export default router
