<template>
  <component :is="layout + '-layout'" v-if="layout" />
  <RouterView v-else />
</template>

<script setup>
import {computed, ref} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();

const layout = computed(() => route.meta.layout);

</script>

<style scoped>

</style>
