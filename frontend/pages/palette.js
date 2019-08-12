import { useQuery } from '@apollo/react-hooks'
import { PALETTE_QUERY } from '../apollo/query/palette'
import { formatDistance } from '../lib/dateHelpers'
import { getColorHeight } from '../lib/getColorHeight'
import { AppContext } from '../components/Layout'
import Color from '../components/Palette/Color'
import Likes from '../components/Palette/Likes'
import Svg from '../components/Svg'
import styled from 'styled-components'

export const BigPaletteWrapper = styled.div`
  height: calc(100vh - ${p => p.theme.headerHeight}px);
  overflow: auto;
  display: grid;
  align-items: center;
  justify-items: center;
`

export const BigPalette = styled.div`
  width: 50%;
  height: 90%;
  display: grid;
  grid-template-rows: 12% 73% 15%;
  background: ${p => p.theme.white};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
`

export const BigPaletteTitle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  background: ${p => p.theme.white};
  color: ${p => p.theme.grey[12]};
  font-family: ${p => p.theme.fontBold};
  font-size: 20px;
`

export const BigPaletteTags = styled.div`
  position: absolute;
  top: 40%;
  right: 10%;
  display: flex;
`

export const Tag = styled.div`
  color: ${p => p.theme.grey[5]};
  font-family: ${p => p.theme.fontBold};
  font-size: 11px;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    color: ${p => p.theme.grey[10]};
  }
`

export const BigPaletteColors = styled.div`
  justify-self: center;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const BigPaletteBottom = styled.div`
  justify-self: center;
  width: 85%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`

export const BigPaletteDownload = styled.div`
  justify-self: center;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: ${p => p.theme.grey[5]};
  }
`

export const BigPaletteDate = styled.div`
  justify-self: flex-end;
  font-family: ${p => p.theme.fontBold};
  font-size: 11px;
  color: ${p => p.theme.grey[5]};
  padding-right: 10px;
`

export default ({ pathname, query: { id } }) => {
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
        <BigPaletteWrapper>
          <BigPalette>
            <BigPaletteTitle>
              {title}
              <BigPaletteTags>
                {tags.map(tag => (
                  <Tag key={tag.id} onClick={() => onTagClick(tag.text)}>
                    #{tag.text}
                  </Tag>
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
          </BigPalette>
        </BigPaletteWrapper>
      )}
    </AppContext.Consumer>
  )
}
