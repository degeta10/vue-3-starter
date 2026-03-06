import { apiV1 } from '@/api/client'
import { USER_ENDPOINTS as v1 } from '@/api/endpoints/v1/users'

export const userService = {
  async getUser() {
    return await apiV1.get(v1.ME)
  },
  async updateProfile(payload) {
    return await apiV1.put(v1.PROFILE, payload)
  },
}
