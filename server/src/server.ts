import 'reflect-metadata'
import 'source-map-support/register'
import 'module-alias/register'

import express from 'express'
import loaders from './loaders'
import api from './routes'
import sequelizeInstance from '@shared/database-config'

void startServer()

async function startServer (): Promise<void> {
  const app = express()

  try {
    await loaders.init({
      expressApp: app,
      expressRoutes: api(),
      sequelize: sequelizeInstance
    })
    app.listen(4500, () => console.log('Server is running on port: 4500'))
  } catch (error) {
    console.log(error)
  }
}
