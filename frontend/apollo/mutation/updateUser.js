import gql from 'graphql-tag'

export const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION($data: UserUpdateInput) {
    updateUser(data: $data) {
      success
      message
      user {
        id
      }
    }
  }
`
