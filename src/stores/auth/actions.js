import { useAppStore } from '../app'
import { authService } from '@/services/authService'
import { userService } from '@/services/userService'

export async function login(payload) {
  const res = await authService.login(payload)

  if (res.data.success) {
    this.user = res.data.data
    return true
  }

  return false
}

export async function logout() {
  const res = await authService.logout()
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
  const res = await userService.getUser()
  if (res.data.success) {
    this.user = res.data.data
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

export async function updateProfile(payload) {
  const res = await userService.updateProfile(payload)
  return res.data.success
}
