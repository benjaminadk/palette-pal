import gql from 'graphql-tag'

export const PALETTE_QUERY = gql`
  query PALETTE_QUERY($id: ID!) {
    palette(id: $id) {
      id
      createdAt
      title
      colors
      names
      totalLikes
      likes {
        id
        user {
          id
        }
      }
      tags {
        id
        text
      }
      owner {
        id
        name
        image
      }
    }
  }
`
