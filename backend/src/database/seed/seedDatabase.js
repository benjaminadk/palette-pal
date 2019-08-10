const sendDataToPrisma = require('./sendDataToPrisma')
const { createId, createUser, createPalettesData } = require('./helpers')

module.exports = async () => {
  // create admin user
  const admin = await createUser(true)

  // create a dummy user
  const user = await createUser(false)

  // generate data for n palettes
  const paletteData = createPalettesData(60)

  // palette nodes
  const palettes = paletteData.map((palette, i) => ({
    _typeName: 'Palette',
    id: palette.id,
    createdAt: palette.createdAt,
    title: palette.title,
    likes: palette.likes
  }))

  // palette color list
  const colors = paletteData.map((palette, i) => ({
    _typeName: 'Palette',
    id: palette.id,
    colors: palette.colors
  }))

  // palette names list
  const names = paletteData.map((palette, i) => ({
    _typeName: 'Palette',
    id: palette.id,
    names: palette.names
  }))

  // generate tag nodes and relate them to palette
  const relations = []
  const tags = []
  paletteData.forEach((palette, i) => {
    palette.tags.forEach(t => {
      let tag = {
        _typeName: 'Tag',
        id: createId(),
        text: t
      }
      tags.push(tag)
      const r1 = { _typeName: 'Palette', id: palettes[i].id, fieldName: 'tags' }
      const r2 = { _typeName: 'Tag', id: tag.id, fieldName: 'palette' }
      const relation = [r1, r2]
      relations.push(relation)
    })
  })

  // relate palettes to admin or dummy user
  palettes.forEach((palette, i) => {
    const r1 = { _typeName: 'Palette', id: palette.id, fieldName: 'owner' }
    const r2 = { _typeName: 'User', id: i % 2 === 0 ? admin.id : user.id, fieldName: 'palettes' }
    const relation = [r1, r2]
    relations.push(relation)
  })

  const nodes = [admin, user, ...palettes, ...tags]
  const lists = [...colors, ...names]

  const NODES = { valueType: 'nodes', values: nodes }
  const LISTS = { valueType: 'lists', values: lists }
  const RELATIONS = { valueType: 'relations', values: relations }

  await sendDataToPrisma(NODES)
  await sendDataToPrisma(LISTS)
  await sendDataToPrisma(RELATIONS)
}
