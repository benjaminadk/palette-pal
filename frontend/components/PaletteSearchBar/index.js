import { AppContext } from '../Layout'
import TextInput from '../TextInput'
import RadioButtons from './RadioButtons'
import { PaletteSearchBarWrapper, SearchInterface } from './styles'

const PalettesSearch = ({ searchRef }) => {
  return (
    <AppContext.Consumer>
      {({ searchTerm, onSearchTermChange }) => (
        <PaletteSearchBarWrapper ref={searchRef}>
          <SearchInterface>
            <TextInput
              type='text'
              placeholder='Search'
              value={searchTerm}
              onChange={onSearchTermChange}
            />
            <RadioButtons />
          </SearchInterface>
        </PaletteSearchBarWrapper>
      )}
    </AppContext.Consumer>
  )
}

export default PalettesSearch
