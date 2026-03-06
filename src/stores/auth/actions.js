import { api, baseApi } from '@/api'
import { useAppStore } from '../app'

export async function login(payload) {
  await baseApi.get('/sanctum/csrf-cookie')
  const res = await api.post('/login', payload)
  if (res.data.success) {
    this.user = res.data.data
    return true
  }
  return false
}

export async function logout() {
  const res = await api.post('/logout')
  if (res.data.success) {
    this.clearUser()
    return true
  }
  return false
}

export function clearUser() {
  this.user = null
}

export async function initializeApp() {
  const res = await api.get('/me')
  if (res.data.success) {
    this.user = res.data.data
    const appStore = useAppStore()
    appStore.setLocale(localStorage.getItem('lang'))
  }
}

export async function register(payload) {
  const res = await api.post('/register', payload)
  return res.data.success
}
