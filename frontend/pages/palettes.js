import { PaletteContext } from '../components/Layout'
import Palette from '../components/Palette'
import styled from 'styled-components'

export const PalettesWrapper = styled.div`
  height: calc(100vh - ${p => p.theme.headerHeight}px);
  overflow: auto;
`

export const PalettesGrid = styled.div`
  max-width: ${p => p.theme.maxWidth}px;
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  align-items: center;
  justify-items: center;
  padding-bottom: 40px;
`

const Palettes = ({ pathname }) => {
  function onScroll(e, fetchMorePalettes) {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
    if (scrollTop + clientHeight >= scrollHeight) {
      fetchMorePalettes()
    }
  }

  return (
    <PaletteContext.Consumer>
      {({ loading, palettes, fetchMorePalettes }) => (
        <PalettesWrapper onScroll={e => onScroll(e, fetchMorePalettes)}>
          <PalettesGrid>
            {palettes.map(palette => (
              <Palette key={palette.id} palette={palette} pathname={pathname} />
            ))}
          </PalettesGrid>
        </PalettesWrapper>
      )}
    </PaletteContext.Consumer>
  )
}

export default Palettes
