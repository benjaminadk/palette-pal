const UserWithRelations = require('../fragments/UserWithRelations')
const PaletteWithRelations = require('../fragments/PaletteWithRelations')

module.exports = async (_, args, { prisma, session }, info) => {
  const user = await prisma.user({ id: session.userId }).$fragment(UserWithRelations)
  // check to see if user has already liked palette
  const alreadyLiked = user.likes.find(like => like.palette.id === args.paletteId)

  // if already liked delete like
  // otherwise create new like for palette and user
  // hack around to keep track of totalLikes property - need to change orderBy
  const palettes = await prisma
    .palettes({ where: { id: args.paletteId } })
    .$fragment(PaletteWithRelations)

  const total = palettes[0].likes.length

  let like
  let message
  if (alreadyLiked) {
    message = 'like deleted'
    like = await prisma.deleteLike({ id: alreadyLiked.id })
    await prisma.updatePalette({
      where: { id: args.paletteId },
      data: { totalLikes: total - 1 }
    })
  } else {
    message = 'like created'
    like = await prisma.createLike({
      palette: { connect: { id: args.paletteId } },
      user: { connect: { id: user.id } }
    })
    await prisma.updatePalette({
      where: { id: args.paletteId },
      data: { totalLikes: total + 1 }
    })
  }

  return {
    success: true,
    message,
    like
  }
}
