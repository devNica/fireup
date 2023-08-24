
import { setupAsyncErrors } from '@core/frameworks/express/setup-async-error'
import { setupGlobalMiddlewares } from '@core/frameworks/express/setup-global-middleware'
import { setupProxy } from '@core/frameworks/express/setup-proxy'
import { setupRoutes } from '@core/frameworks/express/setup-routes'
import { APIModel } from '@core/models/api/api-model'
import express, { Application } from 'express'

export class ExpressHttpServerAdapter {
  private readonly controllers: APIModel[] = []
  private readonly app: Application
  // private readonly router: Router

  constructor (
    private readonly serverPort: number
  ) {
    this.app = express()
    // this.router = Router()
  }

  private async addController (): Promise<void> {
    // const authController = await authenticationRouter(this.router)

  }

  public async start (): Promise<void> {
    await this.addController()
    await setupProxy(this.app)
    await setupGlobalMiddlewares(this.app)
    await setupRoutes(this.app, this.controllers)
    await setupAsyncErrors(this.app)
    this.app.listen(this.serverPort, () => console.log(`🚀 Server is running on port: ${String(this.serverPort)}`))
  }
}
