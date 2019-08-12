import { useState, useEffect, useRef } from 'react'
import { convertHEXtoHSL } from '../../lib/convertHEXtoHSL'
import { convertHSLtoRGB } from '../../lib/convertHSLtoRGB'
import Modal from './Modal'
import Hue from './Hue'
import Square from './Square'
import Svg from '../Svg'
import NumberInput from '../NumberInput'
import { ColorPickerWrapper, Main, InputsWrapper, BottomWrapper, Swatch, Button } from './styles'
import { PICKER } from '../../config'

const { squareSize, handleOffsetX, crossOffset } = PICKER

function computeHueX(hue) {
  return Math.round((squareSize / 360) * hue - handleOffsetX)
}

function computeSquareXY(s, l) {
  const t = (s * (l < 50 ? l : 100 - l)) / 100
  const s1 = Math.round((200 * t) / (l + t)) | 0
  const b1 = Math.round(t + l)
  const x = (squareSize / 100) * s1 - crossOffset
  const y = squareSize - (squareSize / 100) * b1 - crossOffset
  return [x, y]
}

const ColorPicker = ({ show, onChange, setShow }) => {
  const modal = useRef(null)

  const [firstTouch, setFirstTouch] = useState(false)
  const [hue, setHue] = useState(0)
  const [hueX, setHueX] = useState(0)
  const [square, setSquare] = useState([0, 0])
  const [squareXY, setSquareXY] = useState([0, 0])
  const [offsetTop, setOffsetTop] = useState(null)
  const [offsetLeft, setOffsetLeft] = useState(null)

  useEffect(() => {
    function onKeyDown(e) {
      if (e.keyCode === 13) {
        onOkayClick()
      }
    }

    if (show) {
      window.addEventListener('keydown', onKeyDown)
    } else {
      window.removeEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [show, onOkayClick])

  useEffect(() => {
    if (show) {
      setOffsetTop(modal.current.offsetTop)
      setOffsetLeft(modal.current.offsetLeft)
    }
  }, [show])

  useEffect(() => {
    if (firstTouch) {
      onChange(convertHSLtoRGB([hue, square[0], square[1], 1]).hex)
    }
  }, [hue, square])

  useEffect(() => {
    const [h, s, l, a] = convertHEXtoHSL('#000000')
    setHue(h)
    setHueX(computeHueX(h))
    setSquare([s, l])
    setSquareXY(computeSquareXY(s, l))
  }, [])

  function onHueChange(x) {
    setHue(x)
    setHueX(computeHueX(x))
  }

  function onSaturationChange(x) {
    setSquare([x, square[1]])
    setSquareXY(computeSquareXY(x, square[1]))
  }

  function onLightnessChange(x) {
    setSquare([square[0], x])
    setSquareXY(computeSquareXY(square[0], x))
  }

  function onOkayClick() {
    onChange(convertHSLtoRGB([hue, square[0], square[1], 1]).hex)
    setShow(false)
  }

  return (
    <Modal modal={modal} show={show} setShow={setShow}>
      <ColorPickerWrapper>
        <Main>
          <Square
            hue={hue}
            squareXY={squareXY}
            setSquare={setSquare}
            offsetTop={offsetTop}
            offsetLeft={offsetLeft}
            setSquareXY={setSquareXY}
            setFirstTouch={setFirstTouch}
          />
          <Hue
            hueX={hueX}
            offsetLeft={offsetLeft}
            setHueX={setHueX}
            setHue={setHue}
            setFirstTouch={setFirstTouch}
          />
          <InputsWrapper>
            <NumberInput
              label='H'
              value={hue}
              min={0}
              max={360}
              fallback={180}
              setter={onHueChange}
            />
            <NumberInput
              label='S'
              value={square[0]}
              min={0}
              max={100}
              fallback={100}
              setter={onSaturationChange}
            />
            <NumberInput
              label='L'
              value={square[1]}
              min={0}
              max={100}
              fallback={50}
              setter={onLightnessChange}
            />
          </InputsWrapper>
          <BottomWrapper>
            <Swatch color={convertHSLtoRGB([hue, square[0], square[1], 1]).hex} />
            <Button onClick={onOkayClick}>
              <Svg name='check' />
            </Button>
          </BottomWrapper>
        </Main>
      </ColorPickerWrapper>
    </Modal>
  )
}

export default React.memo(ColorPicker)
