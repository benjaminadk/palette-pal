import { AppContext } from '../Layout'
import { formatDistance } from '../../lib/dateHelpers'
import Color from './Color'
import Likes from './Likes'
import {
  PaletteWrapper,
  PaletteTitle,
  PaletteColors,
  PaletteBottom,
  PaletteAvatar,
  PaletteDate
} from './styles'

const Palette = ({ palette, pathname, onAvatarClick }) => {
  const { id, title, colors, names, totalLikes, likes, tags, owner, createdAt } = palette
  const allColors = colors.filter(color => color)

  return (
    <AppContext.Consumer>
      {({ user }) => (
        <PaletteWrapper>
          <PaletteTitle>{title.toUpperCase()}</PaletteTitle>
          <PaletteColors>
            {allColors.map((color, i) => (
              <Color
                key={i}
                index={i}
                pathname={pathname}
                color={color}
                name={names[i]}
                totalColors={allColors.length}
              />
            ))}
          </PaletteColors>
          <PaletteBottom>
            <Likes pathname={pathname} user={user} id={id} likes={likes} totalLikes={totalLikes} />
            <PaletteAvatar src={owner.image} onClick={() => onAvatarClick(owner.name)} />
            <PaletteDate>{formatDistance(createdAt)}</PaletteDate>
          </PaletteBottom>
        </PaletteWrapper>
      )}
    </AppContext.Consumer>
  )
}

export default Palette
