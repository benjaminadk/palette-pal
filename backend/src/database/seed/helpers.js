const bcrypt = require('bcryptjs')
const md5 = require('md5')
const { subDays } = require('date-fns')
const { v1 } = require('uuid')
const nameThatColor = require('../../utils/ntc')

const createId = () => {
  return v1()
    .replace(/-/g, '')
    .slice(0, 25)
}

const createDateNow = () => new Date().toISOString()

const createDatePast = () => {
  const days = Math.floor(Math.random() * 365)
  return subDays(new Date(), days).toISOString()
}

const MAX = 0xffffff
const createHexColor = () => `#${('00000' + ((Math.random() * MAX) | 0).toString(16)).slice(-6)}`

const createColorTotal = () => Math.ceil(Math.random() * 3) + 3

const createEmptyArray = n => Array.from({ length: n }, () => '')

const createLikesTotal = n => Math.floor(Math.random() * n)

const createUser = async isAdmin => {
  if (isAdmin) {
    return {
      _typeName: 'User',
      id: createId(),
      createdAt: createDateNow(),
      name: 'Administrator',
      email: process.env.ADMIN_EMAIL,
      password: await bcrypt.hash(process.env.ADMIN_PASS, 10),
      image: `https://www.gravatar.com/avatar/${md5(process.env.ADMIN_EMAIL)}?d=mp`,
      confirmed: true,
      forgotPasswordLock: false,
      role: 'ADMIN'
    }
  } else {
    return {
      _typeName: 'User',
      id: createId(),
      createdAt: createDateNow(),
      name: 'example',
      email: 'example@gmail.com',
      password: await bcrypt.hash('password', 10),
      image: `https://www.gravatar.com/avatar/${md5('example@gmail.com')}?d=mp`,
      confirmed: true,
      forgotPasswordLock: false,
      role: 'USER'
    }
  }
}

const createPaletteData = () => {
  let totalColors = createColorTotal()
  let colors = createEmptyArray()
  let names = createEmptyArray()
  let shades = createEmptyArray()
  let tags = []

  for (let i = 0; i < totalColors; i++) {
    let color = createHexColor()
    let data = nameThatColor.name(color)
    colors[i] = color
    names[i] = data[1]
    shades[i] = data[3]
  }

  tags.push(shades[0])

  for (let shade of shades) {
    if (shade && shades.filter(s => s === shade).length > 1 && !tags.includes(shade)) {
      tags.push(shade)
    }
  }

  let id = createId()
  let createdAt = createDatePast()
  let title = names[0]
  let totalLikes = createLikesTotal(1000)
  return { id, createdAt, title, colors, names, tags, totalLikes }
}

const createPalettesData = n => Array.from({ length: n }, () => createPaletteData())

module.exports = {
  createId,
  createUser,
  createPalettesData
}
