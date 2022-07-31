<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.getElementById('init_loading').remove()
})
</script>

<template>
  <router-view />
</template>

<style>
#app {
}
</style>
