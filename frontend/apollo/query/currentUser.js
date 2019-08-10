import gql from 'graphql-tag'

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    currentUser {
      id
      createdAt
      name
      email
      image
      confirmed
      forgotPasswordLock
    }
  }
`
