import { useState } from 'react'
import { copyToClipboard } from '../../../lib/copyToClipboard'
import { getContrastText } from '../../../lib/getContrastText'
import { getColorHeight } from '../../../lib/getColorHeight'
import { ColorWrapper, ColorCode, ColorCopied, ColorName } from './styles'

const Color = ({ index, size, color, name, totalColors, onClick }) => {
  const [show, setShow] = useState(false)

  function onCopy(e) {
    if (show) return
    e.stopPropagation()
    copyToClipboard(color)
    setShow(true)
    setTimeout(() => setShow(false), 4000)
  }

  const height = getColorHeight(totalColors, index)
  const textColor = getContrastText(color)

  return (
    <ColorWrapper
      size={size}
      height={height}
      position={index === 0 ? 'first' : index === totalColors - 1 ? 'last' : 'middle'}
      textColor={textColor}
      background={color}
      onClick={onClick}
    >
      <ColorCode size={size} textColor={textColor} onClick={e => onCopy(e, color)}>
        {color.toUpperCase()}
      </ColorCode>
      <ColorName show={!show} size={size} textColor={textColor}>
        {name}
      </ColorName>
      <ColorCopied show={show} size={size} textColor={textColor}>
        COPIED
      </ColorCopied>
    </ColorWrapper>
  )
}

export default Color
