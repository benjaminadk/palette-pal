import { AppContext } from '../components/Layout'
import Profile from '../components/Profile'

export default ({ pathname }) => {
  return (
    <AppContext.Consumer>
      {({ user, setShowRegister, setShowConfirm }) => {
        if (!user) if (!user) return setShowRegister(true)
        if (!user.confirmed) return setShowConfirm(true)

        return <Profile pathname={pathname} user={user} />
      }}
    </AppContext.Consumer>
  )
}
