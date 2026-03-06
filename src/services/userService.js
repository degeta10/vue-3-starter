import { api } from '@/api/client'
import { ME, PROFILE } from '@/api/endpoints/users'

export const userService = {
  async getUser() {
    return api.get(ME)
  },
  async updateProfile(payload) {
    return await api.put(PROFILE, payload)
  },
}
