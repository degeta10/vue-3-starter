import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locale: localStorage.getItem('app-lang') || 'en',
  }),
  actions: {
    setLocale(newLocale) {
      this.locale = newLocale
      localStorage.setItem('app-lang', newLocale)
    },
  },
  getters: {
    currentLocale: (state) => state.locale,
  },
})
