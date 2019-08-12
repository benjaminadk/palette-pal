import { useState, useEffect, useRef } from 'react'
import { useQuery, useApolloClient } from '@apollo/react-hooks'
import Router from 'next/router'
import styled, { ThemeProvider } from 'styled-components'
import debounce from 'lodash.debounce'
import { THEME } from '../config'
import { SEARCH_PALETTES_QUERY, perPage } from '../apollo/query/searchPalettes'
import { CURRENT_USER_QUERY } from '../apollo/query/currentUser'
import Header from './Header'
import Register from './Register'
import Confirm from './Confirm'

export const AppContext = React.createContext({
  loading: true,
  user: null,
  palettes: [],
  searchTerm: '',
  orderBy: '',
  setShowConfirm: () => {},
  setShowRegister: () => {},
  setSearchTerm: () => {},
  onOrderByChange: () => {},
  onSearchTermChange: () => {},
  onAvatarClick: () => {},
  onTagClick: () => {},
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

const fetchPalettesDebounced = debounce(async fetchPalettes => {
  fetchPalettes()
}, 1000)

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

  async function onSearchTermChange(e) {
    setSearchTerm(e.target.value)
    fetchPalettesDebounced(fetchPalettes)
  }

  async function onOrderByChange(order) {
    await setOrderBy(order)
    await setSkip(0)
    await setFirst(perPage)
    await setLoading(true)
    const res = await client.query({
      query: SEARCH_PALETTES_QUERY,
      variables: { searchTerm, first: perPage, skip: 0, orderBy: order, ownerId }
    })

    setHasNextPage(res.data.palettesConnection.pageInfo.hasNextPage)
    setPalettes(res.data.palettes)
    setLoading(false)
  }

  async function onAvatarClick(username) {
    await setSearchTerm(username)
    await setLoading(true)
    const res = await client.query({
      query: SEARCH_PALETTES_QUERY,
      variables: { searchTerm: username, first: perPage, skip: 0, orderBy, ownerId }
    })
    setHasNextPage(res.data.palettesConnection.pageInfo.hasNextPage)
    setPalettes(res.data.palettes)
    setLoading(false)
  }

  async function onTagClick(tag) {
    await setSearchTerm(tag)
    await setLoading(true)
    const res = await client.query({
      query: SEARCH_PALETTES_QUERY,
      variables: { searchTerm: tag, first: perPage, skip: 0, orderBy, ownerId }
    })
    setHasNextPage(res.data.palettesConnection.pageInfo.hasNextPage)
    setPalettes(res.data.palettes)
    setLoading(false)
    Router.push('/palettes')
  }

  if (userLoading) return null
  const user = data.currentUser

  return (
    <ThemeProvider theme={THEME}>
      <AppContext.Provider
        value={{
          loading,
          user,
          palettes,
          searchTerm,
          orderBy,
          setShowRegister,
          setShowConfirm,
          setSearchTerm,
          onOrderByChange,
          onSearchTermChange,
          onAvatarClick,
          onTagClick,
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
      </AppContext.Provider>
    </ThemeProvider>
  )
}

export default Layout
