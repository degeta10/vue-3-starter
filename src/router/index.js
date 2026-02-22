import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('@/views/Auth/LoginPage.vue')
const Home = () => import('@/views/HomePage.vue')

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

const checkAuthenticated = () => {
  return JSON.parse(localStorage.getItem('user')) && localStorage.getItem('access_token')
    ? true
    : false
}

router.beforeEach((to) => {
  const isAuthenticated = checkAuthenticated()
  if (to.path === '/login' && isAuthenticated) return '/home'
  if (to.path !== '/login' && !isAuthenticated) return '/login'
})

export default router
