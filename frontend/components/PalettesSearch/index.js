import styled from 'styled-components'

import { PaletteContext } from '../Layout'
import TextInput from '../TextInput'

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

export const RadioButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Radio = styled.div`
  display: flex;
  align-items: center;
  label {
    font-size: 12px;
  }
`

const options = [
  { name: 'Newest', value: 'createdAt_DESC' },
  { name: 'Popularity', value: 'totalLikes_DESC' }
]

const RadioButtons = () => {
  return (
    <PaletteContext.Consumer>
      {({ orderBy, setOrderBy }) => (
        <RadioButtonsWrapper>
          {options.map(option => (
            <Radio key={option.name}>
              <input
                type='radio'
                checked={option.value === orderBy}
                value={option.value}
                onChange={e => setOrderBy(e.target.value)}
              />
              <label>{option.name}</label>
            </Radio>
          ))}
        </RadioButtonsWrapper>
      )}
    </PaletteContext.Consumer>
  )
}

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
