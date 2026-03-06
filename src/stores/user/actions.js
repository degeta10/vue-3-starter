import { userService } from '@/services/userService'

export function clearUser() {
  this.user = null
}

export function setUser(payload) {
  this.user = payload
}

export async function updateProfile(payload) {
  const res = await userService.updateProfile(payload)
  this.setUser(res.data.data)
  return res.data.success
}
