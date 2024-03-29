import PropTypes from 'prop-types'
import Router from 'next/router'
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
  const { id, title, colors, names, totalLikes, likes, owner, createdAt } = palette
  const allColors = colors.filter(color => color)

  return (
    <AppContext.Consumer>
      {({ user }) => (
        <PaletteWrapper>
          <PaletteTitle>{title.toUpperCase()}</PaletteTitle>
          <PaletteColors onClick={() => Router.push({ pathname: '/palette', query: { id } })}>
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

Palette.propTypes = {
  palette: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    names: PropTypes.arrayOf(PropTypes.string),
    totalLikes: PropTypes.number,
    likes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        user: PropTypes.shape({
          id: PropTypes.string
        })
      })
    ),
    createdAt: PropTypes.string,
    owner: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string
    })
  }).isRequired,
  pathname: PropTypes.string.isRequired,
  onAvatarClick: PropTypes.func
}

export default Palette
