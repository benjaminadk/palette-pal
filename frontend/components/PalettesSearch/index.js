import styled from 'styled-components'
import { PaletteContext } from '../Layout'
import TextInput from '../TextInput'
import RadioButtons from './RadioButtons'

export const PalettesSearchWrapper = styled.div`
  max-width: ${p => p.theme.maxWidth}px;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 20px auto 0;
`

export const SearchInterface = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  background: ${p => p.theme.white};
  padding: 20px;
  input {
    margin-bottom: 0;
  }
`

const PalettesSearch = ({ searchRef }) => {
  return (
    <PaletteContext.Consumer>
      {({ searchTerm, onSearchTermChange }) => (
        <PalettesSearchWrapper ref={searchRef}>
          <SearchInterface>
            <TextInput
              type='text'
              placeholder='Search'
              value={searchTerm}
              onChange={onSearchTermChange}
            />
            <RadioButtons />
          </SearchInterface>
        </PalettesSearchWrapper>
      )}
    </PaletteContext.Consumer>
  )
}

export default PalettesSearch
