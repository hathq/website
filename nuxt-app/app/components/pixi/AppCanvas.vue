<script setup lang="ts">
import { useMatrixRain } from '~/composables/pixi/useMatrixRain'
const appElm = ref<HTMLElement>()
const { app: rain, setup, start, stop } = useMatrixRain()
onMounted(async () => {
  await rain.init({
    resizeTo: window,
  })
  setup(window)
  appElm.value?.appendChild(rain.canvas)
  start()
})

onUnmounted(() => {
  stop()
  rain.destroy(true, { children: true })
})
</script>
<template>
  <div
    ref="appElm"
  >
  </div>
</template>

<style scoped>

</style>