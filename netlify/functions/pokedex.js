// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

import fetch from 'node-fetch'

const handler = async (event) => {
  try {
    console.log({ event })
    const region = JSON.parse(event.body).region
    const API = `https://pokeapi.co/api/v2/pokedex/${region}`
    const response = await fetch(API)
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

// module.exports = { handler }
export { handler }
