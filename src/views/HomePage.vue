<template>
  <div class="test-container page-container">
    index
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const count = ref<number>(0)
    const increment = () => {
      count.value += 1
    }
    return { count, increment }
  }
})
</script>

<style scoped>
</style>
