import { createRouter, createWebHistory } from 'vue-router'
import { pinia } from '@/main'
import { useUserStore } from '@/stores/user'

const Login = () => import('@/views/Auth/LoginPage.vue')
const Register = () => import('@/views/Auth/RegisterPage.vue')
const Home = () => import('@/views/HomePage.vue')
const ProfilePage = () => import('@/views/Auth/ProfilePage.vue')

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/profile',
    component: ProfilePage,
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
  const userStore = useUserStore(pinia)
  const isAuthenticated = userStore.isAuthenticated

  if (to.meta.requiresAuth && !isAuthenticated) {
    return '/login'
  }

  if (to.path === '/login' && isAuthenticated) {
    return '/home'
  }
})

export default router
