import styled from 'styled-components'
import { AppContext } from '../components/Layout'
import { useMutation } from '@apollo/react-hooks'
import { SIGNOUT_MUTATION } from '../apollo/mutation/signout'
import { CURRENT_USER_QUERY } from '../apollo/query/currentUser'

export const ProfileWrapper = styled.div`
  height: calc(100vh - ${p => p.theme.headerHeight}px);
`

export default props => {
  return (
    <AppContext.Consumer>
      {({ user, setShowRegister, setShowConfirm }) => {
        if (!user) if (!user) return setShowRegister(true)
        if (!user.confirmed) return setShowConfirm(true)

        return <ProfileWrapper>profile</ProfileWrapper>
      }}
    </AppContext.Consumer>
  )
}
