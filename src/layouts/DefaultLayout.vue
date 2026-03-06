<template>
    <AppHeader />
    <div class="flex flex-col min-h-screen">
        <!-- Main content -->
        <main class="flex-grow container mx-auto p-4">
            <slot />
        </main>
    </div>
    <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
</script>