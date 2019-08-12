import gql from 'graphql-tag'

export const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      success
      message
    }
  }
`
