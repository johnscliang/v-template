<template>
    <div>
        <video id="video" width="680px" height="400px" autoplay/>
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
        video: {
          width: 400,
          height: 680
        }
      })
      const video = document.querySelector('#video')
      promise.then(function (stream) {
        // video.obj
      })
    }
  },
  onMounted() {
    this.init()
  }
})
</script>
<style scoped lang="scss">

</style>
