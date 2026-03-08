<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">{{ $t('profile.title') }}</h2>
      <div
        v-if="profileApiErrors?.errors?.length === 0"
        class="mb-4 p-3 bg-red-100 text-red-700 rounded"
      >
        {{ profileApiErrors.message }}
      </div>
      <div
        v-if="profileApiSuccess?.message === $t('profile.updateSuccess')"
        class="mb-4 p-3 bg-green-100 text-green-700 rounded"
      >
        {{ profileApiSuccess.message }}
      </div>
      <form @submit.prevent="updateMe">
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="email">{{ $t('profile.email') }}</label>
          <input
            v-model="email"
            class="w-full px-3 py-2 border rounded"
            type="email"
            id="email"
            disabled
          />
          <p v-if="profileApiErrors?.email" class="text-red-500 text-sm mt-1">
            {{ profileApiErrors.email }}
          </p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="username">{{ $t('profile.name') }}</label>
          <input
            v-model="username"
            class="w-full px-3 py-2 border rounded"
            type="text"
            id="username"
          />
          <p v-if="profileApiErrors?.name" class="text-red-500 text-sm mt-1">
            {{ profileApiErrors.name }}
          </p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 mb-2" for="password">{{
            $t('profile.password')
          }}</label>
          <input
            v-model="password"
            class="w-full px-3 py-2 border rounded"
            type="password"
            id="password"
            autocomplete
          />
          <div class="text-red-500 text-sm mt-1" v-if="profileApiErrors?.errors?.password">
            {{ profileApiErrors.errors.password[0] }}
          </div>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 mb-2" for="password_confirmation">{{
            $t('profile.passwordConfirmation')
          }}</label>
          <input
            v-model="passwordConfirmation"
            class="w-full px-3 py-2 border rounded"
            type="password"
            id="password_confirmation"
            autocomplete
          />
        </div>
        <button
          class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
          type="submit"
        >
          {{ $t('profile.updateButton') }}
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const authStore = useAuthStore()
const currentUser = authStore.getMe
const username = ref(currentUser.name)
const email = ref(currentUser.email)
const password = ref('')
const passwordConfirmation = ref('')
const profileApiErrors = ref(null)
const profileApiSuccess = ref(null)

const updateMe = async () => {
  try {
    profileApiErrors.value = null
    await authStore.updateMe({
      name: username.value,
      email: email.value,
      ...(password.value
        ? { password: password.value, password_confirmation: passwordConfirmation.value }
        : {}),
    })
    profileApiSuccess.value = { message: t('profile.updateSuccess') }
  } catch (error) {
    profileApiErrors.value = error.response?.data || { message: t('profile.updateFailed') }
  }
}

watch(profileApiSuccess, (newVal) => {
  if (newVal?.message === t('profile.updateSuccess')) {
    setTimeout(() => {
      profileApiSuccess.value = null
    }, 2000)
  }
})

watch(profileApiSuccess, (newVal, oldVal) => {
  if (oldVal?.message === t('profile.updateSuccess') && newVal === null) {
    clearTimeout(profileApiSuccess.value)
  }
})
</script>
