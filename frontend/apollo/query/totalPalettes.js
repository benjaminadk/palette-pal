import gql from 'graphql-tag'

export const TOTAL_PALETTES_QUERY = gql`
  query TOTAL_PALETTES_QUERY {
    palettesConnection {
      edges {
        node {
          id
        }
      }
    }
  }
`