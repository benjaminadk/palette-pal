import { useState, useEffect, useRef } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import { AppContext } from '../components/Layout'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { LIKED_PALETTES_QUERY, perPage } from '../apollo/query/likedPalettes'
import { SEARCH_PALETTES_QUERY } from '../apollo/query/searchPalettes'
import { SIGNOUT_MUTATION } from '../apollo/mutation/signout'
import { CURRENT_USER_QUERY } from '../apollo/query/currentUser'
import usePrevious from '../lib/usePrevious'
import ProfileMenu from '../components/ProfileMenu'
import PaletteList from '../components/PaletteList'

export const ProfileWrapper = styled.div`
  height: calc(100vh - ${p => p.theme.headerHeight}px);
  overflow-y: scroll;
`

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

const Profile = ({ pathname, user }) => {
  const client = useApolloClient()
  const [signout] = useMutation(SIGNOUT_MUTATION)

  const [loading, setLoading] = useState(false)
  const [palettes, setPalettes] = useState([])
  const [skip, setSkip] = useState(0)
  const [hasNextPage, setHasNextPage] = useState(true)

  const [menuIndex, setMenuIndex] = useState(0)
  const [showAutoReturn, setShowAutoReturn] = useState(false)

  const menu = useRef()

  const prevSkip = usePrevious(skip)

  useEffect(() => {
    if ([1, 2].includes(menuIndex)) {
      setSkip(0)
      fetchPalettes()
    }
  }, [menuIndex])

  useEffect(() => {
    if (skip > prevSkip && hasNextPage) {
      fetchPalettes(false, true)
    }
  }, [skip])

  async function onMenuItemClick(i) {
    if (i === 3) {
      await signout({ refetchQueries: [{ query: CURRENT_USER_QUERY }] })
      Router.push('/')
    } else {
      setMenuIndex(i)
    }
  }

  async function fetchPalettes(initial = true, fetchMore = false) {
    const query = menuIndex === 2 ? LIKED_PALETTES_QUERY : SEARCH_PALETTES_QUERY
    const variables = Object.assign(menuIndex === 2 ? { userId: user.id } : { ownerId: user.id }, {
      first: perPage,
      skip: initial ? 0 : skip
    })
    await setLoading(false)
    const res = await client.query({ query, variables })
    setHasNextPage(res.data.palettesConnection.pageInfo.hasNextPage)
    setPalettes(curr => (fetchMore ? [...curr, ...res.data.palettes] : res.data.palettes))
    setLoading(false)
  }

  function onScroll(e) {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
    if (scrollTop + clientHeight >= scrollHeight) {
      setSkip(skip + perPage)
    }
    setShowAutoReturn(scrollTop > 0)
  }

  function onAutoReturnClick() {
    menu.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  }

  return (
    <ProfileWrapper onScroll={onScroll}>
      <ProfileMenu menuRef={menu} menuIndex={menuIndex} onMenuItemClick={onMenuItemClick} />
      {menuIndex === 0 ? (
        <div>profile</div>
      ) : [1, 2].includes(menuIndex) ? (
        <PaletteList
          pathname={pathname}
          palettes={palettes}
          showAutoReturn={showAutoReturn}
          onAutoReturnClick={onAutoReturnClick}
        />
      ) : null}
    </ProfileWrapper>
  )
}
