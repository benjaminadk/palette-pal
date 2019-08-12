import gql from 'graphql-tag'

export const CREATE_PALETTE_MUTATION = gql`
  mutation CREATE_PALETTE_MUTATION($title: String!, $colors: [String!]) {
    createPalette(title: $title, colors: $colors) {
      success
      message
      palette {
        id
      }
    }
  }
`
