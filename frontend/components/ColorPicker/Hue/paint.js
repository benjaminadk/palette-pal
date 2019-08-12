import { PICKER } from '../../../config'

const { barWidth, squareSize } = PICKER

export default canvas => {
  const ctx = canvas.current.getContext('2d')
  ctx.rect(0, 0, squareSize, barWidth)

  const gradient = ctx.createLinearGradient(0, 0, squareSize, 0)
  for (let i = 0; i <= 360; i += 30) {
    gradient.addColorStop(i / 360, `hsl(${i}, 100%, 50%)`)
  }
  ctx.fillStyle = gradient
  ctx.fill()
}
