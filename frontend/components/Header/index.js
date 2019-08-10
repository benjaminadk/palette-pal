import Router from 'next/router'
import { UserContext } from '../Layout'
import { HeaderWrapper, InnerHeader, Logo, Navigation, Avatar } from './styles'

const Header = () => (
  <UserContext.Consumer>
    {({ user, toggleShowRegister }) => (
      <HeaderWrapper>
        <InnerHeader>
          <Logo onClick={() => Router.push('/')}>
            <img src='../static/mstile-70x70.png' />
          </Logo>
          <div />
          <Navigation>
            <li onClick={() => Router.push('/palettes')}>Palettes</li>
            <li onClick={user ? () => Router.push('/create') : () => toggleShowRegister(true)}>
              Create
            </li>
            <li onClick={() => Router.push('/about')}>About</li>
            {user ? (
              <Avatar src={user.image} onClick={() => Router.push('/profile')} />
            ) : (
              <li onClick={() => toggleShowRegister(true)}>Sign Up</li>
            )}
          </Navigation>
        </InnerHeader>
      </HeaderWrapper>
    )}
  </UserContext.Consumer>
)

export default Header
