import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use((config) => {
  const access_token = localStorage.getItem('access_token')
  if (access_token) config.headers.Authorization = `Bearer ${access_token}`
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && window.location.pathname !== '/login') {
      const authStore = useAuthStore()
      authStore.logout()
      window.location.href = '/'
    }
    return Promise.reject(error)
  },
)

export default api
