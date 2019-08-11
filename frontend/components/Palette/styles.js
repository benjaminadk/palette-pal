import styled from 'styled-components'

export const PaletteWrapper = styled.div`
  width: 300px;
  height: 400px;
  display: grid;
  grid-template-rows: 10% 75% 15%;
  background: ${p => p.theme.white};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
`

export const PaletteTitle = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  background: ${p => p.theme.white};
  color: ${p => p.theme.grey[12]};
  font-family: ${p => p.theme.fontBold};
  font-size: 16px;
`

export const PaletteColors = styled.div`
  justify-self: center;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const PaletteBottom = styled.div`
  justify-self: center;
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`

export const PaletteAvatar = styled.img`
  justify-self: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`

export const PaletteDate = styled.div`
  justify-self: flex-end;
  font-family: ${p => p.theme.fontBold};
  font-size: 11px;
  color: ${p => p.theme.grey[5]};
  padding-right: 10px;
`
