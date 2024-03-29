const { combineResolvers } = require('graphql-resolvers')
const { isAuthenticated, isAdmin } = require('../permissions')

module.exports = {
  signup: require('./signup'),
  signin: require('./signin'),
  signout: require('./signout'),
  sendForgotPasswordEmail: require('./sendForgotPasswordEmail'),
  forgotPasswordChange: require('./forgotPasswordChange'),
  updateUser: combineResolvers(isAuthenticated, require('./updateUser')),
  createPalette: combineResolvers(isAuthenticated, require('./createPalette')),
  likePalette: combineResolvers(isAuthenticated, require('./likePalette'))
}
