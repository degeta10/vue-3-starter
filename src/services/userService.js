import { USER_V1 as v1 } from '@/api/endpoints/users'
import { apiV1 } from '@/api/client'

export const userService = {
  async getUser() {
    return await apiV1.get(v1.ME)
  },
  async updateProfile(payload) {
    return await apiV1.put(v1.PROFILE, payload)
  },
}
