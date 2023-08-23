import { APIModel } from '@routes/index'
import { Application } from 'express'
import { expressLoader } from './express-loader'

export = {
  init: async (expressApp: Application, expressRoutes: APIModel[]) => {
    await expressLoader(expressApp, expressRoutes)
  }
}
