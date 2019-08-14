import gql from 'graphql-tag'

export const perPage = 12

export const LIKED_PALETTES_QUERY = gql`
  query LIKED_PALETTES_QUERY($userId: ID!, $first: Int = ${perPage}, $skip: Int = 0, $orderBy:  PaletteOrderByInput = createdAt_DESC) {
    palettes(where: { likes_some: { user: { id: $userId } } }, first: $first, skip: $skip, orderBy: $orderBy) {
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
    palettesConnection(where: { likes_some: { user: { id: $userId } } }, first: $first, skip: $skip, orderBy: $orderBy) {
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`
