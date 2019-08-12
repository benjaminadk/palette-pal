module.exports = {
  Query: require('./queries'),
  Mutation: require('./mutations'),
  Payload: {
    __resolveType(obj, cxt, info) {
      if (obj.user) {
        return 'UserPayload'
      } else if (obj.palette) {
        return 'PalettePayload'
      } else if (obj.like) {
        return 'LikePayload'
      }
      return 'BasicPayload'
    }
  }
}
