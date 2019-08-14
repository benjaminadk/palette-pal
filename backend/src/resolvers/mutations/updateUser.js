const validate = require('../../utils/validate')

module.exports = async (_, args, { prisma, session }, info) => {
  validate('updateUser', args)

  const user = await prisma.updateUser({ where: { id: session.userId }, data: args.data })

  return {
    success: true,
    message: 'User updated',
    user
  }
}
