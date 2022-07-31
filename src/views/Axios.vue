<template>
  <div class="page-container">
    <div style="text-align: center; width: 100%;">
      <img src="@/assets/logo.png"/>
    </div>
    <button @click="login()">登录</button>
    <br/>
    <button @click="getClientInfo()">获取信息</button>
    <br/>
    <VanButton @click="showLoading">showLoading</VanButton>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, Ref } from 'vue'
import clientAPI from '@/api/clientAPI'
import { loading } from '@/utils/tools'

const login = () => {
  loading.show()
  clientAPI.login({ username: 'john' }).then((resp) => {
    console.log(resp.data)
    loading.hide()
  }).catch((err) => {
    // console.log(err)
  })
}

const getClientInfo = () => {
  loading.show()
  clientAPI.getClientInfo({}).then(({ data }) => {
    console.log(data)
    loading.hide()
  })
}

const showLoading = () => {
  loading.show()
  setTimeout(() => {
    loading.hide()
  }, 3000)
}

</script>

<style scoped lang="scss">

</style>
