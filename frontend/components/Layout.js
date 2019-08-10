import styled, { ThemeProvider } from 'styled-components'
import User from './User'
import Header from './Header'
import Register from './Register'
import Confirm from './Confirm'
import { theme } from '../config'

export const UserContext = React.createContext({
  user: null,
  toggleShowRegister: () => {}
})

class Layout extends React.Component {
  state = {
    showRegister: false,
    showConfirm: false
  }

  toggleShowRegister = showRegister => this.setState({ showRegister })

  toggleShowConfirm = showConfirm => this.setState({ showConfirm })

  render() {
    return (
      <ThemeProvider theme={theme}>
        <User>
          {({ data, loading, error }) => {
            if (loading) return <div>loading...</div>
            const user = data ? data.currentUser : null

            return (
              <UserContext.Provider value={{ user, toggleShowRegister: this.toggleShowRegister }}>
                <>
                  <Header />
                  <main>{this.props.children}</main>
                  <footer>footer</footer>
                  <Register
                    show={this.state.showRegister}
                    toggleShowRegister={this.toggleShowRegister}
                    toggleShowConfirm={this.toggleShowConfirm}
                  />
                  <Confirm show={this.state.showConfirm} />
                </>
              </UserContext.Provider>
            )
          }}
        </User>
      </ThemeProvider>
    )
  }
}

export default Layout
