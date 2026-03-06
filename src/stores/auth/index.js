import { defineStore } from 'pinia'
import state from './state'
import { login, register, logout, initializeApp } from './actions'

export const useAuthStore = defineStore('auth', {
  state,
  getters: {},
  actions: {
    login,
    register,
    logout,
    initializeApp,
  },
})
