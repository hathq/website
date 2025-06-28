import { Application, BitmapText, Container, TextStyle, Ticker, v8_0_0, type Renderer, type TickerCallback } from "pixi.js"

const CHARACTERS = 'アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const FONT_SIZE = 20

export const useMatrixRain = () => {
  const drops: BitmapText[] = []
  const app: Application<Renderer> = new Application()
  const movementTicker = new Ticker()
  const switchTicker = new Ticker()

  const setup = (window: Window) => {
    const columns = Math.floor(window.innerWidth / FONT_SIZE)

    for (let i = 0; i < columns; i++) {
      const style = new TextStyle({
        fontFamily: 'monospace',
        fontSize: FONT_SIZE,
        fill: 0x00ff00,
        dropShadow: true
      })

      const text = new BitmapText({
        text: getRandomChar(),
        style,
      })

      text.x = i * FONT_SIZE
      text.y = Math.random() * window.innerHeight

      app.stage.addChild(text)
      drops.push(text)
    }
  }

  let moveElapsed = 0
  const targetMoveIntervalMs = 300
  const moveText: TickerCallback<any> = (ticker) => {
    const height = app.renderer.height
    moveElapsed += ticker.deltaMS * (1000 / 60)
    if (moveElapsed >= targetMoveIntervalMs) {
      moveElapsed = 0
      for (const text of drops) {
        text.y += 2 + (Math.random() * 10)
        if (text.y > height) {
          text.y = 0 + (Math.random() * 10)
        }
      }      
    }
  }
  let refreshElapsed = 0
  const targetRefreshIntervalMs = 850
  const refreshText: TickerCallback<any> = (ticker) => {
    refreshElapsed += ticker.deltaMS * (1000 / 60)
    if (refreshElapsed >= targetRefreshIntervalMs) {
      refreshElapsed = 0
      for (const text of drops) {
        text.text = getRandomChar()
      }
    }
  }

  const start = () => {
    if (!movementTicker.started) {
      movementTicker.add(moveText)
      movementTicker.start()
    }
    if (!switchTicker.started) {
      switchTicker.add(refreshText)
      switchTicker.start()
    }
  }

  const stop = () => {
    if (movementTicker.started) movementTicker.stop()
    if (switchTicker.started) switchTicker.stop()
  }

  const getRandomChar = (): string =>
    CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))

  return {
    app,
    setup,
    start,
    stop,
  }
}
