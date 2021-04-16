import p5 from 'p5'
import ZodiacSign from './components/ZodiacSign'

export type SketchProps = {
  onComplete: () => void
}

const sketch = (p: p5) => {
  let count: number
  let delay: number
  let flag: boolean
  let z: ZodiacSign

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.frameRate(30)
    delay = 30
    initializeBackground()
  }
  p.draw = () => {
    count++
    p.background(5)
    if (count < delay) return
    if (count === delay+30) z.toggleMove()

    z.update()
    z.display()
  }
  p.mousePressed = () => {
    z.flash()
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    initializeBackground()
  }

  function initializeBackground() {
    z = new ZodiacSign(p, 0, 0, p.width, p.height)
    flag = false
    count = 0
  }
}

export default sketch