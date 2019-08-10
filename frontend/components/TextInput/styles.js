import styled from 'styled-components'

export const InputWrapper = styled.input.attrs(p => ({
  spellCheck: false
}))`
  display: block;
  width: 100%;
  background: ${p => p.theme.grey[1]};
  color: ${p => p.theme.grey[12]};
  border: 0;
  border-radius: 2px;
  outline: 0;
  font-family: ${p => p.theme.fontRegular};
  font-size: 14px;
  padding: 12px 6px;
  margin-bottom: 20px;
  &:focus {
    background: ${p => p.theme.grey[2]};
  }
  &::placeholder {
    color: ${p => p.theme.grey[7]};
  }
`
