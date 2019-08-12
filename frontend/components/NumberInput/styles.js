import styled from 'styled-components'

export const NumberInputWrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  label {
    font-family: ${p => p.theme.fontMono};
    font-size: 11px;
    margin-right: 5px;
  }
  input {
    text-align: center;
    width: 60%;
    background: ${p => p.theme.grey[1]};
    border: 0;
    border-radius: 2px;
    outline: 0;
    font-family: ${p => p.theme.fontMono};
    font-size: 10px;
    padding: 4px 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    user-select: none;
    &:focus {
      background: ${p => p.theme.grey[2]};
    }
    &::selection {
      background: transparent;
    }
  }
`
