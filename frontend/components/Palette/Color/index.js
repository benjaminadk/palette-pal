import { useState, useRef, useEffect } from 'react'
import { copyToClipboard } from '../../../lib/copyToClipboard'
import { getContrastText } from '../../../lib/getContrastText'
import { getColorHeight } from '../../../lib/getColorHeight'
import { ColorWrapper, ColorCode, ColorCopied, ColorName } from './styles'

const Color = ({ index, pathname, color, name, totalColors, onClick }) => {
  const [show, setShow] = useState(false)

  const timeout = useRef()

  useEffect(() => {
    if (show) {
      timeout.current = setTimeout(() => setShow(false), 4000)
    }

    return () => {
      clearTimeout(timeout.current)
    }
  }, [show])

  function onCopy(e) {
    if (show) return
    e.stopPropagation()
    copyToClipboard(color)
    setShow(true)
  }

  const height = getColorHeight(totalColors, index)
  const textColor = getContrastText(color)

  return (
    <ColorWrapper
      pathname={pathname}
      height={height}
      position={index === 0 ? 'first' : index === totalColors - 1 ? 'last' : 'middle'}
      textColor={textColor}
      background={color}
      onClick={onClick}
    >
      <ColorCode pathname={pathname} textColor={textColor} onClick={e => onCopy(e, color)}>
        {color.toUpperCase()}
      </ColorCode>
      <ColorName show={!show} pathname={pathname} textColor={textColor}>
        {name}
      </ColorName>
      <ColorCopied show={show} pathname={pathname} textColor={textColor}>
        COPIED
      </ColorCopied>
    </ColorWrapper>
  )
}

export default Color
