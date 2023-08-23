import { Application } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import { APIModel } from '@routes/index'

export async function expressLoader (app: Application, routes: APIModel[]): Promise<void> {
  app.use(cors({ origin: '*' }))
  app.use(helmet())
  app.use(morgan('dev'))

  routes.forEach(route => {
    app.use(route.path, route.controller)
  })
}
