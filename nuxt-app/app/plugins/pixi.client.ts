import { defineNuxtPlugin } from '#app'
import * as PIXI from 'pixi.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('pixi', PIXI)
})
