import { useRef, useEffect } from 'react'
import styled from 'styled-components'

export const Canvas = styled.canvas`
  position: absolute;
  bottom: 0;
  z-index: 2;
`

function generatePoints(nbOfPoints, w, h) {
  const pts = []
  for (let i = 0; i <= nbOfPoints; i++) {
    pts.push({
      x: i * (w / nbOfPoints),
      y: h * (i % 3 === 0 ? 0.5 : i % 3 === 1 ? 0 : 1)
    })
  }

  return pts
}

function generatePoints2(nbOfPoints, w, h, mods) {
  const pts = []
  for (let i = 0; i <= nbOfPoints; i++) {
    pts.push({
      x: i * (w / nbOfPoints),
      y: h * (i % 3 === 0 ? mods[0] : i % 3 === mods[1] ? 0 : mods[2])
    })
  }

  return pts
}

const QuadraticCurve = () => {
  const canvas = useRef(null)

  useEffect(() => {
    const { innerWidth: w, innerHeight } = window
    const h = innerHeight * 0.125

    const c1 = document.createElement('canvas')
    const c2 = canvas.current

    c2.width = w
    c2.height = h

    const points = generatePoints(15, w, h)

    const ctx1 = c1.getContext('2d')
    const ctx2 = c2.getContext('2d')

    ctx2.fillStyle = '#FFFFFF'
    ctx2.lineWidth = 8
    ctx2.strokeStyle = '#000000'

    ctx2.moveTo(points[0].x, points[0].y)

    let i
    for (i = 1; i < points.length - 2; i++) {
      var xc = (points[i].x + points[i + 1].x) / 2
      var yc = (points[i].y + points[i + 1].y) / 2
      ctx2.quadraticCurveTo(points[i].x, points[i].y, xc, yc)
    }

    ctx2.quadraticCurveTo(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y)
    ctx2.stroke()
    ctx2.lineTo(points[points.length - 1].x, h)
    ctx2.lineTo(points[0].x, h)
    ctx2.fill()
  }, [])

  return <Canvas ref={canvas} />
}

export default QuadraticCurve
