import 'reflect-metadata'
import 'source-map-support/register'
import 'module-alias/register'

import { ExpressHttpServerAdapter } from '@core/adapters/primary/express/express-server-adapter'
import { SequelizeAdapter } from '@core/adapters/secondary/orm/sequelize/sequelize-adapter'
import constants from '@shared/constants'

void main()

async function main (): Promise<void> {
  const db = new SequelizeAdapter()

  db.connect()
    .then(() => console.log('database connected successfully'))
    .catch(error => console.log(error))

  db.syncModels(constants.SYNC_DATABASE)
    .then(() => console.log('synchronized database models'))
    .catch(error => console.log(error))

  const httpServer = new ExpressHttpServerAdapter(constants.SERVER_PORT)

  await httpServer.start()
}
