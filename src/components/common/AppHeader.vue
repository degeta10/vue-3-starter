<template>
  <!-- Header -->
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <img :src="logo" alt="Logo" class="h-8 w-8" />
        <span class="text-xl font-bold">{{ $t('app.title') }}</span>
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <select
              @change="changeLanguage($event.target.value)"
              class="bg-gray-700 text-white p-1 rounded"
            >
              <option value="en" :selected="currentLocale === 'en'">
                {{ $t('header.english') }}
              </option>
              <option value="es" :selected="currentLocale === 'es'">
                {{ $t('header.spanish') }}
              </option>
            </select>
          </li>
          <template v-if="isAuthenticated">
            <li>
              <router-link to="/" class="hover:underline">{{ $t('header.home') }}</router-link>
            </li>
            <li class="relative" v-click-outside="() => (open = false)">
              <button class="hover:underline" @click="open = !open">
                {{ $t('header.account') }}
              </button>
              <ul
                v-if="open"
                class="absolute right-0 mt-2 w-40 bg-gray-700 text-white py-2 rounded-lg shadow-xl z-50 transition-all duration-200"
              >
                <li>
                  <router-link
                    to="/profile"
                    class="block px-4 py-2 hover:bg-gray-600"
                    @click="open = false"
                  >
                    {{ $t('header.profile') }}
                  </router-link>
                </li>
                <li>
                  <button @click="handleLogout" class="block px-4 py-2 hover:bg-gray-600">
                    {{ $t('header.logout') }}
                  </button>
                </li>
              </ul>
            </li>
          </template>
          <template v-else>
            <li>
              <router-link to="/login" class="hover:underline">{{
                $t('header.login')
              }}</router-link>
            </li>
            <li>
              <router-link to="/register" class="hover:underline">{{
                $t('header.register')
              }}</router-link>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useAppStore } from '@/stores/app'
import { useRouter } from 'vue-router'
import logo from '@/assets/logo.svg'
import { useI18n } from 'vue-i18n'

const open = ref(false)
const { locale } = useI18n()
const authStore = useAuthStore()
const appStore = useAppStore()
const router = useRouter()
const isAuthenticated = computed(() => authStore.isAuthenticated)
const currentLocale = computed(() => appStore.getLocale)

const handleLogout = async () => {
  try {
    const res = await authStore.logout()
    open.value = false
    if (res) router.push('/login')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}

const changeLanguage = (lang) => {
  locale.value = lang
  appStore.setLocale(lang)
}
</script>
