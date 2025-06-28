import { PIXI } from 'pixi.js'

declare module '#app' {
  interface NuxtApp {
    $pixi: typeof PIXI
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $pixi: typeof PIXI
  }
}
