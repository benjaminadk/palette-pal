import styled from 'styled-components'
import { createGradient } from '../../lib/createGradient'

export const CreateWrapper = styled.div.attrs(p => ({
  style: {
    background: p.colors.length ? createGradient(p.colors, p.gradient, p.direction) : 'transparent'
  }
}))`
  height: calc(100vh - ${p => p.theme.headerHeight}px);
  display: grid;
  align-items: center;
  justify-items: center;
`

export const CreateForm = styled.div`
  width: 300px;
  height: 450px;
  display: grid;
  grid-template-rows: 15% 70% 15%;
  background: ${p => p.theme.white};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
`

export const CreateTitle = styled.div`
  justify-self: center;
  align-self: center;
  width: 90%;
  input {
    margin-bottom: 0;
  }
`

export const CreateColors = styled.div`
  justify-self: center;
  align-self: center;
  width: 90%;
  height: 94%;
  display: flex;
  flex-direction: column;
`

export const CreateBottom = styled.div`
  justify-self: center;
  align-self: center;
  width: 90%;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

export const CreateActions = styled.div`
  display: flex;
  svg {
    width: 16px;
    height: 16px;
    fill: ${p => p.theme.primary};
    margin-right: 4px;
  }
`

export const CreateButton = styled.button`
  justify-self: flex-end;
  width: 50px;
  height: 50px;
  background: ${p => p.theme.grey[1]};
  border: 0;
  border-radius: 2px;
  outline: 0;
  cursor: pointer;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  &:hover {
    background: ${p => p.theme.primary};
  }
  &:hover svg {
    fill: ${p => p.theme.white};
  }
  svg {
    width: 16px;
    height: 16px;
    fill: ${p => p.theme.primary};
  }
`
