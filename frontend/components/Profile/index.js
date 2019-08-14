import { useState, useEffect, useRef } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { LIKED_PALETTES_QUERY, perPage } from '../../apollo/query/likedPalettes'
import { SEARCH_PALETTES_QUERY } from '../../apollo/query/searchPalettes'
import { SIGNOUT_MUTATION } from '../../apollo/mutation/signout'
import { CURRENT_USER_QUERY } from '../../apollo/query/currentUser'
import { UPDATE_USER_MUTATION } from '../../apollo/mutation/updateUser'
import { formatDate } from '../../lib/dateHelpers'
import usePrevious from '../../lib/usePrevious'
import ProfileMenu from '../ProfileMenu'
import PaletteList from '../PaletteList'
import TextInput from '../TextInput'

export const ProfileWrapper = styled.div`
  height: calc(100vh - ${p => p.theme.headerHeight}px);
  overflow-y: scroll;
`

export const UserProfileWrapper = styled.div`
  max-width: ${p => p.theme.maxWidth}px;
  margin: 20px auto 0;
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 20px;
`

export const UserProfileInner = styled.div`
  width: 400px;
  display: grid;
  background: ${p => p.theme.white};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  padding: 30px;
`

export const UserProfileItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  .label {
    margin-right: 10px;
  }

  input {
    margin-bottom: 0;
  }
`

export const UserProfileImage = styled.img`
  justify-self: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`

const UserProfile = ({ user }) => {
  const [updateUser] = useMutation(UPDATE_USER_MUTATION)

  const { id, createdAt, name, email, image } = user

  return (
    <UserProfileWrapper>
      <UserProfileInner>
        <UserProfileImage src={image} />
        <UserProfileItem>
          <span className='label'>Name: </span>
          <span>{name}</span>
        </UserProfileItem>
        <UserProfileItem>
          <span className='label'>Email: </span>
          <span>{email}</span>
        </UserProfileItem>
        <UserProfileItem>
          <span className='label'>Joined: </span>
          <span>{formatDate(createdAt)}</span>
        </UserProfileItem>
      </UserProfileInner>
    </UserProfileWrapper>
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
      const shouldSignout = confirm('Are you sure you want to sign out from Palette Pal?')
      if (shouldSignout) {
        await signout({ refetchQueries: [{ query: CURRENT_USER_QUERY }] })
        Router.push('/')
      }
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
        <UserProfile user={user} />
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

export default Profile
