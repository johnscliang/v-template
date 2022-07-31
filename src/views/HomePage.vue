<template>
  <div class="page-container">
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="axios" name="1">
        <router-link to="/axios">
        axios & axios-adapter
        </router-link>
      </van-collapse-item>
      <van-collapse-item title="getUserMedia" name="2">
        <router-link to="/media">
        getUserMedia test
        </router-link>
      </van-collapse-item>
      <van-collapse-item title="others" name="3">
        <router-link to="/test">
        other test
        </router-link>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('1')

</script>

<style scoped>
</style>
