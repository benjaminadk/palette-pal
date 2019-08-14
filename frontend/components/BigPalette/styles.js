import styled, { keyframes } from 'styled-components'
import { createGradient } from '../../lib/createGradient'

export const gradientShift = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const BigPaletteWrapper = styled.div.attrs(p => ({
  style: {
    background: createGradient(p.colors, 'linear', '-45deg')
  }
}))`
  width: 100%;
  height: calc(100vh - ${p => p.theme.headerHeight}px);
  overflow: auto;
  display: grid;
  align-items: center;
  justify-items: center;
  background-size: 400% 400% !important;
  animation: ${gradientShift} 15s ease infinite;
`

export const BigPaletteInner = styled.div`
  width: 600px;
  height: 90%;
  display: grid;
  grid-template-rows: 12% 73% 15%;
  background: ${p => p.theme.white};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
`

export const BigPaletteTitle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  background: ${p => p.theme.white};
  color: ${p => p.theme.grey[12]};
  font-family: ${p => p.theme.fontBold};
  font-size: 20px;
`

export const BigPaletteTags = styled.div`
  position: absolute;
  top: 40%;
  right: 10%;
  display: flex;
`

export const BigPaletteTag = styled.div`
  color: ${p => p.theme.grey[5]};
  font-family: ${p => p.theme.fontBold};
  font-size: 11px;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    color: ${p => p.theme.grey[10]};
  }
`

export const BigPaletteColors = styled.div`
  justify-self: center;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const BigPaletteBottom = styled.div`
  justify-self: center;
  width: 85%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`

export const BigPaletteDownload = styled.div`
  justify-self: center;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: ${p => p.theme.grey[5]};
  }
`

export const BigPaletteDate = styled.div`
  justify-self: flex-end;
  font-family: ${p => p.theme.fontBold};
  font-size: 11px;
  color: ${p => p.theme.grey[5]};
  padding-right: 10px;
`
