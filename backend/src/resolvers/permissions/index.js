const { AuthenticationError } = require('apollo-server-express')

const roles = ['ADMIN', 'USER']

const isAuthenticated = (module.exports = async (_, args, { req, prisma, session }, info) => {
  if (!req.sessionID) throw new AuthenticationError('UNAUTHORIZED ACTION')
  const user = await prisma.user({ id: session.userId })
  if (!user) throw new AuthenticationError('UNAUTHORIZED ACTION')
  if (!roles.includes(user.role)) throw new AuthenticationError('UNAUTHORIZED ACTION')
})

const isAdmin = (module.exports = async (_, args, { prisma, session }, info) => {
  if (!req.sessionID) throw new AuthenticationError('UNAUTHORIZED ACTION')
  const user = await prisma.user({ id: session.userId })
  if (user.role !== 'ADMIN') throw new AuthenticationError('UNAUTHORIZED ACTION')
})

module.exports = {
  isAuthenticated,
  isAdmin
}
