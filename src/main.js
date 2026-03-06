import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './main.css'
import App from './App.vue'
import router from './router'
import { createAppI18n } from './i18n'
import { useAuthStore } from './stores/auth'
import { useAppStore } from './stores/app'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

const authStore = useAuthStore()
await authStore.initializeApp()

const appStore = useAppStore()
const i18n = createAppI18n(appStore)

app.use(router)
app.use(i18n)
app.mount('#app')

export { pinia }
