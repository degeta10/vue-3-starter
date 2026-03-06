import axios from 'axios'
import { API_CONFIG } from './config'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'

const setupInterceptors = (instance) => {
  instance.interceptors.response.use(
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
  return instance
}

export const baseApi = setupInterceptors(
  axios.create({
    baseURL: API_CONFIG.BASE_URL,
    withCredentials: true,
  }),
)

export const apiV1 = setupInterceptors(
  axios.create({
    baseURL: API_CONFIG.API_V1_URL,
    withCredentials: true,
    withXSRFToken: true,
  }),
)

// ENABLE V2 APIs
// export const apiV2 = setupInterceptors(
//   axios.create({
//     baseURL: API_CONFIG.API_V2_URL,
//     withCredentials: true,
//     withXSRFToken: true,
//   }),
// )
