import { createRouter, createWebHistory } from 'vue-router'
import { pinia } from '@/main'
import { useAuthStore } from '@/stores/auth'

const Login = () => import('@/views/Auth/LoginPage.vue')
const Home = () => import('@/views/HomePage.vue')

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach((to) => {
  const authStore = useAuthStore(pinia)
  const isAuthenticated = authStore.isAuthenticated

  if (to.meta.requiresAuth && !isAuthenticated) {
    return '/login'
  }

  if (to.path === '/login' && isAuthenticated) {
    return '/home'
  }
})

export default router
