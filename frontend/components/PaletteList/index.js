import styled from 'styled-components'
import Palette from '../Palette'

export const PaletteGrid = styled.div`
  max-width: ${p => p.theme.maxWidth}px;
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  align-items: center;
  justify-items: center;
  padding-bottom: 40px;
`

const PaletteList = ({ pathname, palettes }) => {
  return (
    <PaletteGrid>
      {palettes.map(palette => (
        <Palette key={palette.id} palette={palette} pathname={pathname} />
      ))}
    </PaletteGrid>
  )
}

export default PaletteList
