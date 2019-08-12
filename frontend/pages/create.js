import styled from 'styled-components'
import { AppContext } from '../components/Layout'

export const CreateWrapper = styled.div`
  height: calc(100vh - ${p => p.theme.headerHeight}px);
`

export default props => {
  return (
    <AppContext.Consumer>
      {({ user, setShowConfirm, setShowRegister }) => {
        if (!user) return setShowRegister(true)
        if (!user.confirmed) return setShowConfirm(true)
        return <CreateWrapper>d</CreateWrapper>
      }}
    </AppContext.Consumer>
  )
}
