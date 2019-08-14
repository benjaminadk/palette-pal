import styled from 'styled-components'

export const PaletteSearchWrapper = styled.div`
  height: calc(100vh - ${p => p.theme.headerHeight}px);
  overflow-y: scroll;
`
