const { UserInputError } = require('apollo-server-express')

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const usernameLength = 3
const passwordLength = 8

module.exports = (mode, args) => {
  const inputErrors = {}
  if (mode === 'signup') {
    if (!args.name) throw new UserInputError('Name field is required')
    if (args.name.length < usernameLength)
      throw new UserInputError('Name must be 3 at least characters')
    if (!args.email) throw new UserInputError('Email field is required')
    if (!emailRegex.test(args.email)) throw new UserInputError('Invalid email address')
    if (!args.password) throw new UserInputError('Password field is required')
    if (args.password.length < passwordLength)
      throw new UserInputError('Password must be 8 at least characters')
    if (!args.agree) throw new UserInputError('You must agree to terms of service')
  } else if (mode === 'signin') {
    if (!args.email) throw new UserInputError('Email field is required')
    if (!emailRegex.test(args.email)) throw new UserInputError('Invalid email address')
    if (!args.password) throw new UserInputError('Password field is required')
    if (args.password.length < passwordLength)
      throw new UserInputError('Password must be at least 8 characters')
  } else if (mode === 'forgotPasswordChange') {
    if (!args.newPassword) throw new UserInputError('Password field is required')
    if (args.newPassword.length < passwordLength)
      throw new UserInputError('Password must be at least 8 characters')
  }
}
