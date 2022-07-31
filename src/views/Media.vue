<template>
    <div>
        <button @click="init()">开始</button>
        <video id="video" autoplay/>
        <img id="screenshot"/>
        <button @click="screenShot()">截图</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

// https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia
export default defineComponent({
  name: 'Media',
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
        video: true
      })
      console.log('promise')
      const video: any = document.querySelector('#video')
      promise.then(function (stream) {
        video.srcObject = stream
        video.play()
      })
    },
    screenShot() {
      const video: any = document.querySelector('#video')
      const canvas = document.createElement('canvas')
      const ctx: any = canvas.getContext('2d')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      ctx.drawImage(video, 0, 0)
      //
      const base64 = canvas.toDataURL('image/png')
      console.log(base64)
      const img: any = document.querySelector('#screenshot')
      img.src = canvas.toDataURL('image/png')
    }
  }
})
</script>
<style scoped lang="scss">
#video {
  width: 100%;
}

#screenshot {
  width: 100%;
}
</style>
