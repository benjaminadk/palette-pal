import styled from 'styled-components'

export const ProfileMenuWrapper = styled.div`
  max-width: ${p => p.theme.maxWidth}px;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 20px auto 0;
  user-select: none;
`

export const Menu = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  background: ${p => p.theme.white};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`

export const MenuItem = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  background: ${p => (p.active ? p.theme.primary : 'none')};
  color: ${p => (p.active ? p.theme.white : p.theme.black)};
  padding: 20px;
  &:hover {
    background: ${p => (p.active ? p.theme.primary : p.theme.grey[0])};
  }
`
