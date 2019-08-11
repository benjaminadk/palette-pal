module.exports = `
  fragment PaletteWithRelations on Palette {
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
`
