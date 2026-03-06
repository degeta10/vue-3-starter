import { apiV1, baseApi } from '@/api/client'
import { AUTH_ENDPOINTS as v1 } from '@/api/endpoints/v1/auth'

export const authService = {
  async login(payload) {
    await baseApi.get(v1.CSRF_COOKIE)
    return await apiV1.post(v1.LOGIN, payload)
  },

  async logout() {
    return await apiV1.post(v1.LOGOUT)
  },

  async register(payload) {
    return await apiV1.post(v1.REGISTER, payload)
  },
}
