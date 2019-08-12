import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  label {
    font-family: ${p => p.theme.fontBold};
    font-size: 1.2rem;
    margin-left: 0.75rem;
    margin-right: 0.5rem;
  }
  input {
    text-align: center;
    width: 60%;
    font-family: monospace;
    font-family: ${p => p.theme.fontBold};
    font-size: 1rem;
    outline: 0;
  }
`
