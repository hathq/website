<script setup lang="ts">
import { useMatrixRain } from '~/composables/pixi/useMatrixRain'

const appElm = ref<HTMLElement>()
const { app, setup, start, stop } = useMatrixRain()

onMounted(async () => {
  await app.init({
    resizeTo: window,
  })
  setup(window)
  appElm.value?.appendChild(app.canvas)
  start()
})

onUnmounted(() => {
  stop()
  app.destroy(true, { children: true })
})
</script>
<template>
  <div
    ref="appElm"
  />
</template>

<style scoped>

</style>