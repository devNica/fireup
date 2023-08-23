import express from 'express'
import loaders from './loaders'
import api from './routes'

void startServer()

async function startServer (): Promise<void> {
  const app = express()

  try {
    await loaders.init(app, api())
    app.listen(4500, () => console.log('Server is running on port: 4500'))
  } catch (error) {
    console.log(error)
  }
}
