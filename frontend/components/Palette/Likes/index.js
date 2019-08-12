import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { AppContext } from '../../Layout'
import { LIKE_PALETTE_MUTATION } from '../../../apollo/mutation/likePalette'
import Svg from '../../Svg'
import { LikesWrapper } from './styles'

const Likes = ({ pathname, user, id, likes, totalLikes }) => {
  const [likePalette] = useMutation(LIKE_PALETTE_MUTATION)

  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const exists = likes.find(like => user && like.user.id === user.id)
    setIsLiked(!!exists)
  }, [likes])

  async function onClick(refetchPalettes) {
    if (pathname !== '/palettes') return
    if (!user) return

    await likePalette({
      variables: { paletteId: id }
    })
    await refetchPalettes()
  }

  return (
    <AppContext.Consumer>
      {({ refetchPalettes }) => (
        <LikesWrapper
          pathname={pathname}
          isLiked={isLiked}
          onClick={() => onClick(refetchPalettes)}
        >
          <Svg name='star' fill={isLiked ? 'gold' : '#B0B0B0'} />
          <div className='total'>{totalLikes}</div>
          <div className='direction'>{isLiked ? '\u2bc6' : '\u2bc5'}</div>
        </LikesWrapper>
      )}
    </AppContext.Consumer>
  )
}

export default Likes
