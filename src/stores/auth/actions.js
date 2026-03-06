import { useAppStore } from '../app'
import { useUserStore } from '../user'
import { authService } from '@/services/authService'

export async function login(payload) {
  const res = await authService.login(payload)

  if (res.data.success) {
    const userStore = useUserStore()
    userStore.setUser(res.data.data)
    return true
  }

  return false
}

export async function logout() {
  const res = await authService.logout()
  if (res.data.success) {
    const userStore = useUserStore()
    userStore.clearUser()
    return true
  }
  return false
}

export async function initializeApp() {
  const res = await authService.me()
  if (res.data.success) {
    const userStore = useUserStore()
    userStore.setUser(res.data.data)
    const appStore = useAppStore()
    appStore.setLocale(localStorage.getItem('lang'))
  } else {
    this.clearUser()
  }
}

export async function register(payload) {
  const res = await authService.register(payload)
  return res.data.success
}
