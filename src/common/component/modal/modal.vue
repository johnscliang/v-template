<template>
  <div class="modal_wrap">
    <div class="modal_main">
      <div class="modal_title">
        {{ title || '提示' }}
      </div>
      <div class="modal_content">
        {{ content }}
      </div>
      <div class="bt_group">
        <div v-if="showCancel" class="btn cancel" @click="clickCancel()">
          {{ cancelText || '取消' }}
        </div>
        <div v-if="showCancel" class="btn confirm_hascancel" @click="clickConfirm()">
          {{ confirmText || '确认' }}
        </div>
        <div v-if="!showCancel" class="btn confirm" @click="clickConfirm()">
          {{ confirmText || '确认' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, render } from 'vue'
import { Popup } from 'vant'

const props = defineProps({
  title: String,
  content: String,
  showCancel: {
    type: Boolean,
    default: true
  },
  cancelText: String,
  confirmText: String,
  confirm: Function,
  cancel: Function,
  div: HTMLDivElement
})

let show = ref(true)

const clickConfirm = () => {
  props.confirm()
  render(null, props.div)
}

const clickCancel = () => {
  props.cancel()
  render(null, props.div)
}

</script>

<style scoped lang="scss">
.modal_wrap {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #555456b5;
}

.modal_main {
  width: 300px;
  background: white;
  border-radius: 12px;

  .modal_title {
    text-align: center;
    font-size: 1em;
    line-height: 3em;
    font-weight: bold;
    margin-top: 1em;
  }

  .modal_content {
    text-align: center;
    font-size: 1.1em;
    color: #7f7f7f;
  }

  .bt_group {
    margin-top: 25px;
    border-top: 1px solid #f0f0f0;
    display: flex;

    .btn {
      width: 100%;
      text-align: center;
      height: 3em;
      line-height: 3em;
      font-weight: bold;

      &:active {
        background: #ececec;
      }
    }

    .cancel {
      border-right: 1px solid #f0f0f0;
      border-bottom-left-radius: 12px;
    }

    .confirm {
      color: #586c94;
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
    }

    .confirm_hascancel {
      color: #586c94;
      border-bottom-right-radius: 12px;
    }
  }
}

</style>
