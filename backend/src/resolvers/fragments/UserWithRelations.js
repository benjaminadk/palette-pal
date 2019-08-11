module.exports = `
  fragment UserWithRelations on User {
    id
    twitterId
    createdAt
    name
    email
    image
    confirmed
    forgotPasswordLock
    palettes {
      id
    }
    likes {
      id
    }
  }
`
