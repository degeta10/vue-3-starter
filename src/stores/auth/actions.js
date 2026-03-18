import { useAppStore } from '../app'
import { authService } from '@/services/authService'

export async function login(payload) {
  const res = await authService.login(payload)

  if (res.data.success) {
    this.me = res.data.data
    return true
  }

  return false
}

export async function logout() {
  const res = await authService.logout()
  if (res.data.success) {
    this.me = null
    return true
  }
  return false
}

export async function initializeApp() {
  const res = await authService.me()
  if (res.data.success) {
    this.me = res.data.data
    const appStore = useAppStore()
    appStore.setLocale(localStorage.getItem('lang'))
  } else {
    this.me = null
  }
}

export async function register(payload) {
  const res = await authService.register(payload)
  return res.data.success
}

export async function updateMe(payload) {
  const res = await authService.updateMe(payload)
  if (res.data.success) {
    this.me = res.data.data
  }
  return res.data.success
}
