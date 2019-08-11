import { useRef, useState } from 'react'
import { PaletteContext } from '../components/Layout'
import Palette from '../components/Palette'
import PalettesSearch from '../components/PalettesSearch'
import styled from 'styled-components'

export const PalettesWrapper = styled.div`
  height: calc(100vh - ${p => p.theme.headerHeight}px);
  overflow: auto;
`

export const PalettesGrid = styled.div`
  max-width: ${p => p.theme.maxWidth}px;
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  align-items: center;
  justify-items: center;
  padding-bottom: 40px;
`

export const AutoReturn = styled.div.attrs(p => ({
  style: {
    display: p.show ? 'grid' : 'none'
  }
}))`
  position: absolute;
  bottom: 10px;
  right: calc(50% - 20px);
  width: 40px;
  height: 40px;
  align-items: center;
  justify-items: center;
  background: ${p => p.theme.white};
  color: ${p => p.theme.primary};
  border-radius: 50%;
  font-size: 20px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  user-select: none;
`

const Palettes = ({ pathname }) => {
  const [showAutoReturn, setShowAutoReturn] = useState(false)

  const search = useRef(null)

  function onScroll(e, fetchMorePalettes) {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
    if (scrollTop + clientHeight >= scrollHeight) {
      fetchMorePalettes()
    }

    setShowAutoReturn(scrollTop > 0)
  }

  function onAutoReturn() {
    search.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  }

  return (
    <PaletteContext.Consumer>
      {({ loading, palettes, fetchMorePalettes }) => (
        <PalettesWrapper onScroll={e => onScroll(e, fetchMorePalettes)}>
          <PalettesSearch searchRef={search} />
          <PalettesGrid>
            {palettes.map(palette => (
              <Palette key={palette.id} palette={palette} pathname={pathname} />
            ))}
          </PalettesGrid>
          <AutoReturn show={showAutoReturn} onClick={onAutoReturn}>
            {'\u2bc5'}
          </AutoReturn>
        </PalettesWrapper>
      )}
    </PaletteContext.Consumer>
  )
}

export default Palettes
