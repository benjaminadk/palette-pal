import { useQuery } from '@apollo/react-hooks'
import { PALETTE_QUERY } from '../apollo/query/palette'
import { formatDistance } from '../lib/dateHelpers'
import { AppContext } from '../components/Layout'
import Color from '../components/Palette/Color'
import Likes from '../components/Palette/Likes'
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
  return (
    <AppContext.Consumer>
      {({ user }) => (
        <BigPaletteWrapper>
          <BigPalette>
            <BigPaletteTitle>{title}</BigPaletteTitle>
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
              <div />
              <BigPaletteDate>{formatDistance(createdAt)}</BigPaletteDate>
            </BigPaletteBottom>
          </BigPalette>
        </BigPaletteWrapper>
      )}
    </AppContext.Consumer>
  )
}
