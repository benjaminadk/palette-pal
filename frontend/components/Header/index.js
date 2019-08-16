import Router from 'next/router'
import Svg from '../Svg'
import TotalPalettes from './TotalPalettes'
import UserRegister from './UserRegister'
import { HeaderWrapper, InnerHeader, Logo, Navigation, NavLink, Avatar } from './styles'

const Header = ({ pathname, user, setShowRegister }) => {
  return (
    <HeaderWrapper pathname={pathname}>
      <InnerHeader>
        <Logo onClick={() => Router.push('/')}>Palette Pal</Logo>
        <div />
        <Navigation>
          <TotalPalettes />
          <NavLink onClick={user ? () => Router.push('/create') : () => setShowRegister(true)}>
            <Svg name='add' />
          </NavLink>
          <UserRegister
            user={user}
            onAvatarClick={() => Router.push('/profile')}
            onSignupClick={() => setShowRegister(true)}
          />
        </Navigation>
      </InnerHeader>
    </HeaderWrapper>
  )
}

export default Header
