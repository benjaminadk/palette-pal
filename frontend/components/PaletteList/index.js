import Palette from '../Palette'
import { PaletteListWrapper, AutoReturn } from './styles'

const PaletteList = ({ pathname, palettes, showAutoReturn, onAvatarClick, onAutoReturnClick }) => {
  return (
    <>
      <PaletteListWrapper>
        {palettes.map(palette => (
          <Palette
            key={palette.id}
            palette={palette}
            pathname={pathname}
            onAvatarClick={onAvatarClick}
          />
        ))}
      </PaletteListWrapper>
      <AutoReturn show={showAutoReturn} onClick={onAutoReturnClick}>
        {'\u2bc5'}
      </AutoReturn>
    </>
  )
}

export default PaletteList
