import styled from 'styled-components'
import Router from 'next/router'
import { PaletteContext } from '../Layout'
import TextInput from '../TextInput'

export const SearchInputWrapper = styled.form`
  display: flex;
  align-items: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  input {
    margin-bottom: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  button {
    background: ${p => p.theme.primary};
    color: ${p => p.theme.white};
    border: 0;
    border-radius: 2px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    outline: 0;
    font-family: ${p => p.theme.fontRegular};
    font-size: 14px;
    padding: 12px 24px;
    cursor: pointer;
  }
`

const SearchInput = () => {
  async function onSubmit(e, fetchPalettes) {
    e.preventDefault()
    await fetchPalettes()
    Router.push('/palettes')
  }

  return (
    <PaletteContext.Consumer>
      {({ searchTerm, setSearchTerm, fetchPalettes }) => (
        <SearchInputWrapper onSubmit={e => onSubmit(e, fetchPalettes)}>
          <TextInput
            type='text'
            placeholder='Welcome to the final frontier of color palettes'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button type='submit'>Search</button>
        </SearchInputWrapper>
      )}
    </PaletteContext.Consumer>
  )
}

export default SearchInput
