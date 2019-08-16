import styled from 'styled-components'
import Media from '../Media'

export const PaletteListWrapper = styled.div`
  max-width: ${p => p.theme.maxWidth}px;
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  align-items: center;
  justify-items: center;
  padding-bottom: 40px;
  ${Media.phone`
    grid-template-columns: 1fr; 
  `}
`

export const AutoReturn = styled.div.attrs(p => ({
  style: {
    display: p.show ? 'grid' : 'none'
  }
}))`
  position: absolute;
  bottom: 10px;
  right: calc(50% - 20px);
  width: 40px;
  height: 40px;
  align-items: center;
  justify-items: center;
  background: ${p => p.theme.primary};
  color: ${p => p.theme.white};
  border-radius: 50%;
  font-size: 20px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3), -1px 0 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  user-select: none;
`
