<template>
    <div class="toast">{{message}}</div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Toast',
  props: ['message']
}
export const useToastEffect = () => {
  const toastData = reactive({
    showToast: false,
    message: ''
  })
  const showToast = (message) => {
    toastData.showToast = true
    toastData.toastMessage = message
    const toastTimeout = setTimeout(() => {
      clearTimeout(toastTimeout)
      toastData.showToast = false
    }, 2000)
  }
  return { toastData, showToast }
}
</script>

<style lang='scss' scoped>
.toast{
    position: fixed;
    font-size: .16rem;
    color: #f5f5f5;
    top: 50%;
    left: 50%;
    padding: .10rem;
    background: rgba(0, 0, 0, .35);
    border-radius: .05rem;
    transform: translate(-50%, -50%);
}
</style>
