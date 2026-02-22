import { defineStore } from 'pinia'
import state from './state'
import { isAuthenticated, getUser } from './getters'
import { login, logout } from './actions'

export const useAuthStore = defineStore('auth', {
  state,
  getters: { isAuthenticated, getUser },
  actions: {
    login,
    logout,
  },
})
