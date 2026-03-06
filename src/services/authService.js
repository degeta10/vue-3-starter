import { AUTH_V1 as v1 } from '@/api/endpoints/auth'
import { baseApi, apiV1 } from '@/api/client'

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
