<script setup lang="ts">
import { useMatrixRain } from '~/composables/pixi/useMatrixRain'
const appElm = ref<HTMLElement>()
const { app: rain, setup, start, stop } = useMatrixRain()
onMounted(async () => {
  await rain.init({
    width: window.innerWidth,
    height: window.innerHeight-150,
    backgroundColor: '#FFFFFF',
  })
  setup(appElm.value!.clientWidth, window.innerHeight-150)
  appElm.value?.appendChild(rain.canvas)
  start()
})

onUnmounted(() => {
  stop()
  rain.destroy(true, { children: true })
})
</script>
<template>
  <div class="w-full h-full">
    <div ref="appElm" />
    <slot />
  </div>
</template>

<style scoped>

</style>