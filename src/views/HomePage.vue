<template>
    <div>
        <h1 class="text-4xl font-bold mb-4">{{ $t('home.welcome') }}</h1>
        <p class="text-lg text-gray-700">{{ $t('home.protectedContent') }}</p>
        <div class="mt-6 p-4 bg-blue-100 text-blue-700 rounded" v-if="user">
            <h2 class="text-2xl font-semibold mb-2">{{ $t('home.userInfo') }}</h2>
            <p><strong>{{ $t('home.name') }}:</strong> {{ user.name }}</p>
            <p><strong>{{ $t('home.email') }}:</strong> {{ user.email }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const user = computed(() => authStore.getUser)
</script>