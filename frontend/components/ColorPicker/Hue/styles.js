import styled from 'styled-components'
import { PICKER } from '../../../config'

const { barWidth, squareSize, handleWidth, handleHeight } = PICKER

export const Bar = styled.div`
  position: relative;
  width: ${squareSize + 'px'};
  height: ${barWidth + 'px'};
  cursor: ew-resize;
`

export const Canvas = styled.canvas.attrs(p => ({
  width: squareSize,
  height: barWidth
}))``

export const Handle = styled.div.attrs(p => ({
  style: {
    left: p.left + 'px',
    transition: p.animate ? 'top .75s ease-out' : '0s'
  }
}))`
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${handleWidth}px;
  height: ${handleHeight}px;
  pointer-events: none;
  svg {
    width: ${handleWidth}px;
    height: ${handleHeight}px;
    fill: #000;
  }
`
