import { AppContext } from '../Layout'
import TextInput from '../TextInput'
import RadioButtons from './RadioButtons'
import { PaletteSearchWrapper, SearchInterface } from './styles'

const PalettesSearch = ({ searchRef }) => {
  return (
    <AppContext.Consumer>
      {({ searchTerm, onSearchTermChange }) => (
        <PaletteSearchWrapper ref={searchRef}>
          <SearchInterface>
            <TextInput
              type='text'
              placeholder='Search'
              value={searchTerm}
              onChange={onSearchTermChange}
            />
            <RadioButtons />
          </SearchInterface>
        </PaletteSearchWrapper>
      )}
    </AppContext.Consumer>
  )
}

export default PalettesSearch
