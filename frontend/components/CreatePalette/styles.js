import styled from 'styled-components'

export const CreateWrapper = styled.div`
  height: calc(100vh - ${p => p.theme.headerHeight}px);
  display: grid;
  grid-template-rows: 80% 20%;
  align-items: center;
  justify-items: center;
`

export const CreateForm = styled.div`
  width: 300px;
  height: 400px;
  display: grid;
  grid-template-rows: 15% 85%;
  background: ${p => p.theme.white};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
`

export const CreateTitle = styled.div`
  justify-self: center;
  align-self: flex-end;
  width: 90%;
  input {
    margin-bottom: 0;
  }
`

export const CreateColors = styled.div`
  justify-self: center;
  align-self: center;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
`

export const CreateButton = styled.button`
  justify-self: center;
  align-self: flex-start;
  width: 300px;
  background: ${p => p.theme.primary};
  color: ${p => p.theme.white};
  border: 0;
  border-radius: 2px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  outline: 0;
  font-family: ${p => p.theme.fontRegular};
  font-size: 14px;
  padding: 12px 0;
  cursor: pointer;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
`
