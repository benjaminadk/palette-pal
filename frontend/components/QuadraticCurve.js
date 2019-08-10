import { useRef, useEffect } from 'react'
import styled from 'styled-components'

export const Canvas = styled.canvas`
  position: absolute;
  bottom: 0;
  z-index: 5;
`

function generatePoints(nbOfPoints, w, h) {
  const pts = []
  for (let i = 0; i <= nbOfPoints; i++) {
    pts.push({
      x: i * (w / nbOfPoints),
      y: Math.random() * h
    })
  }

  return pts
}

const QuadraticCurve = () => {
  const canvas = useRef(null)

  useEffect(() => {
    const { innerWidth: w, innerHeight } = window
    const h = innerHeight * 0.125
    const c = canvas.current
    c.width = w
    c.height = h

    const points = generatePoints(15, w, h)

    const ctx = c.getContext('2d')
    ctx.fillStyle = '#FFF'
    ctx.strokeStyle = '#FFF'

    ctx.moveTo(points[0].x, points[0].y)

    let i
    for (i = 1; i < points.length - 2; i++) {
      var xc = (points[i].x + points[i + 1].x) / 2
      var yc = (points[i].y + points[i + 1].y) / 2
      ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc)
    }

    ctx.quadraticCurveTo(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y)
    ctx.stroke()
    ctx.lineTo(points[points.length - 1].x, h) // bottom-right
    ctx.lineTo(points[0].x, h) // bottom-left
    ctx.fill()
  }, [])

  return <Canvas ref={canvas} />
}

export default QuadraticCurve
