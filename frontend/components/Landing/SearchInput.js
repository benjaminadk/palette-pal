import styled from 'styled-components'
import Router from 'next/router'
import { AppContext } from '../Layout'
import TextInput from '../TextInput'

export const SearchInputWrapper = styled.form`
  display: flex;
  align-items: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
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
    <AppContext.Consumer>
      {({ searchTerm, setSearchTerm, fetchPalettes }) => (
        <SearchInputWrapper onSubmit={e => onSubmit(e, fetchPalettes)}>
          <TextInput
            type='text'
            placeholder={`Try searching for a color -> "blue" or a palette name -> "google"`}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button type='submit'>Search</button>
        </SearchInputWrapper>
      )}
    </AppContext.Consumer>
  )
}

export default SearchInput
