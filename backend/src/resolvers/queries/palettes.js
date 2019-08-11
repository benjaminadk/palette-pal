const PaletteWithRelations = require('../fragments/PaletteWithRelations')

module.exports = async (_, args, ctx, info) =>
  await ctx.prisma.palettes({ ...args }).$fragment(PaletteWithRelations)
