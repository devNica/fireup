import { APIModel } from '@core/models/api/api-model'
import { Application } from 'express'

export async function setupRoutes (app: Application, api: APIModel[]): Promise<void> {
  api.forEach(route => {
    app.use(route.path, route.controller)
  })
}
