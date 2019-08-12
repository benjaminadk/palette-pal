import { useState } from 'react'
import ColorPicker from '../ColorPicker'
import { ColorSwatch } from './styles'

const colorBackgrounds = ['#F0F0F0', '#E0E0E0', '#CFCFCF', '#BFBFBF', '#B0B0B0', '#A1A1A1']

const ColorInput = ({ height, index, available, color, setColors }) => {
  const [show, setShow] = useState(false)

  function onChange(c) {
    setColors(curr => {
      let newColors = curr.slice()
      newColors[index] = c
      return newColors
    })
  }

  function onClick() {
    available && setShow(true)
  }

  return (
    <>
      <ColorSwatch
        position={index === 0 ? 'first' : index === 5 ? 'last' : 'middle'}
        height={height}
        color={color || colorBackgrounds[index]}
        onClick={onClick}
      />
      <ColorPicker show={show} onChange={onChange} setShow={setShow} />
    </>
  )
}

export default React.memo(ColorInput)
