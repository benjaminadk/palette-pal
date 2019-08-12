const PaletteWithRelations = require('../fragments/PaletteWithRelations')

module.exports = async (_, args, { prisma }, info) => {
  return await prisma.palette({ id: args.id }).$fragment(PaletteWithRelations)
}
