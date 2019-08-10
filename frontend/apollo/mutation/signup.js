import gql from 'graphql-tag'

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($agree: Boolean!, $name: String!, $email: String!, $password: String!) {
    signup(agree: $agree, name: $name, email: $email, password: $password) {
      success
      message
      user {
        id
      }
    }
  }
`
