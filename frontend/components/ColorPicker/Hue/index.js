import { useRef, useEffect } from 'react'
import throttle from 'lodash.throttle'
import Svg from '../../Svg'
import { Bar, Canvas, Handle } from '../styles'
import paint from './paint'
import { PICKER } from '../../../config'

const { squareSize, handleOffsetX, delay } = PICKER

const Hue = ({ hueX, offsetLeft, setHueX, setHue, setFirstTouch }) => {
  const bar = useRef(null)
  const canvas = useRef(null)

  useEffect(() => {
    paint(canvas)
  }, [])

  useEffect(() => {
    function computePosition(e) {
      return Math.max(
        handleOffsetX * -1,
        Math.min(e.clientX - offsetLeft + 90, squareSize - handleOffsetX)
      )
    }

    function computeHue(y) {
      return Math.round((y + handleOffsetX) * (360 / squareSize))
    }

    const onMouseMove = throttle(e => {
      const x = computePosition(e)
      const hue = computeHue(x)

      setHueX(x)
      setHue(hue)
    }, delay)

    function onMouseUp(e) {
      const x = computePosition(e)
      const hue = computeHue(x)
      setHueX(x)
      setHue(hue)
      document.body.removeEventListener('mousemove', onMouseMove)
      document.body.removeEventListener('mouseup', onMouseUp)
    }

    function onMouseDown(e) {
      setFirstTouch(true)
      document.body.addEventListener('mousemove', onMouseMove)
      document.body.addEventListener('mouseup', onMouseUp)
    }

    bar.current.addEventListener('mousedown', onMouseDown)

    return () => {
      bar.current.removeEventListener('mousedown', onMouseDown)
    }
  }, [offsetLeft])

  return (
    <Bar ref={bar}>
      <Handle left={hueX}>
        <Svg name='handle' />
      </Handle>
      <Canvas ref={canvas} />
    </Bar>
  )
}

export default React.memo(Hue)
