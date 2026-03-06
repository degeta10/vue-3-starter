import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import es from '@/locales/es.json'

export function createAppI18n(appStore) {
  return createI18n({
    legacy: false,
    locale: appStore.getLocale,
    fallbackLocale: 'en',
    messages: {
      en,
      es,
    },
  })
}
