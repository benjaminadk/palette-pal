import { AppContext } from '../components/Layout'
import CreatePalette from '../components/CreatePalette'

export default props => {
  return (
    <AppContext.Consumer>
      {({ user, setShowConfirm, setShowRegister, refetchPalettes }) => {
        if (!user) return setShowRegister(true)
        if (!user.confirmed) return setShowConfirm(true)
        return <CreatePalette refetchPalettes={refetchPalettes} />
      }}
    </AppContext.Consumer>
  )
}
