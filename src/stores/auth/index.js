import { defineStore } from 'pinia'
import state from './state'
import { login, register, logout, initializeApp, updateMe } from './actions'
import { getMe, isAuthenticated } from './getters'

export const useAuthStore = defineStore('auth', {
  state,
  getters: {
    getMe,
    isAuthenticated,
  },
  actions: {
    login,
    register,
    logout,
    initializeApp,
    updateMe,
  },
})
