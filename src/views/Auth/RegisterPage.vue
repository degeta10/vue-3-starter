<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">{{ $t('auth.registerTitle') }}</h2>
            <div v-if="registerApiErrors?.errors?.length === 0" class="mb-4 p-3 bg-red-100 text-red-700 rounded">
                {{ registerApiErrors.message }}
            </div>
            <form @submit.prevent="handleRegister">
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2" for="name">{{ $t('auth.name') }}</label>
                    <input v-model="name" class="w-full px-3 py-2 border rounded" type="text" id="name" />
                    <div class="text-red-500 text-sm mt-1" v-if="registerApiErrors?.errors?.name">
                        {{ registerApiErrors.errors.name[0] }}
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2" for="email">{{ $t('auth.email') }}</label>
                    <input v-model="email" class="w-full px-3 py-2 border rounded" type="email" id="email" />
                    <div class="text-red-500 text-sm mt-1" v-if="registerApiErrors?.errors?.email">
                        {{ registerApiErrors.errors.email[0] }}
                    </div>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 mb-2" for="password">{{ $t('auth.password') }}</label>
                    <input v-model="password" class="w-full px-3 py-2 border rounded" type="password" id="password"
                        autocomplete />
                    <div class="text-red-500 text-sm mt-1" v-if="registerApiErrors?.errors?.password">
                        {{ registerApiErrors.errors.password[0] }}
                    </div>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 mb-2" for="password_confirmation">{{
                        $t('auth.passwordConfirmation') }}</label>
                    <input v-model="passwordConfirmation" class="w-full px-3 py-2 border rounded" type="password"
                        id="password_confirmation" autocomplete />
                </div>
                <button class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                    type="submit">{{ $t('auth.registerButton') }}</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const email = ref('');
const name = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const registerApiErrors = ref(null);

const router = useRouter();
const authStore = useAuthStore();

const handleRegister = async () => {
    try {
        const res = await authStore.register(
            {
                name: name.value,
                email: email.value,
                password: password.value,
                password_confirmation: passwordConfirmation.value
            });
        if (res) router.push('/login');
    } catch (err) {
        registerApiErrors.value = err.response?.data || { message: t('auth.registerFailed') }
    }
}
</script>