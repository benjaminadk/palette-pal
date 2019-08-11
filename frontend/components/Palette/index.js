import { UserContext } from '../Layout'
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

const Palette = ({ palette, pathname }) => {
  const { id, title, colors, names, totalLikes, likes, tags, owner, createdAt } = palette
  const allColors = colors.filter(color => color)

  return (
    <UserContext.Consumer>
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
            <PaletteAvatar src={owner.image} />
            <PaletteDate>{formatDistance(createdAt)}</PaletteDate>
          </PaletteBottom>
        </PaletteWrapper>
      )}
    </UserContext.Consumer>
  )
}

export default Palette
