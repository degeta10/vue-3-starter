import { defineStore } from 'pinia'
import state from './state'
import { clearUser, setUser, updateProfile } from './actions'
import { getUser, isAuthenticated } from './getters'

export const useUserStore = defineStore('user', {
  state,
  getters: { isAuthenticated, getUser },
  actions: {
    setUser,
    clearUser,
    updateProfile,
  },
})
