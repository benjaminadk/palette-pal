import { AppContext } from '../components/Layout'
import PaletteSearch from '../components/PaletteSearch'

export default ({ pathname }) => {
  return (
    <AppContext.Consumer>
      {({ loading, palettes, onAvatarClick, fetchMorePalettes }) => (
        <PaletteSearch
          pathname={pathname}
          palettes={palettes}
          onAvatarClick={onAvatarClick}
          fetchMorePalettes={fetchMorePalettes}
        />
      )}
    </AppContext.Consumer>
  )
}
