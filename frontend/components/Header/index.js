import Router from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import { SIGNOUT_MUTATION } from '../../apollo/mutation/signout'
import { CURRENT_USER_QUERY } from '../../apollo/query/currentUser'
import { HeaderWrapper, InnerHeader, Logo, Navigation, Avatar } from './styles'

const Header = ({ pathname, user, setShowRegister }) => {
  const [signout] = useMutation(SIGNOUT_MUTATION)

  async function onSignout() {
    await signout({
      refetchQueries: [{ query: CURRENT_USER_QUERY }]
    })
  }

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
            <Avatar src={user.image} onClick={onSignout} />
          ) : (
            <li onClick={() => setShowRegister(true)}>Sign Up</li>
          )}
        </Navigation>
      </InnerHeader>
    </HeaderWrapper>
  )
}

export default Header
