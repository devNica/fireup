import { MiddlewareExpressModel } from '@core/models/middlewares/express-middleware-model'

export interface MiddlewareExpressInputPort {
  handleRequest: (request: MiddlewareExpressModel) => Promise<void> | never
}
