import { useRef, useState } from 'react'
import PaletteSearchBar from '../PaletteSearchBar'
import PaletteList from '../PaletteList'
import { PaletteSearchWrapper } from './styles'

const Palettes = ({ pathname, palettes, onAvatarClick, fetchMorePalettes }) => {
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
    <PaletteSearchWrapper onScroll={e => onScroll(e, fetchMorePalettes)}>
      <PaletteSearchBar searchRef={search} />
      <PaletteList
        pathname={pathname}
        palettes={palettes}
        showAutoReturn={showAutoReturn}
        onAvatarClick={onAvatarClick}
        onAutoReturnClick={onAutoReturnClick}
      />
    </PaletteSearchWrapper>
  )
}

export default Palettes
