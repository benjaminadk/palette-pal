import Router from 'next/router'
import { UserContext } from '../Layout'
import { HeaderWrapper, Logo, Navigation, Avatar } from './styles'

const Header = () => (
  <UserContext.Consumer>
    {({ user, toggleShowRegister }) => (
      <HeaderWrapper>
        <Logo onClick={() => Router.push('/')}>
          <img src='../static/mstile-70x70.png' />
        </Logo>
        <div />
        <Navigation>
          <li onClick={user ? () => Router.push('/create') : () => toggleShowRegister(true)}>
            Create
          </li>
          <li>About</li>
          {user ? (
            <Avatar src={user.image} onClick={() => Router.push('/profile')} />
          ) : (
            <li onClick={() => toggleShowRegister(true)}>Sign Up</li>
          )}
        </Navigation>
      </HeaderWrapper>
    )}
  </UserContext.Consumer>
)

export default Header
