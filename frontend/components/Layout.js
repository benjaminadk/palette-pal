import { useState, useEffect, useRef } from 'react'
import { useQuery, useApolloClient } from '@apollo/react-hooks'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../config'
import { SEARCH_PALETTES_QUERY, perPage } from '../apollo/query/searchPalettes'
import { CURRENT_USER_QUERY } from '../apollo/query/currentUser'
import Header from './Header'
import Register from './Register'
import Confirm from './Confirm'

export const UserContext = React.createContext({
  user: null
})

export const PaletteContext = React.createContext({
  palettes: [],
  searchTerm: '',
  setSearchTerm: () => {},
  fetchPalettes: () => {},
  refetchPalettes: () => {},
  fetchMorePalettes: () => {}
})

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export const LayoutWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`

export const Main = styled.main`
  background: ${p => (p.pathname === '/' ? p.theme.white : p.theme.grey[2])};
  padding-top: ${p => (p.pathname === '/' ? '0px' : p.theme.headerHeight + 'px')};
`

const Layout = ({ pathname, children }) => {
  const client = useApolloClient()
  const { data, loading: userLoading, error } = useQuery(CURRENT_USER_QUERY)
  const [loading, setLoading] = useState(false)
  const [palettes, setPalettes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [first, setFirst] = useState(() => perPage)
  const [skip, setSkip] = useState(0)
  const [orderBy, setOrderBy] = useState('createdAt_DESC')
  const [ownerId, setOwnerId] = useState('')
  const [hasNextPage, setHasNextPage] = useState(true)
  const [showRegister, setShowRegister] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const prevSkip = usePrevious(skip)

  useEffect(() => {
    fetchPalettes()
  }, [])

  useEffect(() => {
    if (skip > prevSkip && hasNextPage) {
      fetchPalettes(true)
    }
  }, [skip])

  async function fetchPalettes(fetchMore = false) {
    await setLoading(true)
    const res = await client.query({
      query: SEARCH_PALETTES_QUERY,
      variables: { searchTerm, first, skip, orderBy, ownerId }
    })

    setHasNextPage(res.data.palettesConnection.pageInfo.hasNextPage)
    setPalettes(curr => (fetchMore ? [...curr, ...res.data.palettes] : res.data.palettes))
    setLoading(false)
  }

  async function refetchPalettes() {
    await setLoading(true)
    const res = await client.query({
      query: SEARCH_PALETTES_QUERY,
      variables: { searchTerm, first: perPage + skip, skip: 0, orderBy, ownerId },
      fetchPolicy: 'network-only'
    })

    setHasNextPage(res.data.palettesConnection.pageInfo.hasNextPage)
    setPalettes(res.data.palettes)
    setLoading(false)
  }

  function fetchMorePalettes() {
    setSkip(skip + perPage)
  }

  if (userLoading) return null
  const user = data.currentUser

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user }}>
        <PaletteContext.Provider
          value={{
            loading,
            palettes,
            searchTerm,
            setSearchTerm,
            fetchPalettes,
            refetchPalettes,
            fetchMorePalettes
          }}
        >
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
        </PaletteContext.Provider>
      </UserContext.Provider>
    </ThemeProvider>
  )
}

export default Layout
