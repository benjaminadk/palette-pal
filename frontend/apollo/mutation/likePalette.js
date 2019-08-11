import gql from 'graphql-tag'

export const LIKE_PALETTE_MUTATION = gql`
  mutation LIKE_PALETTE_MUTATION($paletteId: ID!) {
    likePalette(paletteId: $paletteId) {
      success
      message
      like {
        id
      }
    }
  }
`
