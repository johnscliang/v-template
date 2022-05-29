<template>
  <div class="page-container">
    <button @click="login()">登录</button>
    <br/>
    <button @click="getClientInfo()">获取信息</button>
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
    login() {
      clientAPI.login({ username: 'john' }).then((resp) => {
        console.log(resp.data)
      }).catch((err) => {
        // console.log(err)
      })
    },
    getClientInfo() {
      clientAPI.getClientInfo({}).then(({ data }) => {
        console.log(data)
      })
    }
  }
})
</script>

<style scoped lang="scss">

</style>
