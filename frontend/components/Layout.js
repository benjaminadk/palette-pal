import { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../config'
import { SEARCH_PALETTES_QUERY, perPage } from '../apollo/query/searchPalettes'
import { CURRENT_USER_QUERY } from '../apollo/query/currentUser'

import Header from './Header'
import Register from './Register'
import Confirm from './Confirm'

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

// class Layout1 extends React.Component {
//   state = {
//     showRegister: false,
//     showConfirm: false,
//     palettes: [],
//     searchTerm: '',
//     first: perPage,
//     skip: 0,
//     orderBy: 'createdAt_DESC',
//     ownerId: '',
//     hasNextPage: true
//   }

//   componentDidMount() {
//     // this.fetchPalettes()
//   }

//   toggleShowRegister = showRegister => this.setState({ showRegister })

//   toggleShowConfirm = showConfirm => this.setState({ showConfirm })

//   // fetchPalettes = async () => {
//   //   const { searchTerm, first, skip, orderBy, ownerId } = this.state
//   //   const res = await this.props.client.query({
//   //     query: SEARCH_PALETTES_QUERY,
//   //     variables: {
//   //       searchTerm,
//   //       first,
//   //       skip,
//   //       orderBy,
//   //       ownerId
//   //     }
//   //   })
//   //   const { hasNextPage } = res.data.palettesConnection.pageInfo
//   //   this.setState({
//   //     hasNextPage,
//   //     palettes: [...this.state.palettes, ...res.data.palettes]
//   //   })
//   // }

//   // refetchPalettes = async () => {
//   //   const { searchTerm, skip, orderBy, ownerId } = this.state
//   //   const res = await this.props.client.query({
//   //     query: SEARCH_PALETTES_QUERY,
//   //     variables: {
//   //       term: searchTerm,
//   //       first: perPage + skip,
//   //       skip: 0,
//   //       orderBy,
//   //       ownerId
//   //     },
//   //     fetchPolicy: 'network-only'
//   //   })

//   //   this.setState({ palettes: res.data.palettes })
//   // }

//   render() {
//     return (
//       <ThemeProvider theme={theme}>
//         <User>
//           {({ data, loading, error }) => {
//             if (loading) return <div>loading...</div>
//             const user = data ? data.currentUser : null

//             return (
//               <UserContext.Provider value={{ user, toggleShowRegister: this.toggleShowRegister }}>
//                 <PaletteContext.Provider
//                   value={{ palettes: this.state.palettes, searchTerm: this.state.searchTerm }}
//                 >
//                   <LayoutWrapper>
//                     <Header pathname={this.props.pathname} />
//                     <Main pathname={this.props.pathname}>{this.props.children}</Main>
//                     <Register
//                       show={this.state.showRegister}
//                       toggleShowRegister={this.toggleShowRegister}
//                       toggleShowConfirm={this.toggleShowConfirm}
//                     />
//                     <Confirm show={this.state.showConfirm} />
//                   </LayoutWrapper>
//                 </PaletteContext.Provider>
//               </UserContext.Provider>
//             )
//           }}
//         </User>
//       </ThemeProvider>
//     )
//   }
// }

const Layout = ({ pathname, children }) => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)

  const [showRegister, setShowRegister] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  if (loading) return null
  const user = data.currentUser

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user }}>
        <LayoutWrapper>
          <Header pathname={pathname} user={user} setShowRegister={setShowRegister} />
          <Main pathname={pathname}>{children}</Main>
          <Register
            show={showRegister}
            setShowRegister={setShowRegister}
            setShowConfirm={setShowConfirm}
          />
          <Confirm show={showConfirm} />
        </LayoutWrapper>
      </UserContext.Provider>
    </ThemeProvider>
  )
}

export default Layout
