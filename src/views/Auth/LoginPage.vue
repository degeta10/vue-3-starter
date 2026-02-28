<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">{{ $t('auth.loginTitle') }}</h2>
            <div v-if="loginApiErrors?.errors?.length === 0" class="mb-4 p-3 bg-red-100 text-red-700 rounded">
                {{ loginApiErrors.message }}
            </div>
            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2" for="email">{{ $t('auth.email') }}</label>
                    <input v-model="email" class="w-full px-3 py-2 border rounded" type="email" id="email" />
                    <div class="text-red-500 text-sm mt-1" v-if="loginApiErrors?.errors?.email">
                        {{ loginApiErrors.errors.email[0] }}
                    </div>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 mb-2" for="password">{{ $t('auth.password') }}</label>
                    <input v-model="password" class="w-full px-3 py-2 border rounded" type="password" id="password"
                        autocomplete />
                    <div class="text-red-500 text-sm mt-1" v-if="loginApiErrors?.errors?.password">
                        {{ loginApiErrors.errors.password[0] }}
                    </div>
                </div>
                <button class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                    type="submit">
                    {{ $t('auth.loginButton') }}
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const email = ref('')
const password = ref('')
const loginApiErrors = ref('')

const router = useRouter()
const authStore = useAuthStore()

const handleLogin = async () => {
    loginApiErrors.value = ''
    try {
        const res = await authStore.login({
            email: email.value,
            password: password.value,
        })
        if (res) {
            router.push('/home')
        } else {
            loginApiErrors.value = { message: t('auth.invalidCredentials') }
        }
    } catch (err) {
        loginApiErrors.value = err.response?.data || { message: t('auth.loginFailed') }
    }
}
</script>