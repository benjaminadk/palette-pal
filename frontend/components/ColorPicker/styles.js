import styled from 'styled-components'
import { PICKER } from '../../config'

const { height, squareSize } = PICKER

export const ColorPickerWrapper = styled.div`
  width: ${squareSize + 20}px;
  height: ${height}px;
  display: grid;
  border-radius: 2px;
  background: ${p => p.theme.white};
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
`

export const Main = styled.div`
  display: grid;
  grid-template-rows: 220px 20px 40px 1fr;
  align-items: center;
  justify-items: center;
`

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding-left: 20px;
  padding-right: 20px;
`

export const BottomWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  padding-top: 0;
`

export const Swatch = styled.div.attrs(p => ({
  style: {
    background: p.color
  }
}))`
  width: 90%;
  height: 100%;
  border-radius: 2px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3);
`

export const Button = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  background: ${p => p.theme.primary};
  border-radius: 2px;
  padding: 4px 8px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: ${p => p.theme.white};
  }
`
