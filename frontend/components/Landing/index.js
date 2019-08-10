import AmbientBackground from './AmbientBackground'
import QuadraticCurve from './QuadraticCurve'
import TextInput from '../TextInput'
import { LandingWrapper, InnerWrapper, Welcome } from './styles'
import styled from 'styled-components'

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
  return (
    <SearchInputWrapper>
      <TextInput type='text' placeholder='Welcome to the final frontier of color palettes' />
      <button type='submit'>Search</button>
    </SearchInputWrapper>
  )
}

const Landing = () => (
  <LandingWrapper>
    <AmbientBackground />
    <InnerWrapper>
      <Welcome>
        <h1>Palette Pal</h1>
        <p>An open source - source of color</p>
        <SearchInput />
      </Welcome>
      <QuadraticCurve />
    </InnerWrapper>
  </LandingWrapper>
)

export default Landing
