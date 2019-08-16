import styled from 'styled-components'
import Media from '../Media'

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 4;
  width: 100%;
  height: ${p => p.theme.headerHeight}px;
  background: ${p => (p.pathname === '/' ? `${p.theme.primary}40` : p.theme.primary)};
  user-select: none;
`

export const InnerHeader = styled.div`
  max-width: ${p => p.theme.maxWidth}px;
  height: 100%;
  display: grid;
  grid-template-columns: 150px 1fr 400px;
  margin: 0 auto;
  ${Media.phone`
    grid-template-columns: 50px 10px 1fr;
  `}
`

export const Logo = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 20px;
  color: ${p => p.theme.white};
  cursor: pointer;
`

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  list-style: none;
`

export const NavLink = styled.li`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  color: ${p => p.theme.white};
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
    fill: ${p => p.theme.white};
  }
  &:hover svg {
    fill: ${p => p.theme.grey[2]};
  }
`

export const TotalPalettesWrapper = styled.li`
  display: flex;
  align-items: center;
  color: ${p => p.theme.white};
  cursor: pointer;
  &:hover {
    color: ${p => p.theme.grey[2]};
  }
  &:hover .total {
    background: ${p => p.theme.grey[2]};
  }
  .total {
    background: ${p => p.theme.white};
    color: ${p => p.theme.primary};
    border-radius: 10px;
    font-family: ${p => p.theme.fontBold};
    font-size: 12px;
    margin-left: 5px;
    padding: 0 5px;
  }
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
`
