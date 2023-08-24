import { APIModel } from '@routes/index'
import { Application } from 'express'
import { expressLoader } from './express-loader'
import { sequelizeLoader } from './sequelize-loader'
import { Sequelize } from 'sequelize'
import constants from '@shared/constants'

export = {
  init: async ({ expressApp, expressRoutes, sequelize }:
  { expressApp: Application, expressRoutes: APIModel[], sequelize: Sequelize }) => {
    await expressLoader(expressApp, expressRoutes)
    await sequelizeLoader(sequelize, constants.SYNC_DATABASE)
  }
}
