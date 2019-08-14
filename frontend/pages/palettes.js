import { useRef, useState } from 'react'
import { AppContext } from '../components/Layout'
import PaletteSearch from '../components/PaletteSearch'
import PaletteList from '../components/PaletteList'
import styled from 'styled-components'

export const PalettesWrapper = styled.div`
  height: calc(100vh - ${p => p.theme.headerHeight}px);
  overflow: auto;
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

  function onAutoReturnClick() {
    search.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  }

  return (
    <AppContext.Consumer>
      {({ loading, palettes, onAvatarClick, fetchMorePalettes }) => (
        <PalettesWrapper onScroll={e => onScroll(e, fetchMorePalettes)}>
          <PaletteSearch searchRef={search} />
          <PaletteList
            pathname={pathname}
            palettes={palettes}
            showAutoReturn={showAutoReturn}
            onAvatarClick={onAvatarClick}
            onAutoReturnClick={onAutoReturnClick}
          />
        </PalettesWrapper>
      )}
    </AppContext.Consumer>
  )
}

export default Palettes
