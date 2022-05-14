<template>
  <div class="page-container">
    <div>target:</div>
    <div>axios</div>
    <div>age</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
// import axios from '../utils/axios'

export default defineComponent({
  name: 'Axios',
  setup() {
    const userInfo: Ref = ref(null)
    const loading = ref(false)

    const getUserInfo = () => {
      loading.value = true
    }

    return {
      getUserInfo
    }
  }
})
</script>

<style scoped lang="scss">

</style>
