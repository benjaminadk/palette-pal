import styled from 'styled-components'
import { PICKER } from '../../config'

const { barWidth, squareSize, handleWidth, handleHeight, handleOffsetY } = PICKER

export const Container = styled.div`
  width: 220px;
  height: 300px;
  display: grid;
  border-radius: 2px;
  background: ${p => p.theme.white};
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
`

export const Main = styled.div`
  display: grid;
  grid-template-rows: 220px 30px 1fr;
  align-items: center;
  .square {
    display: grid;
    justify-items: center;
  }
  .hue {
    display: grid;
    justify-items: center;
  }
  .controls {
    display: grid;
    grid-template-columns: 75% 25%;
    align-items: center;
    .inputs {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      justify-items: center;
    }
  }
`

export const MiniButton = styled.div`
  justify-self: flex-end;
  background: #fff;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    background: ${p => p.theme.grey[1]};
  }
  &:hover svg {
    fill: ${p => p.theme.grey[10]};
  }
  svg {
    width: 15px;
    height: 15px;
    fill: ${p => p.theme.grey[5]};
  }
`

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
