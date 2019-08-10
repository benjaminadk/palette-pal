const PaletteWithTagsAndOwner = require('../fragments/PaletteWithTagsAndOwner')

module.exports = async (_, args, ctx, info) =>
  await ctx.prisma.palettes({ ...args }).$fragment(PaletteWithTagsAndOwner)
