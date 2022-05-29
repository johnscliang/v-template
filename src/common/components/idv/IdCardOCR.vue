<template>
    <div>
        <button @click="init()">开始</button>
        <video id="video" autoplay/>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IdCardOCR',
  setup() {
    const count = ref<number>(0)
    const increment = () => {
      count.value += 1
    }
    return { count, increment }
  },
  methods: {
    init() {
      const promise = navigator.mediaDevices.getUserMedia({
        video: {}
      })
      console.log('promise')
      const video: any = document.querySelector('#video')
      promise.then(function (stream) {
        video.srcObject = stream
        video.play()
      })
    }
  }
})
</script>
<style scoped lang="scss">
#video {
  width: 100%;
  height: 500px;
}
</style>
