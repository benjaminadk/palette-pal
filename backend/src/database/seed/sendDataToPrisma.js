const axios = require('axios')

module.exports = async data => {
  try {
    await axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PRISMA_TOKEN}`
      },
      url: `${process.env.PRISMA_ENDPOINT}/import`,
      data
    })
  } catch (error) {
    console.log(error.message)
  } finally {
    console.log(`${data.valueType} seeded`)
  }
}
