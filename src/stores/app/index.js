import { defineStore } from 'pinia'
import state from './state'
import { isLoading, getLocale } from './getters'
import { setLoading, setLocale } from './actions'

export const useAppStore = defineStore('app', {
  state,
  getters: { isLoading, getLocale },
  actions: { setLoading, setLocale },
})
