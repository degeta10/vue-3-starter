import axios from 'axios'
import { API_CONFIG } from './config'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'

export const baseApi = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  withCredentials: true,
})

export const api = axios.create({
  baseURL: API_CONFIG.API_URL,
  withCredentials: true,
  withXSRFToken: true,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const authStore = useAuthStore()

      if (authStore.user) {
        authStore.clearUser()
        router.push('/login')
      }
    }

    return Promise.reject(error)
  },
)
