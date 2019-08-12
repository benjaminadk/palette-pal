const validate = require('../../utils/validate')
const ntc = require('../../utils/ntc')

module.exports = async (_, args, { prisma, session }, info) => {
  // validate title and colors
  validate('palette', args)

  // use `name that color` to find shade and name of color hex code
  const colors = args.colors
  const shades = []
  const names = []
  const tags = []

  for (const color of colors) {
    const ntcData = ntc.name(color)
    shades.push(ntcData[3])
    names.push(ntcData[1])
  }

  // add shade of first color to tags
  tags.push({
    text: shades[0]
  })

  // add any other shades that appear more than once to tags
  for (const shade of shades) {
    if (shades.filter(s => s && s === shade).length > 1) {
      if (!tags.find(tag => tag.text === shade)) {
        tags.push({
          text: shade
        })
      }
    }
  }

  // create new palette
  // connect palette to user who created it
  // create and connect palette to tags so tags can be used in search
  // convert hex code to uppercase
  const palette = await prisma.createPalette({
    title: args.title,
    colors: {
      set: colors.map(color => color.toUpperCase())
    },
    names: {
      set: names
    },
    totalLikes: 0,
    owner: {
      connect: {
        id: session.userId
      }
    },
    tags: {
      create: [...tags]
    }
  })

  // return payload
  return {
    success: true,
    message: 'Palette created',
    palette
  }
}
