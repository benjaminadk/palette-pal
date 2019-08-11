import { PaletteContext } from '../components/Layout'
import Palette from '../components/Palette'
import styled from 'styled-components'

export const PalettesWrapper = styled.div`
  max-width: ${p => p.theme.maxWidth}px;
  margin: 0 auto;
`

export const PalettesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  align-items: center;
  justify-items: center;
  margin-top: 20px;
`

const Palettes = ({ pathname }) => {
  return (
    <PaletteContext.Consumer>
      {({ palettes }) => (
        <PalettesWrapper>
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
