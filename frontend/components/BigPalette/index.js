import { useQuery } from '@apollo/react-hooks'
import { PALETTE_QUERY } from '../../apollo/query/palette'
import { formatDistance } from '../../lib/dateHelpers'
import { getColorHeight } from '../../lib/getColorHeight'
import { AppContext } from '../Layout'
import Color from '../Palette/Color'
import Likes from '../Palette/Likes'
import Svg from '../Svg'
import {
  BigPaletteWrapper,
  BigPaletteInner,
  BigPaletteTitle,
  BigPaletteTags,
  BigPaletteTag,
  BigPaletteColors,
  BigPaletteBottom,
  BigPaletteDate,
  BigPaletteDownload
} from './styles'

const BigPalette = ({ pathname, query: { id } }) => {
  const { data, loading } = useQuery(PALETTE_QUERY, { variables: { id } })

  if (loading) return null

  const { createdAt, title, colors, names, totalLikes, tags, likes } = data.palette
  const allColors = colors.filter(c => c)

  function onDownloadClick() {
    const url = createImage()
    const a = document.createElement('a')
    a.href = url
    a.download = `${title.trim().replace(/\s/g, '-')}.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  function createImage() {
    const canvasWidth = 600
    const canvasHeight = 600
    const canvas = document.createElement('canvas')
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    const ctx = canvas.getContext('2d')
    const total = allColors.length
    let point = 0
    for (let [i, color] of allColors.entries()) {
      let percent = parseInt(getColorHeight(total, i), 10) * 0.01
      let barHeight = Math.round(percent * canvasHeight)
      ctx.fillStyle = color
      ctx.fillRect(0, point, canvasWidth, barHeight)
      point += barHeight
    }
    const url = canvas.toDataURL()
    return url
  }

  return (
    <AppContext.Consumer>
      {({ user, onTagClick }) => (
        <BigPaletteWrapper colors={allColors}>
          <BigPaletteInner>
            <BigPaletteTitle>
              {title}
              <BigPaletteTags>
                {tags.map(tag => (
                  <BigPaletteTag key={tag.id} onClick={() => onTagClick(tag.text)}>
                    #{tag.text}
                  </BigPaletteTag>
                ))}
              </BigPaletteTags>
            </BigPaletteTitle>
            <BigPaletteColors>
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
            </BigPaletteColors>
            <BigPaletteBottom>
              <Likes
                pathname={pathname}
                user={user}
                id={id}
                likes={likes}
                totalLikes={totalLikes}
              />
              <BigPaletteDownload onClick={onDownloadClick}>
                <Svg name='download' />
              </BigPaletteDownload>
              <BigPaletteDate>{formatDistance(createdAt)}</BigPaletteDate>
            </BigPaletteBottom>
          </BigPaletteInner>
        </BigPaletteWrapper>
      )}
    </AppContext.Consumer>
  )
}

export default BigPalette
