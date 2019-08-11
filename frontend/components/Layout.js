import styled, { ThemeProvider } from 'styled-components'
import { ApolloConsumer, withApollo } from 'react-apollo'
import { SEARCH_PALETTES_QUERY, perPage } from '../apollo/query/searchPalettes'
import User from './User'
import Header from './Header'
import Register from './Register'
import Confirm from './Confirm'
import { theme } from '../config'

export const UserContext = React.createContext({
  user: null,
  toggleShowRegister: () => {}
})

export const PaletteContext = React.createContext({
  palettes: [],
  searchTerm: ''
})

export const LayoutWrapper = styled.div``

export const Main = styled.main`
  background: ${p => (p.pathname === '/' ? p.theme.white : p.theme.grey[2])};
  padding-top: ${p => (p.pathname === '/' ? '0px' : p.theme.headerHeight + 'px')};
`

class Layout extends React.Component {
  state = {
    showRegister: false,
    showConfirm: false,
    palettes: [],
    searchTerm: '',
    first: perPage,
    skip: 0,
    orderBy: 'createdAt_DESC',
    ownerId: '',
    hasNextPage: true
  }

  componentDidMount() {
    this.fetchPalettes()
  }

  toggleShowRegister = showRegister => this.setState({ showRegister })

  toggleShowConfirm = showConfirm => this.setState({ showConfirm })

  fetchPalettes = async () => {
    const { searchTerm, first, skip, orderBy, ownerId } = this.state
    const res = await this.props.client.query({
      query: SEARCH_PALETTES_QUERY,
      variables: {
        searchTerm,
        first,
        skip,
        orderBy,
        ownerId
      }
    })
    const { hasNextPage } = res.data.palettesConnection.pageInfo
    this.setState({
      hasNextPage,
      palettes: [...this.state.palettes, ...res.data.palettes]
    })
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <User>
          {({ data, loading, error }) => {
            if (loading) return <div>loading...</div>
            const user = data ? data.currentUser : null

            return (
              <UserContext.Provider value={{ user, toggleShowRegister: this.toggleShowRegister }}>
                <PaletteContext.Provider
                  value={{ palettes: this.state.palettes, searchTerm: this.state.searchTerm }}
                >
                  <LayoutWrapper>
                    <Header pathname={this.props.pathname} />
                    <Main pathname={this.props.pathname}>{this.props.children}</Main>
                    <Register
                      show={this.state.showRegister}
                      toggleShowRegister={this.toggleShowRegister}
                      toggleShowConfirm={this.toggleShowConfirm}
                    />
                    <Confirm show={this.state.showConfirm} />
                  </LayoutWrapper>
                </PaletteContext.Provider>
              </UserContext.Provider>
            )
          }}
        </User>
      </ThemeProvider>
    )
  }
}

export default withApollo(Layout)
