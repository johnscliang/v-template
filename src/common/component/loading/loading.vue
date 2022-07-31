<template>
  <van-overlay :show="show">
    <div class="loading_wrap">
      <van-loading size="36px" color="#1989fa"/>
    </div>
  </van-overlay>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Overlay, Loading } from 'vant'

const show = ref(true)

</script>

<style scoped lang="scss">
  .loading_wrap {
    position: absolute;
    width: 100%;
    text-align: center;
    top: calc(50% - 36px);
  }
</style>

<style lang="scss">
  :root {
    --van-overlay-background-color: #ffffff00;
  }
</style>
