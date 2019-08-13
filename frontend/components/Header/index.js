import Router from 'next/router'
import { HeaderWrapper, InnerHeader, Logo, Navigation, Avatar } from './styles'

const Header = ({ pathname, user, setShowRegister }) => {
  return (
    <HeaderWrapper pathname={pathname}>
      <InnerHeader>
        <Logo onClick={() => Router.push('/')}>
          <img src='../static/mstile-70x70.png' />
        </Logo>
        <div />
        <Navigation>
          <li onClick={() => Router.push('/palettes')}>Palettes</li>
          <li onClick={user ? () => Router.push('/create') : () => setShowRegister(true)}>
            Create
          </li>
          <li onClick={() => Router.push('/about')}>About</li>
          {user ? (
            <Avatar src={user.image} onClick={() => Router.push('/profile')} />
          ) : (
            <li onClick={() => setShowRegister(true)}>Sign Up</li>
          )}
        </Navigation>
      </InnerHeader>
    </HeaderWrapper>
  )
}

export default Header
