module.exports = `
  fragment PaletteWithTagsAndOwner on Palette {
    id
    createdAt
    title
    colors
    names
    likes
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
