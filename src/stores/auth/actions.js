import { api, baseApi } from '@/api'
import { useAppStore } from '../app'

export async function login(payload) {
  await baseApi.get('/sanctum/csrf-cookie')
  const res = await api.post('/web-login', payload)
  if (res.data.success) {
    this.user = res.data.data
    return true
  }
  return false
}

export async function logout() {
  const res = await api.post('/web-logout')
  if (res.data.success) {
    this.user = null
    return true
  }
  return false
}

export async function initializeApp() {
  try {
    const res = await api.get('/me')
    if (res.data.success) {
      this.user = res.data.data
      const appStore = useAppStore()
      appStore.setLocale(localStorage.getItem('lang'))
    }
  } catch (error) {
    this.user = null
  }
}
