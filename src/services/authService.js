import { api, baseApi } from '@/api/client'
import { CSRF_COOKIE, LOGIN, LOGOUT, REGISTER } from '@/api/endpoints/auth'

export const authService = {
  async login(payload) {
    await baseApi.get(CSRF_COOKIE)
    return api.post(LOGIN, payload)
  },

  async logout() {
    return api.post(LOGOUT)
  },

  async register(payload) {
    return api.post(REGISTER, payload)
  },
}
