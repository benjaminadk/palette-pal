import styled from 'styled-components'
import Media from '../Media'

export const PaletteSearchWrapper = styled.div`
  max-width: ${p => p.theme.maxWidth}px;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 20px auto 0;
`

export const SearchInterface = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  background: ${p => p.theme.white};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 20px;
  input {
    margin-bottom: 0;
  }
  ${Media.phone`
    width: 90%;
    display: grid;
    grid-template-rows: 1fr 20px;
  `}
`
