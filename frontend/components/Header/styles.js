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
  grid-template-columns: 100px 1fr 400px;
  margin: 0 auto;
  ${Media.phone`
    grid-template-columns: 50px 10px 1fr;
  `}
`

export const Logo = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
  }
`

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  list-style: none;
  li {
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    cursor: pointer;
    svg {
      width: 30px;
      height: 30px;
      fill: ${p => p.theme.grey[2]};
    }
    &:hover svg {
      fill: ${p => p.theme.white};
    }
  }
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
`
