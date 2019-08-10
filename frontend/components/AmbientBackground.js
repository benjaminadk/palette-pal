import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import SimplexNoise from '../lib/SimplexNoise'

const { PI, cos, sin, abs, random } = Math
const circleCount = 150
const circlePropCount = 8
const circlePropsLength = circleCount * circlePropCount
const baseSpeed = 0.1
const rangeSpeed = 1
const baseTTL = 50 // 150
const rangeTTL = 80 // 200
const baseRadius = 100
const rangeRadius = 200
const rangeHue = 60
const xOff = 0.0015
const yOff = 0.0015
const zOff = 0.0015
const backgroundColor = 'hsla(0, 0%, 5%, 1)'
const TAU = 2 * PI

const rand = n => n * random()

const fadeInOut = (t, m) => {
  let hm = 0.5 * m
  return abs(((t + hm) % m) - hm) / hm
}

const Canvas = styled.canvas`
  position: absolute;
`

const AmbientBackground = () => {
  const canvas = useRef(null)

  useEffect(() => {
    let circleProps
    let simplex
    let baseHue
    const offsetH = 80
    const c1 = document.createElement('canvas')
    const c2 = canvas.current
    const ctx1 = c1.getContext('2d')
    const ctx2 = c2.getContext('2d')

    resize()
    initCircles()
    draw()

    function resize() {
      const { innerWidth: w, innerHeight: h } = window
      c1.width = w
      c1.height = h - offsetH
      ctx1.drawImage(c2, 0, 0)
      c2.width = w
      c2.height = h - offsetH
      ctx2.drawImage(c1, 0, 0)
    }

    function initCircles() {
      circleProps = new Float32Array(circlePropsLength)
      simplex = new SimplexNoise()
      baseHue = 220

      for (let i = 0; i < circlePropsLength; i += circlePropCount) {
        initCircle(i)
      }
    }

    function initCircle(i) {
      let x, y, n, t, speed, vx, vy, life, ttl, radius, hue
      x = rand(c1.width)
      y = rand(c1.height)
      n = simplex.noise3D(x * xOff, y * yOff, baseHue * zOff)
      t = rand(TAU)
      speed = baseSpeed + rand(rangeSpeed)
      vx = speed * cos(t)
      vy = speed * sin(t)
      life = 0
      ttl = baseTTL + rand(rangeTTL)
      radius = baseRadius + rand(rangeRadius)
      hue = baseHue + n * rangeHue

      circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i)
    }

    function updateCircles() {
      let i
      baseHue++

      for (i = 0; i < circlePropsLength; i += circlePropCount) {
        updateCircle(i)
      }
    }

    function updateCircle(i) {
      let i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i
      let x, y, vx, vy, life, ttl, radius, hue

      x = circleProps[i]
      y = circleProps[i2]
      vx = circleProps[i3]
      vy = circleProps[i4]
      life = circleProps[i5]
      ttl = circleProps[i6]
      radius = circleProps[i7]
      hue = circleProps[i8]

      drawCircle(x, y, life, ttl, radius, hue)

      life++

      circleProps[i] = x + vx
      circleProps[i2] = y + vy
      circleProps[i5] = life

      if (checkBounds(x, y, radius) || life > ttl) initCircle(i)
    }

    function checkBounds(x, y, radius) {
      return x < -radius || x > c1.width + radius || y < -radius || y > c1.height + radius
    }

    function drawCircle(x, y, life, ttl, radius, hue) {
      ctx1.save()
      ctx1.fillStyle = `hsla(${hue}, 70%, 40%, ${fadeInOut(life, ttl)})` // 60% 30%
      ctx1.beginPath()
      ctx1.arc(x, y, radius, 0, TAU)
      ctx1.fill()
      ctx1.closePath()
      ctx1.restore()
    }

    function render() {
      ctx2.save()
      ctx2.filter = 'blur(30px)'
      ctx2.drawImage(c1, 0, 0)
      ctx2.restore()
    }

    function draw() {
      ctx1.clearRect(0, 0, c1.width, c1.height)
      ctx2.fillStyle = backgroundColor
      ctx2.fillRect(0, 0, c2.width, c2.height)
      updateCircles()
      render()
      window.requestAnimationFrame(draw)
    }
  }, [])

  return <Canvas ref={canvas} />
}

export default AmbientBackground
