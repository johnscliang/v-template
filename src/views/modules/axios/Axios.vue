<template>
  <div class="page-container">
    <div @click="test()">target:</div>
    <div>axios</div>
    <div>age</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import clientAPI from '@/api/clientAPI'
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
  },
  methods: {
    test() {
      clientAPI.login({}).catch((err) => {
        // console.log(err)
      })
    }
  }
})
</script>

<style scoped lang="scss">

</style>
