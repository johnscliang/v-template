<template>
  <div class="loading_wrap">
    <van-loading size="36px" color="#1989fa"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Loading } from 'vant'

const show = ref(true)

</script>

<style scoped lang="scss">
  .loading_wrap {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0);
  }
</style>
