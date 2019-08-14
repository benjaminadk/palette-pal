import { useState, useEffect } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import { AppContext } from '../components/Layout'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { LIKED_PALETTES_QUERY } from '../apollo/query/likedPalettes'
import { SEARCH_PALETTES_QUERY } from '../apollo/query/searchPalettes'
import { SIGNOUT_MUTATION } from '../apollo/mutation/signout'
import { CURRENT_USER_QUERY } from '../apollo/query/currentUser'
import PaletteList from '../components/PaletteList'

export const ProfileWrapper = styled.div`
  height: calc(100vh - ${p => p.theme.headerHeight}px);
  overflow-y: scroll;
`

export const ProfileMenuWrapper = styled.div`
  max-width: ${p => p.theme.maxWidth}px;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 20px auto 0;
  user-select: none;
`

export const ProfileMenu = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  background: ${p => p.theme.white};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`

export const ProfileMenuItem = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  background: ${p => (p.active ? p.theme.primary : 'none')};
  color: ${p => (p.active ? p.theme.white : p.theme.black)};
  padding: 20px;
  &:hover {
    background: ${p => (p.active ? p.theme.primary : p.theme.grey[0])};
  }
`

const tabs = ['Profile', 'Palettes', 'Likes', 'Signout']

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
  const [hasNextPage, setHasNextPage] = useState(true)
  const [menuIndex, setMenuIndex] = useState(0)

  useEffect(() => {
    if (menuIndex === 1) fetchOwnedPalettes()
    else if (menuIndex === 2) fetchLikedPalettes()
  }, [menuIndex])

  async function onMenuItemClick(i) {
    if (i === 3) {
      await signout({ refetchQueries: [{ query: CURRENT_USER_QUERY }] })
      Router.push('/')
    } else {
      setMenuIndex(i)
    }
  }

  async function fetchLikedPalettes(fetchMore = false) {
    await setLoading(true)
    const res = await client.query({
      query: LIKED_PALETTES_QUERY,
      variables: { userId: user.id }
    })

    setHasNextPage(res.data.palettesConnection.pageInfo.hasNextPage)
    setPalettes(curr => (fetchMore ? [...curr, ...res.data.palettes] : res.data.palettes))
    setLoading(false)
  }

  async function fetchOwnedPalettes(fetchMore = false) {
    await setLoading(true)
    const res = await client.query({
      query: SEARCH_PALETTES_QUERY,
      variables: { ownerId: user.id }
    })

    setHasNextPage(res.data.palettesConnection.pageInfo.hasNextPage)
    setPalettes(curr => (fetchMore ? [...curr, ...res.data.palettes] : res.data.palettes))
    setLoading(false)
  }

  return (
    <ProfileWrapper>
      <ProfileMenuWrapper>
        <ProfileMenu>
          {tabs.map((tab, i) => (
            <ProfileMenuItem key={tab} active={menuIndex === i} onClick={() => onMenuItemClick(i)}>
              {tab}
            </ProfileMenuItem>
          ))}
        </ProfileMenu>
      </ProfileMenuWrapper>
      {menuIndex === 0 ? (
        <div>profile</div>
      ) : menuIndex === 1 ? (
        <PaletteList pathname={pathname} palettes={palettes} />
      ) : menuIndex === 2 ? (
        <PaletteList pathname={pathname} palettes={palettes} />
      ) : null}
    </ProfileWrapper>
  )
}
